import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Toastifyerror } from "../Notification/Toastitynotificaition";
import { protectRouteApi } from "../../API/ProtectRoute/protectrouteApi";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await protectRouteApi();
        setAuthenticated(true);
      } catch (error) {
        setAuthenticated(false);
        Toastifyerror(error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading)
    return (
      <>
        <div className="max-w-full text-center">
          Checking authentication...
          <ToastContainer />
        </div>
      </>
    );
  if (!authenticated) return <Navigate to="/admin/signin" replace />;

  return children;
};

export default ProtectedRoute;
