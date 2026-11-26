(function () {
  'use strict';

  var ano = String(new Date().getFullYear());

  document.querySelectorAll('[data-ano-atual]').forEach(function (el) {
    el.textContent = el.getAttribute('data-ano-atual') + ano;
  });
})();
