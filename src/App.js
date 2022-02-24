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

			<h1> this is h1</h1>
			<ProductContext.Provider value={{products, addItem}}>
				<CartContext.Provider value ={{ cart}}>
					<Navigation cart={cart} />
					<ShoppingCart cart ={cart} />
					

					<Products />

				
				</CartContext.Provider>
				<Products />
			</ProductContext.Provider>

{/* 
			<Products />
			
			<ProductContext.Provider value={{ products, addItem}}>
				<CartContext.Provider value={{ cart }}>
					<Navigation cart={cart} />

					
					
					
						
						<Products />
						
				

					
						<ShoppingCart cart={cart} />
					
					
				
				</CartContext.Provider>
			</ProductContext.Provider>  */}
	
		</div>
		</React.Fragment>
	);
}

























// 	return (

// 		<React.Fragment>
// 		<div className="App">
			
// 			<ProductContext.Provider value={{ products, addItem}}>
// 				<CartContext.Provider value={{ cart }}>
// 					<Navigation cart={cart} />

// 					{/* Routes */}
// 					<Routes>
// 					<Route exact path="/">
						
// 						<Products />
						
// 					</Route>

// 					<Route path="/cart">
// 						<ShoppingCart cart={cart} />
// 					</Route>
// 					</Routes>
				
// 				</CartContext.Provider>
// 			</ProductContext.Provider>
	
// 		</div>
// 		</React.Fragment>
// 	);
// }

export default App;
