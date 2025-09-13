
import React from 'react'


const colors: Record<Color,string>={
    red:"border-red-500",
    blue:"border-blue-500",
    yellow:"border-yellow-500",
    green:"border-green-500",
    purple:"border-purple-500",
}

interface PropsSections {
    name: string,
    id: string,
    typeColor: Color
}

export type Color = "red"|"blue"|"yellow"|"green"|"purple"

const SectionPage = ({ name, id, typeColor }: PropsSections) => {
    return (
        <section id={id} className={`relative h-screen w-screen border-1 ${colors[typeColor]} text-white text-8xl 
        flex justify-center items-center`}>
            {name}
        </section>
    )
}

export default SectionPage