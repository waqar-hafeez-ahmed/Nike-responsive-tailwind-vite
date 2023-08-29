import { products } from "../constants";
import ProductCard from "../components/ProductCard";

const Products = () => {
  return (
    <section id="products" className="max-container flex flex-col justif-between max-xl:px-20 max-md:px-10 ">
      <div className="flex max-w-lg">
        <div>
          <h3 className="font-palanquin font-bold text-4xl">
            Our <span className="text-coral-red">Popular</span> Products
          </h3>
          <p className="mt-6 mb-8 leading-relaxed text-slate-gray font-montserrat ">
            Experience our top-notch quality products Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Explicabo, porro!
          </p>
        </div>
      </div>
      <div className="flex flex-1 justify-between md:gap-4 md:flex-row flex-col items-center">
        {products.map((product) => (
          <div key={product.name}>
            <ProductCard imgURL={product.imgURL} name={product.name} price={product.price}/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
