import { createElement } from './create-element';

function loadCore() {
  const content = document.querySelector('#content');
  
  const overlay = createElement('div', 'overlay', '');
  content.appendChild(overlay);

  const header = createElement('div', 'header', '');
  overlay.appendChild(header);

  const logo = createElement('div', 'logo', 'ODIN BAR');
  header.appendChild(logo);

  const navContainer = createElement('div', 'nav-container', '');
  header.appendChild(navContainer);

  const navUL = createElement('ul', 'nav', '');
  navContainer.appendChild(navUL);

  const navListArray = ['HOME', 'MENU', 'CONTACT'];
  const navClasses = ['nav-home', 'nav-menu', 'nav-contact'];

  navListArray.forEach((text, index) => {
    const li = createElement('li', navClasses[index], text);
    navUL.appendChild(li);
  });
}

export {
  loadCore
};