import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Clock,
  Users,
  Star,
  PlayCircle,
  Award,
  BookOpen
} from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      name: "Complete Crypto Trading Mastery",
      category: "Signal Mastery",
      price: "$299",
      originalPrice: "$499",
      rating: 4.9,
      students: 2340,
      duration: "12 hours",
      lessons: 45,
      image: "🎯",
      description: "Master the fundamentals of cryptocurrency trading with our comprehensive course covering technical analysis, risk management,",
      level: "Beginner to Advanced",
      features: ["Lifetime Access", "Certificate of Completion", "Community Access", "Live Q&A Sessions"]
    },
    {
      name: "Advanced Signal Analysis",
      category: "Signal Mastery", 
      price: "$199",
      rating: 4.8,
      students: 1890,
      duration: "8 hours",
      lessons: 32,
      image: "📊",
      description: "Learn to read and interpret trading signals like a pro. Understand market patterns, indicators, and timing.",
      level: "Intermediate",
      features: ["Advanced Strategies", "Real-time Examples", "Practice Exercises", "Expert Support"]
    },
    {
      name: "Gemcoin Research & Discovery",
      category: "Gemcoin Research",
      price: "$249",
      rating: 4.9,
      students: 1456,
      duration: "10 hours", 
      lessons: 38,
      image: "💎",
      description: "Discover the next big crypto gems before they explode. Learn research techniques and evaluation methods.",
      level: "Intermediate to Advanced",
      features: ["Research Tools", "Case Studies", "Community Insights", "Monthly Updates"]
    },
    {
      name: "Trading Bot Automation",
      category: "Trading Automation",
      price: "$399",
      rating: 4.7,
      students: 987,
      duration: "15 hours",
      lessons: 52,
      image: "🤖",
      description: "Set up and optimize trading bots for passive income. Learn automation strategies and risk management.",
      level: "Advanced",
      features: ["Bot Setup Guide", "Strategy Templates", "Risk Management", "24/7 Support"]
    },
    {
      name: "DeFi Yield Farming Strategies",
      category: "Trading Automation",
      price: "$179",
      rating: 4.6,
      students: 1234,
      duration: "6 hours",
      lessons: 24,
      image: "🌾",
      description: "Maximize your returns with DeFi yield farming. Learn about liquidity pools, staking, and protocol analysis.",
      level: "Intermediate", 
      features: ["Protocol Analysis", "Yield Optimization", "Risk Assessment", "Weekly Updates"]
    },
    {
      name: "Crypto Portfolio Management",
      category: "Signal Mastery",
      price: "$149",
      rating: 4.8,
      students: 2156,
      duration: "7 hours",
      lessons: 28,
      image: "📈",
      description: "Build and manage a diversified crypto portfolio. Learn allocation strategies and rebalancing techniques.",
      level: "Beginner to Intermediate",
      features: ["Portfolio Tools", "Allocation Strategies", "Rebalancing Guide", "Performance Tracking"]
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
            <p className="text-xl text-[#73E212]/80 mb-12 max-w-3xl mx-auto">
              Master cryptocurrency trading with our expert-led courses. From beginners to advanced traders, 
              we have the perfect course to accelerate your trading journey.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-crypto-green" />
                <span className="text-[#73E212]/80">10,000+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-crypto-green" />
                <span className="text-[#73E212]/80">Expert-Led Content</span>
              </div>
              <div className="flex items-center gap-2">
                <PlayCircle className="w-5 h-5 text-crypto-green" />
                <span className="text-[#73E212]/80">Lifetime Access</span>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <Card key={index} className="glass-card hover:border-crypto-green/40 transition-all duration-300 group h-full flex flex-col">
                  <CardHeader>
                    <div className="text-5xl text-center mb-4">{course.image}</div>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-crypto-green/20 text-crypto-green">{course.category}</Badge>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-[#73E212]/80 ml-1">{course.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-white font-general mb-2">{course.name}</CardTitle>
                    <CardDescription className="text-[#73E212]/80 mb-4">{course.description}</CardDescription>
                    
                    <div className="space-y-2 text-sm text-[#73E212]/70">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {course.duration}
                        </div>
                        <div className="flex items-center">
                          <BookOpen className="w-4 h-4 mr-2" />
                          {course.lessons} lessons
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          {course.students} students
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {course.level}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <span className="text-2xl font-bold text-crypto-green">{course.price}</span>
                        {course.originalPrice && (
                          <span className="text-[#73E212]/70 line-through ml-2">{course.originalPrice}</span>
                        )}
                      </div>
                    </div>

                    <div className="mb-6 flex-1">
                      <h4 className="text-white font-semibold mb-3">What you'll get:</h4>
                      <ul className="space-y-2">
                        {course.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-[#73E212]/80 text-sm">
                            <div className="w-2 h-2 bg-crypto-green rounded-full mr-3 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full glow-button text-crypto-dark font-semibold mt-auto">
                      Enroll Now
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
                Ready to Master{' '}
                <span className="text-gradient">Crypto Trading?</span>
              </h2>
              <p className="text-xl text-[#73E212]/80 mb-8 max-w-2xl mx-auto">
                Join thousands of students who have transformed their trading skills and achieved financial success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="glow-button text-crypto-dark font-semibold px-8 py-4">
                  View All Courses
                </Button>
                <Button variant="outline" className="border-crypto-green text-crypto-green hover:bg-crypto-green hover:text-crypto-dark px-8 py-4">
                  Free Preview
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

export default Courses;
