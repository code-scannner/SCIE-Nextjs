import Head from 'next/head'
import About from '../components/main/About'
import AboutMessage from '../components/main/AboutMessage'
import Contact from '../components/main/Contact/Contact'
import Hero from '../components/main/Hero'
import Sponsors from '../components/main/Sponsors/Sponsors'
import Testimonials from '../components/main/Testimonials/Testimonials'
import Divider from '../components/special/Divider'
import {AiFillInstagram,AiFillLinkedin} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import Socials from '../data/contacts.json'
const socials = [
  {icon:<BsFacebook/>,link:Socials['facebook'].link},
  {icon:<AiFillInstagram/>,link:Socials['instagram'].link},
  {icon:<AiFillLinkedin/>,link:Socials['linkedin'].link}
]
export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>SCIE | NIT Delhi</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="SCIE NIT Delhi,SCIE, NIT Delhi, Entrepreneureship cell, national institute of Technology Delhi, startup cell, delhi, college" />
        <meta name="description" content="SCIE NIT Delhi" />
      </Head>
      <Hero />
      <About />
      <Divider />
      <AboutMessage />
      <Divider />
      <Testimonials />
      <Divider marginBottom={0} />
      <Sponsors />
      <Divider marginBottom={0} />
      <Contact heading = {true} />
      <Divider />
      <div className='sticky left-4 bottom-4 z-30 w-12 bg-black'>
            <ul className='flex flex-col space-y-2'>
              {socials.map((elem,ind)=><li key={ind} className="text-xl sm:text-3xl text-white ring-1 ring-white hover:text-pri-300 transition-colors rounded-full p-1 sm:p-1.5">
                <a href={elem.link} target="_blank" rel='noreferrer'>{elem.icon}</a>
              </li>)}
            </ul>
          </div>
    </>
  )
}
