import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import founderImage from "./assets/images/image-founder.webp";
import bgPattern2 from "./assets/images/bg-pattern-3.svg";
import Features from "./components/Features";
import Footer from "./components/Footer";
import CTA from "./components/CTA";
function App() {
  const features = [
    {
      title: "Actionable insights",
      content:
        "Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.",
    },
    {
      title: "Data-driven decisions",
      content:
        "Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.",
    },
    {
      title: "Always affordable",
      content:
        "Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.",
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features features={features} />
      <CTA
        bgPattern2={bgPattern2}
        founderImage={founderImage}
        content="Hi, I'm Louis Graham, the founder of the company. Book a demo call
          with me to become a beta tester for our app and kickstart your
          company. Apply for access below and I’ll be in touch to schedule a
          call."
      />
      <Footer />
    </div>
  );
}

export default App;
