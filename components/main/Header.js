import { Component } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../utils/Button";
import Dropdown from "../main/header/dropdown";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
export default class Header extends Component {
  headerLinks = [
    { text: "Home", link: "/" },
    { text: "About", link: "/#about" },
    { text: "Events", link: "/events" },
    // { text: "Gallery", link: "/#gallery" },
    // { text: "Blogs", link: "/blogs" },
    // { text: "Sponsors", link: "/#sponsors" },
    // { text: "Incubated StartUps", link: "/commingsoon" },
    // { text: "Incubation Facilties", link: "/commingsoon" },
    // { text: "Facilities", link: "/facilities", submenu: true },
    // { text: "Incubated Startups", link: "/incubatedstartups", submenu: true },
    // { text: "Mentors", link: "/mentor", submenu: true },
    { text: "Collaborations", link: "/tieups" },
    { text: "Team", link: "/team" },
  ];

  state = {
    menu: false,
    darkTheme: false,
  };
  toggleDarkTheme = () => {
    if (window.scrollY > 70) {
      this.setState({ darkTheme: true });
    } else {
      this.setState({ darkTheme: false });
    }
  };
  componentDidMount = () => {
    window.addEventListener("scroll", this.toggleDarkTheme, false);
  };
  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.toggleDarkTheme, false);
  };
  toggleMenu = () =>
    this.setState((state) => ({ ...state, menu: !state.menu }));
  render() {
    return (
      <nav
        className={`${
          this.state.darkTheme ? "bg-pri-50/80 backdrop-blur-2xl" : ""
        } px-2 sm:px-4 py-3 fixed w-full z-50 transition-colors duration-500`}
      >
        <div>
          <Link href="/" className="flex items-center">
            <div
              className={`absolute top-2 ${
                this.state.darkTheme ? "bg-white" : ""
              } p-2 rounded-[100%] transition-colors duration-500`}
            >
              <Image
                src="http://drive.google.com/uc?export=view&id=1hzoN6jk44sIBsRS8EBw4rDsdxBdcyKap"
                alt="SCIE Logo"
                width={120}
                height={120}
                className="w-24 h-20 md:w-32 md:h-28"
              />
            </div>
          </Link>
          <div className="flex justify-end relative">
            <div className="flex md:order-2 items-center gap-x-4 pr-4">
              <Button className="mx-4 md:mx-0 tracking-normal md:tracking-wider ">
                <Link href="/contact">Contact Us</Link>
              </Button>
              {/* Hamburger menu */}
              <button
                onClick={this.toggleMenu}
                type="button"
                className="text-3xl inline-flex items-center text-pri-400 hover:text-pri-500 lg:hidden"
              >
                <GiHamburgerMenu />
              </button>
            </div>
            <div
              className={`lg:items-center items-start justify-between flex lg:w-auto order-1 absolute lg:static top-0 w-60 bg-pri-600/95 lg:bg-transparent rounded-md transition-[right] duration-300 mr-0 lg:mr-4 h-[95vh] lg:h-auto `}
              style={{ right: this.state.menu ? "-0.5rem" : "-17rem" }}
            >
              <ul className="flex flex-col w-full px-4 rounded-lg lg:flex-row lg:space-x-6 space-y-3 lg:space-y-0 mt-0 text-sm font-medium border-0">
                {/* active li link --> <li>
                                    <a href="#" className="block py-2 pl-3 pr-4 text-white bg-pri-700 rounded md:bg-transparent md:text-pri-700 md:p-0">Home</a>
                                </li> */}
                <li className="lg:hidden flex justify-between text-2xl mt-6">
                  <span className="tracking-widest text-xl pl-2 font-bold text-pri-10">
                    SCIE
                  </span>
                  <MdClose
                    className="cursor-pointer text-pri-10 hover:text-pri-100 transition-colors"
                    onClick={this.toggleMenu}
                  />
                </li>
                {/* {this.headerLinks.map((elem) => (
                  <li
                    key={elem.text}
                    onClick={this.toggleMenu}
                    className="border border-transparent lg:border-none border-y-2 border-x-0 py-2 hover:border-pri-300/20 transition-[border-color]"
                  >
                    {elem.submenu ? (
                      <Dropdown />
                    ) : (
                      <Link
                        href={elem.link}
                        className={`block text-pri-200 ${
                          this.state.darkTheme
                            ? "lg:hover:text-pri-500 lg:text-slate-700"
                            : "lg:hover:text-pri-200 lg:text-white"
                        } rounded hover:text-white px-2 tracking-wide text-base transition-colors`}
                      >
                        {elem.text}
                      </Link>
                    )}
                     

                  </li>
                ))} */}



                {this.headerLinks.map((elem)=>{

                        return (
                            <li
                            key={elem.text}
                            onClick={this.toggleMenu}
                            className="border border-transparent lg:border-none border-y-2 border-x-0 py-2 hover:border-pri-300/20 transition-[border-color]"
                          >
                            
                              <Link
                                href={elem.link}
                                className={`block text-pri-200 ${
                                  this.state.darkTheme
                                    ? "lg:hover:text-pri-500 lg:text-slate-700"
                                    : "lg:hover:text-pri-200 lg:text-white"
                                } rounded hover:text-white px-2 tracking-wide text-base transition-colors`}
                              >
                                {elem.text}
                              </Link>
                            
                             {/* Item */}
        
                          </li>
                        )
                    
                   
                })}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
