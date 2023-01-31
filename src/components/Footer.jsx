import { NavLink } from "react-router-dom";
import { provideContext } from "../hooks/context";
import { useContext } from "react";

const Footer = () => {
  const { filterCars } = useContext(provideContext);
  return (
    <div>
      <footer className="text-center text-lg-start bg-dark text-white">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <NavLink to="/" className="me-4 link-secondary">
              <i className="fab fa-facebook-f"></i>
            </NavLink>
            <NavLink to="/" className="me-4 link-secondary">
              <i className="fab fa-twitter"></i>
            </NavLink>
            <NavLink to="/" className="me-4 link-secondary">
              <i className="fab fa-google"></i>
            </NavLink>
            <NavLink to="/" className="me-4 link-secondary">
              <i className="fab fa-instagram"></i>
            </NavLink>
            <NavLink to="/" className="me-4 link-secondary">
              <i className="fab fa-linkedin"></i>
            </NavLink>
            <NavLink to="/" className="me-4 link-secondary">
              <i className="fab fa-github"></i>
            </NavLink>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <div className="logo" to="/">
                  {" "}
                  <img
                    src="https://res.cloudinary.com/diyopzdxb/image/upload/v1675122320/cars-images/logo_acnp6h.png"
                    alt="logo"
                    height="40"
                    width="200"
                  ></img>
                </div>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Our Brands</h6>
                <p>
                  <NavLink
                    to="/"
                    className="text-reset"
                    onClick={(e) => filterCars(e, "Volkswagen")}
                  >
                    Volkswagen
                  </NavLink>
                </p>
                <p>
                  <NavLink
                    to="/"
                    className="text-reset"
                    onClick={(e) => filterCars(e, "ŠKODA")}
                  >
                    ŠKODA
                  </NavLink>
                </p>
                <p>
                  <NavLink
                    to="/"
                    className="text-reset"
                    onClick={(e) => filterCars(e, "Audi")}
                  >
                    Audi
                  </NavLink>
                </p>
                <p>
                  <NavLink
                    to="/"
                    className="text-reset"
                    onClick={(e) => filterCars(e, "Seat")}
                  >
                    Seat
                  </NavLink>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3 text-secondary"></i>{" "}
                  Amersfoort, Netherlands
                </p>
                <p>
                  <i className="fas fa-envelope me-3 text-secondary"></i>
                  info@pondealer.nl
                </p>
                <p>
                  <i className="fas fa-phone me-3 text-secondary"></i> + 31 085
                  019 2720 88
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4">
          © 2023 Copyright:
          <NavLink to="/" className="text-reset fw-bold">
            pondealer.nl
          </NavLink>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
