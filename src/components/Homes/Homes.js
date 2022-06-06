// Libraries
import React from "react";

// Components
import HomeCard from "./HomeCard";

// Resources
import HomeOne from "../../images/homes/home1.webp";
import HomeTwo from "../../images/homes/home2.webp";
import HomeThree from "../../images/homes/home3.webp";
import HomeFour from "../../images/homes/home4.webp";

const Homes = () => {
  return (
    <div className="flex container">
      <HomeCard src={HomeOne} alt="Home One" title="Terrasini, Italy" />
      <HomeCard src={HomeTwo} alt="Home One" title="Paraty, Brazil" />
      <HomeCard src={HomeThree} alt="Home One" title="Vestervaig, Denamark" />
      <HomeCard src={HomeFour} alt="Home One" title="Raelingen, Norway" />
    </div>
  );
};

export default Homes;
