const Button = ({ lable, icon }) => {
  return (
    <button
      type="button "
      className="py-4 flex items-center gap-4 px-8 text-lg rounded-full border-coral-red bg-coral-red text-white font-montserrat"
    >
      {lable}
      <img src={icon} alt="" />
    </button>
  );
};

export default Button;
