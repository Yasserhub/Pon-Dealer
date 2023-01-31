import { useState, useEffect } from "react";
import allCarsBrands from "../cars-data/all-CarsBrands";

const useFetch = (id) => {
  const [data, setData] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [serverError, setServerError] = useState(null);

  const filterCarById = (card_id) => {
    const filteredCar = allCarsBrands.find(
      (car) => Number(car.id) === Number(card_id)
    );
    setLoading(false);
    setServerError(null);
    return filteredCar;
  };

  useEffect(() => {
    setTimeout(() => {
      if (isNaN(id)) {
        setData(allCarsBrands);
        setLoading(false);
        setServerError(null);
      } else {
        const filterCar = filterCarById(id);
        console.log(filterCar);
        setData(filterCar);
      }

      if (data === "") {
        setLoading(false);
        setServerError(true);
      }
    }, 2000);
  }, [id]);

  return { data, isLoading, serverError };
};

export default useFetch;
