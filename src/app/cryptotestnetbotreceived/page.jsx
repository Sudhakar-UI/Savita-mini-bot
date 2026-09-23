"use client";
import {
    Image, Container, Button
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight, faCheck, faCopy
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const addtoken = () => {

    return (
        <>
            <div className='crypto-testnetbot-page'>
                <Container>
                    <div className="d-flex justify-content-center align-items-center">
                        <Image src="assets/images/color/eth.svg" className="balance-coin-icons" alt="icon" width={100} height={100} />
                    </div>
                    <div className="me-3 text-center">
                        <p className="txt-gry">Received a Deposit</p>
                    </div>
                    <div className="me-3 text-center">
                        <h2 className="heading t-green">-0.05 ETH</h2>
                    </div>
                    <div className="text-center mt-2">
                        <p><span className="txt-gry">$103.02
                        </span></p>
                    </div>
                    <div className="mt-3">
                        <h6 className="sub-head txt-gry">Transaction details</h6>
                        <div className="table-card">
                            <div className="table-row">
                                <div className="fee-limit-left">
                                    date
                                </div>
                                <div className="fee-limit-right">3 apr at 18.19</div>
                            </div>
                            <div className="fee-limit-divider"></div>
                            <div className="table-row">
                                <div className="fee-limit-left">
                                    Network
                                </div>
                                <div className="fee-limit-right">
                                    <span><Image
                                        src="/assets/images/color/eth.svg"
                                        width={35}
                                        height={25}
                                        alt=""
                                        className="dept-qr-img me-1"
                                    />Ethereum Balance</span>

                                </div>
                            </div>
                            <div className="fee-limit-divider"></div>

                            <div className="table-row">
                                <div className="fee-limit-left">
                                    Transaction
                                </div>
                                <div className="fee-limit-right">
                                    <span>0xFDE3....9cfbc</span>
                                    <FontAwesomeIcon
                                        icon={faCopy}
                                        className="facheriticon txt-gry"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="mt-3">
                        <Link href="/">
                            <Button className="sitebtn ">Back</Button>
                        </Link>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default addtoken