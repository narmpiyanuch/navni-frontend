import purplePerson from '../../assets/purplePerson.png'

export default function OrderForDiver({ setIsAccept, onClose }) {
  return (
    <div className="fixed top-[60%] items-center justify-start pt-6 bg-MonoColor-50 h-full rounded-[20px_20px_0px_0px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] w-screen">
      <div className='flex items-center justify-center h-[120px] bg-MonoColor-50 gap-2'>
        <div className='flex flex-col relative pr-8'>
          <div className='absolute outline-none top-[-32px] left-[10px] w-[20px] h-[20px] border-4 border-Primary-dark bg-MonoColor-50 rounded-full z-10'></div>
          <hr className='absolute border-2 border-Primary-dark w-[40px] rotate-90' />
          <div className='absolute outline-none top-[12px] left-[10px] w-[20px] h-[20px] border-4 border-Primary-dark bg-Primary-dark rounded-full'></div>
        </div>
        <div className='flex flex-col items-start justify-center  w-[240px] h-[100px]  gap-6'>
          <div className='flex gap-4'>
            <p className='text-[16px] flex font-semibold text-MonoColor-400 bg-transparent'>From</p>
            <p className='text-[16px] flex font-semibold bg-transparent text-MonoColor-700 '>BTS Ari exit 4</p>
          </div>
          <div className='flex gap-4'>
            <p className='text-[16px] flex font-semibold text-MonoColor-400 bg-transparent'>To</p>
            <p className='text-[16px] flex font-semibold bg-transparent text-MonoColor-700 '>NaNa coffee Ari</p>
          </div>
        </div>
        <div className='flex flex-col items-start justify-center gap-6 pr-2'>
          <div className='flex flex-col justify-center items-center gap-4'>
            <p className='text-[16px] flex font-semibold text-MonoColor-400 bg-transparent'>Fare</p>
            <p className='text-[16px] flex font-semibold bg-transparent text-Primary-dark '>26 NP</p>
          </div>
        </div>
      </div>
      <div className=' flex items-center justify-center h-[120px] bg-MonoColor-50 '>
        <div className='grid grid-cols-3 justify-center items-center gap-6'>
          <div className='flex flex-col gap-2 justify-center items-center'>
            <p className='text-[16px] flex font-semibold text-MonoColor-400 bg-transparent'>Arriving in</p>
            <p className='text-[16px] flex font-semibold bg-transparent text-MonoColor-700 '>5-10 mins</p>
          </div>
          <div className='flex gap-2 justify-center items-center'>
            <img src={purplePerson} alt='personIcon' className='w-[32px]' />
            <p className='text-[18px] font-semibold text-Primary-dark pt-2'>X 1</p>
          </div>
          <div className='flex flex-col gap-2 justify-center items-center'>
            <button onClick={() => {
              setIsAccept(true)
              onClose()
            }}
              className='w-[100px] py-4 bg-OtherColor-darkGreen text-MonoColor-50 rounded-xl text-[14px] active:bg-OtherColor-lightGreen active:text-MonoColor-700' >
              <p className='text-[20px] font-semibold'>45 s</p>
              <p className='text-[16px] font-medium'>Accept</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

