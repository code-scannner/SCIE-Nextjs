import { Component } from 'react'
import Image from 'next/image'
export default class TopImage extends Component {
    render() {
        return (
            <>
                <div className='bg-black/30 absolute inset-0 z-20'></div>
                <div className='bg-pri-1000/50 absolute inset-0 z-10'></div>
                {this.props.gradient && <div className='bg-gradient-to-t from-white via-white/50 to-transparent absolute inset-x-0 bottom-0 h-20 z-20'></div>}
                <Image src={this.props.src} fill alt="NIT Delhi, Admin Block" style={{ filter: "saturate(2)", objectFit: 'cover' }} />
            </>
        )
    }
}
