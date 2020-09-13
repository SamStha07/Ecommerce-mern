import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

import { connect } from 'react-redux';

function HeaderNavbar() {
  // const { authenticate } = props.auth;

  // const loginToShow = () => {
  //   if (!authenticate) {
  //     return (
  //       <li className="nav-link">
  //         <NavLink to="/login" className="nav-link">
  //           Login
  //         </NavLink>
  //       </li>
  //     );
  //   }
  // };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link to="/" className="navbar-brand">
            Admin Dashboard
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            </Nav>
            <Nav>
              <li className="nav-link">
                <NavLink to="/signup" className="nav-link">
                  Sign up
                </NavLink>
              </li>
              {/* {loginToShow} */}
              <li className="nav-link">
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

// function mapStateToProps(state) {
//   return { auth: state.auth };
// }

// export default connect(mapStateToProps)(HeaderNavbar);
export default HeaderNavbar;
