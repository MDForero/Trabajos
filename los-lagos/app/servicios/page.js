import Banner from '../components/Banner'
import Servicios from '../components/Servicios'
import { servicios } from '../data/data'


export default function page (){
    return <div>
        <Banner fondo={'/Images/fondos/servicios.jpg'}/>
        <div className='flex flex-wrap lg:gap-12 gap-4 max-w-7xl w-full mx-auto  justify-evenly mt-24'>
            {servicios.map((item, index) => <Servicios data={item} key={index} />)}
        </div>
    </div>

}