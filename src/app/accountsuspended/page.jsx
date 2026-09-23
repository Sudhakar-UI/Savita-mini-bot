"use client";
import React from 'react'
import { Button, Container, Image, Form, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { LockIcon, MailIcon } from "../components/Icons";
import Link from 'next/link'
import { useTheme } from "../context/ThemeContext";

export default function Accountsuspended() {
    const { isNightMode } = useTheme();

    return (
        <>
            <div className='accountsuspended-page'>
                <Container>
                    <div className='session-exd'>
                        <div className='message-box'>
                            <div className="mt-4">
                                <Image src={isNightMode ? "/assets/images/account-suspended-dark.svg" : "/assets/images/account-suspended.svg"} alt="user" className="account-suspended" />
                            </div>
                        </div>
                        <div className="text-center">
                            <h2 className="heading">Your account is suspended</h2>
                            <p>Your region is not support, you can't<br />
                                continue using your account. you can<br />
                                withdraw your funds until 15 Apr 18.01.</p>
                        </div>
                    </div>
                      <div className="mt-auto px-2 d-flex flex-column gap-2">
                <Link href="/">
                    <Button className="sitebtn w-100">Open wallet</Button>
                </Link>
                <Link href="/">
                    <Button className="borderbtn w-100">Close</Button>
                </Link>
            </div>

                </Container>
            </div>
          
        </>

    )
}
