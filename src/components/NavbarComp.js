import React, { Component } from 'react'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'
import "../App.css"
import "./NavbarComp.css"


import {
    Link,
} from "react-router-dom";  

       
      
export default class NavbarComp extends Component {

    inputChangedHandler = (event) => {
        
        // May be call for search result
    }
    

    render() {
 
    
     
        return (
            
                 
                    <Navbar className="Color"  variant={"dark"} expand="lg" collapseOnSelect>
                 <div className="container-fluid float:left">
                        <Navbar.Brand href="/"> ThirdEyeJack</Navbar.Brand>
              
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        
                        <Navbar.Collapse id="navbarScroll">
                            
                            < Nav className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                              
                               
                               
                                
                              
                              <NavDropdown title="Idea Barn" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/how">How it works</NavDropdown.Item>
                                    <NavDropdown.Item href="/art">Art</NavDropdown.Item>
                                </NavDropdown>
                   
                                <NavDropdown title="3-D Printing" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/3D">Beginner's Guide</NavDropdown.Item>
                                    <NavDropdown.Item href="/Presentation">Presentation</NavDropdown.Item>
                                </NavDropdown>    

                                <NavDropdown title="Tools" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/Accounting">Accounting</NavDropdown.Item>
                                    <NavDropdown.Item href="/Animation">Animation</NavDropdown.Item>
                                    <NavDropdown.Item href="/Architecture">Architecture</NavDropdown.Item>
                                    <NavDropdown.Item href="/Art">Art</NavDropdown.Item>
                                    <NavDropdown.Item href="/Engineering">Engineering</NavDropdown.Item>
                                    <NavDropdown.Item href="/Music">Music</NavDropdown.Item>
                                    <NavDropdown.Item href="/DR">Data Recovery</NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title="Tutorials and Guides" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/Windows">Windows</NavDropdown.Item>
                                    <NavDropdown.Item href="/Linux">Linux</NavDropdown.Item>
                                    <NavDropdown.Item href="/Mac">Mac</NavDropdown.Item>
                                </NavDropdown>
                         
                                <Nav.Link  as={Link} to="/Legal">Legal</Nav.Link>
                                <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                                </Nav>
                             
                            
                         </Navbar.Collapse>    
                        
                         </div>
                      
      <form className="d-flex float:right">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit">Go</button>
      </form>
      < Nav className="mr-auto my-2 my-lg-0 px-1"
                                style={{ maxHeight: '100px', margin: '13px' }}
                                navbarScroll
                            >     
                        
                              
                                     <Nav.Link as={Link} to="/cart3" > <svg  xmlns="http://www.w3.org/2000/svg"  width="30" height="30" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg> </Nav.Link>
      <Nav.Link as={Link} to="/register">Register</Nav.Link>
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
               
                                </Nav>
                </Navbar>
            
               
        )
    }
}

