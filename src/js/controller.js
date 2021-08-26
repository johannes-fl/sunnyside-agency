import 'core-js/stable';
import 'regenerator-runtime/runtime';
import view from './view';

if (module.hot) {
  module.hot.accept();
}

const controlNavToggle = function () {
  view.toggleNavMobile();
};

const controlNav = function (item) {
  view.toggleNavMobile();
};

const init = function () {
  view.addHandlerNavIcon(controlNavToggle);
  view.addHandlerNav(controlNav);
};

init();
