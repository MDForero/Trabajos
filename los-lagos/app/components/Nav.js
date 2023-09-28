'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { contacto } from '../data/data'


const Nav = ({ nav }) => {
    const [fixed, setFixed] = useState(false)
    const [show, setShow] = useState(false)
    const path = usePathname()

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

    return (<>
        <nav className={'w-full  h-14 md:h-fit ' + (fixed ? 'fixed top-0 right-0 bg-blue-lagos z-50' : 'absolute top-0 right-0  z-50')}>
            <div className='relative mx-auto lg:w-fit w-full '>
                <ul className='hidden lg:flex py-4 z-50 gap-8 '>
                    {nav.slice(0, 3).map((item, index) => {
                        return (
                            <li key={index} className={(fixed ? 'inline-block px-6 py-3  font-bold text-center uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-blue-lagos to-green-lagos leading-pro  ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-110 hover:rotate-2 hover:bg-pink-700 hover:text-white hover:shadow-lg active:opacity-85 ' : 'inline-block px-6 py-3 font-bold text-center text-white uppercase align-middle ') + (path.slice(0, -1) === item.href ? "text-white" : "text-gray-600")}>
                                <Link href={item.href}>{item.text}</Link>
                            </li>
                        )
                    })}
                    <li className={' rounded-full flex justify-center items-center mx-auto mt-2 w-44 ' + (fixed ? '' : 'bg-blue-lagos')}>
                        <Image src='/IdentificadorHorizontal.png' width={150} height={0} className='w-44' />
                    </li>
                    {nav.slice(3).map((item, index) => {
                        return (
                            <li key={index} className={(fixed ? 'inline-block px-6 py-3  font-bold text-center uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-blue-lagos to-green-lagos leading-pro ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-110 hover:rotate-2 hover:bg-pink-700 hover:text-white hover:shadow-lg active:opacity-85 ' : 'inline-block px-6 py-3 font-bold text-center text-white uppercase align-middle ') + (path.slice(0, -1) === item.href ? "text-white" : "text-gray-600")}>
                                <Link href={item.href}>{item.text}</Link>
                            </li>
                        )
                    })}
                </ul>
                <div className={show ? 'fixed top-0 right-0 bottom-0 left-0 bg-gray-lagos flex flex-col pt-14 items-center justify-center gap-4' : 'hidden '}>
                    {nav.map((item, index) => {
                        return (
                            <Link key={index} className='inline-block px-6 py-3 w-3/5 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl  from-sky-400 to-sky-800 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md hover:scale-110 hover:rotate-2 hover:bg-lime-600 hover:text-sky-200 hover:shadow-lg active:opacity-85 ' onClick={() => {
                                setShow(!show); document.getElementById('checkbox').checked = false
                            }} href={item.href}>{item.text}</Link>
                        )
                    })}
                </div>
                <div className={`lg:hidden  flex jus`}>
                    <input onClick={() => setShow(!show)} className='' type="checkbox" id="checkbox" />
                    <label for="checkbox" className="fixed top-2 toggle  ">
                        <div className={`bars ${fixed ? 'bg-white' : 'bg-blue-lagos'}`} id="bar1"></div>
                        <div className={`bars ${fixed ? 'bg-gray-lagos' : 'bg-blue-lagos'}`} id="bar2"></div>
                        <div className={`bars ${fixed ? 'bg-white' : 'bg-blue-lagos'}`} id="bar3"></div>
                    </label>
                    <div className={' rounded-full flex justify-center items-center mx-auto mt-2  ' + (fixed ? '' : 'bg-white')}>
                        <Image src='/IdentificadorHorizontal.png' width={150} height={150} />
                    </div>
                </div>
            </div>
        </nav>
        <div className={fixed ? 'fixed lg:top-1/2 bottom-0 z-50 lg:right-4 right-2':'hidden'}>
            <div className="card">
              <a className="social-link4" href={`https://wa.me/${contacto.telefono}`}>
                <svg viewBox="0 0 16 16" className="bi bi-whatsapp" fill="currentColor" height="200" width="200" xmlns="http://www.w3.org/2000/svg" > <path fill="black" d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path> </svg>
              </a>
            </div>
          </div>
    </>
    )
}

export default Nav