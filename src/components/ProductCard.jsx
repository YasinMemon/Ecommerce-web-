import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { singleProduct } from '../redux/slides/ProductSlice';

function ProductCard({ color,
    gender,
    id,
    img,
    name,
    price,
    size,
    text,
    // type
}) {
    const single = useSelector((state) => state.producs.singleItem)
    const dispatch = useDispatch();
    const {type} = useParams();
    return (
        <div
        onClick={() => dispatch(singleProduct(id))}
        >
            <Link to={`/single-product/${type}/`+id}>
            <div className="card ring-1 ring-black rounded-xl">
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
                <div className="price p-3 font-bold text-xl">
                    {price}
                </div>
            </div>
            </Link>
        </div>
    )
}

export default ProductCard
