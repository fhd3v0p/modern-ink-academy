import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import InstructorsSection from "@/components/InstructorsSection";
import ReviewsSection from "@/components/ReviewsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  const hasScrolled = useRef(false);

  useEffect(() => {
    // Проверяем, есть ли якорь в URL
    const hash = location.hash;
    if (hash && !hasScrolled.current) {
      // Убираем # из начала
      const targetId = hash.substring(1);
      
      // Сбрасываем флаг при смене якоря
      hasScrolled.current = false;
      
      // Небольшая задержка для загрузки компонентов
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          // Плавная прокрутка к элементу с учетом отступов
          const elementRect = element.getBoundingClientRect();
          const absoluteElementTop = elementRect.top + window.pageYOffset;
          const offset = 80; // Отступ от верха
          
          window.scrollTo({
            top: absoluteElementTop - offset,
            behavior: 'smooth'
          });
          hasScrolled.current = true;
          
          // Дополнительная проверка через 1 секунду
          setTimeout(() => {
            const currentElement = document.getElementById(targetId);
            if (currentElement) {
              const rect = currentElement.getBoundingClientRect();
              // Если элемент не в видимой области, прокручиваем еще раз
              if (rect.top < 80 || rect.bottom > window.innerHeight) {
                const elementRect = currentElement.getBoundingClientRect();
                const absoluteElementTop = elementRect.top + window.pageYOffset;
                const offset = 80;
                
                window.scrollTo({
                  top: absoluteElementTop - offset,
                  behavior: 'smooth'
                });
              }
            }
          }, 1000);
        }
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [location.hash]); // Срабатывает только при изменении hash

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
