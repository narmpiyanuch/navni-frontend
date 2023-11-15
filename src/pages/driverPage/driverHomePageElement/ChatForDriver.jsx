import messageChat from "../../../assets/chat.png";

export default function ChatForDriver() {
    return (
        <div className="flex gap-10 items-center justify-center mt-8">
            <div className="flex flex-col justify-center items-center relative w-[320px] h-[40px] rounded-3xl bg-Secondary-main active:bg-Secondary-dark">
                <div className="flex justify-center items-center w-[64px] h-[64px] bg-MonoColor-50 rounded-full absolute left-0 border-4  border-Secondary-main">
                    <img src={messageChat} alt="tuktuk" className="w-[40px]" />
                </div>
                <p className="text-MonoColor-50 text-[20px] font-semibold">
                    Live Chat
                </p>
            </div>
        </div>
    );
}
