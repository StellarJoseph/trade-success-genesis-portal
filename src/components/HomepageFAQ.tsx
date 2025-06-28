import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomepageFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is TradeSuccess.VIP legit and trustworthy?",
      answer: "Absolutely. TradeSuccess.VIP is backed by a team of experienced traders, developers, and crypto analysts. We use real-time trading strategies, AI automation, and secure infrastructure to help over 70,000+ users trade safely and profitably."
    },
    {
      question: "Will I really make profit from your services?",
      answer: "Yes — but responsibly. Our signals and portfolio strategies are tested, data-driven, and backed by real trade results. While the crypto market carries inherent risks, our goal is to maximize gains and minimize losses through smart execution."
    },
    {
      question: "I'm a beginner. Can I still benefit?",
      answer: "Absolutely. We designed TradeSuccess.VIP to be user-friendly for beginners and powerful enough for advanced traders. Whether you want to learn through our courses, copy expert signals, or have us trade on your behalf, we've got you covered."
    },
    {
      question: "Is my crypto and personal information safe?",
      answer: "Yes — your security is our top priority. We use FIPS 140-2 validated Hardware Security Modules (HSMs), the same encryption standard trusted by U.S. government agencies. You remain in full control of your funds at all times."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-general mb-6 text-white">
            Frequently Asked <span className="text-[#73E212]">Questions</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto mb-8">
            Still have questions? We've answered the most common ones below to help you feel confident, informed, and ready to trade smarter with us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-[#73E212] last:border-b-0"
            >
              <button
                className="w-full flex items-center justify-between py-6 text-left hover:text-[#73E212] transition-colors duration-300 group"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg md:text-xl font-semibold font-general text-white group-hover:text-[#73E212] transition-colors duration-300 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-[#73E212]" />
                  ) : (
                    <Plus className="w-6 h-6 text-white group-hover:text-[#73E212] transition-colors duration-300" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="pb-6">
                  <p className="text-white leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/faq" 
            className="inline-flex items-center px-8 py-4 bg-[#73E212] text-black font-semibold rounded-xl hover:bg-[#73E212]/90 transition-colors duration-300"
          >
            View All FAQs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomepageFAQ; 