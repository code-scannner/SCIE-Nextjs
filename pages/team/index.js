import { Component } from 'react'
import MainHeading from '../../components/typography/MainHeading'
import TopImage from '../../components/special/TopImage'
import TeamCard from '../../components/main/Team/TeamCard'
import Divider from '../../components/special/Divider'
import Team from '../../data/team.json'
export default class index extends Component {
    render() {
        return (
            <>
                <div className='h-72 relative flex justify-center items-center text-white'>
                    <MainHeading className='relative z-30 mt-16 md:text-7xl text-4xl' subheading="GET TO KNOW THE TEAM">THE TEAM</MainHeading>
                    <TopImage gradient={true} src="./assets/images/website/nitdelhibuilding.jpeg" />
                </div>
                <main className='w-11/12 flex flex-col space-y-12 sm:w-10/12 mx-auto my-8'>
                    <div>
                        <p className='text-3xl sm:text-4xl text-center tracking-wide font-medium text-stone-900'>FACULTY INCHARGE</p>
                        <div className='mx-auto w-fit my-3'>
                            <TeamCard size="lg" {...Team[0]} />
                        </div>
                        <Divider />
                    </div>
                    <div>
                        <p className='text-3xl sm:text-4xl text-center tracking-wide font-medium text-stone-900'>FACULTY COORDINATORS</p>
                        <div className='mx-auto my-8 flex flex-wrap items-baseline justify-center space-x-0 sm:space-x-8'>
                            {Team[1].map((elem, ind) => <TeamCard key={ind} {...elem} />
                            )}
                        </div>
                        <Divider />
                    </div>
                    <div>
                        <p className='text-3xl sm:text-4xl text-center tracking-wide font-medium text-stone-900' style={{ wordBreak: 'break-word' }}>CORE TEAM MEMBERS</p>
                        <div className='mx-auto w-fit my-8 mb-4 flex justify-center items-baseline flex-wrap md:space-x-12'>
                            {Team[2].map((elem, ind) => <TeamCard key={ind} {...elem} size="lg" />
                            )}
                        </div>
                        <Divider />
                    </div>
                    <div>
                        <p className='text-3xl sm:text-4xl text-center tracking-wide font-medium text-stone-900' style={{ wordBreak: 'break-word' }}>TEAM HEADS</p>
                        <div className='mx-auto mb-4 flex flex-wrap justify-center items-baseline space-x-8 space-y-12'>
                            {Team[3].map((elem, ind) => <TeamCard key={ind} {...elem} role="Executive Member" />
                            )}
                        </div>
                        <Divider />
                    </div>
                    <Divider />
                </main>
            </>
        )
    }
}