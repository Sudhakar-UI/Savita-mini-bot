"use client";
import React, { useState, useRef, useEffect } from 'react'
import { Image, Container, Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCopy, faTimes } from "@fortawesome/free-solid-svg-icons";
import RangeSlider from "./RangeSlider";

import { AccountIcon, CautionIcon, PhoneIcon, AccountCircleIcon } from '../components/Icons'


const COINS = [
    { value: "btc", symbol: "BTC", icon: "/assets/images/color/btc.svg" },
    { value: "eth", symbol: "ETH", icon: "/assets/images/color/eth.svg" },
    { value: "ton", symbol: "TON", icon: "/assets/images/color/ton.svg" },
    { value: "usdc", symbol: "USDC", icon: "/assets/images/color/usdc.svg" },
];

const addtoken = () => {
    const [showPhoneModal, setShowPhoneModal] = useState(false);
    const [selectedCoin, setSelectedCoin] = useState("btc");
    const pageRef = useRef(null);

    const handlePhoneModalClose = () => setShowPhoneModal(false);
    const handlePhoneModalShow = () => setShowPhoneModal(true);

    const drawRef = useRef(null);

    const [openDrawer, setOpenDrawer] = useState(false);
    const handleOpenDrawer = () => setOpenDrawer(true);
    const handleCloseDrawer = () => setOpenDrawer(false);

    const [opensuccessDrawer, setSuccessOpenDrawer] = useState(false);
    const handleSuccessOpenDrawer = () => setSuccessOpenDrawer(true);
    const handleSuccessCloseDrawer = () => setSuccessOpenDrawer(false);


    const [opensubmitDrawer, setopensubmitDrawer] = useState(false);
    const handleopensubmitDrawerOpenDrawer = () => setopensubmitDrawer(true);
    const handleopensubmitDrawerCloseDrawer = () => setopensubmitDrawer(false);

    const [openpinDrawer, setopenpinDrawer] = useState(false);
    const handleopenpinDrawerOpenDrawer = () => setopenpinDrawer(true);
    const handleopenpinDrawerCloseDrawer = () => setopenpinDrawer(false);


    const [code, setCode] = useState(["", "", "", ""]);

    const handleConfirmWithdraw = () => {
        handleopensubmitDrawerCloseDrawer();
        handleOpenDrawer();
    };

    const handleOtpSubmit = () => {
        handleCloseDrawer();
        handleopenpinDrawerOpenDrawer();
    };

    const handlePinSubmit = () => {
        handleopenpinDrawerCloseDrawer();
        handleSuccessOpenDrawer();
    };

    const handleClick = (num) => {
        const newCode = [...code];
        const index = newCode.findIndex((c) => c === "");
        if (index !== -1) {
            newCode[index] = num;
            setCode(newCode);
        }
    }

    const handleDelete = () => {
        const newCode = [...code];
        const index = newCode.findLastIndex((c) => c !== "");
        if (index !== -1) {
            newCode[index] = "";
            setCode(newCode);
        }
    };
    useEffect(() => {
        const handleKeyDown = (e) => {
            // Allow only numbers
            if (/^[0-9]$/.test(e.key)) {
                handleClick(Number(e.key));
            }

            // Handle backspace
            if (e.key === "Backspace") {
                handleDelete();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [code]);


    return (

        <>
            <div className='withdraw-page'>
                <Container ref={drawRef}>
                    <h2 className="sub-head txt-gry">withdraw </h2>


                    <div className="">

                        {/* Step 1 */}
                        <div className="setup-step-item active">

                            <div className="setup-step-content">
                                <Form className="siteformbg">
                                    <Form.Group className="form-group mt-1">
                                        <Form.Label>
                                            Select Crypto/Currency
                                        </Form.Label>
                                        <div className="withdraw-coin-select">
                                            <Image
                                                src={COINS.find((coin) => coin.value === selectedCoin).icon}
                                                alt={selectedCoin}
                                                width={24}
                                                height={24}
                                                className="withdraw-coin-icon"
                                            />
                                            <Form.Select
                                                className="form-control"
                                                value={selectedCoin}
                                                onChange={(event) => {
                                                    const value = event.target.value;

                                                    setSelectedCoin(value);

                                                  
                                                }}
                                            >
                                                {COINS.map((coin) => (
                                                    <option key={coin.value} value={coin.value}>
                                                        {coin.symbol}
                                                    </option>
                                                ))}
                                            </Form.Select>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="form-group mt-2">
                                        <Form.Group className="mb-2 mx-4">
                                            <Form.Check
                                                type="checkbox"
                                                id="confirm-checkbox"
                                                label="Do You want To Withdraw your USDT in NGN ?"
                                            />
                                        </Form.Group>

                                    </Form.Group>
                                    <Form.Group className="form-group mt-2 ">
                                        <Form.Label>
                                            Select Bank Name
                                        </Form.Label>
                                        <Form.Select
                                            className="form-control"
                                        >
                                            <option value="spothistory">Select Bank</option>
                                            <option value="derivativehistory">Bank 1</option>
                                            <option value="swaphistory">Bank 2</option>

                                        </Form.Select>

                                    </Form.Group>
                                    <Form.Group className="form-group mt-2 ">
                                        <Form.Label>
                                            Account No
                                        </Form.Label>
                                        <Form.Control type="text" />

                                    </Form.Group>
                                </Form>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="setup-step-item pending">

                            <div className="setup-step-content">
                                <Form className="siteformbg">
                                    <Form.Group className="form-group mt-1">
                                        <Form.Label>
                                            Select Network Type
                                        </Form.Label>
                                        <Form.Select
                                            className="form-control"

                                        >
                                            <option value="spothistory">Select Network</option>
                                            <option value="derivativehistory">Bitcoin Network</option>

                                        </Form.Select>
                                    </Form.Group>
                                    {/* <Form.Group className="form-group mt-1 d-flex align-items-start flex-column">
                                        <Form.Label>
                                            Select Bank Name
                                        </Form.Label>
                                        <Form.Select
                                            className="form-control"
                                        >
                                            <option value="spothistory">Select Bank</option>
                                            <option value="derivativehistory">Bank 1</option>
                                            <option value="swaphistory">Bank 2</option>

                                        </Form.Select>

                                    </Form.Group>
                                    <Form.Group className="form-group mt-3 d-flex align-items-start flex-column">
                                        <Form.Label>
                                            Account No
                                        </Form.Label>
                                        <Form.Control type="text" />

                                    </Form.Group> */}
                                </Form>
                            </div>
                        </div>


                        <div className="setup-step-item pending">

                            <div className="setup-step-content">
                                <Form className="siteformbg">
                                    <Form.Group className="form-group mt-1">
                                        <Form.Label>
                                            Wallet Address
                                        </Form.Label>
                                        <InputGroup className="withdraw-input align-items-center gap-2">
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter withdraw amount"
                                            />

                                            <span className="copy-icon">
                                                <FontAwesomeIcon icon={faCopy} />
                                            </span>
                                        </InputGroup>
                                    </Form.Group>
                                </Form>

                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="setup-step-item pending">

                            <div className="setup-step-content">
                                <Form className="siteformbg">
                                    <Form.Group className="form-group mt-1">
                                        <div className=' d-flex align-content-center justify-content-between my-2'>
                                            <Form.Label>
                                                Wallet Amount
                                            </Form.Label>
                                            <span className='max-span'>
                                                Max
                                            </span>
                                            {/* <p className='max-span-text'>
                                                0000000
                                            </p> */}
                                        </div>
                                        <InputGroup className="withdraw-input">
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter withdraw amount"
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                </Form>
                            </div>
                        </div>

                    </div>
                    <RangeSlider />


                    <div className="setup-acc-info mt-3">
                        <div>
                            <h6 className='setup-acc-head'>Minimum withdraw</h6>
                            <p className=''>0.789 900 00 BTC</p>
                        </div>
                        <div>
                            <h6 className='setup-acc-head'>Maximum Withdraw</h6>
                            <p className=''>0.0 BTC (0) %</p>
                        </div>
                        <div>
                            <h6 className='setup-acc-head'>Total Withdraw</h6>
                            <p className=''>0.0 BTC</p>
                        </div>
                        <div>
                            <h6 className='setup-acc-head'>Withdraw Fee</h6>
                            <p className=''>0.0 BTC</p>
                        </div>
                        {/* <Link href="#0">
                                <FontAwesomeIcon icon={faChevronRight} />
                            </Link> */}
                    </div>

                    <Button className="setup-acc-btn mt-4" onClick={handleopensubmitDrawerOpenDrawer}>Submit</Button>

                </Container>
            </div>


            <div className={`phone-draw-overlay ${opensubmitDrawer ? 'open' : ''}`} onClick={handleopensubmitDrawerCloseDrawer}></div>
            <div className={`phone-draw ${opensubmitDrawer ? 'open' : ''}`}>
                <div className="phone-draw-handle"></div>
                <div className="text-center">
                    <div className="phone-draw-close">
                        <Button onClick={handleopensubmitDrawerCloseDrawer} className="phone-draw-close-btn">
                            <FontAwesomeIcon icon={faTimes} />
                        </Button>
                    </div>

                    <h2 className="heading">Confirm Withdraw</h2>
                    <div className="setup-acc-info flex-need mt-3">
                        <div>
                            <h6 className='setup-acc-head'>Minimum withdraw</h6>
                            <p className=''>0.789 900 00 BTC</p>
                        </div>
                        <div>
                            <h6 className='setup-acc-head'>Maximum Withdraw</h6>
                            <p className=''>0.0 BTC (0) %</p>
                        </div>
                        <div>
                            <h6 className='setup-acc-head'>Total Withdraw</h6>
                            <p className=''>0.0 BTC</p>
                        </div>
                        <div>
                            <h6 className='setup-acc-head'>Withdraw Fee</h6>
                            <p className=''>0.0 BTC</p>
                        </div>

                    </div>

                </div>

                <Button className="sitebtn mt-2" onClick={handleConfirmWithdraw}>Submit</Button>
            </div>


            <div className={`phone-draw-overlay ${openpinDrawer ? 'open' : ''}`} onClick={handleopenpinDrawerCloseDrawer}></div>
            <div className={`phone-draw ${openpinDrawer ? 'open' : ''}`}>
                <div className="phone-draw-handle"></div>
                <div className="text-center">
                    <div className="phone-draw-close">
                        <Button onClick={handleopenpinDrawerCloseDrawer} className="phone-draw-close-btn">
                            <FontAwesomeIcon icon={faTimes} />
                        </Button>
                    </div>

                    <h2 className="heading"> Enter Pin</h2>
                    <div className="passcode-container">
                        <div className="code-boxes mt-4">
                            {code.map((digit, i) => (
                                <div key={i} className="box">
                                    {digit}
                                </div>
                            ))}
                        </div>


                    </div>

                </div>

                <Button className="sitebtn mt-2" onClick={handlePinSubmit}>Submit</Button>
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

                    <h2 className="heading">Enter OTP</h2>
                    <Form className="siteformbg  mt-2">

                        <Form.Group className="form-group mt-3 d-flex align-items-start flex-column">
                            <Form.Label>
                                Enter  OTP
                            </Form.Label>
                            <Form.Control type="text" />

                        </Form.Group>

                    </Form>

                </div>

                <Button className="sitebtn mt-2" onClick={handleOtpSubmit}>Submit</Button>
            </div>


            <div className={`phone-draw-overlay ${opensuccessDrawer ? 'open' : ''}`} onClick={handleSuccessCloseDrawer}></div>
            <div className={`phone-draw ${opensuccessDrawer ? 'open' : ''}`}>
                <div className="phone-draw-handle"></div>
                <div className="text-center">
                    <div className="phone-draw-close">
                        <Button onClick={handleSuccessCloseDrawer} className="phone-draw-close-btn">
                            <FontAwesomeIcon icon={faTimes} />
                        </Button>
                    </div>

                    <h2 className="heading">Success</h2>
                    <p className="mt-3">Your withdrawal request was submitted successfully.</p>

                </div>

                <Button className="sitebtn mt-2" onClick={handleSuccessCloseDrawer}>Done</Button>
            </div>



        </>
    )
}

export default addtoken