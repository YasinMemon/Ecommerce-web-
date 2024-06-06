import React from 'react';
import {
    nextSlide,
    prevSlide,
    doteSlide
} from "../redux/slides/SliderSlice"
import { useSelector, useDispatch } from 'react-redux';
import { sliderData } from '../assets/data';

function Hero() {

    const sliderIdx = useSelector((state) => state.slider.value);
    const dispatch = useDispatch();
    // console.log(sliderIdx);

    return <>
        <main>
            <div>
                {sliderData.map((item) => {
                    return <div
                        key={item.id}
                        className={parseInt(item.id) === sliderIdx ? "flex opacity-100 duration-700 ease-in-out scale-100 min-w-[100vw] bg-red-900" : "flex opacity-0 duration-700 ease-in-out scale-95"}
                    >
                        <div className="images bg-red-900 relative">
                            {parseInt(item.id) === sliderIdx && (
                                <img
                                    className='h-[97vh] w-screen'
                                    src={item.img} alt='shoes' />
                            )}
                        </div>
                        <div className="absolute top-44 mx-auto inset-x-1/4">
                            <p className="text-white text-4xl font-inter font-bold tracking-normal leading-none">
                                {parseInt(item.id) === sliderIdx && item.text}
                            </p>
                        </div>
                    </div>
                })}
                <div className="dot flex absolute bottom-6 left-[45%]">
                    {sliderData.map((dot, idx) => (
                            <div className="mr-4 flex" key={dot.id}>
                                <div
                                    className={idx === sliderIdx ? "ring-1 ring-black bg-green-300 rounded-full p-2 cursor-pointer"
                                        : "ring-1 ring-black bg-white rounded-full p-2 cursor-pointer"}
                                    onClick={() => dispatch(doteSlide(idx))}
                                >
                                </div>
                            </div>
                    ))}
                </div>
            </div>
        </main>
        <div className="flex gap-3 p-4">
            <button
                className="absolute right-5 top-[50%] bg-blue-500 text-white p-2 rounded-md"
                onClick={(() => { dispatch(nextSlide(sliderIdx + 1)) })}
            >&gt;
            </button>
            <br />
            <button
                className="absolute left-5 top-[50%] bg-blue-500 text-white p-2 rounded-md"
                onClick={(() => { dispatch(prevSlide(sliderIdx - 1)) })}
            >&lt;</button>

        </div>
    </>
}

export default Hero;
