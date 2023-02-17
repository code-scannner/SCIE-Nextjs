import Image from "next/image";
import { Component } from "react";
import TopImage from "../../components/special/TopImage";
import MainHeading from "../../components/typography/MainHeading";

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
        <div className="flex flex-row ml-20">
          <div className="flex text-center mx-8">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img className="rounded-t-lg" src="https://images.indianexpress.com/2022/08/IIT-Patna.jpg" alt=""/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">Technology Innovation Hub , IIT Patna</h5>
      <p className="text-gray-700 text-base mb-4">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
              alias veritatis adipisci, error, doloremque, aspernatur laudantium
              dolor iure perspiciatis cumque laboriosam? Soluta officia dolor
              aperiam excepturi quia assumenda, quo alias?
      </p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Read More
</button>    
</div>
  </div>
</div>
<div className="flex text-center mx-8">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img className="rounded-t-lg" src="https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2020/07/11133801/maxresdefault2.jpg" alt=""/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">Technology Innovation Hub , IIT Ropar</h5>
      <p className="text-gray-700 text-base mb-4">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
              alias veritatis adipisci, error, doloremque, aspernatur laudantium
              dolor iure perspiciatis cumque laboriosam? Soluta officia dolor
              aperiam excepturi quia assumenda, quo alias?
      </p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Read More
</button>    
</div>
  </div>
</div>
<div className="flex text-center mx-8">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img className="rounded-t-lg" src="https://home.iitd.ac.in/public/storage/uploads/MedicFibers-Group-Photo_1657169006.jpg" alt=""/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">AIC , IIT Delhi</h5>
      <p className="text-gray-700 text-base mb-4">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
              alias veritatis adipisci, error, doloremque, aspernatur laudantium
              dolor iure perspiciatis cumque laboriosam? Soluta officia dolor
              aperiam excepturi quia assumenda, quo alias?
      </p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Read More
</button>    
</div>
  </div>
</div>
        </div>
      </div>
    );
  }
}
