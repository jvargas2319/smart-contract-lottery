import { useWeb3Contract } from "react-moralis"
import { abi, contractAddresses } from "../constants"
import { useMoralis } from "react-moralis"
import { useEffect, useState } from "react"
import { ethers } from "ethers"
import { useNotification } from "web3uikit"
import bg from "../public/assets/moneyBags.png"

const LotteryEntrance = () => {
    const { chainId: chainIdHex, isWeb3Enabled } = useMoralis()
    const chainId = parseInt(chainIdHex)
    const raffleAddress = chainId in contractAddresses ? contractAddresses[chainId][0] : null
    const [entranceFee, setEntranceFee] = useState("0")
    const [recentWinner, setRecentWinner] = useState("0")
    const [numPlayer, setNumPlayer] = useState("0")
    const [entranceDeposit, setEntranceDeposit] = useState("0")

    const dispatch = useNotification()

    const { runContractFunction: enterRaffle } = useWeb3Contract({
        abi: abi, //,
        contractAddress: raffleAddress, //
        functionName: "enterRaffle", //.
        params: {},
        msgValue: ethers.utils.parseUnits(entranceDeposit).toString(), //
    })
    const { runContractFunction: getEntranceFee } = useWeb3Contract({
        abi: abi, //,
        contractAddress: raffleAddress, //
        functionName: "getEntranceFee", //.
        params: {},
    })

    const { runContractFunction: getNumberOfPlayers } = useWeb3Contract({
        abi: abi, //,
        contractAddress: raffleAddress, //
        functionName: "getNumberOfPlayers", //.
        params: {},
    })
    const { runContractFunction: getRecentWinner } = useWeb3Contract({
        abi: abi, //,
        contractAddress: raffleAddress, //
        functionName: "getRecentWinner", //.
        params: {},
    })

    async function updateUI() {
        const entranceFeeFromCall = (await getEntranceFee()).toString()
        const numPlayersFromCall = (await getNumberOfPlayers()).toString()
        const recentWinnerFromCall = (await getRecentWinner()).toString()
        setEntranceFee(entranceFeeFromCall)
        setNumPlayer(numPlayersFromCall)
        setRecentWinner(recentWinnerFromCall)
    }

    const handleSuccess = async function (tx) {
        await tx.wait(1)
        handleNewNotification(tx)
        console.log(ethers.utils.parseUnits(entranceDeposit).toString())
        updateUI()
    }

    const handleChange = (event) => {
        setEntranceDeposit(event.target.value)
        console.log("value is:", event.target.value)
    }

    const handleNewNotification = function () {
        dispatch({
            type: "info",
            message: "Transaction Complete",
            title: "Tx Notification",
            position: "topR",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                    />
                </svg>
            ),
        })
    }

    return (
        <>
            <div id="lottery" className=" md:grid md:grid-cols-2 ">
                <div className=" md:grid md:grid-cols-1 gap-11  ">
                    <div className="md:grid gap-10 mb-10 md:mb-0">
                        <div className="text-center pt-4">
                            <h2 className="text-lg  font-semibold leading-8 text-orange-600">
                                Lottery Entrance
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 gap-4 px-4">
                            <div>
                                <label
                                    htmlFor="price"
                                    className="block text-sm font-medium text-center text-zinc-300"
                                >
                                    Must be connected to Goerli Testnet on Metamask and Minimum
                                    Entrance Fee: {ethers.utils.formatUnits(entranceFee)}
                                    <span className="text-indigo-400"> ETH</span>
                                </label>
                            </div>
                            <div className="relative mt-1 rounded-md shadow-sm">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <span className="text-orange-500 sm:text-sm">$</span>
                                </div>
                                <input
                                    type="text"
                                    name="price"
                                    id="price"
                                    onChange={handleChange}
                                    value={entranceDeposit}
                                    className="block w-full rounded-md text-zinc-200 border-orange-600 pl-7 pr-12 focus:border-indigo-500 bg-zinc-600 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="0.00"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center">
                                    {raffleAddress ? (
                                        <button
                                            onClick={async function () {
                                                await enterRaffle({
                                                    onSuccess: handleSuccess,
                                                    onError: (error) => console.log(error),
                                                })
                                            }}
                                            className="h-full rounded-md border border-y-orange-600 border-l-black border-r-orange-600 bg-zinc-600 py-0 pl-2 pr-2 text-orange-600 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        >
                                            Submit
                                        </button>
                                    ) : (
                                        <p className="pr-10">No Raffle address detected</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" grid grid-cols-1 justify-center px-5 lg:justify-between ">
                        <div className="rounded-xl p-5 shadow-xl shadow-gray-900 bg-orange-700 backdrop-filter backdrop-blur-xl bg-opacity-10  border border-orange-700 mb-[90px] ">
                            <div className=" p-auto ">
                                <div className="grid grid-rows-3 grid-flow-col gap-4">
                                    <div className=" text-zinc-200 text-lg  text-center row-span-9">
                                        <h1>Recent Winner: </h1>
                                    </div>

                                    <div className="row-span-9 overflow-hidden">
                                        <div className="text-zinc-200 text-center ">
                                            <p className=" break-words">{recentWinner}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-xl p-5 pr-[12.5vh] pl-[12.5vh] sm:p-[2vh] shadow-xl shadow-gray-900 bg-orange-700 backdrop-filter backdrop-blur-xl bg-opacity-10  border border-orange-700 mb-[35px]">
                            <div className=" p-auto">
                                <div className="grid grid-rows-3 grid-flow-col gap-4">
                                    <div className=" text-zinc-200 text-lg  text-center row-span-9">
                                        <h1>Number of Players: </h1>
                                    </div>

                                    <div className="row-span-9">
                                        <div className="text-zinc-200 text-center">{numPlayer}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="bg-center bg-cover bg-no-repeat "
                    style={{ backgroundImage: `url(${bg.src})` }}
                ></div>
            </div>
        </>
    )
}

export default LotteryEntrance
