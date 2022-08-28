import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Product from './components/Product';
import Item from './components/Item';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <div className='app-layout'>
        <div className='app-container'>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/item/:id" element={<Item />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
