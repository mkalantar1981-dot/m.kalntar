import { useState } from 'react';
import { legalGuides } from '../data/legal';

export default function LegalGuide() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div>
      {/* Info Banner */}
      <div className="bg-gradient-to-l from-amber-50 to-orange-50 rounded-xl p-5 mb-6 border border-amber-100">
        <div className="flex items-start gap-3">
          <span className="text-2xl">📚</span>
          <div>
            <h3 className="font-semibold text-amber-900 text-sm mb-1">راهنمای قانونی مدیران ساختمان</h3>
            <p className="text-xs text-amber-700 leading-relaxed">
              این اطلاعات بر اساس قانون تملک آپارتمان‌ها و آیین‌نامه اجرایی آن تهیه شده است. برای موارد پیچیده حقوقی، مشورت با وکیل توصیه می‌شود.
            </p>
          </div>
        </div>
      </div>

      {/* Legal Items */}
      <div className="space-y-4">
        {legalGuides.map(item => {
          const isExpanded = expandedId === item.id;

          return (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-slate-100 overflow-hidden hover:border-red-200 transition-all"
            >
              {/* Header */}
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
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                    {item.summary}
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

              {/* Expanded Content */}
              {isExpanded && (
                <div className="px-5 pb-5 border-t border-slate-50">
                  <div className="pt-4">
                    <h4 className="text-xs font-semibold text-slate-600 mb-3 flex items-center gap-1.5">
                      <span>📌</span> جزئیات و نکات:
                    </h4>
                    <ul className="space-y-2.5">
                      {item.details.map((detail, i) => (
                        <li key={i} className="text-sm text-slate-700 flex items-start gap-2.5 leading-relaxed">
                          <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>

                    {/* Legal Reference */}
                    <div className="mt-4 bg-slate-50 rounded-lg p-3 border border-slate-100">
                      <p className="text-xs text-slate-600 flex items-center gap-1.5">
                        <span>📖</span>
                        <span className="font-medium">مرجع قانونی:</span>
                        <span>{item.legalRef}</span>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
