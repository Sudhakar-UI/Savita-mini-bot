import React from 'react'
import { Button, Container, Image } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'

export default function Terminate() {
    return (
        <>
            <div className='terminate-page'>
                <Container>
                    <div className='terminate-cont'>
                        <div className='d-flex justify-content-end align-items-center'>
                            <Link href="/security" className='terminate-close'><FontAwesomeIcon icon={faTimes} /></Link>
                        </div>
                        <div className='message-box'>
                            <video width="170" autoPlay loop muted playsInline>
                                <source src="/assets/images/terminate-all.webm" type="video/webm" />
                            </video>
                            <h2 className='heading mb-0'>All Sessions was terminated</h2>
                        </div>
                    </div>
                    <div className="mt-2">
                        <Button className='terminate-btn'>Close</Button>
                    </div>
                </Container>
            </div>
        </>

    )
}
