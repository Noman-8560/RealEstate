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

// const JSONView = ({ formValue, formError }) => (
//   <div style={{ marginBottom: 10 }}>
//     <Panel className="json-tree-wrapper" header={<p>formValue</p>}>
//       <JSONTree data={formValue} />
//     </Panel>

//     <Panel className="json-tree-wrapper" header={<p>formError</p>}>
//       <JSONTree data={formError} />
//     </Panel>
//   </div>
// );

const { StringType, NumberType } = Schema.Types;

const model = Schema.Model({
  name: StringType().isRequired("This field is required."),
  email: StringType()
    .isEmail("Please enter a valid email address.")
    .isRequired("This field is required."),
  age: NumberType("Please enter a valid number.").range(
    18,
    30,
    "Please enter a number from 18 to 30"
  ),
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

const TextField = React.forwardRef((props, ref) => {
  const { name, label, accepter, ...rest } = props;
  return (
    <Form.Group controlId={`${name}-4`} ref={ref}>
      <Form.ControlLabel>{label} </Form.ControlLabel>
      <Form.Control name={name} accepter={accepter} {...rest} />
    </Form.Group>
  );
});

const Signup = () => {
  const formRef = React.useRef();
  const [formError, setFormError] = React.useState({});
  const [formValue, setFormValue] = React.useState({
    name: "",
    email: "",
    age: "",
    password: "",
    verifyPassword: "",
  });

  const handleSubmit = () => {
    if (!formRef.current.check()) {
      console.error("Form Error");
      return;
    }
    console.log(formValue, "Form Value");
  };

  // const handleCheckEmail = () => {
  //   formRef.current.checkForField("email", (checkResult) => {
  //     console.log(checkResult);
  //   });
  // };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6} xl={6} className="login">
          {/* style={{ width: "25rem" }} */}
          <Card className="shadow e" style={{ width: "30rem" }}>
            <FlexboxGrid>
              <FlexboxGrid.Item >
                <div className="align-items-center d">
                  <h3 className="mb-0">Signup</h3>
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
                  <TextField name="age" label="Age" className="fields" />
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

                  <ButtonToolbar>
                    <Button appearance="primary" className="but" onClick={handleSubmit}>
                      Submit
                    </Button>
                  </ButtonToolbar>
                </Form>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </Card>
        </Col>