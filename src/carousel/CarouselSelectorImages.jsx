import { useState } from "react";
import { Arrow } from "./Arrow";

/**
 * @component
 * @typedef {Array<Object>} IMAGES
 * @param {IMAGES} IMAGES
 * @param {number} visibleImage
 * @param {function} getDataFromChild
 * @returns {React.node} Container selectable images
 */

export const CarouselSelectorImages = ({
  IMAGES,
  visibleImage = 3,
  getDatafromchild,
}) => {
  /** hook to know the current middle image
   * @type {[number,number]}
   */
  const [currentImage, setCurrentImage] = useState(0);
  /**
   * @type {number}
   */
  let precImage = currentImage == 0 ? IMAGES.length - 1 : currentImage - 1;
  /**
   * @type {number}
   */
  let nextImages = currentImage == IMAGES.length - 1 ? 0 : currentImage + 1;
  /**
   * @return {number}
   */
  const nextPage = () => {
    if (currentImage < IMAGES.length - 1) {
      setCurrentImage(currentImage + 1);
    } else setCurrentImage(0);
  };
  /**
   * @return {number}
   */
  const prevPage = () => {
    if (currentImage == 0) {
      setCurrentImage(IMAGES.length - 1);
    } else setCurrentImage(currentImage - 1);
  };
  if (visibleImage > 3) {
    return (
      <div className="error">
        If you want to change number of visible images, you must choose between
        1,2 or 3.
        <span>actual visibleImage :{visibleImage}</span>
      </div>
    );
  }
  /**
   *
   * @param {Event} e
   * @return {void}
   */
  const sendDataToParent = (e) => {
    let srcImage = e.target.src;
    let srcTitle = e.target.alt;
    getDatafromchild({ srcImage, srcTitle });
  };
  return (
    <>
      <div className="container-carousel-selector-image">
        <span onClick={prevPage} className="carousel-selector-image_arrow_left">
          <Arrow></Arrow>
        </span>
        <ul className="carousel-selector-image_ul">
          {visibleImage > 2 && (
            <li
              onClick={sendDataToParent}
              className="carousel-selector-image_li">
              <img
                className="carousel-selector-image_img "
                src={IMAGES[precImage].source}
                alt={IMAGES[precImage].title}
              />{" "}
            </li>
          )}
          <li onClick={sendDataToParent} className="carousel-selector-image_li">
            <img
              className="carousel-selector-image_img "
              src={IMAGES[currentImage].source}
              alt={IMAGES[currentImage].title}
            />
          </li>
          {visibleImage > 1 && (
            <li
              onClick={sendDataToParent}
              className="carousel-selector-image_li">
              <img
                className="carousel-selector-image_img "
                src={IMAGES[nextImages].source}
                alt={IMAGES[nextImages].title}
              />
            </li>
          )}
        </ul>
        <span
          onClick={nextPage}
          className="carousel-selector-image_arrow_right">
          <Arrow right></Arrow>
        </span>
      </div>
    </>
  );
};
