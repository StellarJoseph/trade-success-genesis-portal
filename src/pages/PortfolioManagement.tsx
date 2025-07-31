import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
const placeholder = "/placeholder.svg";

const PortfolioManagement = () => (
  <div className="min-h-screen bg-[#0B0B23] text-white">
    <Helmet>
      <title>Portfolio Management | TradeSuccess</title>
      <meta name="description" content="Hands-off crypto asset management. We securely and transparently manage your portfolio to grow your assets without daily involvement." />
      <meta name="keywords" content="crypto portfolio management, asset management, hands-off investing, secure, transparent, TradeSuccess" />
    </Helmet>
    <Header />
    <main className="pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Portfolio</span> <span className="text-[#73E212]">Management</span>
          </h1>
          <img src={placeholder} alt="Portfolio Management" className="mx-auto mb-8 w-full max-w-md rounded-2xl shadow-lg" />
          <p className="text-xl text-gray-300 mb-8">
            Let our experts manage your crypto assets securely and transparently. We grow your portfolio using proven strategies, so you can enjoy results without the stress or daily involvement.
          </p>
          <Button className="!bg-[#73E212] !text-black hover:!bg-white hover:!text-[#73E212] font-semibold text-lg px-8 py-4 transition-all duration-300">
            Get Managed Today
          </Button>
        </div>
      </section>
      <section className="py-16 bg-[#131240] mt-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <img src={placeholder} alt="Portfolio Growth" className="w-full max-w-sm rounded-xl shadow-lg" />
          <div className="flex-1 text-left">
            <h2 className="text-3xl font-bold mb-4 text-[#73E212]">Why Choose Us?</h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Secure, API-based portfolio management</li>
              <li>Transparent reporting and live dashboards</li>
              <li>Personalized growth strategies</li>
              <li>No daily effort required from you</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default PortfolioManagement;