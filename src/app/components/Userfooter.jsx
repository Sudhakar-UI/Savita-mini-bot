"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Image, Container } from "react-bootstrap";

const Userfooter = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };

        // Add body class when Userfooter is mounted
        document.body.classList.add("has-user-footer");

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);

            // Remove body class when Userfooter is unmounted
            document.body.classList.remove("has-user-footer");
        };
    }, []);

    return (
        <footer className={`homefooter user-footer ${isScrolled ? "footer-minimize" : ""}`}>
            <Container>
                <div className="footer-content">

                    <Link href="/" className="footer-item">
                        <Image
                            src="/assets/images/dashboard-footer.svg"
                            width={25}
                            height={25}
                            alt="dashboard"
                            className="footer-icon"
                        />
                        <p>Home</p>
                    </Link>

                    <Link href="/comingsoon" className="footer-item">
                        <Image
                            src="/assets/images/trade-footer.svg"
                            width={25}
                            height={25}
                            alt="trade"
                            className="footer-icon"
                        />
                        <p>Trade</p>
                    </Link>

                    <Link href="/comingsoon" className="footer-item">
                        <Image
                            src="/assets/images/swap-footer.svg"
                            width={25}
                            height={25}
                            alt="swap"
                            className="footer-icon"
                        />
                        <p>Swap</p>
                    </Link>

                    <Link href="/comingsoon" className="footer-item">
                        <Image
                            src="/assets/images/merchant-footer.svg"
                            width={25}
                            height={25}
                            alt="merchant"
                            className="footer-icon"
                        />
                        <p>IEO</p>
                    </Link>

                    <Link href="/wallet" className="footer-item active">
                        <Image
                            src="/assets/images/wallet-footer.svg"
                            width={25}
                            height={25}
                            alt="wallet"
                            className="footer-icon"
                        />
                        <p>Wallet</p>
                    </Link>

                </div>
            </Container>
        </footer>
    );
};

export default Userfooter;