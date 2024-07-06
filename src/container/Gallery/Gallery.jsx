/* eslint-disable array-callback-return */
import React, {useRef} from "react";
import {SubHeading} from "../../components";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
  BsArrowDownLeft,
} from "react-icons/bs";
import {images, data} from "../../constants";
import "./Gallery.css";

const Gallery = () => {
  const scrollRef = useRef();
  const galleryImages = [
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
  ];
  const scrollImages = (direction) => {
    const {current} = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title={"Instagram"} />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{color: "#AAAA", marginTop: "2rem"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type="button" className="custom__button">
          View more
        </button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery-image-${index + 1}`}>
              <img src={image} alt="gallery image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrow">
          <BsArrowLeftShort
            className="gallery-arrow_icon"
            onClick={() => scrollImages("left")}
          />
          <BsArrowRightShort
            className="gallery-arrow_icon"
            onClick={() => scrollImages("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
