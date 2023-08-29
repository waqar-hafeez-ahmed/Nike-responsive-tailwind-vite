const Button = ({ lable, icon, bg }) => {
  return (
    <button
      type="button "
      className={`py-4 flex items-center gap-4 px-8 text-lg rounded-full ${
        bg
          ? " text-slate-gray border-2 border-gray-400"
          : "border-coral-red bg-coral-red  text-white"
      } font-montserrat`}
    >
      {lable}
      {icon && <img src={icon} alt="" />}
    </button>
  );
};

export default Button;
