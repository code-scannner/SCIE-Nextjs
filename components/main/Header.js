import { Component } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../utils/Button'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'
export default class Header extends Component {
    headerLinks = [
        { text: "Home", link: "/" },
        { text: "About", link: "/#about" },
        { text: "Events", link: "/events" },
        { text: "Gallery", link: "/gallery" },
        { text: "Team", link: "/team" },
        { text: "Sponsors", link: "/sponsors" },
        // { text: "Our Startups", link: "/startups" },
        { text: "Blogs", link: "/blogs" },
    ]
    state = {
        menu: false,
        darkTheme: false,
    }
    toggleDarkTheme = () => {
        if (window.scrollY > 100) {
            this.setState({ darkTheme: true })
        }
        else {
            this.setState({ darkTheme: false })
        }
    }
    componentDidMount = () => {
        window.addEventListener('scroll', this.toggleDarkTheme, false)
    }
    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.toggleDarkTheme, false)
    }
    toggleMenu = () => this.setState(state => ({ ...state, menu: !state.menu }))
    render() {
        return (
            <nav className={`${this.state.darkTheme ? "bg-pri-25" : ""} px-2 sm:px-4 py-3 fixed w-full z-50 transition-colors duration-500`}>
                <div>
                    <Link href="/" className="flex items-center">
                        <div className={`absolute top-2 ${this.state.darkTheme ? "bg-pri-25" : ""} p-2 rounded-[100%] transition-colors duration-500`}>
                            <Image src="/assets/images/website/logo-r.png" alt="SCIE Logo" width={120} height={120} className="w-20 h-16 md:w-36 md:h-32" />
                        </div>
                    </Link>
                    <div className='flex justify-end relative'>
                        <div className="flex md:order-2 items-center gap-x-4 pr-4">
                            <Button className="mx-4 md:mx-0 tracking-normal md:tracking-wider ">Contact Us</Button>
                            {/* Hamburger menu */}
                            <button onClick={this.toggleMenu} type="button" className="text-3xl inline-flex items-center text-pri-400 hover:text-pri-500 lg:hidden">
                                <GiHamburgerMenu />
                            </button>
                        </div>
                        <div className={`lg:items-center items-start justify-between flex lg:w-auto order-1 absolute lg:static top-0 w-60 bg-pri-600/95 lg:bg-transparent rounded-md transition-[right] duration-300 mr-0 lg:mr-4 h-[95vh] lg:h-auto `} style={{ right: this.state.menu ? "-0.5rem" : "-17rem" }}>
                            <ul className="flex flex-col w-full px-4 rounded-lg lg:flex-row lg:space-x-6 space-y-3 lg:space-y-0 mt-0 text-sm font-medium border-0">
                                {/* active li link --> <li>
                                    <a href="#" className="block py-2 pl-3 pr-4 text-white bg-pri-700 rounded md:bg-transparent md:text-pri-700 md:p-0">Home</a>
                                </li> */}
                                <li className='lg:hidden flex justify-between text-2xl mt-6' >
                                    <span className='tracking-widest text-xl pl-2 font-bold text-pri-10' >SCIE</span>
                                    <MdClose className='cursor-pointer text-pri-10 hover:text-pri-100 transition-colors' onClick={this.toggleMenu} />
                                </li>
                                {this.headerLinks.map(elem => <li key={elem.text} className="border border-transparent lg:border-none border-y-2 border-x-0 py-2 hover:border-pri-300/20 transition-[border-color]">
                                    <Link href={elem.link} className={`block text-pri-200 ${this.state.darkTheme?"lg:hover:text-pri-500 lg:text-slate-700":"lg:hover:text-pri-200 lg:text-white"} rounded hover:text-white px-2 tracking-wide text-base transition-colors`}>{elem.text}</Link>
                                </li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
