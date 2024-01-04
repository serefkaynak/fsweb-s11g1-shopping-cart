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
      <div className="p-2 mb-8">
        <h1 className="mb-8 font-extrabold text-2xl ">{product.title}</h1>
        <div className="flex justify-between items-center stroke-emerald-400">

          <div className="ml-4 font-semibold text-gray-600 ">${product.price}</div>
          <div className="flex items-end font-semibold ">
          <button className={cart.includes(product) ? "text-red-500 bg-red-50 hover:bg-red-100 p-2 m-2 rounded-xl " : "hidden p-2 m-2"}
              disabled={cart.includes(product) ? false : true}
              onClick={() => removeItem(product.id)}
            >
              Delete
          </button>

          <button className="p-2 m-2 box-border bg-green-200 hover:bg-green-300 text-green-800 rounded-xl "
              onClick={() => 
                {cart.includes(product) ? removeItem(product.id) : addItem(product)}}>
                {cart.includes(product) ? "Added" : "Add to cart"}
          </button></div>
        </div>
      </div>
    </ScProduct>
  );
};

export default Product;
