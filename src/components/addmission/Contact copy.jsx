import contact from "../../images/sections/contact.svg";
import "./Contact.css";
import { useForm } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("mzzpwzpb");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className="getintouch mb-5">
      <div className="container">
        <div className="title pt-1 pb-4 text-center">
          <h4 className="sub-title text-capitalize">
            contact <span>us</span>
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
                    className="form-control py-2 px-3"
                    id="number"
                    placeholder="Your Answer"
                    required
                  />
                </div>
                <div>
                  <div className="form-group c col-12 mb-3">
                    <label htmlFor="courses" className="mb-2 text-capitalize">
                      Courses
                    </label>
                  </div>
                  <div className="form-check m-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="courses"
                      value="Noorani Qaidah"
                      id="flexCheckDefault"
                      // onChange={
                      // 	handleChange
                      // }
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      &nbsp; Noorani Qaidah
                    </label>
                  </div>
                  <div className="form-check m-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="courses"
                      value="Quran recitation"
                      id="flexCheckDefault"
                      // onChange={
                      // 	handleChange
                      // }
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      &nbsp; Quran recitation
                    </label>
                  </div>
                  <div className="form-check m-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="courses"
                      value="Quran Memorization"
                      id="flexCheckDefault"
                      // onChange={
                      // 	handleChange
                      // }
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      &nbsp; Quran Memorization
                    </label>
                  </div>
                  <div className="form-check m-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="courses"
                      value="Tafseer of Quran Kareem"
                      id="flexCheckDefault"
                      // onChange={
                      // 	handleChange
                      // }
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      &nbsp; Tafseer of Quran Kareem
                    </label>
                  </div>
                  <div className="form-check m-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="courses"
                      value="Hadith"
                      id="flexCheckDefault"
                      // onChange={
                      // 	handleChange
                      // }
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      &nbsp; Hadith
                    </label>
                  </div>
                  <div className="form-check m-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="courses"
                      value="Fiqh"
                      id="flexCheckDefault"
                      // onChange={
                      // 	handleChange
                      // }
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      &nbsp; Fiqh
                    </label>
                  </div>
                  <div className="form-check m-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="courses"
                      value="Seerah"
                      id="flexCheckDefault"
                      // onChange={
                      // 	handleChange
                      // }
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      &nbsp; Seerah
                    </label>
                  </div>
                  <div className="form-check m-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="courses"
                      value="History"
                      id="flexCheckDefault"
                      // onChange={
                      // 	handleChange
                      // }
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      &nbsp; History
                    </label>
                  </div>
                  <div className="form-check m-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="courses"
                      value="Arabic Language"
                      id="flexCheckDefault"
                      // onChange={
                      // 	handleChange
                      // }
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      &nbsp; Arabic Language
                    </label>
                  </div>
                  <div className="form-check m-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="courses"
                      value="Deeniyat syllabus"
                      id="flexCheckDefault"
                      // onChange={
                      // 	handleChange
                      // }
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      &nbsp; Deeniyat syllabus (specially designed by our
                      founder for kids for age 4 to 18 in 12 levels)
                    </label>
                  </div>
                </div>
                <div className="form-group c col-12 mb-3">
                  <label
                    htmlFor="juz_memorised"
                    className="mb-2 text-capitalize"
                  >
                    juz Memorised (For Quraan students only)
                  </label>
                  <select
                    type="number"
                    className="form-control py-2 px-3"
                    id="juz_memorised"
                  >
                    <option value="Option 1">1</option>
                    <option value="Option 2">2</option>
                    <option value="Option 3">3</option>
                    <option value="Option 4">4</option>
                    <option value="Option 5">5</option>
                    <option value="Option 6">6</option>
                    <option value="Option 7">7</option>
                    <option value="Option 8">8</option>
                    <option value="Option 9">9</option>
                    <option value="Option 10">10</option>
                    <option value="Option 11">11</option>
                    <option value="Option 12">12</option>
                    <option value="Option 13">13</option>
                    <option value="Option 14">14</option>
                    <option value="Option 15">15</option>
                    <option value="Option 16">16</option>
                    <option value="Option 17">17</option>
                    <option value="Option 18">18</option>
                    <option value="Option 19">19</option>
                    <option value="Option 20">20</option>
                    <option value="Option 21">21</option>
                    <option value="Option 22">22</option>
                    <option value="Option 23">23</option>
                    <option value="Option 24">24</option>
                    <option value="Option 25">25</option>
                    <option value="Option 26">26</option>
                    <option value="Option 27">27</option>
                    <option value="Option 28">28</option>
                    <option value="Option 29">29</option>
                    <option value="Option 30">30</option>
                  </select>
                </div>
                <div className="form-group c col-12 mb-3">
                  <label
                    htmlFor="surah_memorised"
                    className="mb-2 text-capitalize"
                  >
                    Surah Memorised (For Quraan students only )
                  </label>
                  <input
                    type="text"
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
                    className="form-control py-2 px-3"
                    id="islamic_edu"
                    placeholder="Your Answer"
                    required
                  />
                </div>
                <div className="form-group c col-12 mb-3">
                  <label htmlFor="language" className="mb-2 text-capitalize">
                    Preferd language
                  </label>
                  <select
                    type="number"
                    className="form-control py-2 px-3"
                    id="language"
                  >
                    <option value="Option 1">English</option>
                    <option value="Option 2">Urdu</option>
                  </select>
                </div>
                <div className="form-group c col-12 mb-3">
                  <label htmlFor="teacher" className="mb-2 text-capitalize">
                    Preferd Teacher
                  </label>
                  <select
                    type="number"
                    className="form-control py-2 px-3"
                    id="teacher"
                  >
                    <option value="Option 1">Male</option>
                    <option value="Option 2">Female</option>
                    <option value="Option 3">Any</option>
                  </select>
                </div>
                <div className="form-group c col-12 mb-3">
                  <label htmlFor="about_us" className="mb-2 text-capitalize">
                    How Did You Hear About Us?
                  </label>
                  <input
                    type="text"
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
