import React from "react";
import {SubHeading, Menuitems} from "../../components";
import {images, data} from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding " id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits you palatte" />
      <h1 className="headtext__cormorant">Today’s Special</h1>
    </div>
    <div className="app__specialMenu-meue">
      <div className="app__specialMenu-meue_wine flex__center">
        <p className="app__specialMenu-meue_heading">Wine & Beer</p>
        <div className="app__specialMenu_meue_item">
          {data.wines.map((wine, index) => (
            <Menuitems
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>
      <div className="app__specialMenu-meue_img">
        <img src={images.menu} alt="bottle" />
      </div>
      <div className="app__specialMenu-meue_cocktails flex__center">
        <p className="app__specialMenu-meue_heading">Cocktails</p>
        <div className="app__specialMenu_meue_item">
          {data.cocktails.map((cocktail, index) => (
            <Menuitems
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>
    <div style={{marginTop: "15px"}}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
