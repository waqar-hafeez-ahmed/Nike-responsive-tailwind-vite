import Button from "../components/Button";

const Newsletter = () => {
  return (
    <div className="max-container mt-20 max-xl:px-20 max-md:px-10 py-20 flex justify-between items-center max-lg:flex-col ">
      <h3 className="font-palanquin font-bold text-4xl max-w-md leading-[65px] max-sm:text-center">
        Sign Up for <span className="text-coral-red">Updates </span>& Newsletter
      </h3>
      <div className="border border-gray-600 rounded-full py-2 max-sm:py-4 px-2 pl-6 max-w-lg w-full flex justify-between max-lg:mt-20">
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="rounded-full"
        />
        <div className="block max-sm:hidden">
          <Button lable="Sign Up" />
        </div>
      </div>
      <div className="max-sm:block hidden mt-4">
        <Button lable="Sign Up" />
      </div>
    </div>
  );
};

export default Newsletter;
