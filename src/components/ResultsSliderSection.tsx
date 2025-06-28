const ResultsSliderSection = () => {
  const screenshots = [
    'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750685186/Screen_Shot_2025-06-21_at_9.50.41_PM_bbe644.jpg',
    'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750542970/Screen_Shot_2025-06-21_at_9.42.15_PM_ll6utl.jpg',
    'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750542970/Screen_Shot_2025-06-21_at_9.54.18_PM_winqes.jpg',
    'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750542969/Screen_Shot_2025-06-21_at_9.40.28_PM_ntzmwc.jpg',
    'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750542969/Screen_Shot_2025-06-21_at_9.52.18_PM_m0zyyt.jpg',
    'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750542968/Screen_Shot_2025-06-21_at_9.39.46_PM_mxpajk.jpg',
    'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750542969/Screen_Shot_2025-06-21_at_9.52.40_PM_a4xe6b.jpg',
    'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750542967/Screen_Shot_2025-06-21_at_9.38.57_PM_poiyhj.jpg',
    'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750542968/Screen_Shot_2025-06-21_at_9.52.51_PM_w1jhun.jpg',
    'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750542967/Screen_Shot_2025-06-21_at_9.36.37_PM_a675b6.jpg',
    'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750542968/Screen_Shot_2025-06-21_at_9.50.31_PM_ss0hni.jpg',
    'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750542966/Screen_Shot_2025-06-21_at_9.35.54_PM_f3c7ng.jpg',
    'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750685186/Screen_Shot_2025-06-21_at_9.50.53_PM_m2l0t3.jpg',
    'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750542966/Screen_Shot_2025-06-21_at_9.34.35_PM_weeift.jpg',
    'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750542967/Screen_Shot_2025-06-21_at_9.50.59_PM_tdsg8b.jpg',
    'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750542966/Screen_Shot_2025-06-21_at_9.35.42_PM_ajtxdf.jpg',
    'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750542967/Screen_Shot_2025-06-21_at_9.51.33_PM_oaj5nl.jpg',
    'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750542966/Screen_Shot_2025-06-21_at_9.35.36_PM_j8btxj.jpg',
    'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750542964/photo_2025-06-21_21.58.12_zlwqmg.jpg',
    'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750542967/Screen_Shot_2025-06-21_at_9.39.10_PM_qyofna.jpg'
  ];

  // Split screenshots into two rows
  const firstRowScreenshots = screenshots.slice(0, 10);
  const secondRowScreenshots = screenshots.slice(10, 20);

  return (
    <section id="results-section" className="py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-general mb-6 text-white">
            See the Power of Your Portfolio in{' '}
            <span className="text-[#73E212]">Action</span>
          </h2>
          <p className="text-xl text-[#73E212]/70 max-w-3xl mx-auto">
            Transparent trading results from real portfolios managed by our platform
          </p>
        </div>

        {/* Carousel Container with Border */}
        <div className="border-2 border-[#73E212]/30 rounded-3xl p-8 bg-black/50 backdrop-blur-sm overflow-hidden">
          <div className="space-y-8">
            {/* First Row - Slides Left to Right */}
            <div className="relative">
              <div className="flex animate-slide-left-to-right-fast gap-4 md:gap-6">
                {[...firstRowScreenshots, ...firstRowScreenshots].map((screenshot, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 w-[300px] h-[300px] relative rounded-2xl overflow-hidden carousel-glow-border group hover:pause-animation"
                  >
                    <img 
                      src={screenshot} 
                      alt={`Trading Result ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/20 transition-all duration-300"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Second Row - Slides Right to Left */}
            <div className="relative">
              <div className="flex animate-slide-right-to-left-fast gap-4 md:gap-6">
                {[...secondRowScreenshots, ...secondRowScreenshots].map((screenshot, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 w-[300px] h-[300px] relative rounded-2xl overflow-hidden carousel-glow-border group hover:pause-animation"
                  >
                    <img 
                      src={screenshot} 
                      alt={`Trading Result ${index + 11}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/20 transition-all duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSliderSection;
