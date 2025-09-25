import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import geometricCollection from "@/assets/geometric-collection.webp";

const CoursesSection = () => {
  const mainCourses = [
    {
      title: "Новичок",
      subtitle: "Курс для начинающих",
      price: "69 990 ₽",
      duration: "1-2 месяца",
      badge: "ПОПУЛЯРНЫЙ",
      description: "Полный курс от основ до первой работы. Теория, практика, оборудование и создание портфолио.",
      features: [
        "Теория татуировки и философия",
        "Выбор и настройка оборудования",
        "Работа с кожей и пигментами",
        "Безопасность и стерилизация",
        "Практика на искусственной коже",
        "Создание эскизов",
        "Развитие соцсетей"
      ],
      bonus: "Поддержка 24/7"
    },
    {
      title: "Продвинутый",
      subtitle: "Курс для опытных",
      price: "29 990 ₽",
      duration: "3-4 недели",
      description: "Продвинутые техники и продвижение в социальных сетях для действующих мастеров.",
      features: [
        "Сложные техники татуировки",
        "Продвижение в соцсетях",
        "Контент-план и стратегии",
        "Reels и TikTok",
        "Работа с клиентами",
        "Увеличение прибыли"
      ],
      bonus: "Персональные консультации"
    },
    {
      title: "Procreate для тату",
      subtitle: "Любой",
      price: "14 990 ₽",
      duration: "2-3 недели",
      description: "Изучите цифровое рисование эскизов в Procreate от DAGON.",
      features: [
        "Основы Procreate",
        "Создание эскизов",
        "Цифровые техники",
        "Стилизация рисунков",
        "Технические задания"
      ],
      bonus: "Портфолио в Procreate"
    }
  ];

  const nicheCourses = [
    {
      title: "Ведение соцсетей",
      instructors: "От EMI и BLOODIVAMP",
      price: "25 000",
      duration: "3 недели",
      team: "EMI & VLADA"
    },
    {
      title: "Обработка оборудования",
      instructors: "Лекция по стерилизации",
      price: "По запросу",
      duration: "4-5 часов",
      team: "VLADA"
    },
    {
      title: "Черная графика",
      instructors: "От EMI и Вики",
      price: "По запросу",
      duration: "По программе",
      team: "EMI & VIKA"
    }
  ];

  return (
    <section id="courses" className="py-20 relative">
      {/* Background graphic */}
      <div className="absolute top-20 right-0 w-64 h-64 opacity-5">
        <img src={geometricCollection} alt="" className="w-full h-full object-contain filter invert" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            ПРОГРАММЫ ОБУЧЕНИЯ
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Выберите подходящий курс и начните свой путь в мире профессиональной татуировки
          </p>
        </div>

        {/* Main Courses */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {mainCourses.map((course, index) => (
            <Card key={index} className={`geometric-border hover-lift ${index === 0 ? 'ring-2 ring-primary/50' : ''}`}>
              <CardHeader>
                {course.badge && (
                  <Badge className="self-start mb-2 bg-primary text-primary-foreground">
                    {course.badge}
                  </Badge>
                )}
                <CardTitle className="text-2xl">{course.title}</CardTitle>
                <CardDescription className="text-lg">{course.subtitle}</CardDescription>
                <div className="flex items-end space-x-2">
                  <span className="text-3xl font-bold text-primary">{course.price}</span>
                </div>
                <div className="text-muted-foreground">{course.duration}</div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{course.description}</p>
                <ul className="space-y-3">
                  {course.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <div className="flex items-center space-x-2 text-primary">
                  <Check className="h-4 w-4" />
                  <span className="text-sm font-medium">{course.bonus}</span>
                </div>
                <Button className="w-full">Записаться</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Niche Courses */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">НИШЕВЫЕ КУРСЫ</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nicheCourses.map((course, index) => (
              <Card key={index} className="geometric-border hover-lift">
                <CardHeader>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <CardDescription>{course.instructors}</CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">{course.price}</span>
                    <span className="text-sm text-muted-foreground">{course.duration}</span>
                  </div>
                  <div className="text-sm font-medium text-primary">{course.team}</div>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="w-full">Узнать больше</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;