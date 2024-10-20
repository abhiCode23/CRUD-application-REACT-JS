import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API = `https://api.escuelajs.co/api/v1/products/${id}`;

  const getProductDetail = async () => {
    try {
      const res = await axios.get(API);
      setProduct(res.data);
      console.log(res.data); // Optional: Log the data for debugging
    } catch (error) {
      setError('Failed to fetch product details.'); // Set error state
      console.log(error);
    } finally {
      setLoading(false); // Set loading to false regardless of success or failure
    }
  };

  useEffect(() => {
    getProductDetail();
  }, [API]);

  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <p className='text-xl'>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <p className='text-red-600'>{error}</p>
      </div>
    );
  }

  const { category, price, title, images, description } = product || {};
  const { image, name } = category || {};

  return (
    <div className='w-full p-4 md:p-8 bg-gray-100'>
      <div className='w-full flex flex-col md:flex-row gap-6 bg-white p-6 rounded-lg shadow-lg'>
        <div className='w-full md:w-1/2'>
          <img
            src={image}
            alt={name}
            className='w-full h-auto object-contain rounded-lg shadow-md'
          />
        </div>
        <div className='w-full md:w-1/2 flex flex-wrap gap-4 justify-center items-center'>
          {images.map((item, key) => (
            <img
              key={key}
              src={item}
              alt={`Gallery image ${key + 1}`}
              className='w-32 h-32 md:w-48 md:h-48 object-contain rounded-lg shadow-md transition-transform duration-300 hover:scale-105'
            />
          ))}
        </div>
      </div>

      {/* Product Details */}
      <div className='mt-8'>
        <h1 className='text-3xl font-bold text-gray-800'>{title}</h1>
        <p className='text-xl text-gray-600 mt-2'>{name}</p>
        <p className='text-2xl font-semibold text-blue-600 mt-4'>${price}</p>
      </div>

      {/* Product Description */}
      <div className='mt-6'>
        <h2 className='text-2xl font-semibold text-gray-700'>Description</h2>
        <p className='text-gray-600 mt-4'>{description}</p>
      </div>
    </div>
  );
};

export default SingleProduct;
