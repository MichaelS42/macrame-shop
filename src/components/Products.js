import React from 'react';
import { useContext } from 'react';
import { ProductContext } from './contexts/ProductContext';
// COMPONENTS
import Product from './Product';

const Products = () => {
    const { products, addItem } = useContext(ProductContext);
    return (
        <div className="products-containter">
            {products.map(product => (
                <Product
                    key={product.id}
                    product={product}
                    addItem={addItem}
            />
            ))}
        </div>
    )
};

export default Products;