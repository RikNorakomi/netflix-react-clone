import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://pmcvariety.files.wordpress.com/2020/05/netflix-logo.png?w=1024"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        alt="Login avatar"
        src="https://cdn.drawception.com/drawings/RWDTxl2nrF.png"
      />
    </div>
  );
}

export default Nav;
