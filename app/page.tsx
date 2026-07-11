import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Summary from "@/components/Summary";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="site">
      <Nav />
      <main>
        <Hero />
        <Summary />
        <Experience />
        <Work />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
