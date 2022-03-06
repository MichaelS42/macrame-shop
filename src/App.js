import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import data from "./data";

//COMPONENTS
// import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import CheckoutForm from "./components/CheckoutForm";

//CONTEXTS
import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";
// APP w/ CONTEXT

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    // add the given item to the cart
    setCart([...cart, item]);
  };

  const removeFromCart = (item) => {
	  setCart(cart.filter((p) => p.id !== item.id));
  };

  return (
    <div className="App">
      <h1> this is h1</h1>
      <ProductContext.Provider value={{ products, addItem }}>
        <CartContext.Provider value={{ cart }}>
          <Routes>
            {/* <Route exact path="/" element={<Home />} />
            <Route path="/navigation" element={<Navigation cart={cart} />} /> */}
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<ShoppingCart cart={cart} />} />
            <Route path="/checkout" component={CheckoutForm} />
          </Routes>
        </CartContext.Provider>
        
      </ProductContext.Provider>
    </div>
  );
}

export default App;
