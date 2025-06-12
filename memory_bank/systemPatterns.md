# System Patterns: External Service Integration Architecture

## Current Architecture Overview

### Production System Architecture
```
Frontend (React/TypeScript) ✅ IMPLEMENTED
├── Information Display (Static Content) ✅ Working
├── Multi-Platform UI (Desktop/Mobile) ✅ Working
└── External Service Integration ✅ LIVE

External Services ✅ INTEGRATED
├── Ordering System (houseoflasagna.ca) ✅ LIVE
├── Social Media (Instagram) ✅ Working
└── Marketing Website (Current Site) ✅ Complete
```

### External Service Integration ✅

#### Production URL Redirects (Live)
```typescript
// ✅ IMPLEMENTED: Menu ordering integration
const handleMenuRedirect = () => {
  window.open('https://houseoflasagna.ca/?p=menu', '_blank');
};

// ✅ IMPLEMENTED: Account management integration  
const handleSignInRedirect = () => {
  window.location.href = 'https://houseoflasagna.ca/?p=signin';
};

const handleCreateAccountRedirect = () => {
  window.location.href = 'https://houseoflasagna.ca/?p=createaccount';
};

// ✅ IMPLEMENTED: Social media integration
const handleInstagramRedirect = () => {
  window.open('https://www.instagram.com/h.o.l.ottawa/?hl=en', '_blank');
};
```

## Implemented Design Patterns ✅

### 1. ✅ WORKING: External Service Redirect Pattern
**Pattern**: All ordering actions redirect to external service
```typescript
// ✅ IMPLEMENTED: Unified redirect handling
const ExternalServiceRedirect = ({ serviceType, children }) => {
  const getServiceUrl = (type) => {
    const urls = {
      'menu': 'https://houseoflasagna.ca/?p=menu',
      'signin': 'https://houseoflasagna.ca/?p=signin',
      'createaccount': 'https://houseoflasagna.ca/?p=createaccount'
    };
    return urls[type];
  };

  const handleRedirect = () => {
    const url = getServiceUrl(serviceType);
    if (serviceType === 'menu') {
      window.open(url, '_blank'); // New tab for ordering
    } else {
      window.location.href = url; // Same tab for account actions
    }
  };

  return (
    <button onClick={handleRedirect}>
      {children}
    </button>
  );
};
```

### 2. ✅ WORKING: Information Display Pattern
**Pattern**: Static content with dynamic data loading
```typescript
// ✅ IMPLEMENTED: Restaurant data display
const useRestaurantData = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load static restaurant data
    fetch('/api/restaurant-data.json')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Failed to load restaurant data:', err);
        setIsLoading(false);
      });
  }, []);

  return { data, isLoading };
};

// ✅ IMPLEMENTED: Menu display (information only)
const MenuDisplay = () => {
  const { menu, isLoading } = useRestaurantData();
  
  return (
    <div className="menu-display">
      {menu?.categories?.map(category => (
        <CategorySection key={category.name}>
          {category.items.map(item => (
            <MenuItem 
              key={item.id}
              item={item}
              onOrderClick={() => handleMenuRedirect()}
            />
          ))}
        </CategorySection>
      ))}
    </div>
  );
};
```

### 3. ✅ WORKING: Marketing Website Pattern
**Pattern**: Information-focused site with external action buttons
```typescript
// ✅ IMPLEMENTED: Call-to-action components
const OrderCTAButton = ({ orderType, children }) => {
  const handleOrderClick = () => {
    // Track analytics if needed
    gtag?.('event', 'external_order_click', {
      order_type: orderType
    });
    
    // Redirect to external ordering system
    window.open('https://houseoflasagna.ca/?p=menu', '_blank');
  };

  return (
    <Button 
      onClick={handleOrderClick}
      className="w-full"
    >
      {children}
      <ExternalLink className="ml-2 h-4 w-4" />
    </Button>
  );
};

// ✅ IMPLEMENTED: Homepage service cards
const ServiceCards = () => {
  const services = [
    { name: 'Delivery', icon: Truck, color: 'bg-red-600' },
    { name: 'Takeout', icon: ShoppingBag, color: 'bg-green-600' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {services.map(service => (
        <ServiceCard 
          key={service.name}
          service={service}
          onAction={() => window.open('https://houseoflasagna.ca/?p=menu', '_blank')}
        />
      ))}
    </div>
  );
};
```

## Implemented Technical Architecture ✅

### 1. ✅ WORKING: Static Data Pipeline
```typescript
// ✅ IMPLEMENTED: Restaurant information management
const restaurantData = {
  siteInfo: {
    name: "House of Lasagna & Pizza",
    logo: "/lovable-uploads/560a134e-075e-40b0-bb51-290d54d753bb.png",
    tagline: "Authentic Italian Cuisine in Ottawa"
  },
  contact: {
    phone: "(613) 555-0123",
    email: "info@houseoflasagna.ca",
    address: {
      street: "123 Italian Street",
      city: "Ottawa",
      province: "ON",
      postal: "K1A 0A9"
    }
  },
  hours: {
    monday: "11:00 AM - 9:00 PM",
    tuesday: "11:00 AM - 9:00 PM",
    // ... etc
  },
  menu: {
    categories: [
      {
        name: "Italian Dishes",
        emoji: "🍝",
        items: [/* menu items for display only */]
      }
    ]
  }
};
```

### 2. ✅ WORKING: Responsive Design Architecture
```typescript
// ✅ IMPLEMENTED: Mobile-first responsive components
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex">
        <NavLinks />
        <SocialMediaLinks />
      </nav>
      
      {/* Mobile Navigation */}
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetTrigger className="md:hidden">
          <Menu className="h-6 w-6" />
        </SheetTrigger>
        <SheetContent>
          <MobileNavLinks />
          <SocialMediaLinks />
        </SheetContent>
      </Sheet>
    </>
  );
};
```

### 3. ✅ WORKING: SEO & Performance Architecture
```typescript
// ✅ IMPLEMENTED: Page metadata management
const PageMeta = ({ title, description }) => {
  useEffect(() => {
    document.title = `${title} | House of Lasagna & Pizza`;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
};

// ✅ IMPLEMENTED: Image optimization
const OptimizedImage = ({ src, alt, className }) => {
  return (
    <img 
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
};
```

## Live System Status ✅

### ✅ PRODUCTION READY: Core Components
- **Marketing Pages**: Homepage, Menu display, Contact page
- **External Integration**: All ordering redirects working
- **Social Media**: Instagram integration active
- **Mobile Responsive**: Tested across devices
- **Performance**: Fast loading static site

### ✅ REMOVED: Database Components
- **No Supabase**: All database connections removed
- **No Authentication**: Handled by external service
- **No Payment Processing**: Handled by external service
- **No Order Management**: Handled by external service

### ✅ CURRENT FUNCTIONALITY
- **Information Display**: Restaurant details, hours, contact
- **Menu Browsing**: Categories and items (display only)
- **Service Integration**: Seamless redirects to ordering system
- **Social Media**: Instagram feed integration
- **Contact Information**: Phone, email, address, hours

The system now functions as a professional marketing website that drives traffic to the existing ordering system rather than competing with it.
