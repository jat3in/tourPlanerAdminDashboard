import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./components/Login";

const App = () => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in on component mount
    const token = localStorage.getItem("authToken");
    setIsAdminLoggedIn(!!token);
  }, []);

  const handleLoginSuccess = () => {
    setIsAdminLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsAdminLoggedIn(false);
  };

  return (
    <Router>
      <div className="w-full">
        <Routes>
          <Route
            path="/login"
            element={
              isAdminLoggedIn ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Login onLoginSuccess={handleLoginSuccess} />
              )
            }
          />

          <Route
            path="/dashboard"
            element={
              isAdminLoggedIn ? (
                <AdminDashboard onLogout={handleLogout} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
