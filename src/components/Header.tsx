import { useApp } from '../context/AppContext';

export default function Header() {
  const { role, setRole } = useApp();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <button
            onClick={() => setRole('landing')}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-lg">🏢</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-slate-800 group-hover:text-blue-700 transition-colors leading-tight">
                مدیریار
              </span>
              <span className="text-[10px] text-slate-500 tracking-wide leading-tight">
                دستیار هوشمند ساختمان
              </span>
            </div>
          </button>

          {/* Role Badge */}
          {role !== 'landing' && (
            <div className="flex items-center gap-3">
              <span className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                role === 'manager'
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-emerald-100 text-emerald-700'
              }`}>
                {role === 'manager' ? '👨‍💼 پنل مدیر' : '🏠 پنل ساکن'}
              </span>
              <button
                onClick={() => setRole('landing')}
                className="text-sm text-slate-500 hover:text-slate-700 transition-colors cursor-pointer"
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
