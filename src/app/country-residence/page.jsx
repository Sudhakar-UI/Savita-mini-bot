"use client";
import { Image, Container, Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import ReactCountryFlag from "react-country-flag";

const addtoken = () => {

    return (
        <>
            <div className='country-residence-page'>
                <Container>
                    <span className="sub-head txt-gry">choose country of residence</span>
                    <div className="supportsearch">
                        <Form className="siteformbg">
                            <Form.Group className="form-group mb-0">
                                <InputGroup>
                                    <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                                    <Form.Control placeholder="Search Coin" />
                                </InputGroup>
                            </Form.Group>
                        </Form>
                    </div>
                    <div className="mt-1 mb-2">
                        <span className="sub-head txt-gry">All countries</span>
                    </div>

                    <Link href="/" className="set-bot-y">
                        <div className="d-flex align-items-center">
                            <ReactCountryFlag
                                countryCode="RU"
                                svg
                                className="country-flag"
                            />
                            <div className="d-flex flex-column">
                                <span className="sub-head">Russia</span>
                            </div>
                        </div>
                    </Link>
                    <Link href="/" className="set-bot-y">
                        <div className="d-flex align-items-center">
                            <ReactCountryFlag
                                countryCode="UA"
                                svg
                                className="country-flag"
                            />
                            <div className="d-flex flex-column">
                                <span className="sub-head">Ukraine</span>
                            </div>
                        </div>
                    </Link>
                    <Link href="/" className="set-bot-y">
                        <div className="d-flex align-items-center">
                            <ReactCountryFlag
                                countryCode="KZ"
                                svg
                                className="country-flag"
                            />
                            <div className="d-flex flex-column">
                                <span className="sub-head">Kazakhstan</span>
                            </div>
                        </div>
                    </Link>
                    <Link href="/" className="set-bot-y">
                        <div className="d-flex align-items-center">
                            <ReactCountryFlag
                                countryCode="AE"
                                svg
                                className="country-flag"
                            />
                            <div className="d-flex flex-column">
                                <span className="sub-head">United Arab Emirates</span>
                            </div>
                        </div>
                    </Link>
                    <Link href="/" className="set-bot-y">
                        <div className="d-flex align-items-center">
                            <ReactCountryFlag
                                countryCode="AF"
                                svg
                                className="country-flag"
                            />
                            <div className="d-flex flex-column">
                                <span className="sub-head">Afghanistan</span>
                            </div>
                        </div>
                    </Link>

                    <Link href="/" className="set-bot-y">
                        <div className="d-flex align-items-center">
                            <ReactCountryFlag
                                countryCode="AL"
                                svg
                                className="country-flag"
                            />
                            <div className="d-flex flex-column">
                                <span className="sub-head">Albania</span>
                            </div>
                        </div>
                    </Link>
                    <Link href="/" className="set-bot-y">
                        <div className="d-flex align-items-center">
                            <ReactCountryFlag
                                countryCode="DZ"
                                svg
                                className="country-flag"
                            />
                            <div className="d-flex flex-column">
                                <span className="sub-head">Algeria</span>
                            </div>
                        </div>
                    </Link>
                    <Link href="/" className="set-bot-y">
                        <div className="d-flex align-items-center">
                            <ReactCountryFlag
                                countryCode="AD"
                                svg
                                className="country-flag"
                            />
                            <div className="d-flex flex-column">
                                <span className="sub-head">Andorra</span>
                            </div>
                        </div>
                    </Link>
                           <Link href="/" className="set-bot-y">
                        <div className="d-flex align-items-center">
                            <ReactCountryFlag
                                countryCode="AO"
                                svg
                                className="country-flag"
                            />
                            <div className="d-flex flex-column">
                                <span className="sub-head">Angola</span>
                            </div>
                        </div>
                    </Link>
                </Container>
            </div>
        </>
    )
}

export default addtoken