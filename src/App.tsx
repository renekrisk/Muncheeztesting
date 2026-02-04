import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PartnerLogin from "./pages/PartnerLogin";
import PartnerSignup from "./pages/PartnerSignup";
import CourierLogin from "./pages/CourierLogin";
import CourierSignup from "./pages/CourierSignup";
import LegalPage from "./pages/LegalPage";
import AdminLogin from "./pages/AdminLogin";
import WelcomeScreen from "./components/WelcomeScreen";
import ComingSoon from "./pages/ComingSoon";
import OurStory from "./pages/OurStory";
import MerchantDashboard from "./pages/MerchantDashboard";
import MerchantOnboarding from './pages/MerchantOnboarding';
import StoreListing from './pages/customer/StoreListing';
import StoreFront from './pages/customer/StoreFront';

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function AppContent() {
  const location = useLocation();
  // Navbar shows on homepage and Our Story
  const showNavbar = location.pathname === '/' || location.pathname === '/our-story';

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Customer Routes (The Genesis Loop) */}
        <Route path="/c/stores" element={<StoreListing />} />
        <Route path="/c/store/:id" element={<StoreFront />} />

        <Route path="/social" element={<ComingSoon />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/legal/:slug" element={<LegalPage />} />
        {/* Client Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Partner Auth */}
        <Route path="/partner/login" element={<PartnerLogin />} />
        <Route path="/partner/signup" element={<PartnerSignup />} />
        <Route path="/partner/onboarding" element={<MerchantOnboarding />} />
        <Route
          path="/partner/dashboard"
          element={
            <ProtectedRoute>
              <MerchantDashboard />
            </ProtectedRoute>
          }
        />
        {/* Courier Auth */}
        <Route path="/courier/login" element={<CourierLogin />} />
        <Route path="/courier/signup" element={<CourierSignup />} />
        {/* Admin Auth */}
        <Route path="/admin/login" element={<AdminLogin />} />
      </Routes>
    </>
  );
}

function App() {
  const [showWelcome, setShowWelcome] = useState(() => {
    // Only show if we haven't seen it in this session
    return !sessionStorage.getItem('welcomeShown');
  });

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
    sessionStorage.setItem('welcomeShown', 'true');
  };

  return (
    <Router>
      <AuthProvider>
        <div className="font-sans antialiased text-gray-900 bg-white">
          {showWelcome && <WelcomeScreen onComplete={handleWelcomeComplete} />}
          <AppContent />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
