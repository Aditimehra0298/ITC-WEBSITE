import Credentials from "@/components/Credentials";
import HeroSlider from "@/components/HeroSlider";
import HomeExtraSections from "@/components/HomeExtraSections";
import ServicesShowcase from "@/components/ServicesShowcase";
export default function HomePage() {
  return (
    <main>
      <HeroSlider />
      <Credentials />
      <ServicesShowcase />
      <HomeExtraSections />
    </main>
  );
}
