"use client";
import { Image, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { DiscountIcon2 } from "../components/Icons";

const addtoken = () => {

    return (
        <>
            <div className='address-book-page'>
                <Container>
                    <div className="eth-icon-img">
                        <DiscountIcon2 size={65} color="#fff" />
                    </div>
                    <div className="me-3 text-center">
                        <p className="witdrww">Fees and Limits</p>
                    </div>
                    <div className="text-center mt-2">
                        <p><span className="txt-gry">Choose Cryptocurrency</span></p>
                    </div>
                    <Link href="/" className="set-bot-y mt-2">
                        <div className="d-flex align-items-center">
                            <Image src="/assets/images/color/btc.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
                            <div className="d-flex flex-column">
                                <span className="sub-head">Bitcoin</span>
                                <p>BTC</p>
                            </div>
                        </div>
                        <FontAwesomeIcon icon={faChevronRight} className="facheriticon txt-gry" />
                    </Link>

                    <Link href="/fees-limits-eth" className="set-bot-y mt-2">
                        <div className="d-flex align-items-center">
                            <Image src="/assets/images/color/eth.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
                            <div className="d-flex flex-column">
                                <span className="sub-head">Ethereum</span>
                                <p>USDT, ETH, USDC</p>
                            </div>
                        </div>
                        <FontAwesomeIcon icon={faChevronRight} className="facheriticon txt-gry" />
                    </Link>

                    <Link href="/" className="set-bot-y mt-2">
                        <div className="d-flex align-items-center">
                            <Image src="/assets/images/color/ltc.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
                            <div className="d-flex flex-column">
                                <span className="sub-head">Litecoin</span>
                                <p>LTC</p>
                            </div>
                        </div>
                        <FontAwesomeIcon icon={faChevronRight} className="facheriticon txt-gry" />
                    </Link>

                    <Link href="/" className="set-bot-y mt-2">
                        <div className="d-flex align-items-center">
                            <Image src="/assets/images/color/avax.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
                            <div className="d-flex flex-column">
                                <span className="sub-head">Tron</span>
                                <p>USDT, TRX</p>
                            </div>
                        </div>
                        <FontAwesomeIcon icon={faChevronRight} className="facheriticon txt-gry" />
                    </Link>

                    <Link href="/" className="set-bot-y mt-2">
                        <div className="d-flex align-items-center">
                            <Image src="/assets/images/color/sol.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
                            <div className="d-flex flex-column">
                                <span className="sub-head">Solana</span>
                                <p>USDT, SOL, USDC</p>
                            </div>
                        </div>
                        <FontAwesomeIcon icon={faChevronRight} className="facheriticon txt-gry" />
                    </Link>

                    <Link href="/" className="set-bot-y mt-2">
                        <div className="d-flex align-items-center">
                            <Image src="/assets/images/color/ton.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
                            <div className="d-flex flex-column">
                                <span className="sub-head">Toncoin</span>
                                <p>USDT, TON, GRAM</p>
                            </div>
                        </div>
                        <FontAwesomeIcon icon={faChevronRight} className="facheriticon txt-gry" />
                    </Link>

                    <Link href="/fees-limits-network" className="set-bot-y mt-2" >
                        <div className="d-flex align-items-center">
                            <Image src="/assets/images/color/usdt.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
                            <div className="d-flex flex-column">
                                <span className="sub-head">USDT</span>
                                <p>USDT</p>
                            </div>
                        </div>
                        <FontAwesomeIcon icon={faChevronRight} className="facheriticon txt-gry" />
                    </Link>
                </Container>
            </div>
        </>
    )
}

export default addtoken