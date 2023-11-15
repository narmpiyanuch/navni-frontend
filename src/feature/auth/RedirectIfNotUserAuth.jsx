import { Navigate } from "react-router-dom";
import { useAuth } from "../hook/use-auth";

export default function RedirectIfNotUserAuth({ children }) {
  const { authUser } = useAuth();
  if (authUser?.role !== "USER") {
    return <Navigate to="/login" />;
  }
  return children;
}
