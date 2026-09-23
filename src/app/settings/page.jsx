"use client";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faComment, faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { SettingsIcon, BookMarkIcon, BellIcon, LockIcon, CircleCheckIcon, DraftIcon, SearchDollarIcon, FaqIcon, BulbIcon, CommentIcon } from "../components/Icons";

const addtoken = () => {

    return (
        <>
            <div className='settings-page'>
                <Container>
                    <Link href="/settings-options" className="settings-box">
                        <div className="settings-icon">
                            <div><SettingsIcon color="#fff" size={20} /></div>
                            <span className="sub-head">Settings</span>
                        </div>
                        <FontAwesomeIcon icon={faChevronRight} className="facheriticon txt-gry" />
                    </Link>

                    {/* <Link href="/address-book" className="settings-box">
                        <div className="settings-icon">
                            <div><BookMarkIcon color="#fff" size={20} /></div>
                            <span className="sub-head">Address Book</span>
                        </div>
                        <FontAwesomeIcon icon={faChevronRight} className="facheriticon txt-gry" />
                    </Link> */}

                    {/* <Link href="/notifications" className="settings-box">
                        <div className="settings-icon">
                            <div><BellIcon color="#fff" size={20} /></div>
                            <span className="sub-head">Notifications</span>
                        </div>
                        <FontAwesomeIcon icon={faChevronRight} className="facheriticon txt-gry" />
                    </Link> */}

                    <Link href="/security" className="settings-box">
                        <div className="settings-icon">
                            <div><LockIcon color="#fff" size={20} /></div>
                            <span className="sub-head">Security</span>
                        </div>
                        <FontAwesomeIcon icon={faChevronRight} className="facheriticon txt-gry" />
                    </Link>
                    <Link href="/bankdetails" className="settings-box">
                        <div className="settings-icon">
                            <div>                        <FontAwesomeIcon icon={faBuildingColumns} />
                            </div>
                            <span className="sub-head">Bank Details</span>
                        </div>
                        <FontAwesomeIcon icon={faChevronRight} className="facheriticon txt-gry" />
                    </Link>


                    <Link href="/verification" className="settings-box">
                        <div className="settings-icon">
                            <div><CircleCheckIcon color="#fff" size={20} /></div>
                            <span className="sub-head">Verification</span>
                        </div>
                        <FontAwesomeIcon icon={faChevronRight} className="facheriticon txt-gry" />
                    </Link>
                    <Link href="/verification-two" className="settings-box">
                        <div className="settings-icon">
                            <div><CircleCheckIcon color="#fff" size={20} /></div>
                            <span className="sub-head">Verification 2</span>
                        </div>
                        <FontAwesomeIcon icon={faChevronRight} className="facheriticon txt-gry" />
                    </Link>

                    <Link href="/privacy-policy" className="settings-box">
                        <div className="settings-icon">
                            <div><DraftIcon color="#fff" size={20} /></div>
                            <span className="sub-head">Privacy Policy</span>
                        </div>
                        <FontAwesomeIcon icon={faChevronRight} className="facheriticon txt-gry" />
                    </Link>

                    <Link href="/compliance-policy" className="settings-box">
                        <div className="settings-icon">
                            <div><SearchDollarIcon color="#fff" size={20} /></div>
                            <span className="sub-head">Compliance Policy</span>
                        </div>
                        <FontAwesomeIcon icon={faChevronRight} className="facheriticon txt-gry" />
                    </Link>

                    <Link href="/faq" className="settings-box">
                        <div className="settings-icon">
                            <div><FaqIcon color="#fff" size={20} /></div>
                            <span className="sub-head">Crypto Bot FAQ</span>
                        </div>
                        <FontAwesomeIcon icon={faChevronRight} className="facheriticon txt-gry" />
                    </Link>

                    <Link href="/next-page" className="settings-box">
                        <div className="settings-icon">
                            <div><BulbIcon color="#fff" size={20} /></div>
                            <span className="sub-head">Crypto Bot Features</span>
                        </div>
                        <FontAwesomeIcon icon={faChevronRight} className="facheriticon txt-gry" />
                    </Link>
                    <Link href="/support" className="settings-box">
                        <div className="settings-icon">
                            <div>                        <FontAwesomeIcon icon={faComment} />
                            </div>
                            <span className="sub-head">Support</span>
                        </div>
                        <FontAwesomeIcon icon={faChevronRight} className="facheriticon txt-gry" />
                    </Link>

                    <Link href="/contact-us" className="settings-box">
                        <div className="settings-icon">
                            <div><CommentIcon color="#fff" size={20} /></div>
                            <span className="sub-head">Contact Us</span>
                        </div>
                        <FontAwesomeIcon icon={faChevronRight} className="facheriticon txt-gry" />
                    </Link>
                </Container>
            </div>
        </>
    )
}

export default addtoken