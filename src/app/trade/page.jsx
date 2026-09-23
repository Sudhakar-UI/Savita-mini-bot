"use client";

import { useState } from 'react'
import Userfooter from "../components/Userfooter";
import Chart from "./chart.jsx";
import { useTheme } from "../context/ThemeContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LivepriceList from "./livepricelist";
import MarketList from "./marketlist";
import OrderForm from "./orderform";
import OrderBook from "./orderbook";
import OpenOrder from "./openorder";

const pairs = [
    { symbol: "BTC/USDT", icon1: "/assets/images/color/btc.svg", icon2: "/assets/images/color/usdt.svg" },
    { symbol: "ETH/USDT", icon1: "/assets/images/color/eth.svg", icon2: "/assets/images/color/usdt.svg" },
    { symbol: "TON/USDT", icon1: "/assets/images/color/ton.svg", icon2: "/assets/images/color/usdt.svg" },
    { symbol: "SOL/USDT", icon1: "/assets/images/color/sol.svg", icon2: "/assets/images/color/usdt.svg" },
];

const trades = [
    { price: "1.578", amount: "17.50", time: "11:53:05", isSell: true },
    { price: "1.581", amount: "59.34", time: "11:42:30", isSell: true },
    { price: "1.581", amount: "72.51", time: "11:42:30", isSell: true },
    { price: "1.581", amount: "64.61", time: "11:42:30", isSell: true },
    { price: "1.582", amount: "53.87", time: "11:42:30", isSell: true },
    { price: "1.582", amount: "4.86", time: "11:42:30", isSell: true },
    { price: "1.582", amount: "14.59", time: "11:42:30", isSell: true },
    { price: "1.582", amount: "7.10", time: "11:42:30", isSell: true },
];

export default function TradePage() {
    const [bottomTab, setBottomTab] = useState("trades");
    const [selectedPair] = useState(pairs[0]);
    const [view, setView] = useState("trade");
    const { isNightMode } = useTheme();
    const pathname = usePathname();

    return (
        <div className="trade-page">
            <div className="container">
                <div className="topTabs">
                    <Link
                        href="/trade"
                        className={`topTab ${pathname === "/trade" ? "topTabActive" : ""}`}
                    >
                        Spot
                    </Link>

                    <Link
                        href="/derivatives"
                        className={`topTab ${pathname === "/derivatives" ? "topTabActive" : ""}`}
                    >
                        Derivatives
                    </Link>
                </div>

                <LivepriceList
                    selectedPair={selectedPair}
                    isNightMode={isNightMode}
                    view={view}
                    setView={setView}
                />

                {view === "trade" && (
                    <>
                        <MarketList />

                        <div className="mainGrid">
                            <OrderForm />
                            <OrderBook />
                        </div>
                    </>
                )}

                {view === "chart" && <Chart />}
                <OpenOrder
                    bottomTab={bottomTab}
                    setBottomTab={setBottomTab}
                    trades={trades}
                />
                <Userfooter />
            </div>
        </div>
    );
}
