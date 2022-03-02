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
