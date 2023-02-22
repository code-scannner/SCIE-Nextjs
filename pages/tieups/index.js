import Image from "next/image";
import { Component } from "react";
import TopImage from "../../components/special/TopImage";
import MainHeading from "../../components/typography/MainHeading";
import Card from "../../components/main/blogs/card"


export default class index extends Component {
  render() {
    return (
      <div>
        <div className="h-[98vh] relative flex justify-center items-center text-white/95">
          <MainHeading className="relative z-30 mt-64 text-3xl sm:text-6xl md:text-7xl">
            Our Tie-Ups
          </MainHeading>
          <TopImage
            gradient={true}
            gradientHeight="7rem"
            src="./assets/images/website/tieuppage.jpg"
            imgStyle={{ filter: "saturate(1)" }}
          />
        </div>
        <div className='grid grid-cols-3 ml-20'>
          <Card heading="Technology Innovation Hub " heading2="IIT Patna" src="https://images.indianexpress.com/2022/08/IIT-Patna.jpg"/>
          <Card heading="Technology Innovation Hub " heading2="IIT Ropar" src="https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2020/07/11133801/maxresdefault2.jpg"/>
          <Card heading="Atal Incubation Center " heading2="IIT Delhi" src="https://home.iitd.ac.in/public/storage/uploads/MedicFibers-Group-Photo_1657169006.jpg"/>
        </div>
      </div>
    );
  }
}
