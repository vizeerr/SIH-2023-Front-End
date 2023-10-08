import React from "react";
// import lawyer1 from "../../page 1 design images/re2.jpeg";
import Rewards from "../../page 1 design images/icons8-points-48.png";
import DaysLeft from "../../page 1 design images/DaysLeft.svg";
import Reset from "../../page 1 design images/reset.svg";
import Top from "../../page 1 design images/icons8-rewards-64.png";

import lawyer1 from '../../page 1 design images/lawyer1.jpeg'
import lawyer2 from '../../page 1 design images/lawyer2.jpeg'
import lawyer3 from '../../page 1 design images/lawyer3.jpeg'

const HeroSection = () => {
  return (
    <div className="Service_Login container-l mb-5 ">
      <h1 className="display-4 text-center"> Advocate Leaderboard </h1>
      <div className="LeaderBoard_List container mt-5 w-75 border pt-4 ">
        <div className="w-100 d-flex align-items-center justify-content-end mb-5 p-2">
          <div className="d-flex  w-100 align-items-center justify-content-between">
            <div className="d-flex gap-1 align-items-center w-100">
              <img src={DaysLeft} alt="DaysLeft" style={{width:"25px"}}/>
              <p className="mb-0 fs-5 DaysLeft">5 days left</p>
            </div>
            <div className="d-flex gap-2 align-items-end w-50 justify-content-end  ">
              <img src={Reset} alt="Reset" style={{width:"25px"}}/>
              <p className="mb-0 Resets">Resets every month</p>
            </div>
          </div>
        </div>
        <ul class="list-group list-group-flush d-flex gap-3">
          <li class="list-group-item d-flex align-items-center gap-4 p-4">
            <span>1st</span>
            <div className="w-100 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-3">
                <img
                  className="Advocate-img"
                  src={lawyer1}
                  alt="Advocate_img"
                />
                <div className="d-flex flex-column align-items-start gap-1">
                  <h6>Adv. Shami Sharma</h6>
                  <div className="Top-Advocate d-flex align-items-center rounded-3 p-1">
                    <img className="TopBadge" src={Top} alt="TopBadge" />
                    <p className="mb-0">Top Advocate</p>
                  </div>
                </div>
              </div>
              <span className="d-flex align-items-center gap-2">
                <img className="Rewards-img" src={Rewards} alt="Rewards" />
                5234
              </span>
            </div>
          </li>
          <li class="list-group-item d-flex align-items-center gap-4 p-4">
            <span>2nd</span>
            <div className="w-100 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-3">
                <img
                  className="Advocate-img"
                  src={lawyer2}
                  alt="Advocate_img"
                />
                <h6>Adv. Ravi Sharma</h6>
              </div>
              <span className="d-flex align-items-center gap-2">
                <img className="Rewards-img" src={Rewards} alt="Rewards" />
                5100
              </span>
            </div>
          </li>
          <li class="list-group-item d-flex align-items-center gap-4 p-4">
            <span>3rd</span>
            <div className="w-100 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-3">
                <img
                  className="Advocate-img"
                  src={lawyer3}
                  alt="Advocate_img"
                />
                <h6>Adv. Suksham</h6>
              </div>
              <span className="d-flex align-items-center gap-2">
                <img className="Rewards-img" src={Rewards} alt="Rewards" />
                4900
              </span>
            </div>
          </li>
          <li class="list-group-item d-flex align-items-center gap-4 p-4">
            <span>4th</span>
            <div className="w-100 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-3">
                <img
                  className="Advocate-img"
                  src={lawyer1}
                  alt="Advocate_img"
                />
                <h6>Adv.Rajesh</h6>
              </div>
              <span className="d-flex align-items-center gap-2">
                <img className="Rewards-img" src={Rewards} alt="Rewards" />
                4876
              </span>
            </div>
          </li>
          <li class="list-group-item d-flex align-items-center gap-4 p-4">
            <span>5th</span>
            <div className="w-100 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-3">
                <img
                  className="Advocate-img"
                  src={lawyer1}
                  alt="Advocate_img"
                />
                <h6>Advocate Name</h6>
              </div>
              <span className="d-flex align-items-center gap-2">
                <img className="Rewards-img" src={Rewards} alt="Rewards" />
                4743
              </span>
            </div>
          </li>
          <li class="list-group-item d-flex align-items-center gap-4 p-4">
            <span>6th</span>
            <div className="w-100 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-3">
                <img
                  className="Advocate-img"
                  src={lawyer1}
                  alt="Advocate_img"
                />
                <h6>Advocate Name</h6>
              </div>
              <span className="d-flex align-items-center gap-2">
                <img className="Rewards-img" src={Rewards} alt="Rewards" />
                4567
              </span>
            </div>
          </li>
          <li class="list-group-item d-flex align-items-center gap-4 p-4">
            <span>7th</span>
            <div className="w-100 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-3">
                <img
                  className="Advocate-img"
                  src={lawyer1}
                  alt="Advocate_img"
                />
                <h6>Advocate Name</h6>
              </div>
              <span className="d-flex align-items-center gap-2">
                <img className="Rewards-img" src={Rewards} alt="Rewards" />
                4487
              </span>
            </div>
          </li>
          <li class="list-group-item d-flex align-items-center gap-4 p-4">
            <span>8th</span>
            <div className="w-100 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-3">
                <img
                  className="Advocate-img"
                  src={lawyer1}
                  alt="Advocate_img"
                />
                <h6>Advocate Name</h6>
              </div>
              <span className="d-flex align-items-center gap-2">
                <img className="Rewards-img" src={Rewards} alt="Rewards" />
                3500
              </span>
            </div>
          </li>
          <li class="list-group-item d-flex align-items-center gap-4 p-4">
            <span>9th</span>
            <div className="w-100 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-3">
                <img
                  className="Advocate-img"
                  src={lawyer1}
                  alt="Advocate_img"
                />
                <h6>Advocate Name</h6>
              </div>
              <span className="d-flex align-items-center gap-2">
                <img className="Rewards-img" src={Rewards} alt="Rewards" />
                3476
              </span>
            </div>
          </li>
          <li class="list-group-item d-flex align-items-center gap-4 p-4">
            <span>10th</span>
            <div className="w-100 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-3">
                <img
                  className="Advocate-img"
                  src={lawyer1}
                  alt="Advocate_img"
                />
                <h6>Advocate Name</h6>
              </div>
              <span className="d-flex align-items-center gap-2">
                <img className="Rewards-img" src={Rewards} alt="Rewards" />
                3248
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeroSection;
