import { Link } from "react-router-dom";
import "./Footer.css";
import { accounts } from "./Data";

const Footer = () => {
  const display_accounts = () => {
    return accounts.map((item, index) => (
      <div
        className={`a account-${index} mx-2 px-2 py-1 rounded-circle shadow-lg`}
        key={Math.random()}
      >
        <a
          className="text-center"
          href={item.link}
          target="_blank"
          rel="noreferrer"
        >
          <i className={item.icon}></i>
        </a>
      </div>
    ));
  };

  return (
    <div className="footer py-3 pb-4">
      <div className="container">
        <div className="footer-top py-3 d-flex justify-content-center">
          {display_accounts()}
        </div>
        <div className="footer-top py-3 d-flex justify-content-center">
          <h6 className="footer-e-mail text-muted ">
            <i className="fas fa-envelope me-2"></i>academy.alnajah23@gmail.com
          </h6>
        </div>
        <div className="copyrights text-center">
          <p className="small text-muted mb-0">
            &copy; Copyrights. All rights reserved.{" "}
            <Link to="/">Al-Najah Online Academy</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
