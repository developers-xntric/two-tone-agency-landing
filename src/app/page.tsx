import { ContactForm } from "./components/contact-form";
import { Footer } from "./components/footer";
import HeroSection from "./components/hero";
import { RamadanSection } from "./components/ramadan-section";
import ResultsSection from "./components/results-section";
import { SocialChannelsSection } from "./components/social-channels";
import { SolutionsSection } from "./components/solutions-section";
import { TestimonialsSection } from "./components/testimonials-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <HeroSection/>
      <RamadanSection/>
      <SocialChannelsSection/>
      <ResultsSection/>
      <SolutionsSection/>
      <TestimonialsSection />
      <ContactForm/>
      <Footer/>
    </div>
  );
}
