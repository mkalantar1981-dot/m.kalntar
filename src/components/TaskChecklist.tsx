import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { tasks, frequencies, categories } from '../data/tasks';

export default function TaskChecklist() {
  const { completedTasks, toggleTask } = useApp();
  const [filterFreq, setFilterFreq] = useState<string>('');
  const [filterCat, setFilterCat] = useState<string>('');
  const [expandedTask, setExpandedTask] = useState<string | null>(null);

  const filteredTasks = tasks.filter(task => {
    const matchFreq = !filterFreq || task.frequency === filterFreq;
    const matchCat = !filterCat || task.category === filterCat;
    return matchFreq && matchCat;
  });

  const completedCount = tasks.filter(t => completedTasks.includes(t.id)).length;
  const progress = Math.round((completedCount / tasks.length) * 100);

  return (
    <div>
      {/* Progress Bar */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-slate-700">پیشرفت کلی</span>
          <span className="text-sm font-bold text-blue-600">{completedCount} از {tasks.length} انجام شده</span>
        </div>
        <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-l from-blue-500 to-indigo-500 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs text-slate-500 mt-2">
          {progress === 100 ? '🎉 آفرین! تمام وظایف انجام شده!' : `${progress}% تکمیل شده`}
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        <select
          value={filterFreq}
          onChange={(e) => setFilterFreq(e.target.value)}
          className="px-3 py-2 rounded-lg border border-slate-200 text-sm text-slate-700 bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-50 outline-none cursor-pointer"
        >
          <option value="">همه دوره‌ها</option>
          {frequencies.map(f => (
            <option key={f} value={f}>{f}</option>
          ))}
        </select>
        <select
          value={filterCat}
          onChange={(e) => setFilterCat(e.target.value)}
          className="px-3 py-2 rounded-lg border border-slate-200 text-sm text-slate-700 bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-50 outline-none cursor-pointer"
        >
          <option value="">همه دسته‌ها</option>
          {categories.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        {(filterFreq || filterCat) && (
          <button
            onClick={() => { setFilterFreq(''); setFilterCat(''); }}
            className="px-3 py-2 rounded-lg bg-slate-100 text-slate-600 text-sm hover:bg-slate-200 transition-colors cursor-pointer"
          >
            پاک کردن فیلترها
          </button>
        )}
      </div>

      {/* Task List */}
      <div className="space-y-3">
        {filteredTasks.map(task => {
          const isCompleted = completedTasks.includes(task.id);
          const isExpanded = expandedTask === task.id;

          return (
            <div
              key={task.id}
              className={`bg-white rounded-xl border transition-all ${
                isCompleted
                  ? 'border-green-200 bg-green-50/50'
                  : 'border-slate-100 hover:border-blue-200'
              }`}
            >
              <div className="p-4 flex items-start gap-3">
                {/* Checkbox */}
                <button
                  onClick={() => toggleTask(task.id)}
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all cursor-pointer ${
                    isCompleted
                      ? 'bg-green-500 border-green-500 text-white'
                      : 'border-slate-300 hover:border-blue-400'
                  }`}
                >
                  {isCompleted && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className={`font-semibold text-sm sm:text-base ${isCompleted ? 'text-green-700 line-through' : 'text-slate-800'}`}>
                        {task.icon} {task.title}
                      </h3>
                      <p className={`text-xs sm:text-sm mt-1 ${isCompleted ? 'text-green-600' : 'text-slate-500'}`}>
                        {task.description}
                      </p>
                    </div>
                    <button
                      onClick={() => setExpandedTask(isExpanded ? null : task.id)}
                      className="text-slate-400 hover:text-blue-500 transition-colors cursor-pointer flex-shrink-0"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      task.frequency === 'ماهانه' ? 'bg-blue-100 text-blue-700' :
                      task.frequency === 'فصلی' ? 'bg-purple-100 text-purple-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      {task.frequency}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                      {task.category}
                    </span>
                    {task.month && (
                      <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-700">
                        📅 {task.month}
                      </span>
                    )}
                  </div>

                  {/* Expanded Tips */}
                  {isExpanded && (
                    <div className="mt-3 pt-3 border-t border-slate-100">
                      <h4 className="text-xs font-semibold text-slate-600 mb-2">💡 نکات مهم:</h4>
                      <ul className="space-y-1.5">
                        {task.tips.map((tip, i) => (
                          <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                            <span className="text-blue-400 mt-0.5">•</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredTasks.length === 0 && (
        <div className="text-center py-12">
          <div className="text-5xl mb-3">📭</div>
          <p className="text-slate-500">وظیفه‌ای با این فیلتر یافت نشد</p>
        </div>
      )}
    </div>
  );
}
