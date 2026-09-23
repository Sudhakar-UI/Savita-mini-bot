"use client";
import React, { useState } from 'react'
import { Button, Container, Form, InputGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from '../context/ThemeContext';
import Userfooter from '../components/Userfooter';



export default function Verification() {
    const { isNightMode } = useTheme();
    const [alertDismissed, setAlertDismissed] = useState({});

    const toggleAlert = (key) => {
        setAlertDismissed(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    return (
        <div className='verification-page verification-two-page'>
            <Container>
                    <span className="sub-head txt-gry ">KYC LEVEL 2</span>
                <div className="verification-section mb-5 mt-2">
                    <Form className="siteformbg basic-info-form">

                        <Form.Group className="form-group mb-0">
                            <Form.Label>
                                Account Number
                            </Form.Label>
                            <Form.Control placeholder="Your Number"></Form.Control>

                        </Form.Group>
                        <Form.Group className="form-group mb-0">
                            <Form.Label>
                                Account Name
                            </Form.Label>
                            <Form.Control placeholder="Your Name"></Form.Control>

                        </Form.Group>
                        <Form.Group className="form-group mb-0">
                            <Form.Label>
                                Bank Name
                            </Form.Label>
                            <Form.Control placeholder="Your Bank Name"></Form.Control>

                        </Form.Group>
                        <Form.Group className="form-group mb-0">
                            <Form.Label>
                                Phone Number
                            </Form.Label>
                            <Form.Control placeholder="Your Phone Number"></Form.Control>

                        </Form.Group>
                        <Form.Group className="form-group mb-0">
                            <Form.Label>
                                Email
                            </Form.Label>
                            <Form.Control placeholder="Your Email"></Form.Control>

                        </Form.Group>



                        <Button className="item-button action-btn">Submit</Button>



                    </Form>
                </div>
            </Container>
            {/* <Userfooter /> */}
        </div>
    )
}
