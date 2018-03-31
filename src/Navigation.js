import React, { Component } from 'react';
import {Navbar, Nav, NavItem, Button, NavDropdown, MenuItem} from "react-bootstrap";

class Navigation extends Component {

    refreshConfessions(e){
        e.preventDefault();
        var event = new Event("onChange");
        document.dispatchEvent(event);
        console.log("refresh");
    }

    render(){
        return(
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href="#home">React-Bootstrap</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav >
                    <NavItem eventKey={3} href="#">
                    Link
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                    Link
                    </NavItem >
                    <NavItem eventKey={1} href="#" >
                    <button onClick={this.refreshConfessions.bind(this)} >
                    refresh
                    </button>
                    </NavItem >
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.4}>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>



        )
    }
}
export default Navigation;