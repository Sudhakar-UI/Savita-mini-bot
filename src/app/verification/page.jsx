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
        <div className='verification-page'>
            <Container>
                <span className="sub-head txt-gry ">KYC LEVEL 1</span>
                <div className="verification-section mb-5 mt-2">
                    <Form className="siteformbg basic-info-form">

                        <Form.Group className="form-group mb-0">
                            <Form.Label>
                                Your Name
                            </Form.Label>
                            <Form.Control placeholder="Your Name"></Form.Control>

                        </Form.Group>
                        <Form.Group className="mb-0">
                            <Form.Label className="dob-label">
                                Date Of Birth
                            </Form.Label>
                            <InputGroup className="dob-input-group">
                                <Form.Control
                                    type="date"
                                    className="dob-input"
                                    defaultValue="2008-08-14"
                                />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="form-group">
                            <Form.Label>
                                Country
                            </Form.Label>
                            <Form.Select
                                className="form-control"
                            >
                                <option value="spothistory">Country</option>

                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="form-group mb-0">
                            <Form.Label>
                                City
                            </Form.Label>
                            <Form.Control placeholder="Your City"></Form.Control>

                        </Form.Group>
                        <Form.Group className="form-group">
                            <Form.Label>
                                Nationality
                            </Form.Label>
                            <Form.Select
                                className="form-control"
                            >
                                <option value="spothistory">Country</option>

                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="support-form-group mb-0">
                            <Form.Label className="support-field-label">Address

                            </Form.Label>
                            <Form.Control as="textarea" rows={5} className="support-input support-textarea" />
                        </Form.Group>
                        <Form.Group className="form-group">
                            <Form.Label>
                                ID Type
                            </Form.Label>
                            <Form.Select
                                className="form-control"
                            >
                                <option value="spothistory">Country</option>

                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="form-group mb-0">
                            <Form.Label>
                                ID Document / NIN Number
                            </Form.Label>
                            <Form.Control placeholder="Your NIN Number"></Form.Control>
                        </Form.Group>
                        <Button className="item-button action-btn">Submit</Button>



                    </Form>
                </div>
            </Container>
            {/* <Userfooter /> */}
        </div>
    )
}
