const divChange1 = () => {
    const di = document.querySelector('#div1');
    di.style.border = '5px ridge bisque';
    const p = document.createElement('p');
    p.textContent = 'I have been altered.'
    di.appendChild(p);
}

const divChange2 = () => {
  const di = document.querySelector("#div2");
  di.style.border = "5px groove purple";
  const p = document.createElement("p");
  p.textContent = "I have been altered 2.";
  di.appendChild(p);
};