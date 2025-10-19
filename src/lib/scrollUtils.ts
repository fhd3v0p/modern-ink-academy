/**
 * Утилита для плавной прокрутки к элементам с учетом отступов
 */
export const scrollToElement = (elementId: string, offset: number = 80) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementRect = element.getBoundingClientRect();
    const absoluteElementTop = elementRect.top + window.pageYOffset;
    
    window.scrollTo({
      top: absoluteElementTop - offset,
      behavior: 'smooth'
    });
    return true;
  }
  return false;
};

/**
 * Прокрутка к курсам с дополнительной логикой для нишевых курсов
 */
export const scrollToCourses = (targetCourse?: string) => {
  const success = scrollToElement('courses', 80);
  
  if (success && targetCourse) {
    // Дополнительная прокрутка к конкретному курсу через 500ms
    setTimeout(() => {
      const proCourse = document.querySelector(`[data-course="${targetCourse}"]`);
      if (proCourse) {
        proCourse.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Подсвечиваем курс на 3 секунды
        (proCourse as HTMLElement).style.outline = '2px solid #00ff00';
        setTimeout(() => { 
          (proCourse as HTMLElement).style.outline = 'none'; 
        }, 3000);
      }
    }, 500);
  }
  
  return success;
};
