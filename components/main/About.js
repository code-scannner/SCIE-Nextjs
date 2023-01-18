import { Component } from 'react'
import OneColorHead from '../typography/OneColorHead'
import Image from 'next/image'

export default class About extends Component {
    render() {
        return (
            <div className='my-12' id='about'>
                <OneColorHead colorInd={2} className='my-4 md:my-8'>ABOUT</OneColorHead>
                <div className='flex w-11/12 md:flex-row items-center flex-col md:w-9/12 mx-auto' >
                    <Image src="/assets/images/website/about.jpg" alt="Startup India Registration" width={500} height={500} className="w-60 h-60 rounded-lg mb-6 md:mb-0" />
                    <div className='px-6 font-medium'>
                        <p>Startup Center for innovation and Entrepreneurship (SCIE),NIT Delhi aims to manifest and promote entrepreneurial spirit among creative and keen minds of India.</p>
                        <br />
                        <p>SCIE at NIT Delhi is a team of enthusiasts entrepreneurs who are committed to provide the needful guidance and resources to the aspiring young entrepreneurs. We are currently working on building a strong network amongst aspiring entrepreneurs, working professionals, angel investors, existing entrepreneurs and industry experts to convert ideas into successful ventures. We conduct various insightful workshops and guidance sessions by various start-ups founders and successful entrepreneurs to promote start-up ecosystem inside as well as outside the campus.</p>
                    </div>
                </div>
            </div>
        )
    }
}
