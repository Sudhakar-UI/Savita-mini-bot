"use client";
import { useState, useRef } from "react";
import { Image, Container, Form, InputGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faSearch, faTimes, faCopy } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const addtoken = () => {
    const drawRef = useRef(null);

    const [openDrawer, setOpenDrawer] = useState(false);
    const handleOpenDrawer = () => setOpenDrawer(true);
    const handleCloseDrawer = () => setOpenDrawer(false);

    return (
        <>
            <div className='deposit-currency-page'>
                <Container ref={drawRef}>
                    <h2 className="sub-head txt-gry">Deposit Cryptocurrency</h2>
                    <div className="supportsearch">
                        <Form className="siteformbg">
                            <Form.Group className="form-group mb-0">
                                <InputGroup>
                                    <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                                    <Form.Control placeholder="Search Coin" />
                                </InputGroup>
                            </Form.Group>
                        </Form>
                    </div>


                    <SimpleBar key="tradehistory" className="table-responsive sitescroll">
                        <div
                            className="sitetable table-responsive-stack"
                            id="tradehistory-table"
                            data-history-type="tradehistory"
                        ></div>

                        <Link href="/" className="set-bot-y">
                            <div className="d-flex align-items-center">
                                <Image src="/assets/images/color/btc.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
                                <div className="d-flex flex-column">
                                    <span className="sub-head">Bitcoin</span>
                                    <p>BTC</p>
                                </div>
                            </div>
                            <FontAwesomeIcon icon={faChevronRight} className="facheriticon txt-gry" />
                        </Link>

                        <Link href="/" className="set-bot-y mt-2">
                            <div className="d-flex align-items-center">
                                <Image src="/assets/images/color/eth.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
                                <div className="d-flex flex-column">
                                    <span className="sub-head">Ethereum</span>
                                    <p>ETH</p>
                                </div>
                            </div>
                            <FontAwesomeIcon icon={faChevronRight} className="facheriticon txt-gry" />
                        </Link>

                        <Link href="/" className="set-bot-y mt-2">
                            <div className="d-flex align-items-center">
                                <Image src="/assets/images/color/ltc.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
                                <div className="d-flex flex-column">
                                    <span className="sub-head">Litecoin</span>
                                    <p>LTC</p>
                                </div>
                            </div>
                            <FontAwesomeIcon icon={faChevronRight} className="facheriticon txt-gry" />
                        </Link>

                        <Link href="/" className="set-bot-y mt-2">
                            <div className="d-flex align-items-center">
                                <Image src="/assets/images/color/avax.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
                                <div className="d-flex flex-column">
                                    <span className="sub-head">Tron</span>
                                    <p>TRX</p>
                                </div>
                            </div>
                            <FontAwesomeIcon icon={faChevronRight} className="facheriticon txt-gry" />
                        </Link>

                        <Link href="/" className="set-bot-y mt-2">
                            <div className="d-flex align-items-center">
                                <Image src="/assets/images/color/sol.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
                                <div className="d-flex flex-column">
                                    <span className="sub-head">Solana</span>
                                    <p>SOL</p>
                                </div>
                            </div>
                            <FontAwesomeIcon icon={faChevronRight} className="facheriticon txt-gry" />
                        </Link>

                        <Link href="/" className="set-bot-y mt-2">
                            <div className="d-flex align-items-center">
                                <Image src="/assets/images/color/ton.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
                                <div className="d-flex flex-column">
                                    <span className="sub-head">Toncoin</span>
                                    <p>TON</p>
                                </div>
                            </div>
                            <FontAwesomeIcon icon={faChevronRight} className="facheriticon txt-gry" />
                        </Link>
                        <Link href="/ngndeposit" className="set-bot-y mt-2">
                            <div className="d-flex align-items-center">
                                <Image src="/assets/images/color/ton.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
                                <div className="d-flex flex-column">
                                    <span className="sub-head">NGN</span>
                                    <p>NGN</p>
                                </div>
                            </div>
                            <FontAwesomeIcon icon={faChevronRight} className="facheriticon txt-gry" />
                        </Link>
                        <Link href="/deposit-network" className="set-bot-y mt-2" onClick={handleOpenDrawer}>
                            <div className="d-flex align-items-center">
                                <Image src="/assets/images/color/usdt.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
                                <div className="d-flex flex-column">
                                    <span className="sub-head">USDT</span>
                                    <p>USDT</p>
                                </div>
                            </div>
                            <FontAwesomeIcon icon={faChevronRight} className="facheriticon txt-gry" />
                        </Link>
                    </SimpleBar>
                </Container>
            </div>

            {/* <div className={`phone-draw-overlay ${openDrawer ? 'open' : ''}`} onClick={handleCloseDrawer}></div>
            <div className={`phone-draw ${openDrawer ? 'open' : ''}`}>
                <div className="phone-draw-handle"></div>
                <div className="text-center">
                    <div className="phone-draw-close">
                        <Button onClick={handleCloseDrawer} className="phone-draw-close-btn">
                            <FontAwesomeIcon icon={faTimes} />
                        </Button>
                    </div>

                    <h2 className="heading">USDT Deposit</h2>
                    <Form className="siteformbg  mt-2">
                        <Form.Group className="form-group  d-flex align-items-start flex-column mb-0">
                            <Form.Label className="">Network Selection <span className="required-star">*</span></Form.Label>
                            <Form.Select className="hisfilter-input ">

                                <option>BEP20</option>
                                <option>TRC20</option>
                                <option>ERC20</option>
                            </Form.Select>
                            <p>Deposit USDT on the ERC20 network to make the proper deposit in balance</p>
                        </Form.Group>
                        <Form.Group className="form-group mt-1 d-flex align-items-start flex-column">
                            <Form.Label>
                                USDT Wallet Address ( Acceptable Network : ERC20 )
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

                <Link href="#0">
                    <Button className="sitebtn mt-2 ">Submit</Button>
                </Link>
            </div> */}



        </>
    )
}

export default addtoken