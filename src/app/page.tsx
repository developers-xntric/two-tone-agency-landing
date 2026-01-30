import { ContactForm } from "./components/contact-form";
import { Footer } from "./components/footer";
import HeroSection from "./components/hero";
import { RamadanSection } from "./components/ramadan-section";
import ResultsSection from "./components/results-section";
import { SocialChannelsSection } from "./components/social-channels";
import { SolutionsSection } from "./components/solutions-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-black
    ">
      <HeroSection/>
      <RamadanSection/>
      <SocialChannelsSection/>
      <ResultsSection/>
      <SolutionsSection/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}
