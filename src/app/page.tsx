import { ContactForm } from "./components/contact-form";
import { Footer } from "./components/footer";
import HeroSection from "./components/hero";
import ResultsSection from "./components/results-section";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <HeroSection/>
    </div>
  );
}
