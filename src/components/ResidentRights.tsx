import { useState } from 'react';

interface RightItem {
  id: string;
  title: string;
  icon: string;
  summary: string;
  details: string[];
}

const residentRights: RightItem[] = [
  {
    id: 'r1',
    title: 'حق استفاده از مشاعات',
    icon: '🏗️',
    summary: 'هر ساکن حق استفاده از قسمت‌های مشترک ساختمان را دارد.',
    details: [
      'استفاده از راه‌پله، آسانسور، حیاط و پارکینگ',
      'هر مالک نمی‌تواند بدون اجازه، قسمت مشترک را تصرف کند',
      'تغییر در مشاعات نیاز به موافقت اکثریت ساکنین دارد',
      'هزینه نگهداری مشاعات بر عهده همه ساکنین است',
    ],
  },
  {
    id: 'r2',
    title: 'وظیفه پرداخت شارژ',
    icon: '💳',
    summary: 'پرداخت سهم شارژ وظیفه قانونی هر ساکن است و عدم پرداخت عواقب حقوقی دارد.',
    details: [
      'شارژ ماهانه باید تا پایان هر ماه پرداخت شود',
      'عدم پرداخت می‌تواند منجر به اقدام قانونی شود',
      'مدیر حق دارد جریمه دیرکرد (مصوب مجمع) مطالبه کند',
      'در صورت اختلاف در مبلغ، از طریق مجمع عمومی پیگیری کنید',
      'درخواست رسید پرداخت حق شماست',
    ],
  },
  {
    id: 'r3',
    title: 'رعایت آیین‌نامه ساختمان',
    icon: '📋',
    summary: 'هر ساکن موظف به رعایت قوانین داخلی ساختمان و آیین‌نامه مصوب مجمع است.',
    details: [
      'رعایت ساعت سکوت (معمولاً ۱۱ شب تا ۸ صبح)',
      'عدم ایجاد مزاحمت برای سایر ساکنین',
      'رعایت نظافت مشاعات',
      'عدم نگهداری حیوانات ممنوع (مگر با مجوز مجمع)',
      'رعایت مقررات پارکینگ و انباری',
    ],
  },
  {
    id: 'r4',
    title: 'حضور در مجمع عمومی',
    icon: '🗳️',
    summary: 'هر مالک حق شرکت در مجمع عمومی و رأی‌دهی دارد.',
    details: [
      'حق رأی متناسب با مساحت واحد',
      'حق طرح موضوع در دستور جلسه',
      'حق انتخاب شدن به‌عنوان مدیر یا بازرس',
      'دریافت گزارش مالی سالانه',
      'اعتراض به تصمیمات غیرقانونی مجمع',
    ],
  },
  {
    id: 'r5',
    title: 'درخواست حسابرسی',
    icon: '🔍',
    summary: 'ساکنین حق دارند از عملکرد مالی مدیر اطلاع پیدا کنند.',
    details: [
      'مدیر موظف به ارائه گزارش مالی در مجمع است',
      'ساکنین می‌توانند بازرس مالی انتخاب کنند',
      'درخواست مشاهده فاکتورها و اسناد هزینه',
      'اعتراض به هزینه‌های غیرضروری',
      'در صورت تخلف، امکان عزل مدیر وجود دارد',
    ],
  },
  {
    id: 'r6',
    title: 'نقل و انتقال واحد',
    icon: '🔑',
    summary: 'فروش یا اجاره واحد حق مالک است ولی باید مقررات ساختمان رعایت شود.',
    details: [
      'اطلاع‌رسانی به مدیر درباره تغییر ساکن',
      'تسویه بدهی شارژ قبل از انتقال',
      'تحویل کلید و دسترسی‌ها',
      'مستأجر نیز موظف به رعایت آیین‌نامه است',
      'مالک مسئول پرداخت شارژ است (نه مستأجر)',
    ],
  },
];

export default function ResidentRights() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div>
      {/* Info Banner */}
      <div className="bg-gradient-to-l from-emerald-50 to-teal-50 rounded-xl p-5 mb-6 border border-emerald-100">
        <div className="flex items-start gap-3">
          <span className="text-2xl">📜</span>
          <div>
            <h3 className="font-semibold text-emerald-900 text-sm mb-1">حقوق و وظایف ساکنین ساختمان</h3>
            <p className="text-xs text-emerald-700 leading-relaxed">
              آگاهی از حقوق و وظایف شما به‌عنوان ساکن، به حفظ آرامش و نظم ساختمان کمک می‌کند.
            </p>
          </div>
        </div>
      </div>

      {/* Rights List */}
      <div className="space-y-4">
        {residentRights.map(item => {
          const isExpanded = expandedId === item.id;

          return (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-slate-100 overflow-hidden hover:border-emerald-200 transition-all"
            >
              <button
                onClick={() => setExpandedId(isExpanded ? null : item.id)}
                className="w-full p-5 flex items-start gap-3 text-right cursor-pointer"
              >
                <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
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

              {isExpanded && (
                <div className="px-5 pb-5 border-t border-slate-50">
                  <div className="pt-4">
                    <ul className="space-y-2.5">
                      {item.details.map((detail, i) => (
                        <li key={i} className="text-sm text-slate-700 flex items-start gap-2.5 leading-relaxed">
                          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
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
