import React, { useState } from "react"
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap"
import Logo from "./sardius-logo.svg"
import { Link } from "gatsby"

import NavigationStyled from "./Navigation.styled"

const NavBar = () => {
  const [visible, setVisible] = useState(true)
  // eslint-disable-next-line
  const [toggle, setToggle] = useState(false)

  const handleShow = () => {
    setVisible(!visible)
    setToggle(!toggle)
  }

  return (
    <NavigationStyled>
      <Navbar sticky="top" collapseOnSelect expand="lg">
        <Navbar.Brand href="/">
          <Logo alt="Sardius Media" />
        </Navbar.Brand>
        <Button
          className={`navbar-toggler ${visible ? "open" : "closed"}`}
          onClick={handleShow}
          aria-controls="responsive-navbar-nav"
        >
          <span className="icon-bar top-bar" />
          <span className="icon-bar middle-bar" />
          <span className="icon-bar bottom-bar" />
        </Button>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Item>
              <Link to="/">Home</Link>
            </Nav.Item>

            <NavDropdown title="Solutions" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/sardius-live">Events and Corporate</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/church">Churches and Ministries</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
              <Link to="/services">Services</Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Link to="/partners">Partners</Link>
            </Nav.Item> */}

            <Nav.Item>
              <Link to="/about">Why Sardius?</Link>
            </Nav.Item>

            {/* <NavDropdown title="Resources" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/sardius-live">Sardius LIVE Walkthrough</Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/blog">Blog</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/partners">Partners</Link>
              </NavDropdown.Item>
            </NavDropdown> */}

            {/* <NavDropdown title="Why Sardius?" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/customer-stories">Customer Stories</Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/about">About the Team</Link>
              </NavDropdown.Item>
            </NavDropdown> */}
            <Link to="/contact">
              <Button>Let’s Talk</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </NavigationStyled>
  )
}

export default NavBar
