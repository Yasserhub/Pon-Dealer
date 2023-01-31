import { useState, useEffect } from "react";
import allCarsBrands from "../cars-data/all-CarsBrands";
import ViewCars from '../view/ViewCars';

const Search = ({searchLetter}) => {

    const [query, setQuery] = useState("")
    setQuery(searchLetter);
    const [posts, setPost] = useState(null);
    useEffect(() => {
        setPost(allCarsBrands);
      
             const result = posts.filter(post => {
                    if (searchLetter === '') {
                        return post;
                    } else if (post.model.toLowerCase().includes(query.toLowerCase())) {
                        return post;
                    }
                })

                setPost (result);
            
    }, []);
    
    

    return (
    < div > 

    <h1 className={posts.length === 0 ? "fav_title" : "fav_title none"}>
        You haven't chosen any favorites yet!
      </h1>
      {posts.length > 0 && (
        <div className="fav_container">
          {posts &&
            posts.map((car) => {
              return <ViewCars car={car} key={car.id} />;
            })}
        </div>
      )}   
           
    </div >
    );
}

export default  Search;