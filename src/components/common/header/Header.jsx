import React, { useState } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";
import RelatedMapIcon from '@rsuite/icons/RelatedMap';
// import { Gear, AddOutline } from '@rsuite/icons';

const Header = () => {
  const [navList, setNavList] = useState(false);

  return (
    <>
      <header>
        <div className="container flex">
          <div >
            <RelatedMapIcon style={{ fontSize: "3rem" }} color="#27ae60"  />
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
            {/* <h4>
              <span>2</span> My List
            </h4> */}
            <button className="btn1 mb-2">
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
