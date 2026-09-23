"use client";
import React from 'react'
import { Button, Container, Image, Form, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { LockIcon, MailIcon } from "../components/Icons";
import Link from 'next/link'
import { useTheme } from "../context/ThemeContext";

export default function Terminate() {
    const { isNightMode } = useTheme();

    return (
        <>
            <div className='sessionexpired-page'>
                <Container>
                    <div className='session-exd'>
                        <div className='message-box'>
                            <div className="mt-4">
                                <Image
                                    src="/assets/images/session-expired.svg"
                                    width={100}
                                    height={100}
                                    alt="btc"
                                    className="session-expired"
                                />
                            </div>
                        </div>
                        <div className="text-center">
                            <h2 className="heading">Session Expired</h2>
                            <p>Repoen the Mini App for reauthorization</p>
                        </div>

                    </div>
                    <div className="mt-1">
                        <Link href="/">
                            <Button className="sitebtn">Close</Button>
                        </Link>
                    </div>
                </Container>
            </div>
        </>

    )
}
