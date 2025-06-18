
const MobileTradingSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-general mb-6">
              Seamless Trading{' '}
              <span className="text-gradient">With Your Phone</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Trade from anywhere. Get signals. Execute trades. Earn daily.
              Our mobile-optimized platform puts the power of professional 
              cryptocurrency trading in your pocket.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-crypto-green/20 to-crypto-green-light/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💳</span>
                </div>
                <div className="text-sm text-gray-400">Instant Payments</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-crypto-green/20 to-crypto-green-light/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <div className="text-sm text-gray-400">Lightning Fast</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-crypto-green/20 to-crypto-green-light/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <div className="text-sm text-gray-400">Global Access</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-crypto-green rounded-full"></div>
                <span className="text-gray-300">Real-time market notifications</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-crypto-green rounded-full"></div>
                <span className="text-gray-300">One-tap trade execution</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-crypto-green rounded-full"></div>
                <span className="text-gray-300">Secure biometric authentication</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="glass-card p-8 rounded-3xl animate-float">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Portfolio Balance</span>
                  <span className="text-crypto-green font-bold text-xl">$127,459.32</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-crypto-green/10 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-crypto-green rounded-full flex items-center justify-center">
                        <span className="text-crypto-dark text-xs font-bold">BTC</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">Bitcoin</div>
                        <div className="text-xs text-gray-400">BTC</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-crypto-green font-bold">+12.5%</div>
                      <div className="text-xs text-gray-400">$52,340</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-crypto-green/5 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">ETH</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">Ethereum</div>
                        <div className="text-xs text-gray-400">ETH</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-crypto-green font-bold">+8.3%</div>
                      <div className="text-xs text-gray-400">$3,240</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileTradingSection;
