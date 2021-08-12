//import React from 'react';
import React, { Component } from "react";

import styles from './sideBarMenu.css';
import {Nav, NavItem, Navbar, NavDropdown} from 'react-bootstrap';
import Glyphicon from 'react-bootstrap/lib/Glyphicon'
import MenuItem from 'react-bootstrap/lib/MenuItem'


export default class sidebar extends Component {
//export default React.createClass( {
    render() {
        return (

         <div id="sidebar-menu" className={styles.sideBarMenuContainer}>
            <Navbar fluid className={styles.sidebar} inverse >

                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">User Name</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>

                <Navbar.Collapse>
                    <Navbar.Text className={styles.userMenu}>
                        <Navbar.Link href="#"><Glyphicon glyph="home"/></Navbar.Link>
                        <Navbar.Link href="#"><Glyphicon glyph="log-out"/></Navbar.Link>
                    </Navbar.Text>
                    <Nav>
                        <NavDropdown eventKey={1} title="Item 1">
                            <MenuItem eventKey={1.1} href="#">Item 1.1</MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={2}>Item 2</NavItem>
                        <NavItem eventKey={3}>Item 3</NavItem>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div>
    
        );
    }
}