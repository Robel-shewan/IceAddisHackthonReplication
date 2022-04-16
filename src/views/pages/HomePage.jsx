import React from "react";
import Coaching from "../../components/coaching";
import Course from "../../components/course";
import Enrollement from "../../components/Enrollement";
import Feature from "../../components/feature";
import Hero from "../../components/Hero";
import Playlist from "../../components/playlist";
import Welcome from "../../components/welcome";
import Footer from "../../components/footer";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Feature />
      <Enrollement />
      <Course />
      <Coaching />
      <Welcome />
      {/* <Playlist /> */}
      <Footer />
    </div>
  );
};

export default HomePage;
