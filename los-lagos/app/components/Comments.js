import React from 'react'

const Comments = ({ data }) => {
    const { name, comment, stars } = data || { name: 'jhon doe', comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', stars: 3 }
    const arrayStars = []
    for (let i = 0; i < 5; i++) {
        if (i < stars) {
            arrayStars.push('text-yellow-500')
        } else {
            arrayStars.push('text-gray-400')
        }
    }

        return (
            <div className="min-w-[320px] lg:min-w-[400px] h-[230px] p-4 mb-6 bg-white rounded-lg shadow h sm:inline-block">
                    <div className="flex items-start text-left">
                        <div className="flex-shrink-0">

                        </div>
                        <div className="ml-6  ">
                            <p className="flex items-baseline">
                                <span className="font-bold text-gray-600 h">
                                    {name}
                                </span>

                            </p>
                            <div className="flex items-center mt-1">
                                {arrayStars.map((item, index) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className={`h-4 w-4 ${item}`} key={index} fill="currentColor" viewBox="0 0 1792 1792">
                                    <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                    </path>
                                </svg>)}

                            </div>
                            <div className="mt-3">
                                <p className="max-w-xs mt-1 h-[150px] text-ellipsis overflow-hidden">
                                    {comment}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            
        )
    }

    export default Comments