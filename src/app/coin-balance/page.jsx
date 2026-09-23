"use client";
import {
    Image, Container
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight, faCheck, faEye, faArrowUp
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import EthChart from "./EthChart";
import { RecieveIcon, SendIcon, SwapIcon } from "../components/Icons";
import { NoDataIcon } from "../components/Icons";

const coinbalance = () => {

    return (
        <>
            <div className='coin-balance-page'>
                <Container>
                    <div className="coin-wrapper d-flex justify-content-center align-items-center">
                        <Image
                            src="/assets/images/color/eth.svg"
                            width={50}
                            height={50}
                            alt="eth"
                            className="coiniconing"
                        />

                        <Image
                            src="/assets/images/eth-floatings.svg"
                            alt="floating icon"
                            className="coin-floating"
                        />
                    </div>
                    <div className="me-3 text-center mt-5">
                        <p className="witdrww">Your Ethereum Balance</p>
                    </div>
                    <div className="text-center mt-3">
                        <h2 className="heading d-flex align-items-center justify-content-center gap-2">
                            <span className="dollr">$</span>

                            <span className="amount">0</span>

                            <FontAwesomeIcon icon={faEye} className="dollr eye-icon-y" />
                        </h2>
                    </div>
                    <div className="text-center mt-2">
                        <p><span className="txt-gry">0 ETH</span></p>
                    </div>
                    <div className="d-flex justify-content-around mt-4">
                        <Link href="#0" className="d-flex flex-column align-items-center main-links">
                            <div className="trsicon">
                                <SendIcon size={20} />
                            </div>
                            <span className="txt-clor">Send</span>
                        </Link>
                        <Link href="#0" className="d-flex flex-column align-items-center main-links">
                            <div className="trsicon">
                                <RecieveIcon size={20} />
                            </div>
                            <span className="txt-clor">Receive</span>
                        </Link>
                        <Link href="/swap" className="d-flex flex-column align-items-center main-links">
                            <div className="trsicon">
                                <SwapIcon size={20} />
                            </div>
                            <span className="txt-clor">Swap</span>
                        </Link>
                    </div>

                    <div className="mt-4">
                        <EthChart />
                    </div>
                    {/* <h5 className="subhead txt-gry mt-3">4 April</h5>
                      <Link href="/" className="set-bot-y mt-3">
                        <div className="d-flex align-items-center gap-3">
                          <div className="trsicon">
                                <RecieveIcon size={20} />
                            </div>
                            <div className="d-flex flex-column">
                                <span className="sub-head">Deposit</span>
                                <p className="txt-gry">4 Apr 12.32</p>
                            </div>
                        </div>

                        <div className="d-flex flex-column justify-content-end align-items-end">
                             <p className="t-green">+100 TRX</p>
                            <p>$31.83</p>
                        </div>
                    </Link> */}
                    {/* <div className="all-transcns">
                        <div className="no-data-icon">
                            <NoDataIcon size={100} />
                        </div>
                        <p>No transactions yet.</p>
                    </div> */}
                </Container>
            </div>
        </>
    )
}

export default coinbalance