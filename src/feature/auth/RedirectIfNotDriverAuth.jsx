import { Navigate } from "react-router-dom";
import { useAuth } from "../hook/use-auth";

export default function RedirectIfNotDriverAuth({ children }) {
  const { authUser } = useAuth();
  if (authUser?.role !== "DRIVER") {
    return <Navigate to="/login" />;
  }
  return children;
}
