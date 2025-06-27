import React from 'react';
import Header from '../components/Header';
import SplashSection from '../components/SplashSection';
import EventForm from '../components/EventForm';
import Footer from '../components/Footer';

const Home = () => (
  <div style={{ backgroundColor: "red",width: "100%", }}>
    <Header />
    <SplashSection />
    <EventForm />
    <Footer />
  </div>
);

export default Home;
