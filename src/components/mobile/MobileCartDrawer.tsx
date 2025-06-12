import { useState } from 'react';
import { X, ShoppingBag, FileText, CreditCard, Plus, Minus, Trash2, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CheckoutForm } from '@/components/checkout/CheckoutForm';
import { cn } from '@/lib/utils';

interface CartItem {
  id: string;
  name: string;
  description: string;
  price: string;
  quantity: number;
  unitPrice: string;
  category?: string;
  selectedSize?: string;
  selectedOption?: string;
}

interface MobileCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
  couponCode?: string;
  couponDiscount?: number;
  specialInstructions?: string;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onApplyCoupon: (code: string) => boolean;
  onRemoveCoupon: () => void;
  onUpdateSpecialInstructions: (instructions: string) => void;
  onClearCart: () => void;
}

export const MobileCartDrawer = ({
  isOpen,
  onClose,
  items,
  subtotal,
  tax,
  total,
  couponCode,
  couponDiscount,
  specialInstructions,
  onUpdateQuantity,
  onRemoveItem,
  onApplyCoupon,
  onRemoveCoupon,
  onUpdateSpecialInstructions,
  onClearCart,
}: MobileCartDrawerProps) => {
  const [activeTab, setActiveTab] = useState<'items' | 'details' | 'checkout'>('items');
  const [couponInput, setCouponInput] = useState('');

  const handleApplyCoupon = () => {
    if (couponInput.trim()) {
      onApplyCoupon(couponInput.trim());
      setCouponInput('');
    }
  };

  const tabs = [
    { id: 'items' as const, label: 'Items', icon: ShoppingBag, count: items.length },
    { id: 'details' as const, label: 'Details', icon: FileText },
    { id: 'checkout' as const, label: 'Checkout', icon: CreditCard },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white rounded-t-2xl">
          <h2 className="text-xl font-bold text-gray-900">Your Order</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 bg-gray-50">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 py-3 px-4 text-sm font-medium transition-colors relative",
                activeTab === tab.id
                  ? "text-red-600 bg-white border-b-2 border-red-600"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              )}
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.label}</span>
              {tab.count !== undefined && (
                <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full ml-1">
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden">
          {activeTab === 'items' && (
            <div className="h-full overflow-y-auto p-4 space-y-3">
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingBag className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">Your cart is empty</p>
                  <p className="text-gray-400 text-sm">Add some delicious items to get started!</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1 pr-2">
                        <h3 className="font-semibold text-gray-900 text-sm leading-tight">{item.name}</h3>
                        {(item.selectedSize || item.selectedOption) && (
                          <p className="text-xs text-gray-600 mt-1">
                            {item.selectedSize && `Size: ${item.selectedSize}`}
                            {item.selectedSize && item.selectedOption && ' • '}
                            {item.selectedOption && `Option: ${item.selectedOption}`}
                          </p>
                        )}
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1 text-red-500 hover:bg-red-50 rounded transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                          className="p-1.5 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <span className="font-bold text-red-600">{item.price}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === 'details' && (
            <div className="h-full overflow-y-auto p-4 space-y-6">
              {/* Special Instructions */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Instructions
                </label>
                <Textarea
                  value={specialInstructions || ''}
                  onChange={(e) => onUpdateSpecialInstructions(e.target.value)}
                  placeholder="Any special requests or dietary restrictions..."
                  className="w-full h-24 resize-none text-sm"
                />
              </div>

              {/* Coupon Code */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Coupon Code
                </label>
                {couponCode ? (
                  <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <Tag className="h-4 w-4 text-green-600" />
                    <span className="flex-1 text-sm font-medium text-green-800">{couponCode}</span>
                    <span className="text-sm text-green-600">-${couponDiscount?.toFixed(2)}</span>
                    <button
                      onClick={onRemoveCoupon}
                      className="p-1 text-green-600 hover:bg-green-100 rounded transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <Input
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      placeholder="Enter coupon code"
                      className="flex-1 text-sm"
                    />
                    <Button
                      onClick={handleApplyCoupon}
                      variant="outline"
                      size="sm"
                      disabled={!couponInput.trim()}
                      className="border-red-600 text-red-600 hover:bg-red-50"
                    >
                      Apply
                    </Button>
                  </div>
                )}
              </div>

              {/* Order Summary */}
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <h3 className="font-semibold text-gray-900 mb-3">Order Summary</h3>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                {couponDiscount && couponDiscount > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-green-600">Discount ({couponCode})</span>
                    <span className="text-green-600">-${couponDiscount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax</span>
                  <span className="text-gray-900">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <div className="flex justify-between">
                    <span className="font-bold text-gray-900">Total</span>
                    <span className="font-bold text-red-600 text-lg">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'checkout' && (
            <div className="h-full overflow-y-auto p-4">
              <CheckoutForm
                items={items}
                subtotal={subtotal}
                tax={tax}
                total={total}
                discount={couponDiscount}
                couponCode={couponCode}
                specialInstructions={specialInstructions}
                onClearCart={() => {
                  onClearCart();
                  onClose();
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
