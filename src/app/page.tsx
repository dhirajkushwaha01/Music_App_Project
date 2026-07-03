import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonials from "@/components/TestmonialCards";
import Upcomingwebinars from "@/components/Upcomingwebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer"; 
import page from "@/app/courses/page";

export default function Home() {
  return (
    <main className="min-h-screen lbg-black/ [0.96] antialiased bg-grid-white/[0.02]">

      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicSchoolTestimonials />
      <Upcomingwebinars />
      <Instructors />
      <Footer /> 
      
    </main>

  );
}
