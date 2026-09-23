import ChevronDown from "./ChevronDown";
import RangeSlider from "./RangeSlider";
import { useState } from "react";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";
import { Image, Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { PhoneIcon, AccountIcon, WalletIcon, LockIcon } from '../components/Icons'

export default function OrderForm() {
    const { isNightMode } = useTheme();
    const [orderType, setOrderType] = useState("Market");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [tradeType, setTradeType] = useState("Buy");
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleOpenDrawer = () => setOpenDrawer(true);
    const handleCloseDrawer = () => setOpenDrawer(false);
    return (
        <div className="leftPanel">
            <div className="buySellToggle">

                <button
                    type="button"
                    className={`buyBtn ${tradeType === "Buy" ? "activeBuyTab" : ""
                        }`}
                    onClick={() => setTradeType("Buy")}
                >
                    Buy
                </button>

                <button
                    type="button"
                    className={`sellBtn ${tradeType === "Sell" ? "activeSellTab" : ""
                        }`}
                    onClick={() => setTradeType("Sell")}
                >
                    Sell
                </button>

            </div>

            <div className="selectField">
                {/* Selected Order Type */}
                <button
                    type="button"
                    className="selectFieldTrigger"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    <span>{orderType}</span>
                    <ChevronDown size={18} />
                </button>


                {/* Dropdown Menu */}
                {isDropdownOpen && (
                    <div className="orderTypeDropdownMenu">

                        <button
                            type="button"
                            className="orderTypeDropdownItem"
                            onClick={() => {
                                setOrderType("Market");
                                setIsDropdownOpen(false);
                            }}
                        >
                            Market
                        </button>

                        <button
                            type="button"
                            className="orderTypeDropdownItem"
                            onClick={() => {
                                setOrderType("Limit");
                                setIsDropdownOpen(false);
                            }}
                        >
                            Limit
                        </button>

                    </div>
                )}

            </div>
            {orderType === "Market" && (
                <div className="marketOrderContainer">
                    <input
                        type="text"
                        className="marketDisabledInput"
                        placeholder="Market Price"
                        disabled
                    />

                    <div className="marketOrderValueBox">
                        <input
                            type="text"
                            className="marketOrderInput"
                            placeholder="Order Value"
                        />

                        <div className="marketDropdownWrapper">
                            <select className="marketDropdownButton">
                                <option value="USDT">USDT</option>
                                <option value="ETH">ETH</option>
                            </select>
                        </div>
                    </div>

                    <RangeSlider />

                    <div className="marketOrderValueBox">
                        <input
                            type="text"
                            className="marketOrderInput"
                            placeholder="Max. Buy"
                        />
                        <div className="marketDropdownWrapper">
                           <select className="marketDropdownButton">
                                <option value="USDT">18.97</option>
                                <option value="ETH">18.98</option>
                            </select>
                        </div>
                    </div>

                    {/* <label className="marketCheckboxRow">
                        <input type="checkbox" className="chk-box-int" />
                        Max Slippage
                    </label>

                    <div className="marketInfoRow">
                        <p>Avbl:</p>
                        <strong>0.000000 USDT</strong>
                    </div>

                    <div className="marketInfoRow">
                        <p>Max Buy:</p>
                        <strong>0 BTC</strong>
                    </div> */}
                </div>
            )}
            {orderType === "Limit" && (
                <div className="limitTradeWrapper">

                    <div className="limitInputWrapper">
                        <button
                            type="button"
                            className="limitMinusBtn"
                        >
                            −
                        </button>

                        <input
                            type="text"
                            className="limitTradeInput"
                            placeholder="Price"
                        />

                        <button
                            type="button"
                            className="limitPlusBtn"
                        >
                            +
                        </button>
                    </div>


                    <div className="limitInputWrapper">

                        <button
                            type="button"
                            className="limitMinusBtn"
                        >
                            −
                        </button>

                        <input
                            type="text"
                            className="limitTradeInput"
                            placeholder="Amount"
                        />

                        <button
                            type="button"
                            className="limitPlusBtn"
                        >
                            +
                        </button>

                    </div>


                    <RangeSlider />


                    <input
                        className="limitTotalInput"
                        placeholder="Total (USDT)"
                    />


                    <label className="limitCheckbox">
                        <input
                            type="checkbox"
                        />
                        TP/SL
                    </label>


                    <div className="limitInputWrapper">

                        <button
                            type="button"
                            className="limitMinusBtn"
                        >
                            −
                        </button>

                        <input
                            type="text"
                            className="limitTradeInput"
                            placeholder="TP Limit (USDT)"
                        />

                        <button
                            type="button"
                            className="limitPlusBtn"
                        >
                            +
                        </button>

                    </div>


                    <div className="limitInputWrapper">

                        <button
                            type="button"
                            className="limitMinusBtn"
                        >
                            −
                        </button>

                        <input
                            type="text"
                            className="limitTradeInput"
                            placeholder="SL Trigger (USDT)"
                        />

                        <button
                            type="button"
                            className="limitPlusBtn"
                        >
                            +
                        </button>

                    </div>


                    <div className="limitInputWrapper">

                        <button
                            type="button"
                            className="limitMinusBtn"
                        >
                            −
                        </button>

                        <input
                            type="text"
                            className="limitTradeInput"
                            placeholder="SL Limit"
                        />

                        <button
                            type="button"
                            className="limitPlusBtn"
                        >
                            +
                        </button>

                    </div>


                    <div className="limitBottomRow">
                        <p>Available to Trade</p>
                        <strong>N/A</strong>
                    </div>


                    <div className="limitBottomRow">
                        <span>Margin Required</span>
                        <strong>N/A</strong>
                    </div>

                </div>
            )}

            {tradeType === "Buy" ? (
                <button
                    type="button"
                    className="buySubmitBtn" onClick={() => handleOpenDrawer(true)}
                >
                    Buy BTC
                </button>
            ) : (
                <button
                    type="button"
                    className="sellSubmitBtn"
                >
                    Sell BTC
                </button>
            )}
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
                    <h2 className="heading">Confirm Order</h2>
                    <h2 className="sub-head">Sell <strong>TRX</strong> for <strong>USDT</strong> at 110.4985 or higher.</h2>
                    <div className="confirmOrderCard">

                        <div className="confirmOrderRow d-flex justify-content-between align-items-center">
                            <span>Type</span>
                            <strong className="sellText">Sell</strong>
                        </div>

                        <div className="confirmOrderRow d-flex justify-content-between align-items-center">
                            <span>Price</span>
                            <strong>≥ 110.4985 USDT</strong>
                        </div>

                        <div className="confirmOrderRow d-flex justify-content-between align-items-center">
                            <span>Amount</span>
                            <strong>0.1 TRX</strong>
                        </div>

                        <div className="confirmOrderRow d-flex justify-content-between align-items-center border-0">
                            <span>Total</span>
                            <strong>11.04985 USDT</strong>
                        </div>

                    </div>
                </div>

                <Link href="/account-passcode">
                    <Button className="sitebtn">Confirem</Button>
                </Link>
            </div>
        </div>

    );
}
