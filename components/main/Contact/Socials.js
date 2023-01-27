import React, { Component } from 'react'
import SocialLinks from '../../../data/contacts.json'
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
export default class Socials extends Component {
    socials = [
        {
            icon:<BsFacebook/> , link: SocialLinks['facebook'].link
        },
        { icon: <AiFillInstagram />, link: SocialLinks['instagram'].link },
        { icon: <AiFillLinkedin />, link: SocialLinks['linkedin'].link }
    ]
    render() {
        return (
            <ul className='flex flex-col space-y-2'>
                {this.socials.map((elem, ind) => <li key={ind} className="text-xl sm:text-3xl text-white ring-1 ring-white hover:text-pri-200 hover:scale-90 transition-[color,transform] rounded-full p-1 sm:p-1.5">
                    <a href={elem.link} target="_blank" rel='noreferrer'>{elem.icon}</a>
                </li>)}
            </ul>
        )
    }
}


