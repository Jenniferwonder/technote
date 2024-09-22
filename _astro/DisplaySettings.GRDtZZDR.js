import {
  S as L,
  i as M,
  s as Q,
  a as K,
  I as O,
  c as W,
  e as _,
  t as P,
  b as C,
  d as v,
  f as h,
  g as R,
  h as T,
  j as p,
  k as s,
  l as H,
  m as X,
  n as Y,
  o as i,
  p as F,
  q,
  u as Z,
  r as ee,
  v as te,
  w as se,
  x as ae,
  y as le,
  z as re,
  A as oe,
} from "./translation.CjhihOiK.js";
import { g as ne, a as G, s as ie } from "./setting-utils.B5sRXqnj.js";
import "./config.DKliKzfC.js";
const ue = (e) => ({}),
  J = (e) => ({});
function ce(e) {
  let a,
    t,
    l,
    r,
    o,
    c,
    n,
    d,
    f,
    b,
    u,
    m,
    g,
    x,
    k,
    $,
    y,
    w = K(O.themeColor) + "";
  const D = e[4]["restore-icon"],
    I = W(D, e, e[3], J);
  return {
    c() {
      (a = _("div")),
        (t = _("div")),
        (l = _("div")),
        (r = P(w)),
        (o = C()),
        (c = _("button")),
        (n = _("div")),
        I && I.c(),
        (d = C()),
        (f = _("div")),
        (b = _("div")),
        (u = P(e[0])),
        (m = C()),
        (g = _("div")),
        (x = _("input")),
        this.h();
    },
    l(s) {
      a = v(s, "DIV", { id: !0, class: !0 });
      var i = h(a);
      t = v(i, "DIV", { class: !0 });
      var k = h(t);
      l = v(k, "DIV", { class: !0 });
      var $ = h(l);
      (r = R($, w)),
        (o = T($)),
        (c = v($, "BUTTON", { "aria-label": !0, class: !0 }));
      var _ = h(c);
      n = v(_, "DIV", { class: !0 });
      var y = h(n);
      I && I.l(y),
        y.forEach(p),
        _.forEach(p),
        $.forEach(p),
        (d = T(k)),
        (f = v(k, "DIV", { class: !0 }));
      var D = h(f);
      b = v(D, "DIV", { id: !0, class: !0 });
      var j = h(b);
      (u = R(j, e[0])),
        j.forEach(p),
        D.forEach(p),
        k.forEach(p),
        (m = T(i)),
        (g = v(i, "DIV", { class: !0 }));
      var C = h(g);
      (x = v(C, "INPUT", {
        "aria-label": !0,
        type: !0,
        min: !0,
        max: !0,
        class: !0,
        id: !0,
        step: !0,
        style: !0,
      })),
        C.forEach(p),
        i.forEach(p),
        this.h();
    },
    h() {
      s(n, "class", "text-[var(--btn-content)] svelte-3akcb9"),
        s(c, "aria-label", "Reset to Default"),
        s(
          c,
          "class",
          "btn-regular w-7 h-7 rounded-md active:scale-90 svelte-3akcb9",
        ),
        H(c, "opacity-0", e[0] === e[1]),
        H(c, "pointer-events-none", e[0] === e[1]),
        s(
          l,
          "class",
          "flex gap-2 font-bold text-lg text-neutral-900 dark:text-neutral-100 transition relative ml-3 before:w-1 before:h-4 before:rounded-md before:bg-[var(--primary)] before:absolute before:-left-3 before:top-[0.33rem] svelte-3akcb9",
        ),
        s(b, "id", "hueValue"),
        s(
          b,
          "class",
          "transition bg-[var(--btn-regular-bg)] w-10 h-7 rounded-md flex justify-center font-bold text-sm items-center text-[var(--btn-content)] svelte-3akcb9",
        ),
        s(f, "class", "flex gap-1 svelte-3akcb9"),
        s(
          t,
          "class",
          "flex flex-row gap-2 mb-3 items-center justify-between svelte-3akcb9",
        ),
        s(x, "aria-label", K(O.themeColor)),
        s(x, "type", "range"),
        s(x, "min", "0"),
        s(x, "max", "360"),
        s(x, "class", "slider svelte-3akcb9"),
        s(x, "id", "colorSlider"),
        s(x, "step", "5"),
        X(x, "width", "100%"),
        s(
          g,
          "class",
          "w-full h-6 px-1 bg-[oklch(0.80_0.10_0)] dark:bg-[oklch(0.70_0.10_0)] rounded select-none svelte-3akcb9",
        ),
        s(a, "id", "display-setting"),
        s(
          a,
          "class",
          "float-panel float-panel-closed absolute transition-all w-80 fixed right-4 px-4 py-4 svelte-3akcb9",
        );
    },
    m(s, v) {
      Y(s, a, v),
        i(a, t),
        i(t, l),
        i(l, r),
        i(l, o),
        i(l, c),
        i(c, n),
        I && I.m(n, null),
        i(t, d),
        i(t, f),
        i(f, b),
        i(b, u),
        i(a, m),
        i(a, g),
        i(g, x),
        F(x, e[0]),
        (k = !0),
        $ ||
          ((y = [
            q(c, "click", e[2]),
            q(x, "change", e[5]),
            q(x, "input", e[5]),
          ]),
          ($ = !0));
    },
    p(e, [s]) {
      I &&
        I.p &&
        (!k || 8 & s) &&
        Z(I, D, e, e[3], k ? te(D, e[3], s, ue) : ee(e[3]), J),
        (!k || 3 & s) && H(c, "opacity-0", e[0] === e[1]),
        (!k || 3 & s) && H(c, "pointer-events-none", e[0] === e[1]),
        (!k || 1 & s) && se(u, e[0]),
        1 & s && F(x, e[0]);
    },
    i(e) {
      k || (ae(I, e), (k = !0));
    },
    o(e) {
      le(I, e), (k = !1);
    },
    d(e) {
      e && p(a), I && I.d(e), ($ = !1), re(y);
    },
  };
}
function de(e, s, a) {
  let { $$slots: t = {}, $$scope: l } = s,
    i = ne();
  const r = G();
  return (
    (e.$$set = (e) => {
      "$$scope" in e && a(3, (l = e.$$scope));
    }),
    (e.$$.update = () => {
      1 & e.$$.dirty && (i || 0 === i) && ie(i);
    }),
    [
      i,
      r,
      function () {
        a(0, (i = G()));
      },
      l,
      t,
      function () {
        (i = oe(this.value)), a(0, i);
      },
    ]
  );
}
class be extends L {
  constructor(e) {
    super(), M(this, e, de, ce, Q, {});
  }
}
export { be as default };
