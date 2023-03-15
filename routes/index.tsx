import Header from "../components/Header.tsx";
import Filler from "../components/Filler.tsx";
import Hero from "../islands/Banner.tsx";
import About from "../islands/About.tsx"
import Footer from "../components/Footer.tsx";
import Experience from "../islands/Experience.tsx";
import Skills from "../islands/Skills.tsx";
import Projects from "../islands/Projects.tsx";
import Contact from "../islands/Contact.tsx";
import Testimonials from "../islands/Testimonials.tsx";
export default function Home() {
  console.log("hello from Home Export index.tsx");
  return (
    <div id="home" class="p-8 ">            
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />
      <Filler />
      <Footer />
    </div>
  );
}
