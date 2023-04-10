import React, { useEffect, useState } from "react";
//import { RestaurantList } from "./Config";
import RestuarntCard from "./Restaruntcard";
import Shimmer from "./Shimmer";
import Shimmer1 from "./Shimmer1";

import { Link } from "react-router-dom";

//import  React from "react";

//import * as abc from './comp/test.js';

const Body = () => {
  //const data=10;

  const [Allrestaurant, setAllrestaurant] = useState([]);

  const [filterdata, setfilterdata] = useState([]);

  const [search, setsearch] = useState();

  const FillterData = (search, Allrestaurant) => {
    // console.log("working");

    const item = Allrestaurant.filter((load) =>
      load?.data?.name?.toLowerCase().includes(search?.toLowerCase())
    );
    return item;
  };

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.612912&lng=77.2295097&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // console.log(json);

    setAllrestaurant(json?.data?.cards[2]?.data?.data?.cards);

    setfilterdata(json?.data?.cards[2]?.data?.data?.cards);
  }

  useEffect(() => {
    getRestaurant();
  }, []);

  // console.log("render");

  // if(!Allrestaurant) return null;

  // if(filterdata?.length===0) return <h1>Items Not Found...</h1>;

  return (Allrestaurant.length===0) ?<Shimmer/>: (
    <>
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search your Items Here..."
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          style={{ padding: 4, width: 700 }}
        />
        <button
          onClick={() => {
            const data = FillterData(search, Allrestaurant);
            setfilterdata(data);
          }}
          style={{ margin: 7, padding: 12, width: 100 }}
        >
          Search
        </button>
      </div>

      <div className="body">
        {Allrestaurant.length === 0 ? (
          <Shimmer />
        ) : Allrestaurant.map((res) => {
            return <Link key={res.data.id} to = {"/restamenu/"+res.data.id}><RestuarntCard {...res.data}  /> </Link>;
          }) && filterdata.length === 0 ? (
          <Shimmer1 />
        ) : (
          filterdata.map((res) => {
            return <Link key={res.data.id} to = {"/restamenu/"+res.data.id}> <RestuarntCard {...res.data}  /></Link>;
          })
        )}

        {/* {Allrestaurant.map((datas) => {
          return <Link key={datas.data.id} to={"/restamenu/"+datas.data.id}><RestuarntCard {...datas.data}  /></Link> ;
        })} */}
      </div>
    </>
  );
};

export default Body;
