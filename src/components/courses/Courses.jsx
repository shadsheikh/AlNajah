import Section1 from "./sections/Section1";
import "./Courses.css";

function Courses() {
  return (
    <>
      <div className="container">
        <div className="title py-3 text-center">
          <h4 className="sub-title text-capitalize">
            browse our <span>courses</span>
          </h4>
        </div>
      </div>
      <Section1 />
    </>
  );
}

export default Courses;
