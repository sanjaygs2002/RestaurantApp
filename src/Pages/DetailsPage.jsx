import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/DetailsPage.module.css";
import Rating from "../Component/Rating";
import { restaurantData } from "../data/restaurants"; // ✅ Import shared data

const DetailsPage = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const restaurant = restaurantData.find((r) => r.id === id);
    setRestaurant(restaurant);
  }, [id]);

  if (!restaurant) return <p>Loading...</p>;

  return (
    <div className={styles.details}>
      <h2>{restaurant.name}</h2>
      <p>{restaurant.description}</p>
      <Rating value={restaurant.rating} />
    </div>
  );
};

export default DetailsPage;
