import Banner from '../components/Banner'
import FormContact from '../components/FormContact'
import { contacto } from '../data/data'

export default function page() {
    return <div className='flex flex-col gap-24 justify-center items-center'>
        <Banner fondo={'/Images/fondos/contacto.jpg'} />
        <section className='max-w-7xl w-full'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.4208420735727!2d-72.89160582398188!3d4.8689461401739225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6ad2850e5b68df%3A0x30c6adb32b2fb1cb!2sHotel%20Los%20Lagos%20Centro%20Vacacional%3B%20Hotel%20en%20Monterrey%20Casanare%2C!5e0!3m2!1ses-419!2sco!4v1694108258499!5m2!1ses-419!2sco" className='w-full h-[450px]' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
        <section className='max-w-screen-xl mx-auto flex gap-12 justify-center items-center flex-wrap'>
            
            <div className='md:w-1/5'> 
                    <h2 className='text-black font-bold text-2xl'>Contacto</h2>
                    <p className='text-black font-mediun text-lg'>orem ipsum dolor sit amet, consectetur adipiscing elit. In ut nisi tortor. Etiam vitae sapien facilisis, sagittis velit at, placerat eros. Nullam diam ipsum, tincidunt at tincidunt sed, tristique ut dolor.</p>
                    <ul>
                        <li className='text-lg text-gray-950 hover:text-gray-500 font-medium'><a href={`tel:${contacto.telefono}`}>Teléfono: {contacto.telefono}</a></li>
                        <li className='text-lg text-gray-950 hover:text-gray-500 font-medium'><a href={`mailto:${contacto.correo}`}>Correo: {contacto.telefono}</a></li>
                        <li className='text-lg text-gray-950 hover:text-gray-500 font-medium'><a href={`${contacto.maps}`}>Direccion: {contacto.direccion}</a></li>
                    </ul>
            </div>
            <div className='w-full lg:w-4/6 p-4'>
            <FormContact />
            </div>
        </section>
    </div>

}