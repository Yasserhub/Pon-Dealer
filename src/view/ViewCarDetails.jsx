import Heart from "../components/Heart";

const Car = ({ car }) => {
  const { brand, model, image, id, price } = car;

  return (
    <>
      {car && (
        <div className="details-Container">
          <div className="viewCar">
            <img className="viewCar-image" src={image} alt={brand} />
          </div>
          {/* kkkk */}

          <div className="viewCarInfo">
            <h3>{brand} <span><Heart id={id} /></span></h3>
            <div className="car-model-details">{model}</div>
            

            <div className="price-details">
              <div className="car-price-text">Now for</div>
              <div className="car-price-num">€ {price}</div>
            </div>
            <div className="tax">Tax deductible</div>
            <hr className ="hl"></hr>
            <div className="details-button-container-1">
              <button className="button button1">Request a trade-in</button>
              <button className="button button2">Test drive</button>
              
            </div>

            <div className="details-button-container-2">
               <button className="button button3">Offerte</button>
              <button className="button button4">Buy Online</button>
            </div>
            
          </div>
        </div>
      )}
    </>
  );
};

export default Car;
