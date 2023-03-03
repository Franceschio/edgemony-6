import "./index.css";
import { useState } from "react";

const Slider = () => {
  const bestImages = [
    "https://picsum.photos/id/18/1080/1080",
    "https://picsum.photos/id/33/1080/1080",
    "https://picsum.photos/id/19/1080/1080",
    "https://picsum.photos/id/40/1080/1080",
  ];

  const [sliderImage, setSliderImage] = useState(0);

  return (
    <div className="slider">
      <div
        className="leftArrow"
        onClick={() => {
          setSliderImage(
            sliderImage === 0 ? bestImages.length - 1 : sliderImage - 1
          );
        }}
      >
        {"<"}
      </div>
      <img src={bestImages[sliderImage]} alt="slider img" />
      <div
        className="rightArrow"
        onClick={() => {
          setSliderImage(
            sliderImage === bestImages.length - 1 ? 0 : sliderImage + 1
          );
        }}
      >
        {">"}
      </div>
    </div>
  );
};

export default Slider;
