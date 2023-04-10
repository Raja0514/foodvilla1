import { useState, useEffect } from "react";

import { MENU_CARD_URL } from "../components/Config";

const useRestamenu1 = (id) => {
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {

    const data = await fetch(MENU_CARD_URL + id);
    const json = await data.json();
    console.log("json", json);
    const menuItemsList =
      json.data.cards[2]["groupedCard"].cardGroupMap.REGULAR.cards;

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

    setRestaurant(modified.menu);
  }

  return restaurant;
};

export default useRestamenu1;
