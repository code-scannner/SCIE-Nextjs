import { Component } from 'react'
import SPONSORS from '../../../data/sponsors.json'
import OneColorHead from '../../typography/OneColorHead'
import Slide from './Slide'

export default class Sponsors extends Component {
  render() {
    return (
      <div className='my-24'>
        <OneColorHead colorInd={[0, 4, 7]} className="my-8" >SPONSORS</OneColorHead>
        <div className='w-11/12 mx-auto flex flex-wrap justify-evenly gap-y-12'>
            {SPONSORS.map(elem => <Slide key={elem.name} {...elem} />
            )}
        </div>
      </div>
    )
  }
}
