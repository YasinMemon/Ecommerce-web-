import React from 'react'
import { addToCart } from '../redux/slides/CartSlice';
import { useDispatch } from 'react-redux'

function ItemCards({ 
  id,
  img,
  name,
  text,
  size,
  price,
  color,
}) {
  const dispatch = useDispatch();
  const defaultSize = size?.[0];
  const defaultColor = color?.[0];

  return (
    <div>
      <div className="main w-72 mx-6 ring-1 ring-black rounded-xl">
        <div className="productIMG">
          <img
            className='shadow-xl shadow-blue-300 rounded-t-xl ring-1 ring-black h-[44vh] w-full'
            src={img} alt={name} />
        </div>
        <div className="product_name text-center p-4">
          <h1 className="text-2xl font-bold text-black">{name}</h1>
        </div>
        <div className="text p-2 text-center text-sm">
          {text}
        </div>
        <div className="flex items-center">
          <div className="price p-3 font-bold text-xl">
            ₹{price}
          </div>
          <div className="flex gap-2 justify-end items-center mx-1 w-full">
            <h4 className="text-lg font-bold">Color: </h4>
            {/* {color?.map((col, idx) => ( */}
              <div className="color w-5 h-5 rounded-full" style={{ backgroundColor: defaultColor }}></div>
            {/* ))} */}
          </div>
        </div>
        <div className="add">
          <button className='bg-black w-full rounded-b-xl py-4 font-bold uppercase text-xl text-orange-900'
            onClick={() => dispatch(addToCart({
              id,
              img,
              text,
              amount: 1,
              price,
              totalPrice: price,
              name,
              size: defaultSize,
              color: defaultColor,
            }))}
          >Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ItemCards
