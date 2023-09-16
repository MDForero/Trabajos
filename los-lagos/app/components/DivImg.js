import Image from 'next/image'
import React from 'react'

const DivImg = ({ data }) => {
    return (
        <div className='h-[450px] relative w-full -z-10'>
            <Image src={data? data.img : '/Images/_DSC9820.jpg'} width={0} height={0} className='w-full h-full object-cover' layout='fill' objectFit='cover' />
            <div className='absolute top-0 bottom-0 right-0 left-0 bg-gray-300/30'></div>
        </div>
    )
}

export default DivImg