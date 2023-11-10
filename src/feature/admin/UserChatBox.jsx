import purplePerson from "../../assets/purplePerson.png";

export default function UserChatBox({ user, onClick }) {
  console.log(user);
  return (
    <button
      onClick={() => {
        onClick(user.id);
      }}
      className=" flex justify-between w-full hover:cursor-pointer hover:bg-Primary-lightest p-4 rounded-full active:bg-MonoColor-50"
    >
      <div className="flex items-center justify-center gap-4">
        <img src={purplePerson} alt="personIcon" className="w-[28px]" />
        <p className="text-[16px] text-Primary-darker pt-2">{`${user.memberInformation[0].firstName} ${user.memberInformation[0].lastName}`}</p>
      </div>
      <div className="bg-OtherColor-lightGreen rounded-full w-4 h-4 mt-2"></div>
    </button>
  );
}
