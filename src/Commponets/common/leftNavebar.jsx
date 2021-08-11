import React, { Component } from "react";
//logo img
import Logo from '../../assets/images/logo.png';
import { DropdownSubmenu, NavDropdownMenu} from "react-bootstrap-submenu";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Row, Col, NavDropdown } from "react-bootstrap";

export default class LeftNavBar extends Component {

  state = {
            email: '',
            password: ''
        }
  
    render() {
        return (
            <div>
                        <nav id="sidebar">
            <div className="sidebar-header">
                <h3><img  src={Logo} width="200px" height="70px"></img></h3>
            </div>

            <ul className="list-unstyled components">
                
            <li><div class="container">
        <img  src={require('../../assets/images/DASBOARD ICON.png')} width="20px" height="20px" ></img>
          <span><a href="/dashboard" align="right">Dashboard</a></span> 

           </div>
            
         
          
            </li> 

                {/* <li className="active">
                    <a href="/dashboard" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Home</a>
                    <ul className="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <a href="#">Home 1</a>
                        </li>
                        <li>
                            <a href="#">Home 2</a>
                        </li>
                        <li>
                            <a href="#">Home 3</a>
                        </li>
                    </ul>
                </li>
              
                <li>

                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
                    <ul className="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <a href="#">Page 1</a>
                        </li>
                        <li>
                            <a href="#">Page 2</a>
                        </li>
                        <li>
                            <a href="#">Page 3</a>
                        </li>
                    </ul>
                </li> */}
                <li>
                <NavDropdownMenu title="Customer" id="collasible-nav-dropdown">
                <DropdownSubmenu href="#action/3.7" title="Add Customer">
                <NavDropdown.Item href="#action/8.1">Sub 1</NavDropdown.Item>
                </DropdownSubmenu>


                <NavDropdown.Item >List</NavDropdown.Item>

                </NavDropdownMenu>

                </li>
                <li>
                    <a href="#" align = "left">invoices</a>
                </li> <li>
                    <a href="#" align = "left">Estimations</a>
                </li> <li>
                    <a href="#" align = "left">Report</a>
                </li> 
             
            </ul>

           
        </nav>

                            </div>



        );
    }
}
