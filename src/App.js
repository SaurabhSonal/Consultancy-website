import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import React from 'react';

import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import ContactUs from "./Pages/ContactUs";

const App = () => {
  return(
      <>
<Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/ContactUs" element={<ContactUs/>}></Route> 
        </Routes>
</Router>
      </>
  );
};

export default App;
