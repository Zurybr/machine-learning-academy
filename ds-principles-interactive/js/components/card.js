class LessonCard extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute('title');
    const link = this.getAttribute('link');
    this.innerHTML = `
      <div class="card">
        <h3>${title}</h3>
        <a href="${link}">Go to lesson</a>
      </div>
    `;
  }
}
customElements.define('lesson-card', LessonCard);
