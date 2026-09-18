import { Product } from '../data/products';
import { useCart } from '../context/CartContext';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

export default function ProductDetail({ product, onBack }: ProductDetailProps) {
  const { addToCart, setIsCartOpen } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    setIsCartOpen(true);
  };

  const roastColor = {
    'Light': 'bg-yellow-100 text-yellow-800',
    'Medium': 'bg-amber-100 text-amber-800',
    'Medium-Dark': 'bg-orange-100 text-orange-800',
    'Dark': 'bg-stone-200 text-stone-800',
  }[product.roast];

  const roastLevel = {
    'Light': 25,
    'Medium': 50,
    'Medium-Dark': 75,
    'Dark': 100,
  }[product.roast];

  return (
    <section className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-amber-700 hover:text-amber-900 mb-6 transition-colors cursor-pointer group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="font-medium">Back to Collection</span>
        </button>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <div className={`bg-gradient-to-br ${product.color} rounded-3xl p-12 sm:p-16 flex items-center justify-center min-h-[300px] sm:min-h-[400px] shadow-lg`}>
            <span className="text-[120px] sm:text-[160px]">{product.image}</span>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${roastColor}`}>
                {product.roast} Roast
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
                {product.origin}
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800">
                {product.weight}
              </span>
            </div>

            {/* Title & Price */}
            <h1 className="text-3xl sm:text-4xl font-bold text-amber-950 mb-2">
              {product.name}
            </h1>
            <p className="text-2xl font-bold text-amber-700 mb-6">
              ${product.price.toFixed(2)}
            </p>

            {/* Description */}
            <p className="text-amber-800 leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Tasting Notes */}
            <div className="bg-amber-50 rounded-xl p-5 mb-6 border border-amber-100">
              <h3 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                <span>👅</span> Tasting Notes
              </h3>
              <p className="text-amber-800 text-sm leading-relaxed">
                {product.tastingNotes}
              </p>
            </div>

            {/* Roast Level Indicator */}
            <div className="mb-6">
              <h3 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                <span>🔥</span> Roast Level
              </h3>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-3 bg-amber-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-yellow-400 via-amber-600 to-amber-900 rounded-full transition-all duration-500"
                    style={{ width: `${roastLevel}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-amber-800 min-w-[80px]">{product.roast}</span>
              </div>
            </div>

            {/* Flavor Profile */}
            <div className="mb-6">
              <h3 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                <span>🎨</span> Flavor Profile
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.flavorProfile.map(flavor => (
                  <span
                    key={flavor}
                    className="px-4 py-2 bg-white border border-amber-200 rounded-full text-sm font-medium text-amber-800 shadow-sm"
                  >
                    {flavor}
                  </span>
                ))}
              </div>
            </div>

            {/* Brewing Methods */}
            <div className="mb-8">
              <h3 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                <span>⚗️</span> Recommended Brewing
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.brewingMethods.map(method => (
                  <span
                    key={method}
                    className="px-4 py-2 bg-amber-900 text-amber-50 rounded-full text-sm font-medium"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-amber-900 hover:bg-amber-800 text-white py-4 rounded-xl text-lg font-semibold transition-all shadow-lg hover:shadow-xl cursor-pointer flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              Add to Cart — ${product.price.toFixed(2)}
            </button>
          </div>
        </div>

        {/* Origin Story */}
        <div className="mt-12 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 sm:p-8 border border-amber-100">
          <h2 className="text-2xl font-bold text-amber-950 mb-4 flex items-center gap-2">
            <span>📖</span> Origin Story
          </h2>
          <p className="text-amber-800 leading-relaxed text-base sm:text-lg">
            {product.originStory}
          </p>
        </div>
      </div>
    </section>
  );
}
