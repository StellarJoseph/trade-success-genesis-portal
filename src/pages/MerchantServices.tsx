import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
const placeholder = "/placeholder.svg";

const MerchantServices = () => (
  <div className="min-h-screen bg-[#0B0B23] text-white">
    <Helmet>
      <title>Merchant Services | TradeSuccess</title>
      <meta name="description" content="Accept crypto and fiat payments easily. Our merchant gateway is tailored for online stores and service platforms, making payments seamless for businesses and creators." />
      <meta name="keywords" content="merchant services, crypto payments, fiat payments, ecommerce, online store, TradeSuccess" />
    </Helmet>
    <Header />
    <main className="pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Merchant</span> <span className="text-[#73E212]">Services</span>
          </h1>
          <img src={placeholder} alt="Merchant Services" className="mx-auto mb-8 w-full max-w-md rounded-2xl shadow-lg" />
          <p className="text-xl text-gray-300 mb-8">
            Accept crypto and fiat payments with ease. Our merchant gateway is designed for online stores and service platforms, empowering businesses and creators to receive payments securely and efficiently.
          </p>
          <Button className="!bg-[#73E212] !text-black hover:!bg-white hover:!text-[#73E212] font-semibold text-lg px-8 py-4 transition-all duration-300">
            Get Started
          </Button>
        </div>
      </section>
      <section className="py-16 bg-[#131240] mt-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <img src={placeholder} alt="Merchant Gateway" className="w-full max-w-sm rounded-xl shadow-lg" />
          <div className="flex-1 text-left">
            <h2 className="text-3xl font-bold mb-4 text-[#73E212]">Why Our Gateway?</h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Accept crypto and fiat payments</li>
              <li>Easy integration for online stores</li>
              <li>Secure, fast, and reliable</li>
              <li>Perfect for businesses and creators</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default MerchantServices;