'use client'
import Image from "next/image"
import { useEffect, useState } from "react"
import React from 'react'


const Carousel = ({ data }) => {
  const [img, setImg] = useState(data[0])
  const [count, setCount] = useState(0)
  const [fade, setFade] = useState('fade-in')

  useEffect(() => {
    let count = 0
    setInterval(() => {
      count++
      setCount(count)
      setImg(data[count % data.length])
      setTimeout(() => { setFade('fade-in') }, 100);
      setTimeout(() => { setFade('fade-out') }, 1900);
    }, 2000);
  }, [])

  return (
    <div className="relative w-full text-white">
      <button onClick={() => setImg(data[(count - 1) % data.length])} className="text-3xl absolute top-0 bottom-0 w-1/4">◄</button>
      <Image src={img} width={0} height={0} className={`w-full lg:h-[700px] object-cover ${fade}`} /> <button onClick={() => setImg(data[(count - 1) % data.length])} className="text-3xl absolute top-0 right-0 bottom-0 w-1/4">►</button>
    </div>
  )
}

export default Carousel