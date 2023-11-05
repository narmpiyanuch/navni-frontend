import { useEffect } from "react";
import { useState } from "react";
import io from "socket.io-client";

export default function ChatRoom() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSend = () => {
    if (message.trim() !== "") {
      socket.emit("chat message", message);
      setMessage("");
    }
  };
  useEffect(() => {
    const newSocket = io("http://localhost:8080");
    newSocket.on("chat message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [messages]);

  return (
    <div className="bg-gradient-to-tr from-purple-400 to-white h-screen w-scree flex flex-col justify-end">
      <div className="chat-messages flex flex-col justify-end items-end">
        {messages.map((msg, index) => (
          <div
            key={index}
            className="message flex justify-end bg-white text-purple-400 p-4 rounded-md shadow-md w-full mb-3"
          >
            {msg}
          </div>
        ))}
      </div>
      <div className="chat-footer bg-white p-4 flex items-center space-x-4 shadow-md">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 py-2 px-4 rounded-md shadow-md"
          value={message}
          onChange={handleInputChange}
        />
        <button
          className="text-purple-400 text-lg shadow-md px-4 py-2 rounded-md"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
}
