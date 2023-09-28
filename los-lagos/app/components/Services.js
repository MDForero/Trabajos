'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { featured } from '../data/data'

const Services = () => {
    const [plan, setPlan] = useState('descanso')
    const planes = [' descanso', ' relax', ' confort', ' placer']
    useEffect(() => {
        let i = 0
        const element = document.getElementById('plan')
        if (element) {
            setInterval(() => {
                i++
                setPlan(planes[i % 4])
            }, 2000)
        }
    }, [])
    return (
        <div className="">
            <h2 className='text-3xl font-bold text-center w-fit mx-auto '>Estar en los lagos es <span id='plan' className=' overflow-hidden whitespace-nowrap  text-black font-bold'>{plan}</span></h2>



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