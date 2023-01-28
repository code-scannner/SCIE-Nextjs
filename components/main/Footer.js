import { Component } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Style from '../../styles/footer/Footer.module.css'
import Socials from '../main/Contact/Socials'
import { AiOutlineCopyright } from 'react-icons/ai'
export default class Footer extends Component {
    contacts = [
        {
            name: "Sanskar Jain",
            phone: "+91-7987926818",
        },
        {
            name: "Saumil Shankar ",
            phone: "+91-8383052920",
        },
    ]
    quickLinks = [
        { text: "About Us", link: "/#about" },
        { text: "Our Team", link: "/team" },
        { text: "Our Startups", link: "/commingsoon" },
        { text: "Our Tieups", link: "/commingsoon" },
    ]
    render() {
        return (
            <footer className={"z-10 mx-auto bg-pri-700/95 pt-20 lg:pt-44 " + Style.roundbg}>
                <div className="container mx-auto text-white" >
                    <div className="flex flex-col sm:flex-row justify-between px-12">
                        {/* Logo and about */}
                        <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
                            <div className="mb-10 w-full text-center">
                                <Link href={"/"} className="mb-0 sm:mb-6 inline-block max-w-[160px] bg-white/80 rounded-full p-3">
                                    <Image src="./assets/images/website/logo-r.png" alt="SCIE Logo" width={200} height={200} className="max-w-full" />
                                </Link>
                                <p className="mb-7 text-center text-pri-200 tracking-wider">
                                    National Institute of Technology Delhi, Plot No. FA7,Zone P1, GT Karnal Road, Delhi, 110036
                                </p>
                            </div>
                        </div>
                        {/* Quick Links */}
                        <div className='flex flex-col-reverse sm:flex-row w-full sm:w-1/2'>

                            <div className="w-full px-4 mt-12 sm:mt-0">
                                <div className="mb-10 w-full text-center sm:text-left">
                                    <h4 className="mb-4 text-xl font-medium tracking-wider">Also See</h4>
                                    <ul>
                                        {this.quickLinks.map(elem => <li key={elem.text}>
                                            <Link href={elem.link} className="mb-2 inline-block leading-loose text-pri-200 hover:text-pri-50 transition-colors">
                                                {elem.text}
                                            </Link>
                                        </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                            {/* Follow us social media */}
                            <div className="w-full px-4 flex flex-col">
                                <div className="mb-10 w-full">
                                    <h4 className="mb-4 font-medium text-xl text-center">Follow Us On</h4>
                                    <div className='relative flex px-3 py-2 bg-pri-100/30 w-fit rounded-lg ring-2 ring-pri-300'>
                                        <Socials row={true} className="space-x-2" />
                                    </div>
                                </div>
                                <div className='space-y-3 text-pri-200 text-center sm:text-left'>
                                    <h3>
                                        scie@nitdelhi.ac.in
                                    </h3>
                                    <h4>
                                        Sanskar Jain <span className='my-1 sm:my-0 hover:text-pri-10 cursor-pointer hover:translate-x-2 inline-block transition-[transform,color]'>+91-7987926818</span>
                                    </h4>
                                    <h4>
                                        Saumil Shankar <span className='my-1 sm:my-0 hover:text-pri-10 cursor-pointer hover:translate-x-2 inline-block transition-[transform,color]' >+91-8383052920</span>
                                    </h4>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap items-center md:justify-between justify-center border-white border-dashed border-t-2 py-4">
                    <div className="px-4 mx-auto">
                        <div className="text-pri-100 flex flex-col sm:flex-row gap-y-1 w-full text-center py-1 font-light tracking-wider justify-center gap-x-2 items-center">
                            <div className='flex gap-x-3' >
                                <span>Copyright</span>
                                <AiOutlineCopyright className='text-xl' />
                            </div>
                            <span>{new Date().getFullYear()} All rights reserved by </span>
                            <Link href='/' className='hover:text-pri-200 font-semibold' >SCIE NITD</Link>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

