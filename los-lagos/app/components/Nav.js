'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


const Nav = ({ nav }) => {
    const [fixed, setFixed] = useState(false)
    const [show, setShow] = useState(false)

    const handleScroll = () => {
        if (window.scrollY > 600) {
            setFixed(true)
        } else {
            setFixed(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <nav className={'w-full  h-14 md:h-fit ' + (fixed?'fixed top-0 right-0':'absolute top-0 right-0 ')}>
            <div className='relative mx-auto w-full md:w-fit'>
                <ul className='hidden lg:flex py-4 z-50'>
                    {nav.map((item, index) => {
                        return (
                            <li key={index} className={fixed?'inline-block px-6 py-3 mr-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-110 hover:rotate-2 hover:bg-pink-700 hover:text-pink-200 hover:shadow-lg active:opacity-85 ': 'inline-block px-6 py-3 font-bold text-center text-white uppercase align-middle '}>
                                <Link href={item.href}>{item.text}</Link>
                            </li>
                        )
                    })}
                </ul>
                <ul className={show ? 'fixed top-0 right-0 bottom-0 left-0 bg-gray-400 flex flex-col pt-14 items-center  gap-2' : 'hidden '}>
                    {nav.map((item, index) => {
                        return (
                            <li key={index} className='inline-block px-6 py-3 mr-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-110 hover:rotate-2 hover:bg-pink-700 hover:text-pink-200 hover:shadow-lg active:opacity-85 w-full'>
                                <Link onClick={() => {
                                    setShow(!show); document.getElementById('checkbox').checked = false
                                }} href={item.href}>{item.text}</Link>
                            </li>
                        )
                    })}
                </ul>
                <div className={`md:hidden  `}>
                    <input onClick={() => setShow(!show)} className='' type="checkbox" id="checkbox" />
                    <label for="checkbox" className=" top-2 toggle ">
                        <div className={`bars ${fixed?'bg-black':'bg-white'}`} id="bar1"></div>
                        <div className={`bars ${fixed?'bg-black':'bg-white'}`} id="bar2"></div>
                        <div className={`bars ${fixed?'bg-black':'bg-white'}`} id="bar3"></div>
                    </label>
                </div>
            </div>
        </nav>
    )
}

export default Nav