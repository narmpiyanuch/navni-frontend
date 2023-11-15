import { useEffect } from "react";
import { useState } from "react";
import socket from "../../config/socket";
import { useAuth } from "../hook/use-auth";
import axios from "../../config/axios";

export default function ChatRoom() {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [chatroom, setChatroom] = useState("");
  const [inputText, setInputText] = useState("");


  const { authUser } = useAuth();

  useEffect(() => {
    if (authUser) {
      axios
        .get(`/message/messages/${authUser.id}`)
        .then((response) => {
          setMessageList(response.data);
          setChatroom(response.data.chatroomId);
          console.log("chatMessages", response.data);
        })
        .catch((error) => {
          console.error("Error fetching messages:", error);
        });
    }
  }, [authUser]);

  const sendMessage = () => {
    if (currentMessage !== "") {
      const messageData = {
        userId: authUser.id,
        senderId: authUser.id,
        message: currentMessage,
        sendDate: new Date(),
      };
      socket.emit("send_message", messageData);
      setCurrentMessage("");
      setInputText("");
    }
  };

  const handleInput = async (e) => {
    setCurrentMessage(e.target.value);
    setInputText(e.target.value);
  };

  const handleReceiveMessage = (data) => {
    console.log(data);
    setMessageList((list) => [...list, data]);
  };

  useEffect(() => {
    socket.emit("join_room");

    socket.on("room_id", (data) => {
      setChatroom(data.id);
    });

    socket.on("join_room", () => {
      console.log("Joined the room");
    });

    socket.on("disconnect", () => {
      console.log("socket disconnected");
    });

    socket.on("all_chat", ({ allChat }) => {
      const x = allChat.map((item) => ({
        chatroom: item.chatroom_id,
        senderId: authUser.id,
        message: item.message,
        sendDate: item.send_date,
      }));
      setMessageList([...x]);
    });

    socket.on("new_message", handleReceiveMessage);

    return () => {
      socket.off("new_message", handleReceiveMessage);
      socket.off("all_chat");
      socket.off("join_room");
    };
  }, [authUser]);

  console.log(currentMessage);

  return (
    <div className="bg-gradient-to-tr from-purple-400 to-white h-screen w-screen flex flex-col justify-end overflow-auto">
      <div className="flex flex-col  bottom-0 justify-end h-full overflow-auto">
        {messageList.map((message) => (
          <>
            {message.sender.id === authUser.id ? (
              <div
                key={message.id}
                className={`message max-w-[40%] rounded-xl rounded-tr-sm flex p-4 shadow-md mb-3 bg-white text-purple-500 ml-auto justify-end`}
              >
                {message.message}
              </div>
            ) : (
              <div
                key={message.id}
                className={`message max-w-[40%] rounded-xl rounded-tl-sm flex p-4 shadow-md mb-3 bg-white text-purple-500 justify-start`}
              >
                {message.message}
              </div>
            )}
          </>
          //   <div
          //     key={index}
          //     className={`message flex p-4 rounded-md shadow-md mb-3 bg-white text-purple-500 ${
          //       message.sender.id === authUser.id
          //         ? "justify-end"
          //         : "justify-start"
          //     }`}
          //   >
          //     {message.message}
          //   </div>
        ))}
      </div>
      <div className="chat-footer sticky bottom-0 bg-white p-4 flex items-center space-x-4 shadow-md">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 py-2 px-4 rounded-md shadow-md"
          value={inputText}
          onChange={handleInput}
        />
        <button
          className="text-purple-400 text-lg shadow-md px-4 py-2 rounded-md"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}
