'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const aboutList = {
    'Detalles': [
        {
            'title': 'Nombre',
            'description': 'Nestor Gildardo Cubides Chivata'
        },
        {
            'title': 'Edad',
            'description': '33 años'
        },
        {
            'title': 'Estado Civil',
            'description': 'Soltero'
        },
        {
            'title': 'Profesión',
            'description': 'Administrador Público'
        },
        {
            'title': 'Universidad',
            'description': 'Escuela Superior de Administración Pública - ESAP'
        },
        {
            'title': 'Trabajo',
            'description': 'Político'
        },
    ],

    'Historia': [
        {
            'title': '1990',
            'description': 'Nacido en Monterrey Casanare el 17 de agosto de 1990'
        },
        {
            'title': "2007",
            "description": "Fuí elegido personero estudiantil en el colegio I.E.T.D de Monterrey Casanare"
        },
        {
            'title': "2007",
            "description": "Condecorado como el mejor estudiante de bachillerato en el colegio I.E.T.D de Monterrey Casanare"
        },
        {
            'title': "2011",
            "description": "Condecorado con la mención honorífica por la Fuera Aérea Colombiana"
        },
        {
            'title': "2015",
            "description": "Elegido concejal de Monterrey Casanare"
        },
        {
            'title': "2021",
            "description": "Graduado como administrador público de la ESAP"
        },
    ],

    'Logros': [
        {
            'title': 'Autor',
            'description': 'Acuerdo municipal celebración día de los niños, niñas y adolescentes concejalitos y alcalde Monterrey Casanare'
        },
        {
            'title': 'Autor',
            'description': 'Acuerdo municipal creación de tasa pro-deporte de Monterrey Casanare'
        },
        {
            'title': 'Presidente de concejo',
            'description': 'Presidente de concejo Monterrey Casanare'
        },
    ],
}

const AboutMe = () => {
    const [active, setActive] = useState('Detalles')

    return (
        <div className='flex lg:flex-row flex-col-reverse max-w-7xl items-center justify-center gap-4 bg-white p-6 rounded-2xl shadow-2xl'>
            <div className='hidden  md:block lg:w-1/2 overflow-y-hidden'>
                <figure className='relative w-fit '>
                    <Image src='/Images/foto.png' width={400} height={400} alt='Nestor Gildardo Cubides Chivata' className='z-10 relative' />
                    <figcaption className='absolute top-1/4 -bottom-1/2 right-0 left-0 bg-yellow-500 z-0 skew-y-12'>
                        <div className='relative '>
                            <div className='absolute -top-20 -right-20 overflow-hidden h-40 -skew-y-12 '>
                                <div className='text-white text-2xl font-bold h-20 w-fit text-center flex flex-col justify-center items-center skew  relative  '>
                                    <p><span className='text-5xl'>A</span>dministrador</p>
                                    <p>Público</p>
                                </div>
                            </div>
                        </div>
                    </figcaption>
                </figure>
            </div>
            <div className='lg:w-1/2'>
                <div>
                    <h2 className='text-4xl font-bold text-blue-500'>Sobre mí</h2>
                    <h1 className='text-4xl font-bold'>Nestor Gildardo Cubides Chivata</h1>
                    <p className='text-lg'>Soy Nestor Gildardo Cubides Chivata, un administrador público comprometido con el servicio a los demás. He visto la mano de Dios en cada momento de mi vida y creo que la familia es el pilar de la sociedad.</p>
                </div>
                <div>
                    <ul className='flex border-2 rounded-lg overflow-hidden'>
                        {['Detalles', 'Historia', 'Logros'].map((item, index) => <li key={index} className={(active === item ? 'bg-gradient-to-tr from-blue-400 to-blue-700 rounded-lg text-white' : 'bg-white border-2 rounded-lg') + ' max-w-1/3 w-full'}><button onClick={() => setActive(item)} key={index} className='w-full p-3 font-semibold  text-lg lg:text-xl'>{item}</button></li>)}
                    </ul>

                    <ul className='flex flex-wrap px-4 gap-3 w-full'>
                        {aboutList[active].map((item, index) => <li key={index} className='flex flex-col w-2/5'><dl className='text-lg font-bold'>{item.title}</dl><dd className='text-sm   pl-4'>{item.description}</dd></li>)}
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default AboutMe