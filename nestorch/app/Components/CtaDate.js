'use client'
import React, { useState, useEffect } from 'react'

const Contador = () => {
    const date = new Date()
    const elecciones = new Date('october 29, 2023 08:00:00')
    const [day, setDay] = useState({ days: "00", hours: "00", minutes: "00", seconds: "00" })
    useEffect(() => {
        setInterval(() => {
            const now = new Date()
            const diff = elecciones - now
            const days = Math.floor(diff / 1000 / 60 / 60 / 24)
            const hours = Math.floor(diff / 1000 / 60 / 60) % 24
            const minutes = Math.floor(diff / 1000 / 60) % 60
            const seconds = Math.floor(diff / 1000) % 60
            setDay({ days: days, hours: hours, minutes: minutes, seconds: seconds })
        }, 1000)
    }, [])

    return (
        <section className="py-8 bg-indigo-500 bg-gradient  md:py-16 w-full md:h-[350px] ">
            <div className="flex flex-col items-center  md:flex-row gap-12 justify-center h-full">
                <div className=" px-5 mb-5 text-center md:mb-0  ">
                    <h6 className="text-xs font-semibold text-indigo-800 uppercase md:text-base ">
                        Día de las elecciones
                    </h6>
                    <h3 className="text-3xl font-bold text-white font-heading md:text-4xl">
                        29 de octubre de 2023
                    </h3>
                    <h3 className="text-lg font-bold leading-tight text-white font-heading md:text-xl">
                        @ 08:00 AM
                    </h3>

                </div>
                <div className="w-full px-5 md:w-auto">
                    <div className="flex justify-center text-center text-white">
                        <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
                            <div className="text-2xl font-semibold md:text-5xl">
                                {day.days}
                            </div>
                            <div className="mt-3 text-xs uppercase opacity-75">
                                Días
                            </div>
                        </div>
                        <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
                            <div className="text-2xl font-semibold md:text-5xl">
                                {day.hours}
                            </div>
                            <div className="mt-3 text-xs uppercase opacity-75 ">
                                Horas
                            </div>
                        </div>
                        <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
                            <div className="text-2xl font-semibold md:text-5xl">
                                {day.minutes}
                            </div>
                            <div className="mt-3 text-xs uppercase opacity-75 ">
                                Minutos
                            </div>
                        </div>
                        <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
                            <div className="text-2xl font-semibold md:text-5xl">
                                {day.seconds}
                            </div>
                            <div className="mt-3 text-xs uppercase opacity-75 ">
                                Segundos
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Contador