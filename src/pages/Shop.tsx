
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
  Filter,
  Search
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Input } from '@/components/ui/input';

const Shop = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    {
      title: "Trading Courses",
      description: "Master cryptocurrency trading with expert-led content and lifetime access",
      icon: BookOpen,
      link: "/shop/courses",
      features: ["Expert-led content", "Lifetime access", "Certificate included"],
      price: "From $149",
      image: "🎓"
    },
    {
      title: "1-on-1 Consultancy",
      description: "Get personalized crypto investment advice from our experienced advisors",
      icon: MessageCircle,
      link: "/shop/consultancy",
      features: ["Personal advisor", "Custom strategies", "Follow-up support"],
      price: "From $199/hour",
      image: "👨‍💼"
    },
    {
      title: "Merchandise",
      description: "Premium TradeSuccess branded apparel and crypto accessories",
      icon: ShoppingBag,
      link: "/shop/merchandise", 
      features: ["Premium quality", "Limited editions", "Worldwide shipping"],
      price: "From $15",
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
      id: 'crypto-tshirt',
      name: "Crypto Logo T-Shirt",
      category: "apparel",
      price: 29,
      rating: 4.8,
      image: "👕",
      description: "High-quality cotton tee featuring popular crypto logos",
      badge: "Best Seller",
      inStock: true
    },
    {
      id: 'bitcoin-cap',
      name: "Bitcoin Embroidered Cap", 
      category: "apparel",
      price: 35,
      rating: 4.9,
      image: "🧢",
      description: "Classic snapback with sleek Bitcoin logo embroidery",
      inStock: true
    },
    {
      id: 'crypto-bottle',
      name: "Custom Crypto Water Bottle",
      category: "drinkware", 
      price: 25,
      rating: 4.7,
      image: "🍶",
      description: "Durable, leak-proof stainless steel bottle",
      inStock: true
    },
    {
      id: 'led-mousepad',
      name: "Bitcoin LED Mouse Pad",
      category: "tech",
      price: 45,
      rating: 4.9,
      image: "🖱️",
      description: "Glowing desk mat with animated BTC visuals",
      badge: "New",
      inStock: true
    },
    {
      id: 'hodl-mousepad',
      name: "HODL Mouse Pad",
      category: "tech",
      price: 25,
      rating: 4.6,
      image: "🖱️",
      description: "Premium stitched mat with bold HODL text",
      inStock: true
    },
    {
      id: 'crypto-keychain',
      name: "Crypto Key Holder",
      category: "collectibles",
      price: 15,
      rating: 4.8,
      image: "🔑",
      description: "Sleek metal keychain with engraved Bitcoin logo",
      inStock: true
    },
    {
      id: 'crypto-hoodie',
      name: "Crypto Hoodie",
      category: "apparel",
      price: 65,
      rating: 4.9,
      image: "🏀",
      description: "Premium, warm hoodie made of eco-blended cotton",
      inStock: true
    },
    {
      id: 'bitcoin-socks',
      name: "Bitcoin Socks",
      category: "apparel", 
      price: 12,
      rating: 4.5,
      image: "🧦",
      description: "Bold, comfortable socks with woven crypto symbols",
      inStock: true
    },
    {
      id: 'bitcoin-mug',
      name: "Bitcoin Mug",
      category: "drinkware",
      price: 18,
      rating: 4.7,
      image: "☕",
      description: "Ceramic coffee mug with Buy the Dip slogan",
      inStock: true
    },
    {
      id: 'crypto-backpack',
      name: "Crypto Backpack",
      category: "utility",
      price: 85,
      rating: 4.8,
      image: "🎒",
      description: "Spacious and minimal with waterproof design",
      inStock: true
    },
    {
      id: 'bitcoin-gnome',
      name: "Bitcoin Miner Gnome Figurine",
      category: "decor",
      price: 35,
      rating: 4.9,
      image: "🎭",
      description: "Whimsical desk piece with miner hat and crypto pickaxe",
      inStock: true
    },
    {
      id: 'gold-bitcoin-coin',
      name: "Gold Bitcoin Collector Coin",
      category: "collectibles",
      price: 120,
      rating: 5.0,
      image: "🪙",
      description: "Limited edition 3D metal Bitcoin with display case",
      badge: "Limited",
      inStock: true
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesFilter = activeFilter === 'all' || product.category === activeFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-general mb-6 text-white">
              TradeSuccess <span className="text-gradient">Shop</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Elevate your crypto journey with our premium courses, expert consultancy, 
              and exclusive merchandise designed for serious traders.
            </p>
          </div>
        </section>

        {/* Crypto History Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-[#131240] border border-[#73E212]/20 p-12 rounded-3xl">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold font-general mb-6 text-white">
                  The <span className="text-gradient">Crypto Revolution</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Since Bitcoin's inception in 2009, cryptocurrency has transformed from an experimental digital currency 
                  to a global financial phenomenon worth over $2 trillion. From early adopters who became millionaires 
                  with small investments to entire countries adopting Bitcoin as legal tender, crypto has created 
                  unprecedented wealth and financial freedom for millions worldwide.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Global Impact</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#73E212] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Over 320 million crypto users worldwide as of 2024</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#73E212] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>El Salvador and Central African Republic adopted Bitcoin as legal tender</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#73E212] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Major corporations like Tesla, MicroStrategy hold Bitcoin on balance sheets</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#73E212] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Developing nations use crypto for financial inclusion and remittances</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-black/30 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6">Top 10 Countries by Crypto Adoption</h3>
                  <div className="space-y-3">
                    {[
                      { country: "India", percentage: "7.3%" },
                      { country: "Nigeria", percentage: "6.3%" },
                      { country: "Vietnam", percentage: "5.9%" },
                      { country: "United States", percentage: "5.6%" },
                      { country: "Ukraine", percentage: "5.2%" },
                      { country: "Philippines", percentage: "4.8%" },
                      { country: "Pakistan", percentage: "4.1%" },
                      { country: "Brazil", percentage: "3.9%" },
                      { country: "Thailand", percentage: "3.7%" },
                      { country: "China", percentage: "3.4%" }
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-300">{index + 1}. {item.country}</span>
                        <span className="text-[#73E212] font-semibold">{item.percentage}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="text-crypto-green mb-4 font-semibold">● Shop Categories</div>
              <h2 className="text-4xl md:text-5xl font-bold font-general mb-6 text-white">
                Everything You Need to{' '}
                <span className="text-gradient">Succeed</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <Card key={index} className="bg-[#131240] border border-[#73E212]/20 rounded-3xl group hover:border-[#73E212]/80 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#73E212]/20">
                  <CardHeader className="text-center p-8">
                    <div className="text-6xl mb-6">{category.image}</div>
                    <CardTitle className="text-white font-general text-2xl mb-4">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300 text-base leading-relaxed">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8 pt-0">
                    <ul className="space-y-3 mb-8">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-[#73E212] rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="text-center mb-8">
                      <div className="text-2xl font-bold text-[#73E212]">{category.price}</div>
                    </div>

                    <Link to={category.link}>
                      <Button className="w-full bg-[#73E212] hover:bg-[#73E212]/90 text-black font-semibold py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#73E212]/30 hover:scale-105">
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
              <div className="text-[#73E212] mb-4 font-semibold">● Featured Products</div>
              <h2 className="text-4xl font-bold font-general mb-6 text-white">
                Browse Our Collection
              </h2>
            </div>

            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-[#131240] border-[#73E212]/20 text-white placeholder-gray-400 focus:border-[#73E212]"
                />
              </div>
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
                        <Badge className="bg-[#73E212]/20 text-[#73E212] border-[#73E212]/40">
                          {product.badge}
                        </Badge>
                      )}
                      <div className="flex items-center ml-auto">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300 ml-1">{product.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-white font-general text-lg mb-2">{product.name}</CardTitle>
                    <CardDescription className="text-gray-400 text-sm leading-relaxed">{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-2xl font-bold text-[#73E212]">${product.price}</span>
                    </div>

                    <Button className="w-full bg-[#73E212] hover:bg-[#73E212]/90 text-black font-semibold py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#73E212]/30 hover:scale-105">
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
            <div className="bg-[#131240] border border-[#73E212]/20 p-12 rounded-3xl text-center">
              <h2 className="text-4xl font-bold font-general mb-6 text-white">
                Ready to Level Up Your{' '}
                <span className="text-gradient">Trading Game?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of successful traders who've invested in their education 
                and achieved financial freedom.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#73E212] hover:bg-[#73E212]/90 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#73E212]/30 hover:scale-105">
                  Browse All Products
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

export default Shop;
