import React, { useState } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";
import HomeIcon from '@rsuite/icons/legacy/Home';
import { useHistory } from "react-router-dom";

const Header = () => {
  const [navList, setNavList] = useState(false);
  const history = useHistory();
  const signin = () => {
    history.push("/signin");
  };

  return (
    <>
      <header>
        <div className="container flex">
          <div >
            <HomeIcon style={{ fontSize: "3rem" }} color="#27ae60"  />
            <p className="had1" style={{ fontSize: "1rem" }}>
              <i><b>ABFA</b></i>
            </p>
          </div>

          {/* <div className="logo">
            <h1 className="had1"><i>ABFA</i></h1>
            <img src='./images/logo1.png' alt='' />
          </div> */}
          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="button flex">
            <button className="btn1 mb-2" onClick={signin}>
              <i className="fa fa-sign-out"></i> Sign In
            </button>
            <br />
          </div>

          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
