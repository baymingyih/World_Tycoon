import React, { Fragment } from "react";
import "./Header.css";
import navbar_icon from "../../assets/navbar_icon.png";
import discord from "../../assets/discord.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import telegram from "../../assets/telegram.png";
import $ from "jquery";
const Header = () => {
  // sidebar
  const OpenSidebarHandler = (e) => {
    e.preventDefault();
    if (window.innerWidth >= 576) {
      return $("#my_navbar").css("width", "420px");
    }
    $("#my_navbar").css("width", "100%");
  };
  const CloseSidebarHandler = (e) => {
    e.preventDefault();
    $("#my_navbar").css("width", "0px");
  };
  return (
    <Fragment>
      <main className="banner_header">
        {/* <!-- Header --> */}
        <header className="container-fluid">
          <div className="row">
            <div className="col-11 mx-auto max-width py-sm-5 pt-3">
              <div className="row">
                <div className="col-sm-6 order-sm-0 order-1 display-flex">
                  <a href="www.google.com" className="Header_logo">
                    <h1>WT</h1>
                    <span>WORLDTYCOON</span>
                  </a>
                </div>
                <div className="col-sm-6 order-sm-1 order-0 d-flex justify-content-sm-end align-items-start">
                  <a href="www.google.com" className="white_list-btn mr-2">
                    WHITELIST NOW
                  </a>
                  <a
                    href="www.google.com"
                    className="navbar_icon"
                    onClick={OpenSidebarHandler}
                  >
                    <img src={navbar_icon} className="img-fluid" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* <!-- Sidebar --> */}
        <div className="Collapse show" id="my_navbar">
          <ul id="navbar-nav" className="navbar-nav w-100">
            <div>
              <a
                className="close_btn"
                onClick={CloseSidebarHandler}
                href="www.google.com"
              >
                &times;
              </a>
            </div>
            <ul className="custom_nav">
              <li>
                <a className="active" href="www.google.com">
                  ABOUT US
                </a>
              </li>
              <li>
                <a href="www.google.com">OWN A LAND</a>
              </li>
              <li>
                <a href="www.google.com">ROAD MAP 1.0</a>
              </li>
              <li>
                <a href="www.google.com">MEET THE TEAM</a>
              </li>
              <li>
                <a href="www.google.com">FAQ</a>
              </li>
              <li>
                <a href="www.google.com">WHITELIST NOW</a>
              </li>
            </ul>
          </ul>
        </div>
        {/* <!-- End Header --> */}
        {/* <!-- Banner --> */}
        <section className="container-fluid">
          <div className="row">
            <div className="col-11 mx-auto max-width py-3">
              <div className="row">
                <div className="col-md-6 mx-auto text-center">
                  <span className="banner_text">THE singapore Edition</span>
                </div>
                {/* <!-- <div className="col-md-12 border border-danger text-right">
               
              </div> --> */}
              </div>
            </div>
          </div>
        </section>
        <ul className="header_social-icon">
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
        {/* <!-- End Banner --> */}
      </main>
    </Fragment>
  );
};

export default Header;
