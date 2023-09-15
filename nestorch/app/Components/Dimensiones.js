'use client'
import React, { useState } from 'react'

const Dimensiones = ({ data }) => {


    return (
        <div className='max-w-7xl'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-2xl text-center font-bold mb-8 capitalize '>DIMENSIONES PROPUESTAS PARA PLANEAR Y EJECUTAR LA VISION DE DESARROLLO:</h1>
                <p className='text-wrap'>Para el logro de las principales apuestas en los cuatro años de gobierno, se proponen los siguientes principios, programas y proyectos que organizarán la toma de decisiones y enfocarán las inversiones para el logro de la visión de desarrollo y el modelo de ordenamiento territorial previsto en el esquema de ordenamiento territorial.<br />
                    Las propuestas de proyectos de inversión tendrán como base de priorización de las inversiones públicas, los planes estratégicos de inversión que hacen parte del esquema de ordenamiento territorial, las políticas públicas aprobadas, los planes ambientales de las fuentes hídricas aprobadas por la entidad regional ambiental y en general de aquellos instrumentos de planificación con los que cuenta la administración municipal. Adicionalmente, la propuesta de gobierno contará con el desarrollo de escenarios de participación en la priorización, identificación y ejecución de los presupuestos municipales.
                </p>
            </div>
            <div className='flex flex-col items-center justify-center mt-8'>
                <h1 className='text-3xl lg:text-4xl font-bold mb-4'>Dimensiones</h1>
                <dl className='grid grid-cols-2 gap-2' >
                    {data.map(({ title, description }, index) => {
                        const [show, setShow] = useState(false)
                        return <div key={index} className='border-2 p-2 h-fit'>
                            <dt className='px-2 mt-5 mb-2 font-semibold text-lg lg:text-2xl border-b-2'>{title} <button className='float float-right' onClick={() => setShow(!show)}>{show?'▲':'▼'}</button></dt>
                            <dd className={`${show ? '' : 'hidden'} pl-10 text-gray-700 lg:text-lg text-md`}>{description}</dd>
                        </div>
                    })}
                </dl>
            </div>

        </div>)
}

export default Dimensiones