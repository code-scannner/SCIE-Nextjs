import { Component } from 'react'
import CommingSoon from '../../components/special/CommingSoon'
import TopImage from "../../components/special/TopImage";
import MainHeading from "../../components/typography/MainHeading";
import Card from "../../components/main/blogs/card"

export default class index extends Component {
  render() {
    return (
      <div>
        <div className="h-[34vh] relative flex justify-center items-center text-white/95">
          <MainHeading className="relative z-30 mt-4 text-3xl sm:text-6xl md:text-7xl">
            Blogs
          </MainHeading>
          <TopImage
            gradient={true}
            gradientHeight="7rem"
            src="https://images.unsplash.com/photo-1516414447565-b14be0adf13e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmxvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            imgStyle={{ filter: "saturate(1)" }}
          />
        </div>
        <div className='grid grid-cols-3 ml-20'>
          <Card heading="Blog 1" src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
          <Card heading="Blog 2" src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
          <Card heading="Blog 3" src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
          <Card heading="Blog 4" src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
          <Card heading="Blog 5" src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
          <Card heading="Blog 6" src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
        </div>
        <div className="h-[34vh] relative flex justify-center items-center text-white/95 mx-10 my-4 mt-16">
          <MainHeading className="relative z-30 mt-4 text-3xl sm:text-6xl md:text-7xl">
            News Articles
          </MainHeading>
          <TopImage
            gradient={true}
            gradientHeight="2rem"
            src="https://images.unsplash.com/photo-1516414447565-b14be0adf13e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmxvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            imgStyle={{ filter: "saturate(1)" }}
          />
        </div>
        <div className='grid grid-cols-3 ml-20'>
          <Card heading="Article 1" src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
          <Card heading="Article 2" src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
          <Card heading="Article 3" src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
        </div>
      </div>
    )
  }
}
