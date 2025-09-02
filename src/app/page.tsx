import CTASection from "./components/sections/CTASection";
import Hero from "./components/sections/Hero";
import DelayedLoading from "./components/DelayedLoading";

export default function Home() {
  return (
    <DelayedLoading minDuration={3000}>
      <main>
        <Hero />
        <CTASection />
      </main>
    </DelayedLoading>
  );
}
