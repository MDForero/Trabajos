import Banner from '../components/Banner'
import Servicios from '../components/Servicios'
import { servicios } from '../data/data'

async function getServicio() {
    const servicios = await fetch('http://localhost:3000/data.json', {cache: "no-cache"});
    const data = await servicios.json();
    return data;
}

export default async function page (){
    const servicios = await getServicio();
    return <div>
        <Banner fondo={'/Images/fondos/servicios.jpg'}/>
        <div className='flex flex-wrap lg:gap-12 gap-4 max-w-7xl w-full mx-auto  justify-evenly mt-24'>
            {servicios.map((item, index) => <Servicios key={index} data={item} />)}
        </div>
    </div>

}