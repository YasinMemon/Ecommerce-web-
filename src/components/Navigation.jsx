import React from 'react'
import { fiterProducts } from '../redux/slides/ProductSlice' 
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import Filtered from './Filtered';

function Navigation() {
    const dispatch = useDispatch();
    const btns = [
        "Hoodies",
        "Dresses",
        "Suits",
        "Shoes",
        "T-Shirts",
        "Jeans",
        "Jackets",
        "Bags",
    ]
    return <>
        <div className="main flex flex-col flex-wrap min-w-[screen] items-center justify-center">
        <div className="filters min-w-screen flex-wrap p-3 gap-3 mb-5 flex">
            {btns.map((btn) => {
                return <div key={btn} className='flex flex-wrap min-w-screen'>
                <Link to={'/filtered-products/' + btn}>
                <button
                className='md:text-xl ring-1 px-1 mx-1 text-xs md:px-4 font-bold py-1 hover:bg-gray-300 duration-300 ease-in-out md:mx-3 ring-black rounded-md'
                onClick={() => dispatch(fiterProducts(btn))}
                >
                    {btn}
                </button>
                </Link>
                </div>
            })}
        </div>
        <div className="sales bg-green-400 text-4xl my-4 px-24 rounded-lg py-[0.10rem]">
            <h3>Sales Up to 50%</h3>
        </div>
        <div className="clothes w-[50%] mb-6">
            <img
                className='h-full my-12 w-full rounded-xl shadow-xl shadow-gray-800'
                src="clothes.jpg" />
        </div>
                </div>
    </>
}

export default Navigation
