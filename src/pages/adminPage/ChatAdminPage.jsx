import HeaderAdminPage from "../../feature/admin/HeaderAdminPage";
import FooterAdminPage from "../../feature/admin/FooterAdminPage";
import UserChatBox from "../../feature/admin/UserChatBox";
import { useState } from "react";
import socket from "../../config/socket";
import { useEffect } from "react";
import axios from "../../config/axios";
import { useAuth } from "../../feature/hook/use-auth";
import { useAdmin } from "../../feature/hook/use-admin";
import { useRef } from "react";

export default function ChatAdminPage() {
  const [currentMessage, setCurrentMessage] = useState("");
  const [currentChatUserId, setCurrentChatUserId] = useState(null);
  const [messageList, setMessageList] = useState([]);
  const [selectedRole, setSelectedRole] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const scroll = useRef(null);
  const { authUser } = useAuth();
  const { getAllUsers, getAllUsersForAdmin } = useAdmin();

  useEffect(() => {
    if (authUser.role === "ADMIN") {
      getAllUsersForAdmin();
    }
  }, [authUser]);

  useEffect(() => {
    if (scroll.current) {
      scroll.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messageList]);

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

  useEffect(() => {
    setMessageList([]);
  }, [selectedRole]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const newMessage = {
      userId: currentChatUserId,
      senderId: authUser.id,
      message: currentMessage,
      sendDate: new Date(),
    };
    socket.emit("send_message", newMessage);
    // socket.emit("send_notification", newMessage);
    setCurrentMessage("");
  };

  const handleReceiveMessage = (data) => {
    console.log(data);
    setMessageList((list) => [...list, data]);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
    closeDropdown();
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filterUsersByRoleAndSearch = () => {
    let filteredUsers = getAllUsers;

    if (selectedRole !== null) {
      filteredUsers = filteredUsers.filter(
        (user) => user.role === selectedRole
      );
    }

    if (searchQuery.trim() !== "") {
      const searchLowerCase = searchQuery.toLowerCase();
      filteredUsers = filteredUsers.filter((user) => {
        if (
          user.memberInformation[0]?.firstName &&
          user.memberInformation[0]?.lastName
        ) {
          const fullName = `${user.memberInformation[0]?.firstName}${user.memberInformation[0]?.lastName}`;
          return fullName.toLowerCase().includes(searchLowerCase);
        }
        return user.email;
      });
    }

    return filteredUsers;
  };

  return (
    <div className="flex flex-col w-screen h-screen">
      <HeaderAdminPage />
      <div className="flex pt-10 justify-center pb-[160px]">
        <div className="grid grid-cols-3 w-[1200px] gap-4 ">
          <div className="flex flex-col relative bg-Primary-light rounded-3xl h-full overflow-auto">
            <div className="flex sticky rounded-3xl top-0 left-0 right-0 flex-col gap-2 z-10 w-full h-[140px] justify-center items-center bg-Primary-light ">
              <input
                type="text"
                className="bg-MonoColor-50 rounded-3xl w-[280px] h-[36px] outline-non p-2"
                placeholder="search by name..."
                value={searchQuery}
                onChange={handleSearch}
              />
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  type="text"
                  className="text-start bg-MonoColor-50 rounded-3xl w-[280px] h-[36px] outline-none p-2"
                  value={selectedRole || ""}
                  onChange={(e) => handleRoleSelection(e.target.value || null)}
                >
                  <option value="" className="text-Primary-dark">
                    {selectedRole ? `Room: ${selectedRole}` : "Choose a room"}
                  </option>
                  <button className="absolute top-0 right-0 bg-MonoColor-50 rounded-3xl w-[36px] h-[36px] outline-none p-2 cursor-pointer">
                    {isDropdownOpen ? (
                      <span className="text-MonoColor-400">▲</span>
                    ) : (
                      <span className="text-MonoColor-400">▼</span>
                    )}
                  </button>
                </button>
                {isDropdownOpen && (
                  <div className="absolute mt-2 left-0 right-0 bg-MonoColor-50 rounded-xl p-2">
                    <div
                      onClick={() => handleRoleSelection("USER")}
                      className="cursor-pointer py-2 text-purple-500"
                    >
                      User :
                    </div>
                    <hr className="w-full" />
                    <div
                      onClick={() => handleRoleSelection("DRIVER")}
                      className="cursor-pointer py-2 text-purple-500"
                    >
                      Driver :
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-4 absolute top-36 px-10 w-full items-center z-0 overflow-auto">
              {filterUsersByRoleAndSearch().map((user) => (
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
              <div className="chat-messages bg-gradient-to-t from-Primary-light to-white p-4 rounded-t-3xl shadow-md h-full w-full overflow-auto">
                {messageList.map((message, index) => (
                  <div key={index} ref={scroll}>
                    {message.sender.id === authUser.id ? (
                      <div className="flex flex-col items-end">
                        <div
                          key={message.id}
                          className={`rounded-xl rounded-tr-sm p-3 shadow-md mb-3 bg-Primary-darker text-MonoColor-50 max-w-[48%] overflow-wrap whitespace-normal `}
                        >
                          <p className="break-words">{message.message}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-start">
                        <div
                          key={message.id}
                          className="rounded-xl rounded-tl-sm p-3 shadow-md mb-3 bg-MonoColor-50 text-Primary-darker max-w-[48%] overflow-wrap whitespace-normal "
                        >
                          <p className="break-words">{message.message}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <form className="flex w-full px-4" onSubmit={handleSubmitForm}>
                <div className="flex items-center w-full h-[40px] border-4 border-Primary-light p-2 rounded-2xl ">
                  <input
                    type="text"
                    value={currentMessage}
                    className="outline-none w-full rounded-2xl bg-MonoColor-50 text-MonoColor-600 px-4"
                    placeholder="Type a message here..."
                    onChange={(e) => setCurrentMessage(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="material-symbols-outlined text-Primary-dark"
                  >
                    send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <FooterAdminPage />
    </div>
  );
}
