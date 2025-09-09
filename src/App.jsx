// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./page/Home";
import About from "./page/About";
import Bhajans from "./page/Bhajans";
import Videos from "./page/Videos";
import Gallery from "./page/Gallery";
import Events from "./page/Events";
import Contact from "./page/Contact";
import Mission from "./page/Mission";
import Admin from "./page/Admin";

const App = () => {

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <Navbar />

     

      <div className="flex-grow pt-16">

   
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin/>} />
     
          <Route path="/about" element={<About />} />
          <Route path="/bhajans" element={<Bhajans />} />
          <Route path="/mession" element={<Mission />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
