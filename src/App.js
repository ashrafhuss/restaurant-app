import React from "react";

import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "./container";
import {Navbar} from "./components";
import "./App.css";
import LeftSidebar from "./LeftSidebar";
import MainContent from "./MainContent";

const App = () => {
  const myNAme = "Ashaf";
  return (
    <div style={{scrollbarWidth: "none"}}>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />

      {/* <div className="app_dragged">
      <LeftSidebar />
      <MainContent />
    </div */}
      {myNAme && <>{myNAme}</>}
    </div>
  );
};

export default App;
