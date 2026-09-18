import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { insuranceItems } from '../data/insurance';

interface InsuranceSectionProps {
  role: 'manager' | 'resident';
}

export default function InsuranceSection({ role }: InsuranceSectionProps) {
  const { setShowConsultation } = useApp();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredItems = insuranceItems.filter(item =>
    item.forRole === role || item.forRole === 'both'
  );

  return (
    <div>
      {/* Warning Banner */}
      <div className="bg-gradient-to-l from-red-50 to-orange-50 rounded-xl p-5 mb-6 border border-red-100">
        <div className="flex items-start gap-3">
          <span className="text-2xl">⚠️</span>
          <div>
            <h3 className="font-semibold text-red-900 text-sm mb-1">
              {role === 'manager' ? 'بدون بیمه مسئولیت، تمام خسارات بر عهده شخص شماست!' : 'بدون بیمه مناسب، خسارات جبران‌ناپذیر خواهد بود.'}
            </h3>
            <p className="text-xs text-red-700 leading-relaxed">
              {role === 'manager'
                ? 'یک حادثه ساده مثل سقوط در آسانسور یا ترکیدگی لوله می‌تواند صدها میلیون تومان خسارت داشته باشد. بیمه مسئولیت مدیر، این ریسک را پوشش می‌دهد.'
                : 'بیمه‌های شخصی مثل بیمه محتوای منزل و بیمه حوادث، با هزینه کم از سرمایه زندگی شما محافظت می‌کنند.'
              }
            </p>
          </div>
        </div>
      </div>

      {/* Insurance Cards */}
      <div className="space-y-4">
        {filteredItems.map(item => {
          const isExpanded = expandedId === item.id;

          return (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-slate-100 overflow-hidden hover:border-red-200 transition-all"
            >
              <button
                onClick={() => setExpandedId(isExpanded ? null : item.id)}
                className="w-full p-5 flex items-start gap-3 text-right cursor-pointer"
              >
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">{item.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-800 text-sm sm:text-base">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    {item.description}
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 text-slate-400 transition-transform flex-shrink-0 ${isExpanded ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isExpanded && (
                <div className="px-5 pb-5 border-t border-slate-50">
                  <div className="pt-4 space-y-4">
                    {/* Coverage */}
                    <div>
                      <h4 className="text-xs font-semibold text-slate-600 mb-2 flex items-center gap-1.5">
                        <span>✅</span> پوشش‌ها:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.coverage.map((cov, i) => (
                          <span key={i} className="px-3 py-1 bg-red-50 text-red-700 text-xs rounded-full border border-red-100">
                            {cov}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Why Important */}
                    <div className="bg-amber-50 rounded-lg p-3 border border-amber-100">
                      <p className="text-xs text-amber-800 leading-relaxed">
                        <span className="font-semibold">چرا مهم است؟ </span>
                        {item.whyImportant}
                      </p>
                    </div>

                    {/* Cost Range */}
                    <div className="bg-slate-50 rounded-lg p-3 border border-slate-100">
                      <p className="text-xs text-slate-700">
                        <span className="font-semibold">💰 حدود هزینه: </span>
                        {item.costRange}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Consultation CTA */}
      <div className="mt-8 bg-gradient-to-l from-red-700 to-red-900 rounded-2xl p-6 sm:p-8 text-white text-center">
        <div className="text-4xl mb-3">💬</div>
        <h3 className="text-xl font-bold mb-2">مشاوره رایگان بیمه</h3>
        <p className="text-red-100 text-sm mb-5 max-w-md mx-auto leading-relaxed">
          برای انتخاب بهترین پوشش بیمه‌ای مناسب ساختمان و بودجه خود، با مشاور بیمه دفتر ما اندیشه تماس بگیرید.
        </p>
        <button
          onClick={() => setShowConsultation(true)}
          className="bg-white text-red-700 hover:bg-red-50 px-6 py-3 rounded-full font-semibold text-sm transition-colors cursor-pointer shadow-lg"
        >
          درخواست مشاوره رایگان
        </button>
      </div>
    </div>
  );
}
