import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import circularPattern from "@/assets/circular-pattern.webp";

const InstructorsSection = () => {
  const instructors = [
    {
      name: "ВИКТОРИЯ",
      title: "Онлайн лектор и татуировщик",
      experience: "8+ лет опыта",
      specialization: "Черная графика, мрачная стилистика",
      description: "Специализируется на направлении чёрная графика, уделяя особое внимание мрачной стилистике. В её работах преобладает техническое мастерство, аккуратность и большое количество мелких деталей.",
      skills: [
        "Ровные полоски",
        "Аккуратные випы",
        "Анатомическое размещение эскизов",
        "Стилизация изображений",
        "Скоростные техники"
      ],
      telegram: "@victoria_tattoo"
    },
    {
      name: "ВЛАДА",
      title: "Мастер пирсинга и стерилизации",
      experience: "Большая база образовательных видео",
      specialization: "Обработка, очистка, стерилизация",
      description: "Специализируется на вопросах обработки рабочих мест, стерилизации и ухода за инструментами. Профессионал в области безопасности и гигиенических стандартов.",
      skills: [
        "Обработка рабочих мест",
        "Стерилизация инструментов",
        "Сборка/разборка оборудования",
        "Сухожары и автоклавы",
        "Безопасность процедур"
      ],
      telegram: "@vlada_steril"
    },
    {
      name: "DAGON",
      title: "Ведущий текстовых лекций",
      experience: "Многолетний опыт",
      specialization: "Технические задания, эскизы",
      description: "Специалист по подготовке технических заданий для рисования эскизов. Владеет техниками как плавных теней с помощью грей-воша, так и плотных закрасок черным.",
      skills: [
        "Плавные тени грей-воша",
        "Плотные закраски черным",
        "Подготовка ТЗ для эскизов",
        "Систематизация знаний",
        "Создание обучающего контента"
      ],
      telegram: "@dagon_design"
    },
    {
      name: "АЛИСА",
      title: "Помощник и наставник",
      experience: "Активно растущий профиль",
      specialization: "Психология работы, клиенты",
      description: "Отлично знает, как важно правильно выстроить общение с клиентами. Находится \"на одной волне\" с начинающими мастерами и понимает все их трудности.",
      skills: [
        "Общение с клиентами",
        "Сарафанное радио",
        "Работа в студии",
        "Развитие соцсетей",
        "Поддержка новичков"
      ],
      telegram: "@alisa_mentor"
    }
  ];

  return (
    <section id="instructors" className="py-20 relative">
      {/* Background pattern */}
      <div className="absolute bottom-0 left-0 w-96 h-96 opacity-5">
        <img src={circularPattern} alt="" className="w-full h-full object-contain filter invert" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            НАШИ ПРЕПОДАВАТЕЛИ
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Команда профессионалов с многолетним опытом в татуировке и обучении
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {instructors.map((instructor, index) => (
            <Card key={index} className="geometric-border hover-lift">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl text-gradient mb-2">
                      {instructor.name}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      {instructor.title}
                    </CardDescription>
                    <div className="text-primary font-medium mt-1">
                      {instructor.experience}
                    </div>
                  </div>
                </div>
                <div className="border-l-4 border-primary pl-4 mt-4">
                  <div className="text-sm font-medium text-primary mb-1">Специализация:</div>
                  <div className="text-muted-foreground">{instructor.specialization}</div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {instructor.description}
                </p>
                
                <div className="mb-6">
                  <div className="text-sm font-medium text-primary mb-3">Ключевые навыки:</div>
                  <div className="space-y-2">
                    {instructor.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground">Telegram:</div>
                    <div className="text-primary font-medium">{instructor.telegram}</div>
                  </div>
                  <Button size="sm" variant="outline">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Связаться
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-xl text-muted-foreground mb-8">
            Готовы начать обучение с нашей командой профессионалов?
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            ВЫБРАТЬ ПРЕПОДАВАТЕЛЯ
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;