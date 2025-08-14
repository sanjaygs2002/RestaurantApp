import React, { useState, useCallback } from "react";
import { FavoritesContext } from "./FavoritesContext";

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = useCallback((restaurant) => {
    setFavorites((prev) => {
      if (!prev.some((fav) => fav.id === restaurant.id)) {
        return [...prev, restaurant];
      }
      return prev;
    });
  }, []);

  const removeFavorite = useCallback((id) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== id));
  }, []);

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
