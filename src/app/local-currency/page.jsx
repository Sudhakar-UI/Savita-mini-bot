"use client";
import { Image, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const addtoken = () => {

    return (
        <>
            <div className='local-currency-page'>
                <Container>
                    <span className="sub-head txt-gry">Base Currency</span>
                    <Link href="/next-page" className="set-bot-y mt-2">
                        <div className="d-flex align-items-center">
                            <Image src="/assets/images/rub-icon.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
                            <div className="d-flex flex-column">
                                <span className="sub-head">RUB</span>
                                <p>Russian Ruble</p>
                            </div>
                        </div>
                        <FontAwesomeIcon icon={faCheck} className="fa-chk-icon" />
                    </Link>

                    <Link href="/next-page" className="set-bot-y mt-2">
                        <div className="d-flex align-items-center">
                            <Image src="/assets/images/usa-icon.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
                            <div className="d-flex flex-column">
                                <span className="sub-head">USD</span>
                                <p>United States Dollar</p>
                            </div>
                        </div>
                    </Link>

                    <Link href="/next-page" className="set-bot-y mt-2">
                        <div className="d-flex align-items-center">
                            <Image src="/assets/images/eur-icon.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
                            <div className="d-flex flex-column">
                                <span className="sub-head">EUR</span>
                                <p>Euro</p>
                            </div>
                        </div>
                    </Link>

                    <Link href="/next-page" className="set-bot-y mt-2">
                        <div className="d-flex align-items-center">
                            <Image src="/assets/images/byn-icon.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
                            <div className="d-flex flex-column">
                                <span className="sub-head">BYN</span>
                                <p>Belarusian Ruble</p>
                            </div>
                        </div>
                    </Link>

                    <Link href="/next-page" className="set-bot-y mt-2">
                        <div className="d-flex align-items-center">
                            <Image src="/assets/images/uah-icon.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
                            <div className="d-flex flex-column">
                                <span className="sub-head">UAH</span>
                                <p>Ukrainian Hryvnia</p>
                            </div>
                        </div>
                    </Link>

                    <Link href="/next-page" className="set-bot-y mt-2">
                        <div className="d-flex align-items-center">
                            <Image src="/assets/images/gbp-icon.svg" width={100} height={100} alt="" className="loc-cury-icon me-3" />
                            <div className="d-flex flex-column">
                                <span className="sub-head">GBP</span>
                                <p>Pound Sterling</p>
                            </div>
                        </div>
                    </Link>

                </Container>
            </div>
        </>
    )
}

export default addtoken