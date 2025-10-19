import sbtSchoolLogo from "@/assets/Removal-54.png";
import { scrollToCourses } from "@/lib/scrollUtils";

const Footer = () => {
  const courseLinks = [
    "Для начинающих",
    "Для опытных",
    "Procreate",
    "Индивидуальное занятие",
    "Обработка оборудования",
    "Черная графика"
  ];

  const handleCourseClick = (e: React.MouseEvent, link: string) => {
    e.preventDefault();
    if (link === "Для опытных") {
      scrollToCourses("PRO+ Ведение соцсетей");
    } else if (link === "Для начинающих") {
      scrollToCourses("Новичок");
    } else if (link === "Procreate") {
      scrollToCourses("Procreate для тату");
    } else if (link === "Индивидуальное занятие") {
      scrollToCourses("Разовое индивидуальное занятие");
    } else if (link === "Обработка оборудования") {
      scrollToCourses("Обработка оборудования");
    } else if (link === "Черная графика") {
      scrollToCourses("Черная графика");
    } else {
      scrollToCourses();
    }
  };

  const handleTelegramClick = () => {
    window.open('https://t.me/emitattoo', '_blank');
  };

  const contactInfo = [
    "Поддержка 24/7",
    "Бесплатная консультация",
    "Telegram: @emitattoo",
    "Отзывы",
    "Политика конфиденциальности",
    "Оферта"
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
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
            <p className="text-muted-foreground text-sm leading-relaxed">
              Онлайн школа татуировок SBT с современным подходом к обучению. 
              Освойте профессию мечты с ведущими мастерами индустрии.
            </p>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-bold mb-4">Курсы</h3>
            <ul className="space-y-2">
              {courseLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link === "Для опытных" ? "#courses" : "#courses"}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    onClick={(e) => handleCourseClick(e, link)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Контакты</h3>
            <ul className="space-y-2">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <a 
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      if (info === "Политика конфиденциальности") {
                        window.location.href = '/privacy';
                      } else if (info === "Оферта") {
                        window.open('https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/oferta/offer-sbt.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS9vZmVydGEvb2ZmZXItc2J0LnBkZiIsImlhdCI6MTc2MDI5Njk1MCwiZXhwIjoxNzkxODMyOTUwfQ.mfUiIo8wrL_c2LxrK3co_Z_kDAB0wLFJuFq5Wu4fR5I', '_blank');
                      } else if (info === "Отзывы") {
                        const reviewsSection = document.getElementById('reviews');
                        if (reviewsSection) {
                          reviewsSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      } else {
                        handleTelegramClick();
                      }
                    }}
                  >
                    {info}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 SBT (STOP BULLYING TATTOO). Все права защищены.
          </p>
          <div className="mt-4 text-xs text-muted-foreground space-y-1">
            <p className="italic">Данные на сайте не являются публичной офертой и представлены в ознакомительных целях</p>
            <p>Самозанятый Смирнова Елена Сергеевна</p>
            <p>ИНН 602715727933</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;