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
        <Navbar expand="lg" className="container-fluid">
            <Container className="d-flex">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Item>
                            <Nav.Link href={RouteNamesEnum.landing}>
                                Home
                            </Nav.Link>
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
                        <Nav.Item>
                            <NavDropdown title="Read More" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">
                                    FAQ
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Disclaimer
                                </NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.3">
                                    Join Discord
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav.Item>
                    </Nav>
                    {import.meta.env.DEV ? (
                        <Navbar.Text>
                            [{environment}]
                        </Navbar.Text>
                    ) : null}
                </Navbar.Collapse>
                <Navbar.Brand href="#home">
                    &nbsp;&nbsp;Rug's Royalties
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}
