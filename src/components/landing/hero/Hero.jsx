import { Link } from "react-router-dom";
import "./Hero.css";
import hero from "../../../images/landing.jpg";

function Hero() {
  return (
    <div className="hero py-5 mb-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="c col-lg-6 col-12">
            <div className="left-side mb-lg-0 mb-5 text-lg-start text-center">
              <h3 className="title text-capitalize">
                welcome to <span>Al-Najah Online Academy</span> !
              </h3>
              <p className="sub-title text-muted text-capitalize">
                where your future begins
              </p>
              <p className="desc pb-3">
                Welcome to Al Najah Online Academy, your gateway to a world of
                profound Islamic education and spiritual growth. Our academy is
                dedicated to providing a comprehensive and flexible learning
                experience, designed to meet the diverse needs of our students.
              </p>
              <div className="buttons">
                <Link
                  className="btn text-capitalize me-3 shadow custom-btn"
                  to="/about"
                >
                  read more<i className="ms-2 fas fa-chevron-right"></i>
                </Link>
                <Link
                  className="btn text-capitalize shadow custom-btn-outline"
                  to="/contact"
                >
                  get in touch<i className="ms-2 fas fa-envelope"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="c col-lg-6 col-12">
            <div className="right-side text-lg-end text-center">
              <img className="w-75 img-fluid" src={hero} alt="hero" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
