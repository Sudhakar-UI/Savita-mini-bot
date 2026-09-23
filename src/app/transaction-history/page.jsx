"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faChevronRight, faChevronDown, faCircleExclamation, faCopy } from "@fortawesome/free-solid-svg-icons";
import { BookMarkCircleIcon, RecieveIcon, SendIcon, SwapIcon, TransReportIcon, DiscountIcon, ScannerIcon } from "../components/Icons";
import Link from "next/link";
import { Container, Form, Nav, Tab, InputGroup, Alert, Badge, Image, Row, Col } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Pagination from "react-bootstrap/Pagination";


import { useTheme } from "../context/ThemeContext";

const addtoken = () => {

  const { isNightMode } = useTheme();
  const [currentPage, setCurrentPage] = useState(1);





  const [tradehistory, setTradehistory] = useState(true);
  const [deposithistory, setDeposithistory] = useState(false);
  const [withdrawhistory, setWithdrawhistory] = useState(false);
  const selectedHistory = tradehistory
    ? "tradehistory"
    : deposithistory
      ? "deposithistory"
      : "withdrawhistory";

  const handleHistoryChange = (historyType) => {
    setTradehistory(historyType === "tradehistory");
    setDeposithistory(historyType === "deposithistory");
    setWithdrawhistory(historyType === "withdrawhistory");
  };

  const [showFilter, setShowFilter] = useState(false);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);


  const tradeHistoryData = [
    {
      date: "2025-12-30 06:34:00",
      price: "87439.80000000",
      amount: "0.00000000",
      remaining: "87439.80000000",
      completed: "0.00000000",
      cancelled: "87439.80000000",
      totalPrice: "498.40686000",
      tradeFee: "0.00005700",
      status: "Completed",
      statusClass: "tt-complete",
    },
    {
      date: "2025-12-30 06:34:00",
      price: "87439.80000000",
      amount: "0.00000000",
      remaining: "87439.80000000",
      completed: "0.00000000",
      cancelled: "87439.80000000",
      totalPrice: "498.40686000",
      tradeFee: "0.00005700",
      status: "Pending",
      statusClass: "tt-pending",
    },
    {
      date: "2025-12-30 06:34:00",
      price: "87439.80000000",
      amount: "0.00000000",
      remaining: "87439.80000000",
      completed: "0.00000000",
      cancelled: "87439.80000000",
      totalPrice: "498.40686000",
      tradeFee: "0.00005700",
      status: "Rejected",
      statusClass: "tt-reject",
    },

    // Page 2 data
    {
      date: "2025-12-29 05:22:10",
      price: "87250.50000000",
      amount: "0.00200000",
      remaining: "0.00100000",
      completed: "0.00100000",
      cancelled: "0.00000000",
      totalPrice: "174.50100000",
      tradeFee: "0.00004500",
      status: "Completed",
      statusClass: "tt-complete",
    },
    {
      date: "2025-12-29 04:15:32",
      price: "87120.20000000",
      amount: "0.00300000",
      remaining: "0.00300000",
      completed: "0.00000000",
      cancelled: "0.00000000",
      totalPrice: "261.36060000",
      tradeFee: "0.00003000",
      status: "Pending",
      statusClass: "tt-pending",
    },
    {
      date: "2025-12-28 08:45:12",
      price: "86980.10000000",
      amount: "0.00150000",
      remaining: "0.00000000",
      completed: "0.00150000",
      cancelled: "0.00000000",
      totalPrice: "130.47015000",
      tradeFee: "0.00002500",
      status: "Completed",
      statusClass: "tt-complete",
    },

    // Page 3 data
    {
      date: "2025-12-27 10:20:45",
      price: "86500.80000000",
      amount: "0.00400000",
      remaining: "0.00400000",
      completed: "0.00000000",
      cancelled: "0.00000000",
      totalPrice: "346.00320000",
      tradeFee: "0.00004000",
      status: "Pending",
      statusClass: "tt-pending",
    },
    {
      date: "2025-12-26 12:10:22",
      price: "86200.40000000",
      amount: "0.00250000",
      remaining: "0.00000000",
      completed: "0.00250000",
      cancelled: "0.00000000",
      totalPrice: "215.50100000",
      tradeFee: "0.00003500",
      status: "Completed",
      statusClass: "tt-complete",
    },
    {
      date: "2025-12-25 15:32:18",
      price: "85800.60000000",
      amount: "0.00100000",
      remaining: "0.00100000",
      completed: "0.00000000",
      cancelled: "0.00100000",
      totalPrice: "85.80060000",
      tradeFee: "0.00002000",
      status: "Rejected",
      statusClass: "tt-reject",
    },

    // Page 4 data
    {
      date: "2025-12-24 09:15:30",
      price: "85500.30000000",
      amount: "0.00200000",
      remaining: "0.00000000",
      completed: "0.00200000",
      cancelled: "0.00000000",
      totalPrice: "171.00060000",
      tradeFee: "0.00002500",
      status: "Completed",
      statusClass: "tt-complete",
    },
    {
      date: "2025-12-23 11:45:20",
      price: "85200.90000000",
      amount: "0.00120000",
      remaining: "0.00120000",
      completed: "0.00000000",
      cancelled: "0.00000000",
      totalPrice: "102.24108000",
      tradeFee: "0.00001800",
      status: "Pending",
      statusClass: "tt-pending",
    },
    {
      date: "2025-12-22 14:20:15",
      price: "84900.70000000",
      amount: "0.00180000",
      remaining: "0.00000000",
      completed: "0.00180000",
      cancelled: "0.00000000",
      totalPrice: "152.82126000",
      tradeFee: "0.00002200",
      status: "Completed",
      statusClass: "tt-complete",
    },
  ];

  const recordsPerPage = 2;

  // Total pages
  const totalPages = Math.ceil(
    tradeHistoryData.length / recordsPerPage
  );

  // Current page data
  const startIndex =
    (currentPage - 1) * recordsPerPage;

  const currentRecords = tradeHistoryData.slice(
    startIndex,
    startIndex + recordsPerPage
  );

  return (
    <>
      <div className='history-page historyall-page trade-his-page'>
        <Container>
          <h2 className="sub-head txt-gry">Transaction History</h2>

          <div className="mb-4">
            <div className="his-dropdwn mb-3">
              <div>
                <Form className="siteformbg">
                  <Form.Group className="form-group mt-1">
                    <Form.Select
                      className="form-control"
                      value={selectedHistory}
                      onChange={(e) => handleHistoryChange(e.target.value)}
                    >
                      <option value="tradehistory">Trade History</option>
                      <option value="deposithistory">Deposit History</option>
                      <option value="withdrawhistory">Withdraw History</option>
                    </Form.Select>
                  </Form.Group>
                </Form>
              </div>
              <div className="hisfilter-wrapper">
                <Dropdown show={showFilter}
                  onToggle={(nextShow) => setShowFilter(nextShow)}
                  align="end"
                >
                  <Dropdown.Toggle
                    as="div"
                    className="hisfilter-toggle"
                  >
                    <Image
                      src={
                        isNightMode
                          ? "/assets/images/filter-dark.svg"
                          : "/assets/images/filter-icon.svg"
                      }
                      alt=""
                      className="hisall-icons"
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="hisfilter-menu">

                    <div className="hisfilter-header">
                      <div>
                        <h5>Filter</h5>
                      </div>
                      <div>
                        <span
                          className="hisfilter-close"
                          onClick={() => setShowFilter(false)}
                        >
                          &times;
                        </span>
                      </div>

                    </div>
                    <DatePicker
                      selected={fromDate}
                      onChange={(date) => setFromDate(date)}
                      placeholderText="From Date"
                      dateFormat="dd/MM/yyyy"
                      className="form-control hisfilter-input"
                      wrapperClassName="datepicker-wrapper"
                      isClearable
                    />

                    <DatePicker
                      selected={toDate}
                      onChange={(date) => setToDate(date)}
                      placeholderText="To Date"
                      dateFormat="dd/MM/yyyy"
                      className="form-control hisfilter-input mt-3"
                      wrapperClassName="datepicker-wrapper mt-3"
                      minDate={fromDate}
                      isClearable
                    />
                    <Form.Select className="hisfilter-input mt-3">
                      <option>All Status</option>
                      <option>Completed</option>
                      <option>Pending</option>
                      <option>Failed</option>
                    </Form.Select>

                    <Form.Select className="hisfilter-input mt-3">
                      <option>All Coin</option>
                      <option>BTC</option>
                      <option>ETH</option>
                      <option>USDT</option>
                    </Form.Select>

                    <div className="hisfilter-btns">
                      <Button className="hisfilter-reset">
                        Reset
                      </Button>

                      <Button className="hisfilter-search">
                        Search
                      </Button>
                    </div>

                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            {tradehistory && (
              <>

                <div
                  className="sitetable table-responsive-stack"
                  id="tradehistory-table"
                  data-history-type="tradehistory"
                >
                  {currentRecords.map((trade, index) => (
                    <div
                      className="history-table"
                      key={index}
                    >
                      {/* Date & Price */}
                      <div className="history-table-maindiv">
                        <div>
                          <p>Date & Time</p>
                          <h4>{trade.date}</h4>
                        </div>

                        <div>
                          <p className="text-end">
                            Price (USDT)
                          </p>
                          <h4 className="text-end">
                            {trade.price}
                          </h4>
                        </div>
                      </div>

                      {/* Amount & Remaining */}
                      <div className="history-table-maindiv">
                        <div>
                          <p>Amount (BTC)</p>
                          <h4>{trade.amount}</h4>
                        </div>

                        <div>
                          <p className="text-end">
                            Remaining (BTC)
                          </p>
                          <h4 className="text-end">
                            {trade.remaining}
                          </h4>
                        </div>
                      </div>

                      {/* Completed & Cancelled */}
                      <div className="history-table-maindiv">
                        <div>
                          <p>Completed (BTC)</p>
                          <h4>{trade.completed}</h4>
                        </div>

                        <div>
                          <p className="text-end">
                            Cancelled (BTC)
                          </p>
                          <h4 className="text-end">
                            {trade.cancelled}
                          </h4>
                        </div>
                      </div>

                      {/* Total Price & Trade Fee */}
                      <div className="history-table-maindiv">
                        <div>
                          <p>Total Price(USDT)</p>
                          <h4>{trade.totalPrice}</h4>
                        </div>

                        <div>
                          <p className="text-end">
                            Trade Fee (USDT)
                          </p>
                          <h4 className="text-end">
                            {trade.tradeFee}
                          </h4>
                        </div>
                      </div>

                      {/* Trade Fee & Status */}
                      <div className="history-table-maindiv">
                        <div>
                          <p>Trade Fee (USDT)</p>
                          <h4>{trade.tradeFee}</h4>
                        </div>

                        <div>
                          <p className="text-end">
                            Status
                          </p>

                          <h4
                            className={`text-end ${trade.statusClass}`}
                          >
                            {trade.status}
                          </h4>
                        </div>
                      </div>

                      {/* Action */}
                      <div className="history-table-maindiv last-x">
                        <div>
                          <p>Action</p>
                        </div>

                        <div>
                          <button
                            type="button"
                            className="sitebtn sitebtn-sm"
                          >
                            View
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>


                {/* Pagination */}
                <div className="trade-pagination">
                  <Pagination>
                    <Pagination.Prev
                      disabled={currentPage === 1}
                      onClick={() =>
                        setCurrentPage((prev) => prev - 1)
                      }
                    />

                    {Array.from(
                      { length: totalPages },
                      (_, index) => (
                        <Pagination.Item
                          key={index + 1}
                          active={
                            currentPage === index + 1
                          }
                          onClick={() =>
                            setCurrentPage(index + 1)
                          }
                        >
                          {index + 1}
                        </Pagination.Item>
                      )
                    )}

                    <Pagination.Next
                      disabled={
                        currentPage === totalPages
                      }
                      onClick={() =>
                        setCurrentPage((prev) => prev + 1)
                      }
                    />
                  </Pagination>
                </div>
              </>
            )}
            {deposithistory && (
              <>
                <div
                  className="sitetable table-responsive-stack"
                  id="deposithistory-table"
                  data-history-type="deposithistory"
                >
                  {currentRecords.map((deposit, index) => (
                    <div
                      className="history-table"
                      key={index}
                    >
                      {/* Date & Sender */}
                      <div className="history-table-maindiv">
                        <div>
                          <p>Date & Time</p>
                          <h4>{deposit.date}</h4>
                        </div>

                        <div>
                          <p className="text-end">
                            Sender
                          </p>
                          <h4 className="text-end">
                            {deposit.sender}
                          </h4>
                        </div>
                      </div>

                      {/* Txn ID & Receiver */}
                      <div className="history-table-maindiv">
                        <div>
                          <p>Txn Id</p>
                          <h4>
                            {deposit.txnId}
                            <FontAwesomeIcon
                              icon={faCopy}
                              className="ms-2"
                            />
                          </h4>
                        </div>

                        <div>
                          <p className="text-end">
                            Receiver
                          </p>
                          <h4 className="text-end">
                            {deposit.receiver}
                            <FontAwesomeIcon
                              icon={faCopy}
                              className="ms-2"
                            />
                          </h4>
                        </div>
                      </div>

                      {/* Amount & Fee */}
                      <div className="history-table-maindiv">
                        <div>
                          <p>Amount (BTC)</p>
                          <h4>{deposit.amount}</h4>
                        </div>

                        <div>
                          <p className="text-end">
                            Fee
                          </p>
                          <h4 className="text-end">
                            {deposit.fee}
                          </h4>
                        </div>
                      </div>

                      {/* Total & Status */}
                      <div className="history-table-maindiv">
                        <div>
                          <p>Total</p>
                          <h4>{deposit.total}</h4>
                        </div>

                        <div>
                          <p className="text-end">
                            Status
                          </p>
                          <h4 className="text-end tt-complete">
                            {deposit.status}
                          </h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="trade-pagination">
                    <Pagination>
                      <Pagination.Prev
                        disabled={currentPage === 1}
                        onClick={() =>
                          setCurrentPage(
                            (prev) => prev - 1
                          )
                        }
                      />

                      {Array.from(
                        { length: totalPages },
                        (_, index) => {
                          const page = index + 1;

                          return (
                            <Pagination.Item
                              key={page}
                              active={
                                currentPage === page
                              }
                              onClick={() =>
                                setCurrentPage(page)
                              }
                            >
                              {page}
                            </Pagination.Item>
                          );
                        }
                      )}

                      <Pagination.Next
                        disabled={
                          currentPage === totalPages
                        }
                        onClick={() =>
                          setCurrentPage(
                            (prev) => prev + 1
                          )
                        }
                      />
                    </Pagination>
                  </div>
                )}
              </>
            )}


            {withdrawhistory && (
              <>

                <div
                  className="sitetable table-responsive-stack"
                  id="withdrawhistory-table"
                  data-history-type="withdrawhistory"
                >
                  {currentRecords.map((withdraw, index) => (
                    <div
                      className="history-table"
                      key={index}
                    >
                      {/* Date & Txn ID */}
                      <div className="history-table-maindiv">
                        <div>
                          <p>Date & Time</p>
                          <h4>{withdraw.date}</h4>
                        </div>

                        <div>
                          <p className="text-end">
                            Txn Id
                          </p>

                          <h4 className="text-end">
                            {withdraw.txnId}

                            <FontAwesomeIcon
                              icon={faCopy}
                              className="ms-2"
                            />
                          </h4>
                        </div>
                      </div>

                      {/* Sender & Receiver */}
                      <div className="history-table-maindiv">
                        <div>
                          <p>Sender</p>

                          <h4>
                            {withdraw.sender}

                            <FontAwesomeIcon
                              icon={faCopy}
                              className="ms-2"
                            />
                          </h4>
                        </div>

                        <div>
                          <p className="text-end">
                            Receiver
                          </p>

                          <h4 className="text-end">
                            {withdraw.receiver}

                            <FontAwesomeIcon
                              icon={faCopy}
                              className="ms-2"
                            />
                          </h4>
                        </div>
                      </div>

                      {/* Amount & Admin Fee */}
                      <div className="history-table-maindiv">
                        <div>
                          <p>Amount (BTC)</p>

                          <h4>
                            {withdraw.amount}
                          </h4>
                        </div>

                        <div>
                          <p className="text-end">
                            Admin Fee
                          </p>

                          <h4 className="text-end">
                            {withdraw.adminFee}
                          </h4>
                        </div>
                      </div>

                      {/* Status */}
                      <div className="history-table-maindiv">
                        <div>
                          <p>Status</p>
                        </div>

                        <div>
                          <h4
                            className={`text-end ${withdraw.statusClass}`}
                          >
                            {withdraw.status}
                          </h4>
                        </div>
                      </div>

                      {/* Action */}
                      <div className="history-table-maindiv last-x">
                        <div>
                          <p>Action</p>
                        </div>

                        <div>
                          <button
                            type="button"
                            className="sitebtn sitebtn-sm"
                          >
                            View
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>


                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="trade-pagination">
                    <Pagination>
                      {/* Previous */}
                      <Pagination.Prev
                        disabled={currentPage === 1}
                        onClick={() =>
                          setCurrentPage(
                            (prev) => prev - 1
                          )
                        }
                      />

                      {/* Page Numbers */}
                      {Array.from(
                        { length: totalPages },
                        (_, index) => {
                          const page = index + 1;

                          return (
                            <Pagination.Item
                              key={page}
                              active={
                                currentPage === page
                              }
                              onClick={() =>
                                setCurrentPage(page)
                              }
                            >
                              {page}
                            </Pagination.Item>
                          );
                        }
                      )}

                      {/* Next */}
                      <Pagination.Next
                        disabled={
                          currentPage === totalPages
                        }
                        onClick={() =>
                          setCurrentPage(
                            (prev) => prev + 1
                          )
                        }
                      />
                    </Pagination>
                  </div>
                )}
              </>
            )}


          </div>
        </Container >
      </div >
    </>
  )
}

export default addtoken