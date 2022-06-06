const changeText = () => {
  const p = document.querySelector("p");
  p.textContent = "I changed because of an event listener.";
};

// Listening for click event.
const btn = document.querySelector("btn");
btn.addEventListener("click", changeText);
