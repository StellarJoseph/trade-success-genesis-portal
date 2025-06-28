import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQComponent from '@/components/FAQ';

const FAQ = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-20">
        <FAQComponent />
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
