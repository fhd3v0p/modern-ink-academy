import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import InstructorsSection from "@/components/InstructorsSection";
import ReviewsSection from "@/components/ReviewsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CoursesSection />
      <InstructorsSection />
      <ReviewsSection />
      <CTASection />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
