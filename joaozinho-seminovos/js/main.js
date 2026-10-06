/* Joãozinho Seminovos — estoque, filtros, modal e simulador. JS puro, sem dependências. */
/* Estoque real (site joaozinhoautomoveis.com.br + Kleber Carros, out/2026). Ordem: preço. Para atualizar, edite este array. */
const ESTOQUE = [
  {"id": "cayenne-2019", "marca": "Porsche", "modelo": "Cayenne", "versao": "3.0 V6 340 cv", "tipo": "SUV", "ano": 2019, "km": 56000, "cambio": "Automático", "combustivel": "Gasolina", "cor": "Branca", "preco": 310000, "obs": "Apenas 56 mil km, com todas as revisões feitas na concessionária (a última com 52 mil km). Carro sem detalhes, interior caramelo e teto panorâmico.", "tags": ["Revisado em concessionária"], "itens": ["Airbag Duplo", "Airbag Lateral", "Alarme", "Apoio de Braço", "Ar Condicionado", "Ar Condicionado Digital", "Ar Quente", "Banco do Motorista com Ajuste de Altura", "Bancos em Couro", "Central Multimídia", "Chave Reserva", "Câmera de Ré", "Desembaçador Traseiro", "Direção Elétrica", "Encosto de Cabeça Traseiro", "Faróis de Milha", "Faróis de neblina", "Limpador Traseiro", "Manual do Proprietário", "Parachoque na Cor do Veículo", "Retrovisores Elétricos", "Revisões feitas em concessionária", "Rodas de liga leve", "Teto Panorâmico", "Teto solar", "Trava elétrica", "Vidro elétrico", "Vidros Verdes", "Volante Escamoteável", "Volante multifuncional"], "fotos": 5},
  {"id": "creta-2023", "marca": "Hyundai", "modelo": "Creta", "versao": "Limited 1.0 Turbo 12V Aut.", "tipo": "SUV", "ano": 2023, "km": 54000, "cambio": "Automático", "combustivel": "Flex", "cor": "Branca", "preco": 113000, "obs": "Carro novinho, única dona e com todas as revisões feitas (a última com 50 mil km). Ainda na garantia de fábrica, com bancos de couro, ar digital, multimídia e farol de milha. Documentação 2026 paga.", "tags": ["Único dono", "Revisado em concessionária", "Garantia de fábrica"], "itens": ["ABS", "Airbag de Joelho", "Alarme", "Apoio de Braço", "Ar Condicionado Digital", "Ar Quente", "Banco Bipartido", "Banco do Motorista com Ajuste de Altura", "Bancos de Couro", "Central Multimídia", "Chave Reserva", "Computador de bordo", "Desembaçador Traseiro", "Direção Elétrica", "Encosto de Cabeça Traseiro", "Espelhos Elétricos", "Faróis de Milha", "Faróis de neblina", "Garantia de Fábrica", "IPVA Pago", "Limpador Traseiro", "Parachoque na Cor do Veículo", "Partida Elétrica", "Rack de Teto", "Retrovisores Elétricos", "Revisões feitas em concessionária", "Rodas de liga leve", "Trava elétrica", "Veículo quitado", "Vidro elétrico", "Vidros Verdes", "Volante Escamoteável", "Volante multifuncional", "Único dono"], "fotos": 5},
  {"id": "kicks-exclusive-2023", "marca": "Nissan", "modelo": "Kicks", "versao": "Exclusive 1.6 16V Aut.", "tipo": "SUV", "ano": 2023, "km": 39000, "cambio": "Automático", "combustivel": "Flex", "cor": "Preta", "preco": 108000, "obs": "Versão topo de linha, com baixa quilometragem e revisões em concessionária.", "tags": ["Revisado em concessionária"], "itens": ["ABS", "Airbag", "Alarme", "Ar Condicionado", "Ar Condicionado Digital", "Ar Quente", "Banco Bipartido", "Bancos de Couro", "Central Multimídia", "Computador de bordo", "Desembaçador Traseiro", "Direção Hidráulica", "Encosto de Cabeça Traseiro", "Faróis de Milha", "Limpador Traseiro", "Parachoque na Cor do Veículo", "Rack de Teto", "Retrovisores Elétricos", "Revisões feitas em concessionária", "Rodas de liga leve", "Trava elétrica", "Vidro elétrico", "Vidros Verdes", "Volante Escamoteável", "Volante multifuncional"], "fotos": 5},
  {"id": "tracker-lt-2022", "marca": "Chevrolet", "modelo": "Tracker", "versao": "LT 1.0 Turbo 12V Aut.", "tipo": "SUV", "ano": 2022, "km": 61500, "cambio": "Automático", "combustivel": "Flex", "cor": "Prata", "preco": 93000, "obs": "Carro novinho, baixa quilometragem e único dono.", "tags": ["Único dono"], "itens": ["ABS", "Airbag Duplo", "Alarme", "Ar Condicionado", "Ar Quente", "Central Multimídia", "Chave Reserva", "Desembaçador Traseiro", "Direção Hidráulica", "Encosto de Cabeça Traseiro", "Limpador Traseiro", "OnStar", "Parachoque na Cor do Veículo", "Pintura Metálica", "Rodas de liga leve", "Trava elétrica", "Vidro elétrico", "Vidros Verdes", "Único dono"], "fotos": 5},
  {"id": "t-cross-2022", "marca": "Volkswagen", "modelo": "T-Cross", "versao": "Sense 200 TSI 1.0 Aut.", "tipo": "SUV", "ano": 2022, "km": 61000, "cambio": "Automático", "combustivel": "Flex", "cor": "Branca", "preco": 89300, "obs": "Completa, versão Sense com motor 200 TSI e câmbio automático.", "tags": [], "itens": ["Airbag Duplo", "Alarme", "Ar Condicionado", "Ar Quente", "Banco do Motorista com Ajuste de Altura", "Desembaçador Traseiro", "Direção Elétrica", "Encosto de Cabeça Traseiro", "Limpador Traseiro", "Parachoque na Cor do Veículo", "Trava elétrica", "Vidro elétrico", "Vidros Verdes"], "fotos": 5},
  {"id": "kicks-sv-2020", "marca": "Nissan", "modelo": "Kicks", "versao": "SV 1.6 16V FlexStar Aut.", "tipo": "SUV", "ano": 2020, "km": 78000, "cambio": "Automático CVT", "combustivel": "Flex", "cor": "Branca", "preco": 84500, "obs": "Completa, pneus novos, IPVA pago, carro bem original e câmbio CVT.", "tags": [], "itens": ["ABS", "Airbag Duplo", "Alarme", "Ar Condicionado", "Ar Quente", "Central Multimídia", "Chave Reserva", "Desembaçador Traseiro", "Direção Hidráulica", "Encosto de Cabeça Traseiro", "Limpador Traseiro", "Parachoque na Cor do Veículo", "Retrovisores Elétricos", "Rodas de liga leve", "Trava elétrica", "Vidro elétrico", "Vidros Verdes", "Volante Escamoteável", "Volante multifuncional"], "fotos": 5},
  {"id": "captur-2019", "marca": "Renault", "modelo": "Captur", "versao": "Intense 1.6 16V Aut.", "tipo": "SUV", "ano": 2019, "km": 120000, "cambio": "Automático CVT", "combustivel": "Flex", "cor": "Branca", "preco": 71500, "obs": "Completa, versão Intense com motor 1.6 e bancos de couro.", "tags": [], "itens": ["ABS", "Airbag", "Airbag Duplo", "Alarme", "Ar Condicionado", "Ar Quente", "Bancos de Couro", "Chave Reserva", "Computador de bordo", "Controle Som no Volante", "Direção Hidráulica", "Encosto de Cabeça Traseiro", "Limpador Traseiro", "Parachoque na Cor do Veículo", "Rack de Teto", "Retrovisores Elétricos", "Rodas de liga leve", "Trava elétrica", "Vidro elétrico", "Vidros Verdes"], "fotos": 5},
  {"id": "c4-cactus-2020", "marca": "Citroën", "modelo": "C4 Cactus", "versao": "Feel Pack 1.6 16V Aut.", "tipo": "SUV", "ano": 2020, "km": 83000, "cambio": "Automático", "combustivel": "Flex", "cor": "Branca", "preco": 70000, "obs": "Completa, com rodas de liga leve, multimídia e IPVA pago.", "tags": [], "itens": ["ABS", "Airbag Duplo", "Alarme", "Ar Condicionado", "Ar Quente", "Banco do Motorista com Ajuste de Altura", "Desembaçador Traseiro", "Direção Elétrica", "Encosto de Cabeça Traseiro", "IPVA Pago", "Limpador Traseiro", "Rodas de liga leve", "Trava elétrica", "Vidro elétrico", "Vidros Verdes"], "fotos": 5},
  {"id": "onix-lt-2013", "marca": "Chevrolet", "modelo": "Onix", "versao": "LT 1.0 8V FlexPower", "tipo": "Hatch", "ano": 2019, "km": 74000, "cambio": "Automático", "combustivel": "Flex", "cor": "Branca", "preco": 68500, "obs": "Completo, versão LT.", "tags": [], "itens": ["ABS", "Airbag Duplo", "Alarme", "Ar Condicionado", "Ar Quente", "Bancos em Couro", "Central Multimídia", "Desembaçador Traseiro", "Direção Hidráulica", "Encosto de Cabeça Traseiro", "Limpador Traseiro", "Parachoque na Cor do Veículo", "Rodas de liga leve", "Trava elétrica", "Vidro elétrico", "Vidros Verdes"], "fotos": 5},
  {"id": "tracker-ltz-2015", "marca": "Chevrolet", "modelo": "Tracker", "versao": "LTZ 1.8 16V 4x2 Aut.", "tipo": "SUV", "ano": 2015, "km": 110000, "cambio": "Automático", "combustivel": "Flex", "cor": "Preta", "preco": 66500, "obs": "Carro bem cuidado, com teto solar, rodas de liga leve e emplacamento 2026 pago.", "tags": [], "itens": ["ABS", "Airbag Duplo", "Ar Condicionado", "Ar Quente", "Bancos de Couro", "Desembaçador Traseiro", "Direção Hidráulica", "Encosto de Cabeça Traseiro", "Limpador Traseiro", "Parachoque na Cor do Veículo", "Rack de Teto", "Retrovisores Elétricos", "Rodas de liga leve", "Teto solar", "Trava elétrica", "Vidro elétrico", "Vidros Verdes"], "fotos": 5},
  {"id": "renegade-2016", "marca": "Jeep", "modelo": "Renegade", "versao": "Longitude 1.8 16V 4x2 Aut.", "tipo": "SUV", "ano": 2016, "km": 107000, "cambio": "Automático", "combustivel": "Flex", "cor": "Branca", "preco": 66000, "obs": "Completa, com multimídia, bancos de couro, teto preto e câmbio automático.", "tags": [], "itens": ["ABS", "Airbag", "Airbag Duplo", "Alarme", "Ar Condicionado", "Ar Quente", "Banco do Motorista com Ajuste de Altura", "Bancos de Couro", "Central Multimídia", "Desembaçador Traseiro", "Direção Hidráulica", "Encosto de Cabeça Traseiro", "Limpador Traseiro", "Parachoque na Cor do Veículo", "Retrovisores Elétricos", "Rodas de liga leve", "Trava elétrica", "Veículo quitado", "Vidro elétrico", "Vidros Verdes", "Volante Escamoteável"], "fotos": 5},
  {"id": "golf-2013", "marca": "Volkswagen", "modelo": "Golf", "versao": "Sportline 1.6 Mi Total Flex 8V", "tipo": "Hatch", "ano": 2013, "km": 142600, "cambio": "Manual", "combustivel": "Flex", "cor": "Branca", "preco": 61000, "obs": "Golf Sportline com bancos de couro e rodas de liga leve.", "tags": [], "itens": [], "fotos": 5},
  {"id": "grand-siena-2019", "marca": "Fiat", "modelo": "Grand Siena", "versao": "Attractive 1.4 Evo 8V", "tipo": "Sedã", "ano": 2019, "km": 86000, "cambio": "Manual", "combustivel": "Flex", "cor": "Branca", "preco": 48000, "obs": "Sedã completo, com ar-condicionado, direção hidráulica e airbag duplo.", "tags": [], "itens": ["ABS", "Airbag Duplo", "Ar Condicionado", "Ar Quente", "Desembaçador Traseiro", "Direção Hidráulica", "Encosto de Cabeça Traseiro", "Parachoque na Cor do Veículo", "Trava elétrica", "Vidro elétrico", "Vidros Verdes"], "fotos": 5},
  {"id": "tiida-2012", "marca": "Nissan", "modelo": "Tiida", "versao": "SL 1.8 16V Aut.", "tipo": "Hatch", "ano": 2012, "km": 128000, "cambio": "Automático", "combustivel": "Gasolina", "cor": "Preta", "preco": 43000, "obs": "Completo, versão SL com teto solar e bancos de couro.", "tags": [], "itens": ["Airbag", "Alarme", "Ar Condicionado", "Ar Quente", "Banco do Motorista com Ajuste de Altura", "Bancos de Couro", "Desembaçador Traseiro", "Direção Elétrica", "Encosto de Cabeça Traseiro", "Faróis de neblina", "Limpador Traseiro", "Parachoque na Cor do Veículo", "Rodas de liga leve", "Teto solar", "Trava elétrica", "Vidro elétrico", "Vidros Verdes"], "fotos": 5},
  {"id": "onix-lt-2013", "marca": "Chevrolet", "modelo": "Onix", "versao": "LT 1.0 8V FlexPower", "tipo": "Hatch", "ano": 2013, "km": 93000, "cambio": "Manual", "combustivel": "Flex", "cor": "Branca", "preco": 42000, "obs": "Completo, versão LT.", "tags": [], "itens": ["Alarme", "Ar Condicionado", "Ar Quente", "Desembaçador Traseiro", "Direção Hidráulica", "Encosto de Cabeça Traseiro", "Limpador Traseiro", "Parachoque na Cor do Veículo", "Trava elétrica", "Vidro elétrico", "Vidros Verdes"], "fotos": 5}
];

const WA = '5548999620523';
const SITE_TAXA = 0.0199;
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const brl = n => 'R$ ' + Math.round(n).toLocaleString('pt-BR');
const kmf = n => n.toLocaleString('pt-BR') + ' km';
const waLink = msg => 'https://wa.me/' + WA + '?text=' + encodeURIComponent(msg);
const nomeCarro = c => `${c.marca} ${c.modelo} ${c.versao} ${c.ano}`;
const foto = (c, i) => `assets/img/carros/${c.id}-${i}.webp`;
const esc = s => String(s).replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
const isAuto = c => c.cambio !== 'Manual';

/* links de WhatsApp com mensagem pronta */
$$('[data-wa]').forEach(a => { a.href = waLink(a.dataset.wa); });
$('#ano').textContent = new Date().getFullYear();
$$('[data-total]').forEach(el => { el.textContent = ESTOQUE.length; });

/* topo */
const topo = $('#topo');
const onScroll = () => topo.classList.toggle('is-scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
const burger = $('#burger'), menu = $('#menu');
burger.addEventListener('click', () => {
  const open = burger.getAttribute('aria-expanded') !== 'true';
  burger.setAttribute('aria-expanded', open); menu.classList.toggle('open', open);
  burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});
$$('a', menu).forEach(a => a.addEventListener('click', () => { burger.setAttribute('aria-expanded', 'false'); menu.classList.remove('open'); }));

/* estoque */
const grid = $('#grid'), fBusca = $('#fBusca'), fMarca = $('#fMarca'), fPreco = $('#fPreco'), fOrdem = $('#fOrdem');
let fCambio = '', expandido = false;
const marcas = [...new Set(ESTOQUE.map(c => c.marca))].sort((a, b) => a.localeCompare(b, 'pt-BR'));
marcas.forEach(m => fMarca.add(new Option(m, m)));
const contaMarca = m => ESTOQUE.filter(c => c.marca === m).length;
$('#marcasChips').innerHTML = marcas.map(m => `<button type="button" class="chip" data-marca="${esc(m)}">${esc(m)} <small>${contaMarca(m)}</small></button>`).join('');
$$('#marcasChips .chip').forEach(b => b.addEventListener('click', () => {
  fMarca.value = b.dataset.marca; expandido = true; render();
  $('#estoque').scrollIntoView({ behavior: 'smooth' });
}));

const limite = () => (window.innerWidth < 640 ? 6 : 9);
const norm = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

function filtrar() {
  const q = norm(fBusca.value.trim());
  const [pmin, pmax] = fPreco.value ? fPreco.value.split('-').map(Number) : [0, Infinity];
  let lista = ESTOQUE.filter(c => {
    if (fMarca.value && c.marca !== fMarca.value) return false;
    if (c.preco < pmin || c.preco > pmax) return false;
    if (fCambio === 'auto' && !isAuto(c)) return false;
    if (fCambio === 'Manual' && isAuto(c)) return false;
    if (q) {
      const txt = norm([c.marca, c.modelo, c.versao, c.ano, c.cambio, c.combustivel, c.cor, c.tipo, isAuto(c) ? 'automatico' : 'manual'].join(' '));
      if (!q.split(/\s+/).every(t => txt.includes(t))) return false;
    }
    return true;
  });
  const [campo, dir] = fOrdem.value.split('-');
  lista.sort((a, b) => (dir === 'asc' ? 1 : -1) * (a[campo] - b[campo]));
  return lista;
}

function card(c, i) {
  const tags = [];
  if (c.km <= 60000 && c.ano >= 2019) tags.push('<span class="tag tag--red">Baixo km</span>');
  c.tags.slice(0, 1).forEach(t => tags.push(`<span class="tag">${esc(t)}</span>`));
  const lazy = i < 3 ? 'eager' : 'lazy';
  return `<article class="card" id="carro-${c.id}">
    <button class="card__foto" type="button" data-open="${c.id}" aria-label="Ver fotos e detalhes do ${esc(c.marca + ' ' + c.modelo)}">
      <img src="${foto(c, 0)}" width="800" height="600" loading="${lazy}" decoding="async" alt="${esc(c.marca + ' ' + c.modelo + ' ' + c.versao + ' ' + c.ano + ', cor ' + c.cor.toLowerCase())}">
      <span class="card__tags">${tags.join('')}</span>
      <span class="card__fotos"><svg class="ic"><use href="#i-cam"/></svg>${c.fotos} fotos</span>
    </button>
    <div class="card__body">
      <span class="card__marca">${esc(c.marca)} · ${esc(c.tipo)}</span>
      <h3 class="card__nome">${esc(c.modelo)}</h3>
      <p class="card__versao" title="${esc(c.versao)}">${esc(c.versao)}</p>
      <ul class="specs">
        <li><svg class="ic"><use href="#i-cal"/></svg>${c.ano}</li>
        <li><svg class="ic"><use href="#i-gauge"/></svg>${kmf(c.km)}</li>
        <li><svg class="ic"><use href="#i-gear"/></svg>${esc(c.cambio)}</li>
        <li><svg class="ic"><use href="#i-fuel"/></svg>${esc(c.combustivel)}</li>
      </ul>
      <div class="card__preco"><strong>${brl(c.preco)}</strong><button type="button" data-sim="${c.id}">Simular parcela</button></div>
      <div class="card__btns">
        <a class="btn btn--wa" href="${waLink(`Olá, Joãozinho! Tenho interesse no ${nomeCarro(c)}, ${kmf(c.km)}, anunciado por ${brl(c.preco)} no site. Ainda está disponível?`)}" target="_blank" rel="noopener"><svg class="ic"><use href="#i-wa"/></svg>Tenho interesse</a>
        <button class="btn btn--outline" type="button" data-open="${c.id}">Detalhes</button>
      </div>
    </div>
  </article>`;
}

function render() {
  const lista = filtrar();
  const filtrando = fBusca.value || fMarca.value || fPreco.value || fCambio;
  const mostrar = expandido || filtrando ? lista : lista.slice(0, limite());
  grid.innerHTML = mostrar.map(card).join('');
  $('#vazio').hidden = lista.length > 0;
  const btn = $('#verMais');
  btn.hidden = mostrar.length >= lista.length;
  btn.textContent = `Ver todos os ${lista.length} carros`;
  $('#resumo').innerHTML = lista.length
    ? `<strong>${lista.length} ${lista.length === 1 ? 'carro' : 'carros'}</strong> ${filtrando ? 'encontrados' : 'no estoque'}${mostrar.length < lista.length ? ` · mostrando ${mostrar.length}` : ''}`
    : '';
  $('#limpar').hidden = !filtrando;
}
[fBusca].forEach(el => el.addEventListener('input', render));
[fMarca, fPreco, fOrdem].forEach(el => el.addEventListener('change', render));
$$('.f-seg button').forEach(b => b.addEventListener('click', () => {
  $$('.f-seg button').forEach(x => x.classList.toggle('on', x === b));
  fCambio = b.dataset.cambio; render();
}));
$('#verMais').addEventListener('click', () => { expandido = true; render(); });
$('#limpar').addEventListener('click', () => {
  fBusca.value = ''; fMarca.value = ''; fPreco.value = ''; fCambio = '';
  $$('.f-seg button').forEach((x, i) => x.classList.toggle('on', i === 0)); render();
});
render();

/* modal */
const modal = $('#modal'), gal = $('#mGal'), thumbs = $('#mThumbs');
let atual = null, ultimoFoco = null;
function abrir(id, pushHash = true) {
  const c = ESTOQUE.find(x => x.id === id); if (!c) return;
  atual = c; ultimoFoco = document.activeElement;
  const fotos = Array.from({ length: c.fotos }, (_, i) => foto(c, i));
  gal.innerHTML = fotos.map((f, i) => `<img src="${f}" width="${i ? 720 : 800}" height="${i ? 720 : 600}" alt="${esc(c.marca + ' ' + c.modelo)}: foto ${i + 1} de ${fotos.length}" ${i ? 'loading="lazy"' : ''}>`).join('');
  thumbs.innerHTML = fotos.map((f, i) => `<button type="button" aria-label="Foto ${i + 1}" class="${i ? '' : 'on'}"><img src="${f}" alt="" loading="lazy" width="64" height="48"></button>`).join('');
  $$('button', thumbs).forEach((b, i) => b.addEventListener('click', () => irPara(i)));
  $('#mMarca').textContent = `${c.marca} · ${c.tipo}`;
  $('#mTitulo').textContent = `${c.modelo} ${c.ano}`;
  $('#mVersao').textContent = c.versao;
  $('#mPreco').textContent = brl(c.preco);
  $('#mSpecs').innerHTML = `<li><svg class="ic"><use href="#i-cal"/></svg>${c.ano}</li><li><svg class="ic"><use href="#i-gauge"/></svg>${kmf(c.km)}</li><li><svg class="ic"><use href="#i-gear"/></svg>${esc(c.cambio)}</li><li><svg class="ic"><use href="#i-fuel"/></svg>${esc(c.combustivel)}</li><li><svg class="ic"><use href="#i-check"/></svg>Cor ${esc(c.cor.toLowerCase())}</li>${c.tags.map(t => `<li><svg class="ic"><use href="#i-shield"/></svg>${esc(t)}</li>`).join('')}`;
  $('#mObs').textContent = c.obs;
  $('#mItensWrap').hidden = !c.itens.length;
  $('#mItens').innerHTML = c.itens.map(t => `<li>${esc(t)}</li>`).join('');
  $('#mWa').href = waLink(`Olá, Joãozinho! Tenho interesse no ${nomeCarro(c)}, ${kmf(c.km)}, anunciado por ${brl(c.preco)} no site. Ainda está disponível?`);
  modal.hidden = false; document.body.classList.add('lock');
  gal.scrollLeft = 0; atualizaCount();
  $('.modal__box').scrollTop = 0; $('.modal__info').scrollTop = 0;
  $('.modal__x').focus();
  if (pushHash) history.replaceState(null, '', '#carro-' + c.id);
}
function fechar() {
  modal.hidden = true; document.body.classList.remove('lock');
  if (location.hash.startsWith('#carro-')) history.replaceState(null, '', location.pathname + location.search);
  if (ultimoFoco) ultimoFoco.focus({ preventScroll: true });
}
function idx() { return Math.round(gal.scrollLeft / gal.clientWidth); }
function irPara(i) { const n = atual.fotos; i = (i + n) % n; gal.scrollTo({ left: i * gal.clientWidth, behavior: 'smooth' }); }
function atualizaCount() {
  if (!atual) return; const i = idx();
  $('#gCount').textContent = `${i + 1} / ${atual.fotos}`;
  $$('button', thumbs).forEach((b, k) => b.classList.toggle('on', k === i));
}
gal.addEventListener('scroll', () => window.requestAnimationFrame(atualizaCount), { passive: true });
$('#gPrev').addEventListener('click', () => irPara(idx() - 1));
$('#gNext').addEventListener('click', () => irPara(idx() + 1));
$$('[data-close]', modal).forEach(el => el.addEventListener('click', fechar));
document.addEventListener('keydown', e => {
  if (modal.hidden) return;
  if (e.key === 'Escape') fechar();
  if (e.key === 'ArrowRight') irPara(idx() + 1);
  if (e.key === 'ArrowLeft') irPara(idx() - 1);
  if (e.key === 'Tab') {
    const f = $$('button, a[href], select, input', $('.modal__box')).filter(x => x.offsetParent !== null);
    if (!f.length) return;
    if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
    else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
  }
});
document.addEventListener('click', e => {
  const o = e.target.closest('[data-open]'); if (o) { abrir(o.dataset.open); return; }
  const s = e.target.closest('[data-sim]'); if (s) { simularCarro(s.dataset.sim); }
});
$('#mSim').addEventListener('click', () => { const id = atual.id; fechar(); simularCarro(id); });
function abrirPorHash() { const m = location.hash.match(/^#carro-(.+)$/); if (m) abrir(m[1], false); }
window.addEventListener('hashchange', abrirPorHash); abrirPorHash();

/* simulador */
const sCarro = $('#sCarro'), sValor = $('#sValor'), sEntrada = $('#sEntrada');
let prazo = 48;
[...ESTOQUE].sort((a, b) => a.preco - b.preco).forEach(c => sCarro.add(new Option(`${c.marca} ${c.modelo} ${c.ano} · ${brl(c.preco)}`, c.id)));
const valorNum = () => Number(sValor.value.replace(/\D/g, '')) || 0;
function calc() {
  const v = valorNum(), pct = Number(sEntrada.value), ent = v * pct / 100, fin = Math.max(v - ent, 0);
  const i = SITE_TAXA, p = fin > 0 ? fin * i / (1 - Math.pow(1 + i, -prazo)) : 0;
  $('#sEntradaOut').textContent = `${brl(ent)} (${pct}%)`;
  $('#sParcela').textContent = fin > 0 ? `${prazo}x de ${brl(p)}` : 'À vista';
  $('#sDet').textContent = fin > 0 ? `Valor financiado: ${brl(fin)}` : 'Sem valor a financiar';
  const c = ESTOQUE.find(x => x.id === sCarro.value);
  const alvo = c ? `o ${nomeCarro(c)} (${brl(c.preco)})` : `um carro de ${brl(v)}`;
  $('#sEnviar').href = waLink(`Olá, Joãozinho! Fiz uma simulação no site para ${alvo}: entrada de ${brl(ent)} e ${prazo}x de aproximadamente ${brl(p)}. Pode me passar as condições reais?`);
}
sCarro.addEventListener('change', () => { const c = ESTOQUE.find(x => x.id === sCarro.value); if (c) sValor.value = c.preco.toLocaleString('pt-BR'); calc(); });
sValor.addEventListener('input', () => { const n = valorNum(); sValor.value = n ? n.toLocaleString('pt-BR') : ''; sCarro.value = ''; calc(); });
sEntrada.addEventListener('input', calc);
$$('.sim__prazos button').forEach(b => b.addEventListener('click', () => {
  prazo = Number(b.dataset.prazo); $$('.sim__prazos button').forEach(x => x.classList.toggle('on', x === b)); calc();
}));
function simularCarro(id) {
  sCarro.value = id; sCarro.dispatchEvent(new Event('change'));
  $('#financiamento').scrollIntoView({ behavior: 'smooth' });
}
sCarro.value = 'tracker-lt-2022'; sCarro.dispatchEvent(new Event('change'));
