import { createElement } from './create-element';
import Map from './assets/images/map.png';

function loadContact() {
  const overlay = document.querySelector('.overlay');

  const contactContainer = createElement('div', 'contact-container', '');
  overlay.appendChild(contactContainer);

  const contact = createElement('div', 'contact', '');
  contactContainer.appendChild(contact);

  const openingTimesContainer = createElement('div', '', '');
  contact.appendChild(openingTimesContainer);

  const openingTimesTitle = createElement('p', 'title', 'OPENING TIMES');
  openingTimesContainer.appendChild(openingTimesTitle);

  const openingTimesInfo = createElement('div', 'opening-times', '');
  openingTimesContainer.appendChild(openingTimesInfo);

  const openingTimes = ['MONDAY: CLOSED', 'TUESDAY - SATURDAY: 4PM - 2AM', 'SUNDAY: 4PM - 12AM'];
  openingTimes.forEach(item => {
    const p = createElement('p', '', item);
    openingTimesInfo.appendChild(p);
  });

  const numberContainer = createElement('div', '', '');
  contact.appendChild(numberContainer);

  const numberTitle = createElement('p', 'title', 'TEL');
  numberContainer.appendChild(numberTitle);

  const number = createElement('p', '', '(414)907-5823');
  numberContainer.appendChild(number);

  const addressContainer = createElement('div', '', '');
  contact.appendChild(addressContainer);

  const addressTitle = createElement('p', 'title', 'ADDRESS');
  addressContainer.appendChild(addressTitle);

  const address = createElement('p', '', '241 CENTRE ST, NEW YORK, NY 10013');
  addressContainer.appendChild(address);

  const mapContainer = createElement('div', '', '');
  contact.appendChild(mapContainer);

  const mapTitle = createElement('p', 'title', 'FIND US');
  mapContainer.appendChild(mapTitle);

  const mapImg = document.createElement('img');
  mapImg.src = Map;
  mapImg.alt = 'map showing location of the venue';
  mapContainer.appendChild(mapImg);
}

export {
  loadContact
};