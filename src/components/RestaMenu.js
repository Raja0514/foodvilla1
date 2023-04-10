import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL1 } from "./Config";
import Shimmer from "./Shimmer";
import useRestamenu from "../hook/useRestamenu";
import useRestamenu1 from "../hook/useRestamenu1";

const RestaMenu = () => {

  const { id } = useParams();

  



  const Info = useRestamenu(id);

  const restauarnt = useRestamenu1(id);

  return (
    <>
      {Info.length === 0 && restauarnt.length == 0 ? (
        <Shimmer />
      ) : (
        <div className="card5">
          <div className="card7">
            <img
              className="w-[254px] h-[165px] mob:w-[130px] mob:[81px]"
              src={IMG_CDN_URL1 + Info.cloudinaryImageId}
              alt="datamissing"
            />
            <h3>Restauarnt Id:{id}</h3>
            <h3>Restaurant Name:{Info.name}</h3>
            <h3>Total Ratings:{Info.totalRatings / 100}</h3>
            <h3>city:{Info.city}</h3>
            <h3>Area Name:{Info.areaName}</h3>
          </div>

          <div>
            {restauarnt.map((data) => {
              return (
                <ul key={data.title}>
                  <li>{data.title}</li>
                </ul>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default RestaMenu;
