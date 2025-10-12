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
  const [showDemoLesson, setShowDemoLesson] = useState(false);
  const [showEquipmentDemo, setShowEquipmentDemo] = useState(false);
  const [showBlackGraphicDemo, setShowBlackGraphicDemo] = useState(false);
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
      subtitle: "💞 Ответы на все ваши вопросы",
      price: "5 990 ₽",
      duration: "4 часа",
      instructors: "EMI",
      team: "EMI [i]",
      description: "Личная консультация с преподавателем школы. Закрыть конкретные проблемы • Не знаете, с чего начать • Запутались в технике, работе с клиентами, стиле или оборудовании • Разбор портфолио или помощь с началом преподавания • Индивидуальный подход без воды • Подходит новичкам и действующим мастерам"
    },
    {
      title: "Обработка оборудования",
      subtitle: "💞 Разовая лекция по обработке оборудования от EMI и BLOODIVAMP",
      price: "По запросу",
      duration: "4-5 часов",
      instructors: "EMI & BLOODIVAMP",
      team: "EMI & BLOODIVAMP [i]",
      description: "Для действующих мастеров, которые хотят поднять уровень своей подготовки и реально разбираться в безопасности процедур. Пирсинг процедура более травматичная, чем тату • СанПиН • Асептика / антисептика • ПСО / дезинфекция • Работа с кожей и её восстановлением • Как грамотно обрабатывать оборудование • Какие этапы важны и зачем • Как работает кожа и на что реально влияет чистота • Как снизить риски воспалений и осложнений • Почему безопасность это не просто 'стерильно', а комплекс знаний"
    },
    {
      title: "Черная графика",
      subtitle: "🖤 Курс по чёрной графике от EMI и Luciviy 🖤",
      price: "По запросу",
      duration: "По программе",
      instructors: "EMI & LUCIVIY",
      team: "EMI & LUCIVIY [i]",
      description: "Для тех, кто хочет развиваться в мрачной стилистике/черная графика. Вика в тату более 8 лет, и вместе мы собрали курс, который подойдёт всем, кто хочет выйти за рамки флешей и создать свой авторский стиль. Как адаптировать любые референсы под свой стиль • Как строить большие композиции (рукава, спины) • Как работать с текстурами и атмосферой • Создание авторских существ — и как грамотно 'поселить' их на теле • Техника — как вести чистый контур в один проход • Как делать мелкие детали тонкими иглами • Как работает контраст чёрного и белого в татуировке"
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
                    <Button className={`btn-3d font-pixel text-xs flex items-center justify-center flex-1 ${index === 1 ? 'btn-pixel-secondary border-0' : 'btn-pixel-primary'}`} onClick={() => {
                        if (course.title === "START") {
                          const message = encodeURIComponent("Привет, меня заинтересовал курс START, хочу получить консультацию, подробности о рассрочке и оценить свой уровень знаний для быстро старта в тату-индустрии! Спасибо!");
                          window.open(`https://t.me/emitattoo?text=${message}`, '_blank');
                        } else if (course.title === "START+") {
                          const message = encodeURIComponent("Привет, меня заинтересовал курс START+, хочу получить консультацию, подробности о рассрочке и оценить свой уровень знаний для быстро старта в тату-индустрии! Спасибо!");
                          window.open(`https://t.me/emitattoo?text=${message}`, '_blank');
                        } else if (course.title === "PRO+ Ведение соцсетей") {
                          const message = encodeURIComponent("Привет, меня заинтересовал курс PRO+ Ведение соцсетей, хочу получить консультацию, подробности о рассрочке и кратно повысить конверсию продаж для комфортной работы в индустрии! Спасибо!");
                          window.open(`https://t.me/emitattoo?text=${message}`, '_blank');
                        } else if (course.title === "Procreate для тату") {
                          const message = encodeURIComponent("Привет, меня заинтересовал курс PROCREATE, хочу получить консультацию, подробности о рассрочке и улучшить свои навыки в цифровом искусстве, для конкуретности в тату-индустри и развитии творческих навыков! Спасибо!");
                          window.open(`https://t.me/emitattoo?text=${message}`, '_blank');
                        } else {
                          window.open('https://t.me/emitattoo', '_blank');
                        }
                      }}>
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
                  <CardTitle className="text-base font-pixel text-center">{course.title}</CardTitle>
                  <CardDescription className="font-pixel text-xs">{course.subtitle}</CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-pixel text-primary">💰 {course.price}</span>
                    <span className="text-xs font-pixel text-muted-foreground">⏱️ {course.duration}</span>
                  </div>
                  <div className="text-xs font-pixel text-secondary">👥 {course.team}</div>
                  {course.description && (
                    <div className="mt-3 p-3 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg">
                      <ul className="text-xs space-y-1">
                        {course.description.split(' • ').map((item, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <Check className="h-3 w-3 text-primary flex-shrink-0" />
                            <span className="text-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardHeader>
                <CardFooter>
                  <div className="flex justify-center items-center space-x-2 w-full">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="btn-3d btn-pixel-secondary font-pixel text-xs flex items-center justify-center heartbeat hover:animate-none flex-1"
                      onClick={() => {
                        if (course.title === "Разовое индивидуальное занятие") {
                          setShowDemoLesson(true);
                        } else if (course.title === "Обработка оборудования") {
                          setShowEquipmentDemo(true);
                        } else if (course.title === "Черная графика") {
                          setShowBlackGraphicDemo(true);
                        } else {
                          window.open('https://start.sbt.skin', '_blank');
                        }
                      }}
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

      {/* Demo Lesson Modal for Individual Session */}
      <Dialog open={showDemoLesson} onOpenChange={setShowDemoLesson}>
        <DialogContent className="max-w-[95vw] md:max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-background to-background/80 border-2 border-primary/40 shadow-xl z-[10000] mx-2 md:mx-auto">
          <DialogHeader>
            <DialogTitle className="text-center mb-6 font-pixel text-pixel text-2xl">
              💞 Разовый созвон. Ответы на все ваши вопросы
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/40 rounded-lg p-6">
              <p className="text-lg text-foreground leading-relaxed mb-4">
                Ваша личная консультация со мной или любым преподавателем нашей школы.
              </p>
              
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-primary mb-3 font-pixel">Если вы:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>хотите закрыть конкретные проблемы</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>не знаете, с чего начать</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>запутались в технике, работе с клиентами, стиле или оборудовании</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>хотите получить разбор портфолио или помощи с началом преподавания</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                мы с вами на связи, заранее обсудим план встречи и даже можем подготовить мини-лекцию по вашему запросу.
              </p>
              
              <div className="bg-background/50 border border-primary/30 rounded-lg p-4">
                <p className="text-center font-pixel text-primary text-lg mb-2">
                  Индивидуально, по делу, без воды.
                </p>
                <p className="text-center text-muted-foreground">
                  Подходит и новичкам, и действующим мастерам.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <Button 
                className="btn-3d btn-pixel-primary font-pixel text-sm px-8 py-3"
                onClick={() => window.open('https://t.me/emitattoo', '_blank')}
              >
                📞 ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Demo Lesson Modal for Equipment Processing */}
      <Dialog open={showEquipmentDemo} onOpenChange={setShowEquipmentDemo}>
        <DialogContent className="max-w-[95vw] md:max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-background to-background/80 border-2 border-primary/40 shadow-xl z-[10000] mx-2 md:mx-auto">
          <DialogHeader>
            <DialogTitle className="text-center mb-6 font-pixel text-pixel text-2xl">
              💞 Разовая лекция по обработке оборудования от EMI и BLOODIVAMP
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/40 rounded-lg p-6">
              <p className="text-lg text-foreground leading-relaxed mb-4">
                Для действующих мастеров, которые хотят поднять уровень своей подготовки и реально разбираться в безопасности процедур.
              </p>
              
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-primary mb-3 font-pixel">💉 Пирсинг процедура более травматичная, чем тату</h4>
                <p className="text-muted-foreground mb-3">
                  Именно поэтому мастера пирсинга хорошо знают, насколько важны:
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>СанПиН</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Асептика / антисептика</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>ПСО / дезинфекция</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Работа с кожей и её восстановлением</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-primary mb-3 font-pixel">На созвоне с нами разберём:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Как грамотно обрабатывать оборудование</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Какие этапы важны и зачем</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Как работает кожа и на что реально влияет чистота</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Как снизить риски воспалений и осложнений</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Почему безопасность это не просто "стерильно", а комплекс знаний</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-background/50 border border-primary/30 rounded-lg p-4">
                <p className="text-center font-pixel text-primary text-lg">
                  Будет полезно всем, кто хочет работать не просто красиво, но и профессионально.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <Button 
                className="btn-3d btn-pixel-primary font-pixel text-sm px-8 py-3"
                onClick={() => window.open('https://t.me/emitattoo', '_blank')}
              >
                📞 ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Demo Lesson Modal for Black Graphic */}
      <Dialog open={showBlackGraphicDemo} onOpenChange={setShowBlackGraphicDemo}>
        <DialogContent className="max-w-[95vw] md:max-w-6xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-background to-background/80 border-2 border-primary/40 shadow-xl z-[10000] mx-2 md:mx-auto">
          <DialogHeader>
            <DialogTitle className="text-center mb-6 font-pixel text-pixel text-2xl">
              🖤 Курс по чёрной графике от EMI и Luciviy 🖤
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/40 rounded-lg p-6">
              <p className="text-lg text-foreground leading-relaxed mb-4">
                Для тех, кто хочет развиваться в мрачной стилистике/черная графика
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                Вика в тату более 8 лет, и вместе мы собрали курс, который подойдёт всем, кто хочет выйти за рамки флешей и создать свой авторский стиль.
              </p>
              
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-primary mb-3 font-pixel">Что внутри:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">◾️</span>
                    <span>как адаптировать любые референсы под свой стиль</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">◾️</span>
                    <span>как строить большие композиции (рукава, спины)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">◾️</span>
                    <span>как работать с текстурами и атмосферой</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">◾️</span>
                    <span>создание авторских существ — и как грамотно "поселить" их на теле</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">◾️</span>
                    <span>техника — как вести чистый контур в один проход</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">◾️</span>
                    <span>как делать мелкие детали тонкими иглами</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">◾️</span>
                    <span>как работает контраст чёрного и белого в татуировке</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-background/50 border border-primary/30 rounded-lg p-4">
                <p className="text-center font-pixel text-primary text-lg">
                  Будет глубокий разбор, фокус на стиль, текстуры и паттерны существ
                </p>
              </div>
            </div>

            {/* Video Section */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-primary mb-4 font-pixel text-center">🎥 Демо видео</h4>
              <div className="flex justify-center">
                <video 
                  controls 
                  className="max-w-full h-auto rounded-lg border border-primary/20"
                  poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5WaWRlbyBub3QgZm91bmQ8L3RleHQ+Cjwvc3ZnPg=="
                >
                  <source src="https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/corses/blackgraphic/vid1.MP4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS9jb3JzZXMvYmxhY2tncmFwaGljL3ZpZDEuTVA0IiwiaWF0IjoxNzYwMjgwNjI4LCJleHAiOjE3OTE4MTY2Mjh9.Skf41k_zcwRpkmehg3IX5XeTurwixkVpt766KT1GbkQ" type="video/mp4" />
                  Ваш браузер не поддерживает видео.
                </video>
              </div>
            </div>

            {/* Gallery Section */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-primary mb-4 font-pixel text-center">🖼️ Галерея работ</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <img 
                  src="https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/corses/blackgraphic/gal1.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS9jb3JzZXMvYmxhY2tncmFwaGljL2dhbDEuanBnIiwiaWF0IjoxNzYwMjgwNTQzLCJleHAiOjE3OTE4MTY1NDN9.ltHcYIMHv0wgSGpw2_-mWu1TqbhwqNWNB_I8a_D1fec" 
                  alt="Черная графика 1"
                  className="w-full h-32 object-cover rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBub3QgZm91bmQ8L3RleHQ+Cjwvc3ZnPg==';
                  }}
                />
                <img 
                  src="https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/corses/blackgraphic/gal2.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS9jb3JzZXMvYmxhY2tncmFwaGljL2dhbDIuanBnIiwiaWF0IjoxNzYwMjgwNTc4LCJleHAiOjE3OTE4MTY1Nzh9.CpG1bwbje0aQEv8jIwPhrb0pemMq_-ssRMD9pDwkOwE" 
                  alt="Черная графика 2"
                  className="w-full h-32 object-cover rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBub3QgZm91bmQ8L3RleHQ+Cjwvc3ZnPg==';
                  }}
                />
                <img 
                  src="https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/corses/blackgraphic/gal3.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS9jb3JzZXMvYmxhY2tncmFwaGljL2dhbDMuanBnIiwiaWF0IjoxNzYwMjgwNTg3LCJleHAiOjE3OTE4MTY1ODd9.dnvXWO-j1J8SlrP31YrAUeauKeRdgMwJyNcz0PVsAXA" 
                  alt="Черная графика 3"
                  className="w-full h-32 object-cover rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBub3QgZm91bmQ8L3RleHQ+Cjwvc3ZnPg==';
                  }}
                />
                <img 
                  src="https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/corses/blackgraphic/gal4.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS9jb3JzZXMvYmxhY2tncmFwaGljL2dhbDQuanBnIiwiaWF0IjoxNzYwMjgwNjA4LCJleHAiOjE3OTE4MTY2MDh9.JqhXadSOm2FnKv62XiITw_SQdqOlE69JG6HjpUJ2ihc" 
                  alt="Черная графика 4"
                  className="w-full h-32 object-cover rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBub3QgZm91bmQ8L3RleHQ+Cjwvc3ZnPg==';
                  }}
                />
              </div>
            </div>
            
            <div className="text-center">
              <Button 
                className="btn-3d btn-pixel-primary font-pixel text-sm px-8 py-3"
                onClick={() => window.open('https://t.me/emitattoo', '_blank')}
              >
                📞 ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CoursesSection;