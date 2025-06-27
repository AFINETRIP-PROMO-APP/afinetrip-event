import Lottie from 'lottie-react';
import React from 'react';
import soccerball2 from "../animations/soccerball2.json";
import backgroundImg from "../assets/bg.webp";
const SplashSection = () => (
  <section
  style={{
    display: "flex",
    marginTop: "20px",
    textAlign: "center",
    border: "1px solid #ccc",
    borderRadius: "8px",
    width: "90%",
    marginLeft: "auto",  // add this
    marginRight: "auto", // add this
     backgroundImage: `url(${backgroundImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      padding: "20px",
      color: "#fff", 
  }}
>
   <div
        style={{
          width: 80,
        }}
      >
        <Lottie animationData={soccerball2} loop autoplay />
      </div>
      <div style={{ }}>
    <h2>Fan Fest 2025 - Where travel meets football</h2>
    <p>Register now and receive a 10% flight discount voucher for your next trip with AfineTrip</p>
    {/* <img src="/event-banner.jpg" alt="Football Event" style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} /> */}
     </div>
  </section>
);

export default SplashSection;
