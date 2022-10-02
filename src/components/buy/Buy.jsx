import React, { useEffect } from "react";
import img from "../images/pricing.jpg";
import Back from "../common/Back";
import "./buy.css";
import { useLocation } from "react-router-dom";
import QueryString from "query-string";
import { API_URL } from "../config/index";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Buy = () => {
  const location = useLocation();

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    // const query = new URLSearchParams(window.location.search);
    const values = QueryString.parse(location.search);

    if (values.success) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (values.canceled) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);
  return (
    <>
      <Card style={{ width: "18rem", marginLeft: "10rem", marginTop: "2rem", marginBottom: "5rem" }}>
        <Card.Img variant="top" src="https://i.imgur.com/EHyR2nP.png" />
        <Card.Body>
          <Card.Title>Farm House</Card.Title>

        </Card.Body>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>Bahria Town</ListGroup.Item>
          <ListGroup.Item>$120</ListGroup.Item>
          <ListGroup.Item>Islamabad</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <form
              action={`${API_URL}/api/stripe/create-checkout-session`}
              method="POST"
            >
              <button className="button" type="submit">
                Checkout
              </button>
            </form>
        </Card.Body>
      </Card>
      {/* <section className="contact mb">
        <Back name="Buy" title="Buy Properties" cover={img} />
        <div className="container">
          <form className="shadow">
            <div className="product">
              <img
                src="https://i.imgur.com/EHyR2nP.png"
                alt="The cover of Stubborn Attachments"
              />
              <div className="description">
                <h3>Stubborn Attachments</h3>
                <h5>$20.00</h5>
              </div>
            </div>
            <form
              action={`${API_URL}/api/stripe/create-checkout-session`}
              method="POST"
            >
              <button className="button" type="submit">
                Checkout
              </button>
            </form>
          </form>
        </div>
      </section> */}
    </>
  );
};

export default Buy;

{
  /* <h4>Fillup The Form</h4> <br />
            <div>
              <input type='text' placeholder='Name' />
              <input type='text' placeholder='Email' />
            </div>
            <input type='text' placeholder='Subject' />
            <textarea cols='30' rows='10'></textarea>
            <button>Submit Request</button> */
}
