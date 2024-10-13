import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import React from 'react';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';




function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/* Define the Route without the closing </Route> */}
          <Route path='/' exact element={<Home />} />
          <Route path='/services' exact element={<Services />} />
          <Route path='/products' exact element={<Products />} />
          <Route path='/sign-up' exact element={<SignUp />} />



        </Routes>
      </Router>
    </div>
  );
}

export default App;
