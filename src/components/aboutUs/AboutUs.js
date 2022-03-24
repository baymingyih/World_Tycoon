import React, { Fragment } from "react";
import "./AboutUs.css";
import arrowgun from "../../assets/arrowgun.png";

const AboutUs = () => {
  return (
    <Fragment>
      <section className="container-fluid py-md-5 py-3 about-us">
        <div className="row">
          <div className="col-lg-3">
            <h2 className="teamHead about_us-heading ">
              ABOUT
              <img className="img1" src={arrowgun} alt="arrow" />
              <br />
              <span className="us_heading w-100">
                <img className="img2" src={arrowgun} alt="arrow" />
                US
              </span>
            </h2>
          </div>
          <div className="col-lg-6 h-full-screen   ">
            <div className="about-us_content text-center">
              <h6 className="about_us-Subheading m-t-4rem">WORLD TYCOON</h6>
              <p className="about_us-descript">
                is a virtual platform that draws
                <br />
                parallels to the real world.
                <br />
                The appearls? A once in a lifetime
                <br />
                opportunity to purchase and own lucrative <br />
                poils of land as NFTs using Ethereum.
                <br />
                Set in an online landscape that replicates that of <br />
                to countries such as Hong Kong. our goal is to forge a <br />
                metaverse where anyone with world Tycoon NFTs <br />
                has a chance at decentralized virtual property <br />
                and land ownership
              </p>
            </div>
          </div>
          <div className="col-lg-3 d-flex align-items-end"></div>
        </div>
      </section>
    </Fragment>
  );
};

export default AboutUs;
