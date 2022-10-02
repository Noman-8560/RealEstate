import React, { useState, useEffect } from "react";
import "./recent.css";

const RecentCard = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    // let token = localStorage.getItem("Authorization");
    fetch("http://127.0.0.1:8000/api/list/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log(result);
        setCardData(result);
      });
  }, []);

  return (
    <>
      <div className="content grid3 mtop">
        {cardData.map((cdata, index) => {
          return (
            <div className="box shadow" key={index}>
              <div className="img">
                <img
                  src={`http://127.0.0.1:8000${cdata.images}`}
                  alt="property"
                />
              </div>
              <div className="text">
                <div className="category flex">
                  <span className="rec">{cdata.category}</span>
                  {/* <i className='fa fa-heart'></i> */}
                </div>
                <h4>{cdata.name}</h4>
                <p>
                  <i className="fa fa-location-dot"></i> {cdata.address}
                </p>
                <p>{cdata.price} PKR</p>
              </div>
              <hr />
              {/* <div className="button flex">
                <div>
                  <button className="btn2">Buy Now</button>
                </div>
              </div> */}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecentCard;
