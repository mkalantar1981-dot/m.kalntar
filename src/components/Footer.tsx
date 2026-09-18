import { useApp } from '../context/AppContext';
import Logo from './Logo';

export default function Footer() {
  const { setShowConsultation } = useApp();

  return (
    <footer className="bg-slate-900 text-slate-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Logo size="md" />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              راهنمای مدیر و ساکن ساختمان. ابزار مدیریت روزمره، راهنمای قانونی و مسیر طبیعی اتصال به مشاوره بیمه دفتر ما اندیشه.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-3 text-sm">دسترسی سریع</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><span className="hover:text-white transition-colors cursor-pointer">قانون تملک آپارتمان‌ها</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">نمونه فرم‌های مدیریتی</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">محاسبه‌گر شارژ</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">راهنمای مجمع عمومی</span></li>
            </ul>
          </div>

          {/* Consultation CTA */}
          <div>
            <h3 className="font-semibold text-white mb-3 text-sm">مشاوره رایگان</h3>
            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              برای مشاوره بیمه ساختمان و مسئولیت مدیر، با دفتر بیمه ما اندیشه تماس بگیرید.
            </p>
            <button
              onClick={() => setShowConsultation(true)}
              className="bg-red-700 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer"
            >
              💬 درخواست مشاوره
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-slate-500">
            © ۱۴۰۵ برج بان — تمامی حقوق محفوظ است
          </p>
          <p className="text-xs text-slate-500 text-center sm:text-right">
            این راهنما توسط <span className="text-red-400 font-medium">دفتر بیمه ما اندیشه</span> تهیه و به‌صورت رایگان در اختیار مدیران و ساکنین قرار گرفته است.
          </p>
        </div>
      </div>
    </footer>
  );
}
