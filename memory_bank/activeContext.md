# Active Context: Stripe Integration + Re-order Feature Implementation

## Current Status: PRODUCTION READY + NEW FEATURE PLANNED ✅

### ✅ COMPLETED: Stripe Integration Re-Connected
**Status**: The existing Stripe payment system has been successfully re-integrated with the new StandardTakeoutCart menu system and verified with real transaction (Order ID: 08BE6756).

### 🚀 PLANNED: Re-order Feature Implementation via localStorage

**Objective**: Implement a "Re-order Last Order" feature using localStorage for immediate customer value without requiring authentication.

## Re-order Feature Plan

### 1. **User Experience Flow**
```
Homepage Re-order Button → Check localStorage → 
If Last Order Exists: Populate Cart & Go to Menu → 
If No Last Order: Go to Menu with Notice
```

### 2. **localStorage Strategy**
**Storage Structure**:
```javascript
localStorage.setItem('lastOrder', JSON.stringify({
  items: [/* cart items array */],
  orderInfo: {
    orderId: '08BE6756',
    total: 34.63,
    timestamp: '2024-01-XX',
    customerName: 'brian lapp'
  },
  metadata: {
    restaurantId: 'house-of-lasagna-pizza',
    version: '1.0' // for future compatibility
  }
}));
```

### 3. **Implementation Components**

**Files to Update**:
- `src/pages/Index.tsx` - Update re-order button logic
- `src/pages/Menu.tsx` - Add re-order state management  
- `src/components/StandardTakeoutCart.tsx` - Save order on successful checkout
- `src/hooks/useLocalStorageOrder.ts` - NEW: Custom hook for order management

### 4. **Technical Implementation Plan**

**Step 1: Create Order Storage Hook**
```typescript
// src/hooks/useLocalStorageOrder.ts
interface LastOrder {
  items: CartItem[];
  orderInfo: {
    orderId: string;
    total: number;
    timestamp: string;
    customerName: string;
  };
  metadata: {
    restaurantId: string;
    version: string;
  };
}

export const useLocalStorageOrder = () => {
  const saveLastOrder = (order: LastOrder) => { /* implementation */ };
  const getLastOrder = (): LastOrder | null => { /* implementation */ };
  const clearLastOrder = () => { /* implementation */ };
  const hasLastOrder = (): boolean => { /* implementation */ };
  
  return { saveLastOrder, getLastOrder, clearLastOrder, hasLastOrder };
};
```

**Step 2: Update Homepage Re-order Button**
- Replace current `/menu` link with intelligent routing
- Check localStorage for last order
- Show appropriate messaging ("Re-order [Order ID]" vs "Start New Order")

**Step 3: Update Menu Page**
- Add state for re-order mode
- Populate cart with last order items on load if coming from re-order
- Show confirmation message when re-order is loaded

**Step 4: Update Checkout Success**
- Save order to localStorage after successful Stripe payment
- Include all necessary cart and order information

### 5. **Feature Specifications**

**Re-order Button Behavior**:
- **Has Last Order**: "Re-order 08BE6756" → populates cart with items
- **No Last Order**: "Start Your Order" → goes to empty menu
- **Old Order (>30 days)**: "Start New Order" → clears old data

**Cart Population**:
- Restore exact items, quantities, sizes, and options
- Recalculate totals with current pricing
- Show notification: "Re-ordered from [Date] - Please review and update as needed"

**Data Management**:
- Store only essential cart data (no payment info)
- 30-day expiration for orders
- Graceful handling of menu changes (items no longer available)

### 6. **Error Handling & Edge Cases**

**Scenarios to Handle**:
- localStorage not available (private browsing)
- Corrupted/invalid order data
- Menu items no longer exist
- Price changes since last order
- Browser storage quota exceeded

**Fallback Strategy**:
- If re-order fails, redirect to menu with notification
- Clear invalid order data automatically
- Provide manual item selection as backup

## Integration with Existing System

### Current Stripe Integration: ✅ WORKING
- New menu cart → CheckoutDialog → create-checkout → Stripe → verify-payment → OrderSuccess
- All existing security, error handling, and order management preserved
- 13% HST tax calculation working
- Mobile/desktop responsive design confirmed

### New Re-order Integration Points:
```typescript
// After successful Stripe payment in OrderSuccess.tsx
const { saveLastOrder } = useLocalStorageOrder();
saveLastOrder({
  items: cartItems,
  orderInfo: { orderId, total, timestamp, customerName },
  metadata: { restaurantId: 'house-of-lasagna-pizza', version: '1.0' }
});

// On homepage re-order click in Index.tsx
const { getLastOrder, hasLastOrder } = useLocalStorageOrder();
if (hasLastOrder()) {
  const lastOrder = getLastOrder();
  navigate('/menu', { state: { reorder: lastOrder } });
}

// In Menu.tsx on load
const location = useLocation();
if (location.state?.reorder) {
  setCart(location.state.reorder.items);
  showReorderNotification();
}
```

## Success Metrics

### Implementation Success:
- ✅ Re-order button becomes functional
- ✅ Users can repopulate cart with last order
- ✅ Graceful fallback for edge cases
- ✅ No disruption to existing Stripe flow

### User Experience Success:
- ✅ Faster repeat ordering process
- ✅ Clear feedback when re-ordering
- ✅ Maintains all cart functionality (quantity changes, item removal)
- ✅ Works across browser sessions

## Next Steps for Implementation:
1. Create `useLocalStorageOrder` hook
2. Update Homepage re-order button logic
3. Add re-order state management to Menu page  
4. Integrate order saving in checkout success
5. Test edge cases and error scenarios
6. Update UI feedback and notifications

This localStorage approach provides immediate value while maintaining the option to upgrade to full authentication + order history in the future.
