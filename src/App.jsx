import Nav from "./components/Nav";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Newsletter from "./sections/Newsletter";
import Products from "./sections/Products";
import Review from "./sections/Review";
import SpecialOffer from "./sections/SpecialOffer";
import SuperQuality from "./sections/SuperQuality";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section>
        <Hero />
      </section>
      <section className="mt-40">
        <Products />
      </section>
      <section>
        <SuperQuality />
      </section>
      <section>
        <Features/>
      </section>
      <section>
        <SpecialOffer/>
      </section>
      <section>
        <Review/>
      </section>
      <section>
        <Newsletter/>
      </section>
      <section><Footer/></section>
    </main>
  );
};

export default App;
