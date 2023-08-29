import { star } from "../assets/icons";

const ReviewCard = ({ dp, name, feedback, rating }) => {
  return (
    <div className="flex flex-col items-center mt-20">
      <div>
        <img src={dp} alt="" width={127} className="rounded-full" />
      </div>
      <p className="text-lg leading-7 text-slate-gray max-w-sm text-center mt-10 font-montserrat tracking-wide">
        {feedback}
      </p>
      <div className="flex gap-2.5 mt-2.5">
        <img src={star} alt="" width={24} />
        <p className=" text-slate-gray text-xl font-montserrat tracking-wide">
          ( {rating} )
        </p>
      </div>
      <h3 className="font-bold text-3xl mt-3  font-palanquin ">{name}</h3>
    </div>
  );
};

export default ReviewCard;
