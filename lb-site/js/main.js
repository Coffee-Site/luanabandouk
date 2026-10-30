/* Lê js/content.js e js/catalogo.js e monta a página. Normalmente NÃO precisa editar. */
(function () {
  const S = window.SITE, A = S.atelie, V = (window.CATALOGO || []);
  const $ = (id) => document.getElementById(id);
  const el = (tag, attrs = {}, kids = []) => {
    const n = document.createElement(tag);
    for (const k in attrs) { if (k === 'text') n.textContent = attrs[k]; else n.setAttribute(k, attrs[k]); }
    [].concat(kids).forEach((c) => c && n.append(c));
    return n;
  };
  // Texto com *itálico*: "Olá *mundo*" -> Olá <em>mundo</em>
  const rich = (node, str) => { node.textContent = ''; String(str).split('*').forEach((p, i) => { if (p) node.append(i % 2 ? el('em', { text: p }) : document.createTextNode(p)); }); };
  const txt = (id, v) => { $(id).textContent = v; };
  const reduz = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const zapUrl = (msg) => 'https://wa.me/' + A.whatsappNumero + '?text=' + encodeURIComponent(msg);
  const store = {
    get() { try { return JSON.parse(localStorage.getItem('lb_sel') || '[]'); } catch (e) { return []; } },
    set(v) { try { localStorage.setItem('lb_sel', JSON.stringify(v)); } catch (e) { /* sem armazenamento: segue na memória */ } },
  };

  /* ---------- Botões de WhatsApp com a mensagem padrão ---------- */
  document.querySelectorAll('[data-zap="padrao"]').forEach((a) => { a.href = zapUrl(S.mensagens.padrao); });
  document.title = A.nome + ' | Vestidos de noiva exclusivos em São Paulo';

  /* ---------- Menu ---------- */
  S.menu.forEach((m) => $('menu-lista').append(el('li', {}, el('a', { href: m.alvo, text: m.texto }))));
  const btn = $('menu-btn'), menu = $('menu');
  const fechaMenu = () => { menu.classList.remove('aberto'); btn.setAttribute('aria-expanded', 'false'); };
  btn.addEventListener('click', () => { const o = !menu.classList.contains('aberto'); menu.classList.toggle('aberto', o); btn.setAttribute('aria-expanded', o); });
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) fechaMenu(); });
  const topo = $('topo'), rola = () => topo.classList.toggle('solido', scrollY > 30);
  addEventListener('scroll', rola, { passive: true }); rola();

  /* ---------- Início ---------- */
  const H = S.inicio;
  txt('h-selo', H.selo); rich($('h-titulo'), H.titulo); txt('h-texto', H.texto); txt('h-b1', H.botaoPrincipal); txt('h-b2', H.botaoSecundario);
  txt('h-cartao-t', H.cartao.titulo); txt('h-cartao-x', H.cartao.texto);
  const arco = $('h-arco'), slides = H.imagens.map((im, i) => {
    const img = el('img', { src: im.src, alt: im.alt || '', width: 720, height: 1080 }); if (i) img.loading = 'lazy'; else img.fetchPriority = 'high';
    arco.append(img); return img;
  });
  let hi = 0; slides[0].classList.add('on');
  if (!reduz && slides.length > 1) setInterval(() => { if (document.hidden) return; slides[hi].classList.remove('on'); hi = (hi + 1) % slides.length; slides[hi].classList.add('on'); }, 5200);

  /* ---------- Faixa animada ---------- */
  const faixa = $('faixa');
  for (let r = 0; r < 4; r++) S.faixa.forEach((t) => faixa.append(el('span', { text: t }), el('i', { text: '✦' })));

  /* ---------- O ateliê ---------- */
  rich($('a-titulo'), S.sobre.titulo);
  S.sobre.paragrafos.forEach((p) => $('a-texto').append(el('p', { text: p })));
  S.sobre.pilares.forEach((p, i) => $('a-pilares').append(el('li', { class: 'rv' }, [el('span', { class: 'num', text: '0' + (i + 1) }), el('h3', { text: p.titulo }), el('p', { text: p.texto })])));

  /* ---------- Experiência ---------- */
  rich($('e-titulo'), S.experiencia.titulo);
  S.experiencia.passos.forEach((p, i) => $('e-passos').append(el('li', { class: 'rv' }, [el('span', { class: 'num', text: '0' + (i + 1) }), el('h3', { text: p.titulo }), el('p', { text: p.texto })])));

  /* ---------- Luana ---------- */
  const L = S.luana;
  $('l-foto').src = L.foto; $('l-foto').alt = L.fotoAlt; txt('l-selo', L.selo); rich($('l-titulo'), L.titulo); txt('l-sub', L.subtitulo);
  L.paragrafos.forEach((p) => $('l-texto').append(el('p', { text: p })));

  /* ---------- Galeria ---------- */
  const G = S.galeria; rich($('g-titulo'), G.titulo); txt('g-texto', G.texto);
  G.fotos.forEach((f) => $('g-trilho').append(el('figure', {}, el('img', { src: f.src, alt: f.alt || '', loading: 'lazy' }))));
  const passo = () => Math.max(260, $('g-trilho').clientWidth * 0.8);
  $('g-ant').addEventListener('click', () => $('g-trilho').scrollBy({ left: -passo(), behavior: 'smooth' }));
  $('g-prox').addEventListener('click', () => $('g-trilho').scrollBy({ left: passo(), behavior: 'smooth' }));

  /* ---------- Depoimentos ---------- */
  const D = S.depoimentos; rich($('d-titulo'), D.titulo);
  D.lista.forEach((d) => $('d-lista').append(el('figure', { class: 'rv' }, [
    el('div', { class: 'estrelas', 'aria-label': '5 estrelas', text: '★★★★★' }), el('blockquote', { text: d.texto }),
    el('figcaption', {}, [el('strong', { text: d.nome }), el('span', { text: D.rotulo })])])));

  /* ---------- Visita, mapa e FAQ ---------- */
  const q = encodeURIComponent(A.endereco), Vi = S.visita;
  rich($('v-titulo'), Vi.titulo); txt('v-texto', Vi.texto); txt('v-botao', Vi.botao);
  $('v-end').append(el('strong', { text: A.enderecoLinha1 }), el('br'), document.createTextNode(A.enderecoLinha2));
  txt('v-aviso', A.atendimento);
  A.horarios.forEach((h) => $('v-horas').append(el('div', {}, [el('dt', { text: h.dia }), el('dd', { text: h.hora })])));
  $('v-rota').href = 'https://www.google.com/maps/dir/?api=1&destination=' + q;
  $('mapa').src = A.mapaPersonalizado || 'https://www.google.com/maps?q=' + q + '&hl=pt-BR&z=17&output=embed';
  rich($('f-titulo'), S.faq.titulo);
  S.faq.lista.forEach((f) => $('f-lista').append(el('details', {}, [el('summary', { text: f.p }), el('p', { text: f.r })])));

  /* ---------- Rodapé ---------- */
  [['Instagram', A.instagram], ['Facebook', A.facebook], ['TikTok', A.tiktok], ['LinkedIn', A.linkedin]].forEach(([n, u]) => { if (u) $('r-redes').append(el('li', {}, el('a', { href: u, target: '_blank', rel: 'noopener noreferrer', text: n }))); });
  txt('r-end', A.endereco); txt('r-tel', 'WhatsApp ' + A.whatsappExibicao);
  txt('r-copy', '© ' + new Date().getFullYear() + ' ' + A.nome + '. Todos os direitos reservados.');

  /* ---------- Dados estruturados para o Google (gerados do content.js) ---------- */
  try {
    const dias = { 'Segunda a sexta-feira': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], 'Sábados': ['Saturday'] };
    const hs = A.horarios.map((h) => { const m = h.hora.match(/(\d+)h.*?(\d+)h/); return m && dias[h.dia] ? { '@type': 'OpeningHoursSpecification', dayOfWeek: dias[h.dia], opens: m[1].padStart(2, '0') + ':00', closes: m[2].padStart(2, '0') + ':00' } : null; }).filter(Boolean);
    const ld = { '@context': 'https://schema.org', '@type': 'ClothingStore', name: A.nome, telephone: '+' + A.whatsappNumero, address: { '@type': 'PostalAddress', streetAddress: A.enderecoLinha1, addressLocality: 'São Paulo', addressRegion: 'SP', postalCode: '05352-070', addressCountry: 'BR' }, sameAs: [A.instagram, A.facebook, A.tiktok, A.linkedin].filter(Boolean), openingHoursSpecification: hs };
    document.head.append(Object.assign(el('script', { type: 'application/ld+json' }), { textContent: JSON.stringify(ld) }));
  } catch (e) { /* opcional */ }

  /* =====================  CATÁLOGO  ===================== */
  const C = S.catalogo; rich($('c-titulo'), C.titulo); txt('c-texto', C.texto);
  $('c-busca').placeholder = C.buscaPlaceholder; txt('c-mais', C.maisTexto);
  txt('c-comp-t', C.completo.titulo); txt('c-comp-x', C.completo.texto); txt('c-comp-b', C.completo.botao); $('c-comp-b').href = A.catalogoCompleto;
  const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const heart = '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M12 20.5s-7.2-4.4-9.2-8.9C1.4 8.3 3.1 5 6.3 5c1.9 0 3.3 1 4.2 2.2h.1C11.5 6 12.9 5 14.8 5c3.2 0 4.9 3.3 3.5 6.6-2 4.5-6.3 8.9-6.3 8.9Z" transform="translate(.8 .2)"/></svg>';
  let sel = store.get().filter((id) => V.some((v) => v.imagem === id));
  let tag = '', busca = '', mostrar = C.porPagina, lista = V.slice();

  // filtros criados a partir das tags
  const tags = [...new Set(V.flatMap((v) => v.tags || []))].sort();
  const chips = $('c-chips');
  [['', 'Todos']].concat(tags.map((t) => [t, t])).forEach(([val, rot]) => {
    const b = el('button', { type: 'button', 'aria-pressed': String(val === tag), text: rot }); b.dataset.t = val;
    b.addEventListener('click', () => { tag = val; mostrar = C.porPagina; chips.querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', String(x.dataset.t === tag))); desenha(); });
    chips.append(b);
  });
  if (!tags.length) chips.hidden = true;
  $('c-busca').addEventListener('input', (e) => { busca = norm(e.target.value.trim()); mostrar = C.porPagina; desenha(); });
  $('c-mais').addEventListener('click', () => { mostrar += C.porPagina; desenha(); });

  const gradeEl = $('c-grade');
  function desenha() {
    lista = V.filter((v) => (!tag || (v.tags || []).includes(tag)) && (!busca || norm(v.nome).includes(busca)));
    gradeEl.textContent = '';
    lista.slice(0, mostrar).forEach((v, i) => {
      const fav = el('button', { class: 'v-fav', type: 'button', 'aria-pressed': String(sel.includes(v.imagem)), 'aria-label': 'Favoritar ' + v.nome }); fav.innerHTML = heart;
      fav.addEventListener('click', () => alterna(v.imagem));
      const ver = el('button', { class: 'v-img', type: 'button', 'aria-label': 'Ver o vestido ' + v.nome + ' em detalhe' }, el('img', { src: v.imagem, alt: 'Vestido de noiva ' + v.nome, loading: 'lazy', width: 720, height: 1080 }));
      ver.addEventListener('click', () => abre(i));
      gradeEl.append(el('article', { class: 'v' }, [ver, v.novo ? el('span', { class: 'novo', text: 'Novo' }) : null, fav, el('div', { class: 'v-info' }, [el('h3', { text: v.nome }), el('span', { text: 'Cód. ' + v.cod })])]));
    });
    $('c-vazio').hidden = lista.length > 0;
    $('c-mais').parentElement.hidden = lista.length <= mostrar;
    txt('c-cont', lista.length ? 'Mostrando ' + Math.min(mostrar, lista.length) + ' de ' + lista.length + ' vestidos' : '');
  }

  /* ---------- Seleção (favoritos) ---------- */
  const pill = $('sel-pill'), gaveta = $('gaveta');
  const byId = (id) => V.find((v) => v.imagem === id);
  const linhas = () => sel.map(byId).filter(Boolean).map((v) => '• ' + v.nome + ' (cód. ' + v.cod + ')').join('\n');
  function alterna(id) {
    if (sel.includes(id)) sel = sel.filter((x) => x !== id);
    else { if (sel.length >= C.limiteSelecao) { alert('Você pode separar até ' + C.limiteSelecao + ' vestidos por visita. Remova algum para adicionar outro.'); return; } sel.push(id); }
    store.set(sel); atualiza();
  }
  function atualiza() {
    pill.hidden = !sel.length; txt('sel-n', sel.length);
    pill.classList.remove('pulso'); void pill.offsetWidth; pill.classList.add('pulso');
    document.querySelectorAll('.v-fav').forEach((b, i) => { const v = lista[i]; if (v) b.setAttribute('aria-pressed', String(sel.includes(v.imagem))); });
    if (!sel.length && !gaveta.hidden) fechaGaveta();
    const ul = $('gaveta-lista'); ul.textContent = '';
    sel.map(byId).filter(Boolean).forEach((v) => {
      const rm = el('button', { type: 'button', 'aria-label': 'Remover ' + v.nome, text: '×' }); rm.addEventListener('click', () => alterna(v.imagem));
      ul.append(el('li', {}, [el('img', { src: v.imagem, alt: '', width: 56, height: 84 }), el('div', {}, [el('strong', { text: v.nome }), el('span', { text: 'Cód. ' + v.cod })]), rm]));
    });
    $('gaveta-zap').href = zapUrl(S.mensagens.selecao.replace('{lista}', linhas()));
    if (!$('vis').hidden && $('vis').open) marcaVis();
  }
  function abreGaveta() { gaveta.hidden = false; requestAnimationFrame(() => gaveta.classList.add('on')); $('gaveta-x').focus(); }
  function fechaGaveta() { gaveta.classList.remove('on'); setTimeout(() => { gaveta.hidden = true; }, 350); pill.focus(); }
  pill.addEventListener('click', abreGaveta); $('gaveta-x').addEventListener('click', fechaGaveta); $('gaveta-fundo').addEventListener('click', fechaGaveta);
  $('gaveta-limpar').addEventListener('click', () => { sel = []; store.set(sel); atualiza(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !gaveta.hidden) fechaGaveta(); });

  /* ---------- Visualizador ---------- */
  const vis = $('vis'); let vi = 0;
  function marcaVis() { const v = lista[vi]; if (!v) return; const on = sel.includes(v.imagem); const b = $('vis-fav'); b.setAttribute('aria-pressed', String(on)); b.innerHTML = heart + '<span>' + (on ? 'Na minha seleção' : 'Adicionar à minha seleção') + '</span>'; }
  function mostraVis(i) {
    const n = Math.min(lista.length, mostrar); vi = (i + n) % n; const v = lista[vi];
    $('vis-img').src = v.imagem; $('vis-img').alt = 'Vestido de noiva ' + v.nome; txt('vis-nome', v.nome); txt('vis-cod', 'Cód. ' + v.cod);
    $('vis-zap').href = zapUrl(S.mensagens.vestido.replace('{vestido}', v.nome + ' (cód. ' + v.cod + ')')); marcaVis();
  }
  function abre(i) { mostraVis(i); if (!vis.open) vis.showModal(); }
  $('vis-fav').addEventListener('click', () => alterna(lista[vi].imagem));
  $('vis-x').addEventListener('click', () => vis.close());
  $('vis-ant').addEventListener('click', () => mostraVis(vi - 1)); $('vis-prox').addEventListener('click', () => mostraVis(vi + 1));
  vis.addEventListener('click', (e) => { if (e.target === vis) vis.close(); });
  vis.addEventListener('keydown', (e) => { if (e.key === 'ArrowLeft') mostraVis(vi - 1); if (e.key === 'ArrowRight') mostraVis(vi + 1); });
  let tx = null; vis.addEventListener('touchstart', (e) => { tx = e.touches[0].clientX; }, { passive: true });
  vis.addEventListener('touchend', (e) => { if (tx === null) return; const d = e.changedTouches[0].clientX - tx; tx = null; if (Math.abs(d) > 60) mostraVis(vi + (d < 0 ? 1 : -1)); });

  desenha(); atualiza(); if (!sel.length) pill.hidden = true;

  /* ---------- Aparecer ao rolar ---------- */
  const rv = document.querySelectorAll('.rv');
  if ('IntersectionObserver' in window && !reduz) {
    document.documentElement.classList.add('anima');
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('vi'); io.unobserve(e.target); } }), { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    rv.forEach((n, i) => { n.style.setProperty('--d', (i % 4) * 90 + 'ms'); io.observe(n); });
  }
})();
