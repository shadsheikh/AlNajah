import contact from "../../images/sections/contact.svg";
import "./Contact.css";
import { useForm } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("mzzpwzpb");

  if (state.succeeded) {
    return <p>Thanks for registration!</p>;
  }

  return (
    <div className="getintouch mb-5">
      <div className="container">
        <div className="title pt-1 pb-4 text-center">
          <h4 className="sub-title text-capitalize">
            <span>Registration</span>
          </h4>
        </div>
        <div className="row">
          <div className="c col-lg-6 col-12 mb-lg-0 mb-5">
            <div className="left-side text-lg-start text-center">
              <img className="img-fluid w-75" src={contact} alt="contact" />
            </div>
          </div>
          <div className="c col-lg-6 col-12">
            <div className="right-side">
              <form onSubmit={handleSubmit}>
                <div className="form-group c col-12 mb-3">
                  <label htmlFor="name" className="mb-2 text-capitalize">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control py-2 px-3"
                    id="name"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="form-group c col-12 mb-3">
                  <label htmlFor="email" className="mb-2 text-capitalize">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control py-2 px-3"
                    id="email"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="form-group c col-12 mb-3">
                  <label htmlFor="age" className="mb-2 text-capitalize">
                    Age
                  </label>
                  <input
                    type="number"
                    name="age"
                    className="form-control py-2 px-3"
                    id="age"
                    placeholder="Your Answer"
                    required
                  />
                </div>
                <div className="form-group c col-12 mb-3">
                  <label htmlFor="guardian" className="mb-2 text-capitalize">
                    Guardian name for children under 15
                  </label>
                  <input
                    type="text"
                    name="guardian"
                    className="form-control py-2 px-3"
                    id="guardian"
                    placeholder="Your Answer"
                    required
                  />
                </div>
                <div className="form-group c col-12 mb-3">
                  <label htmlFor="country" className="mb-2 text-capitalize">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    className="form-control py-2 px-3"
                    id="country"
                    placeholder="Your Answer"
                    required
                  />
                </div>
                <div className="form-group c col-12 mb-3">
                  <label htmlFor="city" className="mb-2 text-capitalize">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    className="form-control py-2 px-3"
                    id="city"
                    placeholder="Your Answer"
                    required
                  />
                </div>
                <div className="form-group c col-12 mb-3">
                  <label htmlFor="number" className="mb-2 text-capitalize">
                    Whatsapp Number
                  </label>
                  <input
                    type="text"
                    name="whatsapp_number"
                    className="form-control py-2 px-3"
                    id="number"
                    placeholder="Your Answer"
                    required
                  />
                </div>
                <div className="form-group c col-12 mb-3">
                  <label htmlFor="courses" className="mb-2 text-capitalize">
                    Courses
                  </label>
                  <div className="form-check m-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="courses"
                      value="Noorani Qaidah"
                      id="course1"
                    />
                    <label className="form-check-label" htmlFor="course1">
                      &nbsp; Noorani Qaidah
                    </label>
                  </div>
                  <div className="form-check m-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="courses"
                      value="Quran recitation"
                      id="course2"
                    />
                    <label className="form-check-label" htmlFor="course2">
                      &nbsp; Quran recitation
                    </label>
                  </div>
                  <div className="form-check m-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="courses"
                      value="Quran Memorization"
                      id="course3"
                    />
                    <label className="form-check-label" htmlFor="course2">
                      &nbsp; Quran Memorization
                    </label>
                  </div>
                  <div className="form-check m-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="courses"
                      value="Tafseer of Quran Kareem"
                      id="course4"
                    />
                    <label className="form-check-label" htmlFor="course2">
                      &nbsp; Tafseer of Quran Kareem
                    </label>
                  </div>
                  <div className="form-check m-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="courses"
                      value="Hadith"
                      id="course5"
                    />
                    <label className="form-check-label" htmlFor="course2">
                      &nbsp; Hadith
                    </label>
                  </div>
                  <div className="form-check m-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="courses"
                      value="Fiqh"
                      id="course6"
                    />
                    <label className="form-check-label" htmlFor="course2">
                      &nbsp; Fiqh
                    </label>
                  </div>
                  <div className="form-check m-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="courses"
                      value="Seerah"
                      id="course7"
                    />
                    <label className="form-check-label" htmlFor="course2">
                      &nbsp; Seerah
                    </label>
                  </div>
                  <div className="form-check m-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="courses"
                      value="History"
                      id="course8"
                    />
                    <label className="form-check-label" htmlFor="course2">
                      &nbsp; History
                    </label>
                  </div>
                  <div className="form-check m-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="courses"
                      value="Arabic Language"
                      id="course9"
                    />
                    <label className="form-check-label" htmlFor="course2">
                      &nbsp; Arabic Language
                    </label>
                  </div>
                  <div className="form-check m-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="courses"
                      value="Deeniya Syllabus"
                      id="course10"
                    />
                    <label className="form-check-label" htmlFor="course2">
                      &nbsp; Deeniya Syllabus
                    </label>
                  </div>
                </div>
                <div className="form-group c col-12 mb-3">
                  <label
                    htmlFor="juz_memorised"
                    className="mb-2 text-capitalize"
                  >
                    Juz Memorised (For Quraan students only)
                  </label>
                  <select
                    name="juz_memorised" // Add name attribute
                    className="form-control py-2 px-3"
                    id="juz_memorised"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                  </select>
                </div>
                <div className="form-group c col-12 mb-3">
                  <label
                    htmlFor="surah_memorised"
                    className="mb-2 text-capitalize"
                  >
                    Surah Memorised (For Quraan students only)
                  </label>
                  <input
                    type="text"
                    name="surah_memorised"
                    className="form-control py-2 px-3"
                    id="surah_memorised"
                    placeholder="Your Answer"
                    required
                  />
                </div>
                <div className="form-group c col-12 mb-3">
                  <label htmlFor="islamic_edu" className="mb-2 text-capitalize">
                    Previous Islamic Education if any
                  </label>
                  <input
                    type="text"
                    name="islamic_edu"
                    className="form-control py-2 px-3"
                    id="islamic_edu"
                    placeholder="Your Answer"
                    required
                  />
                </div>
                <div className="form-group c col-12 mb-3">
                  <label htmlFor="language" className="mb-2 text-capitalize">
                    Preferred Language
                  </label>
                  <select
                    name="preferred_language"
                    className="form-control py-2 px-3"
                    id="language"
                  >
                    <option value="English">English</option>
                    <option value="Urdu">Urdu</option>
                  </select>
                </div>
                <div className="form-group c col-12 mb-3">
                  <label htmlFor="teacher" className="mb-2 text-capitalize">
                    Preferred Teacher
                  </label>
                  <select
                    name="preferred_teacher"
                    className="form-control py-2 px-3"
                    id="teacher"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Any">Any</option>
                  </select>
                </div>
                <div className="form-group c col-12 mb-3">
                  <label htmlFor="about_us" className="mb-2 text-capitalize">
                    How Did You Hear About Us?
                  </label>
                  <input
                    type="text"
                    name="about_us"
                    className="form-control py-2 px-3"
                    id="about_us"
                    placeholder="Your Answer"
                    required
                  />
                </div>
                <div className="form-group c col-12 mb-4">
                  <label htmlFor="comment" className="mb-2 text-capitalize">
                    Additional Comment
                  </label>
                  <textarea
                    name="comment"
                    className="form-control py-2 px-3"
                    id="comment"
                    rows="4"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="custom-btn-outline btn text-capitalize w-25 mx-auto"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
