import { useCart } from '../context/CartContext';

interface CartProps {
  onCheckout: () => void;
}

export default function Cart({ onCheckout }: CartProps) {
  const { items, removeFromCart, updateQuantity, totalPrice, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Cart Panel */}
      <div className="fixed right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-2xl z-50 flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-amber-100">
          <h2 className="text-xl font-bold text-amber-950 flex items-center gap-2">
            <span>🛒</span> Your Cart
            <span className="text-sm font-normal text-amber-600">
              ({items.length} {items.length === 1 ? 'item' : 'items'})
            </span>
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-amber-50 rounded-full transition-colors cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="text-6xl mb-4">🛒</div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Your cart is empty</h3>
              <p className="text-amber-700 text-sm mb-4">
                Add some premium coffee to get started!
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="bg-amber-900 hover:bg-amber-800 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div
                  key={item.product.id}
                  className="flex gap-4 bg-amber-50 rounded-xl p-4 border border-amber-100"
                >
                  {/* Product Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.product.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <span className="text-2xl">{item.product.image}</span>
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-amber-950 text-sm truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-xs text-amber-600 mt-0.5">
                      {item.product.roast} Roast • {item.product.origin}
                    </p>
                    <p className="text-sm font-bold text-amber-900 mt-1">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-7 h-7 rounded-full bg-white border border-amber-200 flex items-center justify-center text-amber-700 hover:bg-amber-100 transition-colors cursor-pointer text-sm font-bold"
                      >
                        −
                      </button>
                      <span className="text-sm font-semibold text-amber-900 min-w-[20px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-7 h-7 rounded-full bg-white border border-amber-200 flex items-center justify-center text-amber-700 hover:bg-amber-100 transition-colors cursor-pointer text-sm font-bold"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="ml-auto text-red-400 hover:text-red-600 transition-colors cursor-pointer"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-amber-100 p-5 space-y-4">
            {/* Subtotal */}
            <div className="flex justify-between items-center">
              <span className="text-amber-700">Subtotal</span>
              <span className="text-lg font-bold text-amber-900">${totalPrice.toFixed(2)}</span>
            </div>
            
            {/* Shipping Note */}
            <div className="text-xs text-amber-600 bg-amber-50 rounded-lg p-3 text-center">
              {totalPrice >= 50 ? (
                <span className="text-green-700 font-medium">✓ Free shipping on orders over $50</span>
              ) : (
                <span>Add ${(50 - totalPrice).toFixed(2)} more for free shipping</span>
              )}
            </div>

            {/* Checkout Button */}
            <button
              onClick={onCheckout}
              className="w-full bg-amber-900 hover:bg-amber-800 text-white py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl cursor-pointer"
            >
              Proceed to Checkout
            </button>
            
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-full text-amber-700 hover:text-amber-900 py-2 text-sm font-medium transition-colors cursor-pointer"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
