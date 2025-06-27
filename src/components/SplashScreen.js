import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import "../styles/SplashScreen.css";
import logo from "../assets/logo.png";
import soccerAnimation from "../animations/soccerBall.json";
import cloudAnimation from "../animations/cloudAnimation.json";
import planeAnimation2 from "../animations/whitePlane.json";
// import GoalPost from "./GoalPost";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3000);

    const planeTimer = setTimeout(() => {
      const first = document.querySelector(".middle-plane-first");
      const loop = document.querySelector(".middle-plane-loop");
      if (first && loop) {
        first.style.display = "none";
        loop.classList.remove("hidden");
      }
    }, 6000);

    return () => {
      clearTimeout(timer);
      clearTimeout(planeTimer);
    };
  }, [navigate]); // after first 6s animation ends

  return (
    <div className="splash-container">
      {/* Floating cloud animations around */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "10%",
          width: 100,
          height: 60,
        }}
      >
        <Lottie animationData={cloudAnimation} loop autoplay />
      </div>
      {/* Top plane */}
      <div className="plane-loader top-plane">
        <Lottie
          animationData={planeAnimation2}
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* First flight from center */}
      <div className="plane-loader middle-plane-first">
        <Lottie
          animationData={planeAnimation2}
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Looping flight after initial */}
      <div className="plane-loader middle-plane-loop hidden">
        <Lottie
          animationData={planeAnimation2}
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "10%",
          width: 130,
          height: 70,
        }}
      >
        <Lottie animationData={cloudAnimation} loop autoplay />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "5%",
          width: 120,
          height: 60,
        }}
      >
        <Lottie animationData={cloudAnimation} loop autoplay />
      </div>

      {/* Logo with large background cloud */}
      <div className="logo-cloud-wrapper">
        <Lottie
          animationData={cloudAnimation}
          loop
          autoplay
          className="logo-cloud"
        />
        <img src={logo} alt="Afinetrip Logo" className="splash-logo" />
      </div>

      {/* Text */}
      <div style={{ marginTop: "30px" }}>
        <h1 className="splash-title">Welcome to Fan Fest 2025</h1>
        <p className="splash-subtitle">Your Adventure Begins Here</p>
      </div>

      {/* Soccer animation */}
      <div style={{ width: 260, height: 160, paddingTop: "10px" }}>
        <Lottie
          animationData={soccerAnimation}
          loop={true}
          autoplay={true}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Football loading bar */}
      <div className="football-loading-bar">
        <div className="football-loader-ball">
          <Lottie
            animationData={cloudAnimation}
            loop
            autoplay
            style={{ width: "40%", height: "100%" }}
          />
        </div>
      </div>

      {/* Ground */}
      <div className="splash-ground" />
      {/* <GoalPost/> */}
    </div>
  );
};

export default SplashScreen;
