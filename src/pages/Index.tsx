import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import InstructorsSection from "@/components/InstructorsSection";
import ReviewsSection from "@/components/ReviewsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Проверяем, есть ли якорь в URL
    const hash = location.hash;
    if (hash) {
      // Убираем # из начала
      const targetId = hash.substring(1);
      
      // Небольшая задержка для загрузки компонентов
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          // Плавная прокрутка к элементу
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [location.hash]);

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
