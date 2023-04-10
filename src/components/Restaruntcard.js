import React from "react";

import { IMG_CDN_URL1 } from "./Config";

const RestuarntCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className="card1">
      <img
        alt="logodata"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <p>{cuisines.join(",")}</p>
      <p>{avgRating} Star Rating</p>
    </div>
  );
};

export default RestuarntCard;
