import {
  S as ee,
  i as te,
  s as se,
  c as C,
  e as B,
  a as A,
  b as D,
  d as N,
  f as H,
  g as E,
  h as p,
  j as U,
  k as y,
  l as j,
  m as z,
  u as O,
  n as F,
  o as G,
  t as P,
  p as le,
  q,
  r as ae,
  v as ne,
  w as ie,
  x as re,
  H as oe,
  y as ce,
  z as ue,
  A as he,
  B as fe,
} from "./index.DajrE5E-.js";
function Q(e) {
  return void 0 !== e?.length ? e : Array.from(e);
}
function R(e, t, a) {
  const l = e.slice();
  return (l[11] = t[a]), l;
}
const _e = (e) => ({}),
  W = (e) => ({}),
  de = (e) => ({}),
  X = (e) => ({}),
  pe = (e) => ({}),
  Y = (e) => ({}),
  ge = (e) => ({}),
  Z = (e) => ({});
function $(e) {
  let t,
    a,
    l,
    s,
    r,
    n,
    c,
    i,
    o,
    h = e[11].meta.title + "",
    d = e[11].excerpt + "";
  const u = e[6]["arrow-icon"],
    f = C(u, e, e[5], W);
  return {
    c() {
      (t = B("a")),
        (a = B("div")),
        (l = re(h)),
        f && f.c(),
        (s = A()),
        (r = B("div")),
        (n = new oe(!1)),
        (c = A()),
        this.h();
    },
    l(e) {
      t = D(e, "A", { href: !0, class: !0 });
      var i = N(t);
      a = D(i, "DIV", { class: !0 });
      var o = N(a);
      (l = ce(o, h)),
        f && f.l(o),
        o.forEach(E),
        (s = H(i)),
        (r = D(i, "DIV", { class: !0 }));
      var d = N(r);
      (n = ue(d, !1)), d.forEach(E), (c = H(i)), i.forEach(E), this.h();
    },
    h() {
      p(
        a,
        "class",
        "transition text-90 inline-flex font-bold group-hover:text-[var(--primary)]",
      ),
        (n.a = null),
        p(r, "class", "transition text-sm text-50"),
        p(t, "href", (i = e[11].url)),
        p(
          t,
          "class",
          "transition first-of-type:mt-2 lg:first-of-type:mt-0 group block rounded-xl text-lg px-3 py-2 hover:bg-[var(--btn-plain-bg-hover)] active:bg-[var(--btn-plain-bg-active)]",
        );
    },
    m(e, i) {
      U(e, t, i),
        y(t, a),
        y(a, l),
        f && f.m(a, null),
        y(t, s),
        y(t, r),
        n.m(d, r),
        y(t, c),
        (o = !0);
    },
    p(e, a) {
      (!o || 8 & a) && h !== (h = e[11].meta.title + "") && he(l, h),
        f &&
          f.p &&
          (!o || 32 & a) &&
          O(f, u, e, e[5], o ? G(u, e[5], a, _e) : F(e[5]), W),
        (!o || 8 & a) && d !== (d = e[11].excerpt + "") && n.p(d),
        (!o || (8 & a && i !== (i = e[11].url))) && p(t, "href", i);
    },
    i(e) {
      o || (P(f, e), (o = !0));
    },
    o(e) {
      q(f, e), (o = !1);
    },
    d(e) {
      e && E(t), f && f.d(e);
    },
  };
}
function me(e) {
  let t, a, l, s, r, n, c, i, o, h, d, u, f, g;
  const b = e[6]["search-icon"],
    v = C(b, e, e[5], Z),
    m = e[6]["search-switch"],
    w = C(m, e, e[5], Y),
    x = e[6]["search-icon"],
    k = C(x, e, e[5], X);
  let I = Q(e[3]),
    V = [];
  for (let t = 0; t < I.length; t += 1) V[t] = $(R(e, I, t));
  const L = (e) =>
    q(V[e], 1, 1, () => {
      V[e] = null;
    });
  return {
    c() {
      (t = B("div")),
        v && v.c(),
        (a = A()),
        (l = B("input")),
        (s = A()),
        (r = B("button")),
        w && w.c(),
        (n = A()),
        (c = B("div")),
        (i = B("div")),
        k && k.c(),
        (o = A()),
        (h = B("input")),
        (d = A());
      for (let e = 0; e < V.length; e += 1) V[e].c();
      this.h();
    },
    l(e) {
      t = D(e, "DIV", { id: !0, class: !0 });
      var p = N(t);
      v && v.l(p),
        (a = H(p)),
        (l = D(p, "INPUT", { placeholder: !0, class: !0 })),
        p.forEach(E),
        (s = H(e)),
        (r = D(e, "BUTTON", { "aria-label": !0, id: !0, class: !0 }));
      var u = N(r);
      w && w.l(u),
        u.forEach(E),
        (n = H(e)),
        (c = D(e, "DIV", { id: !0, class: !0 }));
      var f = N(c);
      i = D(f, "DIV", { id: !0, class: !0 });
      var g = N(i);
      k && k.l(g),
        (o = H(g)),
        (h = D(g, "INPUT", { placeholder: !0, class: !0 })),
        g.forEach(E),
        (d = H(f));
      for (let e = 0; e < V.length; e += 1) V[e].l(f);
      f.forEach(E), this.h();
    },
    h() {
      p(l, "placeholder", "Search"),
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
        p(i, "id", "search-bar-inside"),
        p(
          i,
          "class",
          "flex relative lg:hidden transition-all items-center h-11 rounded-xl bg-black/[0.04] hover:bg-black/[0.06] focus-within:bg-black/[0.06] dark:bg-white/5 dark:hover:bg-white/10 dark:focus-within:bg-white/10 ",
        ),
        p(c, "id", "search-panel"),
        p(
          c,
          "class",
          "float-panel closed search-panel absolute md:w-[30rem] top-20 left-4 md:left-[unset] right-4 shadow-2xl rounded-2xl p-2",
        );
    },
    m(p, b) {
      U(p, t, b),
        v && v.m(t, null),
        y(t, a),
        y(t, l),
        j(l, e[0]),
        U(p, s, b),
        U(p, r, b),
        w && w.m(r, null),
        U(p, n, b),
        U(p, c, b),
        y(c, i),
        k && k.m(i, null),
        y(i, o),
        y(i, h),
        j(h, e[1]),
        y(c, d);
      for (let e = 0; e < V.length; e += 1) V[e] && V[e].m(c, null);
      (u = !0),
        f ||
          ((g = [
            z(l, "input", e[7]),
            z(l, "focus", e[8]),
            z(r, "click", e[4]),
            z(h, "input", e[9]),
          ]),
          (f = !0));
    },
    p(e, [t]) {
      if (
        (v &&
          v.p &&
          (!u || 32 & t) &&
          O(v, b, e, e[5], u ? G(b, e[5], t, ge) : F(e[5]), Z),
        1 & t && l.value !== e[0] && j(l, e[0]),
        w &&
          w.p &&
          (!u || 32 & t) &&
          O(w, m, e, e[5], u ? G(m, e[5], t, pe) : F(e[5]), Y),
        k &&
          k.p &&
          (!u || 32 & t) &&
          O(k, x, e, e[5], u ? G(x, e[5], t, de) : F(e[5]), X),
        2 & t && h.value !== e[1] && j(h, e[1]),
        40 & t)
      ) {
        let a;
        for (I = Q(e[3]), a = 0; a < I.length; a += 1) {
          const l = R(e, I, a);
          V[a]
            ? (V[a].p(l, t), P(V[a], 1))
            : ((V[a] = $(l)), V[a].c(), P(V[a], 1), V[a].m(c, null));
        }
        for (fe(), a = I.length; a < V.length; a += 1) L(a);
        le();
      }
    },
    i(e) {
      if (!u) {
        P(v, e), P(w, e), P(k, e);
        for (let e = 0; e < I.length; e += 1) P(V[e]);
        u = !0;
      }
    },
    o(e) {
      q(v, e), q(w, e), q(k, e), (V = V.filter(Boolean));
      for (let e = 0; e < V.length; e += 1) q(V[e]);
      u = !1;
    },
    d(e) {
      e && (E(t), E(s), E(r), E(n), E(c)),
        v && v.d(e),
        w && w.d(e),
        k && k.d(e),
        ae(V, e),
        (f = !1),
        ne(g);
    },
  };
}
function be(e, t, a) {
  let { $$slots: l = {}, $$scope: s } = t,
    r = "",
    n = "",
    c = [],
    i = (e, t) => {};
  ie(() => {
    a(
      2,
      (i = async (e, t) => {
        let l = document.getElementById("search-panel");
        if (!l) return;
        if (!e && t) return void l.classList.add("closed");
        let s = [];
        {
          const t = await pagefind.search(e);
          for (const e of t.results) s.push(await e.data());
        }
        s.length || !t
          ? (t && l.classList.remove("closed"), a(3, (c = s)))
          : l.classList.add("closed");
      }),
    );
  });
  return (
    (e.$$set = (e) => {
      "$$scope" in e && a(5, (s = e.$$scope));
    }),
    (e.$$.update = () => {
      5 & e.$$.dirty && i(r, !0), 6 & e.$$.dirty && i(n, !1);
    }),
    [
      r,
      n,
      i,
      c,
      () => {
        document.getElementById("search-panel")?.classList.toggle("closed");
      },
      s,
      l,
      function () {
        (r = this.value), a(0, r);
      },
      () => i(r, !0),
      function () {
        (n = this.value), a(1, n);
      },
    ]
  );
}
class we extends ee {
  constructor(e) {
    super(), te(this, e, be, me, se, {});
  }
}
export { we as default };
