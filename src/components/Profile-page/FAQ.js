import React from "react";

const FAQ = () => {
  return (
    <div className="container-l p-5 lightbackground">
      <h1 className="display-3 mt-5 mb-5 ms-5 me-5">
        Questions Answered by Advocate
      </h1>
      <div className="container-l ms-5 me-5">
        <div className="accordion fw-light" id="accordionFAQ">
          <div className="accordion-item  mb-4 acordhead rounded-3">
            <h2 className="accordion-header ">
              <button
                className="accordion-button rounded-2 border-none "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Can registered GPA holder sell the property?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionFAQ"
            >
              <div className="accordion-body">
                <strong>
                  A GPA (General Power of Attorney) registration refers to the
                  process of officially recording a power of attorney document
                  with the relevant authority, usually the Sub-Registrar's
                  Office. Registering a GPA involves submitting the GPA document
                  along with the necessary supporting documents and paying the
                  applicable registration fees.
                </strong>
              </div>
            </div>
          </div>
          <div className="accordion-item  mb-4 acordhead rounded-3">
            <h2 className="accordion-header ">
              <button
                className="accordion-button rounded-2 border-none "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Can my neighbour construct boundary wall adjacent to my boundary
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse hide"
              data-bs-parent="#accordionFAQ"
            >
              <div className="accordion-body">
                <strong>
                  The legality of your neighbour's construction and whether you
                  can stop it will depend on the specific zoning and building
                  regulations in your locality. Here are some construction rules
                  for neighbours in India:Local building regulations: Check the
                  local building regulations, zoning laws, and any applicable
                  development plans or bylaws in your area.
                </strong>
              </div>
            </div>
          </div>
          <div className="accordion-item  mb-4 acordhead rounded-3">
            <h2 className="accordion-header ">
              <button
                className="accordion-button rounded-2 border-none "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Can I get a registered gift deed cancelled ?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse hide"
              data-bs-parent="#accordionFAQ"
            >
              <div className="accordion-body">
                <strong>
                  There are two modes of cancellation of a gift deed under
                  Section 126 of the Transfer of Property Act of 1882:Revocation
                  by mutual agreement of the donor and donee: The donor and
                  donee may agree that the gift shall be suspended or revoked
                  upon the happening of an event not dependent upon the donor.
                </strong>
              </div>
            </div>
          </div>
          <div className="accordion-item  mb-4 acordhead rounded-3">
            <h2 className="accordion-header ">
              <button
                className="accordion-button rounded-2 border-none "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Can father sell ancestral property w/o children consent
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse hide"
              data-bs-parent="#accordionFAQ"
            >
              <div className="accordion-body">
                <strong>
                  Under Hindu law, the general principle is that a father cannot
                  sell the ancestral property without the consent of his adult
                  sons (coparceners). The concept of ancestral property refers
                  to property that is inherited by male descendants from three
                  generations, including the father, grandfather, and
                  great-grandfather.
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
