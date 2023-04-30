import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import loadingScreen from "../assets/loading/loading.gif";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <img src={loadingScreen} alt="" />
      </div>
    );
  }
  if (user && user?.uid) {
    return children;
  }

  <h2>private route</h2>;
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
