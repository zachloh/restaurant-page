import { createElement } from './create-element';

 function loadHome() { 
  const overlay = document.querySelector('.overlay');

  const imageText = createElement('div', 'image-text', '');
  overlay.appendChild(imageText);

  const mainText = createElement('div', 'main-text', '');
  imageText.appendChild(mainText);

  const imageTextOne = createElement('div', '', 'EAT, DRINK');
  mainText.appendChild(imageTextOne);

  const imageTextTwo = createElement('div', '', '-BE MERRY');
  mainText.appendChild(imageTextTwo);

  const reservationBtn = createElement('button', 'reservations', '');
  imageText.appendChild(reservationBtn);

  const reservationSpan = createElement('span', '', 'RESERVATIONS');
  reservationBtn.appendChild(reservationSpan);

  const secondaryText = createElement('div', 'secondary-text', '');
  imageText.appendChild(secondaryText);

  const address = createElement('div', 'address', '241 CENTRE ST, NEW YORK, NY 10013');
  secondaryText.appendChild(address);

  const number = createElement('div', 'number', '(414)907-5823');
  secondaryText.appendChild(number);
}

export {
  loadHome 
};