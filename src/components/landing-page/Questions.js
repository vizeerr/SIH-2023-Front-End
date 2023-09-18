import React from 'react'
import "../../App.css"

function Questions() {
  return (
    <div className="container mt-5">
        <h1 className="display-3 mb-5">Frequently Asked Questions</h1>
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
                What is WakillMart ?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionFAQ"
            >
              <div className="accordion-body">
                <strong>
                  WakillMart is an online marketplace that connects individuals
                  and businesses with experienced legal service providers. We
                  offer a convenient and transparent way to access a wide range
                  of legal expertise.
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
                What types of legal service providers are available on the
                platform?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse hide"
              data-bs-parent="#accordionFAQ"
            >
              <div className="accordion-body">
                <strong>
                Our platform features a diverse range of legal service
                  providers, including law firms, solo practitioners, legal
                  consultants, mediators, arbitrators, notaries, document
                  preparation services, expert witnesses, legal process servers,
                  and legal funding companies.
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
                What types of legal service providers are available on the
                platform?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse hide"
              data-bs-parent="#accordionFAQ"
            >
              <div className="accordion-body">
                <strong>
                Our platform features a diverse range of legal service
                  providers, including law firms, solo practitioners, legal
                  consultants, mediators, arbitrators, notaries, document
                  preparation services, expert witnesses, legal process servers,
                  and legal funding companies.
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
                Is your legal service platform secure?
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse hide"
              data-bs-parent="#accordionFAQ"
            >
              <div className="accordion-body">
                <strong>
                Yes,it is completely secure and trustworthy
                </strong>
              </div>
            </div>
          </div>
          

        </div>
      </div>
  )
}

export default Questions
