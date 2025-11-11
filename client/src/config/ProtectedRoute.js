// src/utils/ProtectedRoute.js
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useAuth();
  console.log(user);
  

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ProtectedRoute;
