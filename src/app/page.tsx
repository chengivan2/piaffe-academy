import CTASection from "./components/sections/CTASection";
import Hero from "./components/sections/Hero";
import DelayedLoading from "./components/DelayedLoading";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <DelayedLoading minDuration={3600}>
      <main>
        <Hero />
        <CTASection />
      </main>
      <Footer />
    </DelayedLoading>
  );
}
