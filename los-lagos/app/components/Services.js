import Image from 'next/image'
import React from 'react'

const Services = ({data}) => {
    return (
        <div class="servicios">
            <Image src={data.svg} width={0} height={0} className='object-cover w-full h-full ' />   
            <div class="textBox">
                <p class="text head">{data.title}</p>
                <span>{data.description}</span>
                <p class="text price">1.654,34€</p>
            </div>
        </div>
    )
}

export default Services