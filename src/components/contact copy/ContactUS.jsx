import contact from "../../images/sections/contact.svg";
import "./Contact.css";
import { useForm } from "@formspree/react";

function ContactUS() {
  const [state, handleSubmit] = useForm("xpwaegjv");

  if (state.succeeded) {
    return <p>Thanks for registration!</p>;
  }

  return (
    <div className="getintouch mb-5">
      <div className="container">
        <div className="title pt-1 pb-4 text-center">
          <h4 className="sub-title text-capitalize">
            Contact <span>US</span>
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
                <div className="form-group c col-12 mb-4">
                  <label htmlFor="comment" className="mb-2 text-capitalize">
                    Message
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

export default ContactUS;
