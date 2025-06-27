import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import "../styles/SplashScreen.css";
import logo from "../assets/logo.png";
import soccerAnimation from "../animations/soccerBall.json";
import cloudAnimation from "../animations/cloudAnimation.json"; 
import planeAnimation2 from "../animations/whitePlane.json";
const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-container">
      {/* Floating cloud animations around */}
      <div style={{ position: 'absolute', top: '5%', left: '10%', width: 100, height: 60 }}>
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
{/* Middle plane (delayed start) */}
<div className="plane-loader middle-plane">
  <Lottie
    animationData={planeAnimation2}
    loop
    autoplay
    style={{ width: "100%", height: "100%" }}
  />
</div>


      <div style={{ position: 'absolute', top: '15%', right: '10%', width: 130, height: 70 }}>
        <Lottie animationData={cloudAnimation} loop autoplay />
      </div>
      <div style={{ position: 'absolute', bottom: '20%', left: '5%', width: 120, height: 60 }}>
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
  <img
    src={logo}
    alt="Afinetrip Logo"
    className="splash-logo"
  />
</div>


      {/* Text */}
      <div style={{ marginTop: "30px" }}>
        <h1 className="splash-title">Welcome to Fan Fest 2025</h1>
        <p className="splash-subtitle">Your Adventure Begins Here</p>
      </div>

      {/* Soccer animation */}
      <div style={{ width: 250, height: 150,paddingTop: "10px" }}>
        <Lottie
          animationData={soccerAnimation}
          loop={true}
          autoplay={true}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

{/* Football loading bar */}
{/* <div className="football-loading-bar">
  <div className="football-loader-ball">
    <Lottie
      animationData={ballAnimation}
      loop
      autoplay
      style={{ width: "40%", height: "100%" }}
    />
  </div>
</div> */}




      {/* Ground */}
      <div className="splash-ground" />
    </div>
  );
};

export default SplashScreen;
