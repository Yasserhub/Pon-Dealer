import { Link } from "react-router-dom";
import Heart from "../components/Heart"

const Car = ({car})=> {
    const {brand ,model, Transmission, fuel, year, image, id , price} = car
  
    return (
      <>
      
        {car && (
          <div className='car'>
        <Link to={`/car/${id}`}>
           <img className="car-image" src={image} alt={brand} />
           <h3 className="car-brand">{brand}</h3>
           <div className="car-model">{model}</div>
           <p className="car-info"> {fuel}<div className="vl"></div>{Transmission}<div className="vl"></div>{year}</p>
           <hr className ="hl"></hr>

        </Link>

           <div className="price">
            <div className="car-model">Price:</div>
            <div className="car-price">€ {price}</div>
          </div>
          
          <div className="icon-more-info">

          <button className="button" onChange={`/car/${id}`}>See the details</button>
          <Heart id={id} />
          </div>
       

        </div>
        )}
      
      </>
    )
  }
  
  export default Car