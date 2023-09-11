import Image from 'next/image'
import React from 'react'

const Team = ({data}) => {
    return (
        <div>
            <div className="p-8 bg-white rounded-lg shadow ">
                <p className="text-3xl font-bold text-center text-gray-800 ">
                    The big team
                </p>
                <p className="mb-12 text-xl font-normal text-center text-gray-500 ">
                    Meat the best team in wolrd
                </p>
                <div className="max-w-7xl mx-auto p-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                    {data.map((item, index) => <div key={index} className="p-4">
                        <div className="flex-col  flex justify-center items-center">
                            <div className="flex-shrink-0">
                                <Image alt={item.alt} src={item.img} width={0} height={0} className="relative block mx-auto object-cover rounded-full h-20 w-20 " />
                            </div>
                            <div className="mt-2 text-center flex flex-col">
                                <span className="text-lg font-medium text-gray-600 ">
                                    {item.name}
                                </span>
                                <span className="text-xs text-gray-400">
                                    {item.job}
                                </span>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default Team