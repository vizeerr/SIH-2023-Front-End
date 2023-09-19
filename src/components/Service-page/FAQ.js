import React from "react";

const FAQ = () => {
  return (
    <div className="Works-container container-l mt-5 p-5">
      <h1 className="display-3 text-center">Frequently Asked Questions</h1>
      <div className="container mt-5">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item mb-3">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
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
              class="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                WakillMart is an online marketplace that connects individuals
                and businesses with experienced legal service providers. We
                offer a convenient and transparent way to access a wide range of
                legal expertise.
              </div>
            </div>
          </div>
          <div class="accordion-item mb-3">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
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
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Our platform features a diverse range of legal service
                providers, including law firms, solo practitioners, legal
                consultants, mediators, arbitrators, notaries, document
                preparation services, expert witnesses, legal process servers,
                and legal funding companies.
              </div>
            </div>
          </div>
          <div class="accordion-item mb-3">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Is Your Legal Service Platform secure and trustworthy?
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Our platform features a diverse range of legal service
                providers, including law firms, solo practitioners, legal
                consultants, mediators, arbitrators, notaries, document
                preparation services, expert witnesses, legal process servers,
                and legal funding companies.
              </div>
            </div>
          </div>
          <div class="accordion-item mb-3">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                How do I schedule an appointment with a legal service provider?
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Our platform features a diverse range of legal service
                providers, including law firms, solo practitioners, legal
                consultants, mediators, arbitrators, notaries, document
                preparation services, expert witnesses, legal process servers,
                and legal funding companies.
              </div>
            </div>
          </div>

          <div class="accordion-item mb-3">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Can I communicate with legal service providers through the
                platform?
              </button>
            </h2>
            <div
              id="collapseFive"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Our platform features a diverse range of legal service
                providers, including law firms, solo practitioners, legal
                consultants, mediators, arbitrators, notaries, document
                preparation services, expert witnesses, legal process servers,
                and legal funding companies.
              </div>
            </div>
          </div>

          <div class="accordion-item mb-3">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                Are there fees associated with using Your Legal Service
                Platform?
              </button>
            </h2>
            <div
              id="collapseSix"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Our platform features a diverse range of legal service
                providers, including law firms, solo practitioners, legal
                consultants, mediators, arbitrators, notaries, document
                preparation services, expert witnesses, legal process servers,
                and legal funding companies.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
