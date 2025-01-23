
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Productdetails from "./pages/Productdetails";
import Search from "./pages/Search";
import React from "react";
import ThemeContext from "./context/Theme";
import CartContext from "./context/Cart";
import Cart from "./pages/Cart";

function App() {
  const [theme, setTheme] = React.useState('light');
  const [cart, setCart] = React.useState([]);

  return (
      <ThemeContext.Provider value={[theme, setTheme]}>
        <CartContext.Provider value={[cart, setCart]}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/products" element={<Products/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/products/:id" element={<Productdetails/>}/>
              <Route path="/search" element={<Search/>}/>
              <Route path="/cart" element={<Cart/>}/>
            </Routes>
          </BrowserRouter>
        </CartContext.Provider>
      </ThemeContext.Provider>
  );
}

export default App;
