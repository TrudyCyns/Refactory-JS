const changeText = () => {
  const p = document.querySelector('p');
  p.textContent = 'I changed because of an event listener.';
  p.style.border = '5px groove red';
};

// Listening for click event.
const btn = document.querySelector('button');
btn.addEventListener('click', changeText);
