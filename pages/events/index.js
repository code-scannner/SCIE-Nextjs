import { Component } from 'react'
import EventTypes from '../../components/main/Events/EventTypes'
import TopImage from '../../components/special/TopImage'
import MainHeading from '../../components/typography/MainHeading'

export default class index extends Component {
  render() {
    return (
      <>
        <div className='h-72 relative flex justify-center items-center text-white'>
            <MainHeading className='relative z-30 mt-20 text-7xl'>EVENTS</MainHeading>
            <TopImage gradient = {true} src="./assets/images/website/nitdelhibuilding.jpeg" />
        </div>
           <EventTypes/>
        </>
    )
  }
}
