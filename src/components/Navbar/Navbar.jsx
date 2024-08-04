import React, {useState} from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import {MdOutlineRestaurantMenu} from "react-icons/md";

import "./Navbar.css";
import images from "../../constants/images";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  //This nave bar
  return (
    <nav className="app__navbar">
      <div className="app__navbar__logo">
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className="app__navbar__links">
        <li className="p__opensanse">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensanse">
          <a href="#about">About</a>
        </li>
        <li className="p__opensanse">
          <a href="#menu">Menue</a>
        </li>
        <li className="p__opensanse">
          <a href="#award">Award</a>
        </li>
        <li className="p__opensanse">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar__login">
        <a href="#login" className="p__opensanse">
          LogIn or Register
        </a>
        <div />
        <a href="/" className="p__opensanse">
          Book Table
        </a>
      </div>
      <div className="app_navbar-smallscreen">
        <GiHamburgerMenu
          fontSize={27}
          color="#fff"
          onClick={() => {
            setToggleMenu(true);
          }}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen-overlay flex__center slide__bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <ul className="app__navbar-smallscreen-links">
              <li className="p__opensanse">
                <a href="#home">Home</a>
              </li>
              <li className="p__opensanse">
                <a href="#about">About</a>
              </li>
              <li className="p__opensanse">
                <a href="#menu">Menue</a>
              </li>
              <li className="p__opensanse">
                <a href="#award">Award</a>
              </li>
              <li className="p__opensanse">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
