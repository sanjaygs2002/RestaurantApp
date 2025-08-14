import React from "react";
import { Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesProvider";
import HomePage from "./Pages/HomePage";
import DetailsPage from "./Pages/DetailsPage";
import FavoritesPage from "./Pages/FavoritesPage";

function App() {
  return (
    <FavoritesProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </FavoritesProvider>
  );
}

export default App;
