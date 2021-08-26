class View {
  constructor() {
    this._navIconContainer = document.querySelector('.nav-icon__container');
    this._navIcon = document.querySelector('.nav-icon');
    this._nav = document.querySelector('.nav');
  }

  addHandlerNavIcon(handler) {
    this._navIconContainer.addEventListener('click', () => {
      handler();
    });
  }

  addHandlerNav(handler) {
    this._nav.addEventListener('click', e => {
      const item = e.target.closest('.link');
      if (!item) return;
      handler(e);
    });
  }

  toggleNavMobile() {
    this._navIcon.classList.toggle('nav-icon--active');
    this._nav.classList.toggle('nav--active');
  }
}

export default new View();
