"use client";
import React, { useState, useRef } from 'react'
import { Image, Container, Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCopy, faDownload } from "@fortawesome/free-solid-svg-icons";
import { AccountIcon, CautionIcon, PhoneIcon, AccountCircleIcon } from '../components/Icons'

import Link from "next/link";

const addtoken = () => {
    const [showPhoneModal, setShowPhoneModal] = useState(false);
    const pageRef = useRef(null);

    const handlePhoneModalClose = () => setShowPhoneModal(false);
    const handlePhoneModalShow = () => setShowPhoneModal(true);

    return (
        <>
            <div className='deposit-page'>
                <Container>
                    <h2 className="sub-head txt-gry mb-3">Google Authentication</h2>
                    <div className=" mt-3">


                        <div className="setup-step-item pending">

                            <div className="setup-step-content">
                                <Form className="siteformbg">
                                    <Form.Group className="form-group mt-1">
                                        <p>Install google autheticator app in your mobile and scan QR Code (or) If you are unable to scan the QR code, please enter this code manually into the app</p>
                                        <InputGroup className="withdraw-input align-items-center gap-2 mt-2">
                                            <Form.Control
                                                type="text"
                                                placeholder="DFQQOKH4MUUFKPWP"
                                            />

                                            <span className="copy-icon">
                                                <FontAwesomeIcon icon={faCopy} />
                                            </span>
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group className="form-group mt-2">
                                        <Form.Label>
                                            Enter your Code
                                        </Form.Label>
                                        <Form.Control
                                            type="text"

                                        />
                                    </Form.Group>
                                </Form>
                                <div className='d-flex align-items-center flex-column gap-3'>
                                    <Image
                                        src="/assets/images/dep-qr.png"
                                        width={60}
                                        height={60}
                                        alt="swap-icon"
                                        className="dep-qr-img"
                                    />

                                </div>
                            </div>
                        </div>



                    </div>


                    <Button className="setup-acc-btn mt-4">Submit</Button>

                </Container>
            </div>
        </>
    )
}

export default addtoken