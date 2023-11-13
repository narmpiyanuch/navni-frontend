import HeaderAdminPage from "../../feature/admin/HeaderAdminPage";
import FooterAdminPage from "../../feature/admin/FooterAdminPage";
import UserChatBox from "../../feature/admin/UserChatBox";
import { useState } from "react";
import socket from "../../config/socket";
import { useEffect } from "react";
import axios from "../../config/axios";
import { useAuth } from "../../feature/hook/use-auth";
import { useAdmin } from "../../feature/hook/use-admin";

export default function ChatAdminPage() {
  const [currentMessage, setCurrentMessage] = useState("");
  const [currentChatUserId, setCurrentChatUserId] = useState(null);
  const [messageList, setMessageList] = useState([]);

  const { authUser } = useAuth();
  const { getAllUsers } = useAdmin();

  useEffect(() => {
    if (currentChatUserId !== null) {
      axios
        .get(`/message/messages/${currentChatUserId}`)
        .then((response) => setMessageList(response.data));
    }
  }, [currentChatUserId]);

  useEffect(() => {
    socket.on("new_message", handleReceiveMessage);

    return () => socket.off("new_message", handleReceiveMessage);
  }, [currentChatUserId]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const newMessage = {
      //   id: messageList.length + 1,
      userId: currentChatUserId,
      senderId: authUser.id,
      message: currentMessage,
      sendDate: new Date(),
    };
    socket.emit("send_message", newMessage);
    // setMessageList((prevMessages) => [...prevMessages, newMessage]);
    setCurrentMessage("");
  };

  const handleReceiveMessage = (data) => {
    console.log(data);
    setMessageList((list) => [...list, data]);
  };

  return (
    <div className="flex flex-col w-screen h-screen">
      <HeaderAdminPage />
      <div className="flex pt-10 justify-center  pb-[160px]">
        <div className="grid grid-cols-3 w-[1200px] gap-4 ">
          <div className="flex relative bg-Primary-light rounded-3xl h-full overflow-auto">
            <div className="flex sticky top-0 left-0 right-0 flex-col gap-2 z-10 w-full h-[140px] justify-center items-center bg-Primary-light ">
              <input
                type="text"
                className="bg-MonoColor-50 rounded-3xl w-[280px] h-[36px] outline-non p-2"
                placeholder="search"
              />
              <select
                type="text"
                className="bg-MonoColor-50 rounded-3xl w-[280px] h-[36px] outline-none p-2"
              >
                <option className="text-MonoColor-400">Choose a room</option>
              </select>
            </div>
            <div className="flex flex-col gap-4 absolute top-36 px-10 w-full items-center z-0">
              {getAllUsers.map((user) => (
                <UserChatBox
                  key={user.id}
                  user={user}
                  onClick={(userId) => setCurrentChatUserId(userId)}
                />
              ))}
            </div>
          </div>
          <div className="col-span-2 relative h-[64vh] bg-MonoColor-50 border-4 border-Primary-dark rounded-3xl">
            <div className="flex flex-col sticky gap-2 z-10 w-full h-full justify-center items-end pb-4">
              <div className="chat-messages bg-gradient-to-tr from-purple-400 to-white p-4 rounded-t-3xl shadow-md h-[98%] w-full overflow-auto">
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
                  //     key={message.id}
                  //     className={`message flex p-4 rounded-md shadow-md mb-3 bg-white text-purple-500 w-1/2 ${
                  //       message.senderId === currentChatUserId
                  //         ? "justify-start"
                  //         : "justify-end"
                  //     }`}
                  //   >
                  //     {message.message}
                  //   </div>
                ))}
              </div>
              <form
                className="flex items-center w-full h-[40px] border-4 border-Primary-light rounded-2xl "
                onSubmit={handleSubmitForm}
              >
                <input
                  type="text"
                  value={currentMessage}
                  className="outline-none w-full rounded-2xl bg-MonoColor-50 px-4"
                  placeholder="Type a message here..."
                  onChange={(e) => setCurrentMessage(e.target.value)}
                />
                <button
                  type="submit"
                  className="material-symbols-outlined text-Primary-light"
                >
                  send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <FooterAdminPage />
    </div>
  );
}
