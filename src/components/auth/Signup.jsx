import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faEnvelope,
  faUnlockAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
// import {useAlert} from 'react-alert'
import {
  Col,
  Row,
  Form,
  Card,
  Button,
  Container,
  InputGroup,
} from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
// import { Routes } from "../routes";
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
        <Container className="o">
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
                      {/* <InputGroup.Text name="Email">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text> */}
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
                      {/* <InputGroup.Text name="UserName">
                        <FontAwesomeIcon icon={faUser} />
                      </InputGroup.Text> */}
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
                      {/* <InputGroup.Text name="phone_number">
                        <FontAwesomeIcon icon={faUser} />
                      </InputGroup.Text> */}
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
                      {/* <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text> */}
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
                      {/* <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text> */}
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

                  {/* <Form.Group
                    id="confirmPassword"
                    name="cpassword"
                    className="mb-4"
                  ></Form.Group> */}

                  <div className="d-flex align-items-center justify-content-center wrapper ">
                    <Button
                      variant="primary"
                      type="submit"
                      className="w-50  item1"
                    >
                      Sign up
                    </Button>
                  </div>
                </Form>

                {/* <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Already have an account?
                    <Card.Link
                      as={Link}
                      // to={Routes.Signin.path}
                      className="fw-bold"
                    >
                      {` Login here `}
                    </Card.Link>
                  </span>
                </div> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Signup;

// import React, { useState } from "react";
// import {
//   Form,
//   Button,
//   ButtonToolbar,
//   Schema,
//   Panel,
//   FlexboxGrid,
//   Container,
// } from "rsuite";
// import "./signup.css";
// import { Card, Row, Col } from "react-bootstrap";
// import { Link, Redirect } from "react-router-dom";
// import MaskedInput from "react-text-mask";
// import axios from "axios";

// const { StringType, NumberType } = Schema.Types;

// const model = Schema.Model({
//   username: StringType().isRequired("This field is required."),
//   email: StringType()
//     .isEmail("Please enter a valid email address.")
//     .isRequired("This field is required."),
//   phone_number: StringType().isRequired("This field is required."),

//   password: StringType().isRequired("This field is required."),
//   password2: StringType()
//     .addRule((value, data) => {
//       console.log(data);

//       if (value !== data.password) {
//         return false;
//       }

//       return true;
//     }, "The two passwords do not match")
//     .isRequired("This field is required."),
// });

// const InputMask = React.forwardRef(({ onChange, ...rest }, ref) => (
//   <MaskedInput
//     {...rest}
//     ref={ref}
//     className="rs-input"
//     onChange={(event) => {
//       onChange(event.target.value);
//     }}
//   />
// ));

// const TextField = React.forwardRef((props, ref) => {
//   const { name, label, accepter, ...rest } = props;
//   return (
//     <Form.Group controlId={`${name}-4`} ref={ref}>
//       <Form.ControlLabel>{label} </Form.ControlLabel>
//       <Form.Control name={name} accepter={accepter} {...rest} />
//     </Form.Group>
//   );
// });

// const mask = [
//   "(",
//   /[1-9]/,
//   /\d/,
//   ")",
//   " ",
//   /\d/,
//   /\d/,
//   /\d/,
//   "-",
//   /\d/,
//   /\d/,
//   /\d/,
//   /\d/,
//   /\d/,
//   /\d/,
//   /\d/,
// ];

// const Signup = () => {
//   const formRef = React.useRef();
//   const [formError, setFormError] = React.useState({});
//   const [formValue, setFormValue] = React.useState({
//     username: "username",
//     email: "email",
//     phone_number: "phone_number",
//     password: "password",
//     password2: "password2",
//   });
//   const [redirect, setRedirect] = useState(false);

//   // const handleSubmit = () => {
//   //   if (!formRef.current.check()) {
//   //     console.error("Form Error");
//   //     return;
//   //   }
//   // };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Testing");
//     console.log(formValue);
//     console.log("Testing");
//     axios
//       .post("http://127.0.0.1:8000/api/register", {
//         formValue,
//       })
//       .then((res) => {
//         console.log(res);
//         setRedirect(true);
//       })
//       .catch((error) => {
//         console.log("catch");
//         console.log(error.response.data);
//         // let err = "please check the entered fields correctly...";
//         // if (error.response.data.email) err = error.response.data.email;
//         // else if (error.response.data.password)
//         //   err = error.response.data.password;
//         // else if (error.response.data.username)
//         //   err = error.response.data.username;
//         // alert.error(err);
//       });
//   };
//   if (redirect) {
//     return <Redirect to="/" />;
//   }

//   return (
//     <Container>
//       <Row className="justify-content-center">
//         <Col xs={12} md={6} xl={6} className="login">
//           <Card className="shadow e" style={{ width: "30rem" }}>
//             <FlexboxGrid>
//               <FlexboxGrid.Item>
//                 <div className="align-items-center d">
//                   <h2 className="mb-0">Sign up</h2>
//                 </div>
//                 <Form
//                   ref={formRef}
//                   onChange={setFormValue}
//                   onCheck={setFormError}
//                   formValue={formValue}
//                   model={model}
//                   onSubmit={(e) => handleSubmit(e)}
//                 >
//                   <TextField
//                     name="username"
//                     label="Username"
//                     className="fields"
//                   />
//                   <TextField name="email" label="Email" className="fields" />
//                   <TextField
//                     name="phone_number"
//                     label="Phone Number"
//                     mask={mask}
//                     accepter={InputMask}
//                     className="fields"
//                   />
//                   <TextField
//                     name="password"
//                     label="Password"
//                     type="password"
//                     autoComplete="off"
//                     className="fields"
//                   />
//                   <TextField
//                     name="password2"
//                     label="Confirm password"
//                     type="password"
//                     autoComplete="off"
//                     className="fields"
//                   />

//                   <ButtonToolbar className="wrapper">
//                     <Button
//                       appearance="primary"
//                       className="justify-content-center item1"
//                      type="submit"
//                     >
//                       Sign up
//                     </Button>
//                   </ButtonToolbar>

//                   <div className="d-flex justify-content-center align-items-center mt-4 l">
//                     <span className="fw-normal">
//                       Already have Account?{" "}
//                       <Link to="/signin" className="fw-bold aa">
//                         Sign In
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
