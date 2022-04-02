import './style.css';
import { loadCore } from './load-page-core';
import { loadHome } from './load-home';
import { loadMenu } from './load-menu';
import { loadContact } from './load-contact';
import { clearContent } from './clear-content';

// initial page load
loadCore();
loadHome();

let currentTab = 'home';
displaySelectedTab(currentTab);

const navContainer = document.querySelector('.nav-container');
navContainer.addEventListener('click', (e) => {
  if (currentTab !== 'home' && e.target.classList.contains('nav-home')) {
    clearContent();
    loadHome();
    addReservationsEventHandler();
    currentTab = 'home';
    displaySelectedTab(currentTab);

  } else if (currentTab !== 'menu' && e.target.classList.contains('nav-menu')) {
    clearContent();
    loadMenu();
    currentTab = 'menu';
    displaySelectedTab(currentTab);

  } else if (currentTab !== 'contact' && e.target.classList.contains('nav-contact')) {
    clearContent();
    loadContact();
    currentTab = 'contact';
    displaySelectedTab(currentTab);
  }
});

const logo = document.querySelector('.logo');
logo.addEventListener('click', () => {
  if (currentTab !== 'home') {
    clearContent();
    loadHome();
    addReservationsEventHandler();
    currentTab = 'home';
    displaySelectedTab(currentTab);
  }
});

function addReservationsEventHandler() {
  const reservationBtn = document.querySelector('.reservations');
  reservationBtn.addEventListener('click', () => {
    clearContent();
    loadContact();
    currentTab = 'contact';
    displaySelectedTab(currentTab);
  });
}

function displaySelectedTab(selectedTab) {
  const tabs = document.querySelectorAll('.nav li');
  tabs.forEach((tab) => {
    if (tab.classList.contains(`nav-${selectedTab}`)) {
      tab.classList.add('selected');
    } else {
      tab.classList.remove('selected');
    }
  })
}