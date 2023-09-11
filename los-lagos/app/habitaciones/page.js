import Banner from '../components/Banner'
import { habitaciones } from '../data/data'
import Room from '../components/Room'

export default function page (){
    return <div >
        <Banner fondo='/Images/fondos/habitaciones.jpg'/>
        
        {habitaciones.map((item, index) => <Room room={item} key={index}/>)}
    
    </div>

}