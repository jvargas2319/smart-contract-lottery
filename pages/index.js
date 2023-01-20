import Head from "next/head"
import Image from "next/image"
import { Inter } from "@next/font/google"
import Header from "../components/Header"
import Hero from "../components/Hero"
import LotteryEntrance from "../components/LotteryEntrance"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
    return (
        <>
            <Head>
                <title>
                    Win Big with Ethereum Lottery | DefiLotto - Decentralized and Fair Draws
                </title>
                <meta
                    name="description"
                    content="Join DefiLotto, the decentralized Ethereum lottery platform with fair and transparent draws. Instant payouts, no wait times. Unlock your fortune now"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Hero />
            <LotteryEntrance />
        </>
    )
}
