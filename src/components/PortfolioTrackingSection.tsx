const PortfolioTrackingSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-general mb-6 text-white text-center">
            Manage Your Transactions in One Place
            <br />
            <span className="text-[#73E212]">Track Your Growth. Stay in Control.</span>
          </h2>
          
          <p className="text-xl text-[#73E212]/70 mb-12 leading-relaxed">
            Comprehensive portfolio management with real-time tracking and detailed insights
          </p>
          
          {/* Centered Dashboard Image with Animation */}
          <div className="mb-12">
            <img 
              src="https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750696863/DASHBOARD_PAGE_fih9fj.png" 
              alt="Professional crypto portfolio dashboard showing real-time trading data, performance graphs, and asset allocation with secure interface design"
              className="w-full max-w-5xl mx-auto rounded-3xl shadow-2xl border border-[#73E212]/20 animate-dashboard-pop"
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12 text-left">
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-[#73E212] mb-3">Live Tracking</h3>
              <p className="text-gray-300">Monitor your token and asset performance in real time — from Bitcoin to gemcoins.</p>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-[#73E212] mb-3">ROI Insights</h3>
              <p className="text-gray-300">Visualize your portfolio growth with dynamic graphs and performance logs.</p>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-[#73E212] mb-3">Secure & Private</h3>
              <p className="text-gray-300">Only you can access your dashboard. Your funds remain in your control, always.</p>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-[#73E212] mb-3">Downloadable Reports</h3>
              <p className="text-gray-300">Receive weekly and monthly PDF summaries — perfect for personal review or tax filing.</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <button className="glow-button text-black font-semibold px-8 py-4 h-auto">
              See Dashboard Features
            </button>
            <button className="border border-[#73E212] text-[#73E212] hover:bg-[#73E212] hover:text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Start Managing My Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioTrackingSection;
