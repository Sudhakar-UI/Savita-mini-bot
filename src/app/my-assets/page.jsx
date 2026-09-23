"use client";
import { Image, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const addtoken = () => {

    return (
        <>
            <div className='address-book-page'>
                <Container>
                    <span className="sub-head txt-gry">Address book</span>
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

                    <Link href="/" className="set-bot-y mt-2">
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
                </Container>
            </div>
        </>
    )
}

export default addtoken