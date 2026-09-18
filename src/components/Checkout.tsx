import { useState } from 'react';
import { useCart } from '../context/CartContext';

interface CheckoutProps {
  onBack: () => void;
  onComplete: () => void;
}

export default function Checkout({ onBack, onComplete }: CheckoutProps) {
  const { items, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState<'form' | 'processing' | 'success'>('form');
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const shipping = totalPrice >= 50 ? 0 : 5.99;
  const tax = totalPrice * 0.08;
  const orderTotal = totalPrice + shipping + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('processing');
    
    // Simulate processing
    setTimeout(() => {
      setStep('success');
      clearCart();
    }, 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (step === 'success') {
    return (
      <section className="py-16 sm:py-24">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-amber-100">
            <div className="text-7xl mb-6 animate-bounce">🎉</div>
            <h2 className="text-3xl font-bold text-amber-950 mb-3">Order Confirmed!</h2>
            <p className="text-amber-700 mb-6">
              Thank you for your purchase! Your premium coffee is on its way.
            </p>
            <div className="bg-amber-50 rounded-xl p-4 mb-6 border border-amber-100">
              <p className="text-sm text-amber-800">
                Order #AR-{Math.random().toString(36).substr(2, 8).toUpperCase()}
              </p>
              <p className="text-xs text-amber-600 mt-1">
                A confirmation email has been sent (simulated)
              </p>
            </div>
            <p className="text-sm text-amber-600 mb-8">
              Your coffee will be freshly roasted and shipped within 1-2 business days.
            </p>
            <button
              onClick={onComplete}
              className="bg-amber-900 hover:bg-amber-800 text-white px-8 py-3 rounded-full font-semibold transition-all cursor-pointer shadow-lg hover:shadow-xl"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (step === 'processing') {
    return (
      <section className="py-16 sm:py-24">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-amber-100">
            <div className="text-6xl mb-6 animate-spin" style={{ animationDuration: '2s' }}>☕</div>
            <h2 className="text-2xl font-bold text-amber-950 mb-3">Processing Your Order</h2>
            <p className="text-amber-700">
              Please wait while we prepare your premium coffee...
            </p>
            <div className="mt-6 h-2 bg-amber-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-amber-500 to-amber-700 rounded-full animate-pulse" style={{ width: '70%' }} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 sm:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-amber-700 hover:text-amber-900 mb-6 transition-colors cursor-pointer group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="font-medium">Back to Cart</span>
        </button>

        <h1 className="text-3xl sm:text-4xl font-bold text-amber-950 mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Checkout Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-6">
            {/* Contact Info */}
            <div className="bg-white rounded-2xl shadow-md border border-amber-100 p-6">
              <h2 className="text-lg font-bold text-amber-950 mb-4 flex items-center gap-2">
                <span>📧</span> Contact Information
              </h2>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all text-amber-900 placeholder-amber-400"
              />
            </div>

            {/* Shipping Info */}
            <div className="bg-white rounded-2xl shadow-md border border-amber-100 p-6">
              <h2 className="text-lg font-bold text-amber-950 mb-4 flex items-center gap-2">
                <span>📦</span> Shipping Address
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 rounded-xl border border-amber-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all text-amber-900 placeholder-amber-400"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 rounded-xl border border-amber-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all text-amber-900 placeholder-amber-400"
                />
              </div>
              <input
                type="text"
                name="address"
                placeholder="Street address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full mt-4 px-4 py-3 rounded-xl border border-amber-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all text-amber-900 placeholder-amber-400"
              />
              <div className="grid grid-cols-3 gap-4 mt-4">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 rounded-xl border border-amber-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all text-amber-900 placeholder-amber-400"
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 rounded-xl border border-amber-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all text-amber-900 placeholder-amber-400"
                />
                <input
                  type="text"
                  name="zip"
                  placeholder="ZIP code"
                  value={formData.zip}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 rounded-xl border border-amber-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all text-amber-900 placeholder-amber-400"
                />
              </div>
            </div>

            {/* Payment Info */}
            <div className="bg-white rounded-2xl shadow-md border border-amber-100 p-6">
              <h2 className="text-lg font-bold text-amber-950 mb-4 flex items-center gap-2">
                <span>💳</span> Payment Details
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card number (simulated)"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all text-amber-900 placeholder-amber-400"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="expiry"
                    placeholder="MM/YY"
                    value={formData.expiry}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 rounded-xl border border-amber-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all text-amber-900 placeholder-amber-400"
                  />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={formData.cvv}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 rounded-xl border border-amber-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all text-amber-900 placeholder-amber-400"
                  />
                </div>
              </div>
              <p className="text-xs text-amber-500 mt-3 flex items-center gap-1">
                🔒 This is a simulated checkout — no real payment will be processed
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-amber-900 hover:bg-amber-800 text-white py-4 rounded-xl text-lg font-semibold transition-all shadow-lg hover:shadow-xl cursor-pointer"
            >
              Place Order — ${orderTotal.toFixed(2)}
            </button>
          </form>

          {/* Order Summary */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-md border border-amber-100 p-6 sticky top-24">
              <h2 className="text-lg font-bold text-amber-950 mb-4">Order Summary</h2>
              
              {/* Items */}
              <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                {items.map(item => (
                  <div key={item.product.id} className="flex items-center gap-3">
                    <div className={`w-10 h-10 bg-gradient-to-br ${item.product.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <span className="text-lg">{item.product.image}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-amber-900 truncate">{item.product.name}</p>
                      <p className="text-xs text-amber-600">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-semibold text-amber-900">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="border-t border-amber-100 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-amber-700">Subtotal</span>
                  <span className="text-amber-900">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-amber-700">Shipping</span>
                  <span className="text-amber-900">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-amber-700">Tax</span>
                  <span className="text-amber-900">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-amber-100">
                  <span className="font-bold text-amber-950">Total</span>
                  <span className="font-bold text-amber-900 text-lg">${orderTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
