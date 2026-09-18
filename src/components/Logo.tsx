interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export default function Logo({ size = 'md', showText = true }: LogoProps) {
  const sizes = {
    sm: { container: 'w-8 h-8', text: 'text-sm' },
    md: { container: 'w-10 h-10', text: 'text-lg' },
    lg: { container: 'w-14 h-14', text: 'text-2xl' },
  };

  const s = sizes[size];

  return (
    <div className="flex items-center gap-2.5">
      <div className={`${s.container} relative flex items-center justify-center`}>
        <svg viewBox="0 0 100 120" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/*defs*/}
          <defs>
            <linearGradient id="towerGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#7f1d1d" />
              <stop offset="30%" stopColor="#991b1b" />
              <stop offset="60%" stopColor="#dc2626" />
              <stop offset="85%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>
            <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1e3a5f" />
            </linearGradient>
          </defs>
          
          {/* حلقه آبی */}
          <path
            d="M 15 60 A 35 35 0 1 1 85 60"
            fill="none"
            stroke="url(#ringGrad)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          
          {/* برج پلکانی */}
          <path
            d="M 35 110 L 35 85 L 38 85 L 38 70 L 41 70 L 41 55 L 44 55 L 44 40 L 47 40 L 47 28 L 50 22 L 53 28 L 53 40 L 56 40 L 56 55 L 59 55 L 59 70 L 62 70 L 62 85 L 65 85 L 65 110 Z"
            fill="url(#towerGrad)"
          />
          
          {/* طاق ایرانی در پایه */}
          <path
            d="M 42 110 L 42 100 A 8 8 0 0 1 58 100 L 58 110 Z"
            fill="#fef3c7"
            opacity="0.9"
          />
          
          {/* چشم نگهبان */}
          <circle cx="50" cy="50" r="5" fill="white" />
          <circle cx="50" cy="50" r="5" fill="none" stroke="#1e40af" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="2" fill="#1e3a5f" />
          
          {/* پنجره‌ها */}
          <rect x="44" y="62" width="4" height="4" rx="0.5" fill="#fef3c7" opacity="0.7" />
          <rect x="52" y="62" width="4" height="4" rx="0.5" fill="#fef3c7" opacity="0.7" />
          <rect x="44" y="75" width="4" height="4" rx="0.5" fill="#fef3c7" opacity="0.7" />
          <rect x="52" y="75" width="4" height="4" rx="0.5" fill="#fef3c7" opacity="0.7" />
          <rect x="44" y="88" width="4" height="4" rx="0.5" fill="#fef3c7" opacity="0.7" />
          <rect x="52" y="88" width="4" height="4" rx="0.5" fill="#fef3c7" opacity="0.7" />
        </svg>
      </div>
      
      {showText && (
        <div className="flex flex-col">
          <span className={`${s.text} font-bold brand-text-gradient leading-tight`}>
            برج بان
          </span>
          <span className="text-[10px] text-slate-500 tracking-wide leading-tight">
            راهنمای ساختمان
          </span>
        </div>
      )}
    </div>
  );
}
