import { Product } from '../data/products';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  onViewDetail: (product: Product) => void;
}

export default function ProductCard({ product, onViewDetail }: ProductCardProps) {
  const { addToCart, setIsCartOpen } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    setIsCartOpen(true);
  };

  const roastColor = {
    'Light': 'bg-yellow-100 text-yellow-800',
    'Medium': 'bg-amber-100 text-amber-800',
    'Medium-Dark': 'bg-orange-100 text-orange-800',
    'Dark': 'bg-stone-200 text-stone-800',
  }[product.roast];

  return (
    <div
      className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border border-amber-50 hover:border-amber-200 hover:-translate-y-1"
      onClick={() => onViewDetail(product)}
    >
      {/* Product Image Area */}
      <div className={`relative bg-gradient-to-br ${product.color} p-8 flex items-center justify-center h-48 sm:h-56`}>
        <span className="text-7xl sm:text-8xl group-hover:scale-110 transition-transform duration-300">
          {product.image}
        </span>
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${roastColor}`}>
            {product.roast} Roast
          </span>
        </div>
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/80 text-amber-800 backdrop-blur-sm">
            {product.origin}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-amber-950 mb-2 group-hover:text-amber-700 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-sm text-amber-700/80 mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Flavor Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.flavorProfile.map(flavor => (
            <span
              key={flavor}
              className="px-2 py-0.5 bg-amber-50 text-amber-700 text-xs rounded-full border border-amber-100"
            >
              {flavor}
            </span>
          ))}
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between pt-3 border-t border-amber-50">
          <div>
            <span className="text-2xl font-bold text-amber-900">${product.price.toFixed(2)}</span>
            <span className="text-xs text-amber-600 ml-1">/ {product.weight}</span>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-amber-900 hover:bg-amber-800 text-white px-4 py-2 rounded-full text-sm font-medium transition-all hover:shadow-md cursor-pointer flex items-center gap-1.5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
