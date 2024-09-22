import {
  S as ee,
  i as te,
  s as se,
  c as z,
  e as B,
  b as H,
  d as S,
  f as U,
  h as N,
  j as I,
  k as p,
  a as le,
  I as ae,
  n as q,
  o as y,
  p as M,
  q as j,
  u as F,
  r as K,
  v as O,
  x as P,
  B as ne,
  y as A,
  C as ie,
  z as re,
  D as oe,
  t as ce,
  H as ue,
  g as he,
  E as fe,
  w as _e,
  F as de,
} from "./translation.CjhihOiK.js";
import "./config.DKliKzfC.js";
function Q(e) {
  return void 0 !== e?.length ? e : Array.from(e);
}
function R(e, t, a) {
  const l = e.slice();
  return (l[11] = t[a]), l;
}
const pe = (e) => ({}),
  W = (e) => ({}),
  ge = (e) => ({}),
  X = (e) => ({}),
  me = (e) => ({}),
  Y = (e) => ({}),
  be = (e) => ({}),
  Z = (e) => ({});
function $(e) {
  let t,
    a,
    l,
    s,
    r,
    n,
    i,
    c,
    o,
    h = e[11].meta.title + "",
    d = e[11].excerpt + "";
  const f = e[6]["arrow-icon"],
    u = z(f, e, e[5], W);
  return {
    c() {
      (t = B("a")),
        (a = B("div")),
        (l = ce(h)),
        u && u.c(),
        (s = H()),
        (r = B("div")),
        (n = new ue(!1)),
        (i = H()),
        this.h();
    },
    l(e) {
      t = S(e, "A", { href: !0, class: !0 });
      var c = U(t);
      a = S(c, "DIV", { class: !0 });
      var o = U(a);
      (l = he(o, h)),
        u && u.l(o),
        o.forEach(I),
        (s = N(c)),
        (r = S(c, "DIV", { class: !0 }));
      var d = U(r);
      (n = fe(d, !1)), d.forEach(I), (i = N(c)), c.forEach(I), this.h();
    },
    h() {
      p(
        a,
        "class",
        "transition text-90 inline-flex font-bold group-hover:text-[var(--primary)]",
      ),
        (n.a = null),
        p(r, "class", "transition text-sm text-50"),
        p(t, "href", (c = e[11].url)),
        p(
          t,
          "class",
          "transition first-of-type:mt-2 lg:first-of-type:mt-0 group block rounded-xl text-lg px-3 py-2 hover:bg-[var(--btn-plain-bg-hover)] active:bg-[var(--btn-plain-bg-active)]",
        );
    },
    m(e, c) {
      q(e, t, c),
        y(t, a),
        y(a, l),
        u && u.m(a, null),
        y(t, s),
        y(t, r),
        n.m(d, r),
        y(t, i),
        (o = !0);
    },
    p(e, a) {
      (!o || 8 & a) && h !== (h = e[11].meta.title + "") && _e(l, h),
        u &&
          u.p &&
          (!o || 32 & a) &&
          F(u, f, e, e[5], o ? O(f, e[5], a, pe) : K(e[5]), W),
        (!o || 8 & a) && d !== (d = e[11].excerpt + "") && n.p(d),
        (!o || (8 & a && c !== (c = e[11].url))) && p(t, "href", c);
    },
    i(e) {
      o || (P(u, e), (o = !0));
    },
    o(e) {
      A(u, e), (o = !1);
    },
    d(e) {
      e && I(t), u && u.d(e);
    },
  };
}
function ve(e) {
  let t, a, l, s, r, n, i, c, o, h, d, f, u, g;
  const b = e[6]["search-icon"],
    v = z(b, e, e[5], Z),
    m = e[6]["search-switch"],
    w = z(m, e, e[5], Y),
    x = e[6]["search-icon"],
    k = z(x, e, e[5], X);
  let E = Q(e[3]),
    D = [];
  for (let t = 0; t < E.length; t += 1) D[t] = $(R(e, E, t));
  const V = (e) =>
    A(D[e], 1, 1, () => {
      D[e] = null;
    });
  return {
    c() {
      (t = B("div")),
        v && v.c(),
        (a = H()),
        (l = B("input")),
        (s = H()),
        (r = B("button")),
        w && w.c(),
        (n = H()),
        (i = B("div")),
        (c = B("div")),
        k && k.c(),
        (o = H()),
        (h = B("input")),
        (d = H());
      for (let e = 0; e < D.length; e += 1) D[e].c();
      this.h();
    },
    l(e) {
      t = S(e, "DIV", { id: !0, class: !0 });
      var p = U(t);
      v && v.l(p),
        (a = N(p)),
        (l = S(p, "INPUT", { placeholder: !0, class: !0 })),
        p.forEach(I),
        (s = N(e)),
        (r = S(e, "BUTTON", { "aria-label": !0, id: !0, class: !0 }));
      var f = U(r);
      w && w.l(f),
        f.forEach(I),
        (n = N(e)),
        (i = S(e, "DIV", { id: !0, class: !0 }));
      var u = U(i);
      c = S(u, "DIV", { id: !0, class: !0 });
      var g = U(c);
      k && k.l(g),
        (o = N(g)),
        (h = S(g, "INPUT", { placeholder: !0, class: !0 })),
        g.forEach(I),
        (d = N(u));
      for (let e = 0; e < D.length; e += 1) D[e].l(u);
      u.forEach(I), this.h();
    },
    h() {
      p(l, "placeholder", le(ae.search)),
        p(
          l,
          "class",
          "transition-all pl-10 text-sm bg-transparent outline-0 h-full w-40 active:w-60 focus:w-60 text-black/50 dark:text-white/50",
        ),
        p(t, "id", "search-bar"),
        p(
          t,
          "class",
          "hidden lg:flex transition-all items-center h-11 mr-2 rounded-lg bg-black/[0.04] hover:bg-black/[0.06] focus-within:bg-black/[0.06] dark:bg-white/5 dark:hover:bg-white/10 dark:focus-within:bg-white/10 ",
        ),
        p(r, "aria-label", "Search Panel"),
        p(r, "id", "search-switch"),
        p(
          r,
          "class",
          "btn-plain lg:hidden rounded-lg w-11 h-11 active:scale-90",
        ),
        p(h, "placeholder", "Search"),
        p(
          h,
          "class",
          "pl-10 absolute inset-0 text-sm bg-transparent outline-0 focus:w-60 text-black/50 dark:text-white/50",
        ),
        p(c, "id", "search-bar-inside"),
        p(
          c,
          "class",
          "flex relative lg:hidden transition-all items-center h-11 rounded-xl bg-black/[0.04] hover:bg-black/[0.06] focus-within:bg-black/[0.06] dark:bg-white/5 dark:hover:bg-white/10 dark:focus-within:bg-white/10 ",
        ),
        p(i, "id", "search-panel"),
        p(
          i,
          "class",
          "float-panel float-panel-closed search-panel absolute md:w-[30rem] top-20 left-4 md:left-[unset] right-4 shadow-2xl rounded-2xl p-2",
        );
    },
    m(p, b) {
      q(p, t, b),
        v && v.m(t, null),
        y(t, a),
        y(t, l),
        M(l, e[0]),
        q(p, s, b),
        q(p, r, b),
        w && w.m(r, null),
        q(p, n, b),
        q(p, i, b),
        y(i, c),
        k && k.m(c, null),
        y(c, o),
        y(c, h),
        M(h, e[1]),
        y(i, d);
      for (let e = 0; e < D.length; e += 1) D[e] && D[e].m(i, null);
      (f = !0),
        u ||
          ((g = [
            j(l, "input", e[7]),
            j(l, "focus", e[8]),
            j(r, "click", e[4]),
            j(h, "input", e[9]),
          ]),
          (u = !0));
    },
    p(e, [t]) {
      if (
        (v &&
          v.p &&
          (!f || 32 & t) &&
          F(v, b, e, e[5], f ? O(b, e[5], t, be) : K(e[5]), Z),
        1 & t && l.value !== e[0] && M(l, e[0]),
        w &&
          w.p &&
          (!f || 32 & t) &&
          F(w, m, e, e[5], f ? O(m, e[5], t, me) : K(e[5]), Y),
        k &&
          k.p &&
          (!f || 32 & t) &&
          F(k, x, e, e[5], f ? O(x, e[5], t, ge) : K(e[5]), X),
        2 & t && h.value !== e[1] && M(h, e[1]),
        40 & t)
      ) {
        let a;
        for (E = Q(e[3]), a = 0; a < E.length; a += 1) {
          const l = R(e, E, a);
          D[a]
            ? (D[a].p(l, t), P(D[a], 1))
            : ((D[a] = $(l)), D[a].c(), P(D[a], 1), D[a].m(i, null));
        }
        for (de(), a = E.length; a < D.length; a += 1) V(a);
        ne();
      }
    },
    i(e) {
      if (!f) {
        P(v, e), P(w, e), P(k, e);
        for (let e = 0; e < E.length; e += 1) P(D[e]);
        f = !0;
      }
    },
    o(e) {
      A(v, e), A(w, e), A(k, e), (D = D.filter(Boolean));
      for (let e = 0; e < D.length; e += 1) A(D[e]);
      f = !1;
    },
    d(e) {
      e && (I(t), I(s), I(r), I(n), I(i)),
        v && v.d(e),
        w && w.d(e),
        k && k.d(e),
        ie(D, e),
        (u = !1),
        re(g);
    },
  };
}
function we(e, t, a) {
  let { $$slots: l = {}, $$scope: s } = t,
    r = "",
    n = "",
    i = [],
    c = (e, t) => {};
  oe(() => {
    a(
      2,
      (c = async (e, t) => {
        const l = document.getElementById("search-panel");
        if (!l) return;
        if (!e && t) return void l.classList.add("float-panel-closed");
        let s = [];
        {
          const t = await pagefind.search(e);
          for (const e of t.results) s.push(await e.data());
        }
        s.length || !t
          ? (t && l.classList.remove("float-panel-closed"), a(3, (i = s)))
          : l.classList.add("float-panel-closed");
      }),
    );
  });
  return (
    (e.$$set = (e) => {
      "$$scope" in e && a(5, (s = e.$$scope));
    }),
    (e.$$.update = () => {
      5 & e.$$.dirty && c(r, !0), 6 & e.$$.dirty && c(n, !1);
    }),
    [
      r,
      n,
      c,
      i,
      () => {
        document
          .getElementById("search-panel")
          ?.classList.toggle("float-panel-closed");
      },
      s,
      l,
      function () {
        (r = this.value), a(0, r);
      },
      () => c(r, !0),
      function () {
        (n = this.value), a(1, n);
      },
    ]
  );
}
class Ee extends ee {
  constructor(e) {
    super(), te(this, e, we, ve, se, {});
  }
}
export { Ee as default };
