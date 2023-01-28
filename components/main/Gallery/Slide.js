import Image from 'next/image'
import { Component } from 'react'

export default class Slide extends Component {
  render() {
    return (
      <div className='w-auto bg-black mx-3 h-44 sm:rounded-none sm:h-[17rem] relative'>
        <Image
         className='object-contain z-30'
         alt={"NIT Delhi SCIE Events"}
         src={"./assets/images/gallery/events/"+this.props.src}
         fill
        //  TODO for making loading for gallery images
        //  placeholder='blur'
        //  blurDataURL="./assets/images/dummy/loading.gif"
         />
      </div>
    )
  }
}
