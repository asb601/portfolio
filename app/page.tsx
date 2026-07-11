import Masthead from "@/components/Masthead";
import Rail from "@/components/Rail";
import Summary from "@/components/Summary";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="page">
      <Masthead />
      <div className="rack">
        <Rail />
        <div className="field">
          <Summary />
          <Experience />
          <Work />
          <Skills />
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}
