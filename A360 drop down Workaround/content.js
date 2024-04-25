document.addEventListener('DOMNodeInserted', function () {
  const elements = document.querySelectorAll('[aria-owns]');
  elements.forEach(element => {
    element.removeAttribute('aria-owns');
  });
});
