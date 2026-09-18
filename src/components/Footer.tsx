export default function Footer() {
  return (
    <footer className="bg-amber-950 text-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">☕</span>
              <span className="text-xl font-bold text-white">Artisan Roast</span>
            </div>
            <p className="text-amber-300 text-sm leading-relaxed">
              Curating the world's finest single-origin coffees, roasted with care and delivered fresh to your door.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-amber-300">
              <li><span className="hover:text-white transition-colors cursor-pointer">Our Story</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Coffee Collection</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Brewing Guides</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Subscription</span></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-3">Support</h3>
            <ul className="space-y-2 text-sm text-amber-300">
              <li><span className="hover:text-white transition-colors cursor-pointer">Shipping Info</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Returns</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">FAQ</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Contact Us</span></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-white mb-3">Stay Connected</h3>
            <p className="text-sm text-amber-300 mb-3">Get brewing tips and exclusive offers.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-lg bg-amber-900 border border-amber-700 text-white placeholder-amber-400 text-sm outline-none focus:border-amber-500"
              />
              <button className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-lg text-sm font-medium transition-colors cursor-pointer">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-amber-400">
            © 2026 Artisan Roast. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="text-amber-400 hover:text-white transition-colors cursor-pointer text-lg">📘</span>
            <span className="text-amber-400 hover:text-white transition-colors cursor-pointer text-lg">📷</span>
            <span className="text-amber-400 hover:text-white transition-colors cursor-pointer text-lg">🐦</span>
            <span className="text-amber-400 hover:text-white transition-colors cursor-pointer text-lg">📌</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
