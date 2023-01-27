import Image from 'next/image'
import { Component } from 'react'

export default class Slide extends Component {
  render() {
    return (
      <div className='w-auto h-60 rounded-lg sm:rounded-none sm:h-[20rem] relative'>
        <Image className='object-contain z-30' alt={this.props.src} src={"assets/images/gallery/events/"+this.props.src} fill />
      </div>
    )
  }
}
