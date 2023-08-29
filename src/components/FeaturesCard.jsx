
const FeaturesCard = ({img, label, sub}) => {
  return (
    <div className="flex flex-col justify-start rounded-xl shadow-2xl px-10 py-16 max-w-md mt-6">
        <div className="p-2.5 rounded-full bg-coral-red max-w-[40px]">
        <img src={img} alt="img" width={24} />
        </div>
        <h2 className="mt-4 font-semibold font-montserrat text-2xl tracking-normal">{label}</h2>
        <p className="text-xl text-slate-gray font-palanquin mt-2">{sub}</p>
        </div>
  )
}

export default FeaturesCard