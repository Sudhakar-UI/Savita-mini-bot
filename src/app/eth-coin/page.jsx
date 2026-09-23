"use client";
import {
    Image, Container
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight, faCheck, faEye
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import EthChart from "./EthChart";
import { RecieveIcon, SendIcon, SwapIcon } from "../components/Icons";
import Userfooter from "../components/Userfooter";

const addtoken = () => {

    return (
        <>
            <div className='eth-coin-page'>
                <Container>
                    <div className="d-flex justify-content-center align-items-center">
                        <Image src="assets/images/color/eth.svg" className="balance-coin-icons" alt="icon" width={100} height={100} />
                    </div>
                    <div className="me-3 text-center">
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
                        <Link href="#0" className="d-flex flex-column align-items-center main-links">
                            <div className="trsicon">
                                <SwapIcon size={20} />
                            </div>
                            <span className="txt-clor">Swap</span>
                        </Link>
                    </div>

                    <div className="mt-4">
                        <EthChart />
                    </div>
                </Container>
                <Userfooter />
            </div>
        </>
    )
}

export default addtoken