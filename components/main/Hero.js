import { Component } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Button from '../utils/Button'

import TopImage from '../special/TopImage'

export default class Hero extends Component {

  render() {
    return (
      <div className='relative w-full h-screen bg-pri-100 md:h-[100vh] flex flex-col gap-y-6 md:gap-y-12 justify-center items-center overflow-hidden'>
        <div className='w-full h-full absolute bg-red-500'>
          {/* social icons from here */}
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
