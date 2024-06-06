import React from 'react'
import { storeData } from '../assets/data'
import ItemCards from './ItemCards'

function TrendingProducts() {
    return (
        <div>
            <div className="heading my-4 mb-12">
                <h1 className='text-4xl font-bold text-red-900 text-center'>Trending Products...</h1>
            </div>
            <div className="productCards flex flex-wrap w-screen gap-12 justify-center items-center my-3">
                {storeData.slice(0, 20).map((item, index) => {
                    return <div className="" key={index}>
                        <ItemCards
                            img={item.img}
                            name={item.name}
                            text={item.text}
                            color={item.color}
                            size={item.size}
                            price={item.price}
                            id={item.id}
                            totalPrice={item.totalPrice}
                        />
                    </div>
                })}
            </div>
        </div>
    )
}

export default TrendingProducts
