
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Clock, 
  Users, 
  Star, 
  CheckCircle, 
  Play,
  Download,
  Certificate
} from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Complete Crypto Trading Mastery",
      description: "Master cryptocurrency trading from beginner to expert level with comprehensive strategies and risk management techniques.",
      price: "$299",
      originalPrice: "$499",
      rating: 4.9,
      students: 2340,
      duration: "12 hours",
      lessons: 45,
      level: "All Levels",
      category: "Trading",
      image: "🎯",
      featured: true,
      highlights: [
        "Technical Analysis Mastery",
        "Risk Management Strategies", 
        "Portfolio Diversification",
        "Advanced Chart Patterns",
        "Psychology of Trading"
      ]
    },
    {
      id: 2,
      title: "Memecoin & Altcoin Strategies",
      description: "Learn how to identify and profit from emerging altcoins and memecoins with proven strategies.",
      price: "$199",
      originalPrice: "$349",
      rating: 4.8,
      students: 1890,
      duration: "8 hours",
      lessons: 32,
      level: "Intermediate",
      category: "Altcoins",
      image: "🚀",
      highlights: [
        "Memecoin Analysis Framework",
        "Early Project Identification",
        "Community Assessment",
        "Exit Strategies",
        "Risk vs Reward Calculation"
      ]
    },
    {
      id: 3,
      title: "DeFi Yield farming & Staking",
      description: "Maximize your crypto returns through decentralized finance protocols, yield farming, and staking strategies.",
      price: "$249",
      originalPrice: "$399",
      rating: 4.7,
      students: 1567,
      duration: "10 hours",
      lessons: 38,
      level: "Advanced",
      category: "DeFi",
      image: "🌾",
      highlights: [
        "DeFi Protocol Analysis",
        "Yield Optimization",
        "Impermanent Loss Management",
        "Staking Strategies",
        "Smart Contract Risks"
      ]
    },
    {
      id: 4,
      title: "Signal Analysis & Interpretation",
      description: "Learn how to analyze and interpret trading signals like a professional trader.",
      price: "$149",
      originalPrice: "$249",
      rating: 4.9,
      students: 3420,
      duration: "6 hours",
      lessons: 24,
      level: "Beginner",
      category: "Signals",
      image: "📈",
      highlights: [
        "Signal Types & Formats",
        "Entry & Exit Timing",
        "Risk Management with Signals",
        "Signal Provider Evaluation",
        "Building Your Own Signals"
      ]
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
              Trading <span className="text-gradient">Courses</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Master cryptocurrency trading with our comprehensive courses designed by 
              professional traders with proven track records.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-crypto-green/20 text-crypto-green px-4 py-2">
                <Certificate className="w-4 h-4 mr-2" />
                Certificate Included
              </Badge>
              <Badge className="bg-crypto-green/20 text-crypto-green px-4 py-2">
                <Download className="w-4 h-4 mr-2" />
                Lifetime Access
              </Badge>
              <Badge className="bg-crypto-green/20 text-crypto-green px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                7,000+ Students
              </Badge>
            </div>
          </div>
        </section>

        {/* Featured Course */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="text-crypto-green mb-4">● Featured Course</div>
              <h2 className="text-4xl font-bold font-general">
                Most Popular Training
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="glass-card border-crypto-green/60 p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-6xl">{courses[0].image}</div>
                      <Badge className="bg-crypto-green text-crypto-dark">
                        BESTSELLER
                      </Badge>
                    </div>
                    <h3 className="text-3xl font-bold font-general text-white mb-4">
                      {courses[0].title}
                    </h3>
                    <p className="text-gray-300 mb-6">
                      {courses[0].description}
                    </p>
                    <div className="flex items-center gap-6 mb-6 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {courses[0].duration}
                      </div>
                      <div className="flex items-center">
                        <Play className="w-4 h-4 mr-2" />
                        {courses[0].lessons} lessons
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {courses[0].students} students
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-2 text-yellow-400 fill-current" />
                        {courses[0].rating}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="mb-6">
                      <div className="text-gray-400 line-through text-xl">{courses[0].originalPrice}</div>
                      <div className="text-4xl font-bold text-crypto-green">{courses[0].price}</div>
                      <div className="text-sm text-gray-400">One-time payment</div>
                    </div>
                    <Button className="w-full glow-button text-crypto-dark font-semibold text-lg py-4 mb-4">
                      Enroll Now
                    </Button>
                    <p className="text-xs text-gray-400">30-day money-back guarantee</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* All Courses */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-general mb-6">
                All <span className="text-gradient">Courses</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.slice(1).map((course) => (
                <Card key={course.id} className="glass-card hover:border-crypto-green/40 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{course.image}</div>
                      <Badge className="bg-crypto-green/20 text-crypto-green">
                        {course.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-white font-general">{course.title}</CardTitle>
                    <CardDescription className="text-gray-300">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-sm text-gray-300">{course.rating}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {course.level}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-xs text-gray-400 mb-6">
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <Play className="w-3 h-3 mr-1" />
                        {course.lessons} lessons
                      </div>
                      <div className="flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        {course.students}
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {course.highlights.slice(0, 3).map((highlight, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-crypto-green mr-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-2xl font-bold text-crypto-green">{course.price}</span>
                        <span className="text-gray-400 line-through ml-2 text-sm">{course.originalPrice}</span>
                      </div>
                    </div>

                    <Button className="w-full glow-button text-crypto-dark font-semibold">
                      Enroll Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Courses;
