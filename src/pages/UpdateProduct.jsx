import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const getProductDetails = async () => {
    try {
      const res = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, [id]);
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const updateProduct = async () => {
   
    console.log("ID is ", id);
    
    try {
      const res = await axios.put(`https://api.escuelajs.co/api/v1/products/${id}`,product);
      console.log("Updates Successfully");
      console.log(res.data);
    } catch (error) {
      console.log("Error is ",error);
      
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 bg-white shadow-md rounded-lg">
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        product && (
          <div>
            <h2 className="text-2xl font-semibold text-center mb-4">Update Product</h2>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="title">Item Name</label>
              <input
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                type='text'
                name='title'
                onChange={handleInputChange}
                value={product.title}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="price">Price</label>
              <input
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                type='number'
                name='price'
                onChange={handleInputChange}
                value={product.price}
              />
            </div>
            <button
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-300"
              onClick={updateProduct}
            >
              Update
            </button>
          </div>
        )
      )}
    </div>
  );
};

export default Update;
