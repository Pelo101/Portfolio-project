const themeRadios = document.querySelectorAll('input[name="theme"]');
const savedTheme = localStorage.getItem('theme') || 'pink';

document.documentElement.setAttribute('data-theme', savedTheme);
document.querySelector(`input[value="${savedTheme}"]`).checked = true;

themeRadios.forEach(radio => {
  radio.addEventListener('change', () => {
    const selectedTheme = radio.value;
    document.documentElement.setAttribute('data-theme', selectedTheme);
    localStorage.setItem('theme', selectedTheme);
  });
});