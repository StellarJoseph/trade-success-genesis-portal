const MobileTradingSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-general mb-6 text-white">
              Seamless Trading{' '}
              <span className="text-[#73E212]">With Your Phone</span>
            </h2>
            
            <p className="text-xl text-white mb-8">
              Trade from anywhere. Get signals. Execute trades. Earn daily.
              Our mobile-optimized platform puts the power of professional 
              cryptocurrency trading in your pocket.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#73E212]/20 to-[#73E212]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💳</span>
                </div>
                <div className="text-sm text-white">Instant Payments</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#73E212]/20 to-[#73E212]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <div className="text-sm text-white">Lightning Fast</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#73E212]/20 to-[#73E212]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <div className="text-sm text-white">Global Access</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-[#73E212] rounded-full"></div>
                <span className="text-white">Real-time market notifications</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-[#73E212] rounded-full"></div>
                <span className="text-white">One-tap trade execution</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-[#73E212] rounded-full"></div>
                <span className="text-white">Secure biometric authentication</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="glass-card p-8 rounded-3xl animate-float">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-white">Portfolio Balance</span>
                  <span className="text-[#73E212] font-bold text-xl">$127,459.32</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-[#73E212]/10 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#73E212] rounded-full flex items-center justify-center">
                        <span className="text-black text-xs font-bold">BTC</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">Bitcoin</div>
                        <div className="text-xs text-white">BTC</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[#73E212] font-bold">+12.5%</div>
                      <div className="text-xs text-white">$52,340</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-[#73E212]/5 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">ETH</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">Ethereum</div>
                        <div className="text-xs text-white">ETH</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[#73E212] font-bold">+8.3%</div>
                      <div className="text-xs text-white">$3,240</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-[#73E212]/5 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">BNB</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">BNB</div>
                        <div className="text-xs text-white">BNB</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[#73E212] font-bold">+15.7%</div>
                      <div className="text-xs text-white">$2,180</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-[#73E212]/5 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">SOL</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">Solana</div>
                        <div className="text-xs text-white">SOL</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[#73E212] font-bold">+22.1%</div>
                      <div className="text-xs text-white">$1,890</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-[#73E212]/5 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">USDT</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">USDT</div>
                        <div className="text-xs text-white">USDT</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-bold">+0.1%</div>
                      <div className="text-xs text-white">$5,000</div>
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
