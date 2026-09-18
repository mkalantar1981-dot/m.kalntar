import { AppProvider, useApp } from './context/AppContext';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import ManagerDashboard from './components/ManagerDashboard';
import ResidentDashboard from './components/ResidentDashboard';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';

function AppContent() {
  const { role } = useApp();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />
      
      <main className="flex-1">
        {role === 'landing' && <LandingPage />}
        {role === 'manager' && <ManagerDashboard />}
        {role === 'resident' && <ResidentDashboard />}
      </main>

      <Footer />
      <ConsultationModal />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
