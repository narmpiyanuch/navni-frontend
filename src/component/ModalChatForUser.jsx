import { useEffect } from "react";
import { useState } from "react";
import socket from "../config/socket"
import { useAuth } from "../feature/hook/use-auth";
import axios from "../config/axios";

export default function ModalChatForUser({ open, onClose }) {
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
        <>
            {open && <>
                <div className=" fixed inset-0 bg-MonoColor-900 opacity-50 z-20"></div>
                <div className=" fixed inset-0 z-30 ">
                    <div className="relative flex justify-center items-end min-h-full ">
                        <div className="relative flex-shrink items-center justify-start min-h-[20vh] max-h-[64vh] w-[88%] rounded-t-3xl  bg-MonoColor-200  rounded-[20px_20px_0px_0px] overflow-auto transit ">
                            <div className="flex sticky top-0 left-0 right-0 bg-Secondary-dark h-[60px] justify-between px-4 items-center gap-4 rounded-t-3xl">
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
                                {messageList.map((message) => (
                                    <>
                                        {message.sender.id === authUser.id ? (
                                            <div className="flex flex-col items-end py-2 pr-2">
                                                <div
                                                    key={message.id}
                                                    className={`rounded-xl rounded-tr-sm p-2 shadow-md  bg-Secondary-main text-MonoColor-50 max-w-[48%] overflow-wrap whitespace-normal `}
                                                >
                                                    <p className="break-words">{message.message}</p>
                                                </div>
                                            </div>

                                        ) : (
                                            <div className="flex flex-col items-start py-2 pl-2">
                                                <p className="text-[12px] text-Secondary-darker">
                                                    Admin
                                                </p>
                                                <div
                                                    key={message.id}
                                                    className="rounded-xl rounded-tl-sm p-3 shadow-md  bg-MonoColor-50 text-MonoColor-600 max-w-[48%] overflow-wrap whitespace-normal ">
                                                    <p className="break-words">{message.message}</p>
                                                </div>
                                            </div>
                                            // <div
                                            //     key={message.id}
                                            //     className={`message max-w-[40%] rounded-xl rounded-tl-sm flex p-4 shadow-md mb-3 bg-white text-purple-500 justify-start`}
                                            // >
                                            //     {message.message}
                                            // </div>
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
                            <div className="flex w-full sticky bottom-0 left-0 right-0 bg-Secondary-light p-4 items-center space-x-4 shadow-md">
                                <input
                                    type="text"
                                    placeholder="Type your message..."
                                    className="flex-1 py-2 px-4 rounded-md shadow-md text-[14px]"
                                    value={inputText}
                                    onChange={handleInput}
                                />
                                <button
                                    type="submit"
                                    onClick={sendMessage}
                                    className="material-symbols-outlined text-Secondary-main"
                                >
                                    Send
                                </button>
                            </div>
                        </div>

                    </div>
                </div></>}
        </>
    )
}
