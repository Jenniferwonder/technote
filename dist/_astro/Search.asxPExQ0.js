import {
  S as ee,
  i as te,
  s as le,
  c as j,
  e as L,
  b as N,
  d as T,
  f as q,
  h as U,
  j as E,
  k as d,
  a as se,
  I as ae,
  n as H,
  o as B,
  p as M,
  q as C,
  u as F,
  r as O,
  v as R,
  x as V,
  B as ne,
  y as K,
  C as oe,
  z as re,
  D as ie,
  t as ce,
  H as ue,
  g as he,
  E as fe,
  w as de,
  F as _e,
} from "./translation.CjhihOiK.js";
import "./config.DKliKzfC.js";
function G(e) {
  return void 0 !== e?.length ? e : Array.from(e);
}
function J(e, t, a) {
  const l = e.slice();
  return (l[12] = t[a]), l;
}
const pe = (e) => ({}),
  Q = (e) => ({}),
  ge = (e) => ({}),
  W = (e) => ({}),
  me = (e) => ({}),
  X = (e) => ({}),
  be = (e) => ({}),
  Y = (e) => ({});
function $(e) {
  let t,
    a,
    l,
    s,
    r,
    n,
    c,
    o,
    i,
    h = e[12].meta.title + "",
    u = e[12].excerpt + "";
  const f = e[8]["arrow-icon"],
    p = j(f, e, e[7], Q);
  return {
    c() {
      (t = L("a")),
        (a = L("div")),
        (l = ce(h)),
        p && p.c(),
        (s = N()),
        (r = L("div")),
        (n = new ue(!1)),
        (c = N()),
        this.h();
    },
    l(e) {
      t = T(e, "A", { href: !0, tabindex: !0, class: !0 });
      var o = q(t);
      a = T(o, "DIV", { class: !0 });
      var i = q(a);
      (l = he(i, h)),
        p && p.l(i),
        i.forEach(E),
        (s = U(o)),
        (r = T(o, "DIV", { class: !0 }));
      var d = q(r);
      (n = fe(d, !1)), d.forEach(E), (c = U(o)), o.forEach(E), this.h();
    },
    h() {
      d(
        a,
        "class",
        "transition text-90 inline-flex font-bold group-hover:text-[var(--primary)]",
      ),
        (n.a = null),
        d(r, "class", "transition text-sm text-50"),
        d(t, "href", (o = e[12].url)),
        d(t, "tabindex", "0"),
        d(
          t,
          "class",
          "result transition first-of-type:mt-2 lg:first-of-type:mt-0 group block rounded-xl text-lg px-3 py-2 hover:bg-[var(--btn-plain-bg-hover)] active:bg-[var(--btn-plain-bg-active)]",
        );
    },
    m(e, o) {
      H(e, t, o),
        B(t, a),
        B(a, l),
        p && p.m(a, null),
        B(t, s),
        B(t, r),
        n.m(u, r),
        B(t, c),
        (i = !0);
    },
    p(e, a) {
      (!i || 8 & a) && h !== (h = e[12].meta.title + "") && de(l, h),
        p &&
          p.p &&
          (!i || 128 & a) &&
          F(p, f, e, e[7], i ? R(f, e[7], a, pe) : O(e[7]), Q),
        (!i || 8 & a) && u !== (u = e[12].excerpt + "") && n.p(u),
        (!i || (8 & a && o !== (o = e[12].url))) && d(t, "href", o);
    },
    i(e) {
      i || (V(p, e), (i = !0));
    },
    o(e) {
      K(p, e), (i = !1);
    },
    d(e) {
      e && E(t), p && p.d(e);
    },
  };
}
function ve(e) {
  let t, a, l, s, r, n, c, o, i, h, u, f, p, g;
  const m = e[8]["search-icon"],
    b = j(m, e, e[7], Y),
    v = e[8]["search-switch"],
    w = j(v, e, e[7], X),
    x = e[8]["search-icon"],
    k = j(x, e, e[7], W);
  let y = G(e[3]),
    I = [];
  for (let t = 0; t < y.length; t += 1) I[t] = $(J(e, y, t));
  const S = (e) =>
    K(I[e], 1, 1, () => {
      I[e] = null;
    });
  return {
    c() {
      (t = L("div")),
        b && b.c(),
        (a = N()),
        (l = L("input")),
        (s = N()),
        (r = L("button")),
        w && w.c(),
        (n = N()),
        (c = L("div")),
        (o = L("div")),
        k && k.c(),
        (i = N()),
        (h = L("input")),
        (u = N());
      for (let e = 0; e < I.length; e += 1) I[e].c();
      this.h();
    },
    l(e) {
      t = T(e, "DIV", { id: !0, class: !0 });
      var d = q(t);
      b && b.l(d),
        (a = U(d)),
        (l = T(d, "INPUT", { id: !0, placeholder: !0, class: !0 })),
        d.forEach(E),
        (s = U(e)),
        (r = T(e, "BUTTON", { "aria-label": !0, id: !0, class: !0 }));
      var f = q(r);
      w && w.l(f),
        f.forEach(E),
        (n = U(e)),
        (c = T(e, "DIV", { id: !0, class: !0 }));
      var p = q(c);
      o = T(p, "DIV", { id: !0, class: !0 });
      var g = q(o);
      k && k.l(g),
        (i = U(g)),
        (h = T(g, "INPUT", { placeholder: !0, class: !0 })),
        g.forEach(E),
        (u = U(p));
      for (let e = 0; e < I.length; e += 1) I[e].l(p);
      p.forEach(E), this.h();
    },
    h() {
      d(l, "id", "search-bar-input"),
        d(l, "placeholder", "CTRL Z  " + se(ae.search)),
        d(
          l,
          "class",
          "transition-all pl-10 text-sm bg-transparent outline-0 h-full w-40 active:w-60 focus:w-60 text-black/50 dark:text-white/50",
        ),
        d(t, "id", "search-bar"),
        d(
          t,
          "class",
          "hidden lg:flex transition-all items-center h-11 mr-2 rounded-lg bg-black/[0.04] hover:bg-black/[0.06] focus-within:bg-black/[0.06] dark:bg-white/5 dark:hover:bg-white/10 dark:focus-within:bg-white/10 ",
        ),
        d(r, "aria-label", "Search Panel"),
        d(r, "id", "search-switch"),
        d(
          r,
          "class",
          "btn-plain lg:hidden rounded-lg w-11 h-11 active:scale-90",
        ),
        d(h, "placeholder", "Search"),
        d(
          h,
          "class",
          "pl-10 absolute inset-0 text-sm bg-transparent outline-0 focus:w-60 text-black/50 dark:text-white/50",
        ),
        d(o, "id", "search-bar-inside"),
        d(
          o,
          "class",
          "flex relative lg:hidden transition-all items-center h-11 rounded-xl bg-black/[0.04] hover:bg-black/[0.06] focus-within:bg-black/[0.06] dark:bg-white/5 dark:hover:bg-white/10 dark:focus-within:bg-white/10 ",
        ),
        d(c, "id", "search-panel"),
        d(
          c,
          "class",
          "float-panel float-panel-closed search-panel absolute md:w-[30rem] top-20 left-4 md:left-[unset] right-4 shadow-2xl rounded-2xl p-2",
        );
    },
    m(d, m) {
      H(d, t, m),
        b && b.m(t, null),
        B(t, a),
        B(t, l),
        M(l, e[0]),
        H(d, s, m),
        H(d, r, m),
        w && w.m(r, null),
        H(d, n, m),
        H(d, c, m),
        B(c, o),
        k && k.m(o, null),
        B(o, i),
        B(o, h),
        M(h, e[1]),
        B(c, u);
      for (let e = 0; e < I.length; e += 1) I[e] && I[e].m(c, null);
      (f = !0),
        p ||
          ((g = [
            C(window, "keydown", e[6]),
            C(l, "input", e[9]),
            C(l, "focus", e[10]),
            C(r, "click", e[4]),
            C(h, "input", e[11]),
            C(c, "click", e[5]),
          ]),
          (p = !0));
    },
    p(e, [t]) {
      if (
        (b &&
          b.p &&
          (!f || 128 & t) &&
          F(b, m, e, e[7], f ? R(m, e[7], t, be) : O(e[7]), Y),
        1 & t && l.value !== e[0] && M(l, e[0]),
        w &&
          w.p &&
          (!f || 128 & t) &&
          F(w, v, e, e[7], f ? R(v, e[7], t, me) : O(e[7]), X),
        k &&
          k.p &&
          (!f || 128 & t) &&
          F(k, x, e, e[7], f ? R(x, e[7], t, ge) : O(e[7]), W),
        2 & t && h.value !== e[1] && M(h, e[1]),
        136 & t)
      ) {
        let a;
        for (y = G(e[3]), a = 0; a < y.length; a += 1) {
          const l = J(e, y, a);
          I[a]
            ? (I[a].p(l, t), V(I[a], 1))
            : ((I[a] = $(l)), I[a].c(), V(I[a], 1), I[a].m(c, null));
        }
        for (_e(), a = y.length; a < I.length; a += 1) S(a);
        ne();
      }
    },
    i(e) {
      if (!f) {
        V(b, e), V(w, e), V(k, e);
        for (let e = 0; e < y.length; e += 1) V(I[e]);
        f = !0;
      }
    },
    o(e) {
      K(b, e), K(w, e), K(k, e), (I = I.filter(Boolean));
      for (let e = 0; e < I.length; e += 1) K(I[e]);
      f = !1;
    },
    d(e) {
      e && (E(t), E(s), E(r), E(n), E(c)),
        b && b.d(e),
        w && w.d(e),
        k && k.d(e),
        oe(I, e),
        (p = !1),
        re(g);
    },
  };
}
function we(e, t, a) {
  let { $$slots: l = {}, $$scope: s } = t,
    r = "",
    n = "",
    c = [],
    o = (e, t) => {};
  ie(() => {
    a(
      2,
      (o = async (e, t) => {
        const l = document.getElementById("search-panel");
        if (!l) return;
        if (!e && t) return void l.classList.add("float-panel-closed");
        let s = [];
        const r = await pagefind.search(e);
        for (const e of r.results) s.push(await e.data());
        s.length || !t
          ? (t && l.classList.remove("float-panel-closed"),
            a(3, (c = s.slice(0, 8))),
            localStorage.removeItem("curIndex"))
          : l.classList.add("float-panel-closed");
      }),
    );
  });
  return (
    (e.$$set = (e) => {
      "$$scope" in e && a(7, (s = e.$$scope));
    }),
    (e.$$.update = () => {
      5 & e.$$.dirty && o(r, !0), 6 & e.$$.dirty && o(n, !1);
    }),
    [
      r,
      n,
      o,
      c,
      () => {
        document
          .getElementById("search-panel")
          ?.classList.toggle("float-panel-closed");
      },
      () => {
        document
          .getElementById("search-panel")
          ?.classList.add("float-panel-closed");
      },
      (e) => {
        const t = document.getElementById("search-panel"),
          a = document.querySelectorAll(".result"),
          l = document.getElementById("search-bar-input");
        let s = localStorage.getItem("curIndex")
          ? Number(localStorage.getItem("curIndex"))
          : -1;
        "ArrowDown" === e.key
          ? (console.log("down", s),
            s < a.length - 1 ? s++ : (s = a.length - 1),
            localStorage.setItem("curIndex", String(s)),
            a[s].focus())
          : "ArrowUp" === e.key
            ? (console.log("up", s),
              s > 0 ? s-- : (s = 0),
              localStorage.setItem("curIndex", String(s)),
              a[s].focus())
            : "Escape" === e.key
              ? t?.classList.add("float-panel-closed")
              : e.ctrlKey &&
                "z" === e.key &&
                (console.log("search bar focus"), l?.focus());
      },
      s,
      l,
      function () {
        (r = this.value), a(0, r);
      },
      () => o(r, !0),
      function () {
        (n = this.value), a(1, n);
      },
    ]
  );
}
class ye extends ee {
  constructor(e) {
    super(), te(this, e, we, ve, le, {});
  }
}
export { ye as default };
