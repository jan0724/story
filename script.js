// 導覽列滾動變色效果
window.addEventListener('scroll', () => {
    const nav = document.querySelector("nav");
    if (window.scrollY > 100) {
      nav.style.backgroundColor = "#2e7d32";
    } else {
      nav.style.backgroundColor = "#388e3c";
    }
  });
  