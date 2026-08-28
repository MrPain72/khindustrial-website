
const button = document.querySelector('.menu-button');
const links = document.querySelector('.nav-links');
if (button && links) {
  button.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
  });
}
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    links?.classList.remove('open');
    button?.setAttribute('aria-expanded', 'false');
  });
});
document.querySelectorAll('[data-year]').forEach(el => {
  el.textContent = new Date().getFullYear();
});
