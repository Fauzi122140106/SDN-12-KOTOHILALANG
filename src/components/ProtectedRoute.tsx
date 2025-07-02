import { Navigate } from "react-router-dom";
import { useAntuth } from "@/hooks/useAuth";
import Cookies from "js-cookie";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const getCookie = Cookies.get("accessToken");
  const isAuthenticated = getCookie ? true : false;
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
