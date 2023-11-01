import { Navigate } from "react-router-dom";
import { useAuth } from "../hook/use-auth";

export default function RedirectIfNotAuthenticated({ children }) {
  const { authUser } = useAuth();
  if (!authUser) {
    return <Navigate to="/login" />;
  }
  return children;
}
