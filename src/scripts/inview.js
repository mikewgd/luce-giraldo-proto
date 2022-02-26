export default class Inview {
  constructor() {
    this.watchElements = document.querySelectorAll('[data-js-inview]');
    this.observer = null;
  }

  setObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: .25
    };
    this.observer = new IntersectionObserver(this.observerCallback, options);
    this.watchElements.forEach(elem => this.observer.observe(elem));
  }

  observerCallback(entries, observer) {
    entries.forEach(entry => {
      const { isIntersecting, intersectionRatio, target } = entry;
      console.log(isIntersecting, intersectionRatio, target);
      if (isIntersecting && intersectionRatio <= 1) {
        if (target.tagName.toLowerCase() === 'img') {
          target.src = target.dataset.src;
        }
        
        target.classList.add('js-inview-loaded');
        observer.unobserve(target);
      }
    });
  }
}