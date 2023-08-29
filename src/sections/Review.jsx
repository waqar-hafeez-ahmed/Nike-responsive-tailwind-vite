import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const Review = () => {
  return (
    <section className="bg-gray-100 w-full">
      <div className="max-container mt-20 max-xl:px-20 max-md:px-10 py-20 flex justify-center flex-col">
        <div className="text-center flex flex-col w-full">
          <h3 className="font-palanquin font-bold text-4xl">
            What Our <span className="text-coral-red">Customer </span>
            Say
          </h3>
          <p className="mt-6 mb-8 leading-relaxed text-slate-gray font-montserrat max-w-lg mx-auto text-lg">
            Hear geniune stories from out respectable customers about their exceptional experience with us.
          </p>
        </div>
        <div className="flex flex-1 flex-wrap justify-evenly">{reviews.map((review)=>(
            <div key={review.customerName}><ReviewCard dp={review.imgURL} name={review.customerName} rating={review.rating} feedback={review.feedback}/></div>
        ))}
        </div>
      </div>
    </section>
  );
}

export default Review