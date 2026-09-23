"use client";
import { Container } from "react-bootstrap";
import Link from "next/link";

const addtoken = () => {

    return (
        <>
            <div className='diagnostic-page'>
                <Container>
                    <Container>
                        <div className="diagnostic-wrapper">
                            <div className="diagnostic-card position-relative">
                                <Link href="/" className="sitebtn btn">
                                    Send To Support
                                    <span className="sntspt-icon">↗</span>
                                </Link>

                                <div className="diagnostic-content">
                                    <p>Telegram Version:9.5</p>
                                </div>
                                <div className="diagnostic-content">
                                    <p>Telegram Platform: tdesktop</p>
                                </div>
                                <div className="diagnostic-content">
                                    <p>URL: https://app.send.tg/diagnostic</p>
                                </div>
                                <div className="diagnostic-content">
                                    <p>
                                        User Agent:
                                        Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
                                        (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0
                                    </p>
                                </div>
                                <div className="diagnostic-content">
                                    <p>IP Address: 106.51.22.60</p>
                                    <p>Authed:YES</p>
                                </div>
                                <div className="diagnostic-content">
                                    <p>API Errors:</p>
                                    <p>PUT /user/settings</p>
                                    <p>Cause:</p>
                                    <p>Code: "ERR_BAD_REQUEST"</p>
                                    <p>Message: "Request failed with status code 400"</p>
                                    <p>
                                        Response: {"{ statusCode: 400, error: 'BadRequestError', message: 'InvalidTimezone' }"}
                                    </p>
                                </div>

                            </div>
                        </div>
                    </Container>
                </Container>
            </div>
        </>
    )
}

export default addtoken