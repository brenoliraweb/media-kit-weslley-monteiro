/* ==========================================================================
   Media Kit · Weslley Monteiro
   animacoes.js: melhoria progressiva dos efeitos (CLAUDE.md, seção 11)
   Sem bibliotecas. Sem JS, o conteúdo aparece normalmente.
   ========================================================================== */

(function () {
  'use strict';

  var raiz = document.documentElement;
  raiz.classList.add('js');
  window.animacoesProntas = true;

  var movimentoReduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var temObserver = 'IntersectionObserver' in window;

  /* Revelar ao rolar, cortina e contagem
     ======================================================================== */

  // Índice de cada item em sequência, usado no atraso do CSS
  document.querySelectorAll('[data-revelar-grupo]').forEach(function (grupo) {
    Array.prototype.forEach.call(grupo.children, function (item, i) {
      item.style.setProperty('--i', i);
    });
  });

  var alvos = Array.prototype.slice.call(document.querySelectorAll('[data-revelar], [data-revelar-grupo], [data-contar]'));
  var animarContagem = !movimentoReduzido && temObserver;

  // Foto com cortina tem área visível zero (clip-path), então o observer
  // acompanha o elemento pai e revela as fotos que estão dentro dele
  var cortinasPorPai = new Map();
  document.querySelectorAll('[data-cortina]').forEach(function (foto) {
    var pai = foto.parentElement;
    if (!cortinasPorPai.has(pai)) {
      cortinasPorPai.set(pai, []);
      alvos.push(pai);
    }
    cortinasPorPai.get(pai).push(foto);
  });

  var formatos = {};
  function formatar(valor, casas) {
    if (!formatos[casas]) {
      formatos[casas] = new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: casas,
        maximumFractionDigits: casas
      });
    }
    return formatos[casas].format(valor);
  }

  // Números reais começam em zero; o valor final continua no HTML
  if (animarContagem) {
    document.querySelectorAll('[data-contar]').forEach(function (el) {
      el.dataset.final = el.textContent;
      el.textContent = formatar(0, parseInt(el.dataset.casas || '0', 10));
    });
  }

  function contar(el) {
    var alvo = parseFloat(el.dataset.contar);
    var casas = parseInt(el.dataset.casas || '0', 10);
    var duracao = 1200;
    var inicio = null;

    function passo(agora) {
      if (inicio === null) inicio = agora;
      var t = Math.min((agora - inicio) / duracao, 1);
      var suave = 1 - Math.pow(1 - t, 3);
      if (t < 1) {
        el.textContent = formatar(alvo * suave, casas);
        requestAnimationFrame(passo);
      } else {
        el.textContent = el.dataset.final;
      }
    }

    requestAnimationFrame(passo);
  }

  function revelar(el) {
    if (cortinasPorPai.has(el)) {
      cortinasPorPai.get(el).forEach(function (foto) { foto.classList.add('is-visible'); });
      return;
    }
    el.classList.add('is-visible');
    if (animarContagem && el.hasAttribute('data-contar')) contar(el);
  }

  if (movimentoReduzido || !temObserver) {
    alvos.forEach(revelar);
  } else {
    var observer = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) return;
        revelar(entrada.target);
        observer.unobserve(entrada.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });

    alvos.forEach(function (el) { observer.observe(el); });
  }

  /* Menu que reage à rolagem e indicador de progresso
     ======================================================================== */

  var topo = document.querySelector('.topo');
  var voltarTopo = document.querySelector('.voltar-topo');
  var progresso = document.createElement('div');
  progresso.className = 'progresso';
  progresso.setAttribute('aria-hidden', 'true');
  document.body.appendChild(progresso);

  var ultimoY = window.scrollY;
  var agendado = false;

  function atualizar() {
    agendado = false;

    var y = window.scrollY;
    var maximo = raiz.scrollHeight - window.innerHeight;
    var fracao = maximo > 0 ? Math.min(Math.max(y / maximo, 0), 1) : 0;
    progresso.style.transform = 'scaleX(' + fracao + ')';

    // Botão "voltar ao topo" só aparece depois da primeira tela
    if (voltarTopo) voltarTopo.classList.toggle('voltar-topo--visivel', y > window.innerHeight);

    if (!topo) return;
    topo.classList.toggle('topo--rolado', y > 8);

    if (movimentoReduzido) return;

    var delta = y - ultimoY;
    if (Math.abs(delta) < 6) return;

    // Some ao descer e volta ao subir; nunca some com o foco dentro dele
    var ocultar = delta > 0 && y > topo.offsetHeight * 2 && !topo.contains(document.activeElement);
    topo.classList.toggle('topo--oculto', ocultar);
    ultimoY = y;
  }

  function agendar() {
    if (agendado) return;
    agendado = true;
    requestAnimationFrame(atualizar);
  }

  window.addEventListener('scroll', agendar, { passive: true });
  window.addEventListener('resize', agendar);

  if (topo) {
    topo.addEventListener('focusin', function () {
      topo.classList.remove('topo--oculto');
    });
  }

  atualizar();
})();
