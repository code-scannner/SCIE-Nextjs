import { Component } from 'react'
import TopImage from '../../components/special/TopImage'
import MainHeading from '../../components/typography/MainHeading'
export default class index extends Component {
    render() {
        return (
            <div>
                <div className='h-[85vh] relative flex justify-center items-center text-white'>
                    <MainHeading className='relative z-30 mt-20 text-3xl sm:text-6xl md:text-7xl'>CONTACT US</MainHeading>
                    <TopImage gradient={true} src="./assets/images/website/contactpagebg.jpeg" />
                </div>
                <div>
                    <iframe width="400" height="300" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3495.7502938351527!2d77.13136727980704!3d28.816514289837784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b1923ada2e3%3A0x1169930518add2fe!2sNational%20Institute%20of%20Technology%20Delhi!5e0!3m2!1sen!2sin!4v1674646220049!5m2!1sen!2sin" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
                <div>
                    <div>Dr Anmol Ratan Saxena</div>
                    <div>Faculty Incharge, Startup Centre For Innovation And Entrepreneurship</div>
                    <div>scie@nitdelhi.ac.in</div>
                    <div>Phone: </div>
                    <div>Address:
                        National Institute of Technology
                        Plot No. FA7,Zone P1,
                        Chandra Hospital
                        GT Karnal Road, Delhi-110036</div>

                </div>
            </div>
        )
    }
}
