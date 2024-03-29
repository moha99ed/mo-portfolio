import Header from "../islands/Header.tsx";
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
  return (
    <div id="home" class="p-8 ">            
      <Header />
      <Hero id="hero"/>
      <About id="about"/>
      <Skills id="skills"/>
      <Experience id="experience"/>
      <Projects id="projects"/>
      <Testimonials id="testimonials"/>
      <Contact id="contact"/>
      <Filler />
      <Footer />
    </div>
  );
}
