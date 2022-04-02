import { createElement } from './create-element';

const cocktails = [
  {
    name: 'BAHAMA MAMA',
    description: 'Rum, Coconut Liqueur, Orange Juice, Pineapple Juice, Grenadine'
  },
  {
    name: 'COSMOPOLITAN',
    description: 'Vodka, Orange Liqueur, Cranberry Juice, Lime Juice'
  },
  {
    name: 'JOHN COLLINS',
    description: 'Whiskey, Lemon Juice, Simple Syrup, Soda Water'
  },
  {
    name: "MAIDEN'S PRAYER",
    description: 'Gin, Orange Liqueur, Orange Juice, Lemon Juice'
  },
  {
    name: 'PINA COLADA',
    description: 'Coconut Liqueur, Pineapple Juice, Cream of Coconut'
  },
  {
    name: 'BETWEEN THE SHEETS',
    description: 'Brandy, Rum, Orange Liqueur, Lemon Juice'
  }
];

const snacks = [
  {
    name: 'FRIED CHICKEN WINGS',
    description: 'Your choice of: Sweet chilli, soy garlic or no sauce'
  },
  {
    name: 'NACHOS',
    description: 'Nachos with cheese, chipotle salsa, sour cream and coriander'
  },
  {
    name: 'FRIED CALAMARI',
    description: 'Tender pieces of squid deep fried to golden brown perfection'
  },
  {
    name: 'MINI BEEF SLIDERS',
    description: 'Grass-fed beef patty with cheese, dill pickle and Dijon mayo'
  },
  {
    name: 'LOADED FRIES',
    description: 'Loaded fries with pulled pork, cheese, jalapeno, and sour cream'
  },
  {
    name: 'CHIPS',
    description: 'Beer battered chips served with sauce of your choice'
  }
];

function loadMenu() {
  const overlay = document.querySelector('.overlay');

  const menuContainer = createElement('div', 'menu-container', '');
  overlay.appendChild(menuContainer);

  const menu = createElement('div', 'menu', '');
  menuContainer.appendChild(menu);

  loadCocktailsMenu();
  loadSnacksMenu();
}

function loadCocktailsMenu() {
  const menu = document.querySelector('.menu');

  const cocktailsContainer = createElement('div', 'cocktails-container', '');
  menu.appendChild(cocktailsContainer);

  const cocktailsTitle = createElement('div', 'menu-title', 'COCKTAILS');
  cocktailsContainer.appendChild(cocktailsTitle);

  const menuItemsContainer = createElement('div', 'menu-items-container', '');
  cocktailsContainer.appendChild(menuItemsContainer);

  loadMenuItems(cocktails, 'cocktails');
}

function loadSnacksMenu() {
  const menu = document.querySelector('.menu');

  const snacksContainer = createElement('div', 'snacks-container', '');
  menu.appendChild(snacksContainer);

  const snacksTitle = createElement('div', 'menu-title', 'SNACKS');
  snacksContainer.appendChild(snacksTitle);

  const menuItemsContainer = createElement('div', 'menu-items-container', '');
  snacksContainer.appendChild(menuItemsContainer);

  loadMenuItems(snacks, 'snacks');
}

function loadMenuItems(menuArray, menuType) {
  const menuItemsContainer = (menuType === 'cocktails') ? 
    document.querySelector('.cocktails-container .menu-items-container') 
    : document.querySelector('.snacks-container .menu-items-container');

  menuArray.forEach(item => {
    const menuItem = createElement('div', 'menu-item', '');
    menuItemsContainer.appendChild(menuItem);

    const menuItemTitle = createElement('p', 'menu-item-title', item.name);
    menuItem.appendChild(menuItemTitle);

    const menuItemDescription = createElement('p', 'menu-item-description', item.description);
    menuItem.appendChild(menuItemDescription);
  });
}

export {
  loadMenu
};