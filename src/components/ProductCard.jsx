import { star } from "../assets/icons";

const ProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="mb-8 flex flex-col max-md:items-center max-md:text-center">
      <img src={imgURL} alt="" />
      <div className="flex mt-4 gap-2">
        <img src={star} alt="rating" width={24} />
        <p className="text-xl">(4.5)</p>
      </div>
      <h3 className="mt-2 font-medium text-xl tracking-normal">{name}</h3>
      <p className="text-coral-red font-semibold text-xl mt-2 font-montserrat">{price}</p>
    </div>
  );
};

export default ProductCard;
