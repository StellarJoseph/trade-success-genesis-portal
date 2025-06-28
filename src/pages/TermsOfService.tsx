import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-[#73E212]/20">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" className="text-[#73E212] hover:text-[#73E212]/80">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <img 
                src="https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750696761/TS_LOGO_juw9he.png" 
                alt="TradeSuccess.VIP Logo" 
                className="h-8 w-auto"
              />
              <span className="text-[#73E212] font-bold text-lg">TradeSuccess.VIP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-center mb-8 text-[#73E212]">
            Terms of Service
          </h1>

          <div className="bg-black/40 border border-[#73E212]/20 rounded-lg p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-[#73E212]">Effective Date:</strong> January 1, 2025
              </div>
              <div>
                <strong className="text-[#73E212]">Company Name:</strong> TradeSuccess.VIP
              </div>
              <div>
                <strong className="text-[#73E212]">Website:</strong> 
                <a href="https://www.tradesuccess.vip" className="text-[#73E212] hover:text-[#73E212]/80 ml-1">
                  https://www.tradesuccess.vip
                </a>
              </div>
              <div>
                <strong className="text-[#73E212]">Contact:</strong> 
                <a href="mailto:support@tradesuccess.vip" className="text-[#73E212] hover:text-[#73E212]/80 ml-1">
                  support@tradesuccess.vip
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-[#73E212] mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing or using our platform, services, or any content provided by TradeSuccess.VIP, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use our services.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-[#73E212] mb-4">2. Services Overview</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                TradeSuccess.VIP provides cryptocurrency-related services including:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>AI-powered crypto trading bots</li>
                <li>Trading signals and research</li>
                <li>Managed portfolio investment services</li>
                <li>Market education and tools</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Services may be updated, suspended, or changed at our discretion.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-[#73E212] mb-4">3. Eligibility</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                To use our platform, you must:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Be at least 18 years old</li>
                <li>Have the legal capacity to enter a binding agreement</li>
                <li>Not be barred from using crypto platforms in your jurisdiction</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to deny access to any user without prior notice if violations or suspicious activity are detected.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-[#73E212] mb-4">4. Account Registration</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You are responsible for:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Providing accurate, up-to-date account details</li>
                <li>Maintaining the confidentiality of your login credentials</li>
                <li>All activity that occurs under your account</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Please notify us immediately of unauthorized access or security breaches.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-[#73E212] mb-4">5. Investment Disclaimer</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We do not provide financial, tax, or investment advice.<br />
                All investment decisions and trading activity are at your sole discretion and risk.
              </p>
              <p className="text-gray-300 leading-relaxed font-semibold">
                <span className="text-[#73E212]">We take the security of your funds seriously, and we implement risk-mitigation strategies — but we cannot guarantee profits.</span> You acknowledge that cryptocurrency markets are volatile and outcomes can vary.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-[#73E212] mb-4">6. Payment and Subscription</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Some services require payment or subscription. By subscribing:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>You agree to recurring billing (if applicable)</li>
                <li>You authorize us to charge your provided payment method</li>
                <li>Refunds are granted only at our discretion or as required by law</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Upgrading or downgrading plans will take effect immediately or at the end of the current billing cycle.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-bold text-[#73E212] mb-4">7. Trading Bots and Signal Use</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Bots are provided as a tool, not a guarantee of success</li>
                <li>Past performance is not indicative of future results</li>
                <li>Users should monitor automated activity and set risk parameters carefully</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Misuse of our systems or tampering may result in account suspension.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-bold text-[#73E212] mb-4">8. Managed Portfolio Services</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you opt into our managed portfolio service:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>You authorize us to trade crypto assets on your behalf</li>
                <li>Your funds remain in secure, designated accounts</li>
                <li>You will receive regular reports and retain full visibility</li>
                <li>We charge a management or performance-based fee as outlined on our Pricing page</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-bold text-[#73E212] mb-4">9. Acceptable Use Policy</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Use our platform for illegal or unauthorized purposes</li>
                <li>Interfere with platform functionality or security</li>
                <li>Share your account or login credentials with others</li>
                <li>Violate intellectual property rights or misuse our content</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Violations may result in immediate account termination.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-bold text-[#73E212] mb-4">10. Intellectual Property</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                All content, trademarks, and software on TradeSuccess.VIP are the property of the company or its partners. You may not:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Copy or distribute platform content without permission</li>
                <li>Reverse-engineer or decompile our systems</li>
                <li>Use our name, logo, or designs without written consent</li>
              </ul>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-2xl font-bold text-[#73E212] mb-4">11. Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                To the maximum extent permitted by law:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>TradeSuccess.VIP will not be liable for indirect, incidental, or consequential losses</li>
                <li>This includes losses due to missed trades, system downtime, or market volatility</li>
                <li>Our liability is limited to the amount you paid us in the 3 months preceding the event</li>
              </ul>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-2xl font-bold text-[#73E212] mb-4">12. Termination</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may suspend or terminate your access at any time if:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>You violate these terms</li>
                <li>Engage in fraudulent or abusive activity</li>
                <li>Misuse platform tools or attempt to circumvent security</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                You may close your account at any time by contacting support.
              </p>
            </section>

            {/* Section 13 */}
            <section>
              <h2 className="text-2xl font-bold text-[#73E212] mb-4">13. Governing Law</h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms are governed by the laws of the United States.<br />
                Any disputes shall be resolved in the appropriate courts within this jurisdiction.
              </p>
            </section>

            {/* Section 14 */}
            <section>
              <h2 className="text-2xl font-bold text-[#73E212] mb-4">14. Updates to These Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update these Terms of Service at any time.<br />
                We will notify users via email or platform notice. Continued use after updates constitutes acceptance.
              </p>
            </section>

            {/* Section 15 */}
            <section>
              <h2 className="text-2xl font-bold text-[#73E212] mb-4">15. Contact</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Questions or concerns?
              </p>
              <p className="text-gray-300 leading-relaxed">
                Email: <a href="mailto:support@tradesuccess.vip" className="text-[#73E212] hover:text-[#73E212]/80 font-semibold">support@tradesuccess.vip</a><br />
                Website: <a href="https://www.tradesuccess.vip" className="text-[#73E212] hover:text-[#73E212]/80">https://www.tradesuccess.vip</a>
              </p>
            </section>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-[#73E212]/20 text-center">
            <p className="text-gray-400 text-sm">
              Last updated: January 1, 2025
            </p>
            <div className="mt-4">
              <Link to="/">
                <Button className="bg-[#73E212] text-black hover:bg-[#73E212]/90">
                  Return to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
