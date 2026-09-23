"use client";
import { Container } from "react-bootstrap";

const addtoken = () => {

    return (
        <>
            <div className='compliance-policy-page'>
                <Container>
                    <Container>
                        <div className="">
                            <h2 className="sub-head txt-gry">Compliance Policy</h2>
                        </div>
                        <div className="compliance-head">
                            <h1 className="heading">1. General Provisions</h1>
                        </div>
                        <div className="compliance-head">
                            <p>This KYC/AML/CFT Policy is developed to ensure the secure, transparent, and fair use of the services provided by the Crypto Bot platform (hereinafter referred to as the “Platform”). The Platform is committed to complying with applicable international standards, including provisions on:</p>
                        </div>
                        <div className="compliance-heads">
                            <p>Anti-Money Laundering (AML);</p>
                        </div>
                        <div className="compliance-heads">
                            <p>Countering the Financing of Terrorism (CFT);</p>
                        </div>
                        <div className="compliance-heads">
                            <p>Know Your Customer (KYC).</p>
                        </div>
                        <div className="compliance-head mt-4">
                            <p>This Policy aims to minimize the risk of the Platform being involved in illegal activities and to protect the interests of users and third parties. Crypto Bot applies a comprehensive Risk-Based Approach (RBA) to client verification and transaction monitoring, ensuring compliance with best practices and regulatory requirements.</p>
                        </div>
                    </Container>
                </Container>
            </div>
        </>
    )
}

export default addtoken