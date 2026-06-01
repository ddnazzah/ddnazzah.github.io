import Sidebar from "./components/Sidebar";
import Spotlight from "./components/Spotlight";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div id="top" className="relative min-h-screen">
      <Spotlight />

      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:font-semibold focus:text-ink"
      >
        Skip to content
      </a>

      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 md:px-16 lg:flex lg:justify-between lg:gap-16 lg:px-20 xl:px-28">
        <Sidebar />

        <main className="pt-12 lg:w-[58%] lg:py-24">
          <About />
          <Experience />
          <Work />
          <Skills />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}
