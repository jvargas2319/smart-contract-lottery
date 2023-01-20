export default function Hero() {
    return (
        <div className="w-full h-screen bg-cover bg-[55%]  md:mb-0 bg-[#010803] sm:bg-cover bg-no-repeat bg-origin-border sm:bg-center sm:pb-10 lg:py-40 mt-0 hero-img sm:mb-[10vh]">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center z-1">
                <div className="pt-20 grid grid-cols-1 content-center gap-8">
                    <div className="flex justify-end md:pr-[18vh]">
                        <h2 className="uppercase sm:text-md mb-4font-semibold leading-8 text-orange-600">
                            <span className="text-zinc-300 uppercase text-sm mb-4">
                                Unlock Your Fortune with{" "}
                            </span>
                            DefiLotto
                        </h2>
                    </div>
                    <div className="flex justify-end md:pr-[13vh]">
                        <p className="mt-2 text-sm sm:text-xl font-bold tracking-tight text-zinc-300 md:text-3xl">
                            A <span className="text-5xl text-orange-600">better</span> way to bet
                            Crypto!
                        </p>
                    </div>
                    <div className="flex text-right md:text-center sm:pl-[32vw]">
                        <p className="mx-auto block mt-6 max-w-2xl text-sm sm:text-lg leading-8 text-zinc-100">
                            Welcome to DefiLotto, the decentralized lottery platform built on
                            Ethereum blockchain. With our platform, you can participate in fair and
                            transparent draws for a chance to win big. Our smart contracts ensure
                            that every draw is random and unbiased, giving you the best chance to
                            hit the jackpot.
                        </p>
                    </div>
                    <div className="flex justify-end md:pr-[25vh]">
                        <a
                            href="#lottery"
                            className=" border rounded-full text-sm text-center  border-orange-600 text-zinc-300 p-[11px]   sm:mt-[10vh] hover:scale-105"
                        >
                            Join DefiLotto now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
