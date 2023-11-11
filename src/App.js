import { Adoption, Footer, Hero, Newsletter, Pets, Services } from "./sections";


function App() {
  return (
    <div className="max-w-[1440px] mx-auto overflow-hidden">
      <Hero />
      <Pets />
      <Services />
      <Adoption />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
