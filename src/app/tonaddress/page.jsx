"use client";
import { Image, Container, Form, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { ScannerIcon } from "../components/Icons";

const addtoken = () => {

    return (
        <>
            <div className='tonaddress-page'>
                <Container>
                    <div className="mt-3">
                        <Row>
                            <Col xl={12}>
                                <Form className="siteformbg">
                                    <div className="supportsearch p-0">
                                        <Form.Group className="form-group mb-0">
                                            <Form.Label>
                                                New TON Address
                                            </Form.Label>
                                            <div className="input-wrapper">
                                                <Form.Control
                                                    placeholder="Address"
                                                    className="custom-input"
                                                />
                                                <div className="input-right">
                                                    <button className="scanner-icon">
                                                        <ScannerIcon size={18} color="#868a89" />
                                                    </button>
                                                </div>
                                            </div>
                                        </Form.Group>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                    <div className="mt-2">
                        <Row>
                            <Col xl={12} >
                                <Form className="siteformbg">
                                    <div className="supportsearch p-0">
                                        <Form.Group className="mb-0">
                                            <Form.Label>
                                            </Form.Label>
                                            <Form.Control placeholder="Name" id="search" />
                                        </Form.Group>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                    <div className="mt-3">
                        <Link href="/">
                            <Button className="sitebtn ">Save</Button>
                        </Link>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default addtoken