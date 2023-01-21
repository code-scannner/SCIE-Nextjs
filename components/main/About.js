import { Component } from 'react'
import OneColorHead from '../typography/OneColorHead'
import Image from 'next/image'

export default class About extends Component {
    render() {
        return (
            <div className='my-12' id='about'>
                <span><OneColorHead colorInd={[8, 9, 10, 11]} className='my-4 md:my-8'>What is SCIE?</OneColorHead></span>
                <div className='w-11/12 md:w-9/12 mx-auto flex flex-col items-center' >
                    <div className='px-6 font-medium'>
                        <p className='text-center text-xl text-slate-800'>SCIE at NIT Delhi is a team of enthusiasts entrepreneurs who are committed to provide the needful guidance and resources to the aspiring young entrepreneurs. We are currently working on building a strong network amongst aspiring entrepreneurs, working professionals, angel investors, existing entrepreneurs and industry experts to convert ideas into successful ventures. We conduct various insightful workshops and guidance sessions by various start-ups founders and successful entrepreneurs to promote start-up ecosystem inside as well as outside the campus.</p>
                    </div>
                    <div className='flex space-x-4'>
                        <div className='flex flex-col items-center'>
                            <Image src={"./assets/images/about/1.png"} width={200} height={200} alt='Diversifiers' />
                            <span className='text-slate-500 font-semibold text-xl font-pri'>Diversifiers</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <Image src={"./assets/images/about/2.png"} width={200} height={200} alt='Organisers' />
                            <span className='text-slate-500 font-semibold text-xl font-pri'>Organisers</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <Image src={"./assets/images/about/3.png"} width={200} height={200} alt='Venturous' />
                            <span className='text-slate-500 font-semibold text-xl font-pri'>Venturous</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
