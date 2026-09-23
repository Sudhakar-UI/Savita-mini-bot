"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";

const Homefooter = () => {

    useEffect(() => {
        document.body.classList.add("has-home-footer");

        return () => {
            document.body.classList.remove("has-home-footer");
        };
    }, []);

    return (
        <footer className="homefooter">
            <Container>
                <div className="text-center">
                    <p>@send</p>
                </div>
            </Container>
        </footer>
    );
};

export default Homefooter;