import { useState } from 'react';

import React from "react";
import "./App.css";
import Header from './components/Layout/Header'
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from  './components/Cart/Cart';
import {CartProvider} from './store/cart-context'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div className="App">
      <CartProvider>
        <Router>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
            <Routes>
            <Route path="/"  element={<Home />} />
            <Route path="/menu"  element={<Menu />} />
            <Route path="/about"  element={<About />} />
            <Route path="/contact"  element={<Contact />} />
            </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
