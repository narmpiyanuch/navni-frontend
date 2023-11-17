import { useEffect } from "react";
import { useState } from "react";
import socket from "../config/socket";
import { useAuth } from "../feature/hook/use-auth";
import axios from "../config/axios";
import { useRef } from "react";

export default function ModalChatForDriver({ open, onClose }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [chatroom, setChatroom] = useState("");
  const [inputText, setInputText] = useState("");

  const scroll = useRef();
  const { authUser } = useAuth();
  console.log(open);
  useEffect(() => {
    if (scroll.current) {
      scroll.current.scrollIntoView({ behavior: "smooth" });
      console.log("open line18");
    }
  }, [messageList, open]);

  useEffect(() => {
    if (authUser) {
      axios
        .get(`/message/messages/${authUser.id}`)
        .then((response) => {
          setMessageList(response.data);
          setChatroom(response.data.chatroomId);
          // console.log("chatMessages", response.data);
        })
        .catch((error) => {
          console.error("Error fetching messages:", error);
        });
    }
  }, [authUser]);

  const sendMessage = (e) => {
    e.preventDefault();
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
      console.log(chatroom);
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
    <>
      {open && (
        <>
          <div className=" fixed inset-0 bg-MonoColor-900 opacity-50 z-20"></div>
          <div className=" fixed inset-0 z-30 ">
            <div className="relative flex justify-center items-end min-h-full ">
              <div className="relative flex-shrink items-center justify-start min-h-[20vh] max-h-[64vh] w-[88%] rounded-t-3xl  bg-MonoColor-200  rounded-[20px_20px_0px_0px] overflow-auto transit ">
                <div className="flex sticky top-0 left-0 right-0 bg-Primary-dark h-[60px] justify-between px-4 items-center gap-4 rounded-t-3xl">
                  <p className="text-[16px] font-semiblod text-MonoColor-50 ">
                    Live chat
                  </p>
                  <span
                    className="material-symbols-outlined text-MonoColor-50 hover:cursor-pointer"
                    onClick={onClose}
                  >
                    close
                  </span>
                </div>
                <div className="flex flex-col  bottom-0 justify-end h-full overflow-auto">
                  {messageList.map((message, index) => (
                    <div key={index} ref={scroll}>
                      {message.sender.id === authUser.id ? (
                        <div className="flex flex-col items-end py-2 pr-2">
                          <div
                            key={message.id}
                            className={`rounded-xl rounded-tr-sm p-2 shadow-md  bg-Primary-main text-MonoColor-50 max-w-[48%] overflow-wrap whitespace-normal `}
                          >
                            <p className="break-words">{message.message}</p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col items-start py-2 pl-2">
                          <p className="text-[12px] text-Primary-darker">
                            Admin
                          </p>
                          <div
                            key={message.id}
                            className="rounded-xl rounded-tl-sm p-3 shadow-md  bg-MonoColor-50 text-MonoColor-600 max-w-[48%] overflow-wrap whitespace-normal "
                          >
                            <p className="break-words">{message.message}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <form
                  className="flex w-full sticky bottom-0 left-0 right-0 bg-Primary-light p-4 items-center space-x-4 shadow-md"
                  onSubmit={sendMessage}
                >
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 py-2 px-4 rounded-md shadow-md text-[14px] text-MonoColor-50"
                    value={inputText}
                    onChange={handleInput}
                  />
                  <button
                    type="submit"
                    className="material-symbols-outlined text-Primary-dark"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
