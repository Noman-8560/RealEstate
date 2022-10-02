import React, { useState, useEffect } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";
import HomeIcon from "@rsuite/icons/legacy/Home";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const [navList, setNavList] = useState(false);
  const history = useHistory();
  const signin = () => {
    history.push("/signin");
  };
  const home = () => {
    history.push("/");
  };
  const [authToken, setAuthToken] = useState(false);
  // const [dashboardLink, setDashboardLink] = useState("/");

  // useEffect(() => {
  //   let token = localStorage.getItem("Authorization");
  //   if (token) {
  //     console.log(token);
  //     axios
  //       .get("http://localhost:8000/api/user", {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //       })
  //       .then((res) => {
  //         console.log("Yes...");
  //         console.log(res);
  //         setAuthToken(true);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         setAuthToken(false);
  //       });
  //   } else {
  //     console.log("no token");
  //     setAuthToken(false);
  //   }
  // }, []);

  return (
    <>
      <header>
        <div className="container flex">
          <div onClick={home}>
            <HomeIcon style={{ fontSize: "3rem" }} color="#27ae60" />
            <p className="had1" style={{ fontSize: "1rem" }}>
              <i>
                <b>ABFA</b>
              </i>
            </p>
          </div>
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
            {/* {authToken ? (
              <>
                <button
                  // as={Link}
                  // to={dashboardLink}
                  className="mt-1"
                  variant="outline-secondary"
                >
                  {" "}
                  Dashboard
                </button>
              </>
            ) : (
              <button className="btn1 mb-2" onClick={signin}>
                <i className="fa fa-sign-out"></i> Sign In
              </button>
            )} */}

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
