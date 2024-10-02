// Получаем элементы
const progressCircle = document.querySelector('.progress-ring__circle');
const radius = progressCircle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
progressCircle.style.strokeDashoffset = `${circumference}`;

function setProgress(value) {
  const offset = circumference - (value / 100) * circumference;
  progressCircle.style.strokeDashoffset = offset;
}

// Элементы управления
const valueInput = document.getElementById('valueInput');
const animateToggle = document.getElementById('animateToggle');
const hideToggle = document.getElementById('hideToggle');
const progressContainer = document.querySelector('.progress-container');

// Изменение значения
valueInput.addEventListener('input', (e) => {
  const value = e.target.value;
  setProgress(value);
});

// Включение/выключение анимации
animateToggle.addEventListener('change', (e) => {
  if (e.target.checked) {
    progressCircle.style.animation = 'rotate 2s linear infinite';
  } else {
    progressCircle.style.animation = 'none';
  }
});

// Скрытие/показ блока
hideToggle.addEventListener('change', (e) => {
  if (e.target.checked) {
    progressContainer.classList.remove('visible');
    progressContainer.classList.add('hidden');
  } else {
    progressContainer.classList.remove('hidden');
    progressContainer.classList.add('visible');
  }
});

// CSS для анимации вращения
const style = document.createElement('style');
style.innerHTML = `
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
document.head.appendChild(style);
