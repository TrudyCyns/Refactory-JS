const changeText = () => {
  const p = document.querySelector('p');
  p.textContent = 'I changed because of an event listener.';
  p.style.border = '5px groove red';
};

// Listening for click event.
const btn = document.querySelector('button');
// Dont add brackets after function name because it is being used as an argument in another function (function called = a callback)
btn.addEventListener('click', changeText);
