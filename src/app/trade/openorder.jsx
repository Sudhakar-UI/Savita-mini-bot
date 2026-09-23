import React, { useState, useEffect } from "react";
import { Container, Form, Nav, Tab, InputGroup, Alert, Badge, Image, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faCircleCheck,
    faAngleDown, faAngleUp, faTimes
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/ThemeContext";
import Link from "next/link";


export default function OpenOrder({ bottomTab, setBottomTab, trades }) {
    const [openRow, setOpenRow] = useState(null);
    const { isNightMode } = useTheme();
    const [orderType, setOrderType] = useState("Market");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [tradeType, setTradeType] = useState("Buy");
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleOpenDrawer = () => setOpenDrawer(true);
    const handleCloseDrawer = () => setOpenDrawer(false);

    return (
        <Tab.Container
            activeKey={bottomTab}
            onSelect={(k) => setBottomTab(k)}
            defaultActiveKey="open">
            <>
                <Nav className="bottomTabs">
                    <Nav.Item>
                        <Nav.Link eventKey="open" className="bottomTab">
                            Open Orders
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link eventKey="history" className="bottomTab">
                            Order History
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link eventKey="trades" className="bottomTab">
                            Trades
                        </Nav.Link>
                    </Nav.Item>
                </Nav>

                <Tab.Content>
                    <Tab.Pane eventKey="open">
                        <>
                            <Tab.Container>
                                <Nav className="historys-tabs mt-3 mb-2">
                                    <Nav.Item>
                                        <Nav.Link eventKey="all">All</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="executed">Buy</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="partialexecuted">Sell</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="cancel" onClick={() => handleOpenDrawer(true)} className="canel-btn">Cancel All</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="all">
                                         <div className="tradeHistoryScroll">
                                        <div className="tradeHistoryCard">

                                            <div
                                                className="tradeHistoryHeader d-flex justify-content-between align-items-center"
                                                onClick={() =>
                                                    setOpenRow(openRow === "btc" ? null : "btc")
                                                }
                                            >

                                                <div className="tradeHistoryLeft">

                                                    <span className="tradeSell">
                                                        Sell
                                                    </span>

                                                    <span className="tradeDot">
                                                        •
                                                    </span>

                                                    <span>
                                                        Market
                                                    </span>

                                                    <span className="tradeDot">
                                                        •
                                                    </span>

                                                    <span>
                                                        100%
                                                    </span>

                                                </div>


                                                <div className="tradeHistoryRight">

                                                    <span className="tradeHistoryDate">
                                                        11 Apr 11:10
                                                    </span>

                                                    <FontAwesomeIcon
                                                        icon={
                                                            openRow === "btc"
                                                                ? faAngleUp
                                                                : faAngleDown
                                                        }
                                                        className="tradeHistoryArrow"
                                                    />

                                                </div>

                                            </div>


                                            {openRow === "btc" && (

                                                <div className="tradeHistoryBody">

                                                    <div className="tradeRow">
                                                        <span>Price per 1 TRX</span>
                                                        <strong>1400 000 USDT</strong>
                                                    </div>

                                                    <div className="tradeRow">
                                                        <span>Average price</span>
                                                        <strong>0.001 ETH</strong>
                                                    </div>

                                                    <div className="tradeRow">
                                                        <span>Sell</span>
                                                        <strong>0.001 ETH</strong>
                                                    </div>

                                                    <div className="tradeRow">
                                                        <span>Amount</span>
                                                        <strong>140 USDT</strong>
                                                    </div>

                                                    <div className="tradeRow">
                                                        <span>Filled</span>
                                                        <div className="d-flex flex-column gap-2">
                                                            <strong>0% • 0 USDT</strong>
                                                            <strong>100 ETH</strong>
                                                        </div>
                                                    </div>


                                                    <div className="tradeRow">
                                                        <span>Fee</span>
                                                        <strong>0 USDT</strong>
                                                    </div>

                                                    <div className="tradeRow">
                                                        <span>Executed</span>
                                                        <strong>0 USDT</strong>
                                                    </div>

                                                    <div className="text-center mb-2">
                                                        <span className="t-red">Cancel Order</span>

                                                    </div>

                                                </div>

                                            )}

                                        </div>
                                         </div>
                                     
                                      

                                    </Tab.Pane>

                                    <Tab.Pane eventKey="executed">

                                    </Tab.Pane>
                                    <Tab.Pane eventKey="partialexecuted">

                                    </Tab.Pane>
                                    <Tab.Pane eventKey="cancel">

                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </>

                    </Tab.Pane>
                    <Tab.Pane eventKey="history">
                        <>
                            <Tab.Container defaultActiveKey="openorderhistory">
                                <Nav className="historys-tabs mt-3 mb-2">
                                    <Nav.Item>
                                        <Nav.Link eventKey="all">All</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="executed">Executed</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="partialexecuted">Partial Executed</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="cancel" className="canel-btn">Cancel</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="all">
                                        <div className="tradeHistoryCard">

                                            <div
                                                className="tradeHistoryHeader d-flex justify-content-between align-items-center"
                                                onClick={() =>
                                                    setOpenRow(openRow === "btc" ? null : "btc")
                                                }
                                            >

                                                <div className="tradeHistoryLeft">

                                                    <span className="tradeSell">
                                                        Sell
                                                    </span>

                                                    <span className="tradeDot">
                                                        •
                                                    </span>

                                                    <span>
                                                        Market
                                                    </span>

                                                    <span className="tradeDot">
                                                        •
                                                    </span>

                                                    <span>
                                                        100%
                                                    </span>

                                                </div>


                                                <div className="tradeHistoryRight">

                                                    <span className="tradeHistoryDate">
                                                        11 Apr 11:10
                                                    </span>

                                                    <FontAwesomeIcon
                                                        icon={
                                                            openRow === "btc"
                                                                ? faAngleUp
                                                                : faAngleDown
                                                        }
                                                        className="tradeHistoryArrow"
                                                    />

                                                </div>

                                            </div>


                                            {openRow === "btc" && (

                                                <div className="tradeHistoryBody">

                                                    <div className="tradeRow">
                                                        <span>Price per 1 TRX</span>
                                                        <strong>Market</strong>
                                                    </div>

                                                    <div className="tradeRow">
                                                        <span>Average price</span>
                                                        <strong>0.1 USDT</strong>
                                                    </div>

                                                    <div className="tradeRow">
                                                        <span>Sell</span>
                                                        <strong>100 TRX</strong>
                                                    </div>

                                                    <div className="tradeRow">
                                                        <span>Amount</span>
                                                        <strong>10 USDT</strong>
                                                    </div>

                                                    <div className="tradeRow">
                                                        <span>Filled</span>
                                                        <div className="d-flex flex-column gap-2">
                                                            <strong>100% • 10 USDT</strong>
                                                            <strong>100 TRX</strong>
                                                        </div>
                                                    </div>


                                                    <div className="tradeRow">
                                                        <span>Fee</span>
                                                        <strong>0.075 USDT</strong>
                                                    </div>

                                                    <div className="tradeRow">
                                                        <span>Executed</span>
                                                        <strong>9.925 USDT</strong>
                                                    </div>

                                                    <div className="tradeRow">
                                                        <span>Executed at</span>
                                                        <strong>
                                                            11 April 2026, 11:10:55
                                                        </strong>
                                                    </div>

                                                </div>

                                            )}

                                        </div>

                                    </Tab.Pane>

                                    <Tab.Pane eventKey="executed">

                                    </Tab.Pane>
                                    <Tab.Pane eventKey="partialexecuted">

                                    </Tab.Pane>
                                    <Tab.Pane eventKey="cancel">

                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </>
                    </Tab.Pane>
                    <Tab.Pane eventKey="trades">


                    </Tab.Pane>
                </Tab.Content>
            </>
            <div className={`phone-draw-overlay ${openDrawer ? 'open' : ''}`} onClick={handleCloseDrawer}></div>
            <div className={`phone-draw ${openDrawer ? 'open' : ''}`}>
                <div className="phone-draw-handle"></div>
                <div className="text-center">
                    <div className="phone-draw-close">
                        <Button onClick={handleCloseDrawer} className="phone-draw-close-btn">
                            <FontAwesomeIcon icon={faTimes} />
                        </Button>
                    </div>
                    <Image src={isNightMode ? "/assets/images/swap-dark.gif" : "/assets/images/swap-white.gif"} alt="user" className="mobile-iconing" />
                    <h2 className="heading">Cancel Order?</h2>
                    <h2 className="sub-head">Cancel All <strong>ETH/USDT</strong>  orders</h2>
                </div>

                <div className="order-btn-yesno">
                    <div>
                        <Link href="/account-passcode">
                            <Button className="borderbtn">No</Button>
                        </Link>
                    </div>
                    <div>
                        <Link href="/account-passcode">
                            <Button className="sitebtn">Yes</Button>
                        </Link>
                    </div>

                </div>


            </div>
        </Tab.Container>

    );
}
