import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import ViewCarDetails from "../view/ViewCarDetails"


const CarDetails = () => {
  const { id } = useParams();
  const { data, isLoading, serverError } = useFetch(id);  
  
  return (
    <>
      {serverError && <h1>{serverError} ...</h1>}
      {isLoading && <h1>Please wait to load data ...</h1>} 
      
      {data && (
        <div
          className={isLoading ? "details-Container none" : "details-Container"}
        >
          
          <ViewCarDetails car={data} />
          
        </div>
      )}
    </>
  );
}

export default CarDetails;