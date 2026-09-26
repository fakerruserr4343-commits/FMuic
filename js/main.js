/* FMiuc v1.7 — site etkileşimleri | sıfır bağımlılık */
(function () {
'use strict';

var $ = function (s, c) { return (c || document).querySelector(s); };
var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
function lerp(a, b, t) { return a + (b - a) * t; }
function clamp(v, a, b) { return Math.min(b, Math.max(a, v)); }
var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

/* ---------- WhatsApp: hazır mesajlı linkler ---------- */
var WA_NUM = '994708502510';
$$('a[data-wa]').forEach(function (a) {
  var msg = a.getAttribute('data-wa') || 'Merhaba! FMiuc hakkında bilgi almak istiyorum.';
  a.href = 'https://wa.me/' + WA_NUM + '?text=' + encodeURIComponent(msg);
});

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
var cio = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (!e.isIntersecting) return;
    cio.unobserve(e.target);
    var el = e.target;
    var end = parseFloat(el.getAttribute('data-count'));
    var dec = el.getAttribute('data-dec') === '1';
    var suffix = el.getAttribute('data-suffix') || '';
    function setVal(v) {
      el.textContent = dec
        ? (v / 10).toLocaleString('tr-TR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })
        : Math.round(v).toLocaleString('tr-TR');
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
  var W, H, pts = [], raf = null, mx = -9e3, my = -9e3, rsz = null;
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
var dmap = $('#demoMap');
if (dmap) {
  var dpin = $('#demoPin'), dpulse = $('#demoPulse'),
      dcity = $('#demoCity'), dcoord = $('#demoCoords');
  var CITIES = {
    tokyo:   { n: 'Shibuya, Tokyo',      la: 35.6595, lo: 139.7005, x: 72, y: 34 },
    paris:   { n: 'Le Marais, Paris',   la: 48.8566, lo: 2.3522,   x: 38, y: 56 },
    newyork: { n: 'Brooklyn, New York', la: 40.6782, lo: -73.9442,  x: 26, y: 30 },
    ist:     { n: 'Beşiktaş, İstanbul', la: 41.043,  lo: 29.005,    x: 58, y: 66 },
    dubai:   { n: 'Marina, Dubai',      la: 25.0802, lo: 55.1403,  x: 80, y: 72 }
  };
  var cur = CITIES.tokyo;
  function fmt(la, lo) {
    return Math.abs(la).toFixed(4) + '\u00B0 ' + (la >= 0 ? 'K' : 'G') + ', ' +
           Math.abs(lo).toFixed(4) + '\u00B0 ' + (lo >= 0 ? 'D' : 'B');
  }
  function setPin(x, y, la, lo, name) {
    dpin.style.left = x + '%'; dpin.style.top = y + '%';
    dpulse.style.left = x + '%'; dpulse.style.top = y + '%';
    if (name) dcity.textContent = name;
    dcoord.textContent = fmt(la, lo);
    toast('\uD83D\uDCCD Konum g\u00FCncellendi \u2014 ' + (name || cur.n).split(',')[0]);
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
      var c = CITIES[ch.getAttribute('data-city')];
      if (!c) return;
      cur = c;
      setPin(c.x, c.y, c.la, c.lo, c.n);
    });
  });
}

/* ---------- indirme geri bildirimi ---------- */
$$('.dl-track').forEach(function (a) {
  a.addEventListener('click', function () {
    toast('\u2B07 \u0130ndirme ba\u015Flad\u0131 \u2014 kurulumda "Bilinmeyen kaynaklar" iznine izin ver');
  });
});

/* ---------- yıl ---------- */
var yr = $('#year');
if (yr) yr.textContent = new Date().getFullYear();

})();