import { useContext } from "react";
import { provideContext } from '../hooks/context'
// import Categories from '../components/Categories'
import ViewCars from '../view/ViewCars'


const Cars = () => {
  const { cars, isLoading, serverError, filteredCar } = useContext(provideContext);

  return (
    <>
    {serverError && <h1>{serverError} ...</h1>}
    {isLoading && <h1>Please wait to load data ...</h1>}
      {/* <Categories /> */}
      <div className="cars">
        {filteredCar.length === 0
          ? cars &&
            cars.map((car) => (
              <ViewCars key={car.id} car={car} />
            ))
          : cars &&
            filteredCar.map((car) => (
              <ViewCars key={car.id} car={car} />
            ))}
      </div>
    </>
  )
  
}

export default Cars