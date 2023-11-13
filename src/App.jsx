import { useAuth } from "./feature/hook/use-auth";
import Router from "./router/Router";
import Loading from "./utils/Loading";
import socket from "./config/socket";
import { useEffect } from "react";

function App() {
    const { isLoading, authUser } = useAuth();
    useEffect(() => {
        if (authUser) {
            socket.auth = { user: authUser };
            socket.connect();
            socket.emit("join_driverRoom");
        }
    }, [authUser]);

    if (isLoading) {
        return <Loading isLoading={isLoading} />;
    }
    return <Router />;
}

export default App;
