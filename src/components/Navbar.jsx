import { NavLink } from "react-router-dom";
import { provideContext } from "../hooks/context"
import { useContext } from "react";

// import Search from './Search';

const Navbar = () => {
  const { clearFilter, filterCars } = useContext(provideContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-4">
        <div className="container-fluid">
          <div className="logo" to="/">
            {" "}
            <img
              src="https://res.cloudinary.com/diyopzdxb/image/upload/v1675122320/cars-images/logo_acnp6h.png"
              alt="logo"
              height="40"
              width="200"
            ></img>
          </div>

          <NavLink to="/favorites" className="navbar-brand">
            Favorites
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link active" onClick={clearFilter}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link extra" onClick={(e)=>filterCars( e  , "Volkswagen")}>
                VOLKSWAGEN
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link"  onClick={(e)=>filterCars( e  , "Audi")}>
                  AUDI
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link"  onClick={(e)=>filterCars( e  , "SEAT")}>
                SEAT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link"  onClick={(e)=>filterCars( e  , "ŠKODA")}>
                ŠKODA
                </NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink to="/search" className="nav-link">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  About
                </NavLink>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
