class NavBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="#lifecycle">Lifecycle</a></li>
        <li><a href="#eda">EDA</a></li>
        <li><a href="#stats">Stats</a></li>
        <li><a href="#ethics">Ethics</a></li>
        <li><a href="#reproducibility">Reproducibility</a></li>
      </ul>
    `;
  }
}
customElements.define('nav-bar', NavBar);
