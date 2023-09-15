import Image from 'next/image'
import Nav from './Components/Nav'
import Banner from './Components/Banner'
import CtaDate from './Components/CtaDate'
import AboutMe from './Components/AboutMe'
import Carousel from './Components/Carousel'
import Dimensiones from './Components/Dimensiones'

export const metadata = {
  title: 'Nestor Cubides Alcalde 2024-2027',
  description: 'Descubre la visión y el compromiso de Nestor Cubides Chivata para un Monterrey más próspero, seguro y participativo en su mandato como Alcalde 2024-2027. Conoce sus propuestas y proyectos para mejorar la calidad de vida de nuestra comunidad.',
  keywords:['Monterrey','Alcalde','Elecciones','Propuestas','Compromiso','Desarrollo','Comunidad','Seguridad','Participación','Proyectos','Mejora','Futuro','Gobierno','Visión','Candidato','Municipalidad','Plan de Desarrollo','Participación Ciudadana','Gestión Municipal','Bienestar',]
}

export const navItems = [
  {
    href: '#inicio',
    label: 'inicio',
  },
  {
    href: '#sobre',
    label: 'acerca de mi',
  },
  {
    href: '#mision',
    label: 'Misión',
  },
  {
    href: '#trayectoria',
    label: 'Trayectoria',

  },
  {
    href: '#dimensiones',
    label: 'Dimensiones',
  },
  {
    href: '#contacto',
    label: 'Contacto',
  }
]

const trayectoria = [
  {
    title: 'Bachiller',
    description: 'Graduado de bachillerato en el colegio I.E.T.D.',
    date: '2007',
    image: '/Images/bachillerato.jpg'
  },
  {
    title: 'Servicio',
    description: 'Prestación del servicio militar en la Fuerza Area Colombia',
    date: '2009 - 2011',
    image: '/Images/fuerzaaerea.jpg'
  },
  {
    title: 'Presidente de junta',
    description: 'Fuí elegido presidente de la junta de acción comunal del barrio Panorama',
    date: '2012-2015',
    image: '/Images/junta.JPG'
  },
  {
    title: 'Concejal',
    description: 'Fuí elegido concejal del municipio de Monterrey',
    date: '2016-2019',
    image: '/Images/concejal.jpg'
  },
  {
    title: 'Concejal',
    description: 'Fuí elegido una vez más como concejal del municipio de Monterrey',
    date: '2020-2022',
    image: '/Images/concejo.jpg'
  },
  {
    title: 'Presidente de Concejo',
    description: 'Fuí elegido una vez más como presidente del concejo de Monterrey',
    date: '2022',
    image: '/Images/presidente.jpg'
  },
]

const dimensiones = [
  {
    title: 'Dimensión Social:',
    description:'Trabajaremos incansablemente para mejorar las condiciones sociales y económicas de nuestras familias. Reduciremos las brechas sociales y garantizaremos servicios esenciales como agua potable, alcantarillado y saneamiento básico. Promoveremos políticas inclusivas para grupos vulnerables, priorizando equidad de género, seguridad alimentaria y salud mental. Además, impulsaremos la cultura, el deporte y la reconciliación, alineándonos con acuerdos de paz. Juntos, construiremos un Monterrey más próspero, inclusivo y sostenible'
  },
  {
    title: 'Dimensión Ambiental y Gestión del Riesgo:',
    description:'Mi visión para Monterrey es crear un entorno sostenible y seguro para todos. A través de nuestra Dimensión Ambiental, Cambio Climático y Gestión del Riesgo, fortaleceremos la gestión institucional, promoveremos el manejo adecuado de residuos y protegeremos la biodiversidad. Además, nos comprometemos a mejorar la calidad del aire y a fomentar la educación ambiental. Juntos, construiremos un Monterrey mejor para las generaciones futuras.'
  },
  {
    title: 'Dimensión Productiva y Desarrollo Económico:',
    description: 'En Monterrey, buscamos un futuro de crecimiento económico y diversificación. A través de nuestra Dimensión Productiva y Desarrollo Económico, fortaleceremos el turismo, apoyaremos a agricultores y ganaderos locales, promoveremos el emprendimiento y mejoraremos nuestras infraestructuras. Queremos consolidar a Monterrey como un atractivo destino turístico, respaldar a nuestros productores, fomentar la innovación empresarial y conectar nuestras zonas productivas. Estamos comprometidos con un Monterrey próspero y diversificado para todos.'
  },
  {
    title:'Dimension Institucional y de planeación:',
    description:'En Monterrey, nos comprometemos a fortalecer nuestra comunidad y planificar nuestro futuro de manera estratégica. En la Dimensión Institucional, Planeación y Ordenamiento Territorial, trabajaremos en conjunto con la comunidad para mejorar la seguridad y convivencia ciudadana, implementar proyectos de desarrollo estratégico y fortalecer nuestras finanzas públicas. También promoveremos la participación activa de la comunidad en la toma de decisiones y en la rendición de cuentas de la administración municipal. Estamos decididos a construir un Monterrey más seguro, planificado y participativo para todos.'
  }

]

const banners = [
  '/Images/inicio.jpg',
]

export default function Home() {
  return (
    <>
      <Nav data={navItems} />
      <div className='flex flex-col items-center gap-8 lg:gap-32 bg-gray-100 '>
        <section id='inicio' className='px-2 w-full' >
          <Carousel data={banners} />
        </section>
        <section id='sobre' className='px-2 flex flex-col items-center justify-center'>
          <AboutMe />
        </section>
        <CtaDate />
        <section id='mision' className='px-2 flex flex-col items-center justify-center max-w-7xl'>
          <div className="relative p-4 bg-white ">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
              <div className="lg:col-start-2 md:pl-20">
                <h4 className="text-2xl font-extrabold leading-8 tracking-tight text-gray-900  sm:leading-9">
                  Familia
                </h4>
                <ul className="mt-10">
                  <li>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                          <svg width="20" height="20" fill="currentColor" className="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                            </path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="mt-2 text-base leading-6 text-gray-500 ">
                          En nuestro gobierno con legado la familia es el centro de las decisiones públicas, logrando así una sociedad sana, capaz de generar riqueza intelectual y económica a los regiomontunos.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                          <svg width="20" height="20" fill="currentColor" className="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                            </path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="mt-2 text-base leading-6 text-gray-500 ">
                          Monterrey como centro de evento regionales y nacionales
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                          <svg width="20" height="20" fill="currentColor" className="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                            </path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="mt-2 text-base leading-6 text-gray-500 ">
                          Fortalecimiento empresarial local
                        </p>
                      </div>
                    </div>
                  </li>
                  
                </ul>
              </div>
              <div className="relative mt-10 -mx-4 md:-mx-12 lg:mt-0 lg:col-start-1">
                <img src="/Images/banner1.jpg" alt="illustration" className="relative w-auto mx-auto rounded shadow-lg" />
              </div>
            </div>
          </div>
        </section>
        <Banner data={{img:'/Images/1.jpg'}}/>
        <section id='trayectoria' className='px-2 flex flex-col items-center justify-center min-h-screen'>
          <h1 className='text-4xl font-bold mb-8'>Trayectoria</h1>
          <div className='flex flex-row flex-wrap items-center justify-center gap-4 rounded-lg'>
            {trayectoria.map((item, index) => <div key={index} className='flex flex-col lg:w-1/4 md:w-1/3 w-full h-full p-4 bg-white'>
              <Image src={item.image} width={0} height={0} className='w-full h-[320px] object-cover rounded-sm  ' />
              <div className='flex flex-col  justify-center gap-1'>
                <h1 className='text-2xl font-bold'>{item.title}</h1>
                <div>

                  <p className='text-lg font-semibold text-gray-600'>{item.description}</p>
                  <p className='text-lg font-bold'>{item.date}</p>
                </div>
              </div>
            </div>)}
          </div>
        </section>
        <Banner data={{img:'/Images/2.jpg'}}/>
        <section id='dimensiones' className='px-2 flex flex-col items-center justify-center min-h-screen'>
          <Dimensiones data={dimensiones} />
        </section>
        <Banner data={{img:'/Images/3.jpg'}}/>
        <section id='contacto' className='px-2 flex flex-col max-w-7xl w-full'>
          <h1 className='text-4xl font-bold text-center'>Contacto</h1>
          <div className='flex  gap-4 lg:flex-row flex-col items-center'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d496.92197941644815!2d-72.90120793746833!3d4.876554993103978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1694559062103!5m2!1ses-419!2sco" className='max-w-7xl w-full h-[400px]' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            <form className="flex w-full max-w-sm space-x-3">
              <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow ">
                <div className="mb-6 text-3xl font-light text-center text-gray-800 ">
                  Contactanos
                </div>
                <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
                  <div className="col-span-2 lg:col-span-1">
                    <div className=" relative ">
                      <input type="text" id="contact-form-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Name" />
                    </div>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <div className=" relative ">
                      <input type="text" id="contact-form-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="email" />
                    </div>
                  </div>
                  <div className="col-span-2">
                    <label className="text-gray-700" for="name">
                      <textarea className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="comment" placeholder="Enter your comment" name="comment" rows="5" cols="40">
                      </textarea>
                    </label>
                  </div>
                  <div className="col-span-2 text-right">
                    <button type="submit" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                      Enviar
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>

        </section>
      </div>
    </>
  )
}
