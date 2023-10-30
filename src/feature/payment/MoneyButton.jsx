import bathIcon from '../../assets/bathmain.png'

const amount = [
    { id: 1, amount: '100' },
    { id: 2, amount: '250' },
    { id: 3, amount: '500' },
    { id: 4, amount: '1,000' },
]

export default function MoneyButton() {
    return (
        <div className='grid grid-cols-2 gap-4'>
            {amount.map(el => {
                return < div key={el.id} className=' flex justify-center items-center w-[132px] h-[60px] border-2 border-Primary-main rounded-2xl  bg-MonoColor-50 active:bg-Primary-lightest' >
                    <img src={bathIcon} alt='bathIcon' className='w-[20px]' />
                    <p className='text-[20px] text-Primary-main'>{el.amount}</p>
                </div >
            })
            }
        </div>)
}
