import FeaturesCard from "../components/FeaturesCard";
import { services } from "../constants";

const Features = () => {
  return (
    <div className="max-container mt-20 max-xl:px-20 max-md:px-10 ">
      <div className="flex justify-center gap-10 items-center flex-wrap">
        {services.map((service) => (
          <div key={service.label}>
            <FeaturesCard img={service.imgURL} label={service.label} sub={service.subtext}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
