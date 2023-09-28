import Banner from '../components/Banner'
import { habitaciones } from '../data/data'
import Room from '../components/Room'

async function getCabanas (){
    const res = await fetch('http://localhost:3000/cabanas.json', {cache: "no-cache"})
    const data = await res.json()
    return data
}
export default async function page (){
    const data = await getCabanas()
    return <>
        <Banner fondo={'/Images/fondos/habitaciones.jpg'} />
        <section>
            {data.map((item, index) => <Room key={index} room={item} />)}
        </section>
    </>

}