"use client";
import { useState, useEffect } from "react";
import { Image, Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCheck, faTimes, faIdCard } from "@fortawesome/free-solid-svg-icons";
import { PhoneIcon, AccountIcon, WalletIcon, LockIcon, BadgeCheck } from '../components/Icons'
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";

const addtoken = () => {
    const { isNightMode } = useTheme();
    const [showModal, setShowModal] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleOpenDrawer = () => setOpenDrawer(true);
    const handleCloseDrawer = () => setOpenDrawer(false);

    const [setupProgress, setSetupProgress] = useState(0);

    useEffect(() => {
        const duration = 1500;
        const steps = 70;
        const intervalTime = duration / steps;

        const interval = setInterval(() => {
            setSetupProgress((prev) => {
                if (prev >= 70) {
                    clearInterval(interval);
                    return 70;
                }

                return prev + 1;
            });
        }, intervalTime);

        return () => clearInterval(interval);
    }, []);


    return (
        <>
            <div className='setup-account-page'>
                <Container>
                    <div className="fxp-profile">
                        <div
                            className="fxp-progress"
                            style={{
                                "--setup-progress": `${setupProgress}%`,
                            }}
                        >
                            <div className="fxp-inner">
                                <Image
                                    src="/assets/images/user-profile-big.svg"
                                    width={100}
                                    height={100}
                                    alt="profile"
                                    className=""
                                />
                            </div>

                            <span className="fxp-badge">{setupProgress}%</span>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <h4 className="mt-3 heading mb-0">Set Up Your Account</h4>
                        <h5 className="txt-clor">3 steps left</h5>
                        <p>It will take less than 2 minutes.</p>
                    </div>
                    <div className="mt-4">
                        <span className="sub-head txt-gry">Wallet Setup</span>
                    </div>

                    <div className="wall-set-container">

                        {/* Step 1 */}
                        <div className="wall-set-item active">
                            <div className="wall-set-icon-container">
                                <div className="wall-set-icon">
                                    <FontAwesomeIcon icon={faIdCard} />
                                </div>
                                <div className="wall-set-line"></div>
                            </div>
                            <div className="wall-set-content">
                                <h3 className="wall-set-title">KYC Verification</h3>
                                {/* <FontAwesomeIcon icon={faCheck} /> */}

                                <Link href="/verification" ><FontAwesomeIcon icon={faChevronRight} /></Link>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="wall-set-item" onClick={() => handleOpenDrawer(true)}>
                            <div className="wall-set-icon-container">
                                <div className="wall-set-icon">
                                    <PhoneIcon size={22} color='#fff' />
                                </div>
                                <div className="wall-set-line"></div>
                            </div>
                            <Link href="#0" className="wall-set-content">
                                <h3 className="wall-set-title">Share Phone Number</h3>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </Link>
                        </div>

                        {/* Step 3 */}
                        <div className="wall-set-item pending">
                            <div className="wall-set-icon-container">
                                <div className="wall-set-icon">
                                    <AccountIcon size={22} color='#fff' />
                                </div>
                            </div>
                            <Link href="/profile" className="wall-set-content">
                                <h3 className="wall-set-title">Add Personal Data</h3>
                                <FontAwesomeIcon icon={faChevronRight} />

                            </Link>

                        </div>
                    </div>

                    <div className="mt-1">
                        <span className="sub-head txt-gry">Account Security</span>
                    </div>
                    <Link href="/mpin" className="set-acc-link mt-3">
                        <div>
                            <div>
                                <LockIcon size={24} color="#fff" />
                            </div>
                            <h6 className="subhead mb-0">MPIN</h6>
                        </div>
                        <FontAwesomeIcon icon={faCheck} className="setuppasscde" />
                    </Link>
                </Container>
            </div>

            <div className={`phone-draw-overlay ${openDrawer ? 'open' : ''}`} onClick={handleCloseDrawer}></div>
            <div className={`phone-draw ${openDrawer ? 'open' : ''}`}>
                <div className="phone-draw-handle"></div>
                <div className="text-center">
                    <div className="phone-draw-close">
                        <Button onClick={handleCloseDrawer} className="phone-draw-close-btn">
                            <FontAwesomeIcon icon={faTimes} />
                        </Button>
                    </div>
                    <Image src={isNightMode ? "/assets/images/mobile-icon-dark.gif" : "/assets/images/mobile-icon.gif"} alt="user" className="mobile-iconing" />
                    <h2 className="heading">Share phone number</h2>
                    <h2 className="sub-head">Share your phone number in telegram</h2>
                </div>

                <Link href="/account-passcode">
                    <Button className="sitebtn">Continue</Button>
                </Link>
            </div>

        </>
    )
}

export default addtoken