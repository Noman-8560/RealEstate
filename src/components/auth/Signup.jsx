
import React from "react";
import {
  Form,
  Button,
  ButtonToolbar,
  Schema,
  Panel,
  FlexboxGrid,
  Container,
} from "rsuite";
import "./signup.css";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import MaskedInput from 'react-text-mask';


const { StringType, NumberType } = Schema.Types;

const model = Schema.Model({
  name: StringType().isRequired("This field is required."),
  email: StringType()
    .isEmail("Please enter a valid email address.")
    .isRequired("This field is required."),
  phone: StringType().isRequired("This field is required."),

  password: StringType().isRequired("This field is required."),
  verifyPassword: StringType()
    .addRule((value, data) => {
      console.log(data);

      if (value !== data.password) {
        return false;
      }

      return true;
    }, "The two passwords do not match")
    .isRequired("This field is required."),
});

const InputMask = React.forwardRef(({ onChange, ...rest }, ref) => (
  <MaskedInput
    {...rest}
    ref={ref}
    className="rs-input"
    onChange={event => {
      onChange(event.target.value);
    }}
  />
));

const TextField = React.forwardRef((props, ref) => {
  const { name, label, accepter, ...rest } = props;
  return (
    <Form.Group controlId={`${name}-4`} ref={ref}>
      <Form.ControlLabel>{label} </Form.ControlLabel>
      <Form.Control name={name} accepter={accepter} {...rest} />
    </Form.Group>
  );
});

const mask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/,/\d/,/\d/,/\d/, /\d/];


const Signup = () => {
  const formRef = React.useRef();
  const [formError, setFormError] = React.useState({});
  const [formValue, setFormValue] = React.useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    verifyPassword: "",
  });

  const handleSubmit = () => {
    if (!formRef.current.check()) {
      console.error("Form Error");
      return;
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6} xl={6} className="login">
          <Card className="shadow e" style={{ width: "30rem" }}>
            <FlexboxGrid>
              <FlexboxGrid.Item>
                <div className="align-items-center d">
                  <h2 className="mb-0">Sign up</h2>
                </div>
                <Form
                  ref={formRef}
                  onChange={setFormValue}
                  onCheck={setFormError}
                  formValue={formValue}
                  model={model}
                >
                  <TextField name="name" label="Username" className="fields" />
                  <TextField name="email" label="Email" className="fields" />
                  <TextField
                    name="phone"
                    label="Phone Number"
                    mask={mask}
                    accepter={InputMask}
                    className="fields"
                  />
                  <TextField
                    name="password"
                    label="Password"
                    type="password"
                    autoComplete="off"
                    className="fields"
                  />
                  <TextField
                    name="verifyPassword"
                    label="Confirm password"
                    type="password"
                    autoComplete="off"
                    className="fields"
                  />

                  <ButtonToolbar className="wrapper">
                    <Button
                      appearance="primary"
                      className="justify-content-center item1"
                      onClick={handleSubmit}
                    >
                      Sign up
                    </Button>
                  </ButtonToolbar>

                  <div className="d-flex justify-content-center align-items-center mt-4 l">
                    <span className="fw-normal">
                      Already have Account?{" "}
                      <Link to="/signin" className="fw-bold aa">
                        Sign In
                      </Link>
                    </span>
                  </div>
                </Form>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Signup;



// import React from "react";
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
// import { Link } from "react-router-dom";
// import MaskedInput from 'react-text-mask';
// import axios from 'axios'


// const { StringType, NumberType } = Schema.Types;

// const model = Schema.Model({
//   name: StringType().isRequired("This field is required."),
//   email: StringType()
//     .isEmail("Please enter a valid email address.")
//     .isRequired("This field is required."),
//   phone: StringType().isRequired("This field is required."),

//   password: StringType().isRequired("This field is required."),
//   verifyPassword: StringType()
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
//     onChange={event => {
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

// const mask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/,/\d/,/\d/,/\d/, /\d/];


// const Signup = () => {
//   const formRef = React.useRef();
//   const [formError, setFormError] = React.useState({});
//   const [formValue, setFormValue] = React.useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     verifyPassword: "",
//   });

//   const handleSubmit =  (e) =>{
//     e.preventDefault();
//       axios.post('http://127.0.0.1:8000/api/register',{
//       "first_name": firstName,
//       "last_name": lastName,
//       "username": username,
//       "email": email,
//       "password": password,
//       "password2": passwordConfirm
//     })
//     .then(res=>{
//       console.log(res);
//       setRedirect(true);
//     })
//     .catch(error=>{
//       console.log('catch');
//       console.log(error.response.data);
//       let err = 'please check the entered fields correctly...'
//       if(error.response.data.email) err = error.response.data.email
//       else if(error.response.data.password) err = error.response.data.password 
//       else if(error.response.data.username) err = error.response.data.username 
//       alert.error(err)
//     })
   

//   }
//   if(redirect){
//     return <Redirect to="/signin/newpatientregistration" />
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
//                 >
//                   <TextField name="name" label="Username" className="fields" />
//                   <TextField name="email" label="Email" className="fields" />
//                   <TextField
//                     name="phone"
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
//                     name="verifyPassword"
//                     label="Confirm password"
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

















