import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { navbar_items } from "./Data";

const Navbar = () => {
  const [s, setS] = useState(false);

  const display_navbar_items = () => {
    return navbar_items.map((item) => (
      <li className="nav-item me-lg-3 my-lg-0 my-2" key={Math.random()}>
        <NavLink
          className="nav-link text-capitalize position-relative hover"
          to={`/${item.name === "" ? "" : item.name}`}
        >
          <i className={`${item.icon} me-2`}></i>
          {item.name === "" ? "home" : item.name}
        </NavLink>
      </li>
    ));
  };

  const add_shadow = () => {
    window.scrollY >= 80 ? setS(true) : setS(false);
  };

  useEffect(() => {
    const handleScroll = () => add_shadow();

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("DOMContentLoaded", add_shadow);

    // Cleanup function to remove the event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("DOMContentLoaded", add_shadow);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light text-dark fixed-top ${
        s ? "shadow-lg" : "shadow"
      }`}
    >
      <div className="container py-2">
        <Link className="navbar-brand" to="/">
          <div className="logo">AlNajah Online Academy</div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">{display_navbar_items()}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
