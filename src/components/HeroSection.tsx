import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import abstractShapes1 from "@/assets/abstract-shapes-1.webp";
import abstractShapes2 from "@/assets/abstract-shapes-2.webp";

const HeroSection = () => {
  const { toast } = useToast();

  const handleStartLearning = () => {
    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      toast({
        title: "Добро пожаловать в SBT!",
        description: "Скоро здесь появятся наши курсы по татуировке",
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 abstract-pattern opacity-30"></div>
      
      {/* Abstract graphics */}
      <div className="absolute top-20 left-10 w-32 h-32 opacity-10">
        <img src={abstractShapes1} alt="" className="w-full h-full object-contain filter invert" />
      </div>
      <div className="absolute bottom-20 right-10 w-40 h-40 opacity-10">
        <img src={abstractShapes2} alt="" className="w-full h-full object-contain filter invert" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-2">
              <span className="text-3d">SBT</span>
            </h1>
            <div className="text-2xl md:text-3xl text-muted-foreground font-light tracking-[0.3em]">
              STOP BUILLING TATTOO
            </div>
          </div>

          {/* Main description */}
          <div className="mb-12">
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Освойте искусство татуировки онлайн с ведущими мастерами. 
              От основ до продвинутых техний в стиле <span className="text-primary">cybersigilism</span> и <span className="text-primary">black graphics</span>.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="geometric-3d card-3d p-6 rounded-lg hover-3d">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Выпускников</div>
            </div>
            <div className="geometric-3d card-3d p-6 rounded-lg hover-3d">
              <div className="text-4xl font-bold text-primary mb-2">8+</div>
              <div className="text-muted-foreground">Лет опыта</div>
            </div>
            <div className="geometric-3d card-3d p-6 rounded-lg hover-3d">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Поддержка</div>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="btn-3d text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={handleStartLearning}
          >
            НАЧАТЬ ОБУЧЕНИЕ
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;