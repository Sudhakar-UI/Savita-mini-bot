"use client";
import { Image, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { WalletIcon, ShareIcon } from "../components/Icons";
import { useTheme } from "../context/ThemeContext";

const addtoken = () => {

    const { isNightMode } = useTheme();

    return (
        <>
            <div className='deposit-qr-page'>
                <Container>
                    <h2 className="sub-head txt-gry text-center">Deposit QR</h2>


                    <div className="deposit-qr mt-3">

                        {isNightMode ? (
                            <Image src="assets/images/qr-code-img2.png" className="qr-img" alt="icon" width={100} height={100} />
                        ) : (
                            <Image src="assets/images/qr-code-img2.png" className="qr-img" alt="icon" width={100} height={100} />
                        )}

                        <div className="mindept mt-3">
                            <p>Send only <Image
                                src="/assets/images/color/usdt.svg"
                                width={35}
                                height={25}
                                alt=""
                                className="dept-qr-img me-1"
                            />
                                USDT via <Image
                                    src="/assets/images/color/eth.svg"
                                    width={35}
                                    height={25}
                                    alt=""
                                    className="dept-qr-img me-1"
                                />
                                ETH to this
                                address, otherwise coins will be lost.</p>
                        </div>
                        <div className="mindept">
                            <p className="text-center">Min deposit: 1 USDT</p>
                        </div>
                        <div className="mt-3 d-flex align-items-center justify-content-center share-row gap-1">
                            <ShareIcon size={16} color={isNightMode ? "#44A3DD" : "#FF3C00"} />
                            <p
                                className="txt-clor mb-0"
                                style={{ whiteSpace: "nowrap" }}
                            >
                                Share this address
                            </p>
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="mb-1 mt-4">
                            <p>USDT (ETH) <span className="txt-clor">• Deposit Address 1 ↗ </span></p>
                        </div>
                        <div className="add-key mb-2">
                            <p>UQBEv0Z9tVXHoVFMyEq4WTtTjEQ_w
                                ydV6HOgqYPXzWr6MuK7 <FontAwesomeIcon icon={faCopy} className="ms-2 add-key-cpy" /></p>
                        </div>

                        {/* <FontAwesomeIcon icon={faWallet} className="me-2 add-key-wlt" /> */}

                        {/* <div className="d-flex align-items-center justify-content-center">
                            <Link href="/" className="btn sitebtn d-flex align-items-center justify-content-center gap-2 mt-2">
                                <WalletIcon size={16} />
                                Deposit from ETH Wallet
                            </Link>
                        </div> */}
                    </div>
                </Container>
            </div>
        </>
    )
}

export default addtoken