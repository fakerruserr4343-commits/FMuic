/* FMiuc v1.7 — site etkileşimleri | sıfır bağımlılık */
(function () {
'use strict';

var $ = function (s, c) { return (c || document).querySelector(s); };
var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
function lerp(a, b, t) { return a + (b - a) * t; }
function clamp(v, a, b) { return Math.min(b, Math.max(a, v)); }
var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

/* ---------- yardımcılar ---------- */
var WA_NUM = '994708502510';
function TS(k) { return (window.FM_STRINGS && window.FM_STRINGS[k]) || ''; }

/* ---------- WhatsApp: hazır mesajlı linkler ---------- */
function bindWA() {
  $$('a[data-wa]').forEach(function (a) {
    var msg = a.getAttribute('data-wa') || TS('wa_hello') || 'Merhaba! FMiuc hakkında bilgi almak istiyorum.';
    a.href = 'https://wa.me/' + WA_NUM + '?text=' + encodeURIComponent(msg);
  });
}
bindWA();

/* ---------- telefon saati ---------- */
var clockEl = $('#pClock');
if (clockEl) {
  var tickClock = function () {
    var d = new Date();
    clockEl.textContent = ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2);
  };
  tickClock();
  setInterval(tickClock, 15000);
}

/* ---------- nav ---------- */
var nav = $('#nav');
window.addEventListener('scroll', function () {
  nav.classList.toggle('scrolled', window.scrollY > 24);
}, { passive: true });

/* ---------- mobil menü ---------- */
var burger = $('#burger'), mob = $('#mobMenu');
if (burger && mob) {
  burger.addEventListener('click', function () {
    var open = mob.classList.toggle('open');
    burger.classList.toggle('x', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  });
  Array.prototype.forEach.call(mob.querySelectorAll('a'), function (a) {
    a.addEventListener('click', function () {
      mob.classList.remove('open');
      burger.classList.remove('x');
      document.body.style.overflow = '';
    });
  });
}

/* ---------- görünüm animasyonları ---------- */
var io = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: .12, rootMargin: '0px 0px -36px 0px' });
$$('.reveal').forEach(function (el) { io.observe(el); });

/* ---------- sayaçlar ---------- */
var COUNTED = [];
function recount() {
  COUNTED.forEach(function (c) {
    var loc = TS('loc') || 'tr-TR';
    c.el.textContent = c.dec
      ? (c.end / 10).toLocaleString(loc, { minimumFractionDigits: 1, maximumFractionDigits: 1 })
      : Math.round(c.end).toLocaleString(loc);
    c.el.textContent += c.suffix;
  });
}
var cio = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (!e.isIntersecting) return;
    cio.unobserve(e.target);
    var el = e.target;
    var end = parseFloat(el.getAttribute('data-count'));
    var dec = el.getAttribute('data-dec') === '1';
    var suffix = el.getAttribute('data-suffix') || '';
    COUNTED.push({ el: el, end: end, dec: dec, suffix: suffix });
    function setVal(v) {
      var loc = TS('loc') || 'tr-TR';
      el.textContent = dec
        ? (v / 10).toLocaleString(loc, { minimumFractionDigits: 1, maximumFractionDigits: 1 })
        : Math.round(v).toLocaleString(loc);
    }
    if (reduced) { setVal(end); el.textContent += suffix; return; }
    var t0 = performance.now(), dur = 1500;
    (function step(t) {
      var p = Math.min((t - t0) / dur, 1);
      setVal(end * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
      else el.textContent += suffix;
    })(t0);
  });
}, { threshold: .5 });
$$('[data-count]').forEach(function (el) { cio.observe(el); });

/* ---------- hero telefon tilt (3D) ---------- */
var scene = $('#phoneScene'), phone = $('#heroPhone');
if (scene && phone && hasHover && !reduced) {
  var tx = 0, ty = 0, cx = 0, cy = 0, raf = null;
  var loop = function () {
    cx = lerp(cx, tx, .08); cy = lerp(cy, ty, .08);
    phone.style.setProperty('--ry', cx.toFixed(2) + 'deg');
    phone.style.setProperty('--rx', cy.toFixed(2) + 'deg');
    if (Math.abs(cx - tx) > .05 || Math.abs(cy - ty) > .05) raf = requestAnimationFrame(loop);
    else raf = null;
  };
  scene.addEventListener('pointermove', function (e) {
    var r = scene.getBoundingClientRect();
    tx = ((e.clientX - r.left) / r.width - .5) * 14;
    ty = -((e.clientY - r.top) / r.height - .5) * 10;
    if (!raf) raf = requestAnimationFrame(loop);
  });
  scene.addEventListener('pointerleave', function () {
    tx = 0; ty = 0;
    if (!raf) raf = requestAnimationFrame(loop);
  });
}

/* ---------- tilt kartlar ---------- */
if (hasHover && !reduced) {
  $$('.tilt').forEach(function (card) {
    card.addEventListener('pointermove', function (e) {
      var r = card.getBoundingClientRect();
      var x = e.clientX - r.left, y = e.clientY - r.top;
      card.style.setProperty('--ry', ((x / r.width - .5) * 7).toFixed(2) + 'deg');
      card.style.setProperty('--rx', (-(y / r.height - .5) * 7).toFixed(2) + 'deg');
      card.style.setProperty('--mx', x + 'px');
      card.style.setProperty('--my', y + 'px');
    });
    card.addEventListener('pointerleave', function () {
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
    });
  });
}

/* ---------- parçacık ağı (canvas) ---------- */
var cv = $('#fx');
if (cv && !reduced) {
  var ctx = cv.getContext('2d');
  var W, H, pts = [], raf = null, mx = -9e3, my = -9e3, rsz = null, star = null, starT = performance.now();
  var GREEN = '41,243,131', CYAN = '25,229,255';
  function size() {
    var DPR = Math.min(window.devicePixelRatio || 1, 1.8);
    W = window.innerWidth; H = window.innerHeight;
    cv.width = W * DPR; cv.height = H * DPR;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    var n = W < 700 ? 40 : 76;
    pts = [];
    for (var i = 0; i < n; i++) pts.push({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - .5) * .16, vy: (Math.random() - .5) * .16,
      r: Math.random() * 1.5 + .5,
      c: Math.random() < .55 ? GREEN : CYAN,
      a: Math.random() * .5 + .2
    });
  }
  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (var i = 0; i < pts.length; i++) {
      var p = pts[i];
      p.x += p.vx; p.y += p.vy;
      if (p.x < -12) p.x = W + 12; if (p.x > W + 12) p.x = -12;
      if (p.y < -12) p.y = H + 12; if (p.y > H + 12) p.y = -12;
      var dm = Math.hypot(p.x - mx, p.y - my);
      var glow = dm < 170 ? (1 - dm / 170) * .5 : 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, 6.2832);
      ctx.fillStyle = 'rgba(' + p.c + ',' + (p.a + glow).toFixed(3) + ')';
      ctx.fill();
    }
    ctx.lineWidth = 1;
    for (var a = 0; a < pts.length; a++) {
      for (var b = a + 1; b < pts.length; b++) {
        var dx = pts[a].x - pts[b].x, dy = pts[a].y - pts[b].y;
        var d2 = dx * dx + dy * dy;
        if (d2 < 14400) {
          ctx.strokeStyle = 'rgba(' + pts[a].c + ',' + ((1 - Math.sqrt(d2) / 120) * .13).toFixed(3) + ')';
          ctx.beginPath(); ctx.moveTo(pts[a].x, pts[a].y); ctx.lineTo(pts[b].x, pts[b].y); ctx.stroke();
        }
      }
    }
    if (!star && performance.now() - starT > 6500 + Math.random() * 5000) {
      star = { x: W * (0.1 + Math.random() * 0.7), y: H * Math.random() * 0.35, vx: 4 + Math.random() * 3, vy: 1.4 + Math.random() * 1.4, l: 0 };
      starT = performance.now();
    }
    if (star) {
      star.x += star.vx; star.y += star.vy; star.l += 0.016;
      var al = star.l < 0.25 ? star.l / 0.25 : Math.max(0, 1 - star.l);
      ctx.strokeStyle = 'rgba(200,255,230,' + (al * 0.8).toFixed(3) + ')';
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.moveTo(star.x, star.y);
      ctx.lineTo(star.x - star.vx * 9, star.y - star.vy * 9);
      ctx.stroke();
      if (star.l >= 1 || star.x > W + 80) star = null;
    }
    raf = requestAnimationFrame(draw);
  }
  size();
  window.addEventListener('resize', function () { clearTimeout(rsz); rsz = setTimeout(size, 160); }, { passive: true });
  if (hasHover) window.addEventListener('pointermove', function (e) { mx = e.clientX; my = e.clientY; }, { passive: true });
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) { cancelAnimationFrame(raf); raf = null; }
    else if (!raf) raf = requestAnimationFrame(draw);
  });
  raf = requestAnimationFrame(draw);
}

/* ---------- dönen 3D tel-küre (son çağrı bölümü) ---------- */
var gcv = $('#globe');
if (gcv && !reduced) {
  var gctx = gcv.getContext('2d');
  var GW = 300, GH = 300, GR = 120, gRaf = null, gVis = false, gT = 0, fr = 0, gRsz = null;
  var TILT = 0.42, SPIN = 0.0034;
  var SEG = window.innerWidth < 700 ? 34 : 50;
  var RINGS = [];
  (function () {
    var la = [-60, -30, 0, 30, 60];
    for (var i = 0; i < la.length; i++) {
      var pts = [], c = Math.cos(la[i] * Math.PI / 180), s = Math.sin(la[i] * Math.PI / 180);
      for (var j = 0; j <= SEG; j++) {
        var t = j / SEG * Math.PI * 2;
        pts.push([c * Math.cos(t), c * Math.sin(t), s]);
      }
      RINGS.push(pts);
    }
    for (var m = 0; m < 6; m++) {
      var pts2 = [], L = m / 6 * Math.PI;
      for (var j2 = 0; j2 <= SEG; j2++) {
        var t2 = j2 / SEG * Math.PI * 2;
        pts2.push([Math.cos(t2) * Math.cos(L), Math.cos(t2) * Math.sin(L), Math.sin(t2)]);
      }
      RINGS.push(pts2);
    }
  })();
  function gsize() {
    var r = gcv.getBoundingClientRect();
    var DPR = Math.min(window.devicePixelRatio || 1, 1.5);
    GW = Math.max(200, r.width); GH = Math.max(200, r.height);
    gcv.width = GW * DPR; gcv.height = GH * DPR;
    gctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    GR = Math.min(GW, GH) / 2 - Math.min(GW, GH) * 0.12;
  }
  function gdraw() {
    fr++; gT += SPIN;
    gctx.clearRect(0, 0, GW, GH);
    var cx = GW / 2, cy = GH / 2;
    var ca = Math.cos(gT), sa = Math.sin(gT), ct = Math.cos(TILT), st = Math.sin(TILT);
    var fP = [], bP = [];
    function proj(p) {
      var x = p[0] * ca + p[2] * sa;
      var z = -p[0] * sa + p[2] * ca;
      var y = p[1] * ct - z * st;
      return [cx + x * GR, cy - y * GR, p[1] * st + z * ct];
    }
    for (var r = 0; r < RINGS.length; r++) {
      var pts = RINGS[r], prev = null, q2;
      for (var j = 0; j <= SEG; j++) {
        q2 = proj(pts[j]);
        if (prev) {
          if (q2[2] > 0 && prev[2] > 0) { fP.push(prev[0], prev[1], q2[0], q2[1]); }
          else { bP.push(prev[0], prev[1], q2[0], q2[1]); }
        }
        prev = q2;
      }
    }
    function runs(list, style) {
      if (!list.length) return;
      gctx.strokeStyle = style; gctx.lineWidth = 1;
      gctx.beginPath();
      for (var i = 0; i < list.length; i += 4) { gctx.moveTo(list[i], list[i + 1]); gctx.lineTo(list[i + 2], list[i + 3]); }
      gctx.stroke();
    }
    runs(bP, 'rgba(148,163,255,.10)');
    runs(fP, 'rgba(41,243,131,.38)');
    var pin = proj([Math.cos(.7162) * Math.cos(.5062), Math.cos(.7162) * Math.sin(.5062), Math.sin(.7162)]);
    if (pin[2] > 0) {
      var ph = (fr % 96) / 96;
      gctx.strokeStyle = 'rgba(41,243,131,' + (0.55 * (1 - ph)).toFixed(3) + ')';
      gctx.lineWidth = 1.2;
      gctx.beginPath(); gctx.arc(pin[0], pin[1], 4 + ph * 22, 0, 6.2832); gctx.stroke();
      gctx.fillStyle = 'rgba(41,243,131,.95)';
      gctx.beginPath(); gctx.arc(pin[0], pin[1], 3, 0, 6.2832); gctx.fill();
    } else {
      gctx.fillStyle = 'rgba(41,243,131,.35)';
      gctx.beginPath(); gctx.arc(pin[0], pin[1], 2, 0, 6.2832); gctx.fill();
    }
    var or1 = GR * 1.28, or2 = GR * 0.4, rot = -0.5;
    gctx.strokeStyle = 'rgba(25,229,255,.16)'; gctx.lineWidth = 1;
    gctx.beginPath(); gctx.ellipse(cx, cy, or1, or2, rot, 0, 6.2832); gctx.stroke();
    var sA = fr * 0.02;
    gctx.strokeStyle = 'rgba(25,229,255,.35)';
    gctx.beginPath(); gctx.ellipse(cx, cy, or1, or2, rot, sA - 0.55, sA); gctx.stroke();
    var ex = Math.cos(sA) * or1, ey = Math.sin(sA) * or2;
    var sx = cx + ex * Math.cos(rot) - ey * Math.sin(rot);
    var sy = cy + ex * Math.sin(rot) + ey * Math.cos(rot);
    gctx.fillStyle = 'rgba(25,229,255,.9)';
    gctx.beginPath(); gctx.arc(sx, sy, 2.2, 0, 6.2832); gctx.fill();
    gRaf = requestAnimationFrame(gdraw);
  }
  function gStart() { if (!gRaf && gVis && !document.hidden) gRaf = requestAnimationFrame(gdraw); }
  function gStop() { if (gRaf) { cancelAnimationFrame(gRaf); gRaf = null; } }
  gsize();
  var gio = new IntersectionObserver(function (es) {
    es.forEach(function (e) { gVis = e.isIntersecting; if (gVis) gStart(); else gStop(); });
  }, { threshold: 0.02 });
  gio.observe(gcv);
  document.addEventListener('visibilitychange', function () { if (document.hidden) gStop(); else gStart(); });
  window.addEventListener('resize', function () { clearTimeout(gRsz); gRsz = setTimeout(gsize, 180); }, { passive: true });
}

/* ---------- SSS ---------- */
$$('.faq-item').forEach(function (item) {
  var q = item.querySelector('.faq-q');
  q.addEventListener('click', function () {
    var wasOpen = item.classList.contains('open');
    $$('.faq-item.open').forEach(function (o) {
      o.classList.remove('open');
      o.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
    });
    if (!wasOpen) { item.classList.add('open'); q.setAttribute('aria-expanded', 'true'); }
  });
});

/* ---------- toast ---------- */
var toastEl = $('#toast'), toastT = null;
function toast(msg) {
  if (!toastEl) return;
  toastEl.querySelector('span').textContent = msg;
  toastEl.classList.add('show');
  clearTimeout(toastT);
  toastT = setTimeout(function () { toastEl.classList.remove('show'); }, 2600);
}

/* ---------- canlı demo haritası ---------- */
var refreshDemo = null;
var dmap = $('#demoMap');
if (dmap) {
  var dpin = $('#demoPin'), dpulse = $('#demoPulse'),
      dcity = $('#demoCity'), dcoord = $('#demoCoords');
  var CITIES = {
    tokyo:   { la: 35.6595, lo: 139.7005, x: 72, y: 34 },
    paris:   { la: 48.8566, lo: 2.3522,   x: 38, y: 56 },
    newyork: { la: 40.6782, lo: -73.9442, x: 26, y: 30 },
    ist:     { la: 41.043,  lo: 29.005,   x: 58, y: 66 },
    dubai:   { la: 25.0802, lo: 55.1403,  x: 80, y: 72 }
  };
  var curKey = 'tokyo', cur = CITIES.tokyo;
  function cityN(k) { var c = TS('cities'); return (c && c[k]) || ''; }
  function fmt(la, lo) {
    var N = TS('nsew') || ['K', 'G', 'D', 'B'];
    return Math.abs(la).toFixed(4) + '\u00B0 ' + (la >= 0 ? N[0] : N[1]) + ', ' +
           Math.abs(lo).toFixed(4) + '\u00B0 ' + (lo >= 0 ? N[2] : N[3]);
  }
  function setPin(x, y, la, lo, name) {
    dpin.style.left = x + '%'; dpin.style.top = y + '%';
    dpulse.style.left = x + '%'; dpulse.style.top = y + '%';
    if (name) dcity.textContent = name;
    dcoord.textContent = fmt(la, lo);
    var base = (name || cityN(curKey) || '').split(',')[0];
    toast((TS('pin') || '\uD83D\uDCCD').replace('{c}', base));
  }
  dmap.addEventListener('click', function (e) {
    var r = dmap.getBoundingClientRect();
    var x = clamp((e.clientX - r.left) / r.width * 100, 4, 96);
    var y = clamp((e.clientY - r.top) / r.height * 100, 6, 94);
    var la = cur.la + (50 - y) / 50 * .008;
    var lo = cur.lo + (x - 50) / 50 * .016;
    setPin(x, y, la, lo);
  });
  $$('.city-chip').forEach(function (ch) {
    ch.addEventListener('click', function () {
      var k = ch.getAttribute('data-city'), c = CITIES[k];
      if (!c) return;
      curKey = k; cur = c;
      setPin(c.x, c.y, c.la, c.lo, cityN(k));
    });
  });
  refreshDemo = function () {
    dcity.textContent = cityN(curKey);
    dcoord.textContent = fmt(cur.la, cur.lo);
  };
}

/* ---------- indirme geri bildirimi ---------- */
$$('.dl-track').forEach(function (a) {
  a.addEventListener('click', function () {
    toast(TS('dlToast'));
  });
});

/* ---------- yıl ---------- */
function setYear() { var yr = $('#year'); if (yr) yr.textContent = new Date().getFullYear(); }
setYear();

/* ---------- dil değişimi ---------- */
window.addEventListener('fmiuc:lang', function () {
  bindWA();
  recount();
  setYear();
  if (refreshDemo) refreshDemo();
  toast('\uD83C\uDF10 ' + (TS('langName') || ''));
});

})();