import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import RestaurantCard from "../Component/RestaurantCard";

const FavoritesPage = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <h1>Favorites</h1>
      {favorites.length > 0 ? (
        <RestaurantList restaurants={favorites} />
      ) : (
        <p>No favorites yet.</p>
      )}
    </div>
  );
};

export default FavoritesPage;
