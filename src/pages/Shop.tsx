
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  MessageCircle, 
  ShoppingBag, 
  ArrowRight,
  Star,
  Clock,
  Users,
  Filter
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Shop = () => {
  const [activeFilter, setActiveFilter] = useState('all');

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

  const filters = [
    { id: 'all', name: 'All Products' },
    { id: 'apparel', name: 'Apparel' },
    { id: 'tech', name: 'Tech Accessories' },
    { id: 'drinkware', name: 'Drinkware' },
    { id: 'collectibles', name: 'Collectibles' },
    { id: 'decor', name: 'Decor & Figurines' },
    { id: 'utility', name: 'Utility & Eco' }
  ];

  const products = [
    {
      name: "Crypto Logo T-Shirt",
      category: "apparel",
      price: "$29",
      rating: 4.8,
      image: "👕",
      description: "High-quality cotton tee featuring popular crypto logos",
      badge: "Best Seller"
    },
    {
      name: "Bitcoin Embroidered Cap", 
      category: "apparel",
      price: "$35",
      rating: 4.9,
      image: "🧢",
      description: "Classic snapback with sleek Bitcoin logo embroidery"
    },
    {
      name: "Custom Crypto Water Bottle",
      category: "drinkware", 
      price: "$25",
      rating: 4.7,
      image: "🍶",
      description: "Durable, leak-proof stainless steel bottle"
    },
    {
      name: "Bitcoin LED Mouse Pad",
      category: "tech",
      price: "$45",
      rating: 4.9,
      image: "🖱️",
      description: "Glowing desk mat with animated BTC visuals",
      badge: "New"
    },
    {
      name: "HODL Mouse Pad",
      category: "tech",
      price: "$25",
      rating: 4.6,
      image: "🖱️",
      description: "Premium stitched mat with bold HODL text"
    },
    {
      name: "Crypto Key Holder",
      category: "collectibles",
      price: "$15",
      rating: 4.8,
      image: "🔑",
      description: "Sleek metal keychain with engraved Bitcoin logo"
    },
    {
      name: "Crypto Hoodie",
      category: "apparel",
      price: "$65",
      rating: 4.9,
      image: "🏀",
      description: "Premium, warm hoodie made of eco-blended cotton"
    },
    {
      name: "Bitcoin Socks",
      category: "apparel", 
      price: "$12",
      rating: 4.5,
      image: "🧦",
      description: "Bold, comfortable socks with woven crypto symbols"
    },
    {
      name: "Bitcoin Mug",
      category: "drinkware",
      price: "$18",
      rating: 4.7,
      image: "☕",
      description: "Ceramic coffee mug with Buy the Dip slogan"
    },
    {
      name: "Crypto Backpack",
      category: "utility",
      price: "$85",
      rating: 4.8,
      image: "🎒",
      description: "Spacious and minimal with waterproof design"
    },
    {
      name: "Bitcoin Miner Gnome Figurine",
      category: "decor",
      price: "$35",
      rating: 4.9,
      image: "🎭",
      description: "Whimsical desk piece with miner hat and crypto pickaxe"
    },
    {
      name: "Gold Bitcoin Collector Coin",
      category: "collectibles",
      price: "$120",
      rating: 5.0,
      image: "🪙",
      description: "Limited edition 3D metal Bitcoin with display case",
      badge: "Limited"
    }
  ];

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => product.category === activeFilter);

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

        {/* Product Filters */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="text-crypto-green mb-4">● Featured Products</div>
              <h2 className="text-4xl font-bold font-general mb-6">
                Browse Our Collection
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-crypto-green text-crypto-dark'
                      : 'glass-card text-gray-300 hover:text-crypto-green hover:border-crypto-green/40'
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <Card key={index} className="glass-card hover:border-crypto-green/40 transition-all duration-300 group">
                  <CardHeader>
                    <div className="text-4xl text-center mb-4">{product.image}</div>
                    <div className="flex items-center justify-between mb-2">
                      {product.badge && (
                        <Badge className="bg-crypto-green/20 text-crypto-green">{product.badge}</Badge>
                      )}
                      <div className="flex items-center ml-auto">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300 ml-1">{product.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-white font-general">{product.name}</CardTitle>
                    <CardDescription className="text-gray-400">{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-2xl font-bold text-crypto-green">{product.price}</span>
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
