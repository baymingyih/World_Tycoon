import React, { Fragment } from "react";
import "./Team.css";
import arrowgun from "../../assets/arrowgun.png";
import meetteamMobileBg from "../../assets/meetteamMobileBg.png";

const Team = () => {
  return (
    <Fragment>
      <section className="container-fluid teamSecBG">
        <div className="row">
          <h2 className="teamHead disp1 mt-5">
            MEET
            <img className="img1" src={arrowgun} alt="arrow" />
            <br />
            <span className="meetThe">the</span>
            <img className="img2" src={arrowgun} alt="arrow" />
            TEAM
          </h2>
          <div className="order-2 order-md-1 col-md-4 teamBg">
            <h2 className="teamHead disp2 mt-5">
              MEET
              <img className="img1" src={arrowgun} alt="arrow" />
              <br />
              <span className="meetThe">the</span>
              <img className="img2" src={arrowgun} alt="arrow" />
              TEAM
            </h2>
            {/* <!-- accordian --> */}
            <div
              className="accordion teamAccordian mt-5 mb-5 mb-md-0"
              id="accordionExample"
            >
              {/* <!-- 1 --> */}
              <div className="card teamCard">
                <div className="card-header teamCardHeader" id="headingOne">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link btn-block teamCardBTN text-left"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Chief technology officer
                    </button>
                  </h2>
                </div>

                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div className="card-body teamBody">
                    <h4 className="teamBodyHead">MR XXXXXXX</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Illum numquam hic aut earum quisquam officia sunt tempore
                      nostrum, esse, eum iure dolores architecto aliquam
                      officiis?
                    </p>
                    <a href="www.google.com" className="btn btnKnowMore">
                      KNOW MORE
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- 1 --> */}
              {/* <!-- 2 --> */}
              <div className="card teamCard">
                <div className="card-header teamCardHeader" id="headingTwo">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link btn-block text-left teamCardBTN collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Chief executive officer
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                >
                  <div className="card-body teamBody">
                    Some placeholder content for the second accordion panel.
                    This panel is hidden by default.
                  </div>
                </div>
              </div>
              {/* <!-- 2 --> */}
              {/* <!-- 3 --> */}
              <div className="card teamCard">
                <div className="card-header teamCardHeader" id="headingThree">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link btn-block text-left teamCardBTN collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      the markiting team
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                >
                  <div className="card-body teamBody">
                    And lastly, the placeholder content for the third and final
                    accordion panel. This panel is hidden by default.
                  </div>
                </div>
              </div>
              {/* <!-- 3 --> */}
              {/* <!-- 4 --> */}
              <div className="card teamCard">
                <div className="card-header teamCardHeader" id="headingThree">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link btn-block text-left teamCardBTN collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      seed investors
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseFour"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                >
                  <div className="card-body teamBody">
                    And lastly, the placeholder content for the third and final
                    accordion panel. This panel is hidden by default.
                  </div>
                </div>
              </div>
              {/* <!-- 4 --> */}
              {/* <!-- 5 --> */}
              <div className="card teamCard">
                <div className="card-header teamCardHeader" id="headingThree">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link btn-block text-left teamCardBTN collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Advisors
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseFive"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                >
                  <div className="card-body teamBody">
                    And lastly, the placeholder content for the third and final
                    accordion panel. This panel is hidden by default.
                  </div>
                </div>
              </div>
              {/* <!-- 5 --> */}
            </div>
            {/* <!-- accordian end --> */}
          </div>
          <div className="order-1 order-md-2 col-md-8 px-0 text-center text-md-right">
            <img
              className="img-fluid teamImagePosition"
              src={meetteamMobileBg}
              alt="team"
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Team;
