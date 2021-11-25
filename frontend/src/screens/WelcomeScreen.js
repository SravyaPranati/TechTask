import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

function WelcomeScreen({ history }) {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/welcome");
    }
  }, [history, userInfo]);

  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <h1 style={{ fontSize: "50px",fontWeight:"bold",color:"#fff" }}>SCUBE TECHNOLOGIES LTD. is an information technology and services company based out of 84 Cumbrian Gardens, London, England, United Kingdom.</h1>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default WelcomeScreen;
