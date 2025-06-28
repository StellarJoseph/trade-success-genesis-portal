
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Star,
  ShoppingCart,
  Truck,
  Shield,
  Globe
} from 'lucide-react';
import { useState } from 'react';

const Merchandise = () => {
  const [activeFilter, setActiveFilter] = useState('all');

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
      id: 'premium-tshirt',
      name: "TradeSuccess Premium T-Shirt",
      category: "apparel",
      price: 29,
      originalPrice: 39,
      rating: 4.8,
      reviews: 124,
      image: "👕",
      description: "High-quality cotton tee with premium TradeSuccess branding",
      badge: "Best Seller",
      colors: ["Black", "Navy", "Green"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      inStock: true
    },
    {
      id: 'crypto-hoodie',
      name: "Crypto Trader Hoodie", 
      category: "apparel",
      price: 65,
      originalPrice: 85,
      rating: 4.9,
      reviews: 89,
      image: "👥",
      description: "Premium hoodie with crypto-inspired design and TradeSuccess logo",
      badge: "Limited Edition",
      colors: ["Black", "Charcoal"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      inStock: true
    },
    {
      id: 'bitcoin-cap',
      name: "Bitcoin Embroidered Cap",
      category: "apparel",
      price: 35,
      rating: 4.7,
      reviews: 156,
      image: "🧢",
      description: "Classic snapback with premium Bitcoin logo embroidery",
      colors: ["Black", "Navy", "Green"],
      sizes: ["One Size"],
      inStock: true
    },
    {
      id: 'water-bottle',
      name: "TradeSuccess Water Bottle",
      category: "drinkware", 
      price: 25,
      rating: 4.6,
      reviews: 203,
      image: "🍶",
      description: "Durable, leak-proof stainless steel bottle with laser engraving",
      colors: ["Black", "Silver"],
      sizes: ["500ml"],
      inStock: true
    },
    {
      id: 'led-mousepad',
      name: "LED Gaming Mouse Pad",
      category: "tech",
      price: 45,
      originalPrice: 59,
      rating: 4.9,
      reviews: 78,
      image: "🖱️",
      description: "RGB gaming mat with animated crypto visuals and TradeSuccess branding",
      badge: "New Arrival",
      colors: ["RGB"],
      sizes: ["Large"],
      inStock: true
    },
    {
      id: 'crypto-mug',
      name: "Crypto Trader Mug",
      category: "drinkware",
      price: 18,
      rating: 4.5,
      reviews: 267,
      image: "☕",
      description: "Ceramic coffee mug with motivational crypto trading quotes",
      colors: ["Black", "White"],
      sizes: ["11oz", "15oz"],
      inStock: true
    },
    {
      id: 'backpack',
      name: "TradeSuccess Backpack",
      category: "utility",
      price: 85,
      originalPrice: 120,
      rating: 4.8,
      reviews: 45,
      image: "🎒",
      description: "Professional backpack with laptop compartment and crypto-themed design",
      badge: "Premium",
      colors: ["Black", "Navy"],
      sizes: ["One Size"],
      inStock: true
    },
    {
      id: 'collector-coin',
      name: "Bitcoin Collector Coin",
      category: "collectibles",
      price: 120,
      originalPrice: 150,
      rating: 5.0,
      reviews: 23,
      image: "🪙",
      description: "Limited edition gold-plated Bitcoin coin with luxury display case",
      badge: "Limited Edition",
      colors: ["Gold"],
      sizes: ["One Size"],
      inStock: true
    },
    {
      id: 'crypto-socks',
      name: "Crypto Socks Set",
      category: "apparel", 
      price: 24,
      rating: 4.4,
      reviews: 189,
      image: "🧦",
      description: "Comfortable cotton blend socks with various crypto logos (3-pack)",
      colors: ["Mixed"],
      sizes: ["S/M", "L/XL"],
      inStock: true
    },
    {
      id: 'keychain',
      name: "TradeSuccess Keychain",
      category: "collectibles",
      price: 15,
      rating: 4.7,
      reviews: 312,
      image: "🔑",
      description: "Premium metal keychain with laser-engraved TradeSuccess logo",
      colors: ["Silver", "Gold", "Black"],
      sizes: ["One Size"],
      inStock: true
    },
    {
      id: 'desk-figurine',
      name: "Crypto Desk Figurine",
      category: "decor",
      price: 35,
      rating: 4.8,
      reviews: 67,
      image: "🎭",
      description: "Decorative Bitcoin miner figurine for your trading desk",
      colors: ["Bronze"],
      sizes: ["6 inch"],
      inStock: true
    },
    {
      id: 'phone-case',
      name: "TradeSuccess Phone Case",
      category: "tech",
      price: 22,
      rating: 4.6,
      reviews: 143,
      image: "📱",
      description: "Protective phone case with TradeSuccess branding (multiple models)",
      colors: ["Black", "Clear"],
      sizes: ["iPhone", "Samsung"],
      inStock: true
    }
  ];

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-general mb-6 text-white">
              Premium <span className="text-gradient">Merchandise</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Show your crypto pride with our exclusive TradeSuccess merchandise collection. 
              Premium quality products for serious traders and crypto enthusiasts.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#73E212]" />
                <span className="text-gray-300">Premium Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-[#73E212]" />
                <span className="text-gray-300">Fast Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#73E212]" />
                <span className="text-gray-300">Worldwide Delivery</span>
              </div>
            </div>
          </div>
        </section>

        {/* Product Filters */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="text-[#73E212] mb-4 font-semibold">● Product Categories</div>
              <h2 className="text-4xl font-bold font-general mb-6 text-white">
                Browse Our Collection
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-[#73E212] text-black shadow-lg shadow-[#73E212]/30'
                      : 'bg-[#131240] text-gray-300 hover:text-[#73E212] hover:border-[#73E212]/40 border border-[#73E212]/20'
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <Card key={index} className="bg-[#131240] border border-[#73E212]/20 rounded-3xl hover:border-[#73E212]/80 transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-[#73E212]/20">
                  <CardHeader className="p-6">
                    <div className="text-4xl text-center mb-4">{product.image}</div>
                    <div className="flex items-center justify-between mb-3">
                      {product.badge && (
                        <Badge className="bg-[#73E212]/20 text-[#73E212] border-[#73E212]/40 text-xs">
                          {product.badge}
                        </Badge>
                      )}
                      <div className="flex items-center ml-auto">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300 ml-1">{product.rating}</span>
                        <span className="text-xs text-gray-400 ml-1">({product.reviews})</span>
                      </div>
                    </div>
                    <CardTitle className="text-white font-general text-lg mb-2">{product.name}</CardTitle>
                    <CardDescription className="text-gray-400 text-sm leading-relaxed mb-4">{product.description}</CardDescription>
                    
                    {/* Product Options */}
                    <div className="space-y-2 text-xs text-gray-400">
                      <div>
                        <span className="font-medium">Colors:</span> {product.colors.join(', ')}
                      </div>
                      <div>
                        <span className="font-medium">Sizes:</span> {product.sizes.join(', ')}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6 pt-0">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <span className="text-2xl font-bold text-[#73E212]">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-gray-400 line-through ml-2 text-sm">${product.originalPrice}</span>
                        )}
                      </div>
                    </div>

                    <Button className="w-full bg-[#73E212] hover:bg-[#73E212]/90 text-black font-semibold py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#73E212]/30 hover:scale-105">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#73E212]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-[#73E212]" />
                </div>
                <h3 className="text-xl font-bold font-general text-white mb-3">Premium Quality</h3>
                <p className="text-gray-300">Only the finest materials and craftsmanship for products that last.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#73E212]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-[#73E212]" />
                </div>
                <h3 className="text-xl font-bold font-general text-white mb-3">Fast Shipping</h3>
                <p className="text-gray-300">Quick processing and reliable delivery to get your order fast.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#73E212]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-[#73E212]" />
                </div>
                <h3 className="text-xl font-bold font-general text-white mb-3">Worldwide Delivery</h3>
                <p className="text-gray-300">We ship to over 50 countries, bringing TradeSuccess to you anywhere.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-[#131240] border border-[#73E212]/20 p-12 rounded-3xl text-center">
              <h2 className="text-4xl font-bold font-general mb-6 text-white">
                Join the{' '}
                <span className="text-gradient">TradeSuccess</span> Community
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Wear your crypto pride and connect with fellow traders worldwide. 
                Premium merchandise for the serious crypto community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#73E212] hover:bg-[#73E212]/90 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#73E212]/30 hover:scale-105">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Shop All Products
                </Button>
                <Button variant="outline" className="border-[#73E212] text-[#73E212] hover:bg-[#73E212] hover:text-black px-8 py-4 rounded-xl transition-all duration-300">
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

export default Merchandise;
