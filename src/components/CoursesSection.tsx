import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import geometricCollection from "@/assets/geometric-collection-224.png";
import abstractShapes22 from "@/assets/abstract-shapes-22.png";
import abstractShapes221 from "@/assets/abstract-shapes-221.png";

const CoursesSection = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [showAsciiImage, setShowAsciiImage] = useState(false);
  const mainCourses = [
    {
      title: "Новичок",
      subtitle: "Курс для начинающих",
      price: "69 990 ₽",
      oldPrice: "100 000 ₽",
      duration: "1-2 месяца",
      badge: "🏆 ПОПУЛЯРНЫЙ",
      description: "Полный курс от основ до первой работы. Теория, практика, оборудование и создание портфолио.",
      features: [
        "Теория татуировки и философия",
        "Выбор и настройка оборудования",
        "Работа с кожей и пигментами",
        "Безопасность и обработка оборудования",
        "Практика на искусственной коже",
        "Создание эскизов",
        "Развитие соцсетей"
      ],
      bonus: "Поддержка 24/7"
    },
    {
      title: "PRO+ Ведение соцсетей",
      subtitle: "От EMI и BLOODIVAMP", 
      price: "24 990 ₽",
      oldPrice: "49 990 ₽",
      duration: "3 недели",
      badge: "🆕 NEW",
      description: "Продвинутые техники продвижения и контент-стратегии для tattoo-мастеров в социальных сетях.",
      features: [
        "Создание вирусного контента",
        "Reels и TikTok стратегии", 
        "Работа с блогерами",
        "Монетизация подписчиков",
        "Аналитика и метрики",
        "Брендинг и позиционирование"
      ],
      bonus: "AI-помощник для контента"
    },
    {
      title: "Procreate для тату",
      subtitle: "Любой",
      price: "14 990 ₽",
      oldPrice: "34 990 ₽",
      duration: "2-3 недели",
      badge: "📈 LVL UP",
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
      title: "Разовое индивидуальное занятие",
      instructors: "4 часа + разбор = 5 990 ₽",
      price: "5 990 ₽",
      duration: "4 часа",
      team: "EMI"
    },
    {
      title: "Обработка оборудования",
      instructors: "Лекция по обработке оборудования",
      price: "По запросу",
      duration: "4-5 часов",
      team: "BLOODIVAMP"
    },
    {
      title: "Черная графика",
      instructors: "От EMI и LUCIVIY",
      price: "По запросу",
      duration: "По программе",
      team: "EMI & LUCIVIY"
    }
  ];

  return (
    <section id="courses" className="py-20 relative">
      {/* Background graphics - под основным контентом */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-0 w-96 h-96 opacity-5">
        <img src={geometricCollection} alt="" className="w-full h-full object-contain filter invert" />
        </div>
        <div className="absolute bottom-20 left-10 w-96 h-96 opacity-5">
          <img src={abstractShapes22} alt="" className="w-full h-full object-contain filter invert rotate-45" />
        </div>
        <div className="absolute top-1/2 left-0 w-96 h-96 opacity-5">
          <img src={abstractShapes221} alt="" className="w-full h-full object-contain filter invert -rotate-12" />
        </div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 opacity-5">
          <img src={geometricCollection} alt="" className="w-full h-full object-contain filter invert rotate-90" />
        </div>
        <div className="absolute top-10 left-1/4 w-96 h-96 opacity-5">
          <img src={abstractShapes22} alt="" className="w-full h-full object-contain filter invert -rotate-30" />
        </div>
        <div className="absolute top-1/3 left-1/2 w-96 h-96 opacity-5">
          <img src={abstractShapes221} alt="" className="w-full h-full object-contain filter invert rotate-120" />
        </div>
        <div className="absolute bottom-10 right-10 w-96 h-96 opacity-5">
          <img src={geometricCollection} alt="" className="w-full h-full object-contain filter invert -rotate-60" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-pixel text-pixel mb-6">
            🎮 ПРОГРАММЫ ОБУЧЕНИЯ
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Выберите подходящий курс и начните свой путь в мире профессиональной татуировки
          </p>
          <div className="mt-4 font-pixel text-xs text-secondary">
            ГЕЙМИФИКАЦИЯ • AI НАСТАВНИК • ПРАКТИКА • ПРОДВИЖЕНИЕ
          </div>
        </div>

        {/* Main Courses */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {mainCourses.map((course, index) => (
            <Card key={index} className={`geometric-3d card-3d hover-3d pixel-grid ${index === 0 ? 'ring-2 ring-primary/50' : ''} ${index === 1 ? 'ring-2 ring-secondary/50' : ''}`} data-course={course.title}>
              <CardHeader>
                {course.badge && (
                  <Badge className="self-start mb-2 bg-primary text-primary-foreground font-pixel text-xs">
                    {course.badge}
                  </Badge>
                )}
                <CardTitle className="text-xl font-pixel">{course.title}</CardTitle>
                <CardDescription className="text-sm font-pixel text-muted-foreground">{course.subtitle}</CardDescription>
                <div className="flex items-end space-x-2">
                  <span className="text-2xl font-pixel text-primary">{course.price}</span>
                  {course.oldPrice && (
                    <span className="text-sm text-muted-foreground line-through">{course.oldPrice}</span>
                  )}
                </div>
                {course.oldPrice && (
                  <div className="text-xs font-pixel text-accent bg-accent/10 px-2 py-1 rounded border border-accent/30">
                    🔥 Скидка до 10.10
                  </div>
                )}
                <div className="text-muted-foreground font-pixel text-xs">⏱️ {course.duration}</div>
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
                <div className="flex space-x-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className={`w-10 h-10 btn-3d font-pixel text-xs flex items-center justify-center ${
                          index === 1 ? 'btn-pixel-secondary' : 'btn-pixel-primary'
                        }`}
                        onClick={() => setSelectedCourse(course.title)}
                      >
                        [i]
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-gradient-to-br from-background to-background/80 border-2 border-primary/40 shadow-xl">
                      <DialogHeader>
                        <DialogTitle className="font-pixel text-pixel text-2xl text-center mb-6">
                          ℹ️ ПОДРОБНОСТИ КУРСА: {course.title}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="mt-4">
                        {course.title === "Procreate для тату" ? (
                          <div className="space-y-6">
                            {/* План занятий */}
                            <div className="geometric-3d card-3d hover-3d pixel-grid bg-gradient-to-br from-background to-background/80 border border-primary/40 rounded-lg p-6">
                              <h3 className="font-pixel text-pixel text-lg mb-3">📚 ПЛАН ЗАНЯТИЙ</h3>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <h4 className="font-semibold text-primary mb-2">Неделя 1: Основы</h4>
                                  <ul className="text-sm space-y-1">
                                    <li>• Интерфейс Procreate</li>
                                    <li>• Базовые инструменты</li>
                                    <li>• Работа со слоями</li>
                                    <li>• Создание кистей</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-primary mb-2">Неделя 2: Практика</h4>
                                  <ul className="text-sm space-y-1">
                                    <li>• Эскизы татуировок</li>
                                    <li>• Работа с цветом</li>
                                    <li>• Тени и блики</li>
                                    <li>• Экспорт готовых работ</li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            {/* Примеры работ */}
                            <div className="bg-gradient-to-br from-background to-background/80 border border-secondary/40 rounded-lg p-4 md:p-6">
                              <h3 className="font-pixel text-pixel text-base md:text-lg mb-3">🎨 ПРИМЕРЫ РАБОТ</h3>
                              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                                <div className="bg-muted rounded-lg p-3 md:p-4 text-center">
                                  <div className="w-full h-16 md:h-24 bg-primary/20 rounded mb-2 flex items-center justify-center text-primary font-pixel text-xs">
                                    Эскиз 1
                                  </div>
                                  <p className="text-xs text-muted-foreground">Черная графика</p>
                                </div>
                                <div className="bg-muted rounded-lg p-3 md:p-4 text-center">
                                  <div className="w-full h-16 md:h-24 bg-secondary/20 rounded mb-2 flex items-center justify-center text-secondary font-pixel text-xs">
                                    Эскиз 2
                                  </div>
                                  <p className="text-xs text-muted-foreground">Цветная работа</p>
                                </div>
                                <div className="bg-muted rounded-lg p-3 md:p-4 text-center">
                                  <div className="w-full h-16 md:h-24 bg-accent/20 rounded mb-2 flex items-center justify-center text-accent font-pixel text-xs">
                                    Эскиз 3
                                  </div>
                                  <p className="text-xs text-muted-foreground">Минимализм</p>
                                </div>
                              </div>
                            </div>

                            {/* Авторский набор кистей */}
                            <div className="bg-gradient-to-br from-background to-background/80 border border-accent/40 rounded-lg p-6">
                              <h3 className="font-pixel text-pixel text-lg mb-3">🖌️ АВТОРСКИЙ НАБОР КИСТЕЙ</h3>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                <div className="bg-muted rounded p-3 text-center">
                                  <div className="w-full h-16 bg-primary/20 rounded mb-2 flex items-center justify-center text-primary font-pixel text-xs">
                                    Лайнер
                                  </div>
                                  <p className="text-xs">Для контуров</p>
                                </div>
                                <div className="bg-muted rounded p-3 text-center">
                                  <div className="w-full h-16 bg-secondary/20 rounded mb-2 flex items-center justify-center text-secondary font-pixel text-xs">
                                    Шейдер
                                  </div>
                                  <p className="text-xs">Для заливки</p>
                                </div>
                                <div className="bg-muted rounded p-3 text-center">
                                  <div className="w-full h-16 bg-accent/20 rounded mb-2 flex items-center justify-center text-accent font-pixel text-xs">
                                    Текстура
                                  </div>
                                  <p className="text-xs">Для деталей</p>
                                </div>
                                <div className="bg-muted rounded p-3 text-center">
                                  <div className="w-full h-16 bg-highlight/20 rounded mb-2 flex items-center justify-center text-highlight font-pixel text-xs">
                                    Градиент
                                  </div>
                                  <p className="text-xs">Для переходов</p>
                                </div>
                              </div>
                              <div className="mt-3 p-3 bg-primary/5 rounded border border-primary/20">
                                <p className="text-sm text-primary font-medium">🎁 БОНУС: Полный набор авторских кистей в подарок!</p>
                              </div>
                            </div>
                          </div>
                        ) : course.title === "PRO+ Ведение соцсетей" ? (
                          <div className="space-y-6">
                            {/* Telegram-бот описание */}
                            <div className="geometric-3d card-3d hover-3d pixel-grid bg-gradient-to-br from-background to-background/80 border border-primary/40 rounded-lg p-6">
                              <h3 className="font-pixel text-pixel text-lg mb-3">🤖 AI АСИСТЕНТ - КЛЮЧЕВОЙ ИНСТРУМЕНТ</h3>
                              <p className="text-muted-foreground mb-4">
                                Наш Telegram-бот создает индивидуальный контент-план для каждого студента на каждый день. 
                                Это не просто генератор постов - это умный помощник, который анализирует вашу нишу и создает вирусный контент.
                              </p>
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div className="bg-muted rounded-lg p-3">
                                  <h4 className="font-semibold text-primary mb-2">📱 Скриншоты интерфейса</h4>
                                  <div className="space-y-2">
                                    <div className="bg-primary/10 rounded p-2 text-center text-xs">
                                      Главное меню бота
                                    </div>
                                    <div className="bg-secondary/10 rounded p-2 text-center text-xs">
                                      Генератор контента
                                    </div>
                                    <div className="bg-accent/10 rounded p-2 text-center text-xs">
                                      Аналитика постов
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-muted rounded-lg p-3">
                                  <h4 className="font-semibold text-primary mb-2">⚡ Как работает</h4>
                                  <ul className="text-sm space-y-1">
                                    <li>• Анализирует вашу нишу</li>
                                    <li>• Создает уникальный контент</li>
                                    <li>• Подбирает хештеги</li>
                                    <li>• Планирует публикации</li>
                                  </ul>
                                </div>
                              </div>

                              <div className="bg-gradient-to-br from-background to-background/80 border border-secondary/40 rounded-lg p-6">
                                <h4 className="font-semibold text-secondary mb-2">🎯 Генерация контент-планов</h4>
                                <p className="text-sm text-muted-foreground">
                                  Бот создает персональный контент-план на основе ваших работ, стиля и целей. 
                                  Каждый день вы получаете готовые идеи для постов, Reels и Stories.
                                </p>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-4">
                            <div className="bg-gradient-to-br from-background to-background/80 border border-primary/40 rounded-lg p-6">
                              <h3 className="font-pixel text-pixel text-lg mb-3">📋 ДЕТАЛЬНАЯ ПРОГРАММА</h3>
                              <p className="text-muted-foreground mb-4">
                                Подробная информация о курсе "{course.title}" будет добавлена в ближайшее время.
                              </p>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <h4 className="font-semibold text-primary mb-2">Что вы получите:</h4>
                                  <ul className="text-sm space-y-1">
                                    <li>• Практические навыки</li>
                                    <li>• Обратную связь от экспертов</li>
                                    <li>• Доступ к материалам</li>
                                    <li>• Сертификат о прохождении</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-primary mb-2">Формат обучения:</h4>
                                  <ul className="text-sm space-y-1">
                                    <li>• Онлайн лекции</li>
                                    <li>• Практические задания</li>
                                    <li>• Разбор работ</li>
                                    <li>• Поддержка 24/7</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Кнопка "ПРОЙТИ ПЕРВЫЙ УРОК БЕСПЛАТНО" */}
                      <div className="mt-8 text-center">
                        <Button 
                          className="btn-pixel-primary font-pixel text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                          onClick={() => {
                            const demoUrls = {
                              "Новичок": "https://demo1.sbt.skin",
                              "Ведение соцсетей": "https://demo2.sbt.skin", 
                              "Procreate для тату": "https://demo3.sbt.skin"
                            };
                            const url = demoUrls[course.title as keyof typeof demoUrls];
                            if (url) window.open(url, '_blank');
                          }}
                        >
                          🎯 ПРОЙТИ ПЕРВЫЙ УРОК БЕСПЛАТНО
                        </Button>
                        <p className="text-sm text-muted-foreground mt-2 font-pixel">
                          Начните обучение прямо сейчас!
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button className={`flex-1 btn-3d font-pixel text-xs ${index === 1 ? 'btn-pixel-secondary border-0' : 'btn-pixel-primary'}`}>
                  🚀 ЗАПИСАТЬСЯ
                </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Niche Courses */}
        <div>
          <h3 className="text-xl font-pixel text-secondary mb-8 text-center">🎯 НИШЕВЫЕ КУРСЫ</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nicheCourses.map((course, index) => (
              <Card key={index} className="geometric-3d card-3d hover-3d pixel-grid" data-course={course.title}>
                <CardHeader>
                  <CardTitle className="text-base font-pixel">{course.title}</CardTitle>
                  <CardDescription className="font-pixel text-xs">{course.instructors}</CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-pixel text-primary">💰 {course.price}</span>
                    <span className="text-xs font-pixel text-muted-foreground">⏱️ {course.duration}</span>
                  </div>
                  <div className="text-xs font-pixel text-secondary">👥 {course.team}</div>
                </CardHeader>
                <CardFooter>
                  <div className="flex space-x-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="w-10 h-10 btn-3d btn-pixel-secondary font-pixel text-xs flex items-center justify-center"
                          onClick={() => setSelectedCourse(course.title)}
                        >
                          [i]
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-gradient-to-br from-background to-background/80 border-2 border-primary/40 shadow-xl">
                        <DialogHeader>
                          <DialogTitle className="font-pixel text-pixel text-2xl">
                            ℹ️ ПОДРОБНОСТИ КУРСА: {course.title}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="mt-4">
                          <div className="space-y-4">
                            <div className="bg-gradient-to-br from-background to-background/80 border border-primary/40 rounded-lg p-6">
                              <h3 className="font-pixel text-pixel text-lg mb-3">📋 ДЕТАЛЬНАЯ ПРОГРАММА</h3>
                              <p className="text-muted-foreground mb-4">
                                Подробная информация о курсе "{course.title}" будет добавлена в ближайшее время.
                              </p>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <h4 className="font-semibold text-primary mb-2">Что вы получите:</h4>
                                  <ul className="text-sm space-y-1">
                                    <li>• Практические навыки</li>
                                    <li>• Обратную связь от экспертов</li>
                                    <li>• Доступ к материалам</li>
                                    <li>• Сертификат о прохождении</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-primary mb-2">Формат обучения:</h4>
                                  <ul className="text-sm space-y-1">
                                    <li>• Онлайн лекции</li>
                                    <li>• Практические задания</li>
                                    <li>• Разбор работ</li>
                                    <li>• Поддержка 24/7</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button variant="outline" className="flex-1 btn-3d btn-pixel-secondary font-pixel text-xs">
                    🔍 УЗНАТЬ БОЛЬШЕ
                  </Button>
                  </div>
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