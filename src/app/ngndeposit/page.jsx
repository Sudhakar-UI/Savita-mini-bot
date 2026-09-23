"use client";
import React, { useState, useRef } from 'react'
import { Image, Container, Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCopy, faDownload, faCloudArrowUp, faXmark } from "@fortawesome/free-solid-svg-icons";
import { AccountIcon, CautionIcon, PhoneIcon, AccountCircleIcon } from '../components/Icons'

import Link from "next/link";

const addtoken = () => {
    const [showPhoneModal, setShowPhoneModal] = useState(false);
    const [selectedImageName, setSelectedImageName] = useState('');
    const [selectedImageUrl, setSelectedImageUrl] = useState('');
    const imageInputRef = useRef(null);
    const pageRef = useRef(null);
    const alertType = "danger";
    const alertMessage = "Deposit submitted successfully.";

    const handlePhoneModalClose = () => setShowPhoneModal(false);
    const handlePhoneModalShow = () => setShowPhoneModal(true);
    const handleImageChange = (event) => {
        const file = event.target.files?.[0];

        if (!file) {
            return;
        }

        if (selectedImageUrl) {
            URL.revokeObjectURL(selectedImageUrl);
        }

        setSelectedImageName(file?.name || '');
        setSelectedImageUrl(URL.createObjectURL(file));
    };

    const handleImageRemove = () => {
        if (selectedImageUrl) {
            URL.revokeObjectURL(selectedImageUrl);
        }

        setSelectedImageName('');
        setSelectedImageUrl('');

        if (imageInputRef.current) {
            imageInputRef.current.value = '';
        }
    };

    return (
        <>
            <div className='deposit-page ngndeposit-page merchantPage'>
                <Container>
                    <h2 className="sub-head txt-gry">NGN Deposit</h2>

                    <div className=" mt-3">
                        <span className='span-red'>Minimum Deposit Limit : 1000 NGN</span>
                        <div className="setup-step-item pending">
                            <div className="setup-step-content">
                                <p>P2P Merger (You're Merged with this Trader By Savita to Purchase USDT, The Moment Payment is Confirmed this Trader will Release USDT to you)</p>
                                <div className="mer-set-bot mt-3 p-2">
                                    <div href="/" className="set-bot-y no-border mt-2">
                                        <div className="d-flex align-items-center">
                                            <Image src="/assets/images/r.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
                                            <div className="d-flex flex-column">
                                                <span className="sub-head">Roshini</span>
                                            </div>
                                        </div>

                                    </div>
                                    <div href="/" className="set-bot-y">
                                        <div className="d-flex align-items-center">
                                            <div className="d-flex flex-column">
                                                <p>Bank Name</p>
                                                <span className="sub-head">Test</span>
                                            </div>
                                        </div>

                                        <div className="d-flex align-items-center">
                                            <div className="d-flex flex-column">
                                                <p>Account Type</p>
                                                <span className="sub-head text-end">Saving</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div href="/" className="set-bot-y no-border">
                                        <div className="d-flex align-items-center">
                                            <div className="d-flex flex-column">
                                                <p>Account No</p>
                                                <span className="sub-head">12345678978978</span>
                                            </div>
                                        </div>

                                        <div className="d-flex align-items-center">
                                            <div className="d-flex flex-column">
                                                <p className="text-end">Date & Time</p>
                                                <span className="sub-head text-end">2022-09-01 13:16:47</span>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                {/* <div className="custom-alert">
                                    <span className="alert-icon">!</span>
                                    <span className="alert-text">
                                        Please make sure all the details are correct before submitting.
                                    </span>
                                </div> */}
                                <div className={`deposit-alert-box deposit-alert-${alertType}`}>
                                    <span className="deposit-alert-icon">
                                        {alertType === "success" && "✓"}
                                        {alertType === "warning" && "!"}
                                        {alertType === "danger" && (
                                            <FontAwesomeIcon
                                                icon={faXmark}
                                                className="deposit-alert-danger-icon"
                                            />
                                        )}
                                    </span>

                                    <span className="deposit-alert-message">
                                        {alertMessage}
                                    </span>

                                    <button className="deposit-alert-close">×</button>
                                </div>
                            </div>
                        </div>
                        {/* Step 3 */}

                        <div className="setup-step-item pending">
                            <div className="setup-step-content">
                                <Form className="siteformbg">
                                    <Form.Group className="mb-2 mx-4">
                                        <Form.Check
                                            type="checkbox"
                                            id="confirm-checkbox"
                                            label="I confirm that the above details are correct"
                                        />
                                    </Form.Group>
                                    <Form.Group className="form-group mt-1">
                                        <Form.Label>
                                            Deposit Amount (NGN)
                                        </Form.Label>
                                        <Form.Control type="text" />

                                    </Form.Group>

                                    <Form.Group className="form-group mt-1">
                                        <Form.Label>
                                            Typing USDT Amount
                                        </Form.Label>
                                        <Form.Control type="text" />

                                    </Form.Group>
                                    <Form.Group className="form-group d-flex flex-column gap-2  mt-2">
                                        {/* <Form.Label>Upload Image</Form.Label> */}

                                        <div className="upload-btn-wrapper">
                                            <Form.Group className="support-form-group">
                                                <Form.Label className="support-field-label">Upload Image</Form.Label>
                                                <Form.Label
                                                    htmlFor="ngn-deposit-image"
                                                    className="support-dropzone"
                                                >
                                                    {selectedImageUrl ? (
                                                        <div className="selected-file-preview">
                                                            <div className="selected-file-name">
                                                                {selectedImageName}
                                                                <button
                                                                    type="button"
                                                                    className="remove-selected-file"
                                                                    onClick={(event) => {
                                                                        event.preventDefault();
                                                                        event.stopPropagation();
                                                                        handleImageRemove();
                                                                    }}
                                                                    aria-label="Remove selected image"
                                                                >
                                                                    ×
                                                                </button>
                                                            </div>
                                                            <img
                                                                src={selectedImageUrl}
                                                                alt="Selected payment proof"
                                                            />
                                                        </div>
                                                    ) : (
                                                        'Click or drag and drop a file here'
                                                    )}
                                                </Form.Label>
                                            </Form.Group>

                                            <Form.Control
                                                ref={imageInputRef}
                                                id="ngn-deposit-image"
                                                type="file"
                                                accept="image/*"
                                                className="d-none"
                                                onChange={handleImageChange}
                                            />
                                            <p>(Upload your image like jpg,jpeg & png (MAX: 30MB)) </p>
                                        </div>
                                    </Form.Group>
                                </Form>

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