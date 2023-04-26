import React from 'react';
import './App.css';

const Product = ({product}) => {
  return (
    <div className='col-md-3 col-11 mb-4 text-center mx-3 p-3 bg-secondary text-light shadow rounded'>
      <img src={product.images[0]} className="pimg" alt={product.title} />
      <h6 className='mt-3'>{product.title}</h6>
      <h4>Rs.{product.price}</h4>
    </div>
  )
}

export default Product;
