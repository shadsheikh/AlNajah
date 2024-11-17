import { section1 } from "./Data";
import "./Section1.css";

const Section1 = () => {
  const display_section1 = () => {
    return section1.map((item, index) => (
      <div className="b mb-5 text-center p-3 shadow rounded mx-2" key={index}>
        <img className="img-fluid mb-3" src={item.img} alt="course" />
        <p className="title">{item.name}</p>
        <p className="desc">{item.desc}</p>
      </div>
    ));
  };

  return (
    <div className="s1 py-5">
      <div className="container">
        <div className="d d-flex flex-wrap justify-content-center">
          {display_section1()}
        </div>
      </div>
    </div>
  );
};

export default Section1;
