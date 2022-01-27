import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button, FormControl, Form } from "react-bootstrap";
import img from "./logo.PNG";
import "./style.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AppsOutageIcon from '@mui/icons-material/AppsOutage';
import SearchIcon from '@mui/icons-material/Search';
const Header = () => {
    return (
        <div>

            <Navbar bg="light" expand="lg">
                <Container fluid>

                    <img className='img' src={img} alt="" />

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="pl-2 my-2 my-lg-0 content"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">MEN</Nav.Link>
                            <Nav.Link href="#action2">WOMEN</Nav.Link>
                            <Nav.Link href="#action2">KIDS</Nav.Link>
                            <Nav.Link href="#action2">HOME&LIVING</Nav.Link>
                            <Nav.Link href="#action2">OFFER</Nav.Link>


                        </Nav>
                        <Form className="d-flex search">
                            <Button variant="outline-success">   <SearchIcon /></Button>

                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="ml-2"
                                aria-label="Search"

                            />

                        </Form>
                        <Nav
                            className="profile" style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1" className='center'>  < AccountCircleIcon className='pic' /><p>profile</p> </Nav.Link>
                            <Nav.Link href="#action2" className='center'> < ShoppingBagIcon className='pic' /><p>Bag</p></Nav.Link>
                            <Nav.Link href="#action2" className='center'>   < AppsOutageIcon className='pic' /><p>wishlist</p></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
};

export default Header;
