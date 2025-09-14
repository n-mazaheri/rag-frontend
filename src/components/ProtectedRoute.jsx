// components/ProtectedRoute.js
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import API from "../api";

export default function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("access_token");
      
      if (!token) {
        setIsAuthenticated(false);
        setIsLoading(false);
        return;
      }

      try {
        // Use your protected endpoint to verify the token
        await API.get("/protected");
        setIsAuthenticated(true);
      } catch (err) {
        // The interceptor will handle token refresh automatically
        // If we get here, it means even after refresh it failed
        console.error("Authentication failed:", err);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    verifyToken();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return isAuthenticated ? children : <Navigate to="/signin" replace />;
}