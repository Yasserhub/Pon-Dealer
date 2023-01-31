import { createContext, useState, useEffect } from "react";
import useFetch from "./useFetch";
export const provideContext = createContext();

const ProductContext = ({ children }) => {
  // const URL = "https://fakestoreapi.com/products";
  const { data: allCars, isLoading, serverError } = useFetch();

  // const { data: categories } = useFetch(`${URL}/categories`);
  const [cars, setCars] = useState([]);
  const [filteredCar, setFilteredCar] = useState([]);
  const [favorites, setFavorites] = useState(
    localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites"))
      : []
  );

  useEffect(() => {
    if (filteredCar.length === 0) {
      setCars(allCars);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites, allCars, filteredCar]);

  const filterCars = (e, cate) => {
    const filtered = allCars.filter((car) => car.brand === cate);
    setFilteredCar(filtered);
  };

  // clear filter
  const clearFilter = () => {
    setFilteredCar([]);
  };

  // Favorite
  const handleFavorite = (id) => {
    if (favorites.includes(id)) {
      const favoritesIds = favorites.filter((favId) => favId !== id);
      setFavorites(favoritesIds);
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const isFavorite = (id) => {
    return favorites.includes(id);
  };

  const value = {
    cars,
    favorites,
    isLoading,
    serverError,
    clearFilter,
    isFavorite,
    filteredCar,
    filterCars,
    handleFavorite,
  };
  return (
    <provideContext.Provider value={value}>{children}</provideContext.Provider>
  );
};

export default ProductContext;
