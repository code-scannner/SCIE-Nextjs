import { Component } from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { HiMail } from 'react-icons/hi'
import Image from 'next/image'

export default class TeamCard extends Component {
    
    render() {
        const {size} = this.props
        return (
            <div className='flex flex-col'>
                <div className='relative'>
                    <Image className={`${size=="lg"?"w-32 sm:w-52":"w-28 sm:w-40"} rounded-full m-3 peer-hover:ring-2 ring-pri-600 peer-hover:ring-offset-2 ring-offset-white transition-[box-shadow] duration-300`} src={"./assets/images/dummy/square.png"} width={300} height={300} alt="Director image" />
                    <div className='absolute peer opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/80 space-x-3 rounded-full inset-0 flex justify-center items-center m-3'>
                        <a href='#' target="_blank" rel='noreferrer'>
                            <BsLinkedin className='text-2xl sm:text-3xl text-white hover:text-[#6eb3f7] transition-colors duration-300' />
                        </a>
                        <a href='#' target="_blank" rel='noreferrer'>
                            <HiMail className='text-white hover:text-[#ffe9a2] text-3xl sm:text-[2.7rem] rounded-full transition-colors duration-300' />
                        </a>
                    </div>
                </div>
                <h2 className='uppercase font-medium text-center p-1 text-base sm:text-lg tracking-wide text-gray-900'>Anmol Sir</h2>
                <h3 className='text-center uppercase text-sm sm:text-base text-gray-800'>E-cell InCharge</h3>
            </div>
        )
    }
}
