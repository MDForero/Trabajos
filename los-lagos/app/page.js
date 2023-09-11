import Image from 'next/image'
import Team from './components/Team'
import Banner from './components/Banner'
import Services from './components/Services'
import Comments from './components/Comments'
import Faq from './components/Faq'
import { comments, faq, featured, team } from './data/data'
import DivImg from './components/DivImg'

export default function Home() {
  return (
    <div>
      <Banner fondo={'/Images/fondos/inicio.jpg'} />
      <div className='flex flex-col items-center gap-44'>
        <section id='cta'>
          <div className=" max-w-screen-xl p-4 px-4 mx-auto bg-white  sm:px-6 lg:px-8 py-26 lg:mt-20">
            <div className="">
              <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className="ml-auto lg:col-start-2 lg:max-w-2xl">
                  <p className="text-base font-semibold leading-6 text-indigo-500 uppercase">
                    Interactive
                  </p>
                  <h4 className="mt-2 text-2xl font-extrabold leading-8 text-gray-900 :text-3xl sm:leading-9">
                    Interactivity between team members is the key of the success.
                  </h4>
                  <p className="mt-4 text-lg leading-6 text-gray-500 ">
                    Build a simply and powered collaborative space for all your team. Track, share, measure, you have a fully control, it&#x27;s never be simply and efficient.
                  </p>
                  <ul className="gap-6 mt-8 md:grid md:grid-cols-2">
                    {['Jacuzzi', 'Confort', 'atencion personalizada', 'discresion', 'Lorem Ipsum'].map((item, index) => <li key={index} className="mt-6 lg:mt-0">
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
                </div>
                <div className=" mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
                  <div className=" space-y-4">
                    <div className="flex items-end justify-center space-x-4 lg:justify-start">
                      <Image className="w-32 rounded-lg shadow-lg md:w-56" width="200" height={0} src="/Images/_DSC1754.jpg" alt="1" />
                      <Image className="w-40 rounded-lg shadow-lg md:w-64" width="260" height={0} src="/Images/_DSC1754.jpg" alt="2" />
                    </div>
                    <div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                      <Image className="w-24 rounded-lg shadow-lg md:w-40" width="170" height={0} src="/Images/_DSC1766.jpg" alt="3" />
                      <Image className="w-32 rounded-lg shadow-lg md:w-56" width="200" height={0} src="/Images/_DSC1766.jpg" alt="4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
        <DivImg/>
        <section id='featured' className='flex flex-wrap gap-8 justify-center items-center max-w-7xl w-full p-4 mx-auto'>
          {featured.map((feature, index) => <Services data={feature} key={index} />)}
        </section>
        <DivImg/>
        <section id='faq'>
          <Faq data={faq} />
        </section>
        <DivImg/>
        <section id='comments' className='flex  gap-8 max-w-7xl w-full overflow-hidden overflow-x-scroll p-4 mx-auto'>
          {comments.map((comment, index) => <Comments data={comment} key={index} />)}
        </section>
        <DivImg/>
        <section id='team'>
          <Team data={team} />
        </section>
      </div>

    </div>
  )
}
