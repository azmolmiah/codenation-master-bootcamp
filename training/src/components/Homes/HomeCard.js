import React from "react";

const HomeCard = ({ src, alt, title }) => {
  return (
    <div className="home-card">
      <img src={src} alt={alt} />
      <p>{title}</p>
    </div>
  );
};

export default HomeCard;
