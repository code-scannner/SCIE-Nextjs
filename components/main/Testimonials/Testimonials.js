import OneColorHead from "../../typography/OneColorHead"
import Slide from "./Slide"
import ttmonials from "../../../data/testimonials.json"
export default function Testimonials() {
  return (
    <div className="my-12">
      <OneColorHead colorInd={[3, 6]} className="my-8">TESTIMONIALS</OneColorHead>
      <div className="w-9/12 flex justify-around items-stretch flex-wrap gap-y-8 mx-auto">
        
          {ttmonials.map(elem => (
          <div className="w-[480px]" key={elem.name}>
          <Slide
            
            {...elem}
          />
          </div>
          ))}
      </div>
    </div>
  )
}
