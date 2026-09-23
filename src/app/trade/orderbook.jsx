"use client";

import { useState } from "react";
import { Image } from "react-bootstrap";
import ChevronDown from "./ChevronDown";

const sellOrders = [
    { price: "1.6721", amount: "1.6721", width: 100 },
    { price: "1.64", amount: "1.64", width: 88 },
    { price: "1.636859", amount: "1.6152339", width: 75 },
    { price: "1.638", amount: "1.638", width: 55 },
    { price: "1.623684", amount: "1.62", width: 35 },
];

const buyOrders = [
    { price: "1.5782154", amount: "33.181258", width: 40 },
    { price: "1.575", amount: "870.03", width: 60 },
    { price: "1.574", amount: "12.63", width: 80 },
    { price: "1.575478", amount: "3.172578", width: 90 },
    { price: "1.561455", amount: "2.67154", width: 100 },
];
export default function OrderBook() {

    const [orderBookType, setOrderBookType] = useState("all");

    const sellLeftBgRows = sellOrders.map((_, index) => index);
    const sellRightBgRows = sellOrders.map((_, index) => index);

    const leftBgRows = buyOrders.map((_, index) => index);
    const rightBgRows = buyOrders.map((_, index) => index);
    return (
        <div className="rightPanel">

            <div className="orderBookHeader">

                <div className="depthBars">

                    {/* ALL */}
                    <button
                        type="button"
                        className={`depthBtn ${orderBookType === "all"
                            ? "activeDepthBtn"
                            : ""
                            }`}
                        onClick={() => setOrderBookType("all")}
                    >
                        <Image
                            src="/assets/images/buysellicon.svg"
                            alt="All"
                            width={20}
                            height={20}
                        />
                    </button>


                    {/* BUY */}
                    <button
                        type="button"
                        className={`depthBtn ${orderBookType === "buy"
                            ? "activeDepthBtn"
                            : ""
                            }`}
                        onClick={() => setOrderBookType("buy")}
                    >
                        <Image
                            src="/assets/images/buyicon.svg"
                            alt="Buy"
                            width={20}
                            height={20}
                        />
                    </button>


                    {/* SELL */}
                    <button
                        type="button"
                        className={`depthBtn ${orderBookType === "sell"
                            ? "activeDepthBtn"
                            : ""
                            }`}
                        onClick={() => setOrderBookType("sell")}
                    >
                        <Image
                            src="/assets/images/sellicon.svg"
                            alt="Sell"
                            width={20}
                            height={20}
                        />
                    </button>

                </div>

                <div className="amountSelectWrapper">
                    <select className="amountSelect">
                        <option value="0.001">0.001</option>
                        <option value="0.01">0.01</option>
                        <option value="0.1">0.1</option>
                        <option value="1">1</option>
                    </select>
                </div>

            </div>


            <div className="bookColumnLabels">
                <span>Price</span>
                <span>Amount</span>
            </div>


            <div className="bookColumnLabels subLabel mt-1">
                <p className="currentPriceUsd">(USDT)</p>
                <p className="currentPriceUsd">(BTC)</p>
            </div>
            {(orderBookType === "all" || orderBookType === "sell") &&
                sellOrders.map((row, i) => (
                    <div
                        key={`sell-${i}`}
                        className="bookRow"
                        style={{
                            background: `linear-gradient(
          to left,
          rgba(246,70,93,.18) 0%,
          rgba(246,70,93,.18) ${row.width}%,
          transparent ${row.width}%,
          transparent 100%
        )`,
                        }}
                    >
                        <span className="priceRed">{row.price}</span>
                        <span className="amountText">{row.amount}</span>
                    </div>
                ))}
            {orderBookType === "all" && (
                <>
                    <div className="currentPriceRow">
                        <span className="currentPrice">
                            1.578516518 ▲
                        </span>
                    </div>

                    <div className="currentPriceUsd">
                        $1.57
                    </div>
                </>
            )}

            {(orderBookType === "all" || orderBookType === "buy") &&
                buyOrders.map((row, i) => (
                    <div
                        key={`buy-${i}`}
                        className="bookRow"
                        style={{
                            background: `linear-gradient(
          to left,
          rgba(14,203,129,.18) 0%,
          rgba(14,203,129,.18) ${row.width}%,
          transparent ${row.width}%,
          transparent 100%
)`,
                        }}
                    >
                        <span className="priceGreen">{row.price}</span>
                        <span className="priceGreen">{row.amount}</span>
                    </div>
                ))}

        </div>
    );
}