import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PrivacyPolicy = () => {
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
            Privacy Policy
          </h1>

          <div className="bg-black/40 border border-[#73E212]/20 rounded-lg p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-[#73E212]">Effective Date:</strong> January 1, 2024
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
              <h2 className="text-2xl font-bold text-[#73E212] mb-4">1. Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                Your privacy matters to us. This Privacy Policy explains how TradeSuccess.VIP collects, uses, discloses, and protects your personal information when you use our website, trading tools, and portfolio management services.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                By using our services, you consent to the collection and use of your data as outlined in this policy.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-[#73E212] mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">a. Information You Provide</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li><strong>Account Details:</strong> Name, email address, phone number</li>
                <li><strong>Subscription Info:</strong> Plan level, billing information</li>
                <li><strong>KYC (if applicable):</strong> Government-issued ID, utility bills</li>
                <li><strong>Communications:</strong> Messages or inquiries via email, chat, or support forms</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">b. Information Collected Automatically</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>Device Data:</strong> IP address, browser type, operating system</li>
                <li><strong>Usage Data:</strong> Page visits, click patterns, session time</li>
                <li><strong>Analytics Tools:</strong> We may use Google Analytics or similar to monitor behavior and improve user experience</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-[#73E212] mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use your data to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Deliver services like trading signals, bot access, and portfolio updates</li>
                <li>Manage your subscriptions and accounts</li>
                <li>Send notifications, updates, or service messages</li>
                <li>Provide customer support and resolve issues</li>
                <li>Analyze service usage and improve our platform</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="text-gray-300 leading-relaxed font-semibold">
                We <span className="text-[#73E212]">do not sell</span> your personal information to third parties.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-[#73E212] mb-4">4. Legal Basis for Processing</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We process your data under the following legal grounds:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Your <strong>consent</strong> (e.g., when subscribing)</li>
                <li><strong>Contractual necessity</strong> (to provide services)</li>
                <li><strong>Legal compliance</strong> (e.g., AML, tax laws)</li>
                <li><strong>Legitimate interests</strong> (improving our platform and security)</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-[#73E212] mb-4">5. Data Sharing</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li><strong>Trusted third-party service providers</strong> (e.g., cloud hosting, email providers)</li>
                <li><strong>Regulatory or legal authorities</strong>, when required by law</li>
                <li><strong>Payment processors</strong>, for secure transaction handling</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                All third-party services are required to meet security and confidentiality obligations.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-[#73E212] mb-4">6. Data Retention</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We retain your data:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>As long as your account is active</li>
                <li>As necessary to fulfill our legal or contractual obligations</li>
                <li>Or until you request data deletion, subject to regulatory requirements</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-bold text-[#73E212] mb-4">7. Your Rights</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Depending on your jurisdiction, you may have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Access the personal data we hold about you</li>
                <li>Correct or update your personal information</li>
                <li>Request deletion of your data (subject to legal restrictions)</li>
                <li>Withdraw consent to data processing</li>
                <li>File a complaint with a relevant data protection authority</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                To exercise any of these rights, contact us at{' '}
                <a href="mailto:support@tradesuccess.vip" className="text-[#73E212] hover:text-[#73E212]/80 font-semibold">
                  support@tradesuccess.vip
                </a>
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-bold text-[#73E212] mb-4">8. Data Security</h2>
              <p className="text-gray-300 leading-relaxed">
                We use industry-standard encryption and access controls to protect your information. However, no system is 100% secure. We encourage users to use strong passwords and enable 2FA where available.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-bold text-[#73E212] mb-4">9. Children's Privacy</h2>
              <p className="text-gray-300 leading-relaxed">
                Our services are not intended for individuals under 18. We do not knowingly collect or store data from children.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-bold text-[#73E212] mb-4">10. International Transfers</h2>
              <p className="text-gray-300 leading-relaxed">
                If you access our services outside our operating country, your data may be transferred to and processed in countries with different data protection laws. We ensure such transfers comply with applicable legal standards.
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-2xl font-bold text-[#73E212] mb-4">11. Changes to this Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy to reflect changes to our practices or legal obligations. Updates will be posted here with an updated "Effective Date." Continued use of our services indicates your acceptance of the updated policy.
              </p>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-2xl font-bold text-[#73E212] mb-4">12. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                For questions or concerns about this policy, contact:{' '}
                <a href="mailto:support@tradesuccess.vip" className="text-[#73E212] hover:text-[#73E212]/80 font-semibold">
                  support@tradesuccess.vip
                </a>
              </p>
            </section>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-[#73E212]/20 text-center">
            <p className="text-gray-400 text-sm">
              Last updated: January 1, 2024
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

export default PrivacyPolicy;
