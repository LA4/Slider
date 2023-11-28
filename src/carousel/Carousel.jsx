import "./carousel.css";
import { IMAGES } from "./../assets/listOfImage/listOfImage";
import { CarouselSelectorImages } from "./CarouselSelectorImages";
import { useState } from "react";
/**
 *
 * @param {Object} props
 * @param {[Object]} IMG - Array of object describe images
 * @returns {React.node}
 */
export function Carousel({ IMG = IMAGES }) {
  /**
   * @type {[MainImageState, React.Dispatch<React.SetStateAction<MainImageState>>
   */
  const [mainImage, setMainImage] = useState({});
  const [visible, setVisible] = useState(true);
  /**
   *
   * @param {[Object]} data
   */
  const getDatafromchild = (data) => {
    setMainImage(data);
    setVisible(false);
  };
  return (
    <>
      <div className="container">
        <div className="container-carousel-image">
          <img src={mainImage.srcImage} alt={mainImage.srcTitle} />
          {visible && <img src={IMG[0].source} alt={mainImage.srcTitle} />}{" "}
        </div>
        <CarouselSelectorImages
          IMAGES={IMG}
          visibleImage="2"
          getDatafromchild={getDatafromchild}></CarouselSelectorImages>
      </div>
    </>
  );
}
