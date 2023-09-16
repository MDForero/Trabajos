import Banner from '../components/Banner'
import fs from 'fs'
import path from 'path'
import Image from 'next/image'

// Ruta de la carpeta que contiene las imágenes

// Función para obtener un array de nombres de archivo de imágenes en la carpeta

// Obtén el array de nombres de archivo de imágenes


const carpetaImagenes = './public/Images/';
function obtenerNombresDeImagenesEnCarpeta(carpeta) {
    const nombresDeArchivos = fs.readdirSync(carpeta);
    const nombresDeImagenes = nombresDeArchivos.filter((nombreArchivo) => {
        // Filtrar solo archivos con extensiones de imágenes comunes (puedes agregar más según tus necesidades)
        const extensionesValidas = ['.jpg', '.jpeg', '.png', '.gif'];
        const extension = path.extname(nombreArchivo).toLowerCase();
        return extensionesValidas.includes(extension)
    });

    return nombresDeImagenes.map((imagen) => (carpeta + imagen).slice((carpeta + imagen).indexOf('/Images')))
}


export default async function page() {
    const imagenesEnCarpeta = await obtenerNombresDeImagenesEnCarpeta(carpetaImagenes);
    return <div className=''>
        <Banner fondo='/Images/fondos/galeria.jpg'  />
        <div className='max-w-screen-xl w-full mx-auto grid md:grid-cols-4 sm:grid-cols-2 xl:grid-cols-6 grid-flow-dense gap-2'>
            {imagenesEnCarpeta.map((imagen, index) => <Image key={index} src={imagen} width={0} height={0} className='rounded-xl w-full h-full object-cover' />)}
        </div>
    </div>

}