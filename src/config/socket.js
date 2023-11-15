import io from "socket.io-client";
import { BACKEND_URL } from "./env";

const socket = io(BACKEND_URL, { autoConnect: false });

export default socket;
