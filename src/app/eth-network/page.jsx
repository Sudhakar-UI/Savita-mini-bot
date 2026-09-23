"use client";
import { Image, Container, Row , Col, Form, Button   } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faEdit, faTrash, faPen, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const addtoken = () => {

    return (
        <>
            <div className='eth-network-page'>
                <Container>
                    <Link href="/" className="set-bot-y mt-2">
                        <div className="d-flex align-items-center">
                            <Image
                                src="/assets/images/color/eth.svg"
                                width={100}
                                height={100}
                                alt=""
                                className="loc-cury-icon me-3"
                            />
                            <div className="d-flex flex-column">
                                <span className="sub-head">Ethereum</span>
                                <p className="txt-gry">change asset <FontAwesomeIcon icon={faChevronRight} className="facheriticon" /></p>
                            </div>
                        </div>

                        <div className="d-flex flex-column justify-content-end align-items-end">
                           <h4 className="sub-head">0.05ETH</h4>
                            <p>$103.02</p>
                        </div>
                    </Link>

                    <Link href="/" className="set-bot-y mt-2">
                        <div className="d-flex align-items-center">
                            <Image
                                src="/assets/images/color/eth.svg"
                                width={100}
                                height={100}
                                alt=""
                                className="loc-cury-icon me-3"
                            />
                            <div className="d-flex flex-column">
                                <span className="sub-head">Ethereum Sepolia</span>
                                <p className="txt-gry">Network</p>
                            </div>
                        </div>

                        <div className="d-flex flex-column justify-content-end align-items-end">
                             <h4 className="sub-head">0.05ETH</h4>
                            <p>$103.02</p>
                        </div>
                    </Link>
                                    <div className="mt-3">
                        <Row>
                            <Col xl={12}>
                                <Form className="siteformbg">
                                    <div className="supportsearch p-0">
                                        <Form.Group className="form-group mb-0">
                                            <Form.Label>
                                                Address
                                            </Form.Label>
                                            <div className="input-wrapper">
                                                <Form.Control
                                                    placeholder="0xFDE3E3779cfbc0xFDE3E3779cfbc0xFDE3E3779cfbc"
                                                    className="custom-input"
                                                />
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
                                                Amount
                                            </Form.Label>
                                            <Form.Control placeholder="0.
                                            0045" id="search" />
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