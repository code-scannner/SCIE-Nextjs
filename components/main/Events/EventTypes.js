import  { Component } from 'react'
import {BsFillBarChartFill} from 'react-icons/bs'
import OutlineButton from '../../utils/OulineButton'
export default class EventTypes extends Component {
    events = [
        {"name":"E-Summit",icon:<BsFillBarChartFill/>,"desc":"The flagship event of E-Cell. E - Summit is a 3-day Entrepreneurial fest filled with interactive sessions, guest lecture, informal events, and workshops."},
        {"name":"Ideathon",icon:<BsFillBarChartFill/>,"desc":"The flagship event of E-Cell. E - Summit is a 3-day Entrepreneurial fest filled with interactive sessions, guest lecture, informal events, and workshops."},
        {"name":"Quizzes",icon:<BsFillBarChartFill/>,"desc":"The flagship event of E-Cell. E - Summit is a 3-day Entrepreneurial fest filled with interactive sessions, guest lecture, informal events, and workshops."},
        {"name":"Movie Nights",icon:<BsFillBarChartFill/>,"desc":"The flagship event of E-Cell. E - Summit is a 3-day Entrepreneurial fest filled with interactive sessions, guest lecture, informal events, and workshops."},
        {"name":"Trips",icon:<BsFillBarChartFill/>,"desc":"The flagship event of E-Cell. E - Summit is a 3-day Entrepreneurial fest filled with interactive sessions, guest lecture, informal events, and workshops."},
        {"name":"Startup Expo",icon:<BsFillBarChartFill/>,"desc":"The flagship event of E-Cell. E - Summit is a 3-day Entrepreneurial fest filled with interactive sessions, guest lecture, informal events, and workshops."}
    ]
  render() {
    return (
        <div className='max-w-7xl my-6 sm:w-9/12 mx-auto flex flex-wrap'>
        {this.events.map((elem,ind)=><div key={ind} className="w-1/3 p-4">
            <div className="flex flex-col space-y-4 items-center justify-center border-2 border-solid border-gray-200 rounded p-4 hover:shadow-xl shadow-md transition-all duration-300 hover:-translate-y-3">
                <div className='w-20 h-20 flex justify-center items-center bg-pri-500 text-white text-4xl rounded-lg my-2'>{elem.icon}</div>
                <div className='text-2xl font-bold text-slate-600'>{elem.name}</div>
                <div className='text-center'>{elem.desc}</div>
                <OutlineButton silent={true} className="rounded-xl" style={{fontSize:".8rem",paddingLeft:".5rem",paddingTop:".4rem",paddingRight:".5rem",paddingBottom:".4rem"}}>Read More</OutlineButton>
            </div>
            
        </div>)}
    </div>
    )
  }
}
