import React, { useState } from "react";
import { Route } from "react-router-dom";
import { data } from "./data";

// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";


function App() {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {

  const selected = cart.includes(item);
  selected ? setCart(cart.filter((item2) => cart.item !== item2)):
  setCart([...cart, item]);
    
    /*
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  */
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  }

  return (
    <ProductContext.Provider value={{ products, addItem, removeItem }}>
      <CartContext.Provider value={{ cart, setCart }} >
    <div className="App">
      <Navigation cart={cart} />

      {/* Routelar */}
      <main className="content">
        <Route exact path="/">
          <Products/>
        </Route>

        <Route path="/cart">
          <ShoppingCart cart={cart} />
        </Route>
      </main>
    </div>
    </CartContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;
