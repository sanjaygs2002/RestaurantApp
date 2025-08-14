import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { Link } from "react-router-dom";
import styles from "../styles/RestaurantCard.module.css";
import Rating from "./Rating";

const RestaurantCard = ({ restaurant }) => {
  const { addFavorite, removeFavorite, favorites } = useContext(FavoritesContext);
  const isFavorite = favorites.some((fav) => fav.id === restaurant.id);

  return (
    <div className={styles.card}>
      <h3>{restaurant.name}</h3>
      <Rating value={restaurant.rating} />
      <Link to={`/details/${restaurant.id}`}>View Details</Link>
      <button
        onClick={() =>
          isFavorite ? removeFavorite(restaurant.id) : addFavorite(restaurant)
        }
      >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default RestaurantCard;
