// import { useState } from "react";
import { useAuth } from "./feature/hook/use-auth";
import Router from "./router/Router";
import Loading from "./utils/Loading";
import { useEffect } from "react";
import socket from "./config/socket";

function App() {
  const { isLoading, authUser } = useAuth();
  // const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (authUser) {
      socket.auth = { user: authUser };
      socket.connect();
      socket.emit("join_room");
      return;
    }
    socket.disconnect();
  }, [authUser]);

  if (isLoading) {
    return <Loading isLoading={isLoading} />;
  }
  return <Router />;
}

export default App;
