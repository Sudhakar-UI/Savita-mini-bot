"use client"
import React, { useState, useRef } from 'react'
import { Container, Button, Modal, ModalBody, ModalHeader, ModalTitle, ModalFooter } from 'react-bootstrap'
import { AccountIcon, CautionIcon, PhoneIcon, AccountCircleIcon } from '../components/Icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

export default function SetupUrAccount() {

    const [showPhoneModal, setShowPhoneModal] = useState(false);
    const pageRef = useRef(null);

    const handlePhoneModalClose = () => setShowPhoneModal(false);
    const handlePhoneModalShow = () => setShowPhoneModal(true);

    return (
        <>
            <div className='setupacc-page' ref={pageRef}>
                <Container>
                    <div className="setup-box-cont mt-4">

                        <div className='setup-acc-icon-box'>
                            <AccountCircleIcon size={65} />
                        </div>

                        <h2 className='sub-head mb-0'>Setup Your Account</h2>
                        <p className='mb-0'>It will take a couple of minutes.</p>
                    </div>

                    <div className="setup-form-cont mt-3">

                        {/* Step 1 */}
                        <div className="setup-step-item active">
                            <div className="setup-step-icon-container">
                                <div className="setup-step-icon">
                                    <PhoneIcon size={20} color='#fff' />
                                </div>
                                <div className="setup-step-line"></div>
                            </div>
                            <div className="setup-step-content">
                                <h3 className="setup-step-title">Phone Number</h3>
                                <p className='m-0'>No calls or messages</p>
                                <p className="setup-step-subtitle d-flex align-items-center">Share  <FontAwesomeIcon icon={faChevronRight} /></p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="setup-step-item pending">
                            <div className="setup-step-icon-container">
                                <div className="setup-step-icon">
                                    <AccountIcon size={22} color='#fff' />
                                </div>
                            </div>
                            <div className="setup-step-content">
                                <h3 className="setup-step-title">Personal Information</h3>
                                <p className="setup-step-subtitle">No documents required</p>
                            </div>
                        </div>

                    </div>

                    <div className="setup-acc-info mt-3">
                        <div>
                            <h6 className='setup-acc-head'>User requirements</h6>
                            <p className=''>At least 18 years old.
                                Not from <span>unsupported countries.</span>
                                Only one account us allowed in <span>@SavitaBot.</span></p>
                        </div>
                        <Link href="#0">
                            <FontAwesomeIcon icon={faChevronRight} />
                        </Link>
                    </div>

                    <Button className="setup-acc-btn mt-4" onClick={handlePhoneModalShow}>Share phone number</Button>

                </Container>
            </div>

            <Modal
                show={showPhoneModal}
                onHide={handlePhoneModalClose}
                className='share-phone-modal p-1'
                container={pageRef}
                centered
            >
                <ModalHeader closeButton>
                    <ModalTitle>Phone Number</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <p>Do you want to share your phone number with the bot? This can be useful for integration with other services.</p>
                    <p className='mt-3'><CautionIcon color='#ff0a0a' size={20} /> Warning! Never enter your Telegram login codes in mini apps</p>
                </ModalBody>
                <ModalFooter className='d-flex justify-content-end gap-3'>
                    <Button className='share-phone-btn' onClick={handlePhoneModalClose}>Cancel</Button>
                    <Button className='share-phone-btn' onClick={handlePhoneModalClose}>Share</Button>
                </ModalFooter>
            </Modal>


        </>
    )
}
