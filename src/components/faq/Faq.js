import React, { Fragment } from "react";
import "./Faq.css";

const Faq = () => {
  return (
    <Fragment>
      <section className="container-fluid faqBG">
        <div className="row">
          <div className="col-11 mx-auto max-width py-5">
            <div className="row">
              <div className="col-md-2 text-left">
                <h2 className="faqHeading">FAQ</h2>
              </div>
              <div className="col-md-5">
                {/* <!-- accordian --> */}
                <div className="accordion faqAccordian" id="accordionExample">
                  {/* <!-- 1 --> */}
                  <div className="card faqCard">
                    <div className="card-header faqCardHead" id="headingOne">
                      <h2 className="mb-0 text-center">
                        <button
                          className="btn btn-link btn-block faqBTN text-center"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          How Much Will It Cost To Mint NFT?
                        </button>
                      </h2>
                    </div>

                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body faqBody text-center">
                        It takes 1 ETH to Mint an NFT.
                      </div>
                    </div>
                  </div>
                  {/* <!-- 1 --> */}
                  {/* <!-- 2 --> */}
                  <div className="card faqCard">
                    <div className="card-header faqCardHead" id="headingTwo">
                      <h2 className="mb-0 text-center">
                        <button
                          className="btn btn-link btn-block faqBTN text-center"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="true"
                          aria-controls="collapseTwo"
                        >
                          Who Are We?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse show"
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body faqBody text-center">
                        World Tycoon in its initial stage will mirror the
                        landscape of Singapore, where decentralized virtual
                        property and land ownership is possible through NFTs.
                      </div>
                    </div>
                  </div>
                  {/* <!-- 2 --> */}
                  {/* <!-- 3 --> */}
                  <div className="card faqCard">
                    <div className="card-header faqCardHead" id="headingThree">
                      <h2 className="mb-0 text-center">
                        <button
                          className="btn btn-link btn-block faqBTN text-center collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          When Is The Lanch?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body faqBody text-center">
                        And lastly, the placeholder content for the third and
                        final accordion panel. This panel is hidden by default.
                      </div>
                    </div>
                  </div>
                  {/* <!-- 3 --> */}
                  {/* <!-- 4 --> */}
                  <div className="card faqCard">
                    <div className="card-header faqCardHead" id="headingThree">
                      <h2 className="mb-0 text-center">
                        <button
                          className="btn btn-link btn-block faqBTN text-center collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          When Will My NFT Be Revealed?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body faqBody text-center">
                        And lastly, the placeholder content for the third and
                        final accordion panel. This panel is hidden by default.
                      </div>
                    </div>
                  </div>
                  {/* <!-- 4 --> */}
                </div>
                {/* <!-- accordian end --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Faq;
