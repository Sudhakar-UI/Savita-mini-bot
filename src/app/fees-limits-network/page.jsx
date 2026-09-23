"use client";
import {
    Image, Container
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight, faCheck
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const addtoken = () => {

    return (
        <>
            <div className='address-book-page'>
                <Container>
                    <div className="d-flex justify-content-center align-items-center">
                        <Image src="assets/images/color/eth.svg" className="balance-coin-icons" alt="icon" width={100} height={100} />
                    </div>
                    <div className="me-3 text-center">
                        <p className="witdrww">Ethereum</p>
                    </div>
                    <div className="text-center mt-2">
                        <p><span className="txt-gry">Choose network to view fees and limits for
                        </span></p>
                        <p><span className="txt-gry">
                            ETH</span></p>
                    </div>
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
                            <Image src="/assets/images/color/bnb.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
                            <div className="d-flex flex-column">
                                <span className="sub-head">BNB Smart Chain</span>
                                <p>BRP20</p>
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