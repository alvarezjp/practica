import Image from 'next/image'
import React from 'react'

const Navbar1 = () => {
  return (
    <nav className='border-2 border-red-600 h-[80px] flex justify-between items-center pa' >
      <div className='text-white'>Logo</div>
      <ul className='text-white flex gap-4'>
        <li>Element</li>
        <li>News</li>
        <li>FAQ</li>
        <li>About</li>
        <li>Contact</li>
        <li>Lupa icon</li>
      </ul>
    </nav>
  )
}

export default Navbar1