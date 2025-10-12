import sbtSchoolLogo from "@/assets/Removal-54.png";

const Footer = () => {
  const courseLinks = [
    "Для начинающих",
    "Для опытных",
    "Procreate",
    "Индивидуальное занятие",
    "Обработка оборудования"
  ];

  const handleTelegramClick = () => {
    window.open('https://t.me/emitattoo', '_blank');
  };

  const contactInfo = [
    "Поддержка 24/7",
    "Бесплатная консультация",
    "Telegram: @emitattoo",
    "Политика конфиденциальности"
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
                    onClick={link === "Для опытных" ? (e) => {
                      e.preventDefault();
                      const coursesSection = document.getElementById('courses');
                      if (coursesSection) {
                        coursesSection.scrollIntoView({ behavior: 'smooth' });
                        setTimeout(() => {
                          const proCourse = document.querySelector('[data-course="PRO+ Ведение соцсетей"]');
                          if (proCourse) {
                            proCourse.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            proCourse.style.outline = '2px solid #00ff00';
                            setTimeout(() => { proCourse.style.outline = 'none'; }, 3000);
                          }
                        }, 500);
                      }
                    } : link === "Для начинающих" ? (e) => {
                      e.preventDefault();
                      const coursesSection = document.getElementById('courses');
                      if (coursesSection) {
                        coursesSection.scrollIntoView({ behavior: 'smooth' });
                        setTimeout(() => {
                          const noviceCourse = document.querySelector('[data-course="Новичок"]');
                          if (noviceCourse) {
                            noviceCourse.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            noviceCourse.style.outline = '2px solid #00ff00';
                            setTimeout(() => { noviceCourse.style.outline = 'none'; }, 3000);
                          }
                        }, 500);
                      }
                    } : link === "Procreate" ? (e) => {
                      e.preventDefault();
                      const coursesSection = document.getElementById('courses');
                      if (coursesSection) {
                        coursesSection.scrollIntoView({ behavior: 'smooth' });
                        setTimeout(() => {
                          const procreateCourse = document.querySelector('[data-course="Procreate для тату"]');
                          if (procreateCourse) {
                            procreateCourse.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            procreateCourse.style.outline = '2px solid #00ff00';
                            setTimeout(() => { procreateCourse.style.outline = 'none'; }, 3000);
                          }
                        }, 500);
                      }
                    } : link === "Индивидуальное занятие" ? (e) => {
                      e.preventDefault();
                      const coursesSection = document.getElementById('courses');
                      if (coursesSection) {
                        coursesSection.scrollIntoView({ behavior: 'smooth' });
                        setTimeout(() => {
                          const individualCourse = document.querySelector('[data-course="Разовое индивидуальное занятие"]');
                          if (individualCourse) {
                            individualCourse.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            individualCourse.style.outline = '2px solid #00ff00';
                            setTimeout(() => { individualCourse.style.outline = 'none'; }, 3000);
                          }
                        }, 500);
                      }
                    } : link === "Обработка оборудования" ? (e) => {
                      e.preventDefault();
                      const coursesSection = document.getElementById('courses');
                      if (coursesSection) {
                        coursesSection.scrollIntoView({ behavior: 'smooth' });
                        setTimeout(() => {
                          const equipmentCourse = document.querySelector('[data-course="Обработка оборудования"]');
                          if (equipmentCourse) {
                            equipmentCourse.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            equipmentCourse.style.outline = '2px solid #00ff00';
                            setTimeout(() => { equipmentCourse.style.outline = 'none'; }, 3000);
                          }
                        }, 500);
                      }
                    } : undefined}
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
            <p>ИП Смирнова Елена Сергеевна</p>
            <p>ИНН 602715727933</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;