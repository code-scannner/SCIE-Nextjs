import Image from 'next/image'
import { Component } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Button from '../utils/Button'
import {AiFillInstagram,AiFillLinkedin} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import Socials from '../../data/contacts.json'
import TopImage from '../special/TopImage'

export default class Hero extends Component {
  socials = [
    {icon:<BsFacebook/>,link:Socials['facebook'].link},
    {icon:<AiFillInstagram/>,link:Socials['instagram'].link},
    {icon:<AiFillLinkedin/>,link:Socials['linkedin'].link}
  ]
  render() {
    return (
      <div className='relative w-full h-screen bg-pri-100 md:h-[100vh] flex flex-col gap-y-6 md:gap-y-12 justify-center items-center overflow-hidden'>
        <div className='w-full h-full absolute bg-red-500'>
          {/* social icons from here */}
          <div className='absolute left-4 bottom-4 z-30'>
            <ul className='flex flex-col space-y-2'>
              {this.socials.map((elem,ind)=><li key={ind} className="text-xl sm:text-3xl text-white ring-1 ring-white hover:text-pri-300 transition-colors rounded-full p-1 sm:p-1.5">
                <a href={elem.link} target="_blank" rel='noreferrer'>{elem.icon}</a>
              </li>)}
            </ul>
          </div>
          <TopImage src = "./assets/images/website/nitdelhibuilding.jpeg" />
        </div>
        <h2 className='text-white text-2xl sm:text-3xl md:text-[2.5rem] md:leading-[3.5rem] font-extrabold text-center relative z-20'>Startup Centre For Innovation And Entrepreneurship<br /> NIT DELHI</h2>
        <h3 className='text-white text-2xl sm:text-3xl md:text-[2.5rem] font-extrabold text-center relative z-20'>We are{" "}
          <span className='text-pri-300'>
            <Typewriter
              words={['Diversifiers', 'Organisers', 'Venturous']}
              loop
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h3>
        <Button className="tracking-wider relative z-20">BROWSE EVENTS</Button>
      </div>
    )
  }
}
