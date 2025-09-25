import { MessageCircle, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const CTASection = () => {
  const { toast } = useToast();

  const handleConsultationClick = () => {
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в течение 24 часов для записи на консультацию",
    });
  };

  const handleTelegramClick = () => {
    toast({
      title: "Telegram",
      description: "Переходим в Telegram для быстрой связи",
    });
    // В реальном приложении здесь был бы переход на t.me/your_bot
  };

  const handleEmailClick = () => {
    toast({
      title: "Email",
      description: "Открываем почтовый клиент для отправки письма",
    });
    // В реальном приложении здесь был бы mailto:
  };

  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-3d mb-4">
            НАЧНИТЕ СЕГОДНЯ
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Запишитесь на бесплатную консультацию и выберите подходящий курс
          </p>
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
              <Button className="w-full btn-3d" size="lg" onClick={handleConsultationClick}>
                Записаться на консультацию
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
              <CardContent className="flex items-center space-x-4 p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Telegram</div>
                  <div className="text-sm text-muted-foreground">
                    Быстрые ответы и консультации
                  </div>
                </div>
                <Button variant="outline" size="sm" className="ml-auto btn-3d" onClick={handleTelegramClick}>
                  Написать
                </Button>
              </CardContent>
            </Card>

            <Card className="geometric-3d card-3d hover-3d">
              <CardContent className="flex items-center space-x-4 p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-sm text-muted-foreground">
                    Подробные консультации и документы
                  </div>
                </div>
                <Button variant="outline" size="sm" className="ml-auto btn-3d" onClick={handleEmailClick}>
                  Отправить
                </Button>
              </CardContent>
            </Card>

            <Card className="geometric-3d card-3d hover-3d">
              <CardContent className="flex items-center space-x-4 p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Поддержка 24/7</div>
                  <div className="text-sm text-muted-foreground">
                    Наша команда готова ответить на все ваши вопросы в любое время
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