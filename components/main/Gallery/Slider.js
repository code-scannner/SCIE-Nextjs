import { Component } from 'react'
import Slide from './Slide'
import { Carousel } from "react-responsive-carousel"
export default class Slider extends Component {
    photos = Array(20).fill(1).map((elem, ind) => `${ind}.jpg`)
    state = {
        slideper: 0
    }
    componentDidMount = () => {
        this.setState({ slideper: window.innerWidth > 400 ? 100 / 2.6 : 100 })
    }
    render() {
        return (
            <div className='container mx-auto w-10/12 mb-20 sm:mb-28'>
                <Carousel
                    autoPlay={true}
                    interval={3000}
                    showArrows={false}
                    showThumbs={false}
                    showIndicators={false}
                    infiniteLoop={true}
                    centerMode={true}
                    centerSlidePercentage={this.state.slideper}
                    swipeable={true}
                    showStatus={false}
                    stopOnHover={false}
                    transitionTime={700}
                >
                    {
                        this.photos.map((elem, ind) => <Slide key={ind} src={elem} />)
                    }
                </Carousel>

            </div>
        )
    }
}
