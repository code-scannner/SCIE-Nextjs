import Image from 'next/image'
import { Component } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Button from '../utils/Button'

export default class Hero extends Component {
  render() {
    return (
      <div className='relative w-full h-screen bg-pri-100 md:h-[100vh] flex flex-col gap-y-6 md:gap-y-12 justify-center items-center overflow-hidden'>
        <div className='w-full h-full absolute bg-red-500'>
          <div className='bg-black/30 absolute inset-0 z-20'></div>
          <div className='bg-pri-1000/50 absolute inset-0 z-10'></div>
          <Image src="/assets/images/website/nitdelhibuilding.jpeg" fill objectFit='cover' alt="NIT Delhi, Admin Block"  style={{filter:"saturate(0.4)"}}/>
        </div>
        <h2 className='text-white text-2xl sm:text-3xl md:text-[2.5rem] md:leading-[3.5rem] font-extrabold text-center relative z-20'>Startup Center For Innovation And Entrepreneureship<br /> NIT DELHI</h2>
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
