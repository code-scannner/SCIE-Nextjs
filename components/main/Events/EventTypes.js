import  { Component } from 'react'
import {GiClapperboard} from 'react-icons/gi'
import {BiBus} from 'react-icons/bi'
import {HiChatAlt2} from 'react-icons/hi'
import  {FaLightbulb,FaMountain} from 'react-icons/fa'
import  {RxRocket} from 'react-icons/rx'
import OutlineButton from '../../utils/OulineButton'
import Link from 'next/link'
export default class EventTypes extends Component {
    events = [
        {"name":"E-Summit",icon:<FaMountain/>,"desc":"The flagship event of E-Cell. E - Summit is a 3-day Entrepreneurial fest filled with interactive sessions, guest lecture, informal events, and workshops."},
        {"name":"Ideathon",icon:<FaLightbulb/>,"desc":"The flagship event of E-Cell. E - Summit is a 3-day Entrepreneurial fest filled with interactive sessions, guest lecture, informal events, and workshops."},
        {"name":"Startup Expo",icon:<RxRocket/>,"desc":"The flagship event of E-Cell. E - Summit is a 3-day Entrepreneurial fest filled with interactive sessions, guest lecture, informal events, and workshops."},
        {"name":"Quizzes",icon:<HiChatAlt2/>,"desc":"The flagship event of E-Cell. E - Summit is a 3-day Entrepreneurial fest filled with interactive sessions, guest lecture, informal events, and workshops."},
        {"name":"Movie Nights",icon:<GiClapperboard/>,"desc":"The flagship event of E-Cell. E - Summit is a 3-day Entrepreneurial fest filled with interactive sessions, guest lecture, informal events, and workshops."},
        {"name":"Trips",icon:<BiBus/>,"desc":"The flagship event of E-Cell. E - Summit is a 3-day Entrepreneurial fest filled with interactive sessions, guest lecture, informal events, and workshops."}
    ]
  render() {
    return (
        <div className='max-w-7xl my-6 w-11/12 sm:w-9/12 mx-auto flex justify-center flex-wrap'>
        {this.events.map((elem,ind)=><div key={ind} className="max-w-sm p-4">
            <div className="flex flex-col space-y-4 items-center justify-center border-2 border-solid border-gray-200 rounded p-4 hover:shadow-xl shadow-md transition-all duration-300 hover:-translate-y-3">
                <div className='w-16 sm:w-20 h-16 sm:h-20 flex justify-center items-center bg-pri-500 text-white text-2xl sm:text-4xl rounded-lg my-2'>{elem.icon}</div>
                <div className='text-2xl font-bold text-slate-600'>{elem.name}</div>
                <div className='text-center'>{elem.desc}</div>
                <OutlineButton silent={true} className="rounded-xl" style={{fontSize:".8rem",paddingLeft:".5rem",paddingTop:".4rem",paddingRight:".5rem",paddingBottom:".4rem"}}><Link href="/commingsoon">Read More</Link></OutlineButton>
            </div>
            
        </div>)}
    </div>
    )
  }
}
