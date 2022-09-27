import React, { useState } from "react";
import "./signin.css";
import { Col, Row, Form, Button, Container, InputGroup } from "react-bootstrap";

import { Link, useHistory, Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";
// import {useAlert} from 'react-alert'
const Signin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  // const alert = useAlert()
  const history = useHistory();
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState("");
  // const patientdashboard = (data) => {
  //   if (data.user.type == "Patient") {
  //     if (data.is_new_registration) {
  //       console.log(data);
  //       history.push("/signin/newpatientregistration");
  //     } else {
  //       history.push("/all_clinics");
  //     }
  //   } else if (data.user.type == "Manager") {
  //     history.push("/doctor/doctordashboard");
  //   } else if (data.user.type == "Admin") {
      // history.push("/manager/addclinic");
  //   }
  // };

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
            // setError(response.detail);
            // alert.error("invalid Email or Password...");
            history.push("/signin");
          } else {
            setError("invalid Credentials");
            history.push("/signin");
          }
        } else {
          localStorage.setItem("Authorization", `${response.access_token}`);
          // document.getElementById("log_cre").innerHTML = "";
          // patientdashboard(jwt_decode(response.access_token));
          // setError("");
          // alert.success("Sign In Successfully...");
          history.push("/");
          // setRedirect(true);
        }
      })
      .catch((error) => {
        console.log(error);
        // setError("Network error");
        // alert.error("Error in Network or server");
      });
  };
  // if (redirect) {
  //   return <Redirect to="/" />;
  // }

  return (
    <>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          {/* <p className="text-center">
            <Card.Link
              className="text-muted"
              as={Link}
              to={Routes.Landing.path}
            >
              <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to
              homepage
            </Card.Link>
          </p> */}
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

                {/* <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Not registered?
                    <Card.Link
                      className="fw-bold"
                      as={Link}
                      to={Routes.Signup.path}
                    >
                      {` Create account `}
                    </Card.Link>
                  </span>
                </div> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Signin;

// import React from "react";
// import {
//   Form,
//   Button,
//   ButtonToolbar,
//   Schema,
//   FlexboxGrid,
//   Container,
// } from "rsuite";
// import "./signin.css";
// import { Card, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";

// // const JSONView = ({ formValue, formError }) => (
// //   <div style={{ marginBottom: 10 }}>
// //     <Panel className="json-tree-wrapper" header={<p>formValue</p>}>
// //       <JSONTree data={formValue} />
// //     </Panel>

// //     <Panel className="json-tree-wrapper" header={<p>formError</p>}>
// //       <JSONTree data={formError} />
// //     </Panel>
// //   </div>
// // );

// const { StringType } = Schema.Types;

// const model = Schema.Model({
//   email: StringType()
//     .isEmail("Please enter a valid email address.")
//     .isRequired("This field is required."),
//   password: StringType().isRequired("This field is required."),
// });

// const TextField = React.forwardRef((props, ref) => {
//   const { name, label, accepter, ...rest } = props;
//   return (
//     <Form.Group controlId={`${name}-4`} ref={ref}>
//       <Form.ControlLabel>{label} </Form.ControlLabel>
//       <Form.Control name={name} accepter={accepter} {...rest} />
//     </Form.Group>
//   );
// });

// const Signup = () => {
//   const formRef = React.useRef();
//   const [formError, setFormError] = React.useState({});
//   const [formValue, setFormValue] = React.useState({
//     email: "",
//     password: "",
//   });

//   const handleSubmit = () => {
//     if (!formRef.current.check()) {
//       console.error("Form Error");
//       return;
//     }
//     console.log(formValue, "Form Value");
//   };

//   return (
//     <Container>
//       <Row className="justify-content-center">
//         <Col xs={12} md={6} xl={6} className="login">
//           {/* style={{ width: "25rem" }} */}
//           <Card className="shadow e" style={{ width: "27rem" }}>
//             <FlexboxGrid>
//               <FlexboxGrid.Item>
//                 <div className="align-items-center d">
//                   <h2 className="mb-0">Sign in</h2>
//                 </div>
//                 <Form
//                   ref={formRef}
//                   onChange={setFormValue}
//                   onCheck={setFormError}
//                   formValue={formValue}
//                   model={model}
//                 >
//                   <TextField name="email" label="Email" className="fields" />
//                   <TextField
//                     name="password"
//                     label="Password"
//                     type="password"
//                     autoComplete="off"
//                     className="fields"
//                   />

//                   <ButtonToolbar className="wrapper">
//                     <Button
//                       appearance="primary"
//                       className="justify-content-center item1"
//                       onClick={handleSubmit}
//                     >
//                       Sign in
//                     </Button>
//                   </ButtonToolbar>

//                   <div className="d-flex justify-content-center align-items-center mt-4 l">
//                     <span className="fw-normal">
//                       Not registered?{" "}
//                       <Link to="/signup" className="fw-bold aa">
//                         Create Account
//                       </Link>
//                     </span>
//                   </div>
//                 </Form>
//               </FlexboxGrid.Item>
//             </FlexboxGrid>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };
// export default Signup;
