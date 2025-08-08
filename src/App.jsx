import Benefits from "./sections/Benefits";
import Collaboration from "./sections/Collaboration";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
// import Pricing from "./sections/Pricing";
// import Roadmap from "./sections/Roadmap";
import Services from "./sections/Services";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";
import Engagement from "./sections/Engagement";

const App = () => {
    return (
        <>
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                <Navbar />
                <Hero />
                <Services />
                <Benefits />
                <Collaboration />
                <Engagement />
                <FAQ />
                <Contact />
                <Footer />
            </div>
        </>
    );
};

export default App;
