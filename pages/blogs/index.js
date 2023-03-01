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
          <Card heading="Blog 1" btn="true" src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          link="../commingsoon"
          />
          <Card heading="Blog 2" btn="true" src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
          <Card heading="Blog 3" btn="true" src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
          <Card heading="Blog 4" btn="true" src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
          <Card heading="Blog 5" btn="true" src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
          <Card heading="Blog 6" btn="true" src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
        </div>
        <div className="h-[34vh] relative flex justify-center items-center text-white/95 mx-10 my-4 mt-16">
          <MainHeading className="relative z-30 mt-4 text-3xl sm:text-6xl md:text-7xl">
            News Articles
          </MainHeading>
          <TopImage
            gradient={true}
            gradientHeight="2rem"
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            imgStyle={{ filter: "saturate(1)" }}
          />
        </div>
        <div className='grid grid-cols-3 ml-20'>
          <Card heading="National Startup Day" btn="true" src="https://inc42.com/wp-content/uploads/2023/01/Weekly-NL-img4.png"
          content="Seven years ago on January 16, 2016, the Indian startup ecosystem finally got what it wanted from the Indian government — a big policy push in the name of Startup India to take India’s tech economy to the next stage. Today..."
          link="https://inc42.com/features/national-startup-day-a-day-for-new-india/"
          />
          <Card heading="Startup India Seed Fund Scheme" btn="true" src="https://img.etimg.com/thumb/msid-96788215,width-650,height-488,imgsize-4570,,resizemode-75/startupfund.jpg"
          content="The Department for Promotion of Industry and Internal Trade (DPIIT) is in the process of undertaking a third party assessment of Startup India Seed Fund Scheme to see its impact on the ground...."
          link="https://economictimes.indiatimes.com/tech/startups/dpiit-to-undertake-third-party-assessment-of-startup-india-seed-fund-scheme/articleshow/96788647.cms"
          />
          <Card heading="Angel Tax" btn="true" src="https://img.etimg.com/thumb/msid-98124973,width-650,height-488,imgsize-1718314,,resizemode-75/angel-tax.jpg"
          content="The 'angel tax' provision in the Finance Bill will not impact startups in India, a senior government official said on Tuesday.

          Startups registered with the Department for Promotion of Industry and Internal Trade do not come under the purview..."
          link="https://economictimes.indiatimes.com/tech/startups/angel-tax-provisions-in-finance-bill-will-not-impact-startups-dpiit-secretary/articleshow/98124743.cms"
          />
        </div>
        <div className="grid grid-cols-3 ml-20">
          <Card
          heading="What is a startup?"
          btn="true"
          src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/03/startup.jpg"
          content="Startups are businesses that want to disrupt industries and change the world—and do it all at scale. Startup founders dream of giving society something it needs but hasn’t created yet—generating eye-popping valuations that lead to an initial public offering (IPO) and an astronomical return on investment..."
          link="https://www.forbes.com/advisor/business/what-is-a-startup/"
          ></Card>
          <Card
          heading="The Four Cringe-Worthy Mistakes"
          btn="true"
          src="https://assets.proof.pub/2056/firstround/vI698PgtTvOyZ0Nnz2yz_Amanda-Richardson_049RT.jpg"
          content="Richardson points out four of these approaches that data teams industry-wide should watch out for, and how leaders can break from the pack to better serve their strategic goals. Specifically... "
          link="https://review.firstround.com/the-four-cringe-worthy-mistakes-too-many-startups-make-with-data"
          ></Card>
          <Card
          heading="40 Startup Ideas"
          btn="true"
          src="https://www.nerdwallet.com/assets/blog/wp-content/uploads/2021/04/GettyImages-6584361081-1920x1152.jpg"
          content="Coming up with brilliant startup ideas may feel tricky to aspiring entrepreneurs, especially when it may seem that everyone’s already swooped up every good idea for a business. Still, it’s entirely possible to become successful by improving on existing products or putting..."
          link="https://www.nerdwallet.com/article/small-business/small-business-startup-ideas"
          ></Card>
        </div>
      </div>
    )
  }
}
