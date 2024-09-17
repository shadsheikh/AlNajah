import "./Stats.css";
import { stats } from "./Data.js";

const Stats = () => {
  const display_stats = () => {
    return stats.map((item, index) => (
      <div className={`stat ${item.name} text-center mb-lg-0 mb-4`} key={index}>
        <h3 className="title text-capitalize mb-3">{item.name}</h3>
        <p className="num">+ {item.number}</p>
      </div>
    ));
  };

  return (
    <div className="stats py-5 mb-5" id="stats">
      <div className="container">
        <div className="title py-5 text-md-start text-center">
          <h4 className="sub-title text-capitalize">
            Al-Najah Online Academy <span>Stats</span>
          </h4>
        </div>
        <div className="_box d-flex justify-content-lg-between justify-content-center flex-wrap">
          {display_stats()}
        </div>
      </div>
    </div>
  );
};

export default Stats;
