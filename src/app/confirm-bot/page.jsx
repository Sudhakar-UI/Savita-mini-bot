"use client";
import React from 'react'
import { Button, Container, Image, Form, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'
import { useTheme } from "../context/ThemeContext";

export default function Terminate() {
    const { isNightMode } = useTheme();

    return (
        <>
            <div className='confirm-bot-page'>
                <Container>
                    <div className='set-up-act mb-2'>
                        <div className='d-flex justify-content-end align-items-center'>
                            {/* <Link href="/security" className='terminate-close'><FontAwesomeIcon icon={faTimes} /></Link> */}
                        </div>
                        <div className='message-box'>
                            <Image className='confirm-bot-img' src="/assets/images/confirm-bot.png" alt="lock"  />
                            <h2 className='heading mb-0'>Confirm in Bot</h2>
                            <p>Please confirm setting up the passcode in<br /><span className={`txt-clor ${isNightMode ? "nightmode" : ""}`}>
                                @CryptoTestnetBot
                            </span> We have just send <br />a message</p>
                        </div>
                    </div>

                    <div className="mt-auto px-2">

                        <Link href="/">
                            <Button className="sitebtn ">Open crypto Testnet Bot</Button>
                        </Link>
                    </div>
                </Container>
            </div>
        </>

    )
}
