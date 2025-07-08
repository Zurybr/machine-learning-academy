export default async function lifecycleLesson() {
  const container = document.createElement('div');
  container.innerHTML = `
    <h2>Data Lifecycle</h2>
    <div class="stages">
      <div class="stage" data-step="Collection">📥<span>Collection</span><button>Learn More</button></div>
      <div class="stage" data-step="Cleaning">🧹<span>Cleaning</span><button>Learn More</button></div>
      <div class="stage" data-step="Exploration">🔍<span>Exploration</span><button>Learn More</button></div>
      <div class="stage" data-step="Model">🤖<span>Model</span><button>Learn More</button></div>
      <div class="stage" data-step="Deploy">🚀<span>Deploy</span><button>Learn More</button></div>
    </div>
    <div id="modal" class="hidden"></div>
  `;

  const modal = container.querySelector('#modal');
  container.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON') {
      const step = e.target.parentElement.dataset.step;
      modal.className = 'modal';
      modal.innerHTML = `<div class="card"><h3>${step}</h3><pre>// code snippet</pre><button id="close">Close</button></div>`;
    }
    if(e.target.id === 'close') {
      modal.className = 'hidden';
    }
  });
  return container;
}
