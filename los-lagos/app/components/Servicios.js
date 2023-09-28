import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Servicios = async ({ data }) => {
    const { title, gallery, text } = data
    return (
        <Link className='relative w-[360px] h-[480px] rounded-2xl overflow-hidden first-of-type:div:hover:hidden services' href={`${data.id}`}>
            <Image src={gallery[0].img} alt={gallery[0].alt} layout='fill' objectFit='cover' className='object-cover w-full h-full' />
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b to-gray-lagos/90 from-transparent flex flex-col justify-end  items-center pb-10' >
                <p className='text-white font-bold text-3xl text-center first-letter:uppercase'>{title.toLocaleLowerCase()}</p>
                <p className='text-white text-center text-xl'>{text}</p>
            </div>
        </Link>
    )
}

export default Servicios