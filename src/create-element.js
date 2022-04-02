function createElement(element, className, textContent) {
  const HtmlElement = document.createElement(element);
  if (className) HtmlElement.classList.add(className);
  if (textContent) HtmlElement.textContent = textContent;

  return HtmlElement;
}

export {
  createElement
};