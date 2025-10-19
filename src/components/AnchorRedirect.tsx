import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const AnchorRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Получаем путь без слеша в начале
    const path = location.pathname.substring(1);
    
    // Проверяем, является ли это якорной ссылкой
    const anchorRoutes = ['courses', 'reviews', 'instructors'];
    const nicheCourses = ['black', 'inless', 'oborudka'];
    
    if (anchorRoutes.includes(path)) {
      // Перенаправляем на главную страницу с якорем
      navigate(`/#${path}`, { replace: true });
    } else if (nicheCourses.includes(path)) {
      // Для нишевых курсов перенаправляем на курсы с конкретным якорем
      let targetCourse = '';
      if (path === 'black') targetCourse = 'Черная графика';
      else if (path === 'inless') targetCourse = 'Разовое индивидуальное занятие';
      else if (path === 'oborudka') targetCourse = 'Обработка оборудования';
      
      navigate(`/#courses`, { replace: true });
      
      // Дополнительная прокрутка к конкретному курсу
      setTimeout(() => {
        const courseElement = document.querySelector(`[data-course="${targetCourse}"]`);
        if (courseElement) {
          courseElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          courseElement.style.outline = '2px solid #00ff00';
          setTimeout(() => { 
            courseElement.style.outline = 'none'; 
          }, 3000);
        }
      }, 500);
    }
  }, [location.pathname, navigate]);

  // Не рендерим ничего, так как это только редирект
  return null;
};

export default AnchorRedirect;
