"use client";
import { useState, useEffect } from "react";
import { Image, Container } from "react-bootstrap";
import { LockIcon } from "../components/Icons";

const addtoken = () => {
    const [code, setCode] = useState(["", "", "", ""]);

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
        <>
            <div className='account-passcode-page'>
                <Container>
                    <div className="mt-4">
                        <div className="userprfbig">
                            <LockIcon size={65} />
                        </div>
                    </div>
                    <div className="passcode-container">
                        <div className="code-boxes mt-4">
                            {code.map((digit, i) => (
                                <div key={i} className="box">
                                    {digit}
                                </div>
                            ))}
                        </div>
                        <h2 className="sub-head txt-gry">Set Up MPIN</h2>
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
                    {/* <div className="text-center mt-4">
                        <p>@send</p>
                    </div> */}
                </Container>
            </div>
        </>
    )
}

export default addtoken