
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
const releaseRoot = document.querySelector('#disc-golf-release-history');
if (releaseRoot && Array.isArray(window.KH_DISC_GOLF_RELEASES)) {
  const releases = [...window.KH_DISC_GOLF_RELEASES].sort((a, b) => {
    const byDate = String(b.date).localeCompare(String(a.date));
    return byDate || String(b.version).localeCompare(String(a.version), undefined, { numeric: true });
  });

  const makeList = (title, items) => {
    if (!Array.isArray(items) || items.length === 0) return '';
    return `<div><h4>${title}</h4><ul>${items.map(item => `<li>${item}</li>`).join('')}</ul></div>`;
  };

  releaseRoot.innerHTML = releases.map(release => `
    <article class="release-card${release.current ? ' current' : ''}">
      <div class="release-heading">
        <div>
          <h3>Versio ${release.version}</h3>
          <div class="release-meta">${new Intl.DateTimeFormat('fi-FI').format(new Date(`${release.date}T12:00:00`))}</div>
        </div>
        <span class="release-status">${release.status}</span>
      </div>
      <p>${release.summary}</p>
      <div class="release-columns">
        ${makeList('Uutta', release.newItems)}
        ${makeList('Korjattu ja parannettu', release.improvedItems)}
        ${makeList('Testaajille', release.testerItems)}
      </div>
    </article>
  `).join('');
}
