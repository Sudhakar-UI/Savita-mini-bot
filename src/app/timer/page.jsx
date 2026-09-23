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
            <div className='timer-page'>
                <Container>
                    <div className='set-up-act'>
                        <div className='d-flex justify-content-end align-items-center'>
                            {/* <Link href="/security" className='terminate-close'><FontAwesomeIcon icon={faTimes} /></Link> */}
                        </div>
                        <div className='message-box'>
                            <div className="mt-4">
                                <div className="userprfbig">
                                    <LockIcon size={65} />
                                </div>
                            </div>

                        </div>
                        <div className='timer'>
                            <h6 className='subhead mb-0'><LockIcon size={16} /> 00.00.15</h6>
                        </div>
                        <div className="text-center">
                            <p>Enter your passcode to continue</p>
                        </div>
                    </div>
                    <div className="mt-2">
                        <Link href="/">
                            <Button className="borderbtn w-100">Reset passcode</Button>
                        </Link>
                    </div>
                </Container>
            </div>

        </>

    )
}
