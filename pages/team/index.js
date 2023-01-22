import { Component } from 'react'
import MainHeading from '../../components/typography/MainHeading'
import TopImage from '../../components/special/TopImage'
import TeamCard from '../../components/main/Team/TeamCard'

export default class index extends Component {
    render() {
        return (
            <>
                <div className='h-72 relative flex justify-center items-center text-white'>
                    <MainHeading className='relative z-30 mt-16' subheading="GET TO KNOW THE TEAM">THE TEAM</MainHeading>
                    <TopImage gradient={true} src="./assets/images/website/nitdelhibuilding.jpeg" />
                </div>
                <main className='w-11/12 flex flex-col space-y-20 sm:w-9/12 mx-auto my-8'>
                    <div>
                        <p className='text-3xl sm:text-4xl text-center tracking-wide font-medium text-stone-900'>UNDER THE GUIDANCE OF</p>
                        <div className='mx-auto w-fit my-4'>
                            <TeamCard size="lg" />
                        </div>
                    </div>
                    <div>
                        <p className='text-3xl sm:text-4xl text-center tracking-wide font-medium text-stone-900'>FACULTY COORDINATORS</p>
                        <div className='mx-auto mt-8 mb-4 flex flex-wrap justify-center space-x-0 sm:space-x-8'>
                            <TeamCard />
                            <TeamCard />
                            <TeamCard />
                            <TeamCard />
                        </div>
                    </div>
                    <div>
                        <p className='text-3xl sm:text-4xl text-center tracking-wide font-medium text-stone-900' style={{wordBreak:'break-word'}}>CORE TEAM MEMBERS</p>
                        <div className='mx-auto w-fit my-8 mb-4 flex flex-wrap space-x-12'>
                            <TeamCard />
                            <TeamCard />
                        </div>
                    </div>
                    <div>
                        <p className='text-3xl sm:text-4xl text-center tracking-wide font-medium text-stone-900' style={{wordBreak:'break-word'}}>TEAM HEADS</p>
                        <div className='mx-auto w-fit my-8 mb-4 flex flex-wrap space-x-12'>
                            <TeamCard />
                            <TeamCard />
                            <TeamCard />
                            <TeamCard />
                            <TeamCard />
                            <TeamCard />
                        </div>
                    </div>
                </main>
            </>
        )
    }
}