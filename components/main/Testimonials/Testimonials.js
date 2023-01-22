import OneColorHead from "../../typography/OneColorHead"
import Slide from "./Slide"
import ttmonials from "../../../data/testimonials.json"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function Testimonials() {
  return (
    <div className="my-12">
      <OneColorHead colorInd={[3, 6]} className="my-8">TESTIMONIALS</OneColorHead>
      <div className="w-9/12 mx-auto">
        <Carousel
          autoPlay={true}
          interval={3000}
          showThumbs={false}
          infiniteLoop={true}
          swipeable={true}
          // TODO use custom arrows
          showArrows={false}
          showStatus={false}
          stopOnHover={false}
          transitionTime={700}
        >
          {ttmonials.map(elem => (
            <div  key={elem.name} className="flex items-stretch justify-center w-full h-full" >
              <div className="max-w-[600px] text-center ">
                <Slide {...elem} />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}
