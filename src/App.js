import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink} from "react-router-dom";
import data from "./server";

//COMPONENTS
// import Navigation from "./components/Navigation";
// import Products from "./components/Products";
// import ShoppingCart from "./components/ShoppingCart";
// import CheckoutForm from "./components/CheckoutForm";
// import HomePage from "./components/HomePage";
// import Header from "./components/Header"
import MacrameList from "./components/MacrameList";

//CONTEXTS
// import { ProductContext } from "./contexts/ProductContext";
// import { CartContext } from "./contexts/CartContext";


//styles


function App() {

  const [macrame, setMacrames] = useState([])

  // const [products] = useState(data);
  // const [cart, setCart] = useState([]);

  // const addToCart = (item) => {
   
  //   setCart([...cart, item]);
  // };

  // const removeFromCart = (item) => {
	//   setCart(cart.filter((p) => p.id !== item.id));
  // };

  return (
    <div className="App">
      <h1>Macrame Shops</h1>
    <Route exact path="/" component={MacrameList}/>
      {/* <ProductContext.Provider value={{ products, addToCart }}>
        <CartContext.Provider value={ cart }>
          <Routes>
            <Route exact path="/" component={HomePage} />
            <Route path="/cart" element={<ShoppingCart cart={cart} />} />
            <Route path="/checkout" component={CheckoutForm} />
          </Routes>
          </CartContext.Provider>
      </ProductContext.Provider> */}
    </div>
  );
}

export default App;
