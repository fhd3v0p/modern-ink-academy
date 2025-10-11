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
  const [showPaymentInfo, setShowPaymentInfo] = useState(false);
  const mainCourses = [
    {
      title: "START",
      subtitle: "Курс для начинающих",
      price: "35 000 ₽",
      oldPrice: "70 000 ₽",
      duration: "21 день",
      badge: "🏆 ПОПУЛЯРНЫЙ",
      description: "Базовый курс от основ до первой работы. Теория, практика, оборудование и создание портфолио.",
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
      title: "START+",
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
      subtitle: "Создание эскизов",
      price: "14 990 ₽",
      oldPrice: "34 990 ₽",
      duration: "2 недели",
      badge: "🎨 LVL UP",
      description: "Освойте создание эскизов татуировок в Procreate. От базовых инструментов до профессиональных техник.",
      features: [
        "Интерфейс Procreate",
        "Создание кистей для тату",
        "Работа со слоями и масками",
        "Цветокоррекция и эффекты",
        "Экспорт в нужные форматы",
        "Авторский набор кистей"
      ],
      bonus: "Набор авторских кистей"
    }
  ];

  const nicheCourses = [
    {
      title: "Разовое индивидуальное занятие",
      subtitle: "4 часа + разбор",
      price: "5 990 ₽",
      duration: "4 часа",
      instructors: "EMI",
      team: "EMI [i]"
    },
    {
      title: "Обработка оборудования",
      subtitle: "Лекция по обработке оборудования",
      price: "По запросу",
      duration: "4-5 часов",
      instructors: "VLADA",
      team: "VLADA [i]"
    },
    {
      title: "Черная графика",
      subtitle: "От EMI и LUCIVIY",
      price: "По запросу",
      duration: "По программе",
      instructors: "EMI & LUCIVIY",
      team: "EMI & LUCIVIY [i]"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-pixel text-pixel mb-4 flex items-center justify-center gap-2">
            <span>🎯</span>
            <span>ПРОГРАММЫ ОБУЧЕНИЯ</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Выберите подходящий курс и начните свой путь в мире татуировки
          </p>
        </div>

        {/* Main Courses */}
        <div className="mb-16">
          <h3 className="text-xl font-pixel text-primary mb-8 text-center flex items-center justify-center gap-2">
            <span>🚀</span>
            <span>ОСНОВНЫЕ КУРСЫ</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mainCourses.map((course, index) => (
              <Card key={index} className="geometric-3d card-3d hover-3d pixel-grid" data-course={course.title}>
                <CardHeader className="space-y-1">
                  <div className="flex items-center justify-between mb-1">
                    <Badge className="btn-pixel-primary font-pixel text-xs">
                      {course.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-pixel">{course.title}</CardTitle>
                  <CardDescription className="font-pixel text-xs">{course.subtitle}</CardDescription>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-pixel text-primary">💰 {course.price}</span>
                      {course.oldPrice && (
                        <span className="text-sm font-pixel text-muted-foreground line-through">
                          {course.oldPrice}
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-pixel text-muted-foreground">⏱️ {course.duration}</div>
                  </div>
                  <div className="text-xs font-pixel text-secondary">🎁 {course.bonus}</div>
                </CardHeader>
                <CardContent className={course.title === "START" || course.title === "START+" ? "space-y-2" : ""}>
                  <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
                  <ul className="text-xs space-y-1 mb-4">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <Check className="h-3 w-3 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <div className="flex justify-center items-center space-x-2 w-full">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className={`btn-3d font-pixel text-xs flex items-center justify-center heartbeat hover:animate-none flex-1 ${
                        index === 1 ? 'btn-pixel-secondary' : 'btn-pixel-primary'
                      }`}
                      onClick={() => {
                        const demoUrls = {
                          "START": "https://start.sbt.skin",
                          "START+": "https://start.sbt.skin",
                          "PRO+ Ведение соцсетей": "https://pr.sbt.skin", 
                          "Procreate для тату": "https://procreate.sbt.skin"
                        };
                        const url = demoUrls[course.title as keyof typeof demoUrls];
                        if (url) window.open(url, '_blank');
                      }}
                    >
                      🎮 ДЕМО урок
                    </Button>
                    <Button className={`btn-3d font-pixel text-xs flex items-center justify-center flex-1 ${index === 1 ? 'btn-pixel-secondary border-0' : 'btn-pixel-primary'}`} onClick={() => window.open('https://t.me/emitattoo', '_blank')}>
                      📞 КОНСУЛЬТАЦИЯ
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>


        {/* Niche Courses */}
        <div>
          <h3 className="text-xl font-pixel text-secondary mb-8 text-center flex items-center justify-center gap-2">
            <span>🎯</span>
            <span>НИШЕВЫЕ КУРСЫ</span>
          </h3>
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
                  <div className="flex justify-center items-center space-x-2 w-full">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="btn-3d btn-pixel-secondary font-pixel text-xs flex items-center justify-center heartbeat hover:animate-none flex-1"
                      onClick={() => window.open('https://start.sbt.skin', '_blank')}
                    >
                      🎮 ДЕМО урок
                    </Button>
                    <Button variant="outline" className="btn-3d btn-pixel-secondary font-pixel text-xs flex items-center justify-center flex-1" onClick={() => window.open('https://t.me/emitattoo', '_blank')}>
                      📞 КОНСУЛЬТАЦИЯ
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>

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

export default CoursesSection;