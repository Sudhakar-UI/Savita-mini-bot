import React from 'react'
import { Button, Container, Image, Form, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'

export default function Terminate() {
    return (
        <div className='terminate-page'>
            <Container>
                <div className='set-up-act'>
                    <div className='d-flex justify-content-end align-items-center'>
                        {/* <Link href="/security" className='terminate-close'><FontAwesomeIcon icon={faTimes} /></Link> */}
                    </div>
                    <div className='message-box'>
                        <Image src="/assets/images/set-hand.svg" alt="lock" />
                        <h2 className='heading mb-0'>Set Up Account</h2>
                        <p>To continue,provide your information.<br /> it will take a couple of mintutes</p>
                    </div>
                </div>
                <div className="mt-3">
                    <Link href="/">
                        <Button className="sitebtn ">Set Up Account</Button>
                    </Link>
                </div>
            </Container>
        </div>
    )
}
