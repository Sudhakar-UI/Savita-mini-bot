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
            <div className='backup-email-page comingsoon-page'>
                <Container>
                    <div className='set-up-act'>
                        <div className='d-flex justify-content-end align-items-center'>
                            {/* <Link href="/security" className='terminate-close'><FontAwesomeIcon icon={faTimes} /></Link> */}
                        </div>
                        <div className=''>
                            <div className="mt-4">
                                <Image
                                    src="/assets/images/coming-soon.png"
                                    width={60}
                                    height={60}
                                    alt="swap-icon"
                                    className="coming-soon-img"
                                />
                            </div>
                            {/* <h2 className='heading mb-0'>Coming Soon!</h2> */}
                            <p className=' text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, voluptates.</p>

                        </div>
                    </div>
                    <div className="px-2 d-flex flex-column gap-2 mt-3">
                        <Link href="/">
                            <Button className="sitebtn w-100">Go to Home</Button>
                        </Link>
                        {/* <Link href="/">
                            <Button className="borderbtn w-100">Close</Button>
                        </Link> */}
                    </div>
                </Container>
            </div>

        </>

    )
}
