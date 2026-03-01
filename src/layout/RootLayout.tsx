import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex flex-col">
      <div className="grain-overlay" aria-hidden="true" />
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
