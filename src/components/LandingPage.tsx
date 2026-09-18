import { useApp } from '../context/AppContext';

export default function LandingPage() {
  const { setRole } = useApp();

  return (
    <div className="min-h-[calc(100vh-140px)] flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg mb-6">
            <span className="text-4xl">🏢</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            مدیریار
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            دستیار هوشمند مدیران و ساکنین ساختمان
            <br />
            <span className="text-base text-slate-500">راهنمای قانونی • چک‌لیست وظایف • مشاوره بیمه</span>
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Manager Card */}
          <button
            onClick={() => setRole('manager')}
            className="group bg-white rounded-2xl p-8 shadow-md border-2 border-transparent hover:border-blue-400 hover:shadow-xl transition-all duration-300 text-right cursor-pointer"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <span className="text-3xl">👨‍💼</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
                  مدیر ساختمان هستم
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  دسترسی به ابزارهای مدیریت
                </p>
              </div>
            </div>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center text-xs">✓</span>
                چک‌لیست وظایف ماهانه و فصلی
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center text-xs">✓</span>
                راهنمای قانونی و حقوقی
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center text-xs">✓</span>
                مشاوره بیمه ساختمان
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center text-xs">✓</span>
                یادآوری سرویس‌های دوره‌ای
              </li>
            </ul>
            <div className="mt-6 text-blue-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
              ورود به پنل مدیر
              <span>←</span>
            </div>
          </button>

          {/* Resident Card */}
          <button
            onClick={() => setRole('resident')}
            className="group bg-white rounded-2xl p-8 shadow-md border-2 border-transparent hover:border-emerald-400 hover:shadow-xl transition-all duration-300 text-right cursor-pointer"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                <span className="text-3xl">🏠</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">
                  ساکن ساختمان هستم
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  اطلاعات حقوقی و بیمه‌ای
                </p>
              </div>
            </div>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center text-xs">✓</span>
                حقوق و وظایف ساکنین
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center text-xs">✓</span>
                راهنمای بیمه‌های شخصی
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center text-xs">✓</span>
                بیمه خودرو و پارکینگ
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center text-xs">✓</span>
                مشاوره رایگان بیمه
              </li>
            </ul>
            <div className="mt-6 text-emerald-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
              ورود به پنل ساکن
              <span>←</span>
            </div>
          </button>
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm border border-slate-100">
            <span className="text-lg">🔒</span>
            <span className="text-sm text-slate-600">
              تهیه‌شده توسط مشاور بیمه • کاملاً رایگان و بدون نیاز به ثبت‌نام
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
