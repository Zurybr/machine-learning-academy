import './components/navbar.js';
import './components/card.js';

const app = document.getElementById('app');

const routes = {
  lifecycle: () => import('./lessons/01-lifecycle.js'),
  eda: () => import('./lessons/02-eda.js'),
  stats: () => import('./lessons/03-stats-thinking.js'),
  ethics: () => import('./lessons/04-ethics.js'),
  reproducibility: () => import('./lessons/05-reproducibility.js'),
};

function landing() {
  app.innerHTML = '';
  const lessons = [
    {hash: '#lifecycle', title: 'Data Lifecycle'},
    {hash: '#eda', title: 'Exploratory Data Analysis'},
    {hash: '#stats', title: 'Statistical Thinking'},
    {hash: '#ethics', title: 'Data Ethics'},
    {hash: '#reproducibility', title: 'Reproducibility'},
  ];
  lessons.forEach(l => {
    const card = document.createElement('lesson-card');
    card.setAttribute('title', l.title);
    card.setAttribute('link', l.hash);
    app.appendChild(card);
  });
}

async function router() {
  const hash = location.hash.replace('#','');
  if(!hash) { landing(); return; }
  const load = routes[hash];
  if(load) {
    const mod = await load();
    app.innerHTML = '';
    app.appendChild(await mod.default());
  } else {
    landing();
  }
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);
