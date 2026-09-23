"use client";
import { useState, useRef } from "react";
import { Image, Button, Container, Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCheck, faTimes, faSearch } from "@fortawesome/free-solid-svg-icons";
import { PhoneIcon, AccountIcon, WalletIcon, LockIcon } from '../components/Icons'
import Link from "next/link";

const addtoken = () => {



    return (
        <>
            <div className='basic-info-page new-address-page'>
                <Container>
                    <span className="sub-head txt-gry">Edit Name</span>
                    <p className="basic-info-p">Your data is securely stored and is required for identification purposes.</p>
                    <Form className="siteformbg basic-info-form mt-2">
                        <Form.Group className="form-group mb-0">
                            <Form.Control placeholder=" Name "></Form.Control>
                        </Form.Group>
                      

                       
                    </Form>
                    <div className="text-center mt-3">
                        <Button className="sitebtn" >Done</Button>
                    </div>
                </Container>

            </div>




            

        </>
    )
}

export default addtoken