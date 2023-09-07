'use client'
import Image from 'next/image'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Banner = ({fondo}) => {
    const pathName = usePathname()
    return (
        <div className='relative -z-50  mx-auto w-full h-[400px] lg:h-[600px]  '>
            <Image src={fondo ? fondo :'/Images/fondos/_DSC9833.jpg'} width={0} height={0} className='object-cover w-full h-full ' />
            <div className='z-50 text-white bg-slate-950/40 absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-center items-center'>
                {pathName!=='/'?<div className='flex capitalize gap-4'><p>{pathName.slice(1,-1)}</p>|<Link href="/">Los Lagos</Link></div>:null}
            </div>
    </div>
    )
}

export default Banner