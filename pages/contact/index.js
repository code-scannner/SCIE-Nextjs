import Image from 'next/image'
import { Component } from 'react'
import TopImage from '../../components/special/TopImage'
import MainHeading from '../../components/typography/MainHeading'
import { MdLocationOn } from 'react-icons/md'
import { BsFillTelephoneFill } from 'react-icons/bs'
export default class index extends Component {
    render() {
        return (
            <div>
                <div className='h-[85vh] relative flex justify-center items-center text-white/95'>
                    <MainHeading className='relative z-30 mt-20 text-3xl sm:text-6xl md:text-7xl'>CONTACT US</MainHeading>
                    <TopImage gradient={true} gradientHeight="7rem" src="./assets/images/website/contactpagebg.jpeg" imgStyle={{ filter: "saturate(1)" }} />
                </div>
                <div className='flex gap-x-8 my-12 w-11/12 sm:w-9/12 mx-auto mb-32'>
                    <div>
                        <iframe className='rounded-tl-none rounded-br-none rounded-lg ring-2 ring-pri-200 ring-offset-2 ring-offset-white' width="400" height="400" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3495.7502938351527!2d77.13136727980704!3d28.816514289837784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b1923ada2e3%3A0x1169930518add2fe!2sNational%20Institute%20of%20Technology%20Delhi!5e0!3m2!1sen!2sin!4v1674646220049!5m2!1sen!2sin" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                    <div className='p-12 flex flex-col text-center justify-center items-center gap-y-2 ring-2 ring-pri-200 rounded-lg bg-pri-25 ring-offset-2 ring-offset-white rounded-tr-none rounded-bl-none'>
                        <div className='w-32 h-32 overflow-hidden rounded-full'>
                            <Image className='w-32 object-cover' src={"assets/images/team/incharge/anmolsir.jpg"} width={300} height={300} />
                        </div>
                        <div className='text-lg font-semibold text-stone-700'>Dr Anmol Ratna Saxena</div>
                        <div>Faculty Incharge, Startup Centre For Innovation And Entrepreneurship</div>
                        <div className='my-2 text-pri-600 font-semibold'>scie@nitdelhi.ac.in</div>
                        <div className='flex'>

                            <div className='w-1/2 flex gap-x-2'>
                                <BsFillTelephoneFill className='inline text-3xl text-pri-400' />
                                <span>
                                123-456-789
                                </span>
                                </div>
                            <div  className='w-1/2'>
                                <MdLocationOn className='inline text-3xl text-pri-400' />
                                <p>
                                National Institute of Technology
                                Plot No. FA7,Zone P1,
                                Chandra Hospital
                                GT Karnal Road, Delhi-110036
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
