import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import sbtSchoolLogo from "@/assets/Removal-54.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "ГЛАВНАЯ", href: "/#hero" },
    { name: "КУРСЫ", href: "/#courses" },
    { name: "ПРЕПОДАВАТЕЛИ", href: "/#instructors" },
    { name: "ОТЗЫВЫ", href: "/#reviews" },
    { name: "КОНТАКТЫ", href: "/#contact" },
    { name: "ОФЕРТА", href: "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/oferta/offer-sbt.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS9vZmVydGEvb2ZmZXItc2J0LnBkZiIsImlhdCI6MTc2MDI5Njk1MCwiZXhwIjoxNzkxODMyOTUwfQ.mfUiIo8wrL_c2LxrK3co_Z_kDAB0wLFJuFq5Wu4fR5I" }
  ];

  const courseLinks = [
    "Для начинающих",
    "Для опытных", 
    "Procreate",
    "Индивидуальное занятие",
    "Обработка оборудования"
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <img 
              src={sbtSchoolLogo} 
alt="SBT School - Emo Skull Logo" 
              className="w-10 h-10 object-contain"
            />
            <div className="text-xl font-bold">
              <span className="text-gradient emo-glow">SBT SCHOOL</span>
              <div className="text-xs text-muted-foreground">STOP BULLYING TATTOO</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium tracking-wider"
                  onClick={item.name === "ОФЕРТА" ? (e) => {
                    e.preventDefault();
                    window.open(item.href, '_blank');
                  } : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="btn-pixel-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium tracking-wider"
                  onClick={item.name === "ОФЕРТА" ? (e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    window.open(item.href, '_blank');
                  } : () => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Course Links */}
              <div className="border-t border-border pt-2 mt-2">
                <div className="px-3 py-2 text-xs font-bold text-primary uppercase tracking-wider">КУРСЫ</div>
                {courseLinks.map((link, index) => (
                  <a
                    key={index}
                    href="/#courses"
                    className="block px-6 py-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      // Переходим на главную страницу с якорем на курсы
                      window.location.href = '/#courses';
                    }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;