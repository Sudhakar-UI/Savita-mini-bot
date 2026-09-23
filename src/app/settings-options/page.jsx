"use client";
import { useState } from "react";
import { Container, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCheck, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const addtoken = () => {
    const [timezone, setTimezone] = useState("GMT + 05:30 Asia/Calcutta");
    const [language, setLanguage] = useState("English");
    const [isSoundOn, setIsSoundOn] = useState(true);

    const timezones = [
        "GMT-11:30 Pacific/Midway",
        "GMT-10:00 Pacific/Honolulu",
        "GMT-08:00 America/Los_Angeles",
        "GMT+00:00 Europe/London",
        "GMT+05:30 Asia/Calcutta",
    ];

    const languages = ["English", "Русский"];

    return (
        <>
            <div className='settings-options-page'>
                <Container>
                    <h2 className="sub-head txt-gry">Settings</h2>
                    <div className="timezone-wrapper mt-4">
                        <Dropdown align="end">
                            <Dropdown.Toggle
                                as="div"
                                className="d-flex justify-content-between align-items-center tim-wrpr w-100 cursor-pointer"
                            >
                                <span className="sub-head">Time Zone</span>

                                <div className="d-flex align-items-center gap-2">
                                    <p className="mb-0">{timezone}</p>
                                    <FontAwesomeIcon icon={faCaretDown} className="txt-gry" />
                                </div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="">
                                {timezones.map((tz, index) => (
                                    <Dropdown.Item
                                        key={tz}
                                        onClick={() => setTimezone(tz)}
                                        className={`d-flex justify-content-between align-items-center timezone-item ${index === timezones.length - 1 ? "no-border" : ""
                                            }`}
                                    >
                                        {tz}
                                        {timezone === tz && (
                                            <FontAwesomeIcon icon={faCheck} className="tick-icon" />
                                        )}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="timezone-wrapper mt-4">
                        <Dropdown align="end">
                            <Dropdown.Toggle
                                as="div"
                                className="d-flex justify-content-between align-items-center tim-wrpr w-100 cursor-pointer"
                            >
                                <span className="sub-head">Language</span>

                                <div className="d-flex align-items-center gap-2">
                                    <p className="mb-0">{language}</p>
                                    <FontAwesomeIcon icon={faCaretDown} className="txt-gry" />
                                </div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="">
                                {languages.map((lang) => (
                                    <Dropdown.Item
                                        key={lang}
                                        onClick={() => setLanguage(lang)}
                                        className="d-flex justify-content-between align-items-center lang-item"
                                    >
                                        {lang}
                                        {language === lang && (
                                            <FontAwesomeIcon icon={faCheck} className="tick-icon" />
                                        )}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="timezone-wrapper mt-4">
                        <Link href="/local-currency" className="text-decoration-none">
                            <div className="d-flex justify-content-between align-items-center tim-wrpr w-100 cursor-pointer">
                                <span className="sub-head">Localcurrency</span>
                                <div className="d-flex align-items-center gap-2">
                                    <p>RUB</p>
                                    <FontAwesomeIcon icon={faCaretDown} className="txt-gry" />
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="timezone-wrapper mt-4">
                        <div className="d-flex justify-content-between align-items-center tim-wrpr w-100">
                            <span className="sub-head">Enable Sounds</span>
                            <div
                                className={`toggle-switch ${isSoundOn ? "active" : ""}`}
                                onClick={() => setIsSoundOn(!isSoundOn)}
                            >
                                <div className="toggle-circle"></div>
                            </div>
                        </div>
                    </div>
                    <div className="timezone-wrapper mt-4">
                        <Link href="/diagnostic" className="text-decoration-none">
                            <div className="d-flex justify-content-between align-items-center tim-wrpr w-100 cursor-pointer">
                                <span className="sub-head">Diagnostic</span>
                                <div className="d-flex align-items-center gap-2">
                                    <FontAwesomeIcon icon={faArrowUp} className="txt-gry rotate-arrow" />
                                </div>
                            </div>
                        </Link>
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