function expandContent(event, button) {
  event.stopPropagation();
  const content = button.nextElementSibling;
  content.style.display = 'inline-block';
  button.classList.toggle('expanded');
  document.querySelectorAll('.contentMind').forEach(cnt => {
    if (cnt !== content) cnt.style.display = 'none';
  });
  document.querySelectorAll('.buttonMind').forEach(btn => {
    if (btn !== button) btn.classList.remove('expanded');
  });
}

function closeContent(event, element) {
  event.stopPropagation();
  element.parentElement.style.display = 'none';
  element.parentElement.previousElementSibling.classList.remove('expanded');
}

function closeAllContents(event) {
  if (event.target.closest('.contentMind') || event.target.closest('.buttonMind')) return;
  document.querySelectorAll('.contentMind').forEach(content => content.style.display = 'none');
  document.querySelectorAll('.buttonMind').forEach(button => button.classList.remove('expanded'));
}