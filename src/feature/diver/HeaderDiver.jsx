import user from '../../assets/user.png'

export default function HeaderDiver() {
  return (
    <div className="flex fixed top-0 flex-col items-center justify-start bg-Primary-main w-screen h-[180px] rounded-[0px_0px_40px_40px]">
      <div className="flex fixed gap-4 top-[10%] items-center">
        <img
          src={user}
          className="rounded-full aspect-square w-[60px] border-4 border-MonoColor-50 bg-MonoColor-50 drop-shadow-lg"
        />
        <div className=" flex-shrink">
          <div className="flex justify-between items-center">
            <p className="text-[18px] text-MonoColor-50">
              Hello (First name)
            </p>
          </div>
          <hr className="w-[240px] border-[1.5px] rounded-xl" />
          <div className="flex justify-between item-center">
            <div className="flex gap-2 items-center">
              <span className="material-symbols-outlined text-MonoColor-50 font-thin text-[18px]">
                mail
              </span>
              <p className="text-[14px] text-MonoColor-50">asdfh@gmail.com</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
