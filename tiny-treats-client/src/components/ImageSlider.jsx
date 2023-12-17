import { useState, useEffect } from "react";
import image1 from "../assets/LandingPageGadgets.png";
import image2 from "../assets/LandingPageChristmas.png";
import image3 from "../assets/LandingPagePhotography.png";
import image4 from "../assets/LandingPageWellness.png";
import image5 from "../assets/LandingPageArts&Crafts.png";

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "30px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: image1, link: "http://localhost:5173/Gadgets" },
    { src: image2, link: "http://localhost:5173/Christmas" },
    { src: image3, link: "http://localhost:5173/Photography" },
    { src: image4, link: "http://localhost:5173/Wellness" },
    { src: image5, link: "http://localhost:5173/Arts & Crafts" },
  ];
  const totalImages = images.length;

  const handleLeftArrowClick = () => {
    setCurrentIndex((currentIndex - 1 + totalImages) % totalImages);
  };

  const handleRightArrowClick = () => {
    setCurrentIndex((currentIndex + 1) % totalImages);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleRightArrowClick();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const adjustedIndex = (currentIndex + totalImages) % totalImages;

  const dotsContainerStyles = {
    position: "absolute",
    bottom: "80px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
  };

  const dotStyle = {
    fontSize: "24px",
    cursor: "pointer",
    margin: "0 5px",
    color: "white",
  };

  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={handleLeftArrowClick}>
        ❰
      </div>
      <a
        href={images[adjustedIndex].link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={images[adjustedIndex].src}
          alt={`Image ${adjustedIndex + 1}`}
          style={{ width: "100%", height: "90%" }}
        />
      </a>
      <div style={rightArrowStyles} onClick={handleRightArrowClick}>
        ❱
      </div>
      <div style={dotsContainerStyles}>
        {images.map((_, index) => (
          <div
            key={index}
            style={dotStyle}
            onClick={() => setCurrentIndex(index)}
          >
            {index === currentIndex ? "●" : "○"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
