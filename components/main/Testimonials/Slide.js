import { Component } from 'react'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'
import Image from 'next/image'
export default class Slide extends Component {
    render() {
        const { name, work, post, pic, words } = this.props
        return (
            <div className='w-full h-full justify-between p-8 flex flex-col gap-y-4 bg-pri-25 rounded-lg border-2 border-solid border-pri-200'>
                {/* Words part starts */}
                <div>
                    <p><ImQuotesLeft className='inline text-pri-600 text-2xl mb-2 mx-2 font-medium' />{words}<ImQuotesRight className='inline text-pri-600 text-2xl mb-2 mx-2' /></p>
                </div>
                <hr className='border border-solid border-pri-200/50' />
                {/* Words part ends */}
                <div className='flex items-center gap-x-6'>
                    <div className='w-24 h-24'>
                        <Image className='shadow-xl rounded-full' src={`./assets/images/testimonials/${pic}`} alt={name} width={100} height={100} />
                    </div>
                    <div className='flex flex-col gap-y-1 text-slate-900'>
                        <h3 className='text-2xl font-bold my-1 text-pri-500'>{name}</h3>
                        <span>{work}</span>
                        <span>{post}</span>
                    </div>
                </div>
            </div>

        )
    }
}
