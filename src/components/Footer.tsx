const Footer = () => {
  const courseLinks = [
    "Для начинающих",
    "Для опытных",
    "Procreate",
    "Соцсети",
    "Стерилизация"
  ];

  const contactInfo = [
    "Поддержка 24/7",
    "Бесплатная консультация",
    "Telegram: @cybertattoo"
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-primary-foreground rotate-45"></div>
              </div>
              <div className="text-xl font-bold">
                <span className="text-gradient emo-glow">SBT</span>
                <div className="text-xs text-muted-foreground">STOP BUILLING TATTOO</div>
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
                    href="#courses" 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
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
                <li key={index} className="text-muted-foreground text-sm">
                  {info}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 SBT (STOP BUILLING TATTOO). Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;