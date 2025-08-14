import React from "react";

import RestaurantCard from "./RestaurantCard";


const RestaurantList = ({ restaurants }) => {
  return (
    <div>
      {restaurants.map((r) => (
        <RestaurantCard key={r.id} restaurant={r} />
      ))}
    </div>
  );
};

export default RestaurantList;
