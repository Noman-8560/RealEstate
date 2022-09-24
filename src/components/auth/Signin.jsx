import React from "react";
import {
  Form,
  Button,
  ButtonToolbar,
  Schema,
  FlexboxGrid,
  Container,
} from "rsuite";
import "./signin.css";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

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

const { StringType } = Schema.Types;

const model = Schema.Model({
  email: StringType()
    .isEmail("Please enter a valid email address.")
    .isRequired("This field is required."),
  password: StringType().isRequired("This field is required."),
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
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    if (!formRef.current.check()) {
      console.error("Form Error");
      return;
    }
    console.log(formValue, "Form Value");
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6} xl={6} className="login">
          {/* style={{ width: "25rem" }} */}
          <Card className="shadow e" style={{ width: "27rem" }}>
            <FlexboxGrid>
              <FlexboxGrid.Item>
                <div className="align-items-center d">
                  <h2 className="mb-0">Sign in</h2>
                </div>
                <Form
                  ref={formRef}
                  onChange={setFormValue}
                  onCheck={setFormError}
                  formValue={formValue}
                  model={model}
                >
                  <TextField name="email" label="Email" className="fields" />
                  <TextField
                    name="password"
                    label="Password"
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
                      Sign in
                    </Button>
                  </ButtonToolbar>

                  <div className="d-flex justify-content-center align-items-center mt-4 l">
                    <span className="fw-normal">
                      Not registered?{" "}
                      <Link to="/signup" className="fw-bold aa">
                        Create Account
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
