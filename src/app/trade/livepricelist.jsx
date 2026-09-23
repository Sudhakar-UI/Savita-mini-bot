import { Image } from 'react-bootstrap'
import Link from "next/link";
import ChevronDown from "./ChevronDown";

export default function LivepriceList({ selectedPair, isNightMode, view, setView }) {
    return (
        <div className="pairRow">

            <div className="pairLeft">
                <Link href="/tradehistory" className="pairLink">
                    <div className="coinIcons">
                        <Image
                            src={selectedPair.icon1}
                            width={26}
                            height={26}
                            alt="coin1"
                            className="coinicon coinicon-first"
                        />
                        <Image
                            src={selectedPair.icon2}
                            width={26}
                            height={26}
                            alt="coin2"
                            className="coinicon coinicon-second"
                        />
                    </div>

                    <span className="pairName">
                        {selectedPair.symbol}
                    </span>
                    <ChevronDown />
                </Link>
            </div>
            <button
                className="iconBtn"
                aria-label="Toggle chart view"
                onClick={() => setView(view === "trade" ? "chart" : "trade")}
            >
                <Image
                    src={isNightMode ? "/assets/images/candle-nigt.svg" : "/assets/images/candle.svg"}
                    className="coin-iconss"
                    alt="Toggle chart view"
                    width={20}
                    height={20}
                />
            </button>
        </div>
    );
}
