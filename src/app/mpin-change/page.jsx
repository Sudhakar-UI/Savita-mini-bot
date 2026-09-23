"use client";
import React, { useState, useRef } from 'react'
import { Image, Container, Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCopy, faDownload, faTimes } from "@fortawesome/free-solid-svg-icons";
import { AccountIcon, CautionIcon, PhoneIcon, AccountCircleIcon } from '../components/Icons'
import { useTheme } from "../context/ThemeContext";


import Link from "next/link";

const addtoken = () => {
    
    const [showPhoneModal, setShowPhoneModal] = useState(false);
    const pageRef = useRef(null);

    const handlePhoneModalClose = () => setShowPhoneModal(false);
    const handlePhoneModalShow = () => setShowPhoneModal(true);
    const { isNightMode } = useTheme();
    const [showModal, setShowModal] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleOpenDrawer = () => setOpenDrawer(true);
    const handleCloseDrawer = () => setOpenDrawer(false);

    return (
        <>
            <div className='deposit-page'>
                <Container>
                    <h2 className="sub-head txt-gry mb-3">Change MPIN</h2>
                    <div className=" mt-3">


                        <div className="setup-step-item pending">

                            <div className="setup-step-content">
                                <Form className="siteformbg">
                                    <Form.Group className="form-group mt-2">
                                        <Form.Label>
                                            Old MPIN <span className='t-red'>*</span>
                                        </Form.Label>
                                        <Form.Control
                                            type="text"

                                        />
                                    </Form.Group>
                                    <Form.Group className="form-group mt-2">
                                        <Form.Label>
                                            New MPIN <span className='t-red'>*</span>
                                        </Form.Label>
                                        <Form.Control
                                            type="text"

                                        />
                                    </Form.Group>
                                    <Form.Group className="form-group mt-2">
                                        <Form.Label>
                                            Confirm MPIN <span className='t-red'>*</span>
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                        />
                                    </Form.Group>
                                </Form>
                                <p className="mt-2"> <Link href="/forgot-mpin" className="forgot-mpin-link"> Forgot MPIN </Link> </p>
                                {/* <p className="mt-2">
                                    <span
                                        className="forgot-mpin-link"
                                        onClick={() => handleOpenDrawer(true)}
                                    >
                                        Forgot MPIN
                                    </span>
                                </p> */}

                            </div>
                        </div>
                    </div>
                    <Button className="setup-acc-btn mt-4">Submit</Button>
                </Container>
            </div>
            <div className={`phone-draw-overlay ${openDrawer ? 'open' : ''}`} onClick={handleCloseDrawer}></div>
            <div className={`phone-draw ${openDrawer ? 'open' : ''}`}>
                <div className="phone-draw-handle"></div>
                <div className="">
                    <div className="phone-draw-close">
                        <Button onClick={handleCloseDrawer} className="phone-draw-close-btn">
                            <FontAwesomeIcon icon={faTimes} />
                        </Button>
                    </div>
                    
                    <h2 className="heading">MPIN Authentication</h2>
                    <Form className="siteformbg">
                        <Form.Group className="form-group mt-2">
                            <Form.Label>
                                Old MPIN <span className='t-red'>*</span>
                            </Form.Label>
                            <Form.Control
                                type="text"

                            />
                        </Form.Group>
                    </Form>
                </div>

                <Link href="/account-passcode">
                    <Button className="sitebtn">Continue</Button>
                </Link>
            </div>
        </>
    )
}

export default addtoken