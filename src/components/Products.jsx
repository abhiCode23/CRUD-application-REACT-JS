import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import AllProducts from './AllProducts'

import {useNavigate } from 'react-router-dom';

const Products = () => {
  
  const navigate = useNavigate();
  const handleCreate = () => {
    navigate(`/createproduct`);
  };
  const [products,setProducts] = useState(null)
  const API =`https://api.escuelajs.co/api/v1/products`

  const getProducts = async ()=>{
    try {
      const res= await axios.get(API)
     
      setProducts(res.data)
      console.log("products are ",products);
      
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getProducts()
  },[])
  useEffect(() => {
    if (products) {
      console.log("Updated products are ", products);
    }
  }, [products]);
  return (
    <>
    <div className='flex justify-center items-center'>
      <button className='bg-green-600 px-1 py-2 m-2'
      onClick={handleCreate}
      >Add a product</button>
    </div>
    <div className=' w-full gap-4 flex flex-col'>
     {products ? (
        products.map((product, key) => (
          <AllProducts products={product} key={key} />
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </div>
    </>
  )
}

export default Products
