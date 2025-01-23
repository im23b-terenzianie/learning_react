
import './App.css';
import ProductList from './components/ProductList';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Productdetails from "./pages/Productdetails";
import Search from "./pages/Search";
import React from "react";
import ThemeContext from "./context/ThemeContext";
function App() {
  const [theme, setTheme] = React.useState('light');

  return (
      <ThemeContext.Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/products/:id" element={<Productdetails/>}/>
          <Route path="/search" element={<Search/>}/>
        </Routes>
      </BrowserRouter>
      </ThemeContext.Provider>
  );
}

export default App;
