
'use client'
import { Search } from 'lucide-react'
import React, { ReactNode, useState } from 'react'
import clsx from 'clsx'

interface TypeNavLinks {
    id: string,
    href: string,
    label?: string,
    icon?: ReactNode
}

const navLinks: TypeNavLinks[] = [
    { id: "1", label: "Element", href: "#1" },
    { id: "2", label: "News", href: "#2" },
    { id: "3", label: "FAQ", href: "#3" },
    { id: "4", label: "About", href: "#4" },
    { id: "5", label: "Contact", href: "#5" },
    { id: "6", href: "/", icon: <Search /> }
]

const styleBase = ' z-10 pb-2 border-b-2 border-transparent cursor-pointer '

const styleCondition = (items: TypeNavLinks, navActive: string | undefined) => (
    clsx(
        items.label !== undefined && items.id !== navActive && "hover:border-blue-600",
        items.id === navActive && items.label !== undefined &&"border-white"
    )
)

const NavBar4ParaScroll = () => {
    const [active,setActive]= useState<string|undefined>("1")
    return (
        <nav className='absolute w-screen text-white h-[80px] 
        px-4
    border-2 border-white 
    flex justify-between items-center

    '>
        <div className='text-white text-2xl'>Logo</div>
            <ul className='flex gap-4'>
                {navLinks.map((items) => (
                    <li
                    className={clsx(styleBase,styleCondition(items,active))}
                    key={items.id}
                    onClick={() => setActive(items.id)}>
                      <a key={items.id} href={items.href}>  {items.label ?? items.icon}</a>
                        </li>
                )

                )}

            </ul>
        </nav>
    )
}

export default NavBar4ParaScroll