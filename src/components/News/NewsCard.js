import React from "react";

const NewsCard = ({ src, alt, title, shortText, duration, category }) => {
  return (
    <div className="card">
      <img src={src} alt={alt} />
      <div className="card-container">
        <h4>{title}</h4>
        <p>{shortText}</p>
        <div>
          <small>{duration}</small> | <small>{category}</small>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
