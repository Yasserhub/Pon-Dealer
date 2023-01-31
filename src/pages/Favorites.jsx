import { useContext, useEffect, useState } from "react";
import { provideContext } from "../hooks/context";
import allCarsBrands from "../cars-data/all-CarsBrands";
import ViewCars from '../view/ViewCars';




const Favorites = () => {
  
  
  const { favorites} = useContext(provideContext);
  

  const [favCars, setFavCars] = useState([]);
  const [allCars, setAllCars] = useState(allCarsBrands);
  const [isLoading, setLoading] = useState(true);
  const [serverError, setServerError] = useState(false); 

  useEffect(() => {
    setAllCars(allCarsBrands);
    console.log(`allCars ${allCars}`);
    const promises = favorites.map((id) => 
    allCars.find(car => Number(car.id) === Number(id))
     );
     setFavCars(promises)
     setLoading(false);
     setServerError(null);
    
  }, [favorites]);

  return (
    <div className="favorites_page">
    
      {isLoading && <h1>"Favorites Products Coming Soon" </h1>}
      {serverError && (
       <h1>{serverError}"Error is occurs while loading the Favorites Products" </h1>
      )}
      <h1 className={favCars.length === 0 ? "fav_title" : "fav_title none"}>
        You haven't chosen any favorites yet!
      </h1>
      {favCars.length > 0 && (
        <div className="fav_container">
          {favCars &&
            favCars.map((car) => {
              return <ViewCars car={car} key={car.id} />;
            })}
        </div>
      )}
    </div>
  );
};

export default Favorites;