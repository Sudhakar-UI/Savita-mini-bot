"use client";
import { useState, useRef } from "react";
import { Image, Button, Container, Form, InputGroup, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCheck, faTimes, faSearch, faPlus, faEye, faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { PhoneIcon, AccountIcon, WalletIcon, LockIcon } from '../components/Icons'
import Link from "next/link";

const addtoken = () => {

    const drawRef = useRef(null);

    const [openDrawer, setOpenDrawer] = useState(false);
    const [openDeleteDrawer, setOpenDeleteDrawer] = useState(false);
    const [openAddDrawer, setOpenAddDrawer] = useState(false);

    const handleOpenDrawer = () => setOpenDrawer(true);
    const handleCloseDrawer = () => setOpenDrawer(false);
    const handleOpenDeleteDrawer = () => setOpenDeleteDrawer(true);
    const handleCloseDeleteDrawer = () => setOpenDeleteDrawer(false);
    const handleOpenAddDrawer = () => setOpenAddDrawer(true);
    const handleCloseAddDrawer = () => setOpenAddDrawer(false);

    return (
        <>
            <div className='basic-info-page merchantPage editbank-details-page'>
                <Container ref={drawRef}>
                    <div className="d-flex align-content-center justify-content-between">
                        <span className="sub-head txt-gry">Bank Detail</span>
                        <button onClick={handleOpenAddDrawer} className="btn-sm sitebtn sitebtn-w-50 d-flex align-items-center justify-content-center gap-2">
                            <span className="support-plus-wrap">
                                <FontAwesomeIcon icon={faPlus} />
                            </span> <span>Add Bank</span></button>
                    </div>

                    {/* <p className="basic-info-p">Your data is securely stored and is required for identification purposes.</p> */}

                    {/* <div className="setup-acc-info mt-3">
                        <div>
                            <h6 className='setup-acc-head'>Bank Name</h6>
                            <p className=''>HDFC</p>
                        </div>
                        <div>
                            <h6 className='setup-acc-head'>Account Type</h6>
                            <p className=''>saving</p>
                        </div>
                        <div>
                            <h6 className='setup-acc-head'>Account Name</h6>
                            <p className=''>suresh</p>
                        </div>
                        <div>
                            <h6 className='setup-acc-head'>Account No</h6>
                            <p className=''>12345698788</p>
                        </div>
                        <div>
                            <h6 className='setup-acc-head'>Date & Time</h6>
                            <p className=''>2022-09-01 13:16:47</p>
                        </div>
                        <div className="gap-1">
                            <button onClick={handleOpenDrawer} className="btn-sm sitebtn">update</button>
                            <button onClick={handleOpenDeleteDrawer} className="btn-sm sitebtn">Delete</button>
                        </div>
                       
                    </div> */}
                    <div className="mer-set-bot mt-3">
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
                        <div href="/" className="set-bot-y">
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
                        <div href="/" className="set-bot-y no-border d-flex justify-content-around pb-0">
                            <div>
                                <span className="sub-head buleicon" onClick={handleOpenDrawer}>
                                    <FontAwesomeIcon icon={faPenToSquare} className="me-1" />
                                    update
                                </span>
                            </div>
                            <div>
                                <span className="sub-head deleteicon" onClick={handleOpenDeleteDrawer}>
                                    <FontAwesomeIcon icon={faTrash} className="me-1" />
                                    Delete
                                </span>
                            </div>
                        </div>

                    </div>

                </Container>

            </div>




            <div className={`phone-draw-overlay ${openDrawer ? 'open' : ''}`} onClick={handleCloseDrawer}></div>
            <div className={`phone-draw ${openDrawer ? 'open' : ''}`}>
                <div className="phone-draw-handle"></div>
                <div className="text-center">
                    <div className="phone-draw-close">
                        <Button onClick={handleCloseDrawer} className="phone-draw-close-btn">
                            <FontAwesomeIcon icon={faTimes} />
                        </Button>
                    </div>

                    <h2 className="heading">Update Bank Details</h2>
                    <Form className="siteformbg basic-info-form mt-2">
                        <Form.Group className="form-group mb-0">
                            <Form.Control placeholder="Bank Name "></Form.Control>
                        </Form.Group>
                        <Form.Group className="form-group mb-0">
                            <Form.Control placeholder="Account Type"></Form.Control>
                            <p className="m-0"></p>
                        </Form.Group>
                        <Form.Group className="form-group mb-0">
                            <Form.Control placeholder="Account Name"></Form.Control>
                            <p className="m-0"></p>
                        </Form.Group>
                        <Form.Group className="form-group mb-0">
                            <Form.Control placeholder="Account No"></Form.Control>
                            <p className="m-0"></p>
                        </Form.Group>
                    </Form>

                </div>

                <Link href="#0">
                    <Button className="sitebtn mt-2 ">Submit</Button>
                </Link>
            </div>

            <div className={`phone-draw-overlay ${openAddDrawer ? 'open' : ''}`} onClick={handleCloseAddDrawer}></div>
            <div className={`phone-draw ${openAddDrawer ? 'open' : ''}`}>
                <div className="phone-draw-handle"></div>
                <div className="text-center">
                    <div className="phone-draw-close">
                        <Button onClick={handleCloseAddDrawer} className="phone-draw-close-btn">
                            <FontAwesomeIcon icon={faTimes} />
                        </Button>
                    </div>

                    <h2 className="heading">Add Bank Details</h2>
                    <Form className="siteformbg basic-info-form mt-2">
                        <Form.Group className="form-group mb-0">
                            <Form.Control placeholder="Bank Name"></Form.Control>
                        </Form.Group>
                        <Form.Group className="form-group mb-0">
                            <Form.Control placeholder="Account Type"></Form.Control>
                        </Form.Group>
                        <Form.Group className="form-group mb-0">
                            <Form.Control placeholder="Account Name"></Form.Control>
                        </Form.Group>
                        <Form.Group className="form-group mb-0">
                            <Form.Control placeholder="Account No"></Form.Control>
                        </Form.Group>
                    </Form>
                </div>

                <Link href="#0">
                    <Button className="sitebtn mt-2" onClick={handleCloseAddDrawer}>Save Bank Details</Button>
                </Link>
            </div>

            <div className={`phone-draw-overlay ${openDeleteDrawer ? 'open' : ''}`} onClick={handleCloseDeleteDrawer}></div>
            <div className={`phone-draw ${openDeleteDrawer ? 'open' : ''}`}>
                <div className="phone-draw-handle"></div>
                <div className="text-center">
                    <div className="phone-draw-close">
                        <Button onClick={handleCloseDeleteDrawer} className="phone-draw-close-btn">
                            <FontAwesomeIcon icon={faTimes} />
                        </Button>
                    </div>

                    <h2 className="heading">Are you sure you want to delete your bank?</h2>
                    <p>This action will remove the bank details from your account.</p>
                </div>

                <div className="d-flex gap-2 mt-2">
                    <Button className="sitebtn flex-fill" variant="secondary" onClick={handleCloseDeleteDrawer}>Cancel</Button>
                    <Button className="sitebtn flex-fill" onClick={handleCloseDeleteDrawer}>Delete</Button>
                </div>
            </div>

        </>
    )
}

export default addtoken