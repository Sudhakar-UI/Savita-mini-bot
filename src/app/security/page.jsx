"use client";

import React, { useState } from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import { LockIcon, PowerIcon, MailIcon, VerifiedIcon } from '../components/Icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faTimes, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'

export default function Security() {
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleOpenDrawer = () => setOpenDrawer(true);
    const handleCloseDrawer = () => setOpenDrawer(false);

    return (
        <>
            <div className='security-page '>
                <Container>
                    <h2 className="sub-head txt-gry mb-3">security</h2>

                    <div className='security-cont'>
                        {/* <Link href="/backup-email" className='security-link'>
                            <div>
                                <MailIcon color='#fff' size={65} />
                                <h6 className='subhead mb-0'>Back up Email</h6>
                            </div>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </Link> */}
                        <Link href="/mpin" className='security-link'>
                            <div>
                                <LockIcon color='#fff' size='20' />
                                <h6 className='subhead mb-0'>MPIN</h6>
                            </div>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </Link>
                        <div className='security-link' onClick={handleOpenDrawer}>
                            <div>
                                <VerifiedIcon color='#fff' size='20' />
                                <h6 className='subhead mb-0'>2F verification</h6>
                            </div>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                        <Link href="/terminate" className='terminate-link'>
                            <div>
                                <PowerIcon color='#fff' size='18' />
                                <h6 className='subhead mb-0'>Terminate All Sessions</h6>
                            </div>
                        </Link>
                    </div>
                </Container>
            </div>

            <div className={`phone-draw-overlay ${openDrawer ? 'open' : ''}`} onClick={handleCloseDrawer}></div>
            <div className={`phone-draw ${openDrawer ? 'open' : ''}`}>
                <div className='setup-passcode-page'>
                    <div className='px-2'>
                        <div className="phone-draw-handle"></div>
                        <div className="text-center">
                            <div className="phone-draw-close">
                                <Button onClick={handleCloseDrawer} className="phone-draw-close-btn">
                                    <FontAwesomeIcon icon={faTimes} />
                                </Button>
                            </div>
                        </div>

                        <div className="passcode-container mt-4">
                            <h2 className="heading txt-gry">2F Verification</h2>
                            <div className=' d-flex  justify-content-start flex-column gap-4'>
                                <div className=' d-flex align-items-center justify-content-between'>
                                    <h2 className='sub-head txt-gry mb-0'>Google Authentication</h2>
                                    <Link href="/googleauth" className='btn sitebtn no-margin-x'>Enable</Link>
                                </div>
                                <div className=' d-flex align-items-center  justify-content-between'>
                                    <h2 className='sub-head txt-gry mb-0'>
                                        Email Verification</h2>
                                    <Link href="/otp-verification" className='btn sitebtn no-margin-x'>Enable</Link>
                                </div>
                            </div>
                            <div className="mt-3">
                                <Button className="sitebtn w-100" onClick={handleCloseDrawer}>Update</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className={`phone-draw-overlay ${openDrawer ? 'open' : ''}`} onClick={handleCloseDrawer}></div>
            <div className={`phone-draw ${openDrawer ? 'open' : ''}`}>
                <div className='setup-passcode-page'>
                    <div className='px-2'>
                        <div className="phone-draw-handle"></div>
                        <div className="text-center">
                            <div className="phone-draw-close">
                                <Button onClick={handleCloseDrawer} className="phone-draw-close-btn">
                                    <FontAwesomeIcon icon={faTimes} />
                                </Button>
                            </div>
                        </div>

                        <div className="passcode-container mt-4">
                            <h2 className="heading txt-gry">2F Verification</h2>
                            <Form className="siteformbg">
                                <div className="supportsearch p-0">
                                    <Form.Group className="form-group mb-0">
                                        <Form.Label className="text-start d-block">Email</Form.Label>
                                        <div className="input-wrapper">
                                            <Form.Control
                                                type="email"
                                                defaultValue="teddycup@mailinator.com"
                                                className="custom-input"
                                            />
                                        </div>
                                    </Form.Group>
                                </div>
                            </Form>
                            <div className="mt-3">
                                <Button className="sitebtn w-100" onClick={handleCloseDrawer}>Update</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}
