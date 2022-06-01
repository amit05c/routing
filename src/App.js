import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products'
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        {/* <Route path="/products/:shirt" element={<Product name={"shirt"} />} /> */}
        <Route path="/products/:id" element={<Product />} />
      </Routes>

    </div>
  );
}

export default App;
