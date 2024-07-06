import React from "react";
import {SubHeading} from "../../components";

const FindUs = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="app__header-h1">Find Us</h1>
      <p className="p__opensans" style={{margin: "2rem 0"}}>
        Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
      </p>
      <p className="p_headtext_cormorant" style={{color: "#DCCA87"}}>
        Opening Hours
      </p>
      <p className="p_headtext_cormorant">Mon - Fri: 10:00 am - 02:00 am</p>
      <p className="p_headtext_cormorant">Sat - Sun: 10:00 am - 03:00 am</p>

      <button
        type="button"
        className="custom__button"
        style={{marginTop: "4rem"}}>
        Visit Ua
      </button>
    </div>
    <div className="app__wrapper_img">
      {/* <img src={images.welcome} alt="welcome" /> */}
    </div>
  </div>
);

export default FindUs;
