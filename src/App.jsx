import { useAuth } from "./feature/hook/use-auth";
import Router from "./router/Router";
import Loading from "./utils/Loading";

function App() {
  const { isLoading } = useAuth();
  if (isLoading) {
    return <Loading isLoading={isLoading} />;
  }
  return <Router />;
}

export default App;
