import React, { Fragment } from "react";
import "./Roadmap.css";
import arrowgun from "../../assets/arrowgun.png";

const Roadmap = () => {
  return (
    <Fragment>
      {" "}
      <section className="container-fluid">
        <div className="row">
          <div className="col-11 mx-auto max-width py-sm-5 pb-5">
            <h2 className="roadmapHeading">
              roadmap <br />
              <img
                className="roadmapArrowGun"
                src={arrowgun}
                alt="arrowgun
        "
              />
              <span className="roadmapSpan">1.0</span>
            </h2>
            <div className="row mt-5">
              <div className="col-6 roadmapLine">
                <h3 className="roadmapNumber mt-5 mt-md-0">1</h3>
                <p className="roadPara">
                  NFT owners will be whitelisted for the sale of building NFTs
                  and stand to recieve rental yield when coupled with a land
                  NFT. Depending on the type of land,users are free to build a
                  development of their choosing such as a cinema, shopping mall,
                  sports centre or even an art museum!
                </p>
                <div className="row mt-5 pt-5">
                  <div className="col-md-7 pb-0 pt-md-5 pb-md-5 text-center text-md-right">
                    <a href="www.google.com" className="btn btnComing">
                      coming soon!
                    </a>
                  </div>
                  <div className="col-md-5">
                    <h3 className="roadmapNumber">3</h3>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <p className="roadPara2">
                  Upon the launch of our website and NFTs, we will hold
                  exclusive whitelist giveaways to our outstanding World Tycoon
                  community.
                </p>
                <div className="row">
                  <div className="col-md-5">
                    <h3 className="roadmapNumber2">2</h3>
                  </div>
                  <div className="col-md-7 text-center text-md-left pb-5 pt-0 pt-md-5">
                    <a href="www.google.com" className="btn btnComing">
                      coming soon!
                    </a>
                  </div>
                </div>
                <p className="roadPara2">
                  Finally, we will deploy Roadmap 2.0 where supplementary
                  upgrades and features including avatars and e-citizenships
                  will be made available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Roadmap;
