import "./Hero.css";
import { Link } from "react-router-dom";
import about from "../../../images/sections/about.png";

function Hero() {
  return (
    <div className="hero py-2 mb-5">
      <div className="container">
        <div className="title pt-1 pb-5 text-center">
          <h4 className="sub-title text-capitalize">
            about <span>us</span>
          </h4>
        </div>
        <div className="row align-items-center">
          <div className="c col-lg-6 col-12">
            <div className="left-side mb-lg-0 mb-5 text-lg-start text-center">
              <h5 className="title text-capitalize mb-3">
                we are <span>Al-Najah Online Academy</span>
              </h5>
              <p className="desc mb-lg-4 mb-5">
                Al Najah Online International Academy was founded with a clear
                mission: to provide a comprehensive and holistic educational
                experience that blends Islamic values with modern academic
                excellence. For over 4 years, we have been serving students from
                15 countries, helping them grow spiritually and academically—all
                through the convenience of online learning.
              </p>
              <p className="desc mb-lg-4 mb-5">
                At Al Najah Academy, we believe that education should be
                accessible and tailored to each student’s unique needs. Our
                carefully selected team of expert teachers is dedicated to
                nurturing students with the highest standards of both Islamic
                knowledge and general education. Whether you're looking to
                deepen your understanding of the Qur’an or excel in subjects
                like English, Mathematics, Science, and more, we offer a
                complete learning solution, all in one place.
              </p>
              <p className="desc mb-lg-4 mb-5">
                Our Islamic courses cover essential areas such as Qur’an
                Recitation and Memorization, Tafseer, Hadith, Fiqh, and Seerah,
                while our general education offerings include English speaking
                classes (including trending English Phonics) and other key
                school subjects. We also provide specialized coaching for test
                preparation to help students succeed academically.
              </p>
            </div>
          </div>
          <div className="c col-lg-6 col-12">
            <div className="right-side text-lg-end text-center">
              <img className="w-75 img-fluid mb-5" src={about} alt="about" />
              <div className="mx-auto dc text-center">
                <Link className="cources text-capitalize" to="/courses">
                  discover our courses{" "}
                  <i className="fas fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h5 className="title text-capitalize mb-3">
              <span>Our Vision:</span>
            </h5>
            <p className="desc mb-lg-4 mb-5">
              To become a leading global hub for Islamic and academic education,
              offering high-quality, flexible learning opportunities to students
              worldwide through our fully online platform.
            </p>
            <h5 className="title text-capitalize mb-3">
              <span>Our Mission:</span>
            </h5>
            <p className="desc mb-lg-4 mb-5">
              To empower students with knowledge that enriches their lives both
              spiritually and intellectually, ensuring they thrive in today’s
              world while staying grounded in Islamic values.
            </p>
            <h5 className="title text-capitalize mb-3">
              <span>Our Founder:</span>
            </h5>
            <p className="desc mb-lg-4 mb-5">
              Mufti Abu Safwan Farooqui Nadwi, the visionary behind Al Najah
              Academy, is a distinguished Islamic scholar and educator with a
              deep commitment to spreading Islamic knowledge. He also serves as
              a teacher of Tafseer, Fiqh, and Arabic literature at Jamea Reazul
              Uloom Khajrana, Indore, one of the oldest and most respected
              Islamic institutions in Madhya Pradesh.
            </p>
            <p className="desc mb-lg-4 mb-5">
              Mufti Farooquis academic journey includes studies at two esteemed
              institutions: Darul Uloom Nadwatul Ulama and Al Mahadul Aali Al
              Islami, Hyderabad. His extensive teaching experience, combined
              with his deep understanding of Islamic scholarship, drives Al
              Najah Academy’s mission to deliver a world-class education.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
