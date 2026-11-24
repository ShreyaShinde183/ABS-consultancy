import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Inner Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Calculators from './pages/Calculators';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import PrivacyPolicy from './pages/PrivacyPolicy';

// Scroll to top automatically on route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
        {/* Top Information Bar */}
        <TopBar />

        {/* Main Sticky Navbar */}
        <Navbar />

        {/* Dynamic Inner Page Routing */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/calculators" element={<Calculators />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            {/* Catch-all fallback route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Comprehensive Corporate Footer */}
        <Footer />

        {/* Persistent Floating WhatsApp Quick-Action */}
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
