import React from 'react'

function Footer() {
    return (
        <div>
            <div className='flex justify-around mt-4 items-center bg-gray-300 h-24'>
                <div className="logo">
                    <h1 className='font-bold text-3xl text-red-900'>MEMON</h1>
                </div>
                <div>
                    <div className="flex flex-col">
                    <span>Copyright 2024</span>
                    <span className='font-serif text-xl'>All the rights reserved by @Yasin Memon</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
