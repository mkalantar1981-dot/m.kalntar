import { useState, useMemo } from 'react';
import { products, origins, roasts, flavorProfiles, Product } from '../data/products';
import ProductCard from './ProductCard';

interface ProductGridProps {
  onViewDetail: (product: Product) => void;
  showHero?: boolean;
}

export default function ProductGrid({ onViewDetail, showHero = false }: ProductGridProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOrigin, setSelectedOrigin] = useState<string>('');
  const [selectedRoast, setSelectedRoast] = useState<string>('');
  const [selectedFlavor, setSelectedFlavor] = useState<string>('');

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = searchQuery === '' || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.roast.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.origin.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesOrigin = selectedOrigin === '' || product.origin === selectedOrigin;
      const matchesRoast = selectedRoast === '' || product.roast === selectedRoast;
      const matchesFlavor = selectedFlavor === '' || product.flavorProfile.includes(selectedFlavor);

      return matchesSearch && matchesOrigin && matchesRoast && matchesFlavor;
    });
  }, [searchQuery, selectedOrigin, selectedRoast, selectedFlavor]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedOrigin('');
    setSelectedRoast('');
    setSelectedFlavor('');
  };

  const hasActiveFilters = searchQuery || selectedOrigin || selectedRoast || selectedFlavor;

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {!showHero && (
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-950 mb-3">
              Our Collection
            </h2>
            <p className="text-amber-700 max-w-2xl mx-auto">
              Discover exceptional coffees from the world's most renowned growing regions
            </p>
          </div>
        )}

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-md border border-amber-100 p-4 sm:p-6 mb-8">
          {/* Search Bar */}
          <div className="relative mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search by name, roast, or origin..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-amber-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all text-amber-900 placeholder-amber-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-400 hover:text-amber-600 cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* Filter Row */}
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-sm font-medium text-amber-800">Filters:</span>
            
            {/* Origin Filter */}
            <select
              value={selectedOrigin}
              onChange={(e) => setSelectedOrigin(e.target.value)}
              className="px-3 py-2 rounded-lg border border-amber-200 text-sm text-amber-800 bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none cursor-pointer"
            >
              <option value="">All Origins</option>
              {origins.map(origin => (
                <option key={origin} value={origin}>{origin}</option>
              ))}
            </select>

            {/* Roast Filter */}
            <select
              value={selectedRoast}
              onChange={(e) => setSelectedRoast(e.target.value)}
              className="px-3 py-2 rounded-lg border border-amber-200 text-sm text-amber-800 bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none cursor-pointer"
            >
              <option value="">All Roasts</option>
              {roasts.map(roast => (
                <option key={roast} value={roast}>{roast}</option>
              ))}
            </select>

            {/* Flavor Filter */}
            <select
              value={selectedFlavor}
              onChange={(e) => setSelectedFlavor(e.target.value)}
              className="px-3 py-2 rounded-lg border border-amber-200 text-sm text-amber-800 bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none cursor-pointer"
            >
              <option value="">All Flavors</option>
              {flavorProfiles.map(flavor => (
                <option key={flavor} value={flavor}>{flavor}</option>
              ))}
            </select>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="px-3 py-2 rounded-lg bg-amber-100 text-amber-800 text-sm font-medium hover:bg-amber-200 transition-colors cursor-pointer"
              >
                Clear All
              </button>
            )}

            {/* Results Count */}
            <span className="ml-auto text-sm text-amber-600">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
            </span>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetail={onViewDetail}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-amber-900 mb-2">No products found</h3>
            <p className="text-amber-700 mb-4">Try adjusting your search or filters</p>
            <button
              onClick={clearFilters}
              className="bg-amber-900 hover:bg-amber-800 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
