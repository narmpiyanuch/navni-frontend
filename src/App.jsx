import { useAuth } from "./feature/hook/use-auth";
import Router from "./router/Router";
import Loading from "./utils/Loading";
import socket from "./config/socket";
import { useEffect } from "react";

function App() {
    const { isLoading } = useAuth();
    useEffect(() => {
        socket.connect();
    }, []);

    if (isLoading) {
        return <Loading isLoading={isLoading} />;
    }
    return <Router />;
}

export default App;
