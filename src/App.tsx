import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./sections/HeroSection";
import ComponentShowcase from "./sections/ComponentShowcase";
import FeaturesGrid from "./sections/FeaturesGrid";
import SocialProof from "./sections/SocialProof";
import PricingSection from "./sections/PricingSection";
import Footer from "./sections/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";
import DocumentationPage from "./pages/DocumentationPage";

// HomePage component for the main landing page
const HomePage = () => (
  <>
    <HeroSection />
    <ComponentShowcase />
    <FeaturesGrid />
    <SocialProof />
    <PricingSection />
  </>
);

// RouteTracker component to update current path
interface RouteTrackerProps {
  setCurrentPath: (path: string) => void;
}

const RouteTracker: React.FC<RouteTrackerProps> = ({ setCurrentPath }) => {
  const location = useLocation();

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location, setCurrentPath]);

  return null;
};

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Check if we're on the documentation page to adjust layout
  const isDocPage = currentPath === "/documentation";

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-light dark:bg-dark transition-colors duration-300">
          <RouteTracker setCurrentPath={setCurrentPath} />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/documentation" element={<DocumentationPage />} />
              <Route path="/pricing" element={<PricingSection />} />
            </Routes>
          </main>
          {!isDocPage && <Footer />}
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
