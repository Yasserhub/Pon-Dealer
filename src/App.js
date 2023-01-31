import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductContext from "./hooks/context";
import Navbar from "./components/Navbar";
import Cars from "./pages/Cars";
import CarDetails from "./pages/CarDetails";
import Favorites from "./pages/Favorites";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <ProductContext>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Cars />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/car/:id" element={<CarDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ProductContext>
  );
}

export default App;
