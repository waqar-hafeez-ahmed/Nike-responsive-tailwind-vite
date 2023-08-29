import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section id="about-us" className="max-container mt-20  max-xl:px-20 max-md:px-10 flex  justify-between items-center max-lg:flex-col">
      <div className="flex max-w-lg">
        <div>
          <h3 className="font-palanquin font-bold text-4xl">
            We Provide You <span className="text-coral-red">Super Quality</span>{" "}
            Shoes
          </h3>
          <p className="mt-6 mb-8 leading-relaxed text-slate-gray font-montserrat ">
            Experience our top-notch quality products Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Explicabo, porro Lorem ipsum dolor sit
            amet consectetur adipisicingamet consectetur adipisicing elit.
            Voluptates, molestiae.
          </p>
          <p className="mt-6 mb-8 leading-relaxed text-slate-gray font-montserrat ">
            Experience our top-notch quality products Lorem products Lorem ipsum
            dolor.
          </p>
          <div className="flex max-sm:justify-center">

          <Button lable="View More"/>
          </div>
        </div>
      </div>
      <div className="sm:padding-x">

      <img src={shoe8} alt="" width={610}/>
      </div>
    </section>
  );
}

export default SuperQuality