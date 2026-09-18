import { useCart } from '../context/CartContext';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Header({ onNavigate, currentPage }: HeaderProps) {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <span className="text-2xl sm:text-3xl">☕</span>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold text-amber-900 tracking-tight group-hover:text-amber-700 transition-colors">
                Artisan Roast
              </span>
              <span className="text-[10px] sm:text-xs text-amber-600 tracking-widest uppercase -mt-1">
                Premium Coffee
              </span>
            </div>
          </button>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => onNavigate('home')}
              className={`text-sm font-medium transition-colors cursor-pointer ${
                currentPage === 'home'
                  ? 'text-amber-900 border-b-2 border-amber-600 pb-1'
                  : 'text-amber-700 hover:text-amber-900'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('shop')}
              className={`text-sm font-medium transition-colors cursor-pointer ${
                currentPage === 'shop'
                  ? 'text-amber-900 border-b-2 border-amber-600 pb-1'
                  : 'text-amber-700 hover:text-amber-900'
              }`}
            >
              Shop
            </button>
          </nav>

          {/* Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-2 bg-amber-900 hover:bg-amber-800 text-white px-4 py-2 rounded-full transition-all cursor-pointer shadow-md hover:shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
            <span className="text-sm font-medium hidden sm:inline">Cart</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
