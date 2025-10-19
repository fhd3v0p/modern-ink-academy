import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import circularPattern from "@/assets/circular-pattern.webp";
import abstractShapes22 from "@/assets/abstract-shapes-22.png";
import abstractShapes221 from "@/assets/abstract-shapes-221.png";
import geometricCollection from "@/assets/geometric-collection-224.png";

const ReviewsSection = () => {
  const [selectedReview, setSelectedReview] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [graduatesIndex, setGraduatesIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      image: "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/review/rev6.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS9yZXZpZXcvcmV2Ni5qcGciLCJpYXQiOjE3NjAyNzg5NzYsImV4cCI6MTc5MTgxNDk3Nn0.R6_MOna-_Oj02EBQhC23c87Tco8xD76RnPQsYQFlmtM"
    },
    {
      id: 2,
      image: "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/review/rev7.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS9yZXZpZXcvcmV2Ny5qcGciLCJpYXQiOjE3NjAyNzkwMTAsImV4cCI6MTc5MTgxNTAxMH0.l6Wh_MTu9qpx_vUfzkILLUfTm2kaykY6pN71MYQNJPM"
    },
    {
      id: 3,
      image: "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/review/rev1.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS9yZXZpZXcvcmV2MS5qcGciLCJpYXQiOjE3NjAyNzg0MTMsImV4cCI6MTc5MTgxNDQxM30.PhtzQyVWnnzHQFRAByhR1lKhOaltxCKsKKouVa55pZQ"
    },
    {
      id: 4,
      image: "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/review/rev2.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS9yZXZpZXcvcmV2Mi5qcGciLCJpYXQiOjE3NjAyNzg0MzcsImV4cCI6MTc5MTgxNDQzN30.NBvbjAAaZJWDuRRuM6RUy_ZkKBcL0VWuWrVS1_3nbCI"
    },
    {
      id: 5,
      image: "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/review/rev3.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS9yZXZpZXcvcmV2My5qcGciLCJpYXQiOjE3NjAyNzg0NzgsImV4cCI6MTc5MTgxNDQ3OH0.F2fKzj9OLjXAfy_l9RvYGAEbzD9pcky-nY4um5CBKYI"
    },
    {
      id: 6,
      image: "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/review/rev4.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS9yZXZpZXcvcmV2NC5qcGciLCJpYXQiOjE3NjAyNzg0NjUsImV4cCI6MTc5MTgxNDQ2NX0.iQOloHEyF_-xg64k5y0OR3jNLxccVuymFk2IP_sfgNU"
    },
    {
      id: 7,
      image: "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/review/rev5.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS9yZXZpZXcvcmV2NS5qcGciLCJpYXQiOjE3NjAyNzg0OTQsImV4cCI6MTc5MTgxNDQ5NH0.OSob_humWG8hFacmhOv6r4yMoYJpTQSKPR1Xc3p-Sm4"
    }
  ];

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const goToReview = (index: number) => {
    setCurrentIndex(index);
  };

  const graduates = [
    {
      id: 1,
      name: "Нана",
      telegram: "me0wk44",
      image: "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/review/vipusk/vipusknik1.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS9yZXZpZXcvdmlwdXNrL3ZpcHVza25pazEucG5nIiwiaWF0IjoxNzYwODc1MDE1LCJleHAiOjE3OTI0MTEwMTV9.hP4grHmQ0v79tcRsgNrOCG0bEANlq7C818HdHZ4BRsg",
      type: "image"
    },
    {
      id: 2,
      name: "Арина",
      telegram: "der_wolper",
      image: "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/review/vipusk/vipusknik8.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS9yZXZpZXcvdmlwdXNrL3ZpcHVza25pazgucG5nIiwiaWF0IjoxNzYwODc0ODMxLCJleHAiOjE3OTI0MTA4MzF9.irL4GFvDnTtnwT0B3Ro0gvy4tLd1wnurYgDDloZWmKo",
      type: "image",
      review: "Прошла обучение у Эмили и ни разу не пожалела о своем выборе.\n\nЗа полный курс я получила даже больше, чем можно было ожидать - туда входит теория, практика, практика на моделях и даже продвижение в соцсетях. Также можно общаться с другими учениками и в любой момент попросить о помощи, что очень важно!\n\nМне было интересно учиться - вся теория не содержит ничего лишнего, а для полноценного прохождения практики меня даже пригласили в Петербург!\n\nСамое крутое то, что Эмили продолжает развивать свою школу - она готовит новые лекции и повышает удобство пользования всем пройденным материалом.\n\nВ общем, я очень довольна тем, что выбрала именно тебя, Эми💕"
    },
    {
      id: 3,
      name: "Ника",
      telegram: "Saikidouu",
      image: "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/review/vipusk/vipusknik0.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS9yZXZpZXcvdmlwdXNrL3ZpcHVza25pazAucG5nIiwiaWF0IjoxNzYwODc0ODczLCJleHAiOjE3OTI0MTA4NzN9.MaUVQRs7esnhXiL7xrDc2wbCqHt21Q0Bx-PlaLsn598",
      type: "image"
    },
    {
      id: 4,
      name: "Алиса",
      telegram: "groyzmartattss",
      image: "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/review/vipusk/vipusknik2.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS9yZXZpZXcvdmlwdXNrL3ZpcHVza25pazIucG5nIiwiaWF0IjoxNzYwODc1MDU1LCJleHAiOjE3OTI0MTEwNTV9.MPBJbOTd4-rQlYCNJefsdYMfmrLeHoYjGURjiBu0M20",
      type: "image"
    },
    {
      id: 5,
      name: "Катя",
      telegram: "blessadttt",
      image: "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/review/vipusk/vipusknik3.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS9yZXZpZXcvdmlwdXNrL3ZpcHVza25pazMucG5nIiwiaWF0IjoxNzYwODc1MDY3LCJleHAiOjE3OTI0MTEwNjd9.ojQGTVLt1ttQDQAYeaYh-zZvHXJMw8Iae25hgvIwPE0",
      type: "image"
    },
    {
      id: 6,
      name: "Алина",
      telegram: "naterru",
      image: "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/review/vipusk/vipusknik4.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS9yZXZpZXcvdmlwdXNrL3ZpcHVza25pazQucG5nIiwiaWF0IjoxNzYwODc1MDgyLCJleHAiOjE3OTI0MTEwODJ9.eziJsDnyHC1nDMM24TQ3o062fEHFHm2SbXF_H9-60YA",
      type: "image"
    },
    {
      id: 7,
      name: "Оля",
      telegram: "parricidee",
      image: "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/review/vipusk/vipusknik5.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS9yZXZpZXcvdmlwdXNrL3ZpcHVza25pazUucG5nIiwiaWF0IjoxNzYwODc1MDk4LCJleHAiOjE3OTI0MTEwOTh9.bPiwlLRPmi2EkqD78F3ydo-3diG77bUgPxrmxZUWWno",
      type: "image"
    },
    {
      id: 8,
      name: "Ксюша",
      telegram: "ksksgavv",
      image: "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/review/vipusk/vipusknik6.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS9yZXZpZXcvdmlwdXNrL3ZpcHVza25pazYucG5nIiwiaWF0IjoxNzYwODc1MTEyLCJleHAiOjE3OTI0MTExMTJ9.2FN3XLtx9CzaneMHBZ3Vgupm8gXVUzRNwi_tamM9nUU",
      type: "image"
    },
    {
      id: 9,
      name: "Люба",
      telegram: "lyupktatts",
      image: "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/review/vipusk/vipusknik7.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS9yZXZpZXcvdmlwdXNrL3ZpcHVza25pazcucG5nIiwiaWF0IjoxNzYwODc1MTI0LCJleHAiOjE3OTI0MTExMjR9.9LCjhVEb0ofO-5ELqXaum1xs7i_XubnWeT5LL4b6ImE",
      type: "image"
    },
    {
      id: 10,
      name: "Надя",
      telegram: "puuups_tats",
      image: "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/review/vipusk/vipusknik9.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS9yZXZpZXcvdmlwdXNrL3ZpcHVza25pazkucG5nIiwiaWF0IjoxNzYwODc1MTQ5LCJleHAiOjE3OTI0MTExNDl9.JzWgJm6fayzosLMvJor0gdrseR8qmbawy1mMXpHPVek",
      type: "image"
    },
    {
      id: 11,
      name: "Юля",
      telegram: "juul_tattoo",
      image: "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/review/vipusk/vipusknik10.MP4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS9yZXZpZXcvdmlwdXNrL3ZpcHVza25pazEwLk1QNCIsImlhdCI6MTc2MDg3NTIxMSwiZXhwIjoxNzkyNDExMjExfQ.lrQff6yCQFRFI3w8NlpXFyOWtgug--5IeKaVco3Leok",
      type: "video"
    }
  ];

  const nextGraduate = () => {
    setGraduatesIndex((prevIndex) => (prevIndex + 1) % graduates.length);
  };

  const prevGraduate = () => {
    setGraduatesIndex((prevIndex) => (prevIndex - 1 + graduates.length) % graduates.length);
  };

  const goToGraduate = (index: number) => {
    setGraduatesIndex(index);
  };

  return (
    <section id="reviews" className="py-20 relative">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 opacity-5">
          <img src={circularPattern} alt="" className="w-full h-full object-contain filter invert" />
        </div>
        <div className="absolute top-10 right-10 w-96 h-96 opacity-5">
          <img src={abstractShapes22} alt="" className="w-full h-full object-contain filter invert rotate-45" />
        </div>
        <div className="absolute top-1/3 left-1/3 w-96 h-96 opacity-5">
          <img src={abstractShapes221} alt="" className="w-full h-full object-contain filter invert -rotate-30" />
        </div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 opacity-5">
          <img src={geometricCollection} alt="" className="w-full h-full object-contain filter invert rotate-180" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-pixel text-pixel mb-4 flex items-center justify-center gap-2">
            <span>💞</span>
            <span>ОТЗЫВЫ</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Почему онлайн - это удобно?
          </p>
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/40 rounded-lg p-6 max-w-4xl mx-auto">
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Уже <span className="font-bold text-primary">303+ учеников</span> успешно завершили онлайн-обучение по новой методике!
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Формат отлично зарекомендовал себя: он экономит ваше время, позволяет получать знания без лишней воды и делает обучение доступным из любого города. Особенно это важно для тех, у кого нет возможности посещать очные курсы.
            </p>
          </div>
        </div>

        {/* Карусель отзывов */}
        <div className="relative">
          {/* Основной контейнер карусели */}
          <div className="overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={review.id} className="w-full flex-shrink-0">
                  <Card className="geometric-border hover-lift bg-gradient-to-br from-background to-background/80 border-2 border-primary/40 shadow-xl shadow-primary/20 relative overflow-hidden group mx-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none"></div>
                    <div className="relative z-10">
                      <CardContent className="p-0">
                        <Dialog>
                          <DialogTrigger asChild>
                            <div 
                              className="cursor-pointer group-hover:scale-105 transition-transform duration-300"
                              onClick={() => setSelectedReview(review.image)}
                            >
                              <img 
                                src={review.image} 
                                alt={`Отзыв ${review.id}`}
                                className="w-full h-80 object-cover rounded-lg border border-primary/20 group-hover:border-primary/50 transition-all duration-300"
                                onError={(e) => {
                                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDMwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTI1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5PZHp5diBub3QgZm91bmQ8L3RleHQ+Cjwvc3ZnPg==';
                                }}
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <span className="text-white font-pixel text-sm bg-black/50 px-3 py-2 rounded">
                                  Отзыв {review.id}
                                </span>
                              </div>
                            </div>
                          </DialogTrigger>
                          <DialogContent className="max-w-[95vw] md:max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-background to-background/80 border-2 border-primary/40 shadow-xl z-[10000] mx-2 md:mx-auto">
                            <DialogHeader>
                              <DialogTitle className="font-pixel text-pixel text-2xl text-center">
                                💞 ОТЗЫВ {review.id}
                              </DialogTitle>
                            </DialogHeader>
                            <div className="flex justify-center mt-4">
                              <img 
                                src={review.image} 
                                alt={`Отзыв ${review.id}`}
                                className="max-w-full max-h-[70vh] object-contain rounded-lg border border-primary/20"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                }}
                              />
                            </div>
                          </DialogContent>
                        </Dialog>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Кнопки навигации */}
          <Button
            onClick={prevReview}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 btn-pixel-secondary z-10"
            size="sm"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            onClick={nextReview}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 btn-pixel-secondary z-10"
            size="sm"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Индикаторы */}
          <div className="flex justify-center mt-6 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToReview(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Секция выпускников */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-pixel text-pixel mb-4 flex items-center justify-center gap-2">
              <span>⭐</span>
              <span>Наши звездочки выпускники</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
              🗝 Посмотрите какие они умнички!
            </p>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              Очень советую пригнать к ним на татуировки - нам будет очень приятно ❤️
            </p>
          </div>

          {/* Карусель выпускников */}
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${graduatesIndex * 100}%)` }}
              >
                {graduates.map((graduate) => (
                  <div key={graduate.id} className="w-full flex-shrink-0">
                    <Card className="geometric-border hover-lift bg-gradient-to-br from-background to-background/80 border-2 border-primary/40 shadow-xl shadow-primary/20 relative overflow-hidden group mx-4">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none"></div>
                      <div className="relative z-10">
                        <CardContent className="p-6">
                          <Dialog>
                            <DialogTrigger asChild>
                              <div className="cursor-pointer group-hover:scale-105 transition-transform duration-300 relative">
                                {graduate.type === "video" ? (
                                  <video 
                                    src={graduate.image}
                                    className="w-full h-96 md:h-[32rem] object-contain rounded-lg border border-primary/20 group-hover:border-primary/50 transition-all duration-300 bg-black/5"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                  />
                                ) : (
                                  <img 
                                    src={graduate.image} 
                                    alt={graduate.name}
                                    className="w-full h-96 md:h-[32rem] object-contain rounded-lg border border-primary/20 group-hover:border-primary/50 transition-all duration-300 bg-black/5"
                                    onError={(e) => {
                                      e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDMwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTI1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBub3QgZm91bmQ8L3RleHQ+Cjwvc3ZnPg==';
                                    }}
                                  />
                                )}
                                {/* Подсказка, которая исчезает при наведении */}
                                {graduate.review && (
                                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-lg text-sm opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                                    Нажмите на фото, чтобы увидеть отзыв
                                  </div>
                                )}
                              </div>
                            </DialogTrigger>
                            <DialogContent className="max-w-[95vw] md:max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-background to-background/80 border-2 border-primary/40 shadow-xl z-[10000] mx-2 md:mx-auto">
                              <DialogHeader>
                                <DialogTitle className="font-pixel text-pixel text-2xl text-center">
                                  ⭐ {graduate.name} @{graduate.telegram}
                                </DialogTitle>
                              </DialogHeader>
                              <div className="flex flex-col items-center mt-4 gap-4">
                                {graduate.type === "video" ? (
                                  <video 
                                    src={graduate.image}
                                    className="max-w-full max-h-[60vh] object-contain rounded-lg border border-primary/20"
                                    controls
                                    autoPlay
                                    loop
                                  />
                                ) : (
                                  <img 
                                    src={graduate.image} 
                                    alt={graduate.name}
                                    className="max-w-full max-h-[60vh] object-contain rounded-lg border border-primary/20"
                                    onError={(e) => {
                                      const target = e.target as HTMLImageElement;
                                      target.style.display = 'none';
                                    }}
                                  />
                                )}
                                {graduate.review && (
                                  <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/40 rounded-lg p-6 max-w-2xl">
                                    <p className="text-base text-foreground leading-relaxed whitespace-pre-line">
                                      {graduate.review}
                                    </p>
                                  </div>
                                )}
                              </div>
                            </DialogContent>
                          </Dialog>
                          <div className="mt-4 text-center">
                            <h3 className="text-xl font-bold text-foreground mb-1">{graduate.name}</h3>
                            <a 
                              href={`https://t.me/${graduate.telegram}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:text-primary/80 transition-colors"
                            >
                              @{graduate.telegram}
                            </a>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Кнопки навигации для выпускников */}
            <Button
              onClick={prevGraduate}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 btn-pixel-secondary z-10"
              size="sm"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              onClick={nextGraduate}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 btn-pixel-secondary z-10"
              size="sm"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Индикаторы выпускников */}
            <div className="flex justify-center mt-6 space-x-2">
              {graduates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToGraduate(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === graduatesIndex 
                      ? 'bg-primary scale-125' 
                      : 'bg-primary/30 hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
