

import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { IMG_CDN_URL1 } from "./Config";

import Shimmer from "./Shimmer";

const RestaMenu = () => {
  
  const { id } = useParams();

  const [res, setres] = useState([]);

  const [res1, setres1] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.612912&lng=77.2295097&restaurantId=" +
        id
    );

    const json = await data.json();

    console.log("json", json);

    const menuItemsList =
      json.data.cards[2]["groupedCard"].cardGroupMap.REGULAR.cards;

    //console.log("list", json.data.cards[2]["groupedCard"].cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info.name);

    const itemCategory =
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";

    const NestedItemCategory =
      "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";

    const menu = menuItemsList.map((item) => {
      if (
        item.card.card["@type"] === itemCategory ||
        item.card.card["@type"] === NestedItemCategory
      )
        return item.card.card;
    });

    console.log("menu", menu);

    const modified = {
      info: json.data.cards[0].card.card.info,
      menu: menu.filter((value) => value !== undefined),
    };
    console.log("info", modified.info);
    console.log("modified menu", modified.menu);

    //console.log(json.data);

    // console.log("menulist",json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    // console.log(json.data.cards[0]);

    // console.log(json.data.cards[1]);

    // console.log("menu",json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.categories[0].title);
    // console.log(
    //   "menu",
    //   json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
    //     ?.card?.itemCards
    // );

    // setres(
    //   json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
    //     ?.card?.itemCards
    // );
    setres(modified.menu);
    setres1(modified.info);
  }

  // const testin= res.filter(data=>data.itemCards)
  // console.log(testin);

  return (
    <>
      {res1.length === 0 ? (
        <Shimmer/>
      ) : (
        <div className="card5">
          <h3>Restauarnt Id:{id}</h3>
          <h3>Restaurant Name:{res1.name}</h3>

          <div className="card7">
            <img
              className="w-[254px] h-[165px] mob:w-[130px] mob:[81px]"
              src={IMG_CDN_URL1 + res1.cloudinaryImageId}
              alt="datamissing"
            />
            <h3>Total Ratings:{res1.totalRatings / 100}</h3>
            <h3>city:{res1.city}</h3>
            <h3>Area Name:{res1.areaName}</h3>
          </div>

          {/* {res.map(data=><h3 key={data.title}>{data.title}</h3>)} */}
          {/* <div>
      <h3>Menu</h3>
      <ul>
        {res.map((data) => {
          return <li key={data.card.info.id}>{data.card.info.name}</li>;
        })}
      </ul>
    </div> */}

          {res.map((data) => (
            <ul key={data.title}>
              <li>{data.title}</li>
            </ul>
          ))}
        </div>
      )}
    </>
  );
};

export default RestaMenu;
