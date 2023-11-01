import MoneyButton from "../../../feature/payment/MoneyButton";
import PurpleButton from "../../../feature/payment/PurpleButton";

export default function TopUpToAmoutPage() {
  return (
    <div className="flex flex-col m-auto items-center justify-start  h-screen w-screen gap-2">
      <div className=" flex flex-col pt-10 items-start w-full ">
        <span className="material-symbols-outlined text-Primary-dark  font-bold text-[32px] active:text-MonoColor-300 pl-4">
          navigate_before
        </span>
      </div>
      <div className="flex items-center">
        <p className="text-Primary-dark text-[24px] font-normal item-center">
          Top-up to amount
        </p>
      </div>
      <div className="flex flex-col gap-4 pt-8">
        <p className="text-[18px] text-MonoColor-400 ">Please choose amount</p>
        <div className=" flex w-[280px] h-[60px] bg-Primary-lightest justify-start items-center rounded-2xl">
          <p className="pl-8 font-medium text-[16px] text-MonoColor-400">NP</p>
        </div>
      </div>
      <div className="pt-4">
        <MoneyButton />
      </div>
      <div className="pt-10">
        <PurpleButton title="Next" />
      </div>
    </div>
  );
}
