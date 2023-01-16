import { Component } from 'react'
import OneColorHead from '../../typography/OneColorHead'
import Button from '../../utils/Button'
import Input from '../../utils/Input'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { AiOutlineBug } from 'react-icons/ai'
import {MdLocationPin} from 'react-icons/md'
import {AiFillLinkedin} from 'react-icons/ai'
export default class Contact extends Component {
    render() {
        return (
            <div>
                <OneColorHead colorInd={3} className="my-8">CONTACT</OneColorHead>
                <div className="container my-8 px-6 mx-auto">
                    <section className="mb-32 text-gray-800">
                        <div className="relative overflow-hidden bg-no-repeat bg-cover" style={{ backgroundPosition: '50%', backgroundImage: 'url("https://mdbootstrap.com/img/new/textures/full/284.jpg")', height: 300 }}>
                        </div>
                        <div className="container text-gray-800 px-1 md:px-12">
                            <div className="block rounded-lg shadow-lg py-10 md:py-12 px-2 md:px-6" style={{ marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)' }}>
                                <div className="flex flex-wrap">
                                    <div className="grow-0 shrink-0 basis-auto w-full xl:w-5/12 px-3 lg:px-6 mb-12 xl:mb-0">
                                        <form>
                                            <div className="mb-6">
                                                <Input type='input'>Name</Input>
                                            </div>
                                            <div className="mb-6">
                                                <Input type='input'>Email</Input>
                                            </div>
                                            <div className="mb-6">
                                                <Input type='input'>Phone</Input>
                                            </div>
                                            <div className="mb-6">
                                                <Input type='textarea'>Message</Input>
                                            </div>
                                            <Button className='tracking-widest w-full'>SUBMIT</Button>
                                        </form>
                                    </div>
                                    <div className="grow-0 shrink-0 basis-auto w-full xl:w-7/12">
                                        <div className="flex flex-wrap">
                                            {[
                                                {
                                                    head: 'Technical Support',
                                                    email: 'scie@nitdelhi.ac.in',
                                                    phone: '+91 123-456-7890',
                                                    icon: <TfiHeadphoneAlt />
                                                },
                                                {
                                                    head: 'Bug Support',
                                                    email: 'scie@nitdelhi.ac.in',
                                                    phone: '+91 123-456-7890',
                                                    icon: <AiOutlineBug />
                                                }
                                            ].map(elem => <div key={elem.head} className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                                                <div className="flex items-center">
                                                    <div className="shrink-0">
                                                        <div className="p-4 bg-pri-500 text-3xl text-white rounded-md shadow-md w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
                                                            {elem.icon}
                                                        </div>
                                                    </div>
                                                    <div className="grow ml-6">
                                                        <p className="font-bold mb-1">
                                                            {elem.head}
                                                        </p>
                                                        <p className="text-gray-500">
                                                            {elem.email}
                                                        </p>
                                                        <p className="text-gray-500">
                                                            {elem.phone}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>)}
                                        </div>
                                        <div className='flex flex-wrap'>
                                        <div className="mb-12 grow-0 shrink-0 basis-auto w-full px-3 lg:px-6">
                                                <div className="flex items-center">
                                                    <div className="shrink-0">
                                                        <div className="p-4 bg-pri-500 text-3xl text-white rounded-md shadow-md w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
                                                            <MdLocationPin/>
                                                        </div>
                                                    </div>
                                                    <div className="grow ml-6">
                                                        <p className="font-bold mb-1">
                                                            Address
                                                        </p>
                                                        <p className="text-gray-500">
                                                        National Institute of Technology Plot No. FA7,Zone, P1, GT Karnal Road, Delhi, 110036
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='text-black  font-bold text-center text-2xl' >
                                            Follow Us!
                                            <div>
                                                <span>
                                                
                                                </span>
                                                <span>
                                                <AiFillLinkedin className='text-[#0072b1] rounded-sm'/>
                                                </span>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        )
    }
}
