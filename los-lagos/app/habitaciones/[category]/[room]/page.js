import { contacto } from "@/app/data/data"
import Image from "next/image"
import Link from "next/link"
import { nextResponse } from "next/server"

export async function generateStaticParams() {
    const data = await fetch('http://localhost:3000/cabanas.json', { cache: "no-cache" }).then((res) => res.json())
    const rooms = data.map((item) => item.rooms).flat().map(item => item.id)
    return rooms.map((room) => ({ category: (parseInt(room) - parseInt(room.slice(-2))).toString(), rooms: room }))
}

export async function generateMetadata({ params }) {
    const { category, room } = params
    const data = await fetch('http://localhost:3000/cabanas.json', { cache: "no-cache" }).then((res) => res.json())
    const categoryData = data.find((item) => item.id === category)
    const roomData = categoryData.rooms.find((item) => item.id === room)
    if (!roomData) {

        return {
            title: "Err 404",
        }
    } else {
        return {
            title: roomData.title,
            keywords: roomData.items,
        }
    }
}

export default async function Page({ params }) {
    const { category, room } = params
    const data = await fetch('http://localhost:3000/cabanas.json', { cache: "no-cache" }).then((res) => res.json())
    const categoryData = data.find((item) => item.id === category)
    const roomData = categoryData.rooms.find((item) => item.id === room)
    if (roomData) {
        const { title, gallery, items } = await roomData
        return <>
            <main className="h-[800px] w-full relative">
                <Image src={gallery[0].img} alt={gallery[0].alt} className="w-full h-full object-cover" width={0} height={0} />
                <div className="absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-center items-center bg-black/30">
                    <Image src='/logo-dark.png' width={0} height={0} className='w-52 h-52' />
                    <p className="text-white lg:text-5xl sm:text-xl font-bold capitalize"><span className="text-white font-bold capitalize">{title.toLocaleLowerCase()}</span> | <Link href={`/habitaciones/${category}`} className="text-white hover:text-blue-lagos font-bold capitalize">Cabaña {category}</Link></p>
                </div>
            </main>
            <section id='cta' className="max-w-7xl mx-auto">

                <div className="bg-white  overflow-hidden relative lg:flex lg:items-center">
                    <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                        <h2 className="text-3xl font-extrabold text-black  sm:text-4xl">
                            <span className="block">
                                {title}
                            </span>
                        </h2>
                        <ul className="gap-6 mt-8 md:grid md:grid-cols-2">
                            {items.map((item, index) => <li key={index} className="mt-6 lg:mt-0">
                                <div className="flex">
                                    <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full  drark:bg-transparent">
                                        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                            </path>
                                        </svg>
                                    </span>
                                    <span className="ml-4 text-base font-medium leading-6 text-gray-500 ">
                                        {item}
                                    </span>
                                </div>
                            </li>)}
                        </ul>
                        <div className="lg:mt-0 lg:flex-shrink-0">
                            <div className="mt-12 inline-flex rounded-md shadow">
                                <a href={`https://api.whatsapp.com/send?phone=${contacto.telefono}&text=Hola, me gustaría reservar la cabaña ${title}`} className="py-2 px-4  bg-green-lagos hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Reservar
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-8 p-8 lg:p-24">
                        <Image src={gallery[0].img} className="w-1/2 h-full object-cover rounded-lg" width={0} height={0} alt={gallery[1].alt} />
                        <div>
                            <Image src={gallery[1].img} className="h-44 w-full object-cover mb-8 rounded-lg" width={0} height={0} alt={gallery[0].alt} />
                            <Image src={gallery[2].img} className="h-44 w-full object-cover rounded-lg" width={0} height={0} alt={gallery[2].alt} />
                        </div>
                    </div>
                </div>

            </section>
        </>
    } else {
        return <>No found</>
    }

}