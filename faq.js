// === FAQ JS ===
document.querySelectorAll('.accordion-title').forEach((title) => {
    title.addEventListener('click', () => {
      const parent = title.parentElement;
      const content = parent.querySelector('.accordion-content');
  
      // The State Of The Toggle Is Either Active Or Not
      parent.classList.toggle('active');
  
      // Transition Animation
      if (parent.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = "0";
      }
  
      // If Accordion Dropdown List Is Open Close Other Accordion Dropdown List
      document.querySelectorAll('.accordion-item').forEach((item) => {
        if (item !== parent) {
          item.classList.remove('active');
          item.querySelector('.accordion-content').style.maxHeight = "0";
        }
      });
    });
  });
  