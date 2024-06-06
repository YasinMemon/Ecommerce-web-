import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/slides/CartSlice';

function SinglePro() {
    const product = useSelector((state) => state.producs.singleItem);
    const psize = product[0]?.size ? product[0].size[0] : "";
    const prclr = product[0]?.color ? product[0].color[0] : "";
    const [Size, setSize] = useState(psize);
    const [Color, setColor] = useState(prclr);
    const [showAlert, setShowAlert] = useState(false);
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart({
            id: product[0].id,
            price: product[0].price,
            size: Size,
            amount: 1,
            img: product[0].img,
            totalPrice: product[0].price,
            name: product[0].name,
            text: product[0].text,
            color: Color,
        }));
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
    };

    return (
        <div className=''>
            <div className="flex">
                {product.map((item, index) => (
                    <main key={index} className='w-full h-[100vh]'>
                        <div className="flex">
                            <section className="image w-[30%] ml-[10%]">
                                <img
                                    className='w-full my-5 h-[88%] rounded-lg'
                                    src={item.img} alt={item.name} />
                            </section>
                            <section className='my-auto mx-auto w-[45%]'>
                                <div className="info mb-6">
                                    <h1 className='text-left text-2xl font-bold'>{item.name}</h1>
                                    <p className='inset-1/2'>{item.text}</p>
                                </div>
                                <div className="price">
                                    <h2 className='text-xl font-bold mb-6'>₹{item.price}</h2>
                                </div>
                                <section className="selections">
                                    {item.size && (
                                        <div>
                                            <label
                                                htmlFor="size"
                                                className="block mb-2 text-sm font-medium "
                                            > Pick a size
                                            </label>
                                            <select
                                                name="size"
                                                onChange={(e) => setSize(e.target.value)}
                                                value={Size}
                                                className='ring-1 ring-black w-[80%]'
                                                id="size">
                                                {item.size.map((size, idx) => (
                                                    <option
                                                        key={idx}
                                                        value={size}
                                                        className=""
                                                    >{size}</option>
                                                ))}
                                            </select>
                                        </div>
                                    )}
                                    {item.color && (
                                        <div>
                                            <label
                                                htmlFor="color"
                                                className="block mb-2 text-sm font-medium "
                                            > Pick a Color
                                            </label>
                                            <select
                                                name="color"
                                                value={Color}
                                                onChange={(e) => setColor(e.target.value)}
                                                className='ring-1 ring-black w-[80%]'
                                                id="color">
                                                {item.color.map((color, idx) => (
                                                    <option
                                                        key={idx}
                                                        value={color}
                                                        className=""
                                                    >{color}</option>
                                                ))}
                                            </select>
                                        </div>
                                    )}
                                </section>
                                <button className="mt-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                                    onClick={handleAddToCart}
                                >
                                    Add To Cart
                                </button>
                            </section>
                        </div>
                        {showAlert && (
                            <div className="alert alert-success absolute top-4 right-4 bg-green-500 text-white p-3 rounded">
                                Product added to cart!
                            </div>
                        )}
                    </main>
                ))}
            </div>
        </div>
    )
}

export default SinglePro;
