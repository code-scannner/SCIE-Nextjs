import { Component } from 'react'
import Link from 'next/link'
import { MdAlternateEmail } from 'react-icons/md'
import Button from '../utils/Button'
import Input from '../utils/Input'
export default class Footer extends Component {
    contacts = [
        {
            name:"Vinay Chaudhary",
            phone:"+91-8239254630",
        },
        {
            name:"Sanskar Jain",
            phone:"+91-7987926818",
        },
        {
            name:"Saumil Shankar ",
            phone:"+91-8383052920",
        },
    ]
    render() {
        return (
            <footer className="relative">
                <div className="mx-auto w-11/12 md:w-10/12">
                    <div className="flex flex-col md:flex-row">
                        <div className="lg:w-full px-4">
                            <h4 className="text-3xl text-gray-700 mb-6">Let's keep in <span className='text-pri-400' >touch!</span></h4>
                            <form className='my-12 sm:my-0'>
                                <div className="items-center mx-auto mb-3 flex flex-col sm:flex-row space-y-2 sm:space-y-0">
                                    <div className="relative w-full">
                                        <label htmlFor="subemail" className="sr-only mb-2 text-sm font-medium text-gray-900">Email address</label>
                                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none text-base">
                                            <MdAlternateEmail className='text-gray-600 text-xl ' />
                                        </div>
                                        <Input type="input" id="subemail" style={{ paddingLeft: "2.5rem" }} className="rounded sm:rounded-none">Enter your email</Input>
                                    </div>
                                    <div>
                                        <Button className="uppercase tracking-wide rounded sm:rounded-none" >Subscribe</Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="w-full px-4 text-center tracking-wider self-end">
                                    <span className="block uppercase text-pri-400 text-3xl font-semibold mb-4 mt-6 md:mt-0 md:text-end">Contact Us</span>
                                    <ul className='block md:flex flex-col items-end'>
                                        {
                                        this.contacts.map((elem,ind)=><li key={ind} className="py-2 flex flex-col sm:flex-row sm:space-x-3">
                                            <span className='text-gray-700 font-medium'>{elem.name}</span>
                                            <a className="text-pri-600 hover:text-pri-800 hover:translate-x-2 transition-[color,transform] duration-300 font-semibold block pb-2 text-sm" href={`tel:${elem.phone}`}>{elem.phone}</a>
                                        </li>
                                        )}
                                    </ul>
                        </div>
                    </div>
                    <hr className="mt-3 border-pri-300 w-full border-t-2 border-dashed" />
                    <div className="flex flex-wrap items-center md:justify-between justify-center bg-pri-25 py-4">
                        <div className="w-full px-4 mx-auto text-center">
                            <div className="text-gray-600 py-1 font-medium tracking-wide">
                                Copyright © {new Date().getFullYear()}. All rights reserved by <Link href='/' className='text-pri-500 hover:text-pri-600 font-semibold' >SCIE NITD</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        )
    }
}
