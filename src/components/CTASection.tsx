import { MessageCircle, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const CTASection = () => {
  const { toast } = useToast();

  const handleConsultationClick = () => {
    window.open('https://t.me/emitattoo', '_blank');
  };

  const handleTelegramClick = () => {
    window.open('https://t.me/emitattoo', '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:emily_robot@proton.me', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-pixel text-pixel mb-6">
            🚀 НАЧНИТЕ СЕГОДНЯ
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Запишитесь на бесплатную консультацию и выберите подходящий курс
          </p>
          <div className="mt-4 font-pixel text-xs text-accent">
            ИНДИВИДУАЛЬНЫЙ ПОДБОР КУРСА • ПЕРСОНАЛЬНЫЙ ПЛАН • ГЕЙМИФИКАЦИЯ • ПРОДВИЖЕНИЕ
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Free Consultation */}
          <Card className="geometric-3d card-3d hover-3d">
            <CardHeader>
              <CardTitle className="text-2xl">Бесплатная консультация</CardTitle>
              <CardDescription className="text-lg">
                Обсудите свои цели, уровень подготовки и выберите оптимальный формат обучения
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Знакомство с преподавателем</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Оценка вашего уровня</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Подбор программы</span>
                </li>
              </ul>
              <Button className="w-full btn-3d btn-pixel-primary font-pixel text-xs" size="lg" onClick={handleConsultationClick}>
                🤖 ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ
              </Button>
            </CardContent>
          </Card>

          {/* Contact Methods */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">
                Или свяжитесь с нами любым удобным способом
              </h3>
            </div>

            <Card className="geometric-3d card-3d hover-3d">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center border-2 border-primary/30">
                    <MessageCircle className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-lg">Telegram</div>
                    <div className="text-sm text-muted-foreground">
                      Быстрые ответы и консультации
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="lg" className="w-full btn-3d btn-pixel-secondary font-pixel text-sm px-6 py-3" onClick={handleTelegramClick}>
                  НАПИСАТЬ
                </Button>
              </CardContent>
            </Card>

            <Card className="geometric-3d card-3d hover-3d">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center border-2 border-primary/30">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-lg">Email</div>
                    <div className="text-sm text-muted-foreground">
                      Подробные консультации и документы
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="lg" className="w-full btn-3d btn-pixel-secondary font-pixel text-sm px-6 py-3" onClick={handleEmailClick}>
                  ОТПРАВИТЬ
                </Button>
              </CardContent>
            </Card>

            <Card className="geometric-3d card-3d hover-3d cursor-pointer" onClick={handleTelegramClick}>
              <CardContent className="flex items-center space-x-4 p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center border-2 border-primary/30">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-lg">Поддержка 24/7</div>
                  <div className="text-sm text-muted-foreground">
                    Наша команда готова ответить на все ваши вопросы в любое время
                  </div>
                  <div className="text-xs text-primary font-pixel mt-1">
                    Telegram: @emitattoo
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;