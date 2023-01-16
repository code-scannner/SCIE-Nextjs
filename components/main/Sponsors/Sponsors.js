import { Component } from 'react'
import SPONSORS from '../../../data/sponsors.json'
import OneColorHead from '../../typography/OneColorHead'
import Slide from './Slide'
import Slider from 'react-slick'

export default class Sponsors extends Component {
  render() {
    return (
      <div className='my-24'>
        <OneColorHead colorInd={[0, 4, 7]} className="my-8" >SPONSORS</OneColorHead>
        <div className='w-11/12 mx-auto'>
          <Slider
            infinite={true}
            speed={2000}
            autoplay={true}
            autoplaySpeed={1000}
            cssEase="linear"
            slidesToShow={4}
            slidesToScroll={3}
            swipeToSlide={true}
            responsive={[
              {
                breakpoint: 1280,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                }
              },
              {
                breakpoint: 720,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerPadding: 1,
                }
              }
            ]}
          >
            {SPONSORS.map(elem => <Slide key={elem.name} {...elem} />
            )}
          </Slider>
        </div>
      </div>
    )
  }
}
