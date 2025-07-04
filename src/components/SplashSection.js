import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import Lottie from "lottie-react";
import soccerball2 from "../animations/soccerball2.json";
import "../styles/SplashSection.css";

import bg1 from "../assets/bg1.png";
import bg2 from "../assets/bg2.png";
import bg3 from "../assets/b3.png";
import bg4 from "../assets/bg4.png";
import bg5 from "../assets/bg5.png";

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
  /* {
    title: "Travel Like a Pro",
    subtitle: "Custom match + travel packages for football fans",
    background: bg4,
   textStyle: {
  color: "#222222",
  fontWeight: "700",
}

  },
  {
    title: "Travel Like a Pro",
    subtitle: "Custom match + travel packages for football fans",
    background: bg5,
   textStyle: {
  color: "#222222",
  fontWeight: "700",
}

  }, */
];


const SplashSection = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
<section className="carousel-wrapper">
  <Carousel
    activeIndex={index}
    onSelect={handleSelect}
    interval={5000}
    controls={false}
    indicators={false}
  >
    {slides.map((slide, idx) => (
      <Carousel.Item key={idx}>
        <img
          src={slide.background}
          alt={`Slide ${idx}`}
          className="carousel-image"
        />
      </Carousel.Item>
    ))}
  </Carousel>
</section>


  );
};

export default SplashSection;
