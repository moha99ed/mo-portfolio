import Header from "../components/Header.tsx";
import Filler from "../components/Filler.tsx";
import Hero from "../islands/Banner.tsx";
import About from "../islands/About.tsx"
import Footer from "../components/Footer.tsx";
export default function Home() {
  console.log("hello from Home Export index.tsx");
  return (
    <div id="home">            
      <Header />
      <Filler />
      <Hero />
      <Filler />
      <About />
      <Footer />
    </div>
  );
}
