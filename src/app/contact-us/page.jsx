"use client";
import { useState, useRef } from "react";
import { Image, Button, Container, Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCheck, faTimes, faSearch } from "@fortawesome/free-solid-svg-icons";
import { PhoneIcon, AccountIcon, WalletIcon, LockIcon } from '../components/Icons'
import Link from "next/link";

const contactus = () => {

    const drawRef = useRef(null);

    const [openDrawer, setOpenDrawer] = useState(false);

    const handleOpenDrawer = () => setOpenDrawer(true);
    const handleCloseDrawer = () => setOpenDrawer(false);

    return (
        <>
            <div className='contact-us-page'>
                <Container ref={drawRef}>
                    <h2 className="heading txt-gry">Contact us</h2>
                    <Form className="siteformbg basic-info-form">
                        <Form.Group className="form-group mb-0">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control placeholder=""></Form.Control>
                        </Form.Group>
                        <Form.Group className="form-group mb-0">
                            <Form.Label>Email</Form.Label>
                            <Form.Control placeholder=""></Form.Control>
                            <p className="m-0"></p>
                        </Form.Group>

                        <Form.Group className="form-group mb-0">
                            <Form.Label>Select Subject</Form.Label>
                            <Form.Select defaultValue={"Select Subject"}>
                                <option value="">Country of Residence</option>
                                <option value="india">India</option>
                                <option value="usa">USA</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="form-group mb-0">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control placeholder=""></Form.Control>
                        </Form.Group>
                        <Form.Group className="form-group mb-0">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="" />
                            <p className="m-0"></p>
                        </Form.Group>
                    </Form>
                    <div className="mt-3">
                        <Button className="sitebtn" onClick={handleOpenDrawer}>Continue</Button>
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
                    <Image
                        src="/assets/images/mobile-icon.svg"
                        width={100}
                        height={100}
                        alt="profile" className=""
                    />
                    <h2 className="heading">Does it match your ID?</h2>
                    <h2 className="sub-head">Confirm that the information matches the official documents</h2>
                    <div className="d-flex justify-content-center align-items-center mb-2">
                        <Form.Check
                            type="checkbox"
                            label="Yes, I confirm"
                            id="confirm"
                        />
                    </div>
                </div>

                <Link href="#0">
                    <Button className="sitebtn">Confirm</Button>
                </Link>
            </div>

        </>
    )
}

export default contactus