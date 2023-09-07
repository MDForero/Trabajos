import Image from 'next/image'
import Banner from '../components/Banner'


import { nosotros } from '../data/data'

export default function page() {
    return <div className=' flex flex-col justify-center items-center'>
        <Banner fondo={'/Images/fondos/nosotros.jpg'} />
        <div className='flex flex-col mt-24 gap-24 items-center justify-center max-w-7xl '>
            {nosotros.map((item, index) => <>
            <div key={index} className='flex flex-row gap-12 even:md:flex-row-reverse flex-wrap items-center justify-center max-w-7xl w-full'>
                <Image src={item.img} width={500} height={500} className='rounded-full' />
                <div className='md:w-2/5'>
                    <h1 className='text-3xl font-bold text-center'>{item.title}</h1>
                    <p className='text-justify'>{item.text}</p>
                </div>
            </div>
            </>)}
        </div>
    </div>

}