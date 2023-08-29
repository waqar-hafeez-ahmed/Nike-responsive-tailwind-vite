import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <div className="max-container items-center mt-40 mb-20 max-xl:px-20 max-md:px-10  flex max-lg:flex-col-reverse gap-10">
      <div className="max-sm:-mr-10">
        <img src={offer} alt="offer" width={700} />
      </div>
      <div className="max-w-lg">
        <h3 className="font-palanquin font-bold text-4xl">
          <span className="text-coral-red">Special</span> Offer
        </h3>
        <p className="mt-6 mb-8 leading-relaxed text-slate-gray font-montserrat text-xl">
          Experience our top-notch quality products Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Explicabo, porro Lorem ipsum dolor sit
          amet consectetur adipisicingamet consectetur adipisicing elit.
          Voluptates, molestiae.
        </p>
        <p className="mt-6 mb-8 leading-relaxed text-slate-gray font-montserrat text-xl">
          Experience our top-notch quality products Lorem products Lorem ipsum
          dolor.
        </p>
        <div className="flex gap-5 flex-wrap max-sm:justify-center">
          <Button lable="View More" icon={arrowRight} />
          <Button lable="Learn More" bg="true" />
        </div>
      </div>
    </div>
  );
}

export default SpecialOffer