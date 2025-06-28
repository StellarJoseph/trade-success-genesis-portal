import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is TradeSuccess.VIP legit and trustworthy?",
      answer: "Absolutely. TradeSuccess.VIP is backed by a team of experienced traders, developers, and crypto analysts. We use real-time trading strategies, AI automation, and secure infrastructure to help over 70,000+ users trade safely and profitably. Transparency, performance, and client satisfaction are our top priorities."
    },
    {
      question: "Will I really make profit from your signals or portfolio services?",
      answer: "Yes — but responsibly. Our signals and portfolio strategies are tested, data-driven, and backed by real trade results. While the crypto market carries inherent risks, our goal is to maximize gains and minimize losses through smart execution and market timing. We even offer screenshots of past results so you can verify before joining."
    },
    {
      question: "I'm a beginner. Can I still benefit?",
      answer: "Absolutely. We designed TradeSuccess.VIP to be user-friendly for beginners and powerful enough for advanced traders. Whether you want to learn through our courses, copy expert signals, or have us trade on your behalf, we've got you covered — no experience required."
    },
    {
      question: "Is my crypto or personal information safe?",
      answer: "Yes — your security is our top priority. We use FIPS 140-2 validated Hardware Security Modules (HSMs), the same encryption standard trusted by U.S. government agencies. Our system also features secure user authentication and a non-custodial bot model, which means you remain in full control of your funds at all times. Personal data is protected by strict privacy policies and best-in-class security protocols, ensuring your information is always safe, encrypted, and never shared without consent."
    },
    {
      question: "What makes your trading bots different?",
      answer: "Our bots are customized to our proven signal strategies. Unlike generic bots, we fine-tune them based on market trends, community insights, and human oversight. You get automated profits while staying in control of your funds and risk level."
    },
    {
      question: "Is connecting your trading bot to my crypto account safe?",
      answer: "Our Trading Bot operates with read-only and trade-only permissions—meaning it can analyze data and place trades, but cannot withdraw your funds from the exchange. For added protection, we strongly recommend enabling Two-Factor Authentication (2FA) to keep your account access safe and secure at all times."
    },
    {
      question: "What kind of returns should I expect?",
      answer: "While results vary by market conditions and strategy, members using our signals and portfolio services have reported monthly returns between 40% to 500%. These aren't guesses — we share real data, and you'll receive weekly performance reports as part of your plan."
    },
    {
      question: "What's the difference between signals, bots, and portfolio management?",
      answer: "• Signals: You get alerts to manually trade with.\n• Bots: Automated execution of trades on your behalf.\n• Portfolio Management: We handle your crypto completely — ideal for hands-free investors.\nYou can use one, two, or all three based on your preference."
    },
    {
      question: "Can I join from anywhere in the world?",
      answer: "Yes. TradeSuccess.VIP is a global platform, accessible from over 19 countries. Our platform supports multiple currencies and exchanges. All you need is a smartphone or laptop with internet access."
    },
    {
      question: "What happens if I don't like the service?",
      answer: "We're confident you'll love it. But if you're unsure, start with a low-tier plan to test it out. You can upgrade, pause, or cancel anytime. For Portfolio Plans, we offer a dedicated manager to help resolve concerns quickly."
    },
    {
      question: "How do I get started?",
      answer: "Simply Create an Account, choose your preferred plan (signals, challenge, or portfolio), and start receiving your tools instantly. We also offer onboarding support, video walkthroughs, and live chat to get you up and running with confidence."
    },
    {
      question: "How do I buy cryptocurrency through your platform?",
      answer: "Getting started is easy. You can buy on any reliable platform, such as by bit, binate and others. You can also purchase cryptocurrency directly on our platform using bank transfer to benefit from our merchant services. We guide you through each step securely, ensuring a smooth onboarding experience for both beginners and advanced users."
    },
    {
      question: "How do I store my crypto safely?",
      answer: "Your security is our priority. We offer secure wallet options with multi-layer encryption, including cold storage for long-term asset protection. For added peace of mind, our infrastructure includes insurance coverage against breaches and unauthorized access. We use a FIPS 140-2 validated HSM which is one of the most secure and trusted ways to manage cryptographic data. It's like storing your most sensitive information in a military-grade digital vault—used by institutions that can't afford to get security wrong."
    },
    {
      question: "How do crypto transactions work here?",
      answer: "All crypto transactions are processed via trusted blockchain networks and are fully traceable and secure. Our platform abstracts the complexity, giving you a simple, user-friendly interface to send, receive, and track your transactions — without compromising on transparency or control."
    },
    {
      question: "Can I use cryptocurrency for everyday purchases?",
      answer: "Absolutely. We make crypto spending easy and practical. Through our merchant services, we help clients convert crypto to local currency and initiate direct deposits into their local bank accounts—safely and efficiently. In addition, we partner with trusted merchants and payment gateways, enabling you to use your crypto for real-world transactions like shopping, subscriptions, or digital products. Everything is handled through our secure, compliant infrastructure, giving you both flexibility and peace of mind."
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
          <p className="text-xl text-white max-w-3xl mx-auto">
            Still have questions? We've answered the most common ones below to help you feel confident, informed, and ready to trade smarter with us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
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
                  <p className="text-white leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 