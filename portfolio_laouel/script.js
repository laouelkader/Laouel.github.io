// Année du pied de page
document.getElementById('year').textContent = new Date().getFullYear();

// Menu mobile
const btn = document.querySelector('.menu-btn');
const links = document.querySelector('.links');
btn.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
});
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  links.classList.remove('open');
  btn.setAttribute('aria-expanded', 'false');
}));

// Terminal animé du hero
const lines = [
  ['$ ', 'whoami'],
  ['', 'laouel — MSc Cybersécurité Infrastructures Réseaux'],
  ['$ ', 'cat stack.txt'],
  ['', 'linux · windows-server · active-directory\ndocker · kubernetes · gitlab-ci · aws\npentest · cve · monitoring · logging'],
  ['$ ', 'systemctl status alternance'],
  ['', '● alternance.service — active (en recherche)\n  rythme : 1 sem. école / 3 sem. entreprise'],
];
const term = document.getElementById('term');
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const esc = s => s.replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));

function render(done, partial) {
  let html = done.map(([p, t]) => p ? `<span class="p">${p}</span>${esc(t)}` : `<span class="ok">${esc(t)}</span>`).join('\n');
  if (partial) html += (html ? '\n' : '') + `<span class="p">${partial[0]}</span>${esc(partial[1])}`;
  term.innerHTML = html + '<span class="cursor">&nbsp;</span>';
}

if (reduce) {
  render(lines);
} else {
  const done = [];
  let i = 0, j = 0;
  (function tick() {
    if (i >= lines.length) return render(done);
    const [p, t] = lines[i];
    if (p) {            // commande : effet de frappe
      if (j <= t.length) { render(done, [p, t.slice(0, j++)]); return setTimeout(tick, 55); }
      done.push(lines[i]); i++; j = 0; return setTimeout(tick, 250);
    }
    done.push(lines[i]); i++; render(done); setTimeout(tick, 450); // sortie : affichée d'un coup
  })();
}

// Apparition des sections au scroll
const targets = document.querySelectorAll('.section h2, .card, .timeline > li, .cards-mini li, .contact-card');
targets.forEach(el => el.classList.add('reveal'));
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
  }), { threshold: 0.12 });
  targets.forEach(el => io.observe(el));
} else {
  targets.forEach(el => el.classList.add('visible'));
}
