import Image from 'next/image'
import React from 'react'

const Services = ({data}) => {
    return (
        <div className="servicios w-32 h-32 lg:w-44 lg:h-64">
            <Image src={data.img} width={100} height={100}  className='object-cover img ' />   
            <div className="textBox bg-gray-950/80 h-full rounded-2xl text-center w-full p-2">
                <p className="text head">{data.title}</p>
                <span>{data.text}</span>
            </div>
        </div>
    )
}

export default Services