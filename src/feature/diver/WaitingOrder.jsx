
export default function WaitingOrder() {
    return (
        <div className="fixed top-[60%] items-center justify-center pt-6 bg-Primary-main h-full w-screen rounded-[40px_40px_0px_0px] mt-8">
            <div className='flex flex-col gap-4 pt-[80px] justify-center items-center '>
                <span class="loading loading-spinner text-white loading-lg"></span>
                <p className='text-MonoColor-50 text-[20px] font-semibold'>Waiting..</p>
            </div>
        </div>
    )
}
