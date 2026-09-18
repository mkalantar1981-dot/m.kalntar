interface HeroProps {
  onNavigate: (page: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-8xl">☕</div>
        <div className="absolute top-40 right-20 text-6xl">🫘</div>
        <div className="absolute bottom-20 left-1/4 text-7xl">🌿</div>
        <div className="absolute bottom-10 right-10 text-5xl">✨</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>✨</span>
              <span>Handpicked & Freshly Roasted</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-amber-950 leading-tight mb-6">
              Discover Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-orange-600">
                Perfect Cup
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-amber-800/80 mb-8 max-w-lg mx-auto lg:mx-0">
              Explore our curated collection of premium single-origin coffees, 
              sourced from the world's finest growing regions and roasted to perfection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => onNavigate('shop')}
                className="bg-amber-900 hover:bg-amber-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
              >
                Shop Collection
              </button>
              <button
                onClick={() => onNavigate('shop')}
                className="border-2 border-amber-900 text-amber-900 hover:bg-amber-900 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-[120px]">☕</span>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="text-center">
                  <div className="text-2xl">🌍</div>
                  <div className="text-xs font-medium text-amber-800 mt-1">6 Origins</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 animate-bounce" style={{ animationDuration: '4s' }}>
                <div className="text-center">
                  <div className="text-2xl">⭐</div>
                  <div className="text-xs font-medium text-amber-800 mt-1">Premium</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-amber-200">
          {[
            { icon: '🌱', title: 'Single Origin', desc: 'Ethically sourced' },
            { icon: '🔥', title: 'Fresh Roasted', desc: 'Roasted to order' },
            { icon: '📦', title: 'Free Shipping', desc: 'Orders over $50' },
            { icon: '💎', title: 'Premium Quality', desc: 'Top 1% of beans' },
          ].map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="text-3xl mb-2">{feature.icon}</div>
              <div className="font-semibold text-amber-900 text-sm sm:text-base">{feature.title}</div>
              <div className="text-amber-700 text-xs sm:text-sm">{feature.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
