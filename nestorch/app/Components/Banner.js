import Image from 'next/image'
import React from 'react'

const Banner = ({ data }) => {
    const { img } = data || { img: '/Images/banner1.jpg'}
    return (
        <div className='w-full h-[400px] relative'>
            <Image src={img} layout='fill' objectFit='cover' alt='banner' />
            <div className='absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center'>
                <h2 className='text-4xl font-bold text-white'>Hola, soy <span className='text-blue-500'>Jorge</span></h2>
            </div>
        </div>
    )
}

export default Banner