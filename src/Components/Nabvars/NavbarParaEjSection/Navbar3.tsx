'use client'

import { INSPECT_MAX_BYTES } from 'buffer'
import clsx from 'clsx'
import { Search } from 'lucide-react'
import React, { ReactNode, useState } from 'react'


interface TypeNavLinks {
    href: string,
    label?: string,
    icon?: ReactNode,
    id: string
}

const navLinks: TypeNavLinks[] = [
    { id: "1", label: "Element", href: "#1" },
    { id: "2", label: "News", href: "#segundo" },
    { id: "3", label: "FAQ", href: "#3" },
    { id: "4", label: "About", href: "#4" },
    { id: "6", href: "#6", icon: <Search /> }
]

const styleBase = ' z-10 pb-2 border-b-2 border-transparent cursor-pointer '

const styleCondition = (items: TypeNavLinks, navActive: string | undefined) => (
    clsx(
        items.label !== undefined && items.id !== navActive && "hover:border-blue-600",
        items.id === navActive && items.label !== undefined &&"border-white"
    )
)

const Navbar3 = () => {
    const [navActive, setNavActive] = useState<string | undefined>('1')
    return (
        <nav className='text-white border-2 border-white w-screen h-[80px]
        flex items-center justify-between px-4
        absolute inset-0 '>
            <div className='text-white text-5xl'> Logo</div>
            <ul className=' flex gap-4'>
                {navLinks.map((items) => (
                    
                    <li key={items.id}
                        className={clsx(styleCondition(items, navActive), styleBase)}
                        onClick={() => (setNavActive(items.id))}>
                       <a key={items.id} href={items.href}>  {items.label ?? items.icon}</a>
                    </li> 
                    
                ))}
            </ul>
        </nav>
    )
}

export default Navbar3