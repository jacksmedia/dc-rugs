import {RouteNamesEnum} from "../routes/routeNames.enum.tsx";
import {useGetIsLoggedIn} from "@multiversx/sdk-dapp/hooks";
import {logout} from "@multiversx/sdk-dapp/utils";
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {environment} from "../config/config.tsx";

export const Userbar = () => {
    const isLoggedIn = useGetIsLoggedIn()

    const handleLogout = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        sessionStorage.clear()
        // noinspection JSIgnoredPromiseFromCall
        logout(`${window.location.origin}${RouteNamesEnum.home}`)
    };

    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    Rug's Royalties
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Item>
                            <Nav.Link href={RouteNamesEnum.landing}>
                                Home
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">
                                    Read More
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    FAQ
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    Disclaimer
                                </NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.4">
                                    Join Discord
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav.Item>
                        <Nav.Item>
                            {isLoggedIn ? (
                                <Nav.Link onClick={handleLogout}>
                                    Logout
                                </Nav.Link>
                            ) : (
                                <Nav.Link href={RouteNamesEnum.login}>
                                    Login
                                </Nav.Link>
                            )}
                        </Nav.Item>
                    </Nav>
                    {import.meta.env.DEV ? (
                        <Navbar.Text>
                            [{environment}]
                        </Navbar.Text>
                    ) : null}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
