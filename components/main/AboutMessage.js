import Image from 'next/image'
import { Component } from 'react'
import Divider from '../special/divider'

export default class AboutMessage extends Component {
    render() {
        return (
            <>
            {/* Directors message */}
            <div className='container mx-auto w-11/12 md:w-9/12'>
                <h2 className='my-6 text-3xl font-bold ml-2 text-pri-500 uppercase text-center'>{"Director's "}<span className='text-slate-700'>Message</span></h2>
                <div className='flex flex-col space-y-4 md:space-y-0 md:flex-row items-center'>
                    <Image alt='NIT Delhi Director' src={"./assets/images/dummy/square.png"} width={300} height={300} className="w-44 h-44 rounded-lg sm:mr-6 mx-auto ring-2 ring-pri-500 ring-offset-2" />
                    <p className='text-base text-center md:text-right md:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius egestas turpis, et convallis arcu viverra finibus. Nam posuere lacinia lobortis. Morbi iaculis aliquet pellentesque. Fusce molestie eget nulla sit amet posuere. Vivamus ac sapien at eros feugiat fermentum. Nulla vulputate, arcu id volutpat venenatis.</p>
                </div>
            </div>
            <Divider/>
            {/* Faculty Coordinator Message */}
            <div className='container mx-auto w-11/12 md:w-9/12'>
                <h2 className='my-6 text-3xl font-bold ml-2 text-pri-500 uppercase text-center'>{"Faculty Coordinator's "}<span className='text-slate-700'>Message</span></h2>
                <div className='flex flex-col space-y-4 md:space-y-0 md:flex-row-reverse items-center'>
                    <Image alt='NIT Delhi Director' src={"./assets/images/dummy/square.png"} width={300} height={300} className="w-44 h-44 rounded-lg mx-auto sm:ml-6 ring-2 ring-pri-500 ring-offset-2" />
                    <p className='text-base md:text-lg md:text-left text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius egestas turpis, et convallis arcu viverra finibus. Nam posuere lacinia lobortis. Morbi iaculis aliquet pellentesque. Fusce molestie eget nulla sit amet posuere. Vivamus ac sapien at eros feugiat fermentum. Nulla vulputate, arcu id volutpat venenatis.</p>
                </div>
            </div>
            </>
        )
    }
}
