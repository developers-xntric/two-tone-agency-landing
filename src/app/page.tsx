import { ContactForm } from "./components/contact-form";
import { Footer } from "./components/footer";
import HeroSection from "./components/hero";
import { RamadanSection } from "./components/ramadan-section";
import { SocialChannelsSection } from "./components/social-channels";
import { SolutionsSection } from "./components/solutions-section";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center font-sans ">
      <HeroSection />
      <RamadanSection />
      <SocialChannelsSection />
      <SolutionsSection />
      <ContactForm />
      <Footer />
    </div>
  );
}
