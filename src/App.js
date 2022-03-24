import { Fragment } from "react";
import "./App.css";
import Header from "./components/header/Header";
import AboutUs from "./components/aboutUs/AboutUs";
import Mint from "./components/mint/Mint";
import Roadmap from "./components/roadmap/Roadmap";
import Team from "./components/team/Team";
import Faq from "./components/faq/Faq";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <AboutUs />
      <Mint />
      <Roadmap />
      <Team />
      <Faq />
      <Footer />
    </Fragment>
  );
}

export default App;
