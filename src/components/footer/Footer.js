import React, { Fragment } from "react";
import "./Footer.css";
import discord from "../../assets/discord.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import telegram from "../../assets/telegram.png";
import arrow from "../../assets/arrow.png";

const Footer = () => {
  return (
    <Fragment>
      <footer className="container-fluid">
        {/* footer top */}
        <div className="row FTBG mb-5">
          <div className="order-2 order-md-1 col-md-6">
            <ul className="footerSocial pl-5">
              <li>
                <a href="www.google.com">
                  <img src={discord} alt="discord" title="discord" />
                </a>
              </li>
              <li>
                <a href="www.google.com">
                  <img src={twitter} alt="twitter" title="twitter" />
                </a>
              </li>
              <li>
                <a href="www.google.com">
                  <img src={instagram} alt="instagram" title="instagram" />
                </a>
              </li>
              <li>
                <a href="www.google.com">
                  <img src={facebook} alt="facebook" title="facebook" />
                </a>
              </li>
              <li>
                <a href="www.google.com">
                  <img src={telegram} alt="telegram" title="telegram" />
                </a>
              </li>
            </ul>
          </div>
          <div className="order-1 order-md-2 col-md-6">
            <h3 className="footerHeading">whitelist now</h3>
          </div>
        </div>
        {/* footer top */}
        <div className="row">
          <div className="col-11 mx-auto max-width pb-5">
            {/* <!-- footer center --> */}
            <div className="row text-center footerArrow">
              <div className="col-11 mx-auto max-width pb-5">
                <img className="mt-5" src={arrow} alt="arrow" />
              </div>
            </div>
            {/* <!-- footer center end --> */}
            {/* <!-- footer base --> */}
            <div className="row">
              <div className="col-md-8 col-lg-7">
                <div className="row">
                  <div className="order-2 order-md-1 text-center text-md-left col-md-5 col-lg-4">
                    <h2 className="footerLogo">
                      <a href="www.google.com">World tycoon</a>
                    </h2>
                  </div>
                  <div className="order-1 order-md-2 col-md-7 col-lg-8 text-center text-md-left">
                    <p className="footerText">
                      Copyright 2022
                      <a className="footerTextAchor" href="www.google.com">
                        Legal Information
                      </a>{" "}
                      |
                      <a className="footerTextAchor" href="www.google.com">
                        Disclaimer
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-right col-lg-5">
                <div className="searchWrapper">
                  <label className="searchLabel" for="search">
                    search
                  </label>
                  <input className="searchInput" id="search" type="text" />
                </div>
              </div>
            </div>
            {/* <!-- footer base end --> */}
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
