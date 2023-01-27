import { Component } from 'react'
import Slide from './Slide'
import { Carousel } from "react-responsive-carousel"
export default class Slider extends Component {
    render() {
        return (
            <div className='container mx-auto w-11/12'>
                <Carousel
                    autoPlay={true}
                    interval={3000}
                    showThumbs={false}
                    infiniteLoop={true}
                    
                    swipeable={true}
                    // TODO use custom arrows
                    showStatus={false}
                    stopOnHover={false}
                    transitionTime={700}
                >
                    <Slide src="78.jpg" />
                    <Slide src="102.jpg" />
                    <Slide src="163.jpg" />
                    <Slide src="164.jpg" />
                    <Slide src="165.jpg" />
                    <Slide src="166.jpg" />
                    <Slide src="167.jpg" />
                    <Slide src="168.jpg" />
                </Carousel>

            </div>
        )
    }
}
