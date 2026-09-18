import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import { Product } from './data/products';

type Page = 'home' | 'shop' | 'detail' | 'checkout';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const navigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewDetail = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCheckout = () => {
    setCurrentPage('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCheckoutComplete = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-amber-50/30 flex flex-col">
      <Header onNavigate={navigate} currentPage={currentPage} />
      
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            <Hero onNavigate={navigate} />
            <ProductGrid onViewDetail={handleViewDetail} />
          </>
        )}
        
        {currentPage === 'shop' && (
          <ProductGrid onViewDetail={handleViewDetail} />
        )}
        
        {currentPage === 'detail' && selectedProduct && (
          <ProductDetail
            product={selectedProduct}
            onBack={() => navigate('shop')}
          />
        )}
        
        {currentPage === 'checkout' && (
          <Checkout
            onBack={() => navigate('shop')}
            onComplete={handleCheckoutComplete}
          />
        )}
      </main>

      <Footer />
      <Cart onCheckout={handleCheckout} />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
