import React, { useState } from "react";
// import {useAlert} from 'react-alert'
import "./signup.css";
import {
  Col,
  Row,
  Form,
  Button,
  Container,
  InputGroup,
  Card,
} from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
// import { Alert } from "bootstrap";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [passwordConfirm, setpasswordConfirm] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [isError, setIsError] = useState("");
  // const alert = useAlert();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/register", {
        username: username,
        email: email,
        phone_number: phone_number,
        password: password,
        password2: passwordConfirm,
      })
      .then((res) => {
        console.log(res);
        setRedirect(true);
      })
      .catch((error) => {
        console.log("catch");
        console.log(error.response.data);
        let err = "please check the entered fields correctly...";
        if (error.response.data.email) err = error.response.data.email;
        else if (error.response.data.password)
          err = error.response.data.password;
        else if (error.response.data.username)
          err = error.response.data.username;
        // alert.error(err)
      });
  };
  if (redirect) {
    return <Redirect to="/" />;
  }

  const checkValidation = (e) => {
    const confpass = e.target.value;
    setpasswordConfirm(confpass);
    if (password != confpass) {
      setIsError("Password do not Matched");
    } else {
      setIsError("");
    }
  };

  return (
    <main>
      <section
        className=" my-5 mt-lg-6 mb-lg-5"
      >
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={6} xl={6} className="login">
              <div className="shadow e  shadow-soft border border-light p-4 p-lg-5 fmxw-500 " style={{ width: "30rem" }}>
                <div className="text-center text-md-center mb-4 mt-md-0 d">
                  <h3 className="mb-0">Create an account</h3>
                </div>
                <Form onSubmit={(e) => handleSubmit(e)} className="mt-4">
                  <Form.Group id="email" className="mb-4 fields">
                    <Form.Label>Your Email</Form.Label>
                    <InputGroup>
                      <Form.Control
                        autoFocus
                        required
                        type="email"
                        name="Email"
                        // placeholder="example@company.com"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group id="username" className="mb-4 fields">
                    <Form.Label>Your username</Form.Label>
                    <InputGroup>
                      <Form.Control
                        autoFocus
                        name="UserName"
                        required
                        type="text"
                        // placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group id="phone_number" className="mb-4 fields">
                    <Form.Label>Phone</Form.Label>
                    <InputGroup>
                      <Form.Control
                        autoFocus
                        name="phone_number"
                        required
                        type="text"
                        // placeholder="phone_number"
                        onChange={(e) => setPhone_number(e.target.value)}
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group id="password" className="mb-4 fields">
                    <Form.Label>Your Password</Form.Label>
                    <InputGroup>
                      <Form.Control
                        required
                        type="password"
                        name="Password"
                        // placeholder="Password"
                        onChange={(e) => setpassword(e.target.value)}
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group
                    id="confirmPassword"
                    name="cpassword"
                    className="mb-4 fields"
                  >
                    <Form.Label>Confirm Password</Form.Label>
                    <InputGroup>

                      <Form.Control
                        name="cpassword"
                        required
                        type="password"
                        // placeholder="Confirm Password"
                        onChange={(e) => checkValidation(e)}
                      />
                    </InputGroup>
                    <div className="text-danger mt-2 ms-1" role="alert">
                      {isError}
                    </div>
                  </Form.Group>

                  <div className="d-flex align-items-center justify-content-center wrapper">
                    <Button
                      variant="primary"
                      type="submit"
                      className="w-50  item1"
                    >
                      Sign up
                    </Button>
                  </div>
                </Form>

                <div className="d-flex justify-content-center align-items-center mt-4 l">
                  <span className="fw-normal">
                    Already have an account?
                    <Card.Link
                      as={Link}
                      to={"/signin"}
                      className="fw-bold"
                    >
                      {` Signin here `}
                    </Card.Link>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Signup;

