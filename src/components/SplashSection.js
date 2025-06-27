import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import Lottie from "lottie-react";
import soccerball2 from "../animations/soccerball2.json";
import "../styles/SplashSection.css";

import bg1 from "../assets/bg1.webp";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.webp";

const slides = [
  {
    title: "Fan Fest 2025 - Where travel meets football",
    subtitle: "Register now and get 10% off your next AfineTrip flight",
    background: bg1,
    textStyle: {
  color: "#d88371",
  textShadow: "1px 1px 2px rgba(255,255,255,0.3)",
  fontWeight: "600",
}
  },
  {
    title: "Score Big with AfineTrip",
    subtitle: "Win Euro 2025 match passes with every booking!",
    background: bg2,
    textStyle: {
  color: "#ffffff",
  textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
  fontWeight: "600",
}

  },
  {
    title: "Travel Like a Pro",
    subtitle: "Custom match + travel packages for football fans",
    background: bg3,
   textStyle: {
  color: "#222222",
  fontWeight: "700",
}

  },
];


const SplashSection = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section
      className="splash-section-bootstrap"
      style={{
        backgroundImage: `url(${slides[index].background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transition: "background-image 0.5s ease-in-out", // smooth fade transition of bg
        color: "white",
      }}
    >
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={5000}
        controls={false}
        indicators={false}
      >
       {slides.map((slide, idx) => (
  <Carousel.Item key={idx}>
    <div className="carousel-content-bootstrap">
      <div className="carousel-animation-bootstrap">
        <Lottie animationData={soccerball2} loop autoplay />
      </div>
      <div className="carousel-text-bootstrap" style={slide.textStyle}>
        <h2>{slide.title}</h2>
        <p>{slide.subtitle}</p>
      </div>
    </div>
  </Carousel.Item>
))}

      </Carousel>
    </section>
  );
};

export default SplashSection;
