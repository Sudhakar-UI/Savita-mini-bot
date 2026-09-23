"use client";
import { Image, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faEdit, faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const addtoken = () => {

    return (
        <>
            <div className='tonaddresses-page'>
                <Container>
                    <span className="sub-head txt-gry">BSC addresses</span>
                    <div className="set-bot-y mt-2">
                        <div className="d-flex align-items-center">
                            <Image
                                src="/assets/images/color/btc.svg"
                                width={100}
                                height={100}
                                alt=""
                                className="loc-cury-icon me-3"
                            />
                            <div className="d-flex flex-column">
                                <span className="sub-head">Bitcoin</span>
                                <p className="">0x6A968....a0F44</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <Link href="/"> <FontAwesomeIcon icon={faPen} className="facheriticon" /> </Link>
                            <Link href="/"> <FontAwesomeIcon icon={faTrash} className="facheriticon" /> </Link>
                        </div>

                    </div>
                    <div className="set-bot-y mt-2">
                        <div className="d-flex align-items-center">
                            <Image
                                src="/assets/images/color/eth.svg"
                                width={100}
                                height={100}
                                alt=""
                                className="loc-cury-icon me-3"
                            />
                            <div className="d-flex flex-column">
                                <span className="sub-head">Ethereum</span>
                                <p className="">0x6A968....a0F44</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <Link href="/"> <FontAwesomeIcon icon={faPen} className="facheriticon" /> </Link>
                            <Link href="/"> <FontAwesomeIcon icon={faTrash} className="facheriticon" /> </Link>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default addtoken