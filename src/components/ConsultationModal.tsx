import { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function ConsultationModal() {
  const { showConsultation, setShowConsultation, role } = useApp();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    buildingType: '',
    message: '',
  });

  if (!showConsultation) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setShowConsultation(false);
    setSubmitted(false);
    setFormData({ name: '', phone: '', buildingType: '', message: '' });
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
          {submitted ? (
            /* Success State */
            <div className="p-8 text-center">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">درخواست شما ثبت شد!</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                مشاور بیمه ما در اسرع وقت با شما تماس خواهد گرفت.
                <br />
                معمولاً ظرف ۲۴ ساعت کاری.
              </p>
              <button
                onClick={handleClose}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors cursor-pointer"
              >
                بستن
              </button>
            </div>
          ) : (
            /* Form State */
            <div>
              {/* Header */}
              <div className="bg-gradient-to-l from-blue-600 to-indigo-600 p-6 rounded-t-2xl text-white">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">مشاوره رایگان بیمه</h3>
                  <button
                    onClick={handleClose}
                    className="text-white/80 hover:text-white transition-colors cursor-pointer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <p className="text-blue-100 text-sm mt-1">
                  {role === 'manager' ? 'مشاوره بیمه ساختمان و مسئولیت مدیر' : 'مشاوره بیمه‌های شخصی و ساختمانی'}
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">نام و نام خانوادگی</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-50 outline-none transition-all text-slate-800"
                    placeholder="نام خود را وارد کنید"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">شماره تماس</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-50 outline-none transition-all text-slate-800"
                    placeholder="۰۹۱۲XXXXXXX"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    {role === 'manager' ? 'نوع ساختمان' : 'نوع درخواست'}
                  </label>
                  <select
                    value={formData.buildingType}
                    onChange={(e) => setFormData(prev => ({ ...prev, buildingType: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-50 outline-none transition-all text-slate-800 cursor-pointer"
                  >
                    <option value="">انتخاب کنید</option>
                    {role === 'manager' ? (
                      <>
                        <option value="small">ساختمان کوچک (۱ تا ۵ واحد)</option>
                        <option value="medium">ساختمان متوسط (۶ تا ۱۵ واحد)</option>
                        <option value="large">ساختمان بزرگ (بیش از ۱۵ واحد)</option>
                        <option value="complex">مجتمع مسکونی</option>
                      </>
                    ) : (
                      <>
                        <option value="content">بیمه محتوای منزل</option>
                        <option value="life">بیمه عمر و حوادث</option>
                        <option value="car">بیمه خودرو</option>
                        <option value="fire">بیمه آتش‌سوزی</option>
                        <option value="other">سایر</option>
                      </>
                    )}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">توضیحات (اختیاری)</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-50 outline-none transition-all text-slate-800 resize-none"
                    rows={3}
                    placeholder="سؤال یا توضیح خاصی دارید؟"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold text-sm transition-colors cursor-pointer shadow-md"
                >
                  ارسال درخواست مشاوره
                </button>

                <p className="text-xs text-slate-500 text-center">
                  🔒 اطلاعات شما محرمانه خواهد ماند
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
