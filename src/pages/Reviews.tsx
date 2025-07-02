import { Star, Quote } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyOrderButton from '@/components/StickyOrderButton';

const Reviews = () => {
  const reviews = [
    {
      name: "Jennifer M.",
      rating: 4,
      date: "2 weeks ago",
      review: "Really good Italian food. The pasta portions are huge and the flavors are authentic. Staff is friendly and helpful. Only minor complaint is sometimes the delivery takes a bit longer during busy times, but it's worth the wait.",
      dish: "Spaghetti & Meatballs"
    },
    {
      name: "Mike R.",
      rating: 5,
      date: "1 month ago",
      review: "Amazing pizza! The crust is perfect - not too thick, not too thin. Toppings are fresh and the sauce has great flavor. Their chicken wings are also fantastic. Great value for money and fast delivery.",
      dish: "Pizza & Wings"
    },
    {
      name: "Sarah T.",
      rating: 5,
      date: "3 weeks ago",
      review: "Best lasagna in Ottawa! The meat sauce is incredible, perfectly seasoned and the cheese melts beautifully. We've been ordering from here for years and they never disappoint. The portions are generous and always arrive hot.",
      dish: "Meat Lasagna"
    },
    {
      name: "David L.",
      rating: 4,
      date: "1 week ago",
      review: "Family loves this place! The lasagna is homemade and you can taste the difference. Fresh ingredients, great marinara sauce. Been our go-to for Italian food in Ottawa for over 5 years. Highly recommend!",
      dish: "Vegetable Lasagna"
    },
    {
      name: "Lisa K.",
      rating: 4,
      date: "2 months ago",
      review: "Good food and reasonable prices. The chicken parmigiana is excellent and the garlic bread is amazing. Service is usually quick. Sometimes the phone is busy during dinner rush but that's expected for a popular place.",
      dish: "Chicken Parmigiana"
    },
    {
      name: "Robert P.",
      rating: 5,
      date: "3 weeks ago",
      review: "Best Italian restaurant in the area! Everything is made fresh and tastes authentic. The owner is really nice and remembers regular customers. Pizza is excellent and pasta dishes are very flavorful.",
      dish: "Margherita Pizza"
    },
    {
      name: "Maria S.",
      rating: 4,
      date: "1 month ago",
      review: "Great food quality and good portions. The fettuccine alfredo is creamy and delicious. Delivery is reliable and food arrives hot. Prices are fair for the quality you get. Will definitely order again.",
      dish: "Fettuccine Alfredo"
    },
    {
      name: "Tony B.",
      rating: 4,
      date: "2 weeks ago",
      review: "Outstanding! The meat sauce is incredible and the cheese is perfect. Been coming here since they opened and quality has always been consistent. Best Italian food in Ottawa, hands down.",
      dish: "Meat Lasagna"
    }
  ];

  const averageRating = 4.2;
  const totalReviews = 326;

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <Header currentPage="reviews" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-black/80 to-black/60 text-white py-20" style={{
        backgroundImage: 'url(/lovable-uploads/ef396629-56c2-4dd4-a9db-14dd4c58b79a.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center mb-6">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="h-12 w-12 text-yellow-400 fill-current" />
              ))}
              <Star className="h-12 w-12 text-yellow-400 fill-current opacity-40" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Customer Reviews</h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-4">
              See What Ottawa Customers Say About Our Authentic Italian Food
            </p>
            <div className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold">
              <Star className="h-5 w-5 mr-2 fill-current" />
              {averageRating} Stars • {totalReviews} Reviews
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Customers Are Saying
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're proud to serve Ottawa's finest Italian cuisine. Here's what our customers have to say about their experience with House of Lasagna & Pizza.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-300 hover:shadow-lg transition-all">
                <div className="flex items-center mb-4">
                  <div className="flex mr-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-600">{review.date}</p>
                  </div>
                </div>
                
                <Quote className="h-6 w-6 text-red-600 mb-3" />
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {review.review}
                </p>
                
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm font-semibold text-red-600">
                    Dish Reviewed: {review.dish}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rating Breakdown */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Customers Choose Us
              </h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Star className="h-6 w-6 text-yellow-400 fill-current mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Authentic Italian Flavors</h3>
                    <p className="text-gray-600">Traditional recipes passed down through generations</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Star className="h-6 w-6 text-yellow-400 fill-current mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Fast, Reliable Delivery</h3>
                    <p className="text-gray-600">Hot food delivered across Ottawa neighborhoods</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Star className="h-6 w-6 text-yellow-400 fill-current mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Generous Portions</h3>
                    <p className="text-gray-600">Great value with satisfying meal sizes</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Star className="h-6 w-6 text-yellow-400 fill-current mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Fresh Ingredients</h3>
                    <p className="text-gray-600">Quality ingredients in every dish we prepare</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Customer Rating Breakdown
              </h3>
              <div className="space-y-4">
                {[
                  { stars: 5, percentage: 45 },
                  { stars: 4, percentage: 42 },
                  { stars: 3, percentage: 8 },
                  { stars: 2, percentage: 3 },
                  { stars: 1, percentage: 2 }
                ].map((rating) => (
                  <div key={rating.stars} className="flex items-center">
                    <span className="text-sm font-medium text-gray-700 w-8">
                      {rating.stars}
                    </span>
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-2" />
                    <div className="flex-1 bg-gray-200 rounded-full h-2 mr-4">
                      <div 
                        className="bg-yellow-400 h-2 rounded-full" 
                        style={{width: `${rating.percentage}%`}}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">
                      {rating.percentage}%
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-3xl font-bold text-gray-900">{averageRating}</p>
                <p className="text-gray-600">out of 5 stars</p>
                <p className="text-sm text-gray-500 mt-2">
                  Based on {totalReviews} reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Experience What Our Customers Love
          </h2>
          <p className="text-xl mb-8">
            Join hundreds of satisfied customers who choose House of Lasagna & Pizza for authentic Italian cuisine
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://houseoflasagna.ca/?p=menu" target="_blank" rel="noopener noreferrer" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Order Your Favorites
            </a>
            <a href="tel:(613) 728-9700" className="bg-yellow-500 text-gray-900 hover:bg-yellow-400 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Call (613) 728-9700
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      
      {/* Sticky Order Button */}
      <StickyOrderButton />
    </div>
  );
};

export default Reviews;
