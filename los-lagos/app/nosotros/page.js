import Image from 'next/image'
import Banner from '../components/Banner'
import { nosotros, principios, team, valores } from '../data/data'
import Team from '../components/Team'
import CardValores from '../components/CardValores'

export default function page() {
    return <div className=' flex flex-col justify-center items-center gap-28 mb-28'>
        <Banner fondo={'/Images/fondos/nosotros.jpg'} />
        <div className='flex flex-col mt-24 gap-24 items-center justify-center max-w-7xl '>
            {nosotros.map((item, index) => <>
            <div key={index} className='flex flex-row gap-12 even:md:flex-row-reverse flex-wrap items-center justify-center max-w-7xl w-full'>
                <Image src={item.img} width={500} height={500} className='rounded-full w-[500px] h-[500px]' />
                <div className='md:w-2/5'>
                    <h1 className='text-3xl font-bold text-center'>{item.title}</h1>
                    <p className='text-justify'>{item.text}</p>
                </div>
            </div>
            </>)}
        </div>
        <section id='valores'>
            <h2 className='text-3xl font-bold text-center mb-8'>Nuestros valores</h2>
            <div className='max-w-7xl w-full p-2  flex flex-wrap gap-8 justify-center'>
                {valores.map(({ title, text }, index) => <CardValores key={index} title={title} text={text} />)}
            </div>
        </section>
        <section id='principios'>
            <h2 className='text-3xl font-bold text-center mb-8'>Nuestros principios</h2>
            <div className='max-w-7xl w-full p-2  flex flex-wrap gap-8 justify-center'>
                {principios.map(({ title, text }, index) => <CardValores key={index} title={title} text={text} />)}
            </div>
        </section>
    </div>

}