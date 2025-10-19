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
    
    if (anchorRoutes.includes(path)) {
      // Перенаправляем на главную страницу с якорем
      navigate(`/#${path}`, { replace: true });
    }
  }, [location.pathname, navigate]);

  return null;
};

export default AnchorRedirect;
