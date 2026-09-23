import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { Container, Navbar, Nav, Image, NavDropdown } from 'react-bootstrap';
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCaretDown } from '@fortawesome/free-solid-svg-icons';



const Homeheader = () => {

  const pathname = usePathname()


  return (
    <div>
      <header className="headermenu homeheader">
        <Navbar expand="lg" data-bs-theme="dark" className="headbg">
          <Container>
            <Navbar.Brand><Link href="/"><Image src="assets/images/logo.svg" width={100} height={57} className="logo" alt="logo" /></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="navbar-nav ms-auto port-y">
                <Nav.Item><Link href="/#" className="nav-link">Portfolio <h5>$0.00</h5> </Link></Nav.Item>
                <Nav.Item><Link href="/#" className="nav-link">Cash <h5>$0.00</h5></Link></Nav.Item>
                <Nav.Item><Link href="/signup" id="register" className="nav-link btn sitebtn me-3">Deposit</Link></Nav.Item>
                <Nav.Item><Image src="assets/images/male.svg" width={100} height={57} className="logo" alt="logo" /></Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  )
}

export default Homeheader