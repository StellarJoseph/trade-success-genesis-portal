
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  BookOpen, 
  MessageCircle, 
  ShoppingBag, 
  ArrowRight,
  Star,
  Clock,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Shop = () => {
  const categories = [
    {
      title: "Trading Courses",
      description: "Master cryptocurrency trading with our comprehensive courses",
      icon: BookOpen,
      link: "/shop/courses",
      features: ["Expert-led content", "Lifetime access", "Certificate included"],
      price: "From $199",
      image: "🎓"
    },
    {
      title: "1-on-1 Consultancy",
      description: "Get personalized crypto investment advice from our experts",
      icon: MessageCircle,
      link: "/shop/consultancy",
      features: ["Personal advisor", "Custom strategies", "Follow-up support"],
      price: "From $299/hour",
      image: "👨‍💼"
    },
    {
      title: "Merchandise",
      description: "Premium TradeSuccess branded apparel and accessories",
      icon: ShoppingBag,
      link: "/shop/merchandise",
      features: ["Premium quality", "Limited editions", "Worldwide shipping"],
      price: "From $29",
      image: "👕"
    }
  ];

  const featuredProducts = [
    {
      name: "Complete Crypto Mastery Course",
      category: "Course",
      price: "$299",
      originalPrice: "$499",
      rating: 4.9,
      students: 2340,
      image: "🎯",
      duration: "12 hours"
    },
    {
      name: "Private Portfolio Review",
      category: "Consultancy",
      price: "$399",
      rating: 5.0,
      sessions: 156,
      image: "📊",
      duration: "90 minutes"
    },
    {
      name: "TradeSuccess Hoodie",
      category: "Merchandise",
      price: "$79",
      rating: 4.8,
      sold: 892,
      image: "🔥",
      sizes: "S-XXL"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-general mb-6">
              TradeSuccess <span className="text-gradient">Shop</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Elevate your crypto journey with our premium courses, expert consultancy, 
              and exclusive merchandise designed for serious traders.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="text-crypto-green mb-4">● Shop Categories</div>
              <h2 className="text-4xl md:text-5xl font-bold font-general mb-6">
                Everything You Need to{' '}
                <span className="text-gradient">Succeed</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <Card key={index} className="glass-card group hover:border-crypto-green/60 transition-all duration-300 hover:scale-105">
                  <CardHeader className="text-center">
                    <div className="text-6xl mb-4">{category.image}</div>
                    <CardTitle className="text-white font-general text-2xl mb-2">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-crypto-green rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="text-center mb-6">
                      <div className="text-2xl font-bold text-crypto-green">{category.price}</div>
                    </div>

                    <Link to={category.link}>
                      <Button className="w-full glow-button text-crypto-dark font-semibold group">
                        Explore {category.title}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="text-crypto-green mb-4">● Featured Products</div>
              <h2 className="text-4xl font-bold font-general mb-6">
                Most Popular Items
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredProducts.map((product, index) => (
                <Card key={index} className="glass-card hover:border-crypto-green/40 transition-all duration-300">
                  <CardHeader>
                    <div className="text-4xl text-center mb-4">{product.image}</div>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-crypto-green/20 text-crypto-green">{product.category}</Badge>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300 ml-1">{product.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-white font-general">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-2xl font-bold text-crypto-green">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-gray-400 line-through ml-2">{product.originalPrice}</span>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2 text-sm text-gray-400 mb-6">
                      {product.students && (
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          {product.students} students
                        </div>
                      )}
                      {product.duration && (
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {product.duration}
                        </div>
                      )}
                    </div>

                    <Button className="w-full glow-button text-crypto-dark font-semibold">
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="glass-card p-12 rounded-3xl text-center">
              <h2 className="text-4xl font-bold font-general mb-6">
                Ready to Level Up Your{' '}
                <span className="text-gradient">Trading Game?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of successful traders who've invested in their education 
                and achieved financial freedom.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="glow-button text-crypto-dark font-semibold px-8 py-4">
                  Browse All Products
                </Button>
                <Button variant="outline" className="border-crypto-green text-crypto-green hover:bg-crypto-green hover:text-crypto-dark px-8 py-4">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
