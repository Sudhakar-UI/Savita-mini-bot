"use client";

import { useState } from "react";
import {
  Image,
  Container,
  Badge,
  Alert,
  Tab,
  Nav, InputGroup, Form, Button, Row, Col
} from "react-bootstrap";

import { useTheme } from "../context/ThemeContext";
import Userfooter from "../components/Userfooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

  faChevronRight,
  faAngleDown,
  faCircleCheck, faCircleExclamation, faCopy,
  faChevronDown, faMagnifyingGlass, faTimes
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { BookMarkCircleIcon, RecieveIcon, SendIcon, SwapIcon, TransReportIcon, DiscountIcon, ScannerIcon, AccountCircleIcon } from "../components/Icons";


const merchantPage = () => {

  const { isNightMode } = useTheme();

  const [isBtcOpen, setIsBtcOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [isEthOpen, setIsEthOpen] = useState(false);
  const [isUsdtOpen, setIsUsdtOpen] = useState(false);
  const [isSolOpen, setIsSolOpen] = useState(false);
  const [isSolOpens, setIsSolOpens] = useState(false);
  const [isSolOpenss, setIsSolOpenss] = useState(false);
  const [isSolOpensss, setIsSolOpensss] = useState(false);
  const [isSolOpening, setIsSolOpening] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openDrawerone, setOpenDrawerone] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleCloseone = () => setShowModalone(false);
  const handleOpenDrawer = () => setOpenDrawer(true);
  const handleCloseDrawer = () => setOpenDrawer(false);
  const handleOpenDrawerone = () => setOpenDrawerone(true);
  const handleCloseDrawerone = () => setOpenDrawerone(false);

  const [isChecked, setIsChecked] = useState(true);

  return (
    <div className="paymentandcommission">
      <Container>
        <div className="d-flex align-items-center gap-2">
          <div className="heading">Testing_venky</div>

          <Badge
            bg="success"
            className="d-flex align-items-center"
          >
            <span className="green-dot me-1"></span>
            Active
          </Badge>
        </div>
        <div className="d-flex mt-3 mb-2 gap-2 blue-card-two">
          <div className="blue-card">
            <div>
              <Image src="/assets/images/total-income.svg" width={50} height={50} alt="" className="loc-cury-iconing" />
            </div>
            <div>
              <p className="mge-all mb-2">Total Income</p>
              <h6 className="sub-heading">$5,932.26</h6>
            </div>
          </div>
          <div className="blue-card">
            <div>
              <Image src="/assets/images/total-turnover.svg" width={50} height={50} alt="" className="loc-cury-iconing" />
            </div>
            <div>
              <p className="mge-all mb-2">Total Turnover</p>
              <h6 className="sub-heading">$335,973.80</h6>
            </div>
          </div>
        </div>
        <div className="merch-ant-cards">
          <div className="blue-card">
            <div>
              <Image src="/assets/images/mer-icon.svg" width={50} height={50} alt="" className="loc-cury-iconing" />
            </div>
            <div className="d-flex gap-1 align-items-center">
              <div>
                <h6 className="sub-heading mert">Merchant Settings</h6>
                <p className="mge-all mb-0">Manage your preference</p>
              </div>
              <div className="arrow-right">
                <FontAwesomeIcon icon={faChevronRight} className="me-1 wall-circle-icon" />
              </div>
            </div>

          </div>
          <div className="blue-card">
            <div>
              <Image src="/assets/images/payment-icon.svg" width={50} height={50} alt="" className="loc-cury-iconing" />
            </div>
            <div className="d-flex gap-1 align-items-center">
              <div>
                <h6 className="sub-heading mert">Payment by Link</h6>
                <p className="mge-all mb-0">Create & share payment link</p>
              </div>
              <div className="arrow-right">
                <FontAwesomeIcon icon={faChevronRight} className="me-1 wall-circle-icon" />
              </div>

            </div>

          </div>
        </div>

        <Tab.Container defaultActiveKey="payment">
          <Nav className="merchant-tabs mt-2 mb-3">
            <Nav.Item>
              <Nav.Link eventKey="payment">Payments</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="commission">Commissions</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="payment">
              <div className="serrch-flt-action mt-2">
                <div className="siteformbg">
                  <InputGroup>
                    <InputGroup.Text>
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </InputGroup.Text>
                    <Form.Control placeholder="Search payment id..." />
                  </InputGroup>
                </div>
                <div className="d-flex justify-content-between align-items-center gap-1">
                  <div className="" onClick={() => handleOpenDrawer(true)}>
                    <Image src="/assets/images/mer-filtericon.svg" width={50} height={50} alt="" className="locicons" />
                  </div>
                  <div>

                  <Image src="/assets/images/dow-mericon.svg" width={50} height={50} alt="" className="locicons" />
                  </div>

                </div>
              </div>

              <div className="paymentandcommission-expired-card">
                <div
                  className="paymentandcommission-expired-header"
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  <div className="paymentandcommission-expired-coin">

                    <div className="paymentandcommission-expired-coin-icon">
                      <Image
                        src={
                          isNightMode
                            ? "/assets/images/color/ton.svg"
                            : "/assets/images/color/ton.svg"
                        }
                        alt="TON"
                        width={45}
                        height={45}
                      />
                    </div>

                    <div className="paymentandcommission-expired-coin-name">
                      <h5>TON</h5>
                      <p>Network</p>
                    </div>

                  </div>

                  <div className="paymentandcommission-expired-status">
                    <span>Expired</span>
                  </div>

                  <div className="paymentandcommission-expired-arrow">
                    <FontAwesomeIcon
                      icon={isOpen ? faChevronDown : faChevronRight}
                      className="paymentandcommission-angle"
                    />
                  </div>
                </div>
                {isOpen && (
                  <div className="paymentandcommission-expired-body">
                    <div className="paymentandcommission-expired-alert">
                      <div className="paymentandcommission-expired-alert-icon">
                        <FontAwesomeIcon icon={faCircleExclamation} />
                      </div>

                      <div className="paymentandcommission-expired-alert-content">
                        <h6>Invoice has expired</h6>
                        <p>
                          Create a new invoice to accept payment
                        </p>
                      </div>
                    </div>

                    <div className="paymentandcommission-expired-info-row">
                      <div className="paymentandcommission-expired-info">
                        <span>Merchant</span>
                        <strong>Testing_Venky</strong>
                      </div>

                      <div className="paymentandcommission-expired-info text-end">
                        <span>Date &amp; Time</span>
                        <strong>11/06/2026, 11:58 AM</strong>
                      </div>

                    </div>


                    <div className="paymentandcommission-expired-detail-row">

                      <div>
                        <span>Link Invoice</span>
                        <strong>Type</strong>
                      </div>

                      <div className="text-end">
                        <span>Invoice currency and Network</span>
                        <strong>TON, TON</strong>
                      </div>

                    </div>
                    <div className="paymentandcommission-expired-detail-row">
                      <div>
                        <span>Amount</span>
                      </div>
                      <div className="text-end">
                        <strong>5 TON</strong>
                      </div>
                    </div>
                    <div className="paymentandcommission-expired-payment-id">

                      <div>
                        <span>Payment ID</span>
                        <strong>HGAKDBBBFBFBBBKBBKFNNN</strong>
                      </div>

                      <button
                        type="button"
                        className="paymentandcommission-copy-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigator.clipboard.writeText(
                            "HGAKDBBBFBFBBBKBBKFNNN"
                          );
                        }}
                        aria-label="Copy payment ID"
                      >
                       <span>
                        <Image
                        src={
                          isNightMode
                            ? "/assets/images/fa-copy.svg"
                            : "/assets/images/fa-copy.svg"
                        }
                        alt="TON"
                        width={45}
                        height={45} className="fa-copy-icon"
                      />
                        </span>  
                      </button>

                    </div>

                  </div>
                )}

              </div>
              <div className="paymentandcommission-expired-card">
                <div
                  className="paymentandcommission-expired-header"
                  onClick={() => setIsBtcOpen((prev) => !prev)}
                >
                  <div className="paymentandcommission-expired-coin">

                    <div className="paymentandcommission-expired-coin-icon">
                      <Image
                        src={
                          isNightMode
                            ? "/assets/images/color/btc.svg"
                            : "/assets/images/color/btc.svg"
                        }
                        alt="btc"
                        width={45}
                        height={45}
                      />
                    </div>

                    <div className="paymentandcommission-expired-coin-name">
                      <h5>BTC</h5>
                      <p>Network</p>
                    </div>

                  </div>

                  <div className="paymentandcommission-expired-status">
                    <span>Expired</span>
                  </div>

                  <div className="paymentandcommission-expired-arrow">
                    <FontAwesomeIcon
                      icon={isBtcOpen ? faChevronDown : faChevronRight}
                      className="paymentandcommission-angle"
                    />
                  </div>
                </div>
                {isBtcOpen && (
                  <div className="paymentandcommission-expired-body">

                    {/* Expired Alert */}
                    <div className="paymentandcommission-expired-alert">
                      <div className="paymentandcommission-expired-alert-icon">
                        <FontAwesomeIcon icon={faCircleExclamation} />
                      </div>

                      <div className="paymentandcommission-expired-alert-content">
                        <h6>Invoice has expired</h6>
                        <p>
                          Create a new invoice to accept payment
                        </p>
                      </div>
                    </div>

                    {/* Merchant / Date */}
                    <div className="paymentandcommission-expired-info-row">

                      <div className="paymentandcommission-expired-info">
                        <span>Merchant</span>
                        <strong>Testing_Venky</strong>
                      </div>

                      <div className="paymentandcommission-expired-info text-end">
                        <span>Date &amp; Time</span>
                        <strong>11/06/2026, 11:58 AM</strong>
                      </div>

                    </div>

                    {/* Type */}
                    <div className="paymentandcommission-expired-detail-row">

                      <div>
                        <span>Link Invoice</span>
                        <strong>Type</strong>
                      </div>

                      <div className="text-end">
                        <span>Invoice currency and Network</span>
                        <strong>TON, TON</strong>
                      </div>

                    </div>
                    <div className="paymentandcommission-expired-detail-row">
                      <div>
                        <span>Amount</span>
                      </div>
                      <div className="text-end">
                        <strong>5 BTC</strong>
                      </div>
                    </div>
                    {/* Payment ID */}
                    <div className="paymentandcommission-expired-payment-id">

                      <div>
                        <span>Payment ID</span>
                        <strong>HGAKDBBBFBFBBBKBBKFNNN</strong>
                      </div>

                      <button
                        type="button"
                        className="paymentandcommission-copy-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigator.clipboard.writeText(
                            "HGAKDBBBFBFBBBKBBKFNNN"
                          );
                        }}
                        aria-label="Copy payment ID"
                      >
                                              <span>
                        <Image
                        src={
                          isNightMode
                            ? "/assets/images/fa-copy.svg"
                            : "/assets/images/fa-copy.svg"
                        }
                        alt="TON"
                        width={45}
                        height={45} className="fa-copy-icon"
                      />
                        </span>  
                      </button>

                    </div>

                  </div>
                )}

              </div>
              <div className="paymentandcommission-expired-card">
                <div
                  className="paymentandcommission-expired-header"
                  onClick={() => setIsEthOpen((prev) => !prev)}
                >
                  <div className="paymentandcommission-expired-coin">

                    <div className="paymentandcommission-expired-coin-icon">
                      <Image
                        src={
                          isNightMode
                            ? "/assets/images/color/eth.svg"
                            : "/assets/images/color/eth.svg"
                        }
                        alt="TON"
                        width={45}
                        height={45}
                      />
                    </div>

                    <div className="paymentandcommission-expired-coin-name">
                      <h5>ETH</h5>
                      <p>Network</p>
                    </div>

                  </div>

                  <div className="paymentandcommission-expired-status">
                    <span>Expired</span>
                  </div>

                  <div className="paymentandcommission-expired-arrow">
                    <FontAwesomeIcon
                      icon={isEthOpen ? faChevronDown : faChevronRight}
                      className="paymentandcommission-angle"
                    />
                  </div>
                </div>
                {isEthOpen && (
                  <div className="paymentandcommission-expired-body">

                    {/* Expired Alert */}
                    <div className="paymentandcommission-expired-alert">
                      <div className="paymentandcommission-expired-alert-icon">
                        <FontAwesomeIcon icon={faCircleExclamation} />
                      </div>

                      <div className="paymentandcommission-expired-alert-content">
                        <h6>Invoice has expired</h6>
                        <p>
                          Create a new invoice to accept payment
                        </p>
                      </div>
                    </div>

                    {/* Merchant / Date */}
                    <div className="paymentandcommission-expired-info-row">

                      <div className="paymentandcommission-expired-info">
                        <span>Merchant</span>
                        <strong>Testing_Venky</strong>
                      </div>

                      <div className="paymentandcommission-expired-info text-end">
                        <span>Date &amp; Time</span>
                        <strong>11/06/2026, 11:58 AM</strong>
                      </div>

                    </div>

                    {/* Type */}
                    <div className="paymentandcommission-expired-detail-row">

                      <div>
                        <span>Link Invoice</span>
                        <strong>Type</strong>
                      </div>

                      <div className="text-end">
                        <span>Invoice currency and Network</span>
                        <strong>TON, TON</strong>
                      </div>

                    </div>
                    <div className="paymentandcommission-expired-detail-row">
                      <div>
                        <span>Amount</span>
                      </div>
                      <div className="text-end">
                        <strong>5 ETH</strong>
                      </div>
                    </div>
                    <div className="paymentandcommission-expired-payment-id">

                      <div>
                        <span>Payment ID</span>
                        <strong>HGAKDBBBFBFBBBKBBKFNNN</strong>
                      </div>

                      <button
                        type="button"
                        className="paymentandcommission-copy-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigator.clipboard.writeText(
                            "HGAKDBBBFBFBBBKBBKFNNN"
                          );
                        }}
                        aria-label="Copy payment ID"
                      >
                                              <span>
                        <Image
                        src={
                          isNightMode
                            ? "/assets/images/fa-copy.svg"
                            : "/assets/images/fa-copy.svg"
                        }
                        alt="TON"
                        width={45}
                        height={45} className="fa-copy-icon"
                      />
                        </span>  
                      </button>

                    </div>

                  </div>
                )}

              </div>
              <div className="paymentandcommission-expired-card">
                <div
                  className="paymentandcommission-expired-header"
                  onClick={() => setIsUsdtOpen((prev) => !prev)}
                >
                  <div className="paymentandcommission-expired-coin">

                    <div className="paymentandcommission-expired-coin-icon">
                      <Image
                        src={
                          isNightMode
                            ? "/assets/images/color/ltc.svg"
                            : "/assets/images/color/ltc.svg"
                        }
                        alt="TON"
                        width={45}
                        height={45}
                      />
                    </div>

                    <div className="paymentandcommission-expired-coin-name">
                      <h5>LTC</h5>
                      <p>Network</p>
                    </div>

                  </div>

                  <div className="paymentandcommission-expired-status">
                    <span>Expired</span>
                  </div>

                  <div className="paymentandcommission-expired-arrow">
                    <FontAwesomeIcon
                      icon={isUsdtOpen ? faChevronDown : faChevronRight}
                      className="paymentandcommission-angle"
                    />
                  </div>
                </div>
                {isUsdtOpen && (
                  <div className="paymentandcommission-expired-body">
                    <div className="paymentandcommission-expired-alert">
                      <div className="paymentandcommission-expired-alert-icon">
                        <FontAwesomeIcon icon={faCircleExclamation} />
                      </div>

                      <div className="paymentandcommission-expired-alert-content">
                        <h6>Invoice has expired</h6>
                        <p>
                          Create a new invoice to accept payment
                        </p>
                      </div>
                    </div>

                    {/* Merchant / Date */}
                    <div className="paymentandcommission-expired-info-row">

                      <div className="paymentandcommission-expired-info">
                        <span>Merchant</span>
                        <strong>Testing_Venky</strong>
                      </div>

                      <div className="paymentandcommission-expired-info text-end">
                        <span>Date &amp; Time</span>
                        <strong>11/06/2026, 11:58 AM</strong>
                      </div>

                    </div>

                    {/* Type */}
                    <div className="paymentandcommission-expired-detail-row">

                      <div>
                        <span>Link Invoice</span>
                        <strong>Type</strong>
                      </div>

                      <div className="text-end">
                        <span>Invoice currency and Network</span>
                        <strong>TON, TON</strong>
                      </div>

                    </div>
                    <div className="paymentandcommission-expired-detail-row">
                      <div>
                        <span>Amount</span>
                      </div>
                      <div className="text-end">
                        <strong>5 LTC</strong>
                      </div>
                    </div>

                    {/* Payment ID */}
                    <div className="paymentandcommission-expired-payment-id">

                      <div>
                        <span>Payment ID</span>
                        <strong>HGAKDBBBFBFBBBKBBKFNNN</strong>
                      </div>

                      <button
                        type="button"
                        className="paymentandcommission-copy-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigator.clipboard.writeText(
                            "HGAKDBBBFBFBBBKBBKFNNN"
                          );
                        }}
                        aria-label="Copy payment ID"
                      >
                                               <span>
                        <Image
                        src={
                          isNightMode
                            ? "/assets/images/fa-copy.svg"
                            : "/assets/images/fa-copy.svg"
                        }
                        alt="TON"
                        width={45}
                        height={45} className="fa-copy-icon"
                      />
                        </span>  
                      </button>

                    </div>

                  </div>
                )}

              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="commission">
              <div className="serrch-flt-action">
                <div className="siteformbg">
                  <InputGroup>
                    <InputGroup.Text>
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </InputGroup.Text>
                    <Form.Control placeholder="Search payment id..." />
                  </InputGroup>
                </div>
                  <div className="d-flex justify-content-between align-items-center gap-1">
                  <div className="" onClick={() => handleOpenDrawer(true)}>
                    <Image src="/assets/images/mer-filtericon.svg" width={50} height={50} alt="" className="locicons" />
                  </div>
                  <div>

                  <Image src="/assets/images/dow-mericon.svg" width={50} height={50} alt="" className="locicons" />
                  </div>

                </div>
              </div>
              <div className="paymentandcommission-expired-card">
                <div
                  className="paymentandcommission-expired-header"
                  onClick={() => setIsSolOpen((prev) => !prev)}
                >
                  <div className="paymentandcommission-expired-coin">

                    <div className="paymentandcommission-expired-coin-icon">
                      <Image
                        src={
                          isNightMode
                            ? "/assets/images/color/btc.svg"
                            : "/assets/images/color/btc.svg"
                        }
                        alt="btc"
                        width={45}
                        height={45}
                      />
                    </div>

                    <div className="paymentandcommission-expired-coin-name">
                      <h5>BTC</h5>
                      <p>Bitcoin</p>
                    </div>
                  </div>

                  <div className="paymentandcommission-expired-amount expid">
                    <h5>2.00%</h5>
                    <p>Payment Commission</p>
                  </div>

                  <div className="paymentandcommission-expired-arrow expid">
                    <FontAwesomeIcon
                      icon={isSolOpen ? faChevronDown : faChevronRight}
                      className="paymentandcommission-angle"
                    />
                  </div>
                </div>
                {isSolOpen && (
                  <div className="paymentandcommission-expired-body">
                    <div className="paymentandcommission-expired-info-row">
                      <div className="paymentandcommission-expired-info">
                        <span>Fixed Withdrawal
                          commission</span>
                        <strong>0.0000</strong>
                      </div>

                      <div className="paymentandcommission-expired-info text-end">
                        <span>Fixed Withdrawal
                          commission</span>
                        <strong>0.0000</strong>
                      </div>

                    </div>
                    <div className="paymentandcommission-expired-detail-row">

                      <div>
                        <span>Min -Max. Withdrawal</span>
                        <strong>0.0011 - 10.0000</strong>
                      </div>

                      <div className="text-end">
                        <span>Min -Max. Receive</span>
                        <strong>0.0011 - 10.0000</strong>
                      </div>

                    </div>

                    {/* Payment ID */}
                    <div className="paymentandcommission-expired-payment-id">

                      <div>
                        <span>Confirmation Needed</span>
                        <strong>1 block</strong>
                      </div>

                      <button
                        type="button"
                        className="paymentandcommission-copy-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigator.clipboard.writeText(
                            "HGAKDBBBFBFBBBKBBKFNNN"
                          );
                        }}
                        aria-label="Copy payment ID"
                      >
                      </button>

                    </div>

                  </div>
                )}
              </div>
              <div className="paymentandcommission-expired-card">
                <div
                  className="paymentandcommission-expired-header"
                  onClick={() => setIsSolOpens((prev) => !prev)}
                >
                  <div className="paymentandcommission-expired-coin">

                    <div className="paymentandcommission-expired-coin-icon">
                      <Image
                        src={
                          isNightMode
                            ? "/assets/images/color/ton.svg"
                            : "/assets/images/color/ton.svg"
                        }
                        alt="btc"
                        width={45}
                        height={45}
                      />
                    </div>

                    <div className="paymentandcommission-expired-coin-name">
                      <h5>TON</h5>
                      <p>ton</p>
                    </div>
                  </div>

                  <div className="paymentandcommission-expired-amount expid">
                    <h5>2.00%</h5>
                    <p>Payment Commission</p>
                  </div>

                  <div className="paymentandcommission-expired-arrow expid">
                    <FontAwesomeIcon
                      icon={isSolOpens ? faChevronDown : faChevronRight}
                      className="paymentandcommission-angle"
                    />
                  </div>
                </div>
                {isSolOpens && (
                  <div className="paymentandcommission-expired-body">
                    <div className="paymentandcommission-expired-info-row">
                      <div className="paymentandcommission-expired-info">
                        <span>Fixed Withdrawal
                          commission</span>
                        <strong>0.0000</strong>
                      </div>

                      <div className="paymentandcommission-expired-info text-end">
                        <span>Fixed Withdrawal
                          commission</span>
                        <strong>0.0000</strong>
                      </div>

                    </div>
                    <div className="paymentandcommission-expired-detail-row">

                      <div>
                        <span>Min -Max. Withdrawal</span>
                        <strong>0.0011 - 10.0000</strong>
                      </div>

                      <div className="text-end">
                        <span>Min -Max. Receive</span>
                        <strong>0.0011 - 10.0000</strong>
                      </div>

                    </div>

                    {/* Payment ID */}
                    <div className="paymentandcommission-expired-payment-id">

                      <div>
                        <span>Confirmation Needed</span>
                        <strong>1 block</strong>
                      </div>

                      <button
                        type="button"
                        className="paymentandcommission-copy-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigator.clipboard.writeText(
                            "HGAKDBBBFBFBBBKBBKFNNN"
                          );
                        }}
                        aria-label="Copy payment ID"
                      >
                      </button>

                    </div>

                  </div>
                )}
              </div>
              <div className="paymentandcommission-expired-card">
                <div
                  className="paymentandcommission-expired-header"
                  onClick={() => setIsSolOpenss((prev) => !prev)}
                >
                  <div className="paymentandcommission-expired-coin">

                    <div className="paymentandcommission-expired-coin-icon">
                      <Image
                        src={
                          isNightMode
                            ? "/assets/images/color/eth.svg"
                            : "/assets/images/color/eth.svg"
                        }
                        alt="btc"
                        width={45}
                        height={45}
                      />
                    </div>

                    <div className="paymentandcommission-expired-coin-name">
                      <h5>ETH</h5>
                      <p>Ethereum</p>
                    </div>
                  </div>

                  <div className="paymentandcommission-expired-amount expid">
                    <h5>2.00%</h5>
                    <p>Payment Commission</p>
                  </div>

                  <div className="paymentandcommission-expired-arrow expid">
                    <FontAwesomeIcon
                      icon={isSolOpenss ? faChevronDown : faChevronRight}
                      className="paymentandcommission-angle"
                    />
                  </div>
                </div>
                {isSolOpenss && (
                  <div className="paymentandcommission-expired-body">
                    <div className="paymentandcommission-expired-info-row">
                      <div className="paymentandcommission-expired-info">
                        <span>Fixed Withdrawal
                          commission</span>
                        <strong>0.0000</strong>
                      </div>

                      <div className="paymentandcommission-expired-info text-end">
                        <span>Fixed Withdrawal
                          commission</span>
                        <strong>0.0000</strong>
                      </div>

                    </div>
                    <div className="paymentandcommission-expired-detail-row">

                      <div>
                        <span>Min -Max. Withdrawal</span>
                        <strong>0.0011 - 10.0000</strong>
                      </div>

                      <div className="text-end">
                        <span>Min -Max. Receive</span>
                        <strong>0.0011 - 10.0000</strong>
                      </div>

                    </div>

                    {/* Payment ID */}
                    <div className="paymentandcommission-expired-payment-id">

                      <div>
                        <span>Confirmation Needed</span>
                        <strong>1 block</strong>
                      </div>

                      <button
                        type="button"
                        className="paymentandcommission-copy-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigator.clipboard.writeText(
                            "HGAKDBBBFBFBBBKBBKFNNN"
                          );
                        }}
                        aria-label="Copy payment ID"
                      >
                      </button>

                    </div>

                  </div>
                )}
              </div>
              <div className="paymentandcommission-expired-card">
                <div
                  className="paymentandcommission-expired-header"
                  onClick={() => setIsSolOpenss((prev) => !prev)}
                >
                  <div className="paymentandcommission-expired-coin">

                    <div className="paymentandcommission-expired-coin-icon">
                      <Image
                        src={
                          isNightMode
                            ? "/assets/images/color/ltc.svg"
                            : "/assets/images/color/ltc.svg"
                        }
                        alt="btc"
                        width={45}
                        height={45}
                      />
                    </div>

                    <div className="paymentandcommission-expired-coin-name">
                      <h5>LTC</h5>
                      <p>ltc</p>
                    </div>
                  </div>

                  <div className="paymentandcommission-expired-amount expid">
                    <h5>2.00%</h5>
                    <p>Payment Commission</p>
                  </div>

                  <div className="paymentandcommission-expired-arrow expid">
                    <FontAwesomeIcon
                      icon={isSolOpenss ? faChevronDown : faChevronRight}
                      className="paymentandcommission-angle"
                    />
                  </div>
                </div>
                {isSolOpenss && (
                  <div className="paymentandcommission-expired-body">
                    <div className="paymentandcommission-expired-info-row">
                      <div className="paymentandcommission-expired-info">
                        <span>Fixed Withdrawal
                          commission</span>
                        <strong>0.0000</strong>
                      </div>

                      <div className="paymentandcommission-expired-info text-end">
                        <span>Fixed Withdrawal
                          commission</span>
                        <strong>0.0000</strong>
                      </div>

                    </div>
                    <div className="paymentandcommission-expired-detail-row">

                      <div>
                        <span>Min -Max. Withdrawal</span>
                        <strong>0.0011 - 10.0000</strong>
                      </div>

                      <div className="text-end">
                        <span>Min -Max. Receive</span>
                        <strong>0.0011 - 10.0000</strong>
                      </div>

                    </div>

                    {/* Payment ID */}
                    <div className="paymentandcommission-expired-payment-id">

                      <div>
                        <span>Confirmation Needed</span>
                        <strong>1 block</strong>
                      </div>

                      <button
                        type="button"
                        className="paymentandcommission-copy-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigator.clipboard.writeText(
                            "HGAKDBBBFBFBBBKBBKFNNN"
                          );
                        }}
                        aria-label="Copy payment ID"
                      >
                      </button>

                    </div>

                  </div>
                )}
              </div>
              <div className="paymentandcommission-expired-card">
                <div
                  className="paymentandcommission-expired-header"
                  onClick={() => setIsSolOpening((prev) => !prev)}
                >
                  <div className="paymentandcommission-expired-coin">

                    <div className="paymentandcommission-expired-coin-icon">
                      <Image
                        src={
                          isNightMode
                            ? "/assets/images/color/sol.svg"
                            : "/assets/images/color/sol.svg"
                        }
                        alt="btc"
                        width={45}
                        height={45}
                      />
                    </div>

                    <div className="paymentandcommission-expired-coin-name">
                      <h5>SOL</h5>
                      <p>Solana</p>
                    </div>
                  </div>

                  <div className="paymentandcommission-expired-amount expid">
                    <h5>2.00%</h5>
                    <p>Payment Commission</p>
                  </div>

                  <div className="paymentandcommission-expired-arrow expid">
                    <FontAwesomeIcon
                      icon={isSolOpening ? faChevronDown : faChevronRight}
                      className="paymentandcommission-angle"
                    />
                  </div>
                </div>
                {isSolOpening && (
                  <div className="paymentandcommission-expired-body">
                    <div className="paymentandcommission-expired-info-row">
                      <div className="paymentandcommission-expired-info">
                        <span>Fixed Withdrawal
                          commission</span>
                        <strong>0.0000</strong>
                      </div>

                      <div className="paymentandcommission-expired-info text-end">
                        <span>Fixed Withdrawal
                          commission</span>
                        <strong>0.0000</strong>
                      </div>

                    </div>
                    <div className="paymentandcommission-expired-detail-row">

                      <div>
                        <span>Min -Max. Withdrawal</span>
                        <strong>0.0011 - 10.0000</strong>
                      </div>

                      <div className="text-end">
                        <span>Min -Max. Receive</span>
                        <strong>0.0011 - 10.0000</strong>
                      </div>

                    </div>

                    {/* Payment ID */}
                    <div className="paymentandcommission-expired-payment-id">

                      <div>
                        <span>Confirmation Needed</span>
                        <strong>1 block</strong>
                      </div>

                      <button
                        type="button"
                        className="paymentandcommission-copy-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigator.clipboard.writeText(
                            "HGAKDBBBFBFBBBKBBKFNNN"
                          );
                        }}
                        aria-label="Copy payment ID"
                      >
                      </button>

                    </div>

                  </div>
                )}
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
      <div className={`phone-draw-overlay ${openDrawer ? 'open' : ''}`} onClick={handleCloseDrawer}></div>
      <div className={`phone-draw ${openDrawer ? 'open' : ''}`}>
        <div className="phone-draw-handle"></div>
        <div className="text-center position-relative">
          <div className="phone-draw-close">
            <Button onClick={handleCloseDrawer} className="phone-draw-close-btn">
              <FontAwesomeIcon icon={faTimes} />
            </Button>
          </div>
          <Image src={isNightMode ? "/assets/images/filter-iconing.svg" : "/assets/images/filter-iconing.svg"} alt="user" className="mobile-iconing" />
          <h2 className="heading">Filter</h2>
        </div>
        <div className="mt-2 mb-2">
          <Tab.Container defaultActiveKey="payment">
            <Nav className="merchant-tabs tabs mt-2 mb-2">
              <Nav.Item>
                <Nav.Link eventKey="payment">Payment Type </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="commission">Status</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="period">Period</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="payment">
                <div className="filtering">
                  <div className="filtered">
                    <h6 className="sub-head">API Static Wallet</h6>
                    <span className="">
                      <input type="checkbox" className="merchant-checkbox" />
                    </span>
                  </div>
                  <div className="filtered">
                    <h6 className="sub-head">API Invoice</h6>
                    <span>
                      <input
                        type="checkbox"
                        className="merchant-checkbox"
                        checked={isChecked}
                        onChange={(e) => setIsChecked(e.target.checked)}
                      />
                    </span>
                  </div>
                  <div className="filtered">
                    <h6 className="sub-head">Link static wallet</h6>
                    <span className="">
                      <input type="checkbox" className="merchant-checkbox" checked={isChecked}
                        onChange={(e) => setIsChecked(e.target.checked)} />
                    </span>
                  </div>
                  <div className="filtered">
                    <h6 className="sub-head">Link invoice</h6>
                    <span className="">
                      <input type="checkbox" className="merchant-checkbox" />
                    </span>
                  </div>


                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="commission">
                <div className="filtering">
                  <div className="filtered">
                    <h6 className="sub-head">API Static Wallet</h6>
                    <span className="">
                      <input type="checkbox" className="merchant-checkbox" />
                    </span>
                  </div>
                  <div className="filtered">
                    <h6 className="sub-head">API Invoice</h6>
                    <span>
                      <input
                        type="checkbox"
                        className="merchant-checkbox"
                        checked={isChecked}
                        onChange={(e) => setIsChecked(e.target.checked)}
                      />
                    </span>
                  </div>
                  <div className="filtered">
                    <h6 className="sub-head">Link static wallet</h6>
                    <span className="">
                      <input type="checkbox" className="merchant-checkbox" checked={isChecked}
                        onChange={(e) => setIsChecked(e.target.checked)} />
                    </span>
                  </div>
                  <div className="filtered">
                    <h6 className="sub-head">Link invoice</h6>
                    <span className="">
                      <input type="checkbox" className="merchant-checkbox" />
                    </span>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="period">
                <div className="filtering">
                  <div className="filtered">
                    <h6 className="sub-head">API Static Wallet</h6>
                    <span className="">
                      <input type="checkbox" className="merchant-checkbox" />
                    </span>
                  </div>
                  <div className="filtered">
                    <h6 className="sub-head">API Invoice</h6>
                    <span>
                      <input
                        type="checkbox"
                        className="merchant-checkbox"
                        checked={isChecked}
                        onChange={(e) => setIsChecked(e.target.checked)}
                      />
                    </span>
                  </div>
                  <div className="filtered">
                    <h6 className="sub-head">Link static wallet</h6>
                    <span className="">
                      <input type="checkbox" className="merchant-checkbox" checked={isChecked}
                        onChange={(e) => setIsChecked(e.target.checked)} />
                    </span>
                  </div>
                  <div className="filtered">
                    <h6 className="sub-head">Link invoice</h6>
                    <span className="">
                      <input type="checkbox" className="merchant-checkbox" />
                    </span>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
        <div className="form-group d-flex mb-0 gap-2 mt-4">
          <Link href="/" className="borderbtn btn-block text-center text-decoration-none">Clear all</Link>
          <Button type="button" className="sitebtn btn-block" id="submitbtn">Apply filters</Button>
        </div>
      </div>
      <Userfooter />
    </div>
  );
};

export default merchantPage;