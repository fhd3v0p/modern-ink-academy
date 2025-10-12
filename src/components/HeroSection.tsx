import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import abstractShapes1 from "@/assets/abstract-shapes-1.webp";
import abstractShapes2 from "@/assets/abstract-shapes-2.webp";
import abstractShapes22 from "@/assets/abstract-shapes-22.png";
import abstractShapes221 from "@/assets/abstract-shapes-221.png";
import geometricCollection from "@/assets/geometric-collection-224.png";
import sbtSchoolLogo from "@/assets/Removal-54.png";

const HeroSection = () => {
  const { toast } = useToast();
  const [isLogoAttacking, setIsLogoAttacking] = useState(false);
  const [showAsciiImage, setShowAsciiImage] = useState(false);
  const [showCyberImage, setShowCyberImage] = useState(false);
  const [showBlackGraphicsImage, setShowBlackGraphicsImage] = useState(false);
  const [showGtmInfo, setShowGtmInfo] = useState(false);
  const [showPaymentInfo, setShowPaymentInfo] = useState(false);
  const [gtmCarouselIndex, setGtmCarouselIndex] = useState(0);

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

  const handleLogoClick = () => {
    setIsLogoAttacking(true);
    setTimeout(() => {
      setIsLogoAttacking(false);
    }, 800);
  };

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 abstract-pattern opacity-30"></div>
      
      {/* Abstract graphics - строго ограничены контейнером */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Мобильная версия - меньшие элементы */}
        <div className="absolute top-10 left-2 w-32 h-32 opacity-5 md:hidden">
          <img src={abstractShapes22} alt="" className="w-full h-full object-contain filter invert" />
        </div>
        <div className="absolute top-1/3 right-2 w-32 h-32 opacity-5 md:hidden">
          <img src={abstractShapes221} alt="" className="w-full h-full object-contain filter invert" />
        </div>
        <div className="absolute bottom-10 left-1/4 w-32 h-32 opacity-5 md:hidden">
          <img src={geometricCollection} alt="" className="w-full h-full object-contain filter invert rotate-45" />
        </div>
        <div className="absolute top-1/4 left-1/3 w-32 h-32 opacity-5 md:hidden">
          <img src={abstractShapes22} alt="" className="w-full h-full object-contain filter invert -rotate-12" />
        </div>
        
        {/* Десктопная версия - большие элементы */}
        <div className="absolute top-10 left-5 w-64 h-64 opacity-5 hidden md:block">
          <img src={abstractShapes22} alt="" className="w-full h-full object-contain filter invert" />
        </div>
        <div className="absolute top-1/3 right-5 w-64 h-64 opacity-5 hidden md:block">
          <img src={abstractShapes221} alt="" className="w-full h-full object-contain filter invert" />
        </div>
        <div className="absolute bottom-10 left-1/4 w-64 h-64 opacity-5 hidden md:block">
          <img src={geometricCollection} alt="" className="w-full h-full object-contain filter invert rotate-45" />
        </div>
        <div className="absolute top-1/4 left-1/3 w-64 h-64 opacity-5 hidden md:block">
          <img src={abstractShapes22} alt="" className="w-full h-full object-contain filter invert -rotate-12" />
        </div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 opacity-5 hidden md:block">
          <img src={abstractShapes221} alt="" className="w-full h-full object-contain filter invert rotate-90" />
        </div>
        <div className="absolute top-1/2 left-10 w-64 h-64 opacity-5 hidden md:block">
          <img src={geometricCollection} alt="" className="w-full h-full object-contain filter invert rotate-180" />
        </div>
        <div className="absolute bottom-20 right-10 w-64 h-64 opacity-5 hidden md:block">
          <img src={abstractShapes22} alt="" className="w-full h-full object-contain filter invert -rotate-45" />
        </div>
        <div className="absolute top-20 right-1/3 w-64 h-64 opacity-5 hidden md:block">
          <img src={abstractShapes221} alt="" className="w-full h-full object-contain filter invert rotate-30" />
        </div>
      </div>

      {/* Free flying logos - показываем на всех устройствах */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        {/* Free flying logo 1 */}
        <div className="absolute w-36 h-36 free-fly-1">
          <img 
            src={sbtSchoolLogo} 
            alt="SBT School Logo" 
            className="w-full h-full object-contain filter drop-shadow-lg neon-glow-white"
          />
        </div>
        
        {/* Free flying logo 2 */}
        <div className="absolute w-36 h-36 free-fly-2">
          <img 
            src={sbtSchoolLogo} 
            alt="SBT School Logo" 
            className="w-full h-full object-contain filter drop-shadow-lg neon-glow-white"
          />
        </div>
      </div>

      {/* Orbiting logos around main logo - показываем на всех устройствах */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        {/* Orbiting logos around the main logo */}
        <div className="absolute top-1/5 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
          {/* Logo 3 - Chaotic orbit */}
          <div className="absolute w-36 h-36 chaotic-orbit-3">
            <img 
              src={sbtSchoolLogo} 
              alt="SBT School Logo" 
              className="w-full h-full object-contain filter drop-shadow-lg neon-glow-white"
            />
          </div>
          
          {/* Logo 4 - Chaotic orbit */}
          <div className="absolute w-36 h-36 chaotic-orbit-4">
            <img 
              src={sbtSchoolLogo} 
              alt="SBT School Logo" 
              className="w-full h-full object-contain filter drop-shadow-lg neon-glow-white"
            />
          </div>
          
          {/* Logo 5 - Special orbit under main logo */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="absolute w-36 h-36 chaotic-orbit-5">
              <img 
                src={sbtSchoolLogo} 
                alt="SBT School Logo" 
                className="w-full h-full object-contain filter drop-shadow-lg neon-glow-white"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-32">
        <div className="max-w-4xl mx-auto">
          {/* Logo Section */}
          <div className="mb-8">
            <div className="flex justify-center mb-6">
              <div className={`pixel-float ${isLogoAttacking ? 'logo-attack' : ''}`} onClick={handleLogoClick} style={{cursor: 'pointer'}}>
                <img 
                  src={sbtSchoolLogo} 
                  alt="SBT School - Emo Skull Logo" 
                  className="w-34 h-34 md:w-50 md:h-50 object-contain filter drop-shadow-lg"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-pixel mb-4">
              <span className="text-pixel">SBT SCHOOL</span>
            </h1>
            <div className="text-lg md:text-xl text-secondary font-pixel tracking-wider">
              ИННОВАЦИОННАЯ ОНЛАЙН ШКОЛА ТАТУИРОВКИ
            </div>
          </div>

          {/* Main description */}
          <div className="mb-12">
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Освойте искусство татуировки с помощью передовых технологий обучения. 
              От <span className="text-primary font-pixel cursor-pointer hover:text-secondary transition-colors" onClick={() => setShowAsciiImage(true)}>ASCII tattoo</span> до <span className="text-primary font-pixel cursor-pointer hover:text-secondary transition-colors" onClick={() => setShowCyberImage(true)}>cybersigilism</span> и <span className="text-secondary font-pixel cursor-pointer hover:text-primary transition-colors" onClick={() => setShowBlackGraphicsImage(true)}>black graphics</span>.
            </p>
            <div className="mt-6 font-pixel text-sm text-accent">
              🎮 ИГРОВОЙ ПОДХОД • 🤖 AI АССИСТЕНТ • 🎯 ПРАКТИЧЕСКИЕ НАВЫКИ
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="geometric-3d card-3d p-6 rounded-lg hover-3d pixel-grid">
              <div className="text-3xl font-pixel text-primary mb-2">227+</div>
              <div className="text-muted-foreground font-pixel text-xs">СТУДЕНТОВ</div>
            </div>
            <div className="geometric-3d card-3d p-6 rounded-lg hover-3d pixel-grid">
              <div className="text-3xl font-pixel text-secondary mb-2">8+</div>
              <div className="text-muted-foreground font-pixel text-xs">ЛЕТ ОПЫТА</div>
            </div>
            <div className="geometric-3d card-3d p-6 rounded-lg hover-3d pixel-grid cursor-pointer heartbeat hover:animate-none" onClick={() => setShowPaymentInfo(true)}>
              <div className="text-3xl font-pixel text-accent mb-2">💳</div>
              <div className="text-muted-foreground font-pixel text-xs">РАССРОЧКА</div>
            </div>
            <div className="geometric-3d card-3d p-6 rounded-lg hover-3d pixel-grid ring-2 ring-accent/50 cursor-pointer relative" onClick={() => setShowGtmInfo(true)}>
              <div className="text-2xl font-pixel text-accent mb-2">GTM</div>
              <div className="text-muted-foreground font-pixel text-xs">РАЗМЕЩЕНИЕ - БЕСПЛАТНО!</div>
              <div className="absolute top-2 right-2 w-4 h-4 bg-accent rounded-full flex items-center justify-center">
                <span className="text-xs font-pixel text-background">?</span>
              </div>
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

      {/* ASCII Tattoo Image Dialog */}
      <Dialog open={showAsciiImage} onOpenChange={setShowAsciiImage}>
        <DialogContent className="max-w-[95vw] md:max-w-2xl z-[10000] mx-2 md:mx-auto">
          <DialogHeader>
            <DialogTitle className="font-pixel text-pixel text-xl">
              🎨 ASCII TATTOO
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <div className="bg-muted rounded-lg p-8 text-center">
              <div className="w-full h-64 bg-primary/10 rounded mb-4 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/static/ascii.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9zdGF0aWMvYXNjaWkucG5nIiwiaWF0IjoxNzU5MDgwMjQwLCJleHAiOjE3OTA2MTYyNDB9.0z5gry1MlgCZPNzT2OKZtMEzwtIS9D_5V_-TCYwyMV4"
                  alt="ASCII Tattoo Example"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Пример ASCII tattoo - уникальный стиль татуировки с использованием символов
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Cybersigilism Image Dialog */}
      <Dialog open={showCyberImage} onOpenChange={setShowCyberImage}>
        <DialogContent className="max-w-[95vw] md:max-w-2xl z-[10000] mx-2 md:mx-auto">
          <DialogHeader>
            <DialogTitle className="font-pixel text-pixel text-xl">
              🔮 CYBERSIGILISM
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <div className="bg-muted rounded-lg p-8 text-center">
              <div className="w-full h-64 bg-primary/10 rounded mb-4 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/static/cyber.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9zdGF0aWMvY3liZXIucG5nIiwiaWF0IjoxNzU5MDgwNTExLCJleHAiOjE3OTA2MTY1MTF9.HciFUB2yPYfC0UrJ6GXZsCt0LVLfphKHUXoOYh-fsFc"
                  alt="Cybersigilism Example"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Пример Cybersigilism - современный киберпанк стиль татуировки
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Black Graphics Image Dialog */}
      <Dialog open={showBlackGraphicsImage} onOpenChange={setShowBlackGraphicsImage}>
        <DialogContent className="max-w-[95vw] md:max-w-2xl z-[10000] mx-2 md:mx-auto">
          <DialogHeader>
            <DialogTitle className="font-pixel text-pixel text-xl">
              ⚫ BLACK GRAPHICS
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <div className="bg-muted rounded-lg p-8 text-center">
              <div className="w-full h-64 bg-primary/10 rounded mb-4 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/partfolio/LUCIVIY/foto1.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9wYXJ0Zm9saW8vTFVDSVZJWS9mb3RvMS5qcGciLCJpYXQiOjE3NTkwODA3MTUsImV4cCI6MTc5MDYxNjcxNX0.EyRnQ0bBytOCNVwgsCCORUKGVxI4fio9O6_a9rmNZOM"
                  alt="Black Graphics Example"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Пример Black Graphics - стиль черной графики от LUCIVIY
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* GTM Info Dialog */}
      <Dialog open={showGtmInfo} onOpenChange={setShowGtmInfo}>
        <DialogContent className="max-w-[95vw] md:max-w-3xl max-h-[90vh] overflow-y-auto z-[10000] mx-2 md:mx-auto">
          <DialogHeader>
            <DialogTitle className="font-pixel text-pixel text-2xl">
              🚀 GTM РАЗМЕЩЕНИЕ - БЕСПЛАТНО!
            </DialogTitle>
          </DialogHeader>
          <div className="mt-6 space-y-6">
            {/* Карусель скриншотов GTM */}
            <div className="text-center">
              <div className="text-sm font-pixel text-muted-foreground mb-4">🎬 Демонстрация работы GTM</div>
              
              <div className="relative bg-background/50 border-2 border-accent/30 rounded-lg p-4">
                {/* Изображение */}
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={[
                      "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/GTM/gtm1.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS9HVE0vZ3RtMS5wbmciLCJpYXQiOjE3NjAyODI1NjAsImV4cCI6MTc5MTgxODU2MH0.y6IVvu_ZlVtgem8bYERM_qlQdZMG4Esmy6HwgSkOKak",
                      "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/GTM/gtm2.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS9HVE0vZ3RtMi5wbmciLCJpYXQiOjE3NjAyODI2MDIsImV4cCI6MTc5MTgxODYwMn0.f9aSSAZ0kpT1UlBhhJhe7rgxd8--3WOhUsdNfWxBUHs",
                      "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/GTM/gtm3.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS9HVE0vZ3RtMy5wbmciLCJpYXQiOjE3NjAyODI2MTAsImV4cCI6MTc5MTgxODYxMH0.5y6aSJVIVLYNUEnChc2gOuPdnk5EKUT9NAAb1VL-IlA"
                    ][gtmCarouselIndex]}
                    alt={`GTM Screenshot ${gtmCarouselIndex + 1}`}
                    className="w-full h-auto rounded-lg"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBub3QgZm91bmQ8L3RleHQ+Cjwvc3ZnPg==';
                    }}
                  />
                  
                  {/* Кнопки навигации */}
                  <button
                    onClick={() => setGtmCarouselIndex((prev) => (prev - 1 + 3) % 3)}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background text-foreground rounded-full p-2 transition-all duration-200"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setGtmCarouselIndex((prev) => (prev + 1) % 3)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background text-foreground rounded-full p-2 transition-all duration-200"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                
                {/* Индикаторы */}
                <div className="flex justify-center space-x-2 mt-4">
                  {[0, 1, 2].map((index) => (
                    <button
                      key={index}
                      onClick={() => setGtmCarouselIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === gtmCarouselIndex ? 'bg-accent' : 'bg-muted-foreground/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Продающий блок */}
            <div className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg p-6 border-2 border-accent/30">
              <div className="text-center mb-4">
                <div className="text-4xl font-pixel text-accent mb-2">GTM</div>
                <div className="text-lg font-semibold text-foreground mb-2">Тариф Базовый</div>
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <span className="text-2xl font-pixel text-muted-foreground line-through">1999 ₽</span>
                  <span className="text-3xl font-pixel text-accent font-bold">0 ₽</span>
                </div>
                <div className="text-sm text-muted-foreground bg-accent/10 rounded-lg p-3">
                  🎁 <strong>БОНУС ДЛЯ КАЖДОГО УЧЕНИКА!</strong>
                </div>
              </div>
            </div>

            {/* Что получаете */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6">
              <h3 className="font-pixel text-pixel text-lg mb-4">🎯 ЧТО ВЫ ПОЛУЧАЕТЕ:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Ваш профиль в каталоге мастеров</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Первые модели найдут вас по работам</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Размещение в webApp приложении</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-sm">Профессиональное портфолио</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-sm">Повышение узнаваемости</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-sm">Дополнительный доход</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Как это работает */}
            <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-lg p-6">
              <h3 className="font-pixel text-pixel text-lg mb-4">⚡ КАК ЭТО РАБОТАЕТ:</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xs">1</div>
                  <span className="text-sm">После покупки любого курса ваш профиль автоматически размещается в GTM</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xs">2</div>
                  <span className="text-sm">Клиенты могут найти вас по вашим работам и стилю</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xs">3</div>
                  <span className="text-sm">Получаете первых моделей еще во время обучения</span>
                </div>
              </div>
            </div>
            
            {/* Кнопка Подробнее */}
            <div className="text-center mt-6">
              <Button 
                className="btn-3d btn-pixel-primary font-pixel text-sm px-8 py-3"
                onClick={() => window.open('https://t.me/GTM_ROBOT', '_blank')}
              >
                🤖 ПОДРОБНЕЕ
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Payment Options Modal */}
      <Dialog open={showPaymentInfo} onOpenChange={setShowPaymentInfo}>
        <DialogContent className="max-w-[95vw] md:max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-background to-background/80 border-2 border-primary/40 shadow-xl z-[10000] mx-2 md:mx-auto">
          <DialogHeader>
            <DialogTitle className="text-center mb-6 font-pixel text-pixel text-2xl">
              💳 ОПЛАТА ОБУЧЕНИЯ В РАССРОЧКУ
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Возможность оплаты обучения в рассрочку или частями от 12+ банков
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-background/50 border border-primary/20 rounded-lg p-4">
                  <div className="text-2xl mb-2">🏦</div>
                  <h4 className="font-pixel text-primary mb-2">12+ Банков</h4>
                  <p className="text-sm text-muted-foreground">Широкий выбор банков-партнеров</p>
                </div>
                <div className="bg-background/50 border border-primary/20 rounded-lg p-4">
                  <div className="text-2xl mb-2">📅</div>
                  <h4 className="font-pixel text-primary mb-2">Гибкие сроки</h4>
                  <p className="text-sm text-muted-foreground">От 3 до 24 месяцев рассрочки</p>
                </div>
                <div className="bg-background/50 border border-primary/20 rounded-lg p-4">
                  <div className="text-2xl mb-2">✅</div>
                  <h4 className="font-pixel text-primary mb-2">Без переплат</h4>
                  <p className="text-sm text-muted-foreground">0% переплата при оформлении</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-lg p-4">
                <p className="text-sm font-pixel text-primary mb-2">💡 Как это работает:</p>
                <ul className="text-sm text-muted-foreground space-y-1 text-left max-w-2xl mx-auto">
                  <li>• Выбираете курс и оформляете заявку на рассрочку</li>
                  <li>• Банк одобряет заявку в течение 5-15 минут</li>
                  <li>• Начинаете обучение сразу после одобрения</li>
                  <li>• Платите равными частями без переплат</li>
                </ul>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;