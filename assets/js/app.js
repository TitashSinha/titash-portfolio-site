/* app.js — renders the portfolio from window.PORTFOLIO and wires up behavior.
   Presentation only: icons, social glyphs, and per-project SVGs live here;
   all copy/data lives in content.js. No framework — plain DOM + rAF.

   Original Work by Titash Sinha — AI Content Strategist. Please retain attribution. */

(function () {
  'use strict';
  var P = window.PORTFOLIO;

  /* ── helpers ──────────────────────────────────────────────────────────── */
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  /* ── icons (24x24 outline, stroke = currentColor) ─────────────────────── */
  var ICONS = {
    Home:       { sw: 1.6, d: '<path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>' },
    Summary:    { sw: 1.6, d: '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 9h8M8 13h8M8 17h5"/>' },
    Experience: { sw: 1.6, d: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/>' },
    Skills:     { sw: 1.6, d: '<path d="M12 3 4 7v6c0 4.5 3.5 7.5 8 8 4.5-.5 8-3.5 8-8V7l-8-4z"/><path d="m9 12 2 2 4-4"/>' },
    Links:      { sw: 1.6, d: '<path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/>' },
    Mail:       { sw: 1.6, d: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>' },
    Phone:      { sw: 1.6, d: '<path d="M5 4h3l2 5-2 1a12 12 0 0 0 6 6l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>' },
    Pin:        { sw: 1.6, d: '<path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.6"/>' },
    Globe:      { sw: 1.6, d: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>' },
    Arrow:      { sw: 2,   d: '<path d="M7 17 17 7"/><path d="M8 7h9v9"/>' },
    Download:   { sw: 2,   d: '<path d="M12 4v12"/><path d="m7 11 5 5 5-5"/><path d="M5 20h14"/>' },
    Monitor:    { sw: 1.6, d: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>' },
  };
  function icon(name, attrs) {
    var i = ICONS[name];
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="' + i.sw +
      '" stroke-linecap="round" stroke-linejoin="round" ' + (attrs || '') + '>' + i.d + '</svg>';
  }

  /* ── branded social glyph tiles ───────────────────────────────────────── */
  var SOCIALS = {
    LinkedIn: { name: 'LinkedIn',    bg: '#0a66c2', glyph: 'in' },
    X:        { name: 'X / Twitter', bg: '#1c1c1c', glyph: 'x' },
    GitHub:   { name: 'GitHub',      bg: '#1f1f1f', glyph: '⌂', logo: 'assets/logos/github.svg' },
    Sheets:   { name: 'Portfolio',   bg: '#0f9d58', glyph: '☷' },
  };

  /* ── per-project abstract visuals (hand-tuned per palette) ────────────── */
  var PALETTES = {
    qc:          { bg: '#1f1a16', a: '#ffb347', b: '#ff7a2a' },
    pipeline:    { bg: '#181a1f', a: '#c9b3ff', b: '#6f5ad6' },
    jupiter:     { bg: '#0d1830', a: '#8a7bff', b: '#4a3acc' },
    paperflite:  { bg: '#241814', a: '#ff8a5b', b: '#c0593a' },
    marezi:      { bg: '#10211c', a: '#5be0b9', b: '#1f9a78' },
    signifikant: { bg: '#0e1620', a: '#6fb9ff', b: '#2a73c4' },
    advertorial: { bg: '#1c1814', a: '#ffd084', b: '#c2873a' },
    generali:    { bg: '#101830', a: '#7a8cff', b: '#3a4cc4' },
    card2connect:{ bg: '#0c1f24', a: '#5fe0d0', b: '#1f9a9a' },
  };

  function repeat(n, fn) {
    var out = '';
    for (var i = 0; i < n; i++) out += fn(i);
    return out;
  }

  var SHAPES = {
    qc: function (a, bg) {
      return '<g>' +
        '<g opacity=".22" stroke="' + a + '" stroke-width="1" fill="none">' +
          repeat(12, function (i) { return '<line x1="' + (i * 36) + '" y1="0" x2="' + (i * 36) + '" y2="300"/>'; }) +
          repeat(9, function (i) { return '<line x1="0" y1="' + (i * 36) + '" x2="400" y2="' + (i * 36) + '"/>'; }) +
        '</g>' +
        '<g transform="translate(120,80)">' +
          '<rect x="0" y="0" width="160" height="140" rx="14" fill="' + bg + '" stroke="' + a + '" stroke-opacity=".4" stroke-width="1.5"/>' +
          '<path d="M40 78 L70 108 L130 50" fill="none" stroke="' + a + '" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>' +
          '<circle cx="20" cy="20" r="3" fill="' + a + '"/>' +
          '<circle cx="30" cy="20" r="3" fill="' + a + '" opacity=".6"/>' +
          '<circle cx="40" cy="20" r="3" fill="' + a + '" opacity=".4"/>' +
        '</g>' +
        '<g opacity=".8">' +
          '<path d="M70 50 l4 12 l12 4 l-12 4 l-4 12 l-4 -12 l-12 -4 l12 -4z" fill="' + a + '"/>' +
          '<path d="M340 200 l3 9 l9 3 l-9 3 l-3 9 l-3 -9 l-9 -3 l9 -3z" fill="' + a + '" opacity=".7"/>' +
        '</g>' +
      '</g>';
    },
    pipeline: function (a, bg) {
      // Columns + cards kept inside the vertically-centred band that stays
      // visible when this featured (21/9) card slice-crops the 4/3 viewBox.
      var cols = [[40, 50, 'BRIEF'], [150, 160, 'WRITING'], [260, 270, 'REVIEW']];
      var cards = [[50, 112, .55], [50, 148, .45],
                   [160, 112, .7], [160, 148, .55], [160, 184, .4],
                   [270, 112, .65], [270, 148, .5]];
      return '<g>' +
        cols.map(function (c) {
          return '<rect x="' + c[0] + '" y="82" width="100" height="132" rx="10" fill="' + bg + '" stroke="' + a + '" stroke-opacity=".35"/>' +
            '<text x="' + c[1] + '" y="102" font-family="Geist Mono, monospace" font-size="9" letter-spacing="2" fill="' + a + '">' + c[2] + '</text>';
        }).join('') +
        cards.map(function (c) {
          var x = c[0], y = c[1];
          return '<g opacity="' + c[2] + '">' +
            '<rect x="' + x + '" y="' + y + '" width="80" height="26" rx="6" fill="' + a + '" opacity=".12" stroke="' + a + '" stroke-opacity=".25"/>' +
            '<rect x="' + (x + 8) + '" y="' + (y + 7) + '" width="50" height="5" rx="2" fill="' + a + '"/>' +
            '<rect x="' + (x + 8) + '" y="' + (y + 16) + '" width="36" height="4" rx="2" fill="' + a + '" opacity=".5"/>' +
          '</g>';
        }).join('') +
      '</g>';
    },
    jupiter: function (a) {
      return '<g>' +
        '<g transform="translate(120,90)">' +
          '<rect width="180" height="110" rx="14" fill="' + a + '" opacity=".22" stroke="' + a + '" stroke-width="1.2"/>' +
          '<rect x="18" y="22" width="40" height="28" rx="4" fill="' + a + '" opacity=".4"/>' +
          '<text x="18" y="86" font-family="Geist Mono, monospace" font-size="14" fill="' + a + '" letter-spacing="3">●●●●</text>' +
          '<text x="126" y="86" font-family="Geist Mono, monospace" font-size="14" fill="' + a + '" letter-spacing="3">4920</text>' +
        '</g>' +
        '<path d="M70 60 l3 9 l9 3 l-9 3 l-3 9 l-3 -9 l-9 -3 l9 -3z" fill="' + a + '" opacity=".8"/>' +
        '<path d="M330 230 l3 9 l9 3 l-9 3 l-3 9 l-3 -9 l-9 -3 l9 -3z" fill="' + a + '" opacity=".7"/>' +
      '</g>';
    },
    paperflite: function (a, bg) {
      return '<g>' +
        '<rect x="80" y="70" width="140" height="180" rx="8" fill="' + a + '" opacity=".18" transform="rotate(-6 150 160)" stroke="' + a + '" stroke-width="1"/>' +
        '<rect x="130" y="60" width="140" height="180" rx="8" fill="' + a + '" opacity=".28" transform="rotate(2 200 150)" stroke="' + a + '" stroke-width="1"/>' +
        '<rect x="180" y="60" width="150" height="190" rx="8" fill="' + bg + '" stroke="' + a + '" stroke-width="1.4"/>' +
        '<rect x="196" y="82" width="110" height="6" rx="3" fill="' + a + '"/>' +
        '<rect x="196" y="100" width="82" height="4" rx="2" fill="' + a + '" opacity=".5"/>' +
        '<rect x="196" y="114" width="100" height="4" rx="2" fill="' + a + '" opacity=".5"/>' +
        '<rect x="196" y="128" width="70" height="4" rx="2" fill="' + a + '" opacity=".5"/>' +
        '<rect x="196" y="150" width="118" height="60" rx="6" fill="' + a + '" opacity=".22"/>' +
      '</g>';
    },
    marezi: function (a) {
      return '<g>' +
        '<circle cx="200" cy="150" r="80" fill="' + a + '" opacity=".15" stroke="' + a + '" stroke-width="1.2"/>' +
        '<g transform="translate(170,120)">' +
          '<rect x="22" y="0" width="16" height="60" rx="4" fill="' + a + '"/>' +
          '<rect x="0" y="22" width="60" height="16" rx="4" fill="' + a + '"/>' +
        '</g>' +
        '<g opacity=".45" fill="' + a + '">' +
          '<circle cx="80" cy="80" r="3"/><circle cx="320" cy="100" r="3"/>' +
          '<circle cx="110" cy="230" r="3"/><circle cx="310" cy="220" r="3"/>' +
        '</g>' +
      '</g>';
    },
    signifikant: function (a, bg) {
      return '<g>' +
        '<rect x="70" y="70" width="110" height="160" rx="10" fill="' + a + '" opacity=".15" stroke="' + a + '" stroke-opacity=".4" transform="rotate(-4 125 150)"/>' +
        '<rect x="145" y="60" width="110" height="160" rx="10" fill="' + a + '" opacity=".22" stroke="' + a + '" stroke-opacity=".5"/>' +
        '<rect x="220" y="70" width="110" height="160" rx="10" fill="' + bg + '" stroke="' + a + '" stroke-width="1.4" transform="rotate(4 275 150)"/>' +
        '<rect x="160" y="82" width="80" height="6" rx="3" fill="' + a + '"/>' +
        '<rect x="160" y="98" width="60" height="4" rx="2" fill="' + a + '" opacity=".55"/>' +
        '<rect x="160" y="110" width="70" height="4" rx="2" fill="' + a + '" opacity=".55"/>' +
        '<rect x="160" y="140" width="80" height="40" rx="6" fill="' + a + '" opacity=".25"/>' +
        '<rect x="160" y="190" width="50" height="4" rx="2" fill="' + a + '" opacity=".7"/>' +
      '</g>';
    },
    advertorial: function (a, bg) {
      return '<g>' +
        '<rect x="60" y="50" width="280" height="200" rx="10" fill="' + bg + '" stroke="' + a + '" stroke-opacity=".35"/>' +
        '<rect x="80" y="70" width="120" height="100" rx="6" fill="' + a + '" opacity=".22"/>' +
        '<rect x="80" y="180" width="100" height="6" rx="3" fill="' + a + '"/>' +
        '<rect x="80" y="196" width="80" height="4" rx="2" fill="' + a + '" opacity=".5"/>' +
        '<rect x="80" y="208" width="110" height="4" rx="2" fill="' + a + '" opacity=".5"/>' +
        '<rect x="220" y="72" width="100" height="6" rx="3" fill="' + a + '"/>' +
        '<rect x="220" y="88" width="110" height="4" rx="2" fill="' + a + '" opacity=".5"/>' +
        '<rect x="220" y="100" width="90" height="4" rx="2" fill="' + a + '" opacity=".5"/>' +
        '<rect x="220" y="112" width="110" height="4" rx="2" fill="' + a + '" opacity=".5"/>' +
        '<rect x="220" y="124" width="70" height="4" rx="2" fill="' + a + '" opacity=".5"/>' +
        '<rect x="220" y="150" width="100" height="4" rx="2" fill="' + a + '" opacity=".5"/>' +
        '<rect x="220" y="162" width="110" height="4" rx="2" fill="' + a + '" opacity=".5"/>' +
        '<text x="80" y="60" font-family="Geist Mono, monospace" font-size="8" letter-spacing="2" fill="' + a + '" opacity=".7">FEATURE</text>' +
      '</g>';
    },
    generali: function (a) {
      return '<g>' +
        '<path d="M200 60 L290 100 L290 170 Q290 220 200 250 Q110 220 110 170 L110 100 Z" fill="' + a + '" opacity=".18" stroke="' + a + '" stroke-width="1.5"/>' +
        '<path d="M165 155 L195 185 L235 130" fill="none" stroke="' + a + '" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>' +
      '</g>';
    },
    card2connect: function (a, bg) {
      // Two contact cards linked by a dashed arc — the "networking follow-up".
      // Kept inside the vertically-centred band that survives the 21/9 crop.
      function card(x, fill, op) {
        return '<g transform="translate(' + x + ',110)">' +
          '<rect width="120" height="80" rx="12" fill="' + fill + '"' + (op ? ' opacity="' + op + '"' : '') + ' stroke="' + a + '" stroke-width="1.3"/>' +
          '<circle cx="26" cy="28" r="12" fill="' + a + '" opacity=".45"/>' +
          '<rect x="46" y="20" width="54" height="6" rx="3" fill="' + a + '"/>' +
          '<rect x="46" y="34" width="38" height="4" rx="2" fill="' + a + '" opacity=".5"/>' +
          '<rect x="20" y="58" width="80" height="4" rx="2" fill="' + a + '" opacity=".35"/>' +
        '</g>';
      }
      return '<g>' +
        '<path d="M120 150 C 180 92, 220 92, 280 150" fill="none" stroke="' + a + '" stroke-width="1.5" stroke-opacity=".55" stroke-dasharray="4 6"/>' +
        card(60, bg, null) +
        card(220, a, '.14') +
        '<circle cx="120" cy="150" r="5" fill="' + a + '"/>' +
        '<circle cx="280" cy="150" r="5" fill="' + a + '"/>' +
        '<circle cx="200" cy="106" r="4" fill="' + a + '" opacity=".85"/>' +
      '</g>';
    },
  };

  function projectVisual(kind) {
    var p = PALETTES[kind] || PALETTES.qc;
    var shape = (SHAPES[kind] || SHAPES.qc)(p.a, p.bg);
    return '<svg class="visual" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">' +
      '<defs>' +
        '<radialGradient id="g-' + kind + '" cx="70%" cy="40%" r="80%">' +
          '<stop offset="0%" stop-color="' + p.a + '" stop-opacity=".7"/>' +
          '<stop offset="40%" stop-color="' + p.b + '" stop-opacity=".5"/>' +
          '<stop offset="100%" stop-color="' + p.bg + '" stop-opacity="1"/>' +
        '</radialGradient>' +
        '<linearGradient id="l-' + kind + '" x1="0" y1="0" x2="1" y2="1">' +
          '<stop offset="0%" stop-color="' + p.a + '" stop-opacity=".25"/>' +
          '<stop offset="100%" stop-color="' + p.bg + '" stop-opacity="0"/>' +
        '</linearGradient>' +
      '</defs>' +
      '<rect width="400" height="300" fill="' + p.bg + '"/>' +
      '<rect width="400" height="300" fill="url(#g-' + kind + ')"/>' +
      shape +
      '<rect width="400" height="300" fill="url(#l-' + kind + ')"/>' +
    '</svg>';
  }

  /* ── section renderers ────────────────────────────────────────────────── */
  function contactItem(name, label, value) {
    return '<div class="contact-item">' + icon(name, 'class="icon"') +
      '<div><span class="lbl">' + esc(label) + '</span><span class="val">' + esc(value) + '</span></div></div>';
  }

  function renderHero() {
    var c = P.contact;
    return '<section id="home" class="hero"><div class="shell" style="width:100%">' +
      '<div class="content-col" style="position:relative;z-index:2">' +
        '<p class="best-on-desktop">' + icon('Monitor', 'class="icon"') +
          '<span>Best viewed on desktop — the full motion and atmosphere live there.</span>' +
          '<button type="button" class="best-on-desktop-close" aria-label="Dismiss this notice">&times;</button></p>' +
        '<div class="reveal in"><span class="live-badge"><span class="live-dot"></span>' + esc(P.status) + '</span></div>' +
        '<div class="reveal"><div class="hero-headline">' +
          '<p class="hero-role">' + esc(P.role) + '</p>' +
          '<div class="hero-name-row">' +
            '<h1 class="hero-name">' + esc(P.name.first) + '<br>' + esc(P.name.last) + '<span class="a">.</span></h1>' +
            '<img class="hero-avatar" src="assets/images/potrait-mobilescreen.png" alt="' + esc(P.name.first + ' ' + P.name.last) + '">' +
          '</div>' +
        '</div></div>' +
        '<div class="reveal reveal-d1"><div class="contact-grid">' +
          contactItem('Mail', 'Email', c.email) +
          contactItem('Phone', 'Phone', c.phone) +
          contactItem('Pin', 'Based in', c.location) +
          contactItem('Globe', 'Working', c.availability) +
        '</div></div>' +
      '</div></div></section>';
  }

  function renderSummary() {
    var tagline = esc(P.tagline.replace(/\.$/, '')) + '<span class="amber-dot">.</span>';
    var paras = P.summary.map(function (t) {
      return '<p class="body-lg" style="margin-bottom:24px;max-width:680px">' + esc(t) + '</p>';
    }).join('');
    return '<section id="summary"><div class="shell"><div class="content-col">' +
      '<h2 class="section-h reveal">Summary</h2>' +
      '<div class="reveal reveal-d1"><p class="summary-tagline">' + tagline + '</p>' + paras + '</div>' +
      '<blockquote class="pull-quote reveal reveal-d2">' + esc(P.quote.text) + '</blockquote>' +
      '</div></div></section>';
  }

  function projectCard(p) {
    return '<a class="project-card' + (p.featured ? ' feature' : '') + '" href="' + esc(p.href || '#') + '">' +
      projectVisual(p.visual) +
      '<div class="scrim"></div>' +
      (p.badge ? '<span class="badge-feat">' + esc(p.badge) + '</span>' : '') +
      '<span class="arrow">' + icon('Arrow', 'style="width:16px;height:16px"') + '</span>' +
      '<div class="label"><div class="name">' + esc(p.name) + '</div></div>' +
    '</a>';
  }

  function roleBlock(role) {
    var location = role.location ? '<span class="role-location">· ' + esc(role.location) + '</span>' : '';
    var subRole = role.subRole ? '<div class="role-subrole"><span class="role-subrole-mark">↳</span>' + esc(role.subRole) + '</div>' : '';
    var projects = (role.projects && role.projects.length)
      ? '<div class="selected-label">Selected Projects</div><div class="project-grid reveal">' +
        role.projects.map(projectCard).join('') + '</div>' : '';
    var resp = (role.responsibilities && role.responsibilities.length)
      ? '<ul class="responsibilities reveal">' +
        role.responsibilities.map(function (r) { return '<li>' + esc(r) + '</li>'; }).join('') + '</ul>' : '';
    return '<div class="role"><div class="reveal"><div class="role-head">' +
        '<span class="role-bullet"></span>' +
        '<h3 class="role-title">' + esc(role.title) + '</h3>' +
        '<span class="role-date">' + esc(role.date) + '</span>' +
        '<div class="role-company">' + esc(role.company) + location + '</div>' +
        subRole +
      '</div><p class="role-scope">' + esc(role.scope) + '</p></div>' +
      projects + resp + '</div>';
  }

  function renderCompetencies() {
    if (!P.competencies || !P.competencies.length) return '';
    var DECOS = [
      // Systems Engineering — network nodes
      '<svg viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<circle cx="8" cy="24" r="3.5" fill="#ffb347" fill-opacity=".5"/>' +
        '<circle cx="32" cy="8" r="3.5" fill="#ffb347" fill-opacity=".5"/>' +
        '<circle cx="32" cy="40" r="3.5" fill="#ffb347" fill-opacity=".5"/>' +
        '<circle cx="56" cy="24" r="3.5" fill="#ffb347" fill-opacity=".5"/>' +
        '<line x1="11" y1="22" x2="29" y2="10" stroke="#ffb347" stroke-opacity=".3" stroke-width="1.2"/>' +
        '<line x1="11" y1="26" x2="29" y2="38" stroke="#ffb347" stroke-opacity=".3" stroke-width="1.2"/>' +
        '<line x1="35" y1="10" x2="53" y2="22" stroke="#ffb347" stroke-opacity=".3" stroke-width="1.2"/>' +
        '<line x1="35" y1="38" x2="53" y2="26" stroke="#ffb347" stroke-opacity=".3" stroke-width="1.2"/>' +
        '<line x1="32" y1="12" x2="32" y2="36" stroke="#ffb347" stroke-opacity=".12" stroke-width="1" stroke-dasharray="3 3"/>' +
      '</svg>',
      // Product Marketing & GTM — bar chart with trend line + nodes
      '<svg viewBox="0 0 64 46" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<rect x="2"  y="30" width="9" height="12" rx="1.5" fill="#ffb347" fill-opacity=".45"/>' +
        '<rect x="14" y="23" width="9" height="19" rx="1.5" fill="#ffb347" fill-opacity=".45"/>' +
        '<rect x="26" y="17" width="9" height="25" rx="1.5" fill="#ffb347" fill-opacity=".45"/>' +
        '<rect x="38" y="10" width="9" height="32" rx="1.5" fill="#ffb347" fill-opacity=".45"/>' +
        '<rect x="50" y="4"  width="9" height="38" rx="1.5" fill="#ffb347" fill-opacity=".45"/>' +
        '<polyline points="6.5,30 18.5,23 30.5,17 42.5,10 54.5,4" stroke="#ffb347" stroke-opacity=".8" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<circle cx="6.5"  cy="30" r="2.5" fill="#221c18" stroke="#ffb347" stroke-width="1.3"/>' +
        '<circle cx="18.5" cy="23" r="2.5" fill="#221c18" stroke="#ffb347" stroke-width="1.3"/>' +
        '<circle cx="30.5" cy="17" r="2.5" fill="#221c18" stroke="#ffb347" stroke-width="1.3"/>' +
        '<circle cx="42.5" cy="10" r="2.5" fill="#221c18" stroke="#ffb347" stroke-width="1.3"/>' +
        '<circle cx="54.5" cy="4"  r="2.5" fill="#221c18" stroke="#ffb347" stroke-width="1.3"/>' +
        '<line x1="0" y1="43" x2="64" y2="43" stroke="#ffb347" stroke-opacity=".15" stroke-width="1"/>' +
      '</svg>',
      // Content Operations — layered flow bars with arrows
      '<svg viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<rect x="4" y="6" width="24" height="8" rx="2" fill="#ffb347" fill-opacity=".15" stroke="#ffb347" stroke-opacity=".3" stroke-width="1"/>' +
        '<rect x="4" y="20" width="38" height="8" rx="2" fill="#ffb347" fill-opacity=".15" stroke="#ffb347" stroke-opacity=".3" stroke-width="1"/>' +
        '<rect x="4" y="34" width="30" height="8" rx="2" fill="#ffb347" fill-opacity=".15" stroke="#ffb347" stroke-opacity=".3" stroke-width="1"/>' +
        '<path d="M31 10 L38 10 M35 7.5 L38 10 L35 12.5" stroke="#ffb347" stroke-opacity=".45" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<path d="M45 24 L52 24 M49 21.5 L52 24 L49 26.5" stroke="#ffb347" stroke-opacity=".45" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>' +
      '</svg>',
      // GEO & AI Strategy — concentric signal rings
      '<svg viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<circle cx="32" cy="24" r="4" fill="#ffb347" fill-opacity=".6"/>' +
        '<circle cx="32" cy="24" r="11" stroke="#ffb347" stroke-opacity=".3" stroke-width="1.2"/>' +
        '<circle cx="32" cy="24" r="18" stroke="#ffb347" stroke-opacity=".18" stroke-width="1"/>' +
        '<circle cx="32" cy="24" r="26" stroke="#ffb347" stroke-opacity=".09" stroke-width="1"/>' +
        '<line x1="32" y1="1" x2="32" y2="7" stroke="#ffb347" stroke-opacity=".35" stroke-width="1.5" stroke-linecap="round"/>' +
        '<line x1="32" y1="41" x2="32" y2="47" stroke="#ffb347" stroke-opacity=".35" stroke-width="1.5" stroke-linecap="round"/>' +
        '<line x1="5" y1="24" x2="11" y2="24" stroke="#ffb347" stroke-opacity=".35" stroke-width="1.5" stroke-linecap="round"/>' +
        '<line x1="53" y1="24" x2="59" y2="24" stroke="#ffb347" stroke-opacity=".35" stroke-width="1.5" stroke-linecap="round"/>' +
      '</svg>',
    ];
    var items = P.competencies.map(function (c, i) {
      return '<div class="competency-item reveal">' +
        '<div class="competency-header">' +
          '<div class="competency-title">' + esc(c.title) + '</div>' +
          '<div class="competency-deco">' + (DECOS[i] || '') + '</div>' +
        '</div>' +
        '<p class="competency-desc">' + esc(c.desc) + '</p>' +
      '</div>';
    }).join('');
    return '<section id="competencies"><div class="shell"><div class="content-col">' +
      '<h2 class="section-h reveal">Core<br>Competencies</h2>' +
      '<div class="competencies-grid">' + items + '</div>' +
      '</div></div></section>';
  }

  function renderExperience() {
    return '<section id="experience"><div class="shell"><div class="content-col">' +
      '<h2 class="section-h reveal">Work<br>Experience</h2>' +
      P.roles.map(roleBlock).join('') +
      '</div></div></section>';
  }

  function renderSkills() {
    var skills = P.skills.map(function (s) {
      return '<div class="skill-item"><span class="skill-bullet"></span><span class="skill-text">' + esc(s) + '</span></div>';
    }).join('');
    var tools = P.tools.map(function (t) {
      return '<div class="tool"><div class="tool-icon"><img src="' + esc(t.logo) + '" alt="' + esc(t.name) + '" loading="lazy"></div>' +
        '<div class="tool-name">' + esc(t.name) + '</div></div>';
    }).join('');
    var langs = P.languages.map(function (l) {
      return '<div class="lang-item"><div class="lang-row"><span class="lang-name">' + esc(l.name) + '</span>' +
        '<span class="lang-level">' + esc(l.level) + '</span></div>' +
        '<div class="lang-bar"><div class="lang-fill" style="width:' + l.value + '%"></div></div></div>';
    }).join('');
    var edu = P.education.map(function (e) {
      return '<div class="edu-item"><span class="edu-bullet"></span><div>' +
        '<div class="edu-name">' + esc(e.name) + '</div><div class="edu-detail">' + esc(e.detail) + '</div></div></div>';
    }).join('');
    return '<section id="skills"><div class="shell"><div class="content-col">' +
      '<h2 class="section-h reveal">Skills<br>&amp; Tools</h2>' +
      '<div class="skills-grid reveal">' + skills + '</div>' +
      '<div class="selected-label" style="margin:0 0 24px 0">Daily-driver toolkit</div>' +
      '<div class="tools-row reveal">' + tools + '</div>' +
      '<div class="lang-edu reveal" style="margin-top:80px">' +
        '<div><div class="col-label">Languages</div>' + langs + '</div>' +
        '<div><div class="col-label">Education &amp; Certifications</div>' + edu + '</div>' +
      '</div></div></div></section>';
  }

  function socialBtn(s) {
    var def = SOCIALS[s.key];
    if (!def) return '';
    var inner = def.logo ? '<img src="' + esc(def.logo) + '" alt="' + esc(def.name) + '">' : esc(def.glyph);
    return '<a class="social-btn" href="' + esc(s.href) + '" target="_blank" rel="noreferrer">' +
      '<span class="glyph" style="background:' + def.bg + '">' + inner + '</span>' + esc(def.name) + '</a>';
  }

  function renderLinks() {
    var year = new Date().getFullYear();
    return '<section id="links" class="links"><div class="shell" style="position:relative">' +
      '<div class="content-col" style="position:relative;z-index:2">' +
        '<h2 class="section-h reveal">Links</h2>' +
        '<div class="socials reveal">' + P.socials.map(socialBtn).join('') + '</div>' +
        '<div class="links-contact reveal">' +
          '<div class="row">' + icon('Mail', 'class="icon"') + '<span>' + esc(P.contact.email) + '</span></div>' +
          '<div class="row">' + icon('Phone', 'class="icon"') + '<span>' + esc(P.contact.phone) + '</span></div>' +
        '</div>' +
        '<div class="footer">© ' + year + ' ' + esc(P.name.first + ' ' + P.name.last) + '. All rights reserved.</div>' +
      '</div></div></section>';
  }

  var NAV_ITEMS = [
    { id: 'home', label: 'Home', icon: 'Home' },
    { id: 'summary', label: 'Summary', icon: 'Summary' },
    { id: 'experience', label: 'Experience', icon: 'Experience' },
    { id: 'skills', label: 'Skills', icon: 'Skills' },
    { id: 'links', label: 'Links', icon: 'Links' },
  ];

  function renderPortrait() {
    return '<div class="portrait-fixed" aria-hidden="true">' +
      '<div class="portrait-halo"></div>' +
      '<img class="portrait-photo" src="' + esc(P.assets.portrait) + '" alt="" draggable="false"></div>';
  }

  function renderCVButton() {
    return '<a class="cv-btn" href="' + esc(P.assets.resume) + '" download="Titash_Sinha_AI_Content_Strategist_Resume.pdf" target="_blank" rel="noopener">' +
      icon('Download', 'class="icon"') + 'Download CV</a>';
  }

  function renderNav() {
    return '<nav class="nav-pill" aria-label="Section navigation">' +
      '<span class="nav-pill-bg" aria-hidden="true"></span>' +
      NAV_ITEMS.map(function (n) {
        return '<button class="nav-item" data-key="' + n.id + '">' + icon(n.icon, 'class="icon"') +
          '<span class="label">' + n.label + '</span></button>';
      }).join('') + '</nav>';
  }

  /* ── behaviors ────────────────────────────────────────────────────────── */
  function initReveal() {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0, rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.reveal:not(.in)').forEach(function (el) { io.observe(el); });
  }

  // Fixed portrait — sharp in hero, blurs through the middle, re-sharpens at links.
  function initPortrait() {
    var node = document.querySelector('.portrait-fixed');
    if (!node) return;
    var photo = node.querySelector('.portrait-photo');
    var halo = node.querySelector('.portrait-halo');
    var smooth = function (t) { return t * t * (3 - 2 * t); };

    function compute() {
      var home = document.getElementById('home');
      var summary = document.getElementById('summary');
      var links = document.getElementById('links');
      if (!home || !summary || !links) return { blur: 0, opacity: 1, haloOp: 1 };
      var y = window.scrollY, vh = window.innerHeight;
      var fadeOutStart = home.offsetTop + home.offsetHeight * 0.45;
      var fadeOutEnd = summary.offsetTop + vh * 0.35;
      // Sharpening begins once Links is approaching (after the toolkit, late in Skills)
      // and completes while Links is in view. fadeInEnd stays reachable because the
      // Links section is shorter than the viewport (can't be scrolled to the top).
      var fadeInStart = links.offsetTop - vh * 0.85;
      var fadeInEnd = links.offsetTop - vh * 0.45;
      // Hold a steady blur through Summary → Experience → Skills, then re-sharpen.
      var PEAK_BLUR = 28, PLATEAU_BLUR = 26, PEAK_OPACITY = 0.5, PLATEAU_OPACITY = 0.55;
      var blur, opacity, t;
      if (y < fadeOutStart) { blur = 0; opacity = 1; }
      else if (y < fadeOutEnd) { t = smooth((y - fadeOutStart) / (fadeOutEnd - fadeOutStart)); blur = t * PEAK_BLUR; opacity = 1 - t * (1 - PEAK_OPACITY); }
      else if (y < fadeInStart) { t = (y - fadeOutEnd) / (fadeInStart - fadeOutEnd); blur = PEAK_BLUR + (PLATEAU_BLUR - PEAK_BLUR) * t; opacity = PEAK_OPACITY + (PLATEAU_OPACITY - PEAK_OPACITY) * t; }
      else if (y < fadeInEnd) { t = smooth((y - fadeInStart) / (fadeInEnd - fadeInStart)); blur = PLATEAU_BLUR * (1 - t); opacity = PLATEAU_OPACITY + t * (1 - PLATEAU_OPACITY); }
      else { blur = 0; opacity = 1; }
      // Reaching the bottom of the page = journey complete → guarantee fully sharp.
      if (y + vh >= document.documentElement.scrollHeight - 2) { blur = 0; opacity = 1; }
      return { blur: blur, opacity: opacity, haloOp: opacity * 0.65 };
    }
    function apply() {
      var s = compute();
      if (photo) { photo.style.filter = 'blur(' + s.blur.toFixed(1) + 'px)'; photo.style.opacity = s.opacity.toFixed(3); }
      if (halo) halo.style.opacity = s.haloOp.toFixed(3);
    }
    var pending = false;
    function onScroll() {
      if (pending) return;
      pending = true;
      requestAnimationFrame(function () { apply(); pending = false; });
    }
    apply();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', apply);
  }

  // Atmospheric glow follows the cursor; portrait tilts subtly with it.
  function initGlowTilt() {
    var glow = document.getElementById('glow');
    var portrait = document.querySelector('.portrait-fixed');
    var raf = 0, mx = 0, my = 0;
    function apply() {
      raf = 0;
      var nx = mx / window.innerWidth, ny = my / window.innerHeight;
      if (glow) {
        glow.style.setProperty('--glow-x', (72 + nx * 14) + '%');
        glow.style.setProperty('--glow-y', (38 + ny * 18) + '%');
      }
      if (portrait) portrait.style.transform = 'translate(' + ((nx - 0.5) * 2 * 14) + 'px, ' + ((ny - 0.5) * 2 * 14) + 'px)';
    }
    window.addEventListener('mousemove', function (e) {
      mx = e.clientX; my = e.clientY;
      if (!raf) raf = requestAnimationFrame(apply);
    });
  }

  // Scroll-spy + sliding spotlight behind the active nav item.
  function initNav() {
    var nav = document.querySelector('.nav-pill');
    var bg = nav.querySelector('.nav-pill-bg');
    var sections = NAV_ITEMS.map(function (n) { return document.getElementById(n.id); }).filter(Boolean);
    if (!sections.length) return;
    var current = null;

    function positionBg() {
      var btn = nav.querySelector('.nav-item[data-key="' + current + '"]');
      if (!btn) return;
      bg.style.transform = 'translateX(' + btn.offsetLeft + 'px)';
      bg.style.width = btn.offsetWidth + 'px';
      bg.style.opacity = '1';
    }
    function setActive(id) {
      if (id === current) return;
      current = id;
      nav.querySelectorAll('.nav-item').forEach(function (b) { b.classList.toggle('active', b.dataset.key === id); });
      positionBg();
    }
    function onScroll() {
      var center = window.scrollY + window.innerHeight * 0.4;
      var best = sections[0].id;
      sections.forEach(function (s) { if (s.offsetTop <= center) best = s.id; });
      setActive(best);
    }

    nav.querySelectorAll('.nav-item').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var el = document.getElementById(btn.dataset.key);
        if (el) window.scrollTo({ top: el.offsetTop - 24, behavior: 'smooth' });
      });
    });
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', positionBg);
  }

  // CV button drifts toward the cursor within a 180px radius.
  function initMagneticCV() {
    var btn = document.querySelector('.cv-btn');
    if (!btn) return;
    var radius = 180;
    window.addEventListener('mousemove', function (e) {
      var r = btn.getBoundingClientRect();
      var dx = e.clientX - (r.left + r.width / 2);
      var dy = e.clientY - (r.top + r.height / 2);
      var d = Math.hypot(dx, dy);
      if (d < radius) {
        var k = (1 - d / radius) * 0.26;
        btn.style.transform = 'translate(' + dx * k + 'px, ' + dy * k + 'px)';
      } else {
        btn.style.transform = 'translate(0,0)';
      }
    });
    window.addEventListener('mouseleave', function () { btn.style.transform = 'translate(0,0)'; });
  }

  // "Best viewed on desktop" note — dismissible.
  function initDesktopNote() {
    var note = document.querySelector('.best-on-desktop');
    if (!note) return;
    var close = note.querySelector('.best-on-desktop-close');
    if (close) close.addEventListener('click', function () {
      note.style.display = 'none';
    });
  }

  /* ── boot ─── Original Work by Titash Sinha ───────────────────────────── */
  document.getElementById('root').innerHTML =
    renderPortrait() + renderHero() + renderSummary() + renderCompetencies() + renderExperience() +
    renderSkills() + renderLinks() + renderCVButton() + renderNav();

  initReveal();
  initPortrait();
  initGlowTilt();
  initNav();
  initMagneticCV();
  initDesktopNote();
})();
