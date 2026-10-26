
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
  const english = document.documentElement.lang.toLowerCase().startsWith('en');
  const labels = english
    ? { version: 'Version', newItems: 'New', improvedItems: 'Fixed and improved', testerItems: 'For testers', locale: 'en-GB' }
    : { version: 'Versio', newItems: 'Uutta', improvedItems: 'Korjattu ja parannettu', testerItems: 'Testaajille', locale: 'fi-FI' };
  const releases = [...window.KH_DISC_GOLF_RELEASES].sort((a, b) => {
    if (Boolean(a.current) !== Boolean(b.current)) return a.current ? -1 : 1;
    const byDate = String(b.date || '').localeCompare(String(a.date || ''));
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
          <h3>${labels.version} ${release.version}</h3>
          <div class="release-meta">${release.date ? new Intl.DateTimeFormat(labels.locale, { dateStyle: 'long' }).format(new Date(`${release.date}T12:00:00`)) : release.dateLabel}</div>
        </div>
        <span class="release-status">${release.status}</span>
      </div>
      <p>${release.summary}</p>
      <div class="release-columns">
        ${makeList(labels.newItems, release.newItems)}
        ${makeList(labels.improvedItems, release.improvedItems)}
        ${makeList(labels.testerItems, release.testerItems)}
      </div>
    </article>
  `).join('');
}
