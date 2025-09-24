import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Reserve from "./components/reserve/Reserve";
import Reservations from "./components/reservations/Reservations";
import Contact from "./components/contact/Contact";
import AddNewPlace from "./components/addNewPlace/AddNewPlace";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/add-new-place" element={<AddNewPlace />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
