import Nav from "./components/Nav";
import Hero from "./sections/Hero";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section>
        <Hero />
      </section>
    </main>
  );
};

export default App;
