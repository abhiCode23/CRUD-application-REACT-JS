import axios from 'axios';
import React, { useState } from 'react';

const CreateProduct = () => {
  const API = "https://api.escuelajs.co/api/v1/products/";
  const [productDetail, setProductDetail] = useState({
    title: '',
    price: '',
    description: '',
    categoryId: '',
    images: ["https://placeimg.com/640/480/any"]
  });

  const createProduct = async () => {
    try {
      await axios.post(API, productDetail);
      setProductDetail({
        title: '',
        price: '',
        description: '',
        categoryId: '',
        images: ['https://placeimg.com/640/480/any'],
      });
      alert('Product created successfully!');
    } catch (error) {
      console.error('Error creating product:', error);
      alert('There was an error creating the product. Please try again.');
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-4 md:p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Add a Product</h2>
      
      <form className="space-y-4">
        <div>
          <label className="block font-medium mb-2">Enter item Name</label>
          <input
            type="text"
            value={productDetail.title}
            onChange={(e) => setProductDetail({ ...productDetail, title: e.target.value })}
            placeholder="Item name"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">Price</label>
          <input
            type='number'
            value={productDetail.price}
            onChange={(e) => setProductDetail({ ...productDetail, price: e.target.value })}
            placeholder='Item price'
            required
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500'
          />
        </div>

        <div>
          <label className="block font-medium mb-2">Description</label>
          <input
            type="text"
            value={productDetail.description}
            onChange={(e) => setProductDetail({ ...productDetail, description: e.target.value })}
            placeholder="About item"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">Category ID</label>
          <input
            type="number"
            value={productDetail.categoryId}
            onChange={(e) => setProductDetail({ ...productDetail, categoryId: e.target.value })}
            placeholder="Category ID"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
          />
        </div>

        <div className="text-center">
          <button
            type="button"
            onClick={createProduct}
            className="w-full py-2 px-4 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-400"
          >
            Create Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateProduct;
