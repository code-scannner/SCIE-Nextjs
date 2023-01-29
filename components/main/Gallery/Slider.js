import { Component } from 'react'
import Slide from './Slide'
import { Carousel } from "react-responsive-carousel"
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'
export default class Slider extends Component {
    photos = Array(20).fill(1).map((elem, ind) => `${ind+1}.jpg`)
    state = {
        slideper: 0,
        currentImageIndex: 0,
    }
    next = () => {
        this.setState(state => {
            return {
                currentImageIndex: state.currentImageIndex + 1,
            };
        });
    };

    prev = () => {
        this.setState(state => {
            return {
                currentImageIndex: state.currentImageIndex - 1,
            };
        });
    };
    componentDidMount = () => {
        this.setState({ slideper: window.innerWidth > 400 ? 100 / 2.6 : 100 })
    }
    render() {
        const {currentImageIndex}  = this.state
        return (
            <div className='container mx-auto w-10/12 mb-20 sm:mb-28'>
                <Carousel
                    selectedItem={currentImageIndex}
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
                <div className="flex justify-center space-x-4 my-12" >
                    <button onClick={this.prev} disabled={currentImageIndex == 0} className="bg-gray-400 hover:bg-gray-500/80 transition-colors disabled:opacity-70 disabled:hover:bg-gray-400 p-3 rounded-full text-xl text-white">
                        <BiLeftArrow />
                    </button>
                    <button onClick={this.next} disabled={currentImageIndex == 19} className="bg-gray-400 hover:bg-gray-500/80 transition-colors disabled:opacity-70 disabled:hover:bg-gray-400 p-3 rounded-full text-xl text-white">
                        <BiRightArrow />
                    </button>
                </div>

            </div>
        )
    }
}
