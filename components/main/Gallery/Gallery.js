import { Component } from 'react'
import OneColorHead from '../../typography/OneColorHead'
import Slider from './Slider'

export default class Gallery extends Component {
    render() {
        return (
            <div id="gallery">
                <OneColorHead className="mb-12 tracking-widest" colorInd={[2, 3]}>GALLERY</OneColorHead>
                <Slider />
            </div>
        )
    }
}
