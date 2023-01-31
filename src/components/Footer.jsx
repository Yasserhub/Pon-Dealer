import {NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      {/* <!-- Footer --> */}
      <footer class="text-center text-lg-start bg-dark text-white">
        {/* <!-- Section: Social media --> */}
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* <!-- Left --> */}
          <div class="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* <!-- Left -->

    <!-- Right --> */}
          <div>
            <NavLink to="/" className="me-4 link-secondary">
              <i class="fab fa-facebook-f"></i>
            </NavLink>
            <NavLink to="/" className="me-4 link-secondary">
              <i className="fab fa-twitter"></i>
            </NavLink>
            <NavLink to="/"  className="me-4 link-secondary">
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
          {/* <!-- Right --> */}
        </section>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Links  --> */}
        <section className="">
          <div class="container text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div class="row mt-3">
              {/* <!-- Grid column --> */}
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* <!-- Content --> */}
                <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem me-3 text-secondary"></i>Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
              {/* <!-- Grid column -->

        <!-- Grid column --> */}
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 class="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <NavLink to="/" class="text-reset">
                    Angular
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/" class="text-reset">
                    React
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/" class="text-reset">
                    Vue
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/" class="text-reset">
                    Laravel
                  </NavLink>
                </p>
              </div>
              {/* <!-- Grid column -->

        <!-- Grid column --> */}
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <NavLink to="/" class="text-reset">
                    Pricing
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/" class="text-reset">
                    Settings
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/" class="text-reset">
                    Orders
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/" class="text-reset">
                    Help
                  </NavLink>
                </p>
              </div>
              {/* <!-- Grid column -->

        <!-- Grid column --> */}
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* <!-- Links --> */}
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i class="fas fa-home me-3 text-secondary"></i> New York, NY
                  10012, US
                </p>
                <p>
                  <i class="fas fa-envelope me-3 text-secondary"></i>
                  info@example.com
                </p>
                <p>
                  <i class="fas fa-phone me-3 text-secondary"></i> + 01 234 567
                  88
                </p>
                <p>
                  <i class="fas fa-print me-3 text-secondary"></i> + 01 234 567
                  89
                </p>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
        {/* <!-- Section: Links  -->

  <!-- Copyright --> */}
        <div
          class="text-center p-4"
          
        >
            {/* style="background-color: rgba(0, 0, 0, 0.025);" */}
          © 2021 Copyright:
          <NavLink to="/"  class="text-reset fw-bold">
            MDBootstrap.com
          </NavLink>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}
    </div>
  );
};

export default Footer;
