import React from "react";
import { ScProduct } from "./scParts";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { CartContext } from "../contexts/CartContext";


const Product = ({product}) => {
 const { addItem } = useContext(ProductContext)
 const { removeItem } = useContext(ProductContext)
 const { cart } = useContext(CartContext)

  return (
    <ScProduct>
      <img src={product.image} alt={`${product.title} book`} />
      <div className="details">
        <h1 className="title">{product.title}</h1>
        <div className="footer">
          <p className="price">${product.price}</p>

          <button onClick={() => 
            {cart.includes(product) ? removeItem(product.id) : addItem(product)}}>
            {cart.includes(product) ? "Added" : "Add to cart"}
          </button>

          <button onClick={() => removeItem(product.id)}>
            Delete
          </button>
        </div>
      </div>
    </ScProduct>
  );
};

export default Product;
