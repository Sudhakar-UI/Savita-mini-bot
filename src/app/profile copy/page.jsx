"use client";

import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import UploadForm from './UploadForm';

export default function ProfilePage() {
    return (
        <div className="profile-page">
            <Container>
                <div className="profile-card">
                    {/* <h2 className="profile-title">Personal Info</h2> */}
                    <h2 className="heading txt-gry">Personal Info</h2>

                    <div className=' d-flex align-items-center justify-content-between flex-wrap'>
                        <div className="profile-header-row">
                            <div className="profile-avatar-wrap">
                                <div className="profile-avatar">
                                    <span>U</span>
                                </div>
                            </div>


                            <div className="profile-header-actions">
                                <div>
                                    <p>userone <span className='tick-iocn'><FontAwesomeIcon icon={faCheckCircle} /></span></p>
                                    <p className="profile-note">
                                        update your name and manage your account.
                                    </p>
                                </div>

                                <Button className="sitebtn sitebtn-w-50 "><FontAwesomeIcon icon={faPenToSquare} /></Button>
                                <UploadForm />
                            </div>

                        </div>



                        <div>
                            {/* <div className="profile-info-row mt-2">
                        <span>Username : </span>
                        <strong>userone</strong>
                    </div> */}

                            {/* <div className="profile-info-row">
                        <span>Email : </span>
                        <strong>teddycup@mailinator.com</strong>
                        <span className="verified-badge">Verified</span>
                    </div> */}
                        </div>
                    </div>

                    <h3 className="profile-section-title">Basic Informations</h3>

                    <Form className="profile-form siteformbg ">
                        <Form.Group className="profile-form-group">
                            <Form.Label>Full Name <span className="required-star">*</span></Form.Label>
                            <Form.Control type="text" defaultValue="userone" />
                        </Form.Group>

                        <Form.Group className="profile-form-group">
                            <Form.Label>Email <span className="required-star">*</span></Form.Label>
                            <Form.Control type="email" defaultValue="teddycup@mailinator.com" />
                        </Form.Group>

                        <Form.Group className="profile-form-group">
                            <Form.Label>Phone <span className="required-star">*</span></Form.Label>
                            <Form.Control type="text" defaultValue="9782757716" />
                        </Form.Group>

                        <Form.Group className="profile-form-group">
                            <Form.Label>Country <span className="required-star">*</span></Form.Label>
                            <Form.Select defaultValue="Nigeria">
                                <option>Nigeria</option>
                                <option>India</option>
                                <option>United States</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="support-form-group mb-0">
                            <Form.Label className="support-field-label">Address

                            </Form.Label>
                            <Form.Control as="textarea" rows={5} className="support-input support-textarea" />
                        </Form.Group>

                        <Button className="sitebtn profile-main-btn mt-3">Submit</Button>
                    </Form>
                </div>
            </Container>
        </div>
    );
}
