import React, { useEffect } from "react";
import "./buy.css";
import { useLocation } from "react-router-dom";
import QueryString from "query-string";
import { API_URL } from "../config/index";
import Card from "react-bootstrap/Card";
import img from "../images/buy.png"

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
      <Card className="bg-light shadow shadow-soft border border-light" style={{ width: "18rem", marginLeft: "10rem", marginTop: "2rem", marginBottom: "5rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>

        </Card.Body>
        <div className="text">
                <div className="category flex">
                  <span className="rec marg">House</span>
                  {/* <i className='fa fa-heart'></i> */}
                </div>
                <h4 className="marg">Bahria Town</h4>
                <p className="marg">
                  <i className="fa fa-location-dot"></i> Islamabad
                </p>
                <p className="marg">$5000</p>
              </div>
        {/* <ListGroup className="list-group-flush">
        <ListGroup.Item>Bahria Town</ListGroup.Item>
          <ListGroup.Item>$120</ListGroup.Item>
          <ListGroup.Item>Islamabad</ListGroup.Item>
        </ListGroup> */}
        <Card.Body>
        <form
              action={`${API_URL}/api/stripe/create-checkout-session`}
              method="POST"
            >
              <button className="button btn" type="submit">
                Checkout
              </button>
            </form>
        </Card.Body>
      </Card>
   
    </>
  );
};

export default Buy;

