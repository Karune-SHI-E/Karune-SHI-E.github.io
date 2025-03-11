document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.querySelector('#color-toggle-btn'); // 夜间模式切换按钮的选择器
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDarkMode = document.documentElement.getAttribute('data-user-color-scheme') === 'dark';
      if (isDarkMode) {
        document.documentElement.style.setProperty('--border-color', '#444');
        document.documentElement.style.setProperty('--body-bg-color', '#222');
        document.documentElement.style.setProperty('--primary-color', '#00ff80');
      } else {
        document.documentElement.style.setProperty('--border-color', '#ccc');
        document.documentElement.style.setProperty('--body-bg-color', '#f9f9f9');
        document.documentElement.style.setProperty('--primary-color', '#3498db');
      }
    });
  }
});
