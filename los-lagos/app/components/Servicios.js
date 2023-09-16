import Image from 'next/image'
import React from 'react'

const Servicios = ({ data }) => {
    const { img, title, text } = data || { img: '/Images/_DSC1754.jpg', title: 'jhon doe', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.' }
    return (
        <div className='relative w-[360px] h-[480px] rounded-2xl overflow-hidden first-of-type:div:hover:hidden services'>
            <Image src={img} layout='fill' objectFit='cover' className='object-cover w-full h-full' />
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b to-black/80 from-white/30 flex flex-col justify-end  items-center pb-10' >
                <p className='text-white font-bold text-5xl text-center '>{title}</p>
                <p className='text-white text-center text-xl'>{text}</p>
            </div>
        </div>
    )
}

export default Servicios