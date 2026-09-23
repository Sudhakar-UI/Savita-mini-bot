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
            <div className='widthdraw-confirmation-page'>
                <Container>
                    <div className="mt-3">
                        <h6 className="sub-head txt-gry">Withdrwal Confirmation</h6>
                        <div className="table-card">
                            <div className="table-row">
                                <div className="fee-limit-left">
                                    Total Amount
                                </div>
                                <div className="fee-limit-right">
                                    <span><Image
                                        src="/assets/images/color/eth.svg"
                                        width={35}
                                        height={25}
                                        alt=""
                                        className="dept-qr-img me-1"
                                    />0.05 ETH</span>
                                    <span><Image
                                        src="/assets/images/usa-icon.svg"
                                        width={35}
                                        height={25}
                                        alt=""
                                        className="dept-qr-img me-1"
                                    />103.02 USD</span>
                                </div>
                            </div>
                            <div className="fee-limit-divider"></div>
                            <div className="table-row">
                                <div className="fee-limit-left">
                                    Fee
                                </div>
                                <div className="fee-limit-right">
                                    <span><Image
                                        src="/assets/images/color/eth.svg"
                                        width={35}
                                        height={25}
                                        alt=""
                                        className="dept-qr-img me-1"
                                    />0.0005 ETH</span>
                                    <span><Image
                                        src="/assets/images/usa-icon.svg"
                                        width={35}
                                        height={25}
                                        alt=""
                                        className="dept-qr-img me-1"
                                    />10.3 USD</span>
                                </div>
                            </div>
                            <div className="fee-limit-divider"></div>
                            <div className="table-row">
                                <div className="fee-limit-left">
                                    Sending
                                </div>
                                <div className="fee-limit-right">
                                    <span><Image
                                        src="/assets/images/color/eth.svg"
                                        width={35}
                                        height={25}
                                        alt=""
                                        className="dept-qr-img me-1"
                                    />0.045 ETH</span>
                                    <span><Image
                                        src="/assets/images/usa-icon.svg"
                                        width={35}
                                        height={25}
                                        alt=""
                                        className="dept-qr-img me-1"
                                    />92.72 USD</span>
                                </div>
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
                                    />Ethereum sepolia (ERC20)</span>

                                </div>
                            </div>

                            <div className="fee-limit-divider"></div>
                            <div className="table-row">
                                <div className="fee-limit-left">
                                    To
                                </div>
                                <div className="fee-limit-right">
                                    <span>0xFDE30xFDE30xFDE30xFDE0xFDE30xFDE30xFDE30xFDE0xFDE30xFDE30xFDE30xFDE0xFDE30xFDE30xFDE30xFDE</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="mt-3">
                        <Link href="/">
                            <Button className="sitebtn ">Confirm</Button>
                        </Link>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default addtoken