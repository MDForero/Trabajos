'use client'
import React from 'react'
import { contacto } from '../data/data'

const FormContact = () => {
    let nombre, apellido, telefono, descripcion
    const enviar = (e) => {
        e.preventDefault()
        if (nombre.value=='' || apellido.value=='' || telefono.value=='' || descripcion.value==''){
            return alert('Todos los campos son obligatorios')
        }
        const enviar = document.getElementById('enviar')
        const mensaje = `Nombre: ${nombre.value} ${apellido.value} \nTelefono: ${telefono.value} \nDescripcion: ${descripcion.value}`
        enviar.setAttribute('href', `https://api.whatsapp.com/send?phone=${contacto.telefono}&text=${mensaje}`)
        enviar.click()
    }
    return (
        <>
            <form className="w-full max-w-3xl">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Nombre <span className='text-red-500'>*</span> 
                        </label>
                        <input required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Pedro" ref={node => nombre= node} />
                    </div>
                    <div className="w-full md:w-1/3 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Apellidos <span className='text-red-500'>*</span> 
                        </label>
                        <input ref={node => apellido = node} required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Perez" />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                            Teléfono <span className='text-red-500'>*</span> 
                        </label>
                        <input ref={node => telefono = node} required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="+573202000200" />
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-2">
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                            Descripción <span className='text-red-500'>*</span> 
                        </label>
                        <textarea ref={node => descripcion = node} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-[250px] " id="grid-city" type="text" placeholder="Motivo de contacto" />
                    </div>
                </div>
                <button class='enviar' onClick={(e)=>enviar(e)}>
                    <div class="svg-wrapper-1">
                        <div class="svg-wrapper">
                            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
                            </svg>
                        </div>
                    </div>
                    <span>Contactar</span>
                </button>
            </form>
            <a href='#' target='_blank' id='enviar' className='hidden'>enviar</a>
        </>
    )
}

export default FormContact