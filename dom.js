const container = document.querySelector('.red');

const redContent = document.createElement('p');
redContent.classList.add('redtext');
redContent.textContent = 'Hey I\'m red!';
redContent.style.color = 'red';

container.appendChild(redContent);

const body = document.querySelector('body');

const purpleTitle = document.createElement('h3');
purpleTitle.classList.add('purplehead');
purpleTitle.textContent = 'I\m a purple h3';
purpleTitle.style.color = 'purple';

body.appendChild(purpleTitle);

const divContainer = document.querySelector('div');

const div = document.createElement('div');
div.style.cssText = 'border: black; background: pink;';

const p = document.createElement('p');
p.textContent = 'ME TOO!';
div.appendChild(p);

const h1 = document.createElement('h1');
h1.textContent = 'I\m in a div!';
div.appendChild(h1);

body.appendChild(div);


