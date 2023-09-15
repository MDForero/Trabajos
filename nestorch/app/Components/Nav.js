'use client'
import React, { useEffect, useState } from 'react'

const Nav = ({ data }) => {
    const [active, setActive] = useState('inicio')
    const [show, setShow] = useState(false)

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setShow(true)
        } else {
            setShow(false)
        }
    }


    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        const elements = document.querySelectorAll('section')
        for (let element of elements) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('id')
                        const link = document.querySelector(`.nav-link[href="#${id}"]`)
                        setActive(id)
                    } 
                })
            }, { threshold: 0.5 })
            observer.observe(element)
        }
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={(show?'fixed w-full z-50  ':'relative  py-4')+'bg-gradient-to-tr from-blue-300 to-blue-600'}> 
            <ul className='hidden lg:flex max-w-screen-2xl justify-center items-center gap-8 mx-auto  h-14'>
                {data.map((item, index) => <li key={index}><a href={item.href} className={(active === item.href.slice(1) ? 'nav-link-active':'nav-link')+' capitalize'}>{item.label}</a></li>)}
            </ul>
            
            <ul className='block mx-auto lg:hidden max-w-screen-2xl justify-center gap-8 w-fit'>
                {data.map((item, index) => <li key={index}><a href={item.href} className={active === item.href.slice(1) ? 'nav-link-active' : 'hidden'}>{item.label}</a></li>)}
            </ul>
            
        </nav>
    )
}

export default Nav