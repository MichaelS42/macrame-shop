import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import data from './data';

//CONTEXTS
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';
//COMPONENTS
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item])
	};

	return (

		<React.Fragment>
		<div className="App">
			
			<ProductContext.Provider value={{ products, addItem}}>
				<CartContext.Provider value={{ cart }}>
					<Navigation cart={cart} />

					{/* Routes */}
					<Routes>
					<Route exact path="/">
						
						<Products />
						
					</Route>

					<Route path="/cart">
						<ShoppingCart cart={cart} />
					</Route>
					</Routes>
				
				</CartContext.Provider>
			</ProductContext.Provider>
	
		</div>
		</React.Fragment>
	);
}

export default App;
