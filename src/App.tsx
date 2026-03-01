import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import PortfolioLayout from './layout/PortfolioLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PlacesPage from './pages/portfolio/PlacesPage';
import PortraitsPage from './pages/portfolio/PortraitsPage';
import StreetPage from './pages/portfolio/StreetPage';
import GearPage from './pages/GearPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioLayout />}>
            <Route index element={<Navigate to="places" replace />} />
            <Route path="places" element={<PlacesPage />} />
            <Route path="portraits" element={<PortraitsPage />} />
            <Route path="street" element={<StreetPage />} />
          </Route>
          <Route path="/gear" element={<GearPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
