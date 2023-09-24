import React from "react";
import commimage from "../../service page images/pexels-tima-miroshnichenko-7567529.jpg";
import icon from "../../service page images/icons8-graph-100.png";
function Tools() {
  return (
    <div className="tool-box container ">
      <h1 className="display-3 text-center">
        Built-In Tools For Better Productivity
      </h1>
      <div className="tool-box1 mt-5 p-5">
        <ul className="tool-list d-flex flex-column gap-3">
          <li className="f d-flex flex-wrap flex-column">
            <div className="d-flex align-items-center">
              <img
                className="mt-0"
                src={icon}
                width={50}
                height={50}
                alt="icon"
              />
              <h3 className="tools-features m-0">Analytics</h3>
            </div>
            <div>
              <p className="tools-content ms-5 mt-3 mb-3">
                A dashboard for showcasing your analytics.Monitor your growth
                ,Reach and track your ads and promotion
              </p>
            </div>
            <hr className="hr-tag ms-5 w-65" />
          </li>
          <li className="f">
            <img src={icon} width={50} height={50} alt="icon" />
            <div>
              <h4 className="tools-features">Referral</h4>
              <p className="tools-content mt-3 mb-3">
                Referral Program where we let others and you refer to other
                people.Increase your reach and get quality clients
              </p>
              <hr className="hr-tag" />
            </div>
          </li>
          <li className="f">
            <img src={icon} width={50} height={50} alt="icon" />
            <div>
              <h4 className="tools-features">Gamified</h4>
              <p className="tools-content mt-3 mb-3">
                Weekly dashboards that rank's according to your
                popularity,reach,ratings,reviews and that lead you generate
              </p>
            </div>
          </li>
        </ul>
        <img src={commimage} className="tool-image" alt="icon" />
      </div>
    </div>
  );
}

export default Tools;
