'use client'
import Image from 'next/image'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Banner = ({fondo}) => {
    const pathName = usePathname()
    return (
        <div className='relative -z-50  mx-auto w-full h-[700px] lg:h-[600px]  '>
            <Image src={fondo ? fondo :'/Images/fondos/_DSC9833.jpg'} width={0} height={0} className='object-cover w-full h-full ' />
            <div className='z-50 text-white bg-slate-950/40 absolute top-0 bottom-0 right-0 left-0 flex flex-col gap-3 justify-center items-center'>
                <Image src='/logo-dark.png' width={0} height={0} className='w-52 h-52'/>
                {pathName!=='/'?<p className="text-white lg:text-5xl text-2xl sm:text-3xl font-bold capitalize "><span>{pathName.slice(1,-1)}</span> | <Link href="/">Los Lagos</Link></p>:null}
            </div>
    </div>
    )
}

export default Banner