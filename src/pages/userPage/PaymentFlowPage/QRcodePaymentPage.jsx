import QRCodeBlack from '../../../assets/qrcodeBlack.png'
import PurpleButton from '../../../feature/payment/PurpleButton'


export default function QRcodePaymentPage() {
    return (
        <div>
            <div className='flex flex-col m-auto items-center justify-start  h-screen w-screen gap-2'>
                <div className=' flex flex-col pt-10 items-start w-full '>
                    <span className="material-symbols-outlined text-Primary-dark  font-bold text-[32px] active:text-MonoColor-300 pl-4"> navigate_before</span>
                </div>
                <div className='flex items-center'>
                    <p className='text-Primary-dark text-[24px] font-normal item-center'>Top-up to My Wallet</p>
                </div>
                <div className='flex flex-col gap-6 pt-8 justify-center items-center '>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='text-[18px] text-MonoColor-400 '>Pay by QR Code</p>
                        <p className='text-[16px] text-MonoColor-400 '>Save QR Code or take a Screenshot</p>
                    </div>
                    <div className='flex flex-col pt-8 justify-center items-center'>
                        <img src={QRCodeBlack} alt='QRcodeBlack' className='w-[160px]' />
                        <p className=' text-Error-main text-[16px] pt-6'>This QR Code will expire in</p>
                        <p className=' text-Error-main text-[16px]'>04:45 minutes</p>
                    </div>
                    <PurpleButton title='Save QR Code' />
                </div>

            </div >
        </div>
    )
}
