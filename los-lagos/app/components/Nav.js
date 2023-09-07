'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


const Nav = ({nav}) => {
    const [fixed, setFixed] = useState('block')
    const handleScroll = () => {
        if (window.scrollY > 20) {
            setFixed('fixed top-0 right-0')
        } else {
            setFixed('block')
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <nav className='w-full '>
            <div className='mx-auto w-fit'>
                <ul className='flex py-4'>
                    {nav.map((item, index) => {
                        return (
                            <li key={index} className='inline-block px-6 py-3 mr-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-110 hover:rotate-2 hover:bg-pink-700 hover:text-pink-200 hover:shadow-lg active:opacity-85 '>
                                <Link href={item.href}>{item.text}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Nav