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

function AppContent() {
  const location = useLocation();
  // Navbar ONLY shows on homepage
  const showNavbar = location.pathname === '/';

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/social" element={<ComingSoon />} />
        <Route path="/legal/:slug" element={<LegalPage />} />
        {/* Client Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Partner Auth */}
        <Route path="/partner/login" element={<PartnerLogin />} />
        <Route path="/partner/signup" element={<PartnerSignup />} />
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
      <div className="font-sans antialiased text-gray-900 bg-white">
        {showWelcome && <WelcomeScreen onComplete={handleWelcomeComplete} />}
        <AppContent />
      </div>
    </Router>
  );
}

export default App;
