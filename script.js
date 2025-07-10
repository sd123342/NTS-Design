function selectLanguage(el) {
  document.querySelectorAll('.language').forEach(lang => lang.classList.remove('selected'));
  el.classList.add('selected');
}
