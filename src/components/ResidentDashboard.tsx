import { useApp } from '../context/AppContext';
import ResidentRights from './ResidentRights';
import InsuranceSection from './InsuranceSection';

export default function ResidentDashboard() {
  const { residentTab, setResidentTab } = useApp();

  const tabs = [
    { id: 'rights' as const, label: 'حقوق و وظایف', icon: '📜' },
    { id: 'insurance' as const, label: 'بیمه‌های شخصی', icon: '🛡️' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-l from-emerald-50 to-teal-50 rounded-2xl p-6 sm:p-8 mb-8 border border-emerald-100">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <span className="text-2xl">🏠</span>
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">
              خوش آمدید، ساکن گرامی
            </h1>
            <p className="text-slate-600 leading-relaxed">
              از اینجا می‌توانید حقوق و وظایف خود به‌عنوان ساکن ساختمان را بشناسید و با بیمه‌های مناسب آشنا شوید.
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 bg-white rounded-xl p-2 shadow-sm border border-slate-100">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setResidentTab(tab.id)}
            className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
              residentTab === tab.id
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {residentTab === 'rights' && <ResidentRights />}
      {residentTab === 'insurance' && <InsuranceSection role="resident" />}
    </div>
  );
}
