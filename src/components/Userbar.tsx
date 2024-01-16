import {RouteNamesEnum} from "../routes/routeNames.enum.tsx";
import {useGetAccountInfo, useGetIsLoggedIn} from "@multiversx/sdk-dapp/hooks";
import {logout} from "@multiversx/sdk-dapp/utils";
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Userbar = () => {
    const isLoggedIn = useGetIsLoggedIn()

    const handleLogout = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        sessionStorage.clear()
        // noinspection JSIgnoredPromiseFromCall
        logout(`${window.location.origin}${RouteNamesEnum.home}`)
    };

    if (!isLoggedIn) {
      return (
        <Navbar expand="lg" className="bg-body-light">
        <Container>
        <Navbar.Brand href="#home">Rug's Royalties</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href={RouteNamesEnum.login}>
              Login
          </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      )
    }
    return (
      <Navbar expand="lg" className="bg-body-light">
        <Container>
        <Navbar.Brand href="#home">Rug's Royalties</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={RouteNamesEnum.home}>Home</Nav.Link>
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Read More</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                FAQ
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Disclaimer</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Join Discord
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
