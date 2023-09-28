import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Room = ({room}) => {
    return (
        <div className='mx-auto max-w-7xl w-full '>
            <div className="bg-white  overflow-hidden  md:flex md:items-center">
                <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 ">
                    <h2 className="text-3xl font-extrabold text-black  sm:text-4xl">
                        <span className="block">
                            {room.category}
                        </span>
                    </h2>
                    <p className="text-md mt-4 text-gray-400">
                        {room.description}
                    </p>
                    <div className="lg:mt-0 lg:flex-shrink-0">
                        <div className="mt-12 inline-flex rounded-md shadow">
                            <Link href={`${room.id}`} className="py-2 px-4  bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Reservar
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-8  p-8 lg:p-24">
                    <Image width={0} height={0} src={room.gallery[1].img} className="w-1/2 rounded-lg" alt="Tree" />
                    <div>
                        <Image width={0} height={0} src={room.gallery[0].img} className="w-full h-1/2 object-cover  mb-8 rounded-lg" alt="Tree" />
                        <Image width={0} height={0} src={room.gallery[2].img} className="w-full h-1/2 object-cover rounded-lg" alt="Tree" />
                    </div>
                </div>
            </div>
        </div>
    )
}




export default Room