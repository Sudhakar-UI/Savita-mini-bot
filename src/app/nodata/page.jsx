"use client";
import { NoDataIcon } from "../components/Icons";
import Link from "next/link";
import { Image, Container, Form, Row, Col, Button } from "react-bootstrap";

const addtoken = () => {

    return (
        <>
            <div className='all-transactions-page'>
                <Container>
                    <div className="text-start">
                        <p>Ton Addresses</p>
                    </div>
                    <div className="all-transcns">
                        <div className="no-data-icon">
                            <NoDataIcon size={100} />
                        </div>
                        <p>No Saved Addresses yet.</p>
                    </div>
                    <div className="mt-3">
                        <Link href="/">
                            <Button className="sitebtn ">Add Address</Button>
                        </Link>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default addtoken