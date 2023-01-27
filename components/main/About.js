import { Component } from 'react'
import OneColorHead from '../typography/OneColorHead'
import Image from 'next/image'

export default class About extends Component {
    icons = [
        {text:'Diversifiers',image:"1.png"},
        {text:'Organisers',image:"2.png"},
        {text:'Venturous',image:"3.png"},
    ]
    render() {
        return (
            <div className='mb-12 pt-8 sm:pt-24' id='about'>
                <span><OneColorHead colorInd={[8, 9, 10, 11]} className='my-4 md:my-8'>What is SCIE?</OneColorHead></span>
                <div className='w-11/12 md:w-9/12 mx-auto flex flex-col items-center' >
                    <div className='px-6 font-medium'>
                        <p className='text-centertext-sm sm:text-xl text-center sm:text-left text-slate-800'>SCIE at NIT Delhi is a team of enthusiasts entrepreneurs who are committed to provide the needful guidance and resources to the aspiring young entrepreneurs. We are currently working on building a strong network amongst aspiring entrepreneurs, working professionals, angel investors, existing entrepreneurs and industry experts to convert ideas into successful ventures. We conduct various insightful workshops and guidance sessions by various start-ups founders and successful entrepreneurs to promote start-up ecosystem inside as well as outside the campus.</p>
                    </div>
                    <div className='flex flex-col sm:flex-row space-x-0 sm:space-x-4'>
                        {this.icons.map(elem=><div key={elem.text} className='flex flex-col items-center'>
                            <Image src={`./assets/images/about/${elem.image}`} className="w-28 sm:w-44 h-28 sm:h-44" width={200} height={200} alt={elem.text} />
                            <span className='text-slate-500 font-semibold text-xl font-pri'>{elem.text}</span>
                        </div>)}
                    </div>
                </div>
            </div>
        )
    }
}
