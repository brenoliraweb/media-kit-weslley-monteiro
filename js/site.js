(function () {
  'use strict';

  // Cada [data-ano-atual] recebe o prefixo do próprio atributo + o ano atual
  var ano = String(new Date().getFullYear());

  document.querySelectorAll('[data-ano-atual]').forEach(function (el) {
    el.textContent = el.getAttribute('data-ano-atual') + ano;
  });
})();
