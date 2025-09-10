'use client'
import { Search } from 'lucide-react'
import React, { useState } from 'react'

interface TypeNavItems {
    label?: string,
    href: string,
    icon?: React.ReactNode
}

const navItems: TypeNavItems[] = [
    { label: "Element", href: "/" },
    { label: "News", href: "/" },
    { label: "FAQ", href: "/" },
    { label: "About", href: "/" },
    { label: "Contact", href: "/" },
    { href: "/", icon: <Search /> }
]
const Navbars2 = () => {
    const [activeNav, setActiveNav] = useState<string | undefined>("Element");

    return (
        <nav className='flex justify-between items-center
    border-2 border-blue-500 h-[80px]
    px-4'>
            <div className='text-white'>Logo</div>
            <ul className='flex gap-4'>
                {navItems.map((item, index) => (
                    <li key={index} className={
                        `${item.label === undefined
                            ? 'text-white'
                            : `text-white pb-2 border-b-2 border-transparent  transition cursor-pointer
                        ${activeNav === item.label
                                ? 'border-b-2 border-white'
                                : 'hover:border-blue-500'
                            }`
                        }`
                    }
                        onClick={() => setActiveNav(item.label)}>
                        {item.label ?? item.icon}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbars2