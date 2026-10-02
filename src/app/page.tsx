import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonials from "@/components/TestmonialCards";
import Upcomingwebinars from "@/components/Upcomingwebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/96 antialiased bg-grid-white/2">

      <HeroSection />

        <FeaturedCourses />
     
        <WhyChooseUs />
     

      <ScrollReveal>
        <MusicSchoolTestimonials />
      </ScrollReveal>

      <ScrollReveal>
        <Upcomingwebinars />
      </ScrollReveal>

      <ScrollReveal>
        <Instructors />
      </ScrollReveal>



    </main>

  );
}
