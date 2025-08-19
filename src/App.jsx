import React from "react";
import { Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesProvider";
import HomePage from "./Pages/HomePage";
import DetailsPage from "./Pages/DetailsPage";
import FavoritesPage from "./Pages/FavoritesPage";
import FetchingData from "./LazyLoding/FetchingData";
import Lazy from "./LazyLoding/Lazy";

function App() {
  return (
    <FavoritesProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/data" element={<FetchingData/>}/>
        <Route path="/lazy" element={<Lazy/>}/>
      </Routes>
    </FavoritesProvider>
  );
}

export default App;
