import './style.css';
import { projects } from './data/projects.js';
import { socialLinks } from './data/site.js';

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function renderProjects() {
  const list = document.getElementById('project-list');
  if (!list) return;

  list.innerHTML = projects
    .map((p) => {
      const tags =
        p.tags?.length > 0
          ? `<ul class="project-card__tags" role="list">${p.tags
              .map((t) => `<li>${escapeHtml(t)}</li>`)
              .join('')}</ul>`
          : '';
      const safeUrl = escapeHtml(p.url);
      const safeTitle = escapeHtml(p.title);
      const safeDesc = escapeHtml(p.description);
      return `<li>
        <article class="project-card">
          <h3 class="project-card__title"><a href="${safeUrl}" target="_blank" rel="noopener noreferrer">${safeTitle}</a></h3>
          <p class="project-card__desc">${safeDesc}</p>
          ${tags}
          <a class="project-card__link" href="${safeUrl}" target="_blank" rel="noopener noreferrer">View project →</a>
        </article>
      </li>`;
    })
    .join('');
}

function renderSocial() {
  const ul = document.getElementById('social-list');
  if (!ul) return;

  ul.innerHTML = socialLinks
    .filter((s) => s.href)
    .map((s) => {
      const href = escapeHtml(s.href);
      const label = escapeHtml(s.label);
      const external = s.href.startsWith('http');
      const attrs = external ? ' target="_blank" rel="noopener noreferrer"' : '';
      return `<li><a href="${href}"${attrs}>${label}</a></li>`;
    })
    .join('');
}

const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

renderProjects();
renderSocial();
