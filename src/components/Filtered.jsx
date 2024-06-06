import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { fiterProducts } from '../redux/slides/ProductSlice';
import ProductCard from './ProductCard';

function Filtered() {
    const products = useSelector((state) => state.producs.fiteredProducts);
    // console.log(products);
    const { type } = useParams();
  return (
    <div>
        <h1>{type}</h1>
      <main>
        <div className="cards grid sm:grid-cols-1 md:grid-cols-4 px-12 justify-items-center py-8 gap-8">
            {products?.map((item, idx) => {
                return <ProductCard 
                key={idx}
                id = {item.id}
                img = {item.img}
                name = {item.name}
                price = {item.price}
                size = {item.size}
                text = {item.text}
                type = {item.type}
                />    
            })}
        </div>
      </main>
    </div>
  )
}

export default Filtered
