import { Navigate } from "react-router-dom";
import { useAuth } from "../hook/use-auth";

export default function RedirectIfAuthenticated({ children }) {
  const { authUser } = useAuth();

  if (authUser?.role === "USER") {
    return <Navigate to="/home" />;
  }
  if (authUser?.role === "DRIVER") {
    return <Navigate to="/homedriver" />;
  }
  if (authUser?.role === "ADMIN") {
    return <Navigate to="/chatadmin" />;
  }

  return children;
}
