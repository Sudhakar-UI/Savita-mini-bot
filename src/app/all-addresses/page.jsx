"use client";
import { Image, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faEdit, faTrash, faPen, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const addtoken = () => {

    return (
        <>
            <div className='all-addresses-page'>
                <Container>
                    <span className="sub-head txt-gry">TON addresses</span>
                    {/* <span className="sub-head txt-gry">Today</span>
                    <Link href="/" className="set-bot-y mt-2">
                        <div className="d-flex align-items-center">
                            <div className="coin-stack">
                                <Image
                                    src="/assets/images/color/eth.svg"
                                    width={40}
                                    height={40}
                                    alt="BTC"
                                    className="coin coin-btc"
                                />
                                <Image
                                    src="/assets/images/color/btc.svg"
                                    width={40}
                                    height={40}
                                    alt="ETH"
                                    className="coin coin-eth"
                                />
                            </div>
                            <div className="d-flex flex-column">
                                <span className="sub-head">Exchange Trx to USDT</span>
                                <p className="txt-gry">11 Apr 11.10</p>
                            </div>
                        </div>

                        <div className="d-flex flex-column justify-content-end align-items-end">
                            <p className="t-green">+10 USDT</p>
                            <p>-100 TRX</p>
                        </div>
                    </Link> */}



                    <Link href="/" className="set-bot-y mt-2">
                        <div className="d-flex align-items-center">
                            <Image
                                src="/assets/images/color/btc.svg"
                                width={100}
                                height={100}
                                alt=""
                                className="loc-cury-icon me-3"
                            />
                            <div className="d-flex flex-column">
                                <span className="sub-head">Bitcoin</span>
                                <p className="txt-gry">BTC</p>
                            </div>
                        </div>

                        <div className="d-flex flex-column justify-content-end align-items-end">
                            <FontAwesomeIcon
                                icon={faArrowUp}
                                className="all-addresses-incomingicon"
                            />
                            <p>0x6A968....a0F44</p>
                        </div>
                    </Link>

                    <Link href="/" className="set-bot-y mt-2">
                        <div className="d-flex align-items-center">
                            <Image
                                src="/assets/images/color/eth.svg"
                                width={100}
                                height={100}
                                alt=""
                                className="loc-cury-icon me-3"
                            />
                            <div className="d-flex flex-column">
                                <span className="sub-head">Ethereum</span>
                                <p className="txt-gry">ETH</p>
                            </div>
                        </div>

                        <div className="d-flex flex-column justify-content-end align-items-end">
                            <FontAwesomeIcon
                                icon={faArrowUp}
                                className="all-addresses-outgoingicon"
                            />
                            <p>0x6A968....a0F44</p>
                        </div>
                    </Link>
                </Container>
            </div>
        </>
    )
}

export default addtoken