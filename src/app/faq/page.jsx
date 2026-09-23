"use client";
import { useState, useRef } from "react";
import { Container, Tab, Tabs, Accordion, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Faq = () => {

    const drawRef = useRef(null);

    return (
        <div className='faq-page'>
            <Container ref={drawRef}>
                <h2 className="heading txt-gry">FAQs</h2>
                        <Accordion defaultActiveKey="1" flush>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    How do I get started with the gateway?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Simply sign up, configure your wallet or API settings...
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    Which cryptocurrencies are supported?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet...
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

            </Container>
        </div>
    );
};

export default Faq;