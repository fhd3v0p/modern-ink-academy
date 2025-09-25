import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import abstractShapes1 from "@/assets/abstract-shapes-1.webp";
import abstractShapes2 from "@/assets/abstract-shapes-2.webp";
import sbtRobotLogo from "@/assets/sbt-robot-logo.jpeg";

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
          {/* Logo Section */}
          <div className="mb-8">
            <div className="flex justify-center mb-6">
              <div className="pixel-float">
                <img 
                  src={sbtRobotLogo} 
                  alt="SBT Robot - Pixel Art Logo" 
                  className="w-32 h-32 md:w-48 md:h-48 object-contain filter drop-shadow-lg"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-pixel mb-4">
              <span className="text-pixel">SBT ROBOT</span>
            </h1>
            <div className="text-lg md:text-xl text-secondary font-pixel tracking-wider">
              ИННОВАЦИОННАЯ ОНЛАЙН ШКОЛА ТАТУИРОВКИ
            </div>
          </div>

          {/* Main description */}
          <div className="mb-12">
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Освойте искусство татуировки с помощью передовых технологий обучения. 
              От пиксельной графики до <span className="text-primary font-pixel">cybersigilism</span> и <span className="text-secondary font-pixel">black graphics</span>.
            </p>
            <div className="mt-6 font-pixel text-sm text-accent">
              🎮 ИГРОВОЙ ПОДХОД • 🤖 AI АССИСТЕНТ • 🎯 ПРАКТИЧЕСКИЕ НАВЫКИ
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="geometric-3d card-3d p-6 rounded-lg hover-3d pixel-grid">
              <div className="text-3xl font-pixel text-primary mb-2">500+</div>
              <div className="text-muted-foreground font-pixel text-xs">СТУДЕНТОВ</div>
            </div>
            <div className="geometric-3d card-3d p-6 rounded-lg hover-3d pixel-grid">
              <div className="text-3xl font-pixel text-secondary mb-2">8+</div>
              <div className="text-muted-foreground font-pixel text-xs">ЛЕТ ОПЫТА</div>
            </div>
            <div className="geometric-3d card-3d p-6 rounded-lg hover-3d pixel-grid">
              <div className="text-3xl font-pixel text-accent mb-2">24/7</div>
              <div className="text-muted-foreground font-pixel text-xs">AI ПОДДЕРЖКА</div>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="btn-3d btn-pixel-primary font-pixel text-sm px-8 py-6"
            onClick={handleStartLearning}
          >
            🎮 НАЧАТЬ ОБУЧЕНИЕ
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;