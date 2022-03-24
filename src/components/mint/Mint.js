import React, { Fragment } from "react";
import "./Mint.css";
import ownlandlogo from "../../assets/ownlandlogo.png";
import pupleCloud from "../../assets/pupleCloud.png";
import oenlandImg2 from "../../assets/oenlandImg2.png";
import mintNow from "../../assets/mintNow.png";
import mintImg from "../../assets/ownlandImg1.png";

const Mint = () => {
  return (
    <Fragment>
      <section className="container-fluid ownlandBg mt-5">
        <div className="row">
          <div className="col-12 mx-auto ">
            <div className="row">
              <div className="col-md-8 text-center text-md-left ownlandSecBG">
                <img className="ownLandLogo" src={ownlandlogo} alt="logo" />
                <div className="landDivs text-center">
                  <h4>10,000</h4>
                  <p>randomly genrated land nfts</p>
                </div>
                <div className="landDivs2 text-center">
                  <h4>28</h4>
                  <p>zones</p>
                </div>
                <div className="landDivs3 text-center">
                  <h4>4</h4>
                  <p>type of land uses</p>
                </div>
              </div>
              <div className="col-md-4 text-center text-md-right px-0">
                <img
                  className="purpleCloud img-fluid"
                  src={pupleCloud}
                  alt="purple cloud"
                />
                <p className="landParagraph pr-md-4">
                  10,000 randomly genrated NFTs will be released. With 4 types
                  of land uses -
                  <span>
                    {" "}
                    rsidential, commercial, agriculture, recreational{" "}
                  </span>
                  - distributed across 28 zones. <br />
                  <br />
                  Each NFT will be assigned unique coordinates and parameters,
                  which will determine the respective zone. <br />
                  <br />
                  Much like how land is always at a premium inthe Lion City,
                  <br />
                  <span>
                    availability of NFTs on World Tycoon will be limited to an
                    exclusive 10,000
                  </span>
                </p>
                <img
                  className="ownlandimg2 mr-md-5"
                  src={oenlandImg2}
                  alt="bg"
                />
                <img
                  className="mintnowBtn my-5 mr-md-4"
                  src={mintNow}
                  alt="mint now"
                  title="mint now"
                />
                <img className="img-fluid mintIMG1" src={mintImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Mint;
