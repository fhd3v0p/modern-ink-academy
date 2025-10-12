import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import circularPattern from "@/assets/circular-pattern.webp";
import abstractShapes22 from "@/assets/abstract-shapes-22.png";
import abstractShapes221 from "@/assets/abstract-shapes-221.png";
import geometricCollection from "@/assets/geometric-collection-224.png";

const InstructorsSection = () => {
  const [selectedInstructor, setSelectedInstructor] = useState<string | null>(null);
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);
  const [selectedPortfolioImage, setSelectedPortfolioImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [currentInstructor, setCurrentInstructor] = useState<any>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [selectedInstructorInfo, setSelectedInstructorInfo] = useState<string | null>(null);
  
  const instructors = [
    {
      name: "EMI",
      title: "Директор школы",
      experience: "5+ лет опыта",
      specialization: "Управление, разработка курсов",
      description: "Основатель и директор SBT SCHOOL. Создала уникальную образовательную систему на основе 5+ лет практического опыта. Помогает ученикам не только освоить технику, но и успешно войти в профессию.",
      skills: [
        "Разработка образовательных программ",
        "Инновационный подход к татуировке",
        "Помощь десяткам учеников выйти в профессию",
        "Развитие личного бренда",
        "Адаптация к изменениям в индустрии",
      ],
      avatar: "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/avatars/EMI_avatar.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9hdmF0YXJzL0VNSV9hdmF0YXIuanBnIiwiaWF0IjoxNzU5MDcyNzk1LCJleHAiOjE3OTA2MDg3OTV9.ZHHcHnGXClXUXhlqcA1CUxBaekMVTWKPEDsrF2lp0-Q",
      portfolio: [
        "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/partfolio/EMI/foto1.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9wYXJ0Zm9saW8vRU1JL2ZvdG8xLmpwZyIsImlhdCI6MTc1OTA3ODkyMSwiZXhwIjoxNzkwNjE0OTIxfQ.cfIRbDQqhuw0eQOLgmCqspJKGZ4isNWEzksLhgYTZAg",
        "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/partfolio/EMI/foto2.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9wYXJ0Zm9saW8vRU1JL2ZvdG8yLmpwZyIsImlhdCI6MTc1OTA3ODk1OSwiZXhwIjoxNzkwNjE0OTU5fQ.raCQFCjfZ73TDgXAbWdNm8tkF3Th8F_5FpygRiWJQh4",
        "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/partfolio/EMI/foto3.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9wYXJ0Zm9saW8vRU1JL2ZvdG8zLmpwZyIsImlhdCI6MTc1OTA3ODk3MiwiZXhwIjoxNzkwNjE0OTcyfQ.rTBMFp-cIUGEO_1nsbd6IQBI3DejBoWNsYSjPbFJQTg",
        "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/partfolio/EMI/foto4.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9wYXJ0Zm9saW8vRU1JL2ZvdG80LmpwZyIsImlhdCI6MTc1OTA3ODk4MywiZXhwIjoxNzkwNjE0OTgzfQ.IGDkFCwQoIe-sAotAMG9CVCbQzLNwbPD6xBZijK2RK0",
        "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/partfolio/EMI/foto5.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9wYXJ0Zm9saW8vRU1JL2ZvdG81LmpwZyIsImlhdCI6MTc1OTA3OTAwNCwiZXhwIjoxNzkwNjE1MDA0fQ.Cv-HJLLvkkvkqOm_Hzx3nLU_6JlNOPu281GSCsM3VRs",
        "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/partfolio/EMI/foto6.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9wYXJ0Zm9saW8vRU1JL2ZvdG82LmpwZyIsImlhdCI6MTc1OTA3OTAxMiwiZXhwIjoxNzkwNjE1MDEyfQ._gghb9kQsCAb8DYGiFe3pZv0s91zXnG4WQZfsAdIwnw",
        "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/partfolio/EMI/foto7.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9wYXJ0Zm9saW8vRU1JL2ZvdG83LmpwZyIsImlhdCI6MTc1OTA3OTAzNywiZXhwIjoxNzkwNjE1MDM3fQ.BzMKUwAvqVqED21DBNnIPpHoNfRKOiCah-DFDA3NOI4",
        "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/partfolio/EMI/foto8.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9wYXJ0Zm9saW8vRU1JL2ZvdG84LmpwZyIsImlhdCI6MTc1OTA3OTA0NSwiZXhwIjoxNzkwNjE1MDQ1fQ.lGZUGfBzCvEUZL4D9eBMS8k_peIz5jDHPnxi8DRjDTM",
        "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/partfolio/EMI/foto9.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9wYXJ0Zm9saW8vRU1JL2ZvdG85LmpwZyIsImlhdCI6MTc1OTA3OTA1MiwiZXhwIjoxNzkwNjE1MDUyfQ.A9W1BCnTy3yfKRq_AtKe1N-p9xXbjVksJCVYINYhhQk",
        "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/partfolio/EMI/foto10.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9wYXJ0Zm9saW8vRU1JL2ZvdG8xMC5qcGciLCJpYXQiOjE3NTkwNzg5NDgsImV4cCI6MTc5MDYxNDk0OH0._GfNh3zLmJRgRuELqQ9k_nU_IdXxqSUBocvWiwckfbY"
      ]
    },
    {
      name: "LUCIVIY",
      title: "Мастер черной графики",
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
      avatar: "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/avatars/luciviy_avatar.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9hdmF0YXJzL2x1Y2l2aXlfYXZhdGFyLmpwZyIsImlhdCI6MTc1OTA3MjgxNiwiZXhwIjoxNzkwNjA4ODE2fQ.tzN2sUpBkH5ADmED6_zkUtONQI7aUFmaR47f7L45zLU",
      portfolio: [
        "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/partfolio/LUCIVIY/foto1.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9wYXJ0Zm9saW8vTFVDSVZJWS9mb3RvMS5qcGciLCJpYXQiOjE3NTkwODA3MTUsImV4cCI6MTc5MDYxNjcxNX0.EyRnQ0bBytOCNVwgsCCORUKGVxI4fio9O6_a9rmNZOM",
        "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/partfolio/LUCIVIY/foto2.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9wYXJ0Zm9saW8vTFVDSVZJWS9mb3RvMi5qcGciLCJpYXQiOjE3NTkwODA3ODIsImV4cCI6MTc5MDYxNjc4Mn0.q18vJ6OetXoq-GAsx4fl70bUV9C3tpIWyE2SbJcg21w",
        "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/partfolio/LUCIVIY/foto3.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9wYXJ0Zm9saW8vTFVDSVZJWS9mb3RvMy5qcGciLCJpYXQiOjE3NTkwODA3OTAsImV4cCI6MTc5MDYxNjc5MH0.siN8Jcg-uyuFB1akjBVUlzRXVY_RQ9wfelQePL6mV0o",
        "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/partfolio/LUCIVIY/foto4.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9wYXJ0Zm9saW8vTFVDSVZJWS9mb3RvNC5qcGciLCJpYXQiOjE3NTkwODA3OTcsImV4cCI6MTc5MDYxNjc5N30.5o5P4aSgJEldhTNAudWqqzJ3tMJZa7X-1mlQtSznT4o",
        "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/partfolio/LUCIVIY/foto5.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9wYXJ0Zm9saW8vTFVDSVZJWS9mb3RvNS5qcGciLCJpYXQiOjE3NTkwODA4MDUsImV4cCI6MTc5MDYxNjgwNX0.nBiAuAwDfTQbFCDr83ZYLdkWt3GtxPpnUyJRy1iC2eo",
        "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/partfolio/LUCIVIY/foto6.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9wYXJ0Zm9saW8vTFVDSVZJWS9mb3RvNi5qcGciLCJpYXQiOjE3NTkwODA4MDksImV4cCI6MTc5MDYxNjgwOX0.TwyhnUBhKrNWcQp4kaNphs78D8fDCvFjCu2GmPD-j8c",
        "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/partfolio/LUCIVIY/foto7.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9wYXJ0Zm9saW8vTFVDSVZJWS9mb3RvNy5qcGciLCJpYXQiOjE3NTkwODA4MTksImV4cCI6MTc5MDYxNjgxOX0.ye0tDWZJoBArT0CCCTZ8hydENExpEY6HfB9uwEx4xSI",
        "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/partfolio/LUCIVIY/foto8.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9wYXJ0Zm9saW8vTFVDSVZJWS9mb3RvOC5qcGciLCJpYXQiOjE3NTkwODA4MzAsImV4cCI6MTc5MDYxNjgzMH0.ImSChP6uyTAzpPaw6mjTAFV4aTKe85_abxJc42cBVeE"
      ]
    },
    {
      name: "BLOODIVAMP",
      title: "Мастер пирсинга и обработки оборудования",
      experience: "3+ лет опыта",
      specialization: "Пирсинг, обработка оборудования",
      description: "Профессиональный мастер пирсинга с глубокими знаниями в области обработки оборудования. Обеспечивает безопасность и качество процедур.",
      skills: [
        "Профессиональный пирсинг",
        "Обработка инструментов",
        "Обработка оборудования",
        "Консультации по уходу",
        "Работа с разными типами кожи"
      ],
      avatar: "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/avatars/blodivamp_avatar.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9hdmF0YXJzL2Jsb2RpdmFtcF9hdmF0YXIuanBnIiwiaWF0IjoxNzU5MDcyNzYxLCJleHAiOjE3OTA2MDg3NjF9.tzwakgESBSPKLpmefdazaB4_N75KLhSDoGWGXvDWOYQ",
      portfolio: [
        "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/partfolio/Blodivamp/foto1.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9wYXJ0Zm9saW8vQmxvZGl2YW1wL2ZvdG8xLmpwZyIsImlhdCI6MTc1OTA3NzkzNywiZXhwIjoxNzkwNjEzOTM3fQ.rruqXOOjQZaX5KXGPBbG9q9XlJ97yYv_uTCScWs89To",
        "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/partfolio/Blodivamp/foto2.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9wYXJ0Zm9saW8vQmxvZGl2YW1wL2ZvdG8yLmpwZyIsImlhdCI6MTc1OTA3Nzk2NCwiZXhwIjoxNzkwNjEzOTY0fQ.OnuGihOGt3bMmQqkQq9b7LlHCMDPCafKXldvxlJxTnM",
        "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/partfolio/Blodivamp/foto3.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9wYXJ0Zm9saW8vQmxvZGl2YW1wL2ZvdG8zLmpwZyIsImlhdCI6MTc1OTA3Nzk4MywiZXhwIjoxNzkwNjEzOTgzfQ.CU4ZnFtk15yu0ceMWrTAp3k0pe9UWfPYvnx-jHCyiLI",
        "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/partfolio/Blodivamp/foto4.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9wYXJ0Zm9saW8vQmxvZGl2YW1wL2ZvdG80LmpwZyIsImlhdCI6MTc1OTA3Nzk5NCwiZXhwIjoxNzkwNjEzOTk0fQ.Bl1QJMqTyXlDS9O957gGGbJ2gcenpCsCcCBDZy1OhNE",
        "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/partfolio/Blodivamp/foto5.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9wYXJ0Zm9saW8vQmxvZGl2YW1wL2ZvdG81LmpwZyIsImlhdCI6MTc1OTA3ODAwMiwiZXhwIjoxNzkwNjE0MDAyfQ.11TdI0Xl-vVuH5rnISSwG6LB163PUKIfzlUAxVftwzM",
        "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/partfolio/Blodivamp/foto6.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9wYXJ0Zm9saW8vQmxvZGl2YW1wL2ZvdG82LmpwZyIsImlhdCI6MTc1OTA3ODAxMCwiZXhwIjoxNzkwNjE0MDEwfQ.wl8iy6c6rQXov99uiebGF2TEgzJP17AhJmCsSRD12wE",
        "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/partfolio/Blodivamp/foto7.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9wYXJ0Zm9saW8vQmxvZGl2YW1wL2ZvdG83LmpwZyIsImlhdCI6MTc1OTA3ODE4OSwiZXhwIjoxNzkwNjE0MTg5fQ.42YOrqbB2cAWJrNJtA90nN2gX_j8ICZ4DYuJ17-cHac",
        "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/partfolio/Blodivamp/foto8.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9wYXJ0Zm9saW8vQmxvZGl2YW1wL2ZvdG84LmpwZyIsImlhdCI6MTc1OTA3ODAyNCwiZXhwIjoxNzkwNjE0MDI0fQ.B9f8ZQl5bvmg4UoThFYfAxhnQfdMW5n-bfjUwztOia8"
      ]
    },
    {
      name: "DAGON",
      title: "Ведущий текстовых лекций",
      experience: "2+ лет опыта",
      specialization: "Технические задания, эскизы",
      description: "Специалист по подготовке технических заданий для рисования эскизов. Владеет техниками как грей-вош, так и плотных закрасок черным.",
      skills: [
        "Грей-вош",
        "Плотные закраски черным",
        "Подготовка ТЗ для эскизов",
        "Систематизация знаний",
        "Создание обучающего контента"
      ],
      avatar: "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/avatars/DAGON_avatar.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9hdmF0YXJzL0RBR09OX2F2YXRhci5qcGciLCJpYXQiOjE3NTkwNzI3NzksImV4cCI6MTc5MDYwODc3OX0.31K4pj5AAZEXU8ElDo3Jjhsb_YURygxYOvwzerqmpqA",
      portfolio: [
        "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/partfolio/DAGON/foto1.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9wYXJ0Zm9saW8vREFHT04vZm90bzEuanBnIiwiaWF0IjoxNzU5MDczNjYwLCJleHAiOjE3OTA2MDk2NjB9.BZUVc9PEKtN3dyNCi9vv3dsZYLnWIiRnhMw7F9acZR0",
        "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/partfolio/DAGON/foto2.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9wYXJ0Zm9saW8vREFHT04vZm90bzIuanBnIiwiaWF0IjoxNzU5MDczNjcxLCJleHAiOjE3OTA2MDk2NzF9.GIhic3UzpsFv9Lssd4HO_80q9sqorkXiKnhmmW0GOQM",
        "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/partfolio/DAGON/foto3.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9wYXJ0Zm9saW8vREFHT04vZm90bzMuanBnIiwiaWF0IjoxNzU5MDczNjgzLCJleHAiOjE3OTA2MDk2ODN9.fvxGimrdAvNj1crFCbtFZrNcpMp_J8W5xgSm-wkMeiQ",
        "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/partfolio/DAGON/foto4.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9wYXJ0Zm9saW8vREFHT04vZm90bzQuanBnIiwiaWF0IjoxNzU5MDczNjg5LCJleHAiOjE3OTA2MDk2ODl9.xqtwiRv3aXQsnc7SsDkbZCFFhTye_pxLeV8TPPHTEHE",
        "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/partfolio/DAGON/foto5.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9wYXJ0Zm9saW8vREFHT04vZm90bzUuanBnIiwiaWF0IjoxNzU5MDczNjk3LCJleHAiOjE3OTA2MDk2OTd9.TmmRKTGDYiTtAct-1b9vAkVmaZeRzGfW0Mhd-GfrIlA",
        "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/partfolio/DAGON/foto6.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9wYXJ0Zm9saW8vREFHT04vZm90bzYuanBnIiwiaWF0IjoxNzU5MDczNzAzLCJleHAiOjE3OTA2MDk3MDN9.Iq6856pk3a3euXiTbs8KabqRwEbQz8pJ-B4n9P3BSGc",
        "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/partfolio/DAGON/foto7.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9wYXJ0Zm9saW8vREFHT04vZm90bzcuanBnIiwiaWF0IjoxNzU5MDczNzExLCJleHAiOjE3OTA2MDk3MTF9.Cw52wuYf9cTDRqd_oKwGQOfjyVFjo62r_z9QdNG2dts",
        "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/partfolio/DAGON/foto8.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9wYXJ0Zm9saW8vREFHT04vZm90bzguanBnIiwiaWF0IjoxNzU5MDczNzE3LCJleHAiOjE3OTA2MDk3MTd9.KOfdWUayH0B6yQxSv0f484Ztwbu6MtiTRgg2H3251Yg"
      ]
    },
    {
      name: "АЛИСА",
      title: "Помощник и наставник",
      experience: "Активно растущий профиль",
      specialization: "Психология работы, модели",
      description: "Отлично знает, как важно правильно выстроить общение с моделями. Находится \"на одной волне\" с начинающими мастерами и понимает все их трудности.",
      skills: [
        "Общение с моделями",
        "Сарафанное радио",
        "Работа в студии",
        "Развитие соцсетей",
        "Поддержка новичков"
      ],
      avatar: "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/avatars/alisa_avatar3.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9hdmF0YXJzL2FsaXNhX2F2YXRhcjMuanBnIiwiaWF0IjoxNzU5MDczMjgzLCJleHAiOjE3OTA2MDkyODN9.lr0s_b8eHyvAMVfhbdoZhLk2uWYf_08XEWtWObqPyRo",
      portfolio: [
        "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/partfolio/Alisa/foto1.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9wYXJ0Zm9saW8vQWxpc2EvZm90bzEuanBnIiwiaWF0IjoxNzU5MDc1MzA0LCJleHAiOjE3OTA2MTEzMDR9.vN8yDyWtCJhsbeuad5M7pGyzHKXmyz26x22DN5Pwauo",
        "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/partfolio/Alisa/foto2.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9wYXJ0Zm9saW8vQWxpc2EvZm90bzIuanBnIiwiaWF0IjoxNzU5MDc1MzQ0LCJleHAiOjE3OTA2MTEzNDR9.O1D7kLmTkeaDf-PM1pt70lb_h81wdhu1Ge7U7AKZ-aE",
        "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/partfolio/Alisa/foto3.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9wYXJ0Zm9saW8vQWxpc2EvZm90bzMuanBnIiwiaWF0IjoxNzU5MDc1NDcyLCJleHAiOjE3OTA2MTE0NzJ9.fSHXFWGgFYAS_X-vpvKw6E7o3UWb-PvLbHzSWP5WEPs",
        "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/partfolio/Alisa/foto4.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9wYXJ0Zm9saW8vQWxpc2EvZm90bzQuanBnIiwiaWF0IjoxNzU5MDc1MzU1LCJleHAiOjE3OTA2MTEzNTV9.bqFMFke6qZUE6aPePSUvAQmOSGT7vuNwf6ciwSmj3sM",
        "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/partfolio/Alisa/foto5.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9wYXJ0Zm9saW8vQWxpc2EvZm90bzUuanBnIiwiaWF0IjoxNzU5MDc1MzYxLCJleHAiOjE3OTA2MTEzNjF9.jITv7rDOKh_XmaWvnXOypt1QEYTUol3frXaiFbYDZGY",
        "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/partfolio/Alisa/foto6.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9wYXJ0Zm9saW8vQWxpc2EvZm90bzYuanBnIiwiaWF0IjoxNzU5MDc1MzY3LCJleHAiOjE3OTA2MTEzNjd9.UrqdnVFwQQ6KlyReKqmK36F2TRY8M1LblMSOoSR-s58",
        "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/partfolio/Alisa/foto7.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9wYXJ0Zm9saW8vQWxpc2EvZm90bzcuanBnIiwiaWF0IjoxNzU5MDc1MzcyLCJleHAiOjE3OTA2MTEzNzJ9.o8qHlP0TTfhA0aODBrAimddMnKhUPhWucJq0YPpu7sw",
        "https://lhosbbgiqgnrrrfjocsw.supabase.co/storage/v1/object/sign/SBT/site/teachers/partfolio/Alisa/foto8.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOTE2YmRmOS1kM2Q2LTQ5ODMtOGU0Ni0yY2M2ZjEzNjFkMmQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTQlQvc2l0ZS90ZWFjaGVycy9wYXJ0Zm9saW8vQWxpc2EvZm90bzguanBnIiwiaWF0IjoxNzU5MDc1Mzc5LCJleHAiOjE3OTA2MTEzNzl9.woftRfBHStIYjrPi_10vmjL78S4dKh7UTomic9UVClM"
      ]
    }
  ];

  // Функции для навигации по портфолио
  const openPortfolioImage = (imageUrl: string, instructor: any) => {
    const imageIndex = instructor.portfolio.findIndex((img: string) => img === imageUrl);
    setCurrentImageIndex(imageIndex);
    setCurrentInstructor(instructor);
    setSelectedPortfolioImage(imageUrl);
  };

  const navigatePortfolio = (direction: 'prev' | 'next') => {
    if (!currentInstructor) return;
    
    const totalImages = currentInstructor.portfolio.length;
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : totalImages - 1;
    } else {
      newIndex = currentImageIndex < totalImages - 1 ? currentImageIndex + 1 : 0;
    }
    
    setCurrentImageIndex(newIndex);
    setSelectedPortfolioImage(currentInstructor.portfolio[newIndex]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') navigatePortfolio('prev');
    if (e.key === 'ArrowRight') navigatePortfolio('next');
    if (e.key === 'Escape') setSelectedPortfolioImage(null);
  };

  // Функции для свайп-навигации
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      navigatePortfolio('next');
    }
    if (isRightSwipe) {
      navigatePortfolio('prev');
    }
  };

  return (
    <section id="instructors" className="py-20 relative">
      {/* Background patterns - под основным контентом */}
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
        <div className="absolute top-20 left-10 w-96 h-96 opacity-5">
          <img src={abstractShapes22} alt="" className="w-full h-full object-contain filter invert rotate-60" />
        </div>
        <div className="absolute bottom-10 right-0 w-96 h-96 opacity-5">
          <img src={abstractShapes221} alt="" className="w-full h-full object-contain filter invert -rotate-90" />
        </div>
        <div className="absolute top-1/2 left-0 w-96 h-96 opacity-5">
          <img src={geometricCollection} alt="" className="w-full h-full object-contain filter invert rotate-135" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-pixel text-pixel mb-4 flex items-center justify-center gap-2">
            <span>👥</span>
            <span>НАШИ ПРЕПОДАВАТЕЛИ</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Команда профессионалов с многолетним опытом в татуировке и обучении
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {instructors.map((instructor, index) => (
            <Card key={index} className="geometric-border hover-lift bg-gradient-to-br from-background to-background/80 border-2 border-primary/40 shadow-xl shadow-primary/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none"></div>
              <div className="relative z-10">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="avatar-stories cursor-pointer hover:scale-110 transition-transform duration-200" onClick={() => setSelectedAvatar(instructor.avatar)}>
                      <img 
                        src={instructor.avatar} 
                        alt={`${instructor.name} avatar`}
                        className="object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling.style.display = 'flex';
                        }}
                      />
                      <div className="bg-primary/20 flex items-center justify-center text-primary font-pixel text-lg rounded-full" style={{display: 'none', width: '58px', height: '58px'}}>
                        {instructor.name.charAt(0)}
                      </div>
                    </div>
                  <div>
                      <CardTitle className="text-2xl font-pixel text-pixel mb-2 drop-shadow-lg">
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
                </div>
                <div className="border-l-4 border-primary pl-4 mt-4 bg-gradient-to-r from-primary/15 to-primary/5 rounded-r-lg py-3 shadow-sm">
                  <div className="text-sm font-medium text-primary mb-1 font-pixel">🎯 Специализация:</div>
                  <div className="text-foreground font-semibold">{instructor.specialization}</div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {instructor.description}
                </p>
                
                <div className="mb-6 pixel-grid border border-primary/40 rounded-lg p-6">
                  <div className="text-sm font-medium text-secondary mb-3 font-pixel">⚡ Ключевые навыки:</div>
                  <div className="space-y-2">
                    {instructor.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-secondary rounded-full shadow-sm"></div>
                        <span className="text-sm text-foreground font-semibold">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="flex space-x-2">
                    {/* Кнопка [i] инфо */}
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="btn-pixel-secondary font-pixel text-xs btn-3d shadow-lg"
                      onClick={() => setSelectedInstructorInfo(instructor.name)}
                    >
                      [i]
                    </Button>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="btn-3d btn-pixel-secondary font-pixel text-xs shadow-lg heartbeat hover:animate-none"
                          onClick={() => setSelectedInstructor(instructor.name)}
                        >
                          📷 ПОРТФОЛИО
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-[95vw] md:max-w-4xl max-h-[90vh] overflow-y-auto z-[10000] mx-2 md:mx-auto">
                        <DialogHeader>
                          <DialogTitle className="font-pixel text-pixel text-2xl">
                            📷 ПОРТФОЛИО {instructor.name}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                          {instructor.portfolio.map((image, index) => (
                            <div key={index} className="relative group cursor-pointer" onClick={() => openPortfolioImage(image, instructor)}>
                              <img 
                                src={image} 
                                alt={`${instructor.name} work ${index + 1}`}
                                className="w-full h-48 object-cover rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300"
                                onError={(e) => {
                                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBub3QgZm91bmQ8L3RleHQ+Cjwvc3ZnPg==';
                                }}
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <span className="text-white font-pixel text-sm bg-black/50 px-2 py-1 rounded">
                                  Работа {index + 1}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </CardContent>
              </div>
            </Card>
          ))}
        </div>

      </div>

      {/* Avatar Popup */}
      <Dialog open={!!selectedAvatar} onOpenChange={() => setSelectedAvatar(null)}>
        <DialogContent className="max-w-[95vw] md:max-w-md mx-auto bg-gradient-to-br from-background to-background/80 border-2 border-primary/40 shadow-xl z-[10000] mx-2 md:mx-auto">
          <DialogHeader>
            <DialogTitle className="text-center mb-6 font-pixel text-pixel">
              Аватар преподавателя
            </DialogTitle>
          </DialogHeader>
          <div className="flex justify-center">
            {selectedAvatar && (
              <img 
                src={selectedAvatar} 
                alt="Аватар преподавателя" 
                className="w-80 h-80 object-cover rounded-lg border-2 border-primary/40 shadow-lg"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Portfolio Image Popup */}
      <Dialog open={!!selectedPortfolioImage} onOpenChange={() => setSelectedPortfolioImage(null)}>
        <DialogContent 
          className="max-w-[95vw] md:max-w-6xl max-h-[90vh] overflow-hidden bg-gradient-to-br from-background to-background/80 border-2 border-primary/40 shadow-xl px-4 py-6 z-[10000] mx-2 md:mx-auto"
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <DialogHeader>
            <DialogTitle className="text-center mb-6 font-pixel text-pixel">
              📷 ПОРТФОЛИО {currentInstructor?.name} ({currentImageIndex + 1}/{currentInstructor?.portfolio.length})
            </DialogTitle>
          </DialogHeader>
          {selectedPortfolioImage && currentInstructor && (
            <div className="flex justify-center items-center">
              {/* Изображение с поддержкой свайпа */}
              <img 
                src={selectedPortfolioImage} 
                alt={`${currentInstructor.name} work ${currentImageIndex + 1}`}
                className="max-w-full max-h-[70vh] object-contain rounded-lg border border-primary/20 touch-none select-none"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              />
            </div>
          )}
          
          {/* Индикаторы навигации и кнопки */}
          {currentInstructor && (
            <div className="flex justify-center items-center mt-4 space-x-4 px-8">
              {/* Кнопка "Назад" - скрыта на мобильных */}
              <Button
                onClick={() => navigatePortfolio('prev')}
                className="btn-pixel-secondary hidden md:flex flex-shrink-0"
                size="sm"
              >
                ←
              </Button>
              
              {/* Индикаторы - всегда видны */}
              <div className="flex space-x-2 flex-shrink-0">
                {currentInstructor.portfolio.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentImageIndex(index);
                      setSelectedPortfolioImage(currentInstructor.portfolio[index]);
                    }}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentImageIndex 
                        ? 'bg-primary' 
                        : 'bg-primary/30 hover:bg-primary/50'
                    }`}
                  />
                ))}
              </div>
              
              {/* Кнопка "Вперед" - скрыта на мобильных */}
              <Button
                onClick={() => navigatePortfolio('next')}
                className="btn-pixel-secondary hidden md:flex flex-shrink-0"
                size="sm"
              >
                →
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Instructor Info Popups */}
      <Dialog open={!!selectedInstructorInfo} onOpenChange={() => setSelectedInstructorInfo(null)}>
        <DialogContent className="max-w-[95vw] md:max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-background to-background/80 border-2 border-primary/40 shadow-xl z-[10000] mx-2 md:mx-auto">
          <DialogHeader>
            <DialogTitle className="text-center mb-6 font-pixel text-pixel">
              ℹ️ ПОДРОБНАЯ ИНФОРМАЦИЯ
            </DialogTitle>
          </DialogHeader>
          
          {selectedInstructorInfo === "EMI" && (
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-background to-background/80 border border-primary/40 rounded-lg p-6">
                <h3 className="text-xl font-pixel text-pixel mb-4">Эмили - СЕО, тату-мастер и преподаватель</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Эмили занимается татуировкой уже более 5 лет, а последние 2 года активно обучает начинающих и действующих мастеров.
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-primary mb-2">🎯 За это время она:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• провела десятки обучающих программ и лекций</li>
                    <li>• помогла десяткам учеников выйти в профессию</li>
                    <li>• прошла через множество нестандартных ситуаций в индустрии и делится этим опытом открыто</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-secondary mb-2">✨ Она не только практикующий мастер, но и человек, который:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• ведёт активные соцсети</li>
                    <li>• пробует себя в разных творческих направлениях</li>
                    <li>• постоянно учится и делится актуальными знаниями с учениками</li>
                  </ul>
                </div>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  Эмили — преподаватель, который говорит на одном языке, честно показывает реальную сторону профессии и даёт только практичные знания.
                </p>
              </div>
            </div>
          )}

          {selectedInstructorInfo === "LUCIVIY" && (
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-background to-background/80 border border-primary/40 rounded-lg p-6">
                <h3 className="text-xl font-pixel text-pixel mb-4">LUCIVIY - Мастер черной графики</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Виктория наш онлайн лектор и татуировщик с более чем 8-летним опытом работы.
                  Специализируется на направлении чёрная графика, уделяя особое внимание мрачной стилистике. 
                  В её работах преобладает техническое мастерство, аккуратность и большое количество мелких деталей.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Вика с радостью научит вас важным навыкам: водить ровные полоски, создавать аккуратные випы, 
                  грамотно располагать эскизы в соответствии с анатомией и стилизовать изображения. 
                  Огромным скиллом Вики также является скорость-она знает как делать работы очень быстро.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Она открыта для общения, готова делиться знаниями и опытом, а также давать объективную критику, 
                  которая поможет взглянуть на свои работы со стороны и постоянно совершенствоваться.
                </p>
              </div>
            </div>
          )}

          {selectedInstructorInfo === "BLOODIVAMP" && (
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-background to-background/80 border border-primary/40 rounded-lg p-6">
                <h3 className="text-xl font-pixel text-pixel mb-4">BLOODIVAMP - Мастер пирсинга</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Влада-мастера пирсинга с большой базой образовательных видео в TikTok и обширными знаниями 
                  в области обработки, очистки и стерилизации оборудования.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Наш онлайн-лектор специализируется на вопросах обработки рабочих мест, стерилизации и ухода за инструментами, 
                  что особенно важно в сфере пирсинга и татуировки, так как эти области часто пересекаются, 
                  особенно в вопросах заботы о безопасности и гигиене.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Влада подробно расскажет о правильной сборке и разборке рабочего пространства, обработке держателей, 
                  сухожарах и других важных аспектов, связанных с подготовкой и стерилизацией.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Поскольку степень травматизации кожи при пирсинге значительно выше, чем при татуировке, 
                  профессионалы в этой сфере особенно хорошо осведомлены о тонкостях и необходимости строгого 
                  соблюдения гигиенических стандартов.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Задача Влады — помочь вам разобраться в важнейших вопросах безопасного проведения процедур 
                  и повышения профессионального уровня!
                </p>
              </div>
            </div>
          )}

          {selectedInstructorInfo === "DAGON" && (
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-background to-background/80 border border-primary/40 rounded-lg p-6">
                <h3 className="text-xl font-pixel text-pixel mb-4">DAGON - Ведущий текстовых лекций</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Наш ведущий текстовых лекций и специалист по подготовке технических заданий для рисования эскизов. 
                  Уже много лет он успешно занимается татуировкой, активно занимается сбором и систематизацией 
                  информации для нашего обучающего канала, постоянно пополняя его новым ценным контентом.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Он владеет техниками как плавных теней с помощью грей-воша, так и плотных закрасок черным.
                </p>
              </div>
            </div>
          )}

          {selectedInstructorInfo === "АЛИСА" && (
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-background to-background/80 border border-primary/40 rounded-lg p-6">
                <h3 className="text-xl font-pixel text-pixel mb-4">АЛИСА - Наш милейший помощник</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Алиса-наш милейший помощник, которая всегда готова ответить вам на любые вопросы, 
                  касающиеся теории, психологической составляющей работы или нюансов взаимодействия с клиентами. 
                  Она отлично знает, как важно правильно выстроить общение с клиентами, как усилить сарафанное радио 
                  и наладить плодотворное взаимодействие на студии.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Несмотря на то, что Алиса сравнительно недавно начала работать в сфере татуировки, 
                  её кейс уже показывает впечатляющие результаты. Она стабильно работает в Москве, 
                  её социальные сети активно растут, и она достигает новых успехов.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Алиса-это человек, который находится «на одной волне» с начинающими мастерами. 
                  Она прекрасно понимает все боли и сложности, с которыми сталкиваются те, кто только вступает в этот мир. 
                  Благодаря её опыту и искреннему желанию помочь, она станет замечательным наставником и партнером в вашей работе.
                </p>
        </div>
      </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default InstructorsSection;