'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { featured } from '../data/data'

const Services = () => {
    const [plan, setPlan] = useState('Platinum')
    const planes = ['Platinum', 'Gold', 'Silver', 'Bronze']
    useEffect(() => {
        let i = 0
        setInterval(() => {
            i++
            setPlan(planes[i % 4])
            document.getElementById('plan').classList.add('animate-typing')
        }, 2000)
    }, [])
    return (
        <div className="">
            <h2 className='text-3xl font-bold text-center w-max mx-auto flex'>Planes <p id='plan' className='block pl-2  overflow-hidden whitespace-nowrap border-r-4 border-r-gray-400 pr-5  text-black font-bold'>{plan }</p></h2>
            
                
            
            <p className='text-center'>Disfruta de cada una de nuestras </p>
            <div className='flex flex-wrap gap-8 justify-center items-center max-w-7xl w-full p-4 mx-auto'>
                {featured.map((item, index) => <div key={index} className="servicios w-32 h-32 lg:w-44 lg:h-64">
                    <Image src={item.img} width={100} height={100} className='object-cover img ' />
                    <div className="textBox bg-gray-950/80 h-full rounded-2xl text-center w-full p-2">
                        <p className="text head">{item.title}</p>
                        <span>{item.text}</span>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Services