/* Giải Pickleball Kết nối Doanh nghiệp – Cúp Luxury Land lần 2 */
(function () {
'use strict';
var FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdW160Y19pcRpQqka-yg_XGVtAaO6L7Wj2mBW59rK0Gb_RK5g/formResponse';
var DEADLINE = new Date('2026-10-12T23:59:59+07:00').getTime();
var ICONS = {"sigma": "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2\"/>", "circle-alert": "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 8v4m0 4h.01\"/></g>", "circle-check": "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m16 9l-5.5 5.5L8 12\"/></g>", "copy": "<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"14\" height=\"14\" x=\"8\" y=\"8\" rx=\"2\" ry=\"2\"/><path d=\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\"/></g>", "check": "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20 6L9 17l-5-5\"/>"};
function svgIcon(name) { return '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true" focusable="false" style="font-size:%S">' + ICONS[name] + '</svg>'; }
function $(id) { return document.getElementById(id); }

/* ---------- illustrations (ported from landing.dc.html) ---------- */
var UNITLESS = { opacity: 1, zIndex: 1 };
function el(tag, style, kids) {
  var e = document.createElement(tag);
  e.setAttribute('aria-hidden', 'true');
  for (var k in style) { var v = style[k]; if (v === undefined || v === null) continue; e.style[k] = (typeof v === 'number' && !UNITLESS[k]) ? v + 'px' : v; }
  (kids || []).forEach(function (c) { if (c) e.appendChild(c); });
  return e;
}
var HOLES = [[50,50,1],[50,24,1],[73,37,1],[73,63,1],[50,76,1],[27,63,1],[27,37,1],[50,7,.7],[90,50,.7],[10,50,.7],[29,13,.7],[71,13,.7],[29,87,.7],[71,87,.7],[89,27,.6],[89,73,.6],[11,27,.6],[11,73,.6]];
var BTHEME = { pink: ['#FF8DBA', '#D94F8C', '#fff', '#C2105F'], soft: ['#FFD3E4', '#EE9DBF', '#fff', '#E57BA8'], white: ['#fff', '#E98AB3', '#FFE3EF', '#fff'], teal: ['#9FD3D5', '#5AAFB2', '#fff', '#127E83'] };
function ballBG(size, th) {
  var t = BTHEME[th] || BTHEME.pink, base = t[0], dark = t[1], hole = t[2], r0 = size * .075;
  var g = HOLES.map(function (h) {
    var x = h[0], y = h[1], r = r0 * h[2];
    return 'radial-gradient(circle ' + (r * .9).toFixed(1) + 'px at ' + x + '% calc(' + y + '% - ' + (r * .38).toFixed(1) + 'px),' + dark + ' 98%,transparent),radial-gradient(circle ' + r.toFixed(1) + 'px at ' + x + '% ' + y + '%,' + hole + ' 98%,transparent)';
  });
  return 'radial-gradient(circle at 34% 28%,rgba(255,255,255,.35),transparent 55%),' + g.join(',') + ',' + base;
}
function ballStyle(size, th) {
  var t = BTHEME[th] || BTHEME.pink;
  return { width: size, height: size, borderRadius: '50%', background: ballBG(size, th), border: Math.max(1.5, size * .035) + 'px solid ' + t[3], boxSizing: 'border-box' };
}
var PTHEME = { pink: ['#FF9CC4', '#FFE6F0', '#127E83', '#0E6468'], soft: ['#FFD3E4', '#FFF3F8', '#6CC0C3', '#4FA6A9'], teal: ['#9FD3D5', '#E8F6F6', '#E0156F', '#B8105A'], white: ['#fff', 'rgba(255,255,255,.55)', '#fff', 'rgba(255,255,255,.8)'] };
function paddleParts(w, th) {
  var p = PTHEME[th] || PTHEME.pink, a = p[0], b = p[1], edge = p[2], grip = p[3], bw = Math.max(1.5, w * .05), st = w * .13;
  return [
    el('div', { width: w, height: w * 1.12, boxSizing: 'border-box', borderRadius: (w * .22) + 'px ' + (w * .22) + 'px ' + (w * .26) + 'px ' + (w * .26) + 'px', background: 'repeating-linear-gradient(90deg,' + a + ' 0 ' + st + 'px,' + b + ' ' + st + 'px ' + (st * 2) + 'px)', border: bw + 'px solid ' + edge, boxShadow: '0 14px 24px -16px rgba(120,10,60,.45)' }),
    el('div', { width: w * .34, height: w * .1, marginTop: -bw, background: edge, clipPath: 'polygon(0 0,100% 0,78% 100%,22% 100%)' }),
    el('div', { width: w * .22, height: w * .44, background: 'repeating-linear-gradient(170deg,' + edge + ' 0 ' + (w * .045) + 'px,' + grip + ' ' + (w * .045) + 'px ' + (w * .07) + 'px)', borderRadius: '0 0 ' + (w * .03) + 'px ' + (w * .03) + 'px' }),
    el('div', { width: w * .3, height: w * .07, background: grip, borderRadius: w * .04 })
  ];
}
function buildRally() {
  var D = '2s';
  function pad(side, color) {
    var pos = { position: 'absolute', bottom: 3 }; pos[side] = 0;
    return el('div', pos, [el('div', { display: 'flex', flexDirection: 'column', alignItems: 'center', transformOrigin: '50% 100%', animation: (side === 'left' ? 'pbL ' : 'pbR ') + D + ' linear infinite' }, paddleParts(30, color))]);
  }
  var root = el('div', { position: 'relative', height: 78 }, [
    el('div', { position: 'absolute', left: 0, right: 0, bottom: 2, height: 2, borderRadius: 2, background: '#F7E1EA' }),
    el('div', { position: 'absolute', left: '50%', bottom: 2, width: 2, height: 26, marginLeft: -1, background: 'repeating-linear-gradient(0deg,#E8C9D6 0 3px,transparent 3px 6px)' }),
    el('div', { position: 'absolute', bottom: 0, width: 20, height: 5, animation: 'pbX ' + D + ' linear infinite' }, [el('div', { width: 20, height: 5, borderRadius: '50%', background: '#E0156F', animation: 'pbShadow ' + D + ' linear infinite' })]),
    el('div', { position: 'absolute', bottom: 36, width: 20, height: 20, animation: 'pbX ' + D + ' linear infinite' }, [el('div', { animation: 'pbY2 ' + D + ' infinite' }, [el('div', Object.assign(ballStyle(22, 'pink'), { animation: 'pbSpin .8s linear infinite' }))])]),
    pad('left', 'pink'), pad('right', 'teal')
  ]);
  return root;
}
function buildDecor(narrow) {
  var k = narrow ? .65 : 1;
  function b(size, pos, fill, anim, op) {
    return el('div', Object.assign({ position: 'absolute', zIndex: -1, pointerEvents: 'none' }, ballStyle(size * k, fill), { opacity: op == null ? 1 : op, animation: anim }, pos));
  }
  function pd(size, pos, face, rot, dur, op) {
    var s = size * k;
    return el('div', Object.assign({ position: 'absolute', zIndex: -1, pointerEvents: 'none', opacity: op == null ? 1 : op, transform: 'rotate(' + rot + 'deg)' }, pos),
      [el('div', { display: 'flex', flexDirection: 'column', alignItems: 'center', transformOrigin: '50% 90%', animation: 'pbSwing ' + dur + ' ease-in-out infinite' }, paddleParts(s, face))]);
  }
  function F(d, dl) { return 'pbFloat ' + d + ' ease-in-out infinite ' + (dl || '0s'); }
  function G(d, dl) { return 'pbFloat2 ' + d + ' ease-in-out infinite ' + (dl || '0s'); }
  var PINK = 'pink', SOFT = 'soft', WHITE = 'white', TEAL = 'teal', PF = 'pink', TF = 'teal', SF = 'soft', WF = 'white';
  return {
    info: [pd(150,{right:'-36px',top:'150px'},SF,28,'6s'), b(90,{right:'-30px',top:'40px'},SOFT,F('7s')), b(46,{left:'2%',bottom:'60px'},PINK,G('6s','.5s'),.8)],
    prize: [pd(170,{left:'-20px',bottom:'-90px'},WF,-24,'7s',.22), pd(120,{right:'3%',top:'-30px'},WF,32,'6s',.18), b(180,{left:'-60px',top:'-50px'},WHITE,F('9s'),.35), b(120,{right:'-30px',bottom:'-30px'},WHITE,G('8s','1s'),.35), b(40,{right:'22%',top:'36px'},WHITE,F('5s','.3s'),.6)],
    format: [pd(120,{right:'-30px',top:'10px'},TF,24,'6.5s',.35), b(70,{left:'-20px',top:'30px'},TEAL,G('7s'),.7), b(36,{right:'4%',bottom:'24px'},PINK,F('5.5s','.8s'),.8)],
    reg: [pd(160,{left:'-50px',top:'40px'},PF,-22,'7s',.25), pd(110,{right:'-20px',bottom:'30px'},TF,26,'6s',.3), b(140,{right:'-50px',top:'-40px'},SOFT,F('8s')), b(64,{left:'-18px',bottom:'80px'},PINK,G('6.5s','.4s'),.7)],
    rules: [pd(110,{left:'-34px',top:'110px'},SF,-26,'6.5s'), b(54,{right:'1%',top:'60px'},SOFT,F('6s','.2s')), b(30,{left:'1%',bottom:'40px'},TEAL,G('5s'),.8)],
    gallery: [pd(120,{right:'-30px',bottom:'10px'},SF,24,'6s'), b(80,{left:'-24px',top:'20px'},SOFT,G('7.5s')), b(34,{right:'3%',top:'40px'},PINK,F('5s','1s'),.8)],
    sponsor: [pd(130,{left:'-30px',bottom:'-40px'},SF,-20,'7s'), b(100,{right:'-36px',bottom:'-30px'},SOFT,F('8s')), b(40,{left:'6%',top:'40px'},TEAL,G('6s','.6s'),.7)]
  };
}
var mqNarrow = window.matchMedia('(max-width:759px)');
function mountDecor() {
  document.querySelectorAll('.decor-el').forEach(function (n) { n.remove(); });
  var d = buildDecor(mqNarrow.matches);
  Object.keys(d).forEach(function (key) {
    var sec = document.querySelector('[data-decor="' + key + '"]'); if (!sec) return;
    d[key].slice().reverse().forEach(function (n) { n.classList.add('decor-el'); sec.insertBefore(n, sec.firstChild); });
  });
}
$('rally').appendChild(buildRally());
mountDecor();
(mqNarrow.addEventListener ? mqNarrow.addEventListener('change', mountDecor) : mqNarrow.addListener(mountDecor));

/* ---------- countdown ---------- */
function pad2(n) { return String(n).padStart(2, '0'); }
function tick() {
  var ms = Math.max(0, DEADLINE - Date.now());
  $('cd-d').textContent = pad2(Math.floor(ms / 864e5));
  $('cd-h').textContent = pad2(Math.floor(ms / 36e5) % 24);
  $('cd-m').textContent = pad2(Math.floor(ms / 6e4) % 60);
  $('cd-s').textContent = pad2(Math.floor(ms / 1e3) % 60);
}
tick(); setInterval(tick, 1000);

/* ---------- form ---------- */
var F = { nam: $('f-nam'), nu: $('f-nu'), phone: $('f-phone'), lvNam: $('f-lvNam'), lvNu: $('f-lvNu'), company: $('f-company') };
var tried = false;
function num(v) { return parseFloat(String(v).replace(',', '.')); }
function vals() { var o = {}; for (var k in F) o[k] = F[k].value; return o; }
function validate(f) {
  var e = {};
  if (!f.nam.trim()) e.nam = 'Vui lòng nhập họ tên VĐV nam';
  if (!f.nu.trim()) e.nu = 'Vui lòng nhập họ tên VĐV nữ';
  if (!/^0\d{9}$/.test(f.phone.replace(/\D/g, ''))) e.phone = 'Số điện thoại gồm 10 số, bắt đầu bằng 0';
  var a = num(f.lvNam), b = num(f.lvNu);
  if (isNaN(a) || isNaN(b)) e.lv = 'Nhập trình độ của cả hai VĐV';
  else if (a + b > 4.5) e.lv = 'Tổng trình độ cặp vượt quá 4.5';
  return e;
}
function showErrors(e) {
  ['nam', 'nu', 'phone', 'lv'].forEach(function (k) {
    $('err-' + k).textContent = e[k] || '';
    var bc = e[k] ? '#E0156F' : '#E8C9D6';
    if (k === 'lv') { F.lvNam.style.borderColor = bc; F.lvNu.style.borderColor = bc; F.lvNam.setAttribute('aria-invalid', !!e[k]); F.lvNu.setAttribute('aria-invalid', !!e[k]); }
    else { F[k].style.borderColor = bc; F[k].setAttribute('aria-invalid', !!e[k]); }
  });
}
function sumInfo(f) {
  var a = num(f.lvNam), b = num(f.lvNu), has = !isNaN(a) && !isNaN(b), sum = has ? a + b : 0;
  return { has: has, sum: sum, over: has && sum > 4.5, text: has ? (Math.round(sum * 100) / 100).toFixed(1) : '–' };
}
function updateSum() {
  var s = sumInfo(vals()), pill = $('sum-pill');
  $('sum-text').textContent = s.text;
  pill.style.background = !s.has ? '#fff' : s.over ? '#FFD1E3' : '#D9F0EF';
  pill.style.color = !s.has ? '#8A3A60' : s.over ? '#B8105A' : '#0E6468';
  $('sum-icon').innerHTML = svgIcon(!s.has ? 'sigma' : s.over ? 'circle-alert' : 'circle-check').replace('%S', '18px');
}
updateSum();
Object.keys(F).forEach(function (k) {
  F[k].addEventListener('input', function () {
    updateSum();
    if (tried) showErrors(validate(vals()));
  });
});
var sending = false;
$('reg-form').addEventListener('submit', function (ev) {
  ev.preventDefault();
  if (sending) return;
  var f = vals(), e = validate(f);
  if (Object.keys(e).length) {
    tried = true; showErrors(e);
    var first = ['nam', 'nu', 'phone', 'lv'].filter(function (k) { return e[k]; })[0];
    (first === 'lv' ? F.lvNam : F[first]).focus();
    return;
  }
  showErrors({});
  var s = sumInfo(f), norm = function (v) { return v.trim().replace(',', '.'); };
  var body = new URLSearchParams();
  body.set('entry.372080301', f.nam.trim());
  body.set('entry.152750954', f.nu.trim());
  body.set('entry.1314920750', f.phone.replace(/\D/g, ''));
  body.set('entry.777067901', norm(f.lvNam) + ' / ' + norm(f.lvNu) + ' (tổng ' + s.text + ')');
  body.set('entry.1780588767', f.company.trim());
  var btn = $('btn-submit'), lab = $('submit-label');
  sending = true; btn.disabled = true; btn.style.opacity = '.7'; btn.style.cursor = 'wait'; lab.textContent = 'Đang gửi…';
  $('submit-error').hidden = true;
  fetch(FORM_URL, { method: 'POST', mode: 'no-cors', body: body }).then(function () {
    $('success-text').textContent = 'Cặp ' + f.nam.trim() + ' & ' + f.nu.trim() + ' · Tổng trình độ ' + s.text + '. BTC sẽ liên hệ qua Zalo để hướng dẫn đóng lệ phí.';
    $('reg-form').hidden = true; $('form-success').hidden = false; $('form-success').focus();
  }).catch(function () {
    $('submit-error').hidden = false;
  }).then(function () {
    sending = false; btn.disabled = false; btn.style.opacity = ''; btn.style.cursor = 'pointer'; lab.textContent = 'Gửi đăng ký';
  });
});
$('btn-reset').addEventListener('click', function () {
  Object.keys(F).forEach(function (k) { F[k].value = ''; });
  tried = false; showErrors({}); updateSum();
  $('submit-error').hidden = true;
  $('form-success').hidden = true; $('reg-form').hidden = false; F.nam.focus();
});

/* ---------- copy STK ---------- */
var copyT;
function setCopied(on) {
  $('copy-label').textContent = on ? 'Đã sao chép' : 'Sao chép STK';
  $('copy-icon').innerHTML = svgIcon(on ? 'check' : 'copy').replace('%S', '15px');
}
setCopied(false);
function fallbackCopy(txt) {
  var ta = document.createElement('textarea'); ta.value = txt; ta.setAttribute('readonly', ''); ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0';
  document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); } catch (e) {} document.body.removeChild(ta);
}
$('btn-copy').addEventListener('click', function () {
  var txt = '836112337';
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).catch(function () { fallbackCopy(txt); });
  else fallbackCopy(txt);
  setCopied(true); clearTimeout(copyT); copyT = setTimeout(function () { setCopied(false); }, 2000);
});

/* ---------- accordion ---------- */
var btns = document.querySelectorAll('.acc-btn');
btns.forEach(function (b, i) {
  b.addEventListener('click', function () {
    var open = b.getAttribute('aria-expanded') === 'true';
    btns.forEach(function (o, j) {
      var on = (j === i) && !open;
      o.setAttribute('aria-expanded', on ? 'true' : 'false');
      o.querySelector('.acc-sign').textContent = on ? '–' : '+';
      document.getElementById(o.getAttribute('aria-controls')).hidden = !on;
    });
  });
});
})();
