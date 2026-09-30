document.addEventListener('DOMContentLoaded', function () {
  var NUMERO_WHATSAPP = '551936344315';
  var MENSAGEM_PADRAO = 'Olá! Vim pelo site da ACE São João e gostaria de saber mais.';

  // Monta o link do WhatsApp com mensagem pré-preenchida por serviço,
  // sem precisar codificar manualmente cada URL no HTML.
  document.querySelectorAll('[data-whatsapp-service]').forEach(function (link) {
    var servico = link.getAttribute('data-whatsapp-service');
    var mensagem = servico
      ? 'Olá! Gostaria de saber mais sobre ' + servico + '.'
      : MENSAGEM_PADRAO;
    link.href = 'https://wa.me/' + NUMERO_WHATSAPP + '?text=' + encodeURIComponent(mensagem);
  });

  // Menu mobile (hambúrguer)
  var toggle = document.getElementById('menu-toggle');
  var nav = document.getElementById('menu-principal');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var aberto = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', aberto ? 'true' : 'false');
    });

    // Fecha o menu ao clicar em um link (útil no celular)
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});
