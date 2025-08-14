import React, { useState, useEffect, useMemo, useCallback } from "react";

import SearchBar from "../Component/SearchBar";
import RestaurantList from "../Component/RestaurantList";
import styles from "../styles/HomePage.module.css";

const HomePage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Simulating API call
    const fetchData = async () => {
      const data = [
        { id: 1, name: "Pizza Palace", rating: 4.5 },
        { id: 2, name: "Burger Barn", rating: 4.0 },
        { id: 3, name: "Sushi World", rating: 4.8 },
        {id: 4,  name: "A2B", rating: 4.6}
      ];
      setRestaurants(data);
    };
    fetchData();
  }, []);

  const filteredRestaurants = useMemo(() => {
    return restaurants.filter((r) =>
      r.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [restaurants, searchQuery]);

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  return (
    <div className={styles.container}>
      <h1>Restaurant Finder</h1>

      <SearchBar onSearch={handleSearch} />   
      <RestaurantList restaurants={filteredRestaurants} />

    </div>
  );
};

export default HomePage;
