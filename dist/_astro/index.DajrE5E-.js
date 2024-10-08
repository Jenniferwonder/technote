function T() {}
function G(t, n) {
  for (const e in n) t[e] = n[e];
  return t;
}
function C(t) {
  return t();
}
function M() {
  return Object.create(null);
}
function y(t) {
  t.forEach(C);
}
function B(t) {
  return "function" == typeof t;
}
function dt(t, n) {
  return t != t
    ? n == n
    : t !== n || (t && "object" == typeof t) || "function" == typeof t;
}
function R(t) {
  return 0 === Object.keys(t).length;
}
function _t(t, n, e, o) {
  if (t) {
    const i = P(t, n, e, o);
    return t[0](i);
  }
}
function P(t, n, e, o) {
  return t[1] && o ? G(e.ctx.slice(), t[1](o(n))) : e.ctx;
}
function ht(t, n, e, o) {
  if (t[2] && o) {
    const i = t[2](o(e));
    if (void 0 === n.dirty) return i;
    if ("object" == typeof i) {
      const t = [],
        e = Math.max(n.dirty.length, i.length);
      for (let o = 0; o < e; o += 1) t[o] = n.dirty[o] | i[o];
      return t;
    }
    return n.dirty | i;
  }
  return n.dirty;
}
function mt(t, n, e, o, i, r) {
  if (i) {
    const c = P(n, e, o, r);
    t.p(c, i);
  }
}
function pt(t) {
  if (t.ctx.length > 32) {
    const n = [],
      e = t.ctx.length / 32;
    for (let t = 0; t < e; t++) n[t] = -1;
    return n;
  }
  return -1;
}
let g,
  $ = !1;
function F() {
  $ = !0;
}
function U() {
  $ = !1;
}
function V(t, n, e, o) {
  for (; t < n; ) {
    const i = t + ((n - t) >> 1);
    e(i) <= o ? (t = i + 1) : (n = i);
  }
  return t;
}
function W(t) {
  if (t.hydrate_init) return;
  t.hydrate_init = !0;
  let n = t.childNodes;
  if ("HEAD" === t.nodeName) {
    const t = [];
    for (let e = 0; e < n.length; e++) {
      const o = n[e];
      void 0 !== o.claim_order && t.push(o);
    }
    n = t;
  }
  const e = new Int32Array(n.length + 1),
    o = new Int32Array(n.length);
  e[0] = -1;
  let i = 0;
  for (let t = 0; t < n.length; t++) {
    const r = n[t].claim_order,
      c =
        (i > 0 && n[e[i]].claim_order <= r
          ? i + 1
          : V(1, i, (t) => n[e[t]].claim_order, r)) - 1;
    o[t] = e[c] + 1;
    const s = c + 1;
    (e[s] = t), (i = Math.max(s, i));
  }
  const r = [],
    c = [];
  let s = n.length - 1;
  for (let t = e[i] + 1; 0 != t; t = o[t - 1]) {
    for (r.push(n[t - 1]); s >= t; s--) c.push(n[s]);
    s--;
  }
  for (; s >= 0; s--) c.push(n[s]);
  r.reverse(), c.sort((t, n) => t.claim_order - n.claim_order);
  for (let n = 0, e = 0; n < c.length; n++) {
    for (; e < r.length && c[n].claim_order >= r[e].claim_order; ) e++;
    const o = e < r.length ? r[e] : null;
    t.insertBefore(c[n], o);
  }
}
function J(t, n) {
  if ($) {
    for (
      W(t),
        (void 0 === t.actual_end_child ||
          (null !== t.actual_end_child &&
            t.actual_end_child.parentNode !== t)) &&
          (t.actual_end_child = t.firstChild);
      null !== t.actual_end_child && void 0 === t.actual_end_child.claim_order;

    )
      t.actual_end_child = t.actual_end_child.nextSibling;
    n !== t.actual_end_child
      ? (void 0 !== n.claim_order || n.parentNode !== t) &&
        t.insertBefore(n, t.actual_end_child)
      : (t.actual_end_child = n.nextSibling);
  } else (n.parentNode !== t || null !== n.nextSibling) && t.appendChild(n);
}
function K(t, n, e) {
  t.insertBefore(n, e || null);
}
function Q(t, n, e) {
  $ && !e
    ? J(t, n)
    : (n.parentNode !== t || n.nextSibling != e) &&
      t.insertBefore(n, e || null);
}
function b(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function gt(t, n) {
  for (let e = 0; e < t.length; e += 1) t[e] && t[e].d(n);
}
function O(t) {
  return document.createElement(t);
}
function X(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function I(t) {
  return document.createTextNode(t);
}
function yt() {
  return I(" ");
}
function xt(t, n, e, o) {
  return t.addEventListener(n, e, o), () => t.removeEventListener(n, e, o);
}
function wt(t, n, e) {
  null == e
    ? t.removeAttribute(n)
    : t.getAttribute(n) !== e && t.setAttribute(n, e);
}
function bt(t) {
  return "" === t ? null : +t;
}
function Y(t) {
  return Array.from(t.childNodes);
}
function D(t) {
  void 0 === t.claim_info &&
    (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function q(t, n, e, o, i = !1) {
  D(t);
  const r = (() => {
    for (let o = t.claim_info.last_index; o < t.length; o++) {
      const r = t[o];
      if (n(r)) {
        const n = e(r);
        return (
          void 0 === n ? t.splice(o, 1) : (t[o] = n),
          i || (t.claim_info.last_index = o),
          r
        );
      }
    }
    for (let o = t.claim_info.last_index - 1; o >= 0; o--) {
      const r = t[o];
      if (n(r)) {
        const n = e(r);
        return (
          void 0 === n ? t.splice(o, 1) : (t[o] = n),
          i
            ? void 0 === n && t.claim_info.last_index--
            : (t.claim_info.last_index = o),
          r
        );
      }
    }
    return o();
  })();
  return (
    (r.claim_order = t.claim_info.total_claimed),
    (t.claim_info.total_claimed += 1),
    r
  );
}
function Z(t, n, e, o) {
  return q(
    t,
    (t) => t.nodeName === n,
    (t) => {
      const n = [];
      for (let o = 0; o < t.attributes.length; o++) {
        const i = t.attributes[o];
        e[i.name] || n.push(i.name);
      }
      n.forEach((n) => t.removeAttribute(n));
    },
    () => o(n),
  );
}
function $t(t, n, e) {
  return Z(t, n, e, O);
}
function tt(t, n) {
  return q(
    t,
    (t) => 3 === t.nodeType,
    (t) => {
      const e = "" + n;
      if (t.data.startsWith(e)) {
        if (t.data.length !== e.length) return t.splitText(e.length);
      } else t.data = e;
    },
    () => I(n),
    !0,
  );
}
function Et(t) {
  return tt(t, " ");
}
function j(t, n, e) {
  for (let o = e; o < t.length; o += 1) {
    const e = t[o];
    if (8 === e.nodeType && e.textContent.trim() === n) return o;
  }
  return -1;
}
function Nt(t, n) {
  const e = j(t, "HTML_TAG_START", 0),
    o = j(t, "HTML_TAG_END", e + 1);
  if (-1 === e || -1 === o) return new E(n);
  D(t);
  const i = t.splice(e, o - e + 1);
  b(i[0]), b(i[i.length - 1]);
  const r = i.slice(1, i.length - 1);
  if (0 === r.length) return new E(n);
  for (const n of r)
    (n.claim_order = t.claim_info.total_claimed),
      (t.claim_info.total_claimed += 1);
  return new E(n, r);
}
function Tt(t, n) {
  (n = "" + n), t.data !== n && (t.data = n);
}
function vt(t, n) {
  t.value = n ?? "";
}
function At(t, n, e, o) {
  t.style.setProperty(n, e, "");
}
function St(t, n, e) {
  t.classList.toggle(n, !!e);
}
class et {
  is_svg = !1;
  e = void 0;
  n = void 0;
  t = void 0;
  a = void 0;
  constructor(t = !1) {
    (this.is_svg = t), (this.e = this.n = null);
  }
  c(t) {
    this.h(t);
  }
  m(t, n, e = null) {
    this.e ||
      (this.is_svg
        ? (this.e = X(n.nodeName))
        : (this.e = O(11 === n.nodeType ? "TEMPLATE" : n.nodeName)),
      (this.t = "TEMPLATE" !== n.tagName ? n : n.content),
      this.c(t)),
      this.i(e);
  }
  h(t) {
    (this.e.innerHTML = t),
      (this.n = Array.from(
        "TEMPLATE" === this.e.nodeName
          ? this.e.content.childNodes
          : this.e.childNodes,
      ));
  }
  i(t) {
    for (let n = 0; n < this.n.length; n += 1) K(this.t, this.n[n], t);
  }
  p(t) {
    this.d(), this.h(t), this.i(this.a);
  }
  d() {
    this.n.forEach(b);
  }
}
class E extends et {
  l = void 0;
  constructor(t = !1, n) {
    super(t), (this.e = this.n = null), (this.l = n);
  }
  c(t) {
    this.l ? (this.n = this.l) : super.c(t);
  }
  i(t) {
    for (let n = 0; n < this.n.length; n += 1) Q(this.t, this.n[n], t);
  }
}
function p(t) {
  g = t;
}
function nt() {
  if (!g) throw new Error("Function called outside component initialization");
  return g;
}
function Lt(t) {
  nt().$$.on_mount.push(t);
}
const h = [],
  H = [];
let m = [];
const k = [],
  it = Promise.resolve();
let v = !1;
function rt() {
  v || ((v = !0), it.then(z));
}
function A(t) {
  m.push(t);
}
const N = new Set();
let _ = 0;
function z() {
  if (0 !== _) return;
  const t = g;
  do {
    try {
      for (; _ < h.length; ) {
        const t = h[_];
        _++, p(t), lt(t.$$);
      }
    } catch (t) {
      throw ((h.length = 0), (_ = 0), t);
    }
    for (p(null), h.length = 0, _ = 0; H.length; ) H.pop()();
    for (let t = 0; t < m.length; t += 1) {
      const n = m[t];
      N.has(n) || (N.add(n), n());
    }
    m.length = 0;
  } while (h.length);
  for (; k.length; ) k.pop()();
  (v = !1), N.clear(), p(t);
}
function lt(t) {
  if (null !== t.fragment) {
    t.update(), y(t.before_update);
    const n = t.dirty;
    (t.dirty = [-1]),
      t.fragment && t.fragment.p(t.ctx, n),
      t.after_update.forEach(A);
  }
}
function st(t) {
  const n = [],
    e = [];
  m.forEach((o) => (-1 === t.indexOf(o) ? n.push(o) : e.push(o))),
    e.forEach((t) => t()),
    (m = n);
}
const w = new Set();
let d;
function Mt() {
  d = { r: 0, c: [], p: d };
}
function jt() {
  d.r || y(d.c), (d = d.p);
}
function ct(t, n) {
  t && t.i && (w.delete(t), t.i(n));
}
function Ht(t, n, e, o) {
  if (t && t.o) {
    if (w.has(t)) return;
    w.add(t),
      d.c.push(() => {
        w.delete(t), o && (e && t.d(1), o());
      }),
      t.o(n);
  } else o && o();
}
function ot(t, n, e) {
  const { fragment: o, after_update: i } = t.$$;
  o && o.m(n, e),
    A(() => {
      const n = t.$$.on_mount.map(C).filter(B);
      t.$$.on_destroy ? t.$$.on_destroy.push(...n) : y(n), (t.$$.on_mount = []);
    }),
    i.forEach(A);
}
function ut(t, n) {
  const e = t.$$;
  null !== e.fragment &&
    (st(e.after_update),
    y(e.on_destroy),
    e.fragment && e.fragment.d(n),
    (e.on_destroy = e.fragment = null),
    (e.ctx = []));
}
function ft(t, n) {
  -1 === t.$$.dirty[0] && (h.push(t), rt(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(n / 31) | 0] |= 1 << n % 31);
}
function kt(t, n, e, o, i, r, c = null, s = [-1]) {
  const l = g;
  p(t);
  const a = (t.$$ = {
    fragment: null,
    ctx: [],
    props: r,
    update: T,
    not_equal: i,
    bound: M(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(n.context || (l ? l.$$.context : [])),
    callbacks: M(),
    dirty: s,
    skip_bound: !1,
    root: n.target || l.$$.root,
  });
  c && c(a.root);
  let u = !1;
  if (
    ((a.ctx = e
      ? e(t, n.props || {}, (n, e, ...o) => {
          const r = o.length ? o[0] : e;
          return (
            a.ctx &&
              i(a.ctx[n], (a.ctx[n] = r)) &&
              (!a.skip_bound && a.bound[n] && a.bound[n](r), u && ft(t, n)),
            e
          );
        })
      : []),
    a.update(),
    (u = !0),
    y(a.before_update),
    (a.fragment = !!o && o(a.ctx)),
    n.target)
  ) {
    if (n.hydrate) {
      F();
      const t = Y(n.target);
      a.fragment && a.fragment.l(t), t.forEach(b);
    } else a.fragment && a.fragment.c();
    n.intro && ct(t.$$.fragment), ot(t, n.target, n.anchor), U(), z();
  }
  p(l);
}
class Ct {
  $$ = void 0;
  $$set = void 0;
  $destroy() {
    ut(this, 1), (this.$destroy = T);
  }
  $on(t, n) {
    if (!B(n)) return T;
    const e = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return (
      e.push(n),
      () => {
        const t = e.indexOf(n);
        -1 !== t && e.splice(t, 1);
      }
    );
  }
  $set(t) {
    this.$$set &&
      !R(t) &&
      ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
  }
}
const at = "4";
typeof window < "u" &&
  (window.__svelte || (window.__svelte = { v: new Set() })).v.add(at);
export {
  Tt as A,
  Mt as B,
  St as C,
  At as D,
  bt as E,
  E as H,
  Ct as S,
  yt as a,
  $t as b,
  _t as c,
  Y as d,
  O as e,
  Et as f,
  b as g,
  wt as h,
  kt as i,
  Q as j,
  J as k,
  vt as l,
  xt as m,
  pt as n,
  ht as o,
  jt as p,
  Ht as q,
  gt as r,
  dt as s,
  ct as t,
  mt as u,
  y as v,
  Lt as w,
  I as x,
  tt as y,
  Nt as z,
};
