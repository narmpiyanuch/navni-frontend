import BottonMyWallet from "../../feature/auth/ButtonMyWallet";


export default function MyWellet() {
    return (
        <div className="grid justify-items-center">
            <div>
                <h1 className="text-MonoColor-600 text-[24px]">My Wallet</h1>
            </div>

            <br />
            <div>
                <h6 className="text-MonoColor-400 text-[18px]">Current Balance</h6>
            </div>
            
            <BottonMyWallet />

            <div>
                <br />
                <div className="flex flex-col-3">
                    <p className="text-[18px]">My Wallet History</p>
                </div>

                <br />
                <hr/>
                <br />
                <p className="text-zinc-500 text-[14px]">25 Oct 13, 22:40</p>
                <div className="flex flex-col-2 gap-10">
                    <p className="text-[14px]">Top-up by QR code</p>
                    <div>
                        <p className="text-zinc-500 text-[12px]">Amount</p>
                        <p className="text-red-700 text-[14px]">-20 NP</p>
                    </div>
                    <div>
                        <p className="text-zinc-500 text-[12px]">Balance</p>
                        <p className="text-fuchsia-600 text-[14px]">100 NP</p>
                    </div>
                </div>

                <br />
                <hr/>
                <br />
                <p className="text-zinc-500 text-[14px]">25 Oct 13, 08:40</p>
                <div className="flex flex-col-2 gap-10">
                    <p className="text-[14px]">Top-up by QR code</p>
                    <div>
                        <p className="text-zinc-500 text-[12px]">Amount</p>
                        <p className="text-green-600 text-[14px]">+100 NP</p>
                    </div>
                    <div>
                        <p className="text-zinc-500 text-[12px]">Balance</p>
                        <p className="text-fuchsia-600 text-[14px]">100 NP</p>
                    </div>
                </div>

                <br />
                <hr/>
                <br />
                <p className="text-zinc-500 text-[14px]">25 Oct 13, 22:40</p>
                <div className="flex flex-col-2 gap-10">
                    <p className="text-[14px]">Top-up by QR code</p>
                    <div>
                        <p className="text-zinc-500 text-[12px]">Amount</p>
                        <p className="text-red-700 text-[14px]">-37 NP</p>
                    </div>
                    <div>
                        <p className="text-zinc-500 text-[12px]">Balance</p>
                        <p className="text-fuchsia-600 text-[14px]">0 NP</p>
                    </div>
                </div>
            

            </div>
        </div>
    );
}