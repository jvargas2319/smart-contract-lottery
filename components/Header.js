import { ConnectButton } from "web3uikit"

export default function Header() {
    return (
        <nav className=" fixed  w-full bg-opacity-80 backdrop-blur bg-gray-900 shadow-lg shadow-gray-900 mb-0">
            <div className=" mx-auto max-w-7xl px-4 sm:px-6">
                <div className="flex items-center justify-between border-slate-800 py-6 md:justify-start md:space-x-10">
                    <h1 className="text-white font-black text-2xl">
                        <span className="text-orange-600">Goerli</span> Payout
                    </h1>
                    <div className="  hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                        <ConnectButton moralisAuth={false}>Connect Wallet</ConnectButton>
                    </div>
                </div>
            </div>
        </nav>
    )
}
