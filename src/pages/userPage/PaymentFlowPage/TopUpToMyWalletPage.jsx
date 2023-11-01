
import qrCode from '../../../assets/qr-code.png'
import credit from '../../../assets/credit-cards-payment.png'

export default function TopUpToMyWalletPage() {
    return (
        <div>
            <div className='flex flex-col m-auto items-center justify-start  h-screen w-screen gap-2'>
                <div className=' flex flex-col pt-10 items-start w-full '>
                    <span className="material-symbols-outlined text-Primary-dark  font-bold text-[32px] active:text-MonoColor-300 pl-4"> navigate_before</span>
                </div>
                <div className='flex items-center'>
                    <p className='text-Primary-dark text-[24px] font-normal item-center'>Top-up to My Wallet</p>
                </div>
                <div className='flex flex-col gap-4 pt-8'>
                    <p className='text-[18px] text-MonoColor-400 '>Choose your payment option</p>
                    <button className=' flex w-[280px] h-[120px] bg-MonoColor-50 justify-start items-center rounded-2xl border-2 border-Primary-dark  active:bg-Primary-lightest'>
                        <div className='flex items-start'>
                            <img src={qrCode} alt='qrCode' className='w-[60px] ml-6' />
                            <p className='pl-8 font-medium text-[16px] text-Primary-darker active:text-MonoColor-600'>QR Code</p>
                        </div>
                    </button>
                    <button className=' flex w-[280px] h-[120px] bg-MonoColor-50 justify-start items-center rounded-2xl border-2 border-Primary-dark  active:bg-Primary-lightest'>
                        <div className='flex items-start'>
                            <img src={credit} alt='qrCode' className='w-[60px] ml-6' />
                            <div>
                                <p className='pl-8 font-medium text-[16px] text-Primary-darker active:text-MonoColor-600'>Credit/Debit Card</p>
                                <p className='pl-8 font-medium text-[12px] text-MonoColor-400 active:text-MonoColor-600'>VISA, MasterCard, JCB</p>
                            </div>
                        </div>
                    </button>
                </div>

            </div >
        </div>
    )
}
