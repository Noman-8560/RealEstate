import React from "react";
import Back from "../common/Back";
import Heading from "../common/Heading";
import img from "../images/about.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <section className="about">
        <Back name="About Us" title="About Us - Who We Are?" cover={img} />
        <div className="container flex mtop">
          <div className="left row">
            <Heading
              title="Our Agency Story"
              subtitle="Check out our company story and work process"
            />

            <p>
              Welcome to the fast growing Real Estate Company ABFA Marketing
              Islamabad operating from 15 years. Our expert team is serving many
              housing societies. For marketing purposes and has finished many
              well-known projects reaching excessive excellency. Use of most
              modern Strategies of marketing like e-media. Web-based medium for
              mass connection is one in all our strengths in Real Estate to
              reach-out most number of clients. ABFA Real Estate Agency is
              approving By FBR(Federal Board of Revenue) and SECP(Securities and
              Exchange Commission of Pakistan).
            </p>
            {/* <button className="btn2">More About Us</button> */}
          </div>
          <div className="right row">
            <img src="./immio.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
