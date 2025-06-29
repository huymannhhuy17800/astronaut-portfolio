import "./App.css";
import About from "./sections/about";
import Hero from "./sections/hero";
import NavBar from "./sections/navbar";

function App() {
  return (
    <div className="container mx-auto max-w-7xl">
      {/* navbar */}
      <NavBar />
      {/* hero */}
      <Hero />
      {/* about */}
      <About />
      {/* projects */}
      {/* experience */}
      {/* testimonial */}
      {/* contact */}
      {/* footer */}
    </div>
  );
}

export default App;
