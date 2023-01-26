import Image from 'next/image'
import { Component } from 'react'

export default class Slide extends Component {
  render() {
    return (
      <div className='bg-black sm:bg-black/50 w-full h-60 rounded-lg sm:rounded-none sm:h-[36rem]'>
        <Image className='object-contain' alt={this.props.src} src={"assets/images/gallery/events/"+this.props.src} fill />
      </div>
    )
  }
}
