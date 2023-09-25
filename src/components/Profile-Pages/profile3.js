import React from "react";

import lawyer1 from "../../page 1 design images/lawyer1.jpeg";
import StarFill from "../../page 1 design images/icons8-star-50.png";
import StarNoFill from "../../page 1 design images/icons8-rating-100.png";

const HeroSection = () => {
  return (
    <div className="Advocate container-l mb-5 ">
      <h1 className="display-3 text-center"> Profile Page </h1>
      <div className="container text-center mt-5 d-flex gap-5">
        <div className="w-25 d-flex flex-column align-items-center justify-content-center gap-3">
          <div className="profile-img w-100 p-3 border rounded border-secondary shadow">
            <img src={lawyer1} alt="Profile" />
          </div>
          <div className="Verify border border-secondary rounded w-100 pt-2 pb-1 px-3">
            ✅Verified
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center">
          <div className="d-flex justify-content-between align-items-center">
            <div className="Advocate-details d-flex flex-column align-items-start">
              <h3 className="mb-0">Adv Sukshum</h3>
              <div className="d-flex">
                <img src={StarFill} alt="Star" />
                <img src={StarFill} alt="Star" />
                <img src={StarFill} alt="Star" />
                <img src={StarFill} alt="Star" />
                <img src={StarNoFill} alt="Star" />
                <p className="ms-2 mb-0">4.0 | 30+ user ratings</p>
              </div>
            </div>
            <div className="Advocate-button w-25">
              <button type="button" className="btn btn-outline-primary">
                Contact Now
              </button>
            </div>
          </div>
          <hr></hr>
          <div className="container text-center">
            <div className="row row-cols-1 gap-3">
              <div className="d-flex col ps-0 align-items-center">
                <img />
                <h6 className="mb-0">Location :</h6>
                <p className="ms-1 mb-0">Pritampura, Delhi</p>
              </div>
              <div className="d-flex col ps-0 align-items-center">
                <img />
                <h6 className="mb-0">Languages :</h6>
                <p className="ms-1 mb-0">English, Hindi</p>
              </div>
              <div className="d-flex col ps-0 align-items-center">
                <img />
                <h6 className="mb-0">Experience :</h6>
                <p className="ms-1 mb-0">5+ years</p>
              </div>
              <div className="d-flex col ps-0 align-items-center">
                <img />
                <h6 className="mb-0">Practice areas :</h6>
                <p className="ms-1 mb-0">
                  Divorce and separation, child custody and visitation, child
                  support, alimony (maintenance), adoption, domestic violence,
                  and matrimonial property disputes.
                </p>
              </div>
            </div>
          </div>
          <hr></hr>
        </div>
      </div>
      <div className="container d-flex flex-column justify-content-center mt-4">
        <p>
          Mr. Suksham, Advocate, completed his law in the year 2010 from Law
          College Delhi and has been providing services in all kind of criminal
          cases .He is a members of the Delhi State Bar Council and Bar Council
          of India. With 5+ years of legal practice, he has never lost any case
          till now.He has additional expertise in specific aspects of family
          law, such as Hindu Marriage Act cases, Muslim personal law, and other
          religious and personal law matters.He specialize in various areas of
          family law, including divorce and separation, child custody and
          visitation, child support, alimony (maintenance), adoption, domestic
          violence, and matrimonial property disputes.He gains experience by
          working as associates in law firms that specialize in family law or by
          assisting senior advocates who handle family law cases.He has prior
          experience working in family courts.He offer advice, negotiate
          settlements, draft legal documents (e.g., divorce petitions, custody
          agreements), and represent clients in family court proceedings.He is
          skilled at addressing sensitive and emotional issues with empathy and
          understanding.
        </p>
        <p>
          He often engage in negotiation and mediation to resolve family
          disputes outside of court. They assist clients in reaching amicable
          agreements and reducing conflict, especially in divorce and custody
          cases.He conduct legal research to understand applicable laws,
          statutes, and precedents relevant to client cases. He possess strong
          courtroom advocacy skills, including the ability to present evidence,
          cross-examine witnesses, and argue legal points effectively. He adhere
          to ethical guidelines and professional standards, including
          maintaining client confidentiality and upholding the principles of
          justice and fairness.
        </p>
        <p>
          He navigate complex legal matters while providing guidance, support, and
          legal solutions tailored to the unique cultural and legal context of
          India. He work to protect his clients' rights and interests in
          family-related issues.
        </p>
      </div>
      <div className="container d-flex justify-content-between mt-5">
        <div>
          <h4>Court</h4>
        </div>
        <div className="w-75">
          <p>
            Central Administrative Tribunal (CAT) Delhi, Delhi High Court,
            District Court, Dwarka, District Court, Faridabad, District Court,
            Gautambuddha Nagar, District Court, Ghaziabad, District Court,
            Gurgaon, District Court, Karkardooma , District Court, Patiala
            House, District Court, Rohini, District Court, Saket, District
            Court, Tis Hazari, Supreme Court Of India
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
