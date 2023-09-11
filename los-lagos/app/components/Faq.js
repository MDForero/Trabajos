import React from 'react'

const Faq = ({data}) => {
    return (

        <div className="max-w-screen-xl p-8 mx-auto">
            <h2 className="mb-12 text-3xl font-extrabold leading-9 text-gray-900 border-b-2 border-gray-100">
                Preguntas Frecuentes
            </h2>
            <ul className="flex flex-wrap items-start gap-8">
               {data.map((item, index)=> <li key={index} className="lg:w-2/5 w-full p-2">
                    <p className="text-lg font-medium leading-6 text-gray-900">
                        {item.quest}
                    </p>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                        {item.answ}
                    </p>
                </li>)}
            </ul>
        </div>

    )
}

export default Faq