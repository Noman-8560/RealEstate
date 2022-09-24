import React from "react";
import { footer } from "../../data/Data";
import "./footer.css";
import FacebookOfficialIcon from "@rsuite/icons/legacy/FacebookOfficial";
import TwitterIcon from "@rsuite/icons/legacy/Twitter";
import YoutubeIcon from "@rsuite/icons/legacy/Youtube";
import HomeIcon from '@rsuite/icons/legacy/Home';
import InstagramIcon from '@rsuite/icons/legacy/Instagram';



const Footer = () => {
  return (
    <>
      <footer>
        <div className="container ">
          <div className="box aa ">
            <div className="logo justify-content-center">
              <div>
                <HomeIcon style={{ fontSize: "4rem" }} color="#27ae60" />
                <h2 className="had1">
                  <i>ABFA</i>
                </h2>
              </div>
              {/* <img src='../images/logo-light.png' alt='' /> */}
              <h2 className="b">Do You Need Help With Anything?</h2>
              <span>
                {" "}
                <a href="https://www.facebook.com/">
                  <FacebookOfficialIcon
                    style={{ fontSize: "2rem" }}
                    color="#27ae60"
                  />{" "}
                </a>
              </span>

              <span>
                {" "}
                <a href="https://www.youtube.com/">
                  <YoutubeIcon
                    style={{ fontSize: "2rem" }}
                    color="#27ae60"
                  />{"  "}
                </a>
              </span>

              <span>
                {" "}
                <a href="https://twitter.com/i/flow/login">
                  <TwitterIcon style={{ fontSize: "2rem" }} color="#27ae60" />{"  "}
                </a>
              </span>

              <span>
                {" "}
                <a href="https://www.instagram.com/7">
                  <InstagramIcon style={{ fontSize: "2rem" }} color="#27ae60" />{"  "}
                </a>
              </span>
            </div>
          </div>

          {/* {footer.map((val) => (
            <div className="box">
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))} */}
        </div>
      </footer>
      <div className="legal">
        <span>© 2022 ABFA Marketing.</span>
      </div>
    </>
  );
};

export default Footer;
