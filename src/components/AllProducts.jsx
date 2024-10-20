  import axios from 'axios';
  import React from 'react';
  import { useNavigate } from 'react-router-dom';

  const AllProducts = ({ products }) => {
    const { category, price, title, id } = products;
    const { image, name } = category;
    const navigate = useNavigate();

    const handleViewClick = () => {
      navigate(`/products/${id}`);
    };

    const handleDelete = async () => {
      try {
        await axios.delete(`https://api.escuelajs.co/api/v1/products/${id}`);
        alert('Product deleted successfully!');
      } catch (error) {
        console.log(error);
        alert('Failed to delete the product.');
      }
    };

    const handleUpdate = () => {
      navigate(`/update/${id}`);
    };

    return (
      <div className="flex flex-col md:flex-row  justify-between items-center border-b p-4">
        {/* Product Image */}
        <img
          src={image}
          alt={name}
          className="w-16 h-16 object-cover rounded-full"
        />
        <p className="text-base  w-1/4 text-center">{title}</p>
        <p className="w-1/4 text-center">${price}</p>
        <p className="w-1/4 text-center">{name}</p>
        <div className="flex flex-col md:flex-row space-x-2 my-2">
          <button
            className="bg-yellow-400 px-2 rounded hover:bg-yellow-500 transition duration-300"
            onClick={handleViewClick}
          >
            View
          </button>
          <button
            className="bg-green-400 px-4 py-2 rounded hover:bg-green-500 transition duration-300"
            onClick={handleUpdate}
          >
            Update
          </button>
          <button
            className="bg-red-400 px-4 py-2 rounded hover:bg-red-500 transition duration-300"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    );
  };

  export default AllProducts;
