"use client";
import { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { LockIcon, MailIcon } from "../components/Icons";
import { ScannerIcon } from "../components/Icons";
import Link from "next/link";

export default function Otpverification() {
    const [step, setStep] = useState(3);

    const [code, setCode] = useState(["", "", "", "", "", ""]);

    const handleClick = (num) => {
        const newCode = [...code];
        const index = newCode.findIndex((c) => c === "");
        if (index !== -1) {
            newCode[index] = num;
            setCode(newCode);
        }
    }

    const handleDelete = () => {
        const newCode = [...code];
        const index = newCode.findLastIndex((c) => c !== "");
        if (index !== -1) {
            newCode[index] = "";
            setCode(newCode);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            // Allow only numbers
            if (/^[0-9]$/.test(e.key)) {
                handleClick(Number(e.key));
            }

            // Handle backspace
            if (e.key === "Backspace") {
                handleDelete();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [code]);

    return (
        <div className='otp-verification-page'>
            <Container>
                <div className="mt-4">
                    <div className="userprfbig">
                        <MailIcon size={65} />
                    </div>
                </div>
                {step === 1 && (
                    <div className="passcode-container">
                        {/* <h2 className="sub-head txt-gry">Set Up Passcode</h2> */}
                        <div className="code-boxes mt-4">
                            {code.map((digit, i) => (
                                <div key={i} className="box">
                                    {digit}
                                </div>
                            ))}
                        </div>
                        <div>
                            <p>Please enter the code we just sent to<br />email:sabari@mailinator.com</p>
                            <p className="mt-3 mb-3">Resend in 35s</p>
                        </div>
                        <div className="keypad">
                            {[1, 2, 3].map((n) => (
                                <button key={n} onClick={() => handleClick(n)}>{n}</button>
                            ))}
                            {[4, 5, 6].map((n) => (
                                <button key={n} onClick={() => handleClick(n)}>{n}</button>
                            ))}
                            {[7, 8, 9].map((n) => (
                                <button key={n} onClick={() => handleClick(n)}>{n}</button>
                            ))}
                            <button className="empty"></button>
                            <button onClick={() => handleClick(0)}>0</button>
                            <button onClick={handleDelete}>⌫</button>
                        </div>
                    </div>
                )}
                {step === 2 && (
                    <div>
                        <div className="passcode-container">
                            <h2 className="heading txt-gry">Enter Backup Email</h2>
                            <Form className="siteformbg">
                                <div className="supportsearch p-0">
                                    <Form.Group className="form-group mb-0">
                                        <Form.Label className="text-start d-block">Email</Form.Label>
                                        <div className="input-wrapper">
                                            <Form.Control
                                                placeholder=""
                                                className="custom-input"
                                            />
                                        </div>
                                    </Form.Group>
                                </div>
                            </Form>
                        </div>
                        <div className="mt-3">
                            <Link href="/">
                                <Button className="sitebtn ">Save</Button>
                            </Link>
                        </div>
                    </div>


                )}
                {step === 3 && (

                    <div className="passcode-container">
                        {/* <h2 className="sub-head txt-gry">Set Up Passcode</h2> */}
                        <div className="code-boxes mt-4">
                            {code.map((digit, i) => (
                                <div key={i} className="box">
                                    {digit}
                                </div>
                            ))}
                        </div>
                        <div>
                            <p>Please enter the code we just sent to<br />email:sabari@mailinator.com</p>
                            <p className="mt-3 mb-3">Resend in 55s</p>
                        </div>
                        {/* <div className="keypad">
                            {[1, 2, 3].map((n) => (
                                <button key={n} onClick={() => handleClick(n)}>{n}</button>
                            ))}
                            {[4, 5, 6].map((n) => (
                                <button key={n} onClick={() => handleClick(n)}>{n}</button>
                            ))}
                            {[7, 8, 9].map((n) => (
                                <button key={n} onClick={() => handleClick(n)}>{n}</button>
                            ))}
                            <button className="empty"></button>
                            <button onClick={() => handleClick(0)}>0</button>
                            <button onClick={handleDelete}>⌫</button>
                        </div> */}
                    </div>
                )}
            </Container>
        </div>
    )
}