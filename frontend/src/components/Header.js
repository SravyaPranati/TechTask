import React, { useEffect } from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";

function Header() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    
  };

  useEffect(() => {}, [userInfo]);

  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand style={{ fontSize: "30px",fontWeight:"bold",color:"#fff" }} href="/">SCube</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto"></Nav>
          <Nav>
            {userInfo ? (
              <>
                <NavDropdown style={{ fontSize: "20px",fontWeight:"bold",color:"#fff"  }}
                  title={`${userInfo.name}`}
                  id="collasible-nav-dropdown"
                >

                  <NavDropdown.Item  href="/" style={{ fontSize: "20px",fontWeight:"bold" }} onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <Nav.Link style={{ fontSize: "30px",fontWeight:"bold",color:"#fff" }} href="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
