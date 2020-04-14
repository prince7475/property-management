import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBInput, MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBSideNavItem, MDBSideNavCat, MDBSideNavNav, MDBSideNav, MDBContainer } from "mdbreact";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleStateA: false
    };
  }

  handleToggleClickA = () => {
    this.setState({
      toggleStateA: !this.state.toggleStateA
    });
  };

  render() {
    const mainStyle = {
      paddingTop: "5rem"
    };

    const specialCaseNavbarStyles = {
      WebkitBoxOrient: "horizontal",
      flexDirection: "row"
    };

    return (
      <Router>
        <div className="mdb-skin">
          <MDBSideNav
            logo=""
            triggerOpening={this.state.toggleStateA}
            bg="https://mdbootstrap.com/img/Photos/Others/sidenav4.jpg"
            mask="strong"
            hidden
          >
            <MDBSideNavNav>
                <MDBSideNavItem>Dashboard</MDBSideNavItem>
                <MDBSideNavItem>Messages (2)</MDBSideNavItem>
            </MDBSideNavNav>
          </MDBSideNav>
          <MDBNavbar double expand="md" fixed="top" scrolling>
            <MDBNavbarNav left>
              <MDBNavItem>
                <div
                  onClick={this.handleToggleClickA}
                  key="sideNavToggleA"
                  style={{
                    lineHeight: "32px",
                    marginRight: "1em",
                    verticalAlign: "middle"
                  }}
                >
                  <MDBIcon icon="bars" color="white" size="2x" />
                </div>
              </MDBNavItem>
              <MDBNavItem className="d-none d-md-inline" style={{ paddingTop: 5 }}>
                Property Management
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right style={specialCaseNavbarStyles}>

              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" className="d-inline-inline" />{" "}
                  </MDBDropdownToggle>
                  <MDBDropdownMenu right>
                    <MDBDropdownItem href="#!">Profile</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Settings</MDBDropdownItem>

                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBNavbar>
        </div>
      </Router>
    );
  }
}

export default Navbar;