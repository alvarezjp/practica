'use client'

import { Search } from 'lucide-react';
const Navbar1 = () => {
  
  
  return (
    <nav className='border-2 border-red-600 h-[80px] flex justify-between items-center px-4' >
      <div className='text-white'>Logo</div>
      <ul className='text-white flex gap-4'>
        <li className='nav-link'>Element</li>
        <li className='nav-link'>News</li>
        <li className='nav-link'>FAQ</li>
        <li className='nav-link'>About</li>
        <li className='nav-link'>Contact</li>
        <li className='nav-link'><Search className=''/></li>
      </ul>
    </nav>
  )
}

export default Navbar1