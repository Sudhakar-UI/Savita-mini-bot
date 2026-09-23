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
            <div className='fees-limits-eth-page'>
                <Container>
                    <div className="d-flex justify-content-center align-items-center">
                        <Image src="assets/images/fee-limit-eth.svg" className="balance-coin-icons" alt="icon" width={100} height={100} />
                    </div>
                    <div className="me-3 text-center">
                        <p className="witdrww">Ethereum</p>
                    </div>
                    <div className="text-center mt-2">
                        <p><span className="txt-gry">Fees and limits for USDT on BTC - ETH20
                        </span></p>
                    </div>
                    <div className="mt-3">
                        <h6 className="sub-head txt-gry">Fees</h6>
                        <div className="table-card">
                            <div className="table-row">
                                <div className="fee-limit-left">
                                    Withdrawal fee to addresses with USDT
                                </div>
                                <div className="fee-limit-right">5.5 ETH</div>
                            </div>
                            <div className="fee-limit-divider"></div>
                            <div className="table-row">
                                <div className="fee-limit-left">
                                    Withdrawal fee to addresses without USDT
                                </div>
                                <div className="fee-limit-right">8.5 ETH</div>
                            </div>
                        </div>
                        <h6 className="sub-head txt-gry mt-4">Limits</h6>
                        <div className="table-card">
                            <div className="table-row">
                                <div className="fee-limit-left">Deposits</div>
                                <div className="fee-limit-right">from 1 ETH</div>
                            </div>
                            <div className="fee-limit-divider"></div>
                            <div className="table-row">
                                <div className="fee-limit-left">Withdrawals</div>
                                <div className="fee-limit-right">from 1 ETH</div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default addtoken