import { Component } from 'react'
import TopImage from '../../components/special/TopImage'
import MainHeading from '../../components/typography/MainHeading'

export default class CommingSoon extends Component {
  render() {
    return (
      <>
        <div className='h-60 relative flex justify-center items-center text-white'>
            <MainHeading className='relative z-30 mt-20 text-3xl sm:text-6xl md:text-7xl'>COMMING SOON</MainHeading>
            <TopImage gradient = {true} src="./assets/images/website/nitdelhibuilding.jpeg" />
        </div>
        <div className='my-4 md:my-56'/>
        </>
    )
  }
}