import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ShopHeader({ children }) {
  const [isDarkNav, setIsDarkNav] = useState(false);

  const toggleDarkNav = () => {
    const elements = document.getElementsByClassName("navbar-collapse");
    // const removable = document.getElementsByClassName("removables");
    if (elements.length > 0) {
      elements[0].classList.toggle("dark-nav");
      elements[0].classList.toggle("dark-nav-list");
      // removable[0].classList.toggle("dark-nav-removables");
    }
  };
  const scrollToFooter = () => {
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      {/* HEADER START */}
      <div className="background-pList">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img
                src="https://htmldesigntemplates.com/html/eventiz/images/logo-white.png"
                alt=""
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={toggleDarkNav}
            >
              <span className="fa fa-bars" style={{ color: "white" }} />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <Link
                    className="nav-link active text-white"
                    aria-current="page"
                    to="/"
                  >
                    HOME
                  </Link>
                </li>
                <hr className="nav-separator" />
                <li className="nav-item">
                  <Link
                    className="nav-link active text-white"
                    aria-current="page"
                    to="/product-list"
                  >
                    SHOP
                  </Link>
                </li>
                <hr className="nav-separator" />
                <li className="nav-item">
                  <Link
                    className="nav-link active text-white"
                    aria-current="page"
                    to="/product-cart"
                  >
                    CART
                  </Link>
                </li>
                <hr className="nav-separator" />
                <li className="nav-item">
                  <Link
                    className="nav-link active text-white"
                    aria-current="page"
                    to="/product-checkout"
                  >
                    CHECKOUT
                  </Link>
                </li>
                <hr className="nav-separator" />
                <li className="nav-item">
                  <Link
                    className="nav-link active text-white"
                    aria-current="page"
                    to="/view-all"
                  >
                    ADMIN
                  </Link>
                </li>
                <hr className="nav-separator" />
                <li className="nav-item">
                  <button
                    className="nav-link active text-white btn"
                    aria-current="page"
                    onClick={scrollToFooter}
                  >
                    CONTACT US
                  </button>
                </li>
                
              </ul>
              <div className="removables d-flex justify-content-center">
                <Link to="" className="a-tag">
                  LOGIN
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {/* HEADER END */}

        {/* children */}
        {children}
      </div>
    </div>
  );
}

export default ShopHeader;
