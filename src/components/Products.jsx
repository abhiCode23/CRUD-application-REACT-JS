import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AllProducts from './AllProducts';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate(`/createproduct`);
  };

  const [products, setProducts] = useState(null);
  const API = `https://api.escuelajs.co/api/v1/products`;

  const getProducts = async () => {
    try {
      const res = await axios.get(API);
      setProducts(res.data);
      console.log("products are ", products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (products) {
      console.log("Updated products are ", products);
    }
  }, [products]);

  return (
    <>
      <div className='flex justify-center items-center mb-4'>
        <button className='bg-green-600 px-4 py-2 rounded text-white font-semibold shadow-md hover:bg-green-500 transition duration-300'
          onClick={handleCreate}
        >
          Add a Product
        </button>
      </div>
      <div className='flex flex-col w-full gap-4'>
        {products ? (
          products.map((product, key) => (
            <AllProducts products={product} key={key} />
          ))
        ) : (
          <p className="text-center text-gray-600">Loading products...</p>
        )}
      </div>
    </>
  );
};

export default Products;
