// Preserve links shared before the move to separate pages.
const legacyRoutes = {
  accueil: 'index.html',
  'a-propos': 'profil.html',
  experiences: 'experiences.html',
  projets: 'projets.html',
  'travaux-academiques': 'projets.html#group-recherche',
  competences: 'expertises.html',
  formation: 'profil.html#formation',
  cv: 'contact.html#cv',
  contact: 'contact.html',
  'modal-medicobus': 'projets.html#medicobus',
};

function routeLegacyLink() {
  const file = window.location.pathname.split('/').pop();
  const route = legacyRoutes[window.location.hash.slice(1)];
  if ((!file || file === 'index.html') && route) {
    window.location.replace(new URL(route, window.location.href).href);
  }
}

routeLegacyLink();
window.addEventListener('hashchange', routeLegacyLink);

const menu = document.querySelector('.menu');
const nav = document.querySelector('#navigation');

function closeMenu() {
  nav.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Ouvrir le menu');
}

if (menu && nav) {
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  });
  nav.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.classList.contains('open')) {
      closeMenu();
      menu.focus();
    }
  });
}

// Every project remains accessible when JavaScript is disabled.
const chips = document.querySelectorAll('[data-filter]');
const groups = document.querySelectorAll('[data-group]');

function applyFilter(value) {
  chips.forEach(chip => {
    const selected = chip.dataset.filter === value;
    chip.classList.toggle('active', selected);
    chip.setAttribute('aria-pressed', String(selected));
  });
  groups.forEach(group => {
    group.hidden = value !== 'all' && group.dataset.group !== value;
  });
}

chips.forEach(chip => chip.addEventListener('click', () => applyFilter(chip.dataset.filter)));

function revealLinkedProject() {
  if (!window.location.hash) return;
  let id;
  try {
    id = decodeURIComponent(window.location.hash.slice(1));
  } catch {
    return;
  }
  const target = document.getElementById(id);
  const group = target && target.closest('[data-group]');
  if (group) {
    applyFilter(group.dataset.group);
    target.scrollIntoView({ block: 'start' });
  }
}

revealLinkedProject();
window.addEventListener('hashchange', revealLinkedProject);
