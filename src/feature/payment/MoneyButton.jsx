import bathIcon from "../../assets/bathmain.png";
import bathWrite from '../../assets/bath.png'
import {
    PRICE_TEST_100,
    PRICE_TEST_250,
    PRICE_TEST_500,
    PRICE_TEST_1000,
} from "../../config/constant";

const amount = [
    { id: 1, amount: "100", price: PRICE_TEST_100 },
    { id: 2, amount: "250", price: PRICE_TEST_250 },
    { id: 3, amount: "500", price: PRICE_TEST_500 },
    { id: 4, amount: "1,000", price: PRICE_TEST_1000 },
];

export default function MoneyButton({ setNavPoint, setPrice, navPoint }) {
    return (
        <div className="grid grid-cols-2 gap-4">
            {amount.map((el) => {
                return (
                    <button
                        type="button"
                        key={el.id}
                        className={`flex justify-center items-center w-[132px] h-[60px] border-2 border-Primary-main rounded-2xl  active:bg-Primary-lightest ${navPoint === el.amount ? 'bg-Primary-main' : 'bg-MonoColor-50'} `}
                        onClick={() => {
                            setNavPoint(el.amount);
                            setPrice({ price: el.price });

                        }}
                    >
                        {navPoint === el.amount ?
                            (<img
                                src={bathWrite}
                                alt="bathIcon"
                                className="w-[20px]"
                            />)
                            : (<img
                                src={bathIcon}
                                alt="bathIcon"
                                className="w-[20px]"
                            />)}
                        <p className={`text-[20px] ${navPoint === el.amount ? 'text-MonoColor-50' : ' text-Primary-main '}`}>
                            {el.amount}
                        </p>
                    </button>
                );
            })}
        </div>
    );
}
