const body = document.querySelector('#body');
const button = document.querySelector('#changeColorBtn');

const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r},${g},${b},${Math.random()})`;
};

button.addEventListener('click', () => {
  body.style.backgroundColor = generateRandomColor();
  button.style.backgroundColor = generateRandomColor();
  button.style.color = generateRandomColor();
});

// writing random JS functions just for the commits

const addTwoNumbers = (a, b) => a + b;
