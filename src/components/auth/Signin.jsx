import React, { useState } from "react";
import "./signin.css";
import { Col, Row, Form, Button, Container, InputGroup, Card  } from "react-bootstrap";
import { Link, useHistory, Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";
// import {useAlert} from 'react-alert';
const Signin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  // const alert = useAlert();
  const history = useHistory();
  const [error, setError] = useState("");


  let loginStatusCode;
  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        loginStatusCode = res.status;
        return res.json();
      })
      .then((response) => {
        console.log(response);
        // setRedirect(true);
        if (loginStatusCode >= 400 && loginStatusCode <= 499) {
          if (response.detail) {
            setError(response.detail);
            // alert.error('invalid Email or Password...')
            history.push("/signin");
            // alert("Error")
          } else {
            setError("invalid Credentials");
            history.push("/signin");
            // alert("Error")
          }
        } else {
          localStorage.setItem("Authorization", `${response.access_token}`);
          setError("");
          // alert.success('Sign In Successfully...')
          history.push("/");
          // alert("Success")
        }
      })
      .catch((error) => {
        console.log(error);
        // setError("Network error");
        // alert.error("Error in Network or server");
      });
  };


  return (
    <>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={6} xl={6} className="login">
              <div
                className="shadow e  shadow-soft border border-light p-4 p-lg-5 fmxw-500 "
                style={{ width: "27rem" }}
              >
                <div className="text-center text-md-center mb-4 mt-md-0 d">
                  <h3 className="mb-0">Sign in</h3>
                </div>
                <Form onSubmit={(e) => handleSubmit(e)} className="mt-4">
                  <Form.Group id="email" className="mb-4 fields">
                    <Form.Label>Your Email</Form.Label>
                    <InputGroup>
                      <Form.Control
                        name="Email"
                        autoFocus
                        required
                        type="email"
                        onChange={(e) => setemail(e.target.value)}
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group>
                    <Form.Group id="password" className="mb-4 fields">
                      <Form.Label>Your Password</Form.Label>
                      <InputGroup>
                        <Form.Control
                          name="Password"
                          required
                          type="password"
                          onChange={(e) => setpassword(e.target.value)}
                        />
                      </InputGroup>
                    </Form.Group>
                  </Form.Group>
                  <div className="d-flex align-items-center justify-content-center wrapper">
                    <Button
                      variant="primary"
                      type="submit"
                      className="w-50  item1"
                    >
                      Sign in
                    </Button>
                  </div>
                </Form>

                <div className="d-flex justify-content-center align-items-center mt-4 l">
                  <span className="fw-normal">
                    Not registered?
                    <Card.Link
                      className="fw-bold"
                      as={Link}
                      to={"/signup"}
                    >
                      {` Create account `}
                    </Card.Link>
                  </span>
                </div> 
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
    </>
  );
};

export default Signin;
