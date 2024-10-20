import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './components/Products'; // Importing Products from components folder
import SingleProduct from './pages/SingleProduct'; // Importing SingleProduct from pages folder
import UpdateProduct from './pages/UpdateProduct'; // Importing UpdateProduct from pages folder
import CreateProduct from './pages/CreateProduct';

const App = () => {
  return (
    <div className='p-2'>
    <Router>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/createproduct" element={<CreateProduct/>}/>
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/update/:id" element={<UpdateProduct />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
