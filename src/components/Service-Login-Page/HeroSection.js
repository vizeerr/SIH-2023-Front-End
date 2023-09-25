import React from "react";
import AdvocateImg from "../../page 1 design images/re2.jpeg";
import Rewards from "../../page 1 design images/icons8-points-48.png";
import DaysLeft from "../../page 1 design images/DaysLeft.svg";
import Reset from "../../page 1 design images/reset.svg";
import Top from "../../page 1 design images/icons8-rewards-64.png";

const HeroSection = () => {
  return (
    <div className="Service_Login container-l mb-5 ">
      <h1 className="display-3 text-center"> Advocate Leaderboard </h1>
      <div className="LeaderBoard_List container mt-5">
        <div className="w-100 d-flex align-items-center justify-content-end mb-5">
          <div className="d-flex w-50 align-items-center justify-content-between">
            <div className="d-flex gap-1 align-items-center">
              <img src={DaysLeft} alt="DaysLeft" />
              <p className="mb-0 DaysLeft">5 days left</p>
            </div>
            <div className="d-flex gap-1 align-items-center">
              <img src={Reset} alt="Reset" />
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
                  src={AdvocateImg}
                  alt="Advocate_img"
                />
                <div className="d-flex flex-column align-items-start gap-1">
                  <h6>Advocate Name</h6>
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
                  src={AdvocateImg}
                  alt="Advocate_img"
                />
                <h6>Advocate Name</h6>
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
                  src={AdvocateImg}
                  alt="Advocate_img"
                />
                <h6>Advocate Name</h6>
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
                  src={AdvocateImg}
                  alt="Advocate_img"
                />
                <h6>Advocate Name</h6>
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
                  src={AdvocateImg}
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
                  src={AdvocateImg}
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
                  src={AdvocateImg}
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
                  src={AdvocateImg}
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
                  src={AdvocateImg}
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
                  src={AdvocateImg}
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
