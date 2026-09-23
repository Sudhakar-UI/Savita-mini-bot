"use client"
import React, { useState } from "react";
import Link from 'next/link';
import { Container, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faXmark, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from "next/navigation";
import { SettingsIcon, RefreshIcon, TermsIcon, PrivacyIcon, ThemeIcon } from './Icons';
import { useTheme } from "../context/ThemeContext";


const Homeheader = () => {

  const {toggleNightMode} = useTheme();

  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  

  const hideBackButtonRoutes = ["/"];
  const showBackButton = !hideBackButtonRoutes.includes(pathname);

  return (
    <div>
      <header className="homeheader">
        <Container>
          <div className='blue-bg-main d-flex align-items-center justify-content-between'>
            <div className='d-flex align-items-center gap-3'>
              {showBackButton && (
                <Link href="/" className='d-flex back-btn'>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
              )}
              <h2 className="heading mb-0">Savita Bot</h2>
            </div>
            <div className="position-relative">
              <div className="d-flex gap-3 icon-box align-items-center">

                {/* Dropdown */}
                <Dropdown align="end" className="d-flex">
                  <Dropdown.Toggle
                    variant="link"
                    id="dropdown-custom"
                    className="p-0 border-0 no-caret align-items-center d-flex"
                  >
                    <FontAwesomeIcon
                      icon={faEllipsisVertical}
                      style={{ cursor: "pointer" }}
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item as="div">
                      <Link
                        href="/settings"
                        className="d-flex align-items-center gap-2 text-decoration-none dropdown-icon"
                      >
                        <SettingsIcon size={20} />
                        Settings
                      </Link>
                    </Dropdown.Item>

                    <Dropdown.Item as="div">
                      <Link
                        href="/"
                        className="d-flex align-items-center gap-2 text-decoration-none dropdown-icon"
                      >
                        <RefreshIcon size={18} />
                        Reload Page
                      </Link>
                    </Dropdown.Item>

                    {/* <Dropdown.Item as="div">
                      <Link
                        href="/"
                        className="d-flex align-items-center gap-2 text-decoration-none dropdown-icon"
                      >
                        <TermsIcon size={18} />
                        Terms of Use
                      </Link>
                    </Dropdown.Item> */}

                    <Dropdown.Item as="div">
                      <Link
                        href="/privacy-policy"
                        className="d-flex align-items-center gap-2 text-decoration-none dropdown-icon"
                      >
                        <PrivacyIcon size={18} />
                        Privacy Policy
                      </Link>
                    </Dropdown.Item>

                    <Dropdown.Item as="div">
                      <Link
                        href="#0"
                        onClick={toggleNightMode}
                        className="d-flex align-items-center gap-2 text-decoration-none dropdown-icon"
                      >
                        <ThemeIcon size={18} />
                        Change Theme
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                {/* Close Icon */}
                <FontAwesomeIcon icon={faXmark} style={{ cursor: "pointer" }} />

              </div>
            </div>
          </div>
        </Container>
      </header>
    </div>
  )
}

export default Homeheader