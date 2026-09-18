import { useApp } from '../context/AppContext';
import Logo from './Logo';

export default function Header() {
  const { role, setRole } = useApp();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-red-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <button
            onClick={() => setRole('landing')}
            className="group cursor-pointer"
          >
            <Logo size="md" />
          </button>

          {/* Role Badge */}
          {role !== 'landing' && (
            <div className="flex items-center gap-3">
              <span className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                role === 'manager'
                  ? 'bg-red-100 text-red-800'
                  : 'bg-emerald-100 text-emerald-700'
              }`}>
                {role === 'manager' ? '👨‍💼 پنل مدیر' : '🏠 پنل ساکن'}
              </span>
              <button
                onClick={() => setRole('landing')}
                className="text-sm text-slate-500 hover:text-red-700 transition-colors cursor-pointer"
              >
                تغییر نقش
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
