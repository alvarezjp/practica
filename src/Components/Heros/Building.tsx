import Image from 'next/image'
import React from 'react'

const Building = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Logo */}
            <div
                className="absolute inset-0 bg-[url('/building.jpg')] bg-cover bg-center filter grayscale brightness-50"
            ></div>

            <div className='absolute inset-0 w-[200px] h-[80px] bg-black flex items-end justify-end pb-4 pr-6'>      
                    <h1 className='text-white text-2xl'>Architect</h1>   
            </div>

            <nav className=' absolute right-0 max-w-full h-[80px] flex items-center mr-8'> 
                <ul className='text-white text-lg flex gap-8 overflow-hidden'>
                    <li className='border-b-2 border-white h-[40px] '>Home</li>
                    <li>Element</li>
                    <li>News</li>
                    <li>FAQ</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Lupa icon</li>
                </ul>
            </nav>
            

            <div className="absolute inset-0 flex flex-col justify-center items-center text-white ">
                <p className="text-2xl">We are the best team of</p>
                <h1 className="text-8xl font-bold">Architect</h1>
            </div>

        
        </div>
    )
}

export default Building