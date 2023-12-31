import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="#home"
      className="max-container flex justify-center items-center min-h-screen xl:flex-row flex-col p-2 gap-10 w-full"
    >
      <div className=" relative xl:w-2/5 flex flex-col justify-center items-start max-xl:padding-x w-full pt-28 ">
        <p className="text-coral-red text-xl font-montserrat">
          Our Summer Collection
        </p>
        <h1 className="md:text-8xl text-[60px] font-bold mt-8 max-sm:leading-[82px] font-palanquin">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="text-slate-gray text-lg font-montserrat mt-4 lg:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life
        </p>
        <div className="mt-16">
          <Button lable="Shop Now" icon={arrowRight} />
        </div>
        <div className="flex gap-16 mt-14 md:flex-row flex-col">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <h3 className="text-4xl font-bold font-palanquin">
                {stat.value}
              </h3>
              <p className=" text-slate-gray font-montserrat">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-1 relative justify-center w-full items-center xl:min-h-screen bg-primary bg-hero bg-cover bg-center -mt-2 max-xl:py-20 ">
        <img
          src={bigShoeImg}
          alt=""
          width={500}
          className="z-10 relative object-contain"
        />
        <div className="flex absolute xl:-bottom-[10%] lg:-bottom-[15%] max-sm:-bottom-[10%] -bottom-[15%] max-sm:px-6 sm:gap-6 gap-4">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImg={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
