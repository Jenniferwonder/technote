import { s as is, g as as } from "./setting-utils.B5sRXqnj.js";
import "./config.DKliKzfC.js";
import { i as ls } from "./index.Bxr0XgtK.js";
const mt = (t, e) => {
    const { o: n, i: o, u: r } = t;
    let s,
      i = n;
    const c = (t, e) => {
      const n = i,
        c = t,
        a = e || (o ? !o(n, c) : n !== c);
      return (a || r) && ((i = c), (s = n)), [i, a, s];
    };
    return [e ? (t) => c(e(i, s), t) : c, (t) => [i, !!t, s]];
  },
  us = typeof window < "u" && typeof HTMLElement < "u" && !!window.document,
  ft = us ? window : {},
  so = Math.max,
  ds = Math.min,
  je = Math.round,
  we = Math.abs,
  Dn = Math.sign,
  co = ft.cancelAnimationFrame,
  un = ft.requestAnimationFrame,
  Se = ft.setTimeout,
  We = ft.clearTimeout,
  Le = (t) => (typeof ft[t] < "u" ? ft[t] : void 0),
  fs = Le("MutationObserver"),
  Hn = Le("IntersectionObserver"),
  xe = Le("ResizeObserver"),
  ye = Le("ScrollTimeline"),
  dn = (t) => void 0 === t,
  $e = (t) => null === t,
  Tt = (t) => "number" == typeof t,
  se = (t) => "string" == typeof t,
  fn = (t) => "boolean" == typeof t,
  vt = (t) => "function" == typeof t,
  At = (t) => Array.isArray(t),
  Ee = (t) => "object" == typeof t && !At(t) && !$e(t),
  mn = (t) => {
    const e = !!t && t.length,
      n = Tt(e) && e > -1 && e % 1 == 0;
    return !!(At(t) || (!vt(t) && n)) && (!(e > 0 && Ee(t)) || e - 1 in t);
  },
  Te = (t) => !!t && t.constructor === Object,
  Ae = (t) => t instanceof HTMLElement,
  De = (t) => t instanceof Element;
function W(t, e) {
  if (mn(t)) for (let n = 0; n < t.length && !1 !== e(t[n], n, t); n++);
  else t && W(Object.keys(t), (n) => e(t[n], n, t));
  return t;
}
const ro = (t, e) => t.indexOf(e) >= 0,
  te = (t, e) => t.concat(e),
  tt = (t, e, n) => (
    !se(e) && mn(e) ? Array.prototype.push.apply(t, e) : t.push(e), t
  ),
  Pt = (t) => Array.from(t || []),
  pn = (t) => (At(t) ? t : !se(t) && mn(t) ? Pt(t) : [t]),
  Ke = (t) => !!t && !t.length,
  Ze = (t) => Pt(new Set(t)),
  yt = (t, e, n) => {
    W(t, (t) => !t || t.apply(void 0, e || [])), !n && (t.length = 0);
  },
  io = "paddingTop",
  ao = "paddingRight",
  lo = "paddingLeft",
  uo = "paddingBottom",
  fo = "marginLeft",
  mo = "marginRight",
  po = "marginBottom",
  ho = "overflowX",
  yo = "overflowY",
  He = "width",
  Re = "height",
  Dt = "visible",
  _t = "hidden",
  Xt = "scroll",
  ms = (t) => {
    const e = String(t || "");
    return e ? e[0].toUpperCase() + e.slice(1) : "";
  },
  Pe = (t, e, n, o) => {
    if (t && e) {
      let o = !0;
      return (
        W(n, (n) => {
          t[n] !== e[n] && (o = !1);
        }),
        o
      );
    }
    return !1;
  },
  go = (t, e) => Pe(t, e, ["w", "h"]),
  ge = (t, e) => Pe(t, e, ["x", "y"]),
  ps = (t, e) => Pe(t, e, ["t", "r", "b", "l"]),
  Nt = () => {},
  D = (t, ...e) => t.bind(0, ...e),
  zt = (t) => {
    let e;
    const n = t ? Se : un,
      o = t ? We : co;
    return [
      (r) => {
        o(e), (e = n(() => r(), vt(t) ? t() : t));
      },
      () => o(e),
    ];
  },
  Ge = (t, e) => {
    const { _: n, v: o, p: r, S: s } = e || {};
    let i,
      c,
      a,
      l,
      d = Nt;
    const u = function (e) {
        d(), We(i), (l = i = c = void 0), (d = Nt), t.apply(this, e);
      },
      m = (t) => (s && c ? s(c, t) : t),
      f = () => {
        d !== Nt && u(m(a) || a);
      },
      h = function () {
        const t = Pt(arguments),
          e = vt(n) ? n() : n;
        if (Tt(e) && e >= 0) {
          const n = vt(o) ? o() : o,
            s = Tt(n) && n >= 0,
            h = e > 0 ? Se : un,
            p = e > 0 ? We : co,
            y = m(t) || t,
            v = u.bind(0, y);
          let b;
          d(),
            r && !l
              ? (v(), (l = !0), (b = h(() => (l = void 0), e)))
              : ((b = h(v, e)), s && !i && (i = Se(f, n))),
            (d = () => p(b)),
            (c = a = y);
        } else u(t);
      };
    return (h.m = f), h;
  },
  bo = (t, e) => Object.prototype.hasOwnProperty.call(t, e),
  wt = (t) => (t ? Object.keys(t) : []),
  Y = (t, e, n, o, r, s, i) => {
    const c = [e, n, o, r, s, i];
    return (
      ("object" != typeof t || $e(t)) && !vt(t) && (t = {}),
      W(c, (e) => {
        W(e, (n, o) => {
          const r = e[o];
          if (t === r) return !0;
          const s = At(r);
          if (r && Te(r)) {
            const e = t[o];
            let n = e;
            s && !At(e) ? (n = []) : !s && !Te(e) && (n = {}), (t[o] = Y(n, r));
          } else t[o] = s ? r.slice() : r;
        });
      }),
      t
    );
  },
  vo = (t, e) =>
    W(Y({}, t), (t, e, n) => {
      void 0 === t ? delete n[e] : t && Te(t) && (n[e] = vo(t));
    }),
  hn = (t) => !wt(t).length,
  wo = (t, e, n) => so(t, ds(e, n)),
  Ft = (t) => Ze((At(t) ? t : (t || "").split(" ")).filter((t) => t)),
  yn = (t, e) => t && t.getAttribute(e),
  Rn = (t, e) => t && t.hasAttribute(e),
  Ot = (t, e, n) => {
    W(Ft(e), (e) => {
      t && t.setAttribute(e, String(n || ""));
    });
  },
  xt = (t, e) => {
    W(Ft(e), (e) => t && t.removeAttribute(e));
  },
  Ie = (t, e) => {
    const n = Ft(yn(t, e)),
      o = D(Ot, t, e),
      r = (t, e) => {
        const o = new Set(n);
        return (
          W(Ft(t), (t) => {
            o[e](t);
          }),
          Pt(o).join(" ")
        );
      };
    return {
      O: (t) => o(r(t, "delete")),
      $: (t) => o(r(t, "add")),
      C: (t) => {
        const e = Ft(t);
        return e.reduce((t, e) => t && n.includes(e), e.length > 0);
      },
    };
  },
  So = (t, e, n) => (Ie(t, e).O(n), D(gn, t, e, n)),
  gn = (t, e, n) => (Ie(t, e).$(n), D(So, t, e, n)),
  Ce = (t, e, n, o) => (o ? gn : So)(t, e, n),
  bn = (t, e, n) => Ie(t, e).C(n),
  xo = (t) => Ie(t, "class"),
  Eo = (t, e) => {
    xo(t).O(e);
  },
  vn = (t, e) => (xo(t).$(e), D(Eo, t, e)),
  To = (t, e) => {
    const n = e ? De(e) && e : document;
    return n ? Pt(n.querySelectorAll(t)) : [];
  },
  hs = (t, e) => {
    const n = e ? De(e) && e : document;
    return n && n.querySelector(t);
  },
  Je = (t, e) => De(t) && t.matches(e),
  Ao = (t) => Je(t, "body"),
  Qe = (t) => (t ? Pt(t.childNodes) : []),
  ee = (t) => t && t.parentElement,
  Vt = (t, e) => De(t) && t.closest(e),
  tn = (t) => document.activeElement,
  ys = (t, e, n) => {
    const o = Vt(t, e),
      r = t && hs(n, o),
      s = Vt(r, e) === o;
    return !(!o || !r) && (o === t || r === t || (s && Vt(Vt(t, n), e) !== o));
  },
  jt = (t) => {
    W(pn(t), (t) => {
      const e = ee(t);
      t && e && e.removeChild(t);
    });
  },
  pt = (t, e) =>
    D(
      jt,
      t &&
        e &&
        W(pn(e), (e) => {
          e && t.appendChild(e);
        }),
    ),
  qt = (t) => {
    const e = document.createElement("div");
    return Ot(e, "class", t), e;
  },
  Co = (t) => {
    const e = qt();
    return (e.innerHTML = t.trim()), W(Qe(e), (t) => jt(t));
  },
  Pn = (t, e) => t.getPropertyValue(e) || t[e] || "",
  Oo = (t) => {
    const e = t || 0;
    return isFinite(e) ? e : 0;
  },
  pe = (t) => Oo(parseFloat(t || "")),
  en = (t) => Math.round(1e4 * t) / 1e4,
  ko = (t) => `${en(Oo(t))}px`;
function ne(t, e) {
  t &&
    e &&
    W(e, (e, n) => {
      try {
        const o = t.style,
          r = $e(e) || fn(e) ? "" : Tt(e) ? ko(e) : e;
        0 === n.indexOf("--") ? o.setProperty(n, r) : (o[n] = r);
      } catch {}
    });
}
function Lt(t, e, n) {
  const o = se(e);
  let r = o ? "" : {};
  if (t) {
    const s = ft.getComputedStyle(t, n) || t.style;
    r = o ? Pn(s, e) : Pt(e).reduce((t, e) => ((t[e] = Pn(s, e)), t), r);
  }
  return r;
}
const In = (t, e, n) => {
    const o = e ? `${e}-` : "",
      r = n ? `-${n}` : "",
      s = `${o}top${r}`,
      i = `${o}right${r}`,
      c = `${o}bottom${r}`,
      a = `${o}left${r}`,
      l = Lt(t, [s, i, c, a]);
    return { t: pe(l[s]), r: pe(l[i]), b: pe(l[c]), l: pe(l[a]) };
  },
  gs = (t, e) => "translate" + (Ee(t) ? `(${t.x},${t.y})` : `Y(${t})`),
  bs = (t) => !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length),
  vs = { w: 0, h: 0 },
  Me = (t, e) => (e ? { w: e[`${t}Width`], h: e[`${t}Height`] } : vs),
  ws = (t) => Me("inner", t || ft),
  Ut = D(Me, "offset"),
  Lo = D(Me, "client"),
  Oe = D(Me, "scroll"),
  wn = (t) => {
    const e = parseFloat(Lt(t, He)) || 0,
      n = parseFloat(Lt(t, Re)) || 0;
    return { w: e - je(e), h: n - je(n) };
  },
  qe = (t) => t.getBoundingClientRect(),
  Ss = (t) => !!t && bs(t),
  nn = (t) => !(!t || (!t[Re] && !t[He])),
  $o = (t, e) => {
    const n = nn(t);
    return !nn(e) && n;
  },
  Mn = (t, e, n, o) => {
    W(Ft(e), (e) => {
      t && t.removeEventListener(e, n, o);
    });
  },
  G = (t, e, n, o) => {
    var r;
    const s = null == (r = o && o.H) || r,
      i = (o && o.I) || !1,
      c = (o && o.A) || !1,
      a = { passive: s, capture: i };
    return D(
      yt,
      Ft(e).map((e) => {
        const o = c
          ? (r) => {
              Mn(t, e, o, i), n && n(r);
            }
          : n;
        return t && t.addEventListener(e, o, a), D(Mn, t, e, o, i);
      }),
    );
  },
  Do = (t) => t.stopPropagation(),
  on = (t) => t.preventDefault(),
  Ho = (t) => Do(t) || on(t),
  Et = (t, e) => {
    const { x: n, y: o } = Tt(e) ? { x: e, y: e } : e || {};
    Tt(n) && (t.scrollLeft = n), Tt(o) && (t.scrollTop = o);
  },
  ht = (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
  Ro = () => ({ D: { x: 0, y: 0 }, M: { x: 0, y: 0 } }),
  xs = (t, e) => {
    const { D: n, M: o } = t,
      { w: r, h: s } = e,
      i = (t, e, n) => {
        let o = Dn(t) * n,
          r = Dn(e) * n;
        if (o === r) {
          const n = we(t),
            s = we(e);
          (r = n > s ? 0 : r), (o = n < s ? 0 : o);
        }
        return (o = o === r ? 0 : o), [o + 0, r + 0];
      },
      [c, a] = i(n.x, o.x, r),
      [l, d] = i(n.y, o.y, s);
    return { D: { x: c, y: l }, M: { x: a, y: d } };
  },
  _n = ({ D: t, M: e }) => {
    const n = (t, e) => 0 === t && t <= e;
    return { x: n(t.x, e.x), y: n(t.y, e.y) };
  },
  Nn = ({ D: t, M: e }, n) => {
    const o = (t, e, n) => wo(0, 1, (t - n) / (t - e) || 0);
    return { x: o(t.x, e.x, n.x), y: o(t.y, e.y, n.y) };
  },
  sn = (t) => {
    t && t.focus && t.focus({ preventScroll: !0 });
  },
  Fn = (t, e) => {
    W(pn(e), t);
  },
  cn = (t) => {
    const e = new Map(),
      n = (t, n) => {
        if (t) {
          const o = e.get(t);
          Fn((t) => {
            o && o[t ? "delete" : "clear"](t);
          }, n);
        } else
          e.forEach((t) => {
            t.clear();
          }),
            e.clear();
      },
      o = (t, r) => {
        if (se(t)) {
          const o = e.get(t) || new Set();
          return (
            e.set(t, o),
            Fn((t) => {
              vt(t) && o.add(t);
            }, r),
            D(n, t, r)
          );
        }
        fn(r) && r && n();
        const s = wt(t),
          i = [];
        return (
          W(s, (e) => {
            const n = t[e];
            n && tt(i, o(e, n));
          }),
          D(yt, i)
        );
      };
    return (
      o(t || {}),
      [
        o,
        n,
        (t, n) => {
          W(Pt(e.get(t)), (t) => {
            n && !Ke(n) ? t.apply(0, n) : t();
          });
        },
      ]
    );
  },
  Bn = (t) =>
    JSON.stringify(t, (t, e) => {
      if (vt(e)) throw 0;
      return e;
    }),
  zn = (t, e) =>
    t
      ? `${e}`.split(".").reduce((t, e) => (t && bo(t, e) ? t[e] : void 0), t)
      : void 0,
  Es = {
    paddingAbsolute: !1,
    showNativeOverlaidScrollbars: !1,
    update: {
      elementEvents: [["img", "load"]],
      debounce: [0, 33],
      attributes: null,
      ignoreMutation: null,
    },
    overflow: { x: "scroll", y: "scroll" },
    scrollbars: {
      theme: "os-theme-dark",
      visibility: "auto",
      autoHide: "never",
      autoHideDelay: 1300,
      autoHideSuspend: !1,
      dragScroll: !0,
      clickScroll: !1,
      pointers: ["mouse", "touch", "pen"],
    },
  },
  Po = (t, e) => {
    const n = {};
    return (
      W(te(wt(e), wt(t)), (o) => {
        const r = t[o],
          s = e[o];
        if (Ee(r) && Ee(s)) Y((n[o] = {}), Po(r, s)), hn(n[o]) && delete n[o];
        else if (bo(e, o) && s !== r) {
          let t = !0;
          if (At(r) || At(s))
            try {
              Bn(r) === Bn(s) && (t = !1);
            } catch {}
          t && (n[o] = s);
        }
      }),
      n
    );
  },
  Vn = (t, e, n) => (o) => [zn(t, o), n || void 0 !== zn(e, o)],
  Kt = "data-overlayscrollbars",
  be = "os-environment",
  he = `${be}-scrollbar-hidden`,
  Ue = `${Kt}-initialize`,
  ve = "noClipping",
  qn = `${Kt}-body`,
  Ht = Kt,
  Ts = "host",
  kt = `${Kt}-viewport`,
  As = ho,
  Cs = yo,
  Os = "arrange",
  Io = "measuring",
  ks = "scrolling",
  Mo = "scrollbarHidden",
  Ls = "noContent",
  rn = `${Kt}-padding`,
  Un = `${Kt}-content`,
  Sn = "os-size-observer",
  $s = `${Sn}-appear`,
  Ds = `${Sn}-listener`,
  Hs = "os-trinsic-observer",
  Rs = "os-theme-none",
  gt = "os-scrollbar",
  Ps = `${gt}-rtl`,
  Is = `${gt}-horizontal`,
  Ms = `${gt}-vertical`,
  _o = `${gt}-track`,
  xn = `${gt}-handle`,
  _s = `${gt}-visible`,
  Ns = `${gt}-cornerless`,
  Yn = `${gt}-interaction`,
  Xn = `${gt}-unusable`,
  an = `${gt}-auto-hide`,
  jn = `${an}-hidden`,
  Wn = `${gt}-wheel`,
  Fs = `${_o}-interactive`,
  Bs = `${xn}-interactive`;
let No;
const zs = () => No,
  Vs = (t) => {
    No = t;
  };
let Ye;
const qs = () => {
    const t = (t, e, n) => {
        pt(document.body, t), pt(document.body, t);
        const o = Lo(t),
          r = Ut(t),
          s = wn(e);
        return n && jt(t), { x: r.h - o.h + s.h, y: r.w - o.w + s.w };
      },
      e = Co(
        `<div class="${be}"><div></div><style>${`.${be}{scroll-behavior:auto!important;position:fixed;opacity:0;visibility:hidden;overflow:scroll;height:200px;width:200px;z-index:-1}.${be} div{width:200%;height:200%;margin:10px 0}.${he}{scrollbar-width:none!important}.${he}::-webkit-scrollbar,.${he}::-webkit-scrollbar-corner{appearance:none!important;display:none!important;width:0!important;height:0!important}`}</style></div>`,
      )[0],
      n = e.firstChild,
      o = e.lastChild,
      r = zs();
    r && (o.nonce = r);
    const [s, , i] = cn(),
      [c, a] = mt({ o: t(e, n), i: ge }, D(t, e, n, !0)),
      [l] = a(),
      d = ((t) => {
        let e = !1;
        const n = vn(t, he);
        try {
          e =
            "none" === Lt(t, "scrollbar-width") ||
            "none" === Lt(t, "display", "::-webkit-scrollbar");
        } catch {}
        return n(), e;
      })(e),
      u = { x: 0 === l.x, y: 0 === l.y },
      m = {
        elements: {
          host: null,
          padding: !d,
          viewport: (t) => d && Ao(t) && t,
          content: !1,
        },
        scrollbars: { slot: !0 },
        cancel: { nativeScrollbarsOverlaid: !1, body: null },
      },
      f = Y({}, Es),
      h = D(Y, {}, f),
      p = D(Y, {}, m),
      y = {
        T: l,
        k: u,
        R: d,
        V: !!ye,
        L: D(s, "r"),
        U: p,
        P: (t) => Y(m, t) && p(),
        N: h,
        q: (t) => Y(f, t) && h(),
        B: Y({}, m),
        F: Y({}, f),
      };
    if (
      (xt(e, "style"),
      jt(e),
      G(ft, "resize", () => {
        i("r", []);
      }),
      vt(ft.matchMedia) && !d && (!u.x || !u.y))
    ) {
      const t = (e) => {
        const n = ft.matchMedia(`(resolution: ${ft.devicePixelRatio}dppx)`);
        G(
          n,
          "change",
          () => {
            e(), t(e);
          },
          { A: !0 },
        );
      };
      t(() => {
        const [t, e] = c();
        Y(y.T, t), i("r", [e]);
      });
    }
    return y;
  },
  Ct = () => (Ye || (Ye = qs()), Ye),
  Fo = (t, e) => (vt(e) ? e.apply(0, t) : e),
  Us = (t, e, n, o) => {
    const r = dn(o) ? n : o;
    return Fo(t, r) || e.apply(0, t);
  },
  Bo = (t, e, n, o) => {
    const r = dn(o) ? n : o,
      s = Fo(t, r);
    return !!s && (Ae(s) ? s : e.apply(0, t));
  },
  Ys = (t, e) => {
    const { nativeScrollbarsOverlaid: n, body: o } = e || {},
      { k: r, R: s, U: i } = Ct(),
      { nativeScrollbarsOverlaid: c, body: a } = i().cancel,
      l = n ?? c,
      d = dn(o) ? a : o,
      u = (r.x || r.y) && l,
      m = t && ($e(d) ? !s : d);
    return !!u || !!m;
  },
  En = new WeakMap(),
  Xs = (t, e) => {
    En.set(t, e);
  },
  js = (t) => {
    En.delete(t);
  },
  zo = (t) => En.get(t),
  Ws = (t, e, n) => {
    let o = !1;
    const r = !!n && new WeakMap(),
      s = (s) => {
        if (r && n) {
          W(
            n.map((e) => {
              const [n, o] = e || [];
              return [o && n ? (s || To)(n, t) : [], o];
            }),
            (n) =>
              W(n[0], (s) => {
                const i = n[1],
                  c = r.get(s) || [];
                if (t.contains(s) && i) {
                  const t = G(s, i, (n) => {
                    o ? (t(), r.delete(s)) : e(n);
                  });
                  r.set(s, tt(c, t));
                } else yt(c), r.delete(s);
              }),
          );
        }
      };
    return (
      s(),
      [
        () => {
          o = !0;
        },
        s,
      ]
    );
  },
  Kn = (t, e, n, o) => {
    let r = !1;
    const { j: s, X: i, Y: c, W: a, J: l, G: d } = o || {},
      u = Ge(() => r && n(!0), { _: 33, v: 99 }),
      [m, f] = Ws(t, u, c),
      h = i || [],
      p = te(s || [], h),
      y = (r, s) => {
        if (!Ke(s)) {
          const i = l || Nt,
            c = d || Nt,
            u = [],
            m = [];
          let p = !1,
            y = !1;
          if (
            (W(s, (n) => {
              const {
                  attributeName: r,
                  target: s,
                  type: l,
                  oldValue: d,
                  addedNodes: f,
                  removedNodes: v,
                } = n,
                b = "attributes" === l,
                w = "childList" === l,
                g = t === s,
                x = b && r,
                E = x && yn(s, r || ""),
                D = se(E) ? E : null,
                T = x && d !== D,
                A = ro(h, r) && T;
              if (e && (w || !g)) {
                const e = b && T,
                  l = e && a && Je(s, a),
                  m = (l ? !i(s, r, d, D) : !b || e) && !c(n, !!l, t, o);
                W(f, (t) => tt(u, t)), W(v, (t) => tt(u, t)), (y = y || m);
              }
              !e && g && T && !i(s, r, d, D) && (tt(m, r), (p = p || A));
            }),
            f((t) =>
              Ze(u).reduce(
                (e, n) => (tt(e, To(t, n)), Je(n, t) ? tt(e, n) : e),
                [],
              ),
            ),
            e)
          )
            return !r && y && n(!1), [!1];
          if (!Ke(m) || p) {
            const t = [Ze(m), p];
            return !r && n.apply(0, t), t;
          }
        }
      },
      v = new fs(D(y, !1));
    return [
      () => (
        v.observe(t, {
          attributes: !0,
          attributeOldValue: !0,
          attributeFilter: p,
          subtree: e,
          childList: e,
          characterData: e,
        }),
        (r = !0),
        () => {
          r && (m(), v.disconnect(), (r = !1));
        }
      ),
      () => {
        if (r) return u.m(), y(!0, v.takeRecords());
      },
    ];
  },
  Vo = {},
  qo = {},
  Ks = (t) => {
    W(t, (t) =>
      W(t, (e, n) => {
        Vo[n] = t[n];
      }),
    );
  },
  Uo = (t, e, n) =>
    wt(t).map((o) => {
      const { static: r, instance: s } = t[o],
        [i, c, a] = n || [],
        l = n ? s : r;
      if (l) {
        const t = n ? l(i, c, e) : l(e);
        return ((a || qo)[o] = t);
      }
    }),
  ce = (t) => qo[t],
  Zs = "__osOptionsValidationPlugin",
  Gs = "__osSizeObserverPlugin",
  Js = (t, e) => {
    const { k: n } = e,
      [o, r] = t("showNativeOverlaidScrollbars");
    return [o && n.x && n.y, r];
  },
  Wt = (t) => 0 === t.indexOf(Dt),
  Qs = (t, e) => {
    const n = (t, e, n, o) => {
        const r = t === Dt ? _t : t.replace(`${Dt}-`, ""),
          s = Wt(t),
          i = Wt(n);
        return e || o
          ? s && i
            ? Dt
            : s
              ? e && o
                ? r
                : e
                  ? Dt
                  : _t
              : e
                ? r
                : i && o
                  ? Dt
                  : _t
          : _t;
      },
      o = { x: n(e.x, t.x, e.y, t.y), y: n(e.y, t.y, e.x, t.x) };
    return { K: o, Z: { x: o.x === Xt, y: o.y === Xt } };
  },
  Yo = "__osScrollbarsHidingPlugin",
  tc = "__osClickScrollPlugin",
  Xo = (t, e, n) => {
    const { dt: o } = n || {},
      r = ce(Gs),
      [s] = mt({ o: !1, u: !0 });
    return () => {
      const n = [],
        i = Co(`<div class="${Sn}"><div class="${Ds}"></div></div>`)[0],
        c = i.firstChild,
        a = (t) => {
          let n = !1,
            o = !1;
          if (t instanceof ResizeObserverEntry) {
            const [e, , r] = s(t.contentRect),
              i = nn(e);
            (o = $o(e, r)), (n = !o && !i);
          } else o = !0 === t;
          n || e({ ft: !0, dt: o });
        };
      if (xe) {
        const t = new xe((t) => a(t.pop()));
        t.observe(c),
          tt(n, () => {
            t.disconnect();
          });
      } else {
        if (!r) return Nt;
        {
          const [t, e] = r(c, a, o);
          tt(n, te([vn(i, $s), G(i, "animationstart", t)], e));
        }
      }
      return D(yt, tt(n, pt(t, i)));
    };
  },
  ec = (t, e) => {
    let n;
    const o = qt(Hs),
      [r] = mt({ o: !1 }),
      s = (t, n) => {
        if (t) {
          const o = r(
              ((t) => 0 === t.h || t.isIntersecting || t.intersectionRatio > 0)(
                t,
              ),
            ),
            [, s] = o;
          return s && !n && e(o) && [o];
        }
      },
      i = (t, e) => s(e.pop(), t);
    return [
      () => {
        const e = [];
        if (Hn)
          (n = new Hn(D(i, !1), { root: t })),
            n.observe(o),
            tt(e, () => {
              n.disconnect();
            });
        else {
          const t = () => {
            const t = Ut(o);
            s(t);
          };
          tt(e, Xo(o, t)()), t();
        }
        return D(yt, tt(e, pt(t, o)));
      },
      () => n && i(!0, n.takeRecords()),
    ];
  },
  nc = (t, e, n, o) => {
    let r, s, i, c, a, l;
    const d = `[${Ht}]`,
      u = `[${kt}]`,
      m = ["id", "class", "style", "open", "wrap", "cols", "rows"],
      {
        vt: f,
        ht: h,
        ot: p,
        gt: y,
        bt: v,
        nt: b,
        wt: w,
        yt: g,
        St: x,
        Ot: E,
      } = t,
      D = (t) => "rtl" === Lt(t, "direction"),
      T = { $t: !1, ct: D(f) },
      A = Ct(),
      S = ce(Yo),
      [L] = mt({ i: go, o: { w: 0, h: 0 } }, () => {
        const o = S && S.tt(t, e, T, A, n).ut,
          r = !(w && b) && bn(h, Ht, ve),
          s = !b && g(Os),
          i = s && ht(y),
          c = i && E(),
          a = x(Io, r),
          l = s && o && o()[0],
          d = Oe(p),
          u = wn(p);
        return (
          l && l(), Et(y, i), c && c(), r && a(), { w: d.w + u.w, h: d.h + u.h }
        );
      }),
      k = Ge(o, {
        _: () => r,
        v: () => s,
        S(t, e) {
          const [n] = t,
            [o] = e;
          return [
            te(wt(n), wt(o)).reduce((t, e) => ((t[e] = n[e] || o[e]), t), {}),
          ];
        },
      }),
      $ = (t) => {
        const e = D(f);
        Y(t, { Ct: l !== e }), Y(T, { ct: e }), (l = e);
      },
      M = (t, e) => {
        const [n, r] = t,
          s = { xt: r };
        return Y(T, { $t: n }), !e && o(s), s;
      },
      C = ({ ft: t, dt: e }) => {
        const n = (t && !e) || !A.R ? o : k,
          r = { ft: t || e, dt: e };
        $(r), n(r);
      },
      H = (t, e) => {
        const [, n] = L(),
          r = { Ht: n };
        return $(r), n && !e && (t ? o : k)(r), r;
      },
      O = (t, e, n) => {
        const o = { Et: e };
        return $(o), e && !n && k(o), o;
      },
      [R, P] = v ? ec(h, M) : [],
      W = !b && Xo(h, C, { dt: !0 }),
      [I, X] = Kn(h, !1, O, { X: m, j: m }),
      q =
        b &&
        xe &&
        new xe((t) => {
          const e = t[t.length - 1].contentRect;
          C({ ft: !0, dt: $o(e, a) }), (a = e);
        }),
      G = Ge(
        () => {
          const [, t] = L();
          o({ Ht: t });
        },
        { _: 222, p: !0 },
      );
    return [
      () => {
        q && q.observe(h);
        const t = W && W(),
          e = R && R(),
          n = I(),
          o = A.L((t) => {
            t ? k({ zt: t }) : G();
          });
        return () => {
          q && q.disconnect(), t && t(), e && e(), c && c(), n(), o();
        };
      },
      ({ It: t, At: e, Dt: n }) => {
        const o = {},
          [a] = t("update.ignoreMutation"),
          [l, f] = t("update.attributes"),
          [h, y] = t("update.elementEvents"),
          [w, g] = t("update.debounce"),
          x = e || n;
        if (y || f) {
          i && i(), c && c();
          const [t, e] = Kn(v || p, !0, H, {
            j: te(m, l || []),
            Y: h,
            W: d,
            G: (t, e) => {
              const { target: n, attributeName: o } = t;
              return (
                (!(e || !o || b) && ys(n, d, u)) ||
                !!Vt(n, `.${gt}`) ||
                !!((t) => vt(a) && a(t))(t)
              );
            },
          });
          (c = t()), (i = e);
        }
        if (g)
          if ((k.m(), At(w))) {
            const t = w[0],
              e = w[1];
            (r = Tt(t) && t), (s = Tt(e) && e);
          } else Tt(w) ? ((r = w), (s = !1)) : ((r = !1), (s = !1));
        if (x) {
          const t = X(),
            e = P && P(),
            n = i && i();
          t && Y(o, O(t[0], t[1], x)),
            e && Y(o, M(e[0], x)),
            n && Y(o, H(n[0], x));
        }
        return $(o), o;
      },
      T,
    ];
  },
  oc = (t, e, n, o) => {
    const r = "--os-viewport-percent",
      s = "--os-scroll-percent",
      i = "--os-scroll-direction",
      { U: c } = Ct(),
      { scrollbars: a } = c(),
      { slot: l } = a,
      { vt: d, ht: u, ot: m, Mt: f, gt: h, wt: p, nt: y } = e,
      { scrollbars: v } = f ? {} : t,
      { slot: b } = v || {},
      w = [],
      g = [],
      x = [],
      E = Bo([d, u, m], () => (y && p ? d : u), l, b),
      T = (t) => {
        if (ye) {
          const e = new ye({ source: h, axis: t });
          return {
            kt: (t) => {
              const n = t.Tt.animate(
                { clear: ["left"], [s]: [0, 1] },
                { timeline: e },
              );
              return () => n.cancel();
            },
          };
        }
      },
      A = { x: T("x"), y: T("y") },
      S = (t, e, n) => {
        const o = n ? vn : Eo;
        W(t, (t) => {
          o(t.Tt, e);
        });
      },
      L = (t, e) => {
        W(t, (t) => {
          const [n, o] = e(t);
          ne(n, o);
        });
      },
      k = (t, e, n) => {
        const o = fn(n),
          r = !o || !n;
        (!o || n) && S(g, t, e), r && S(x, t, e);
      },
      $ = (t) => {
        const e = t ? "x" : "y",
          n = qt(`${gt} ${t ? Is : Ms}`),
          r = qt(_o),
          s = qt(xn),
          i = { Tt: n, Ut: r, Pt: s },
          c = A[e];
        return (
          tt(t ? g : x, i),
          tt(w, [pt(n, r), pt(r, s), D(jt, n), c && c.kt(i), o(i, k, t)]),
          i
        );
      },
      Y = D($, !0),
      M = D($, !1);
    return (
      Y(),
      M(),
      [
        {
          Nt: () => {
            const t = (() => {
                const { Rt: t, Vt: e } = n,
                  o = (t, e) => wo(0, 1, t / (t + e) || 0);
                return { x: o(e.x, t.x), y: o(e.y, t.y) };
              })(),
              e = (t) => (e) => [e.Tt, { [r]: en(t) + "" }];
            L(g, e(t.x)), L(x, e(t.y));
          },
          qt: () => {
            if (!ye) {
              const { Lt: t } = n,
                e = Nn(t, ht(h)),
                o = (t) => (e) => [e.Tt, { [s]: en(t) + "" }];
              L(g, o(e.x)), L(x, o(e.y));
            }
          },
          Bt: () => {
            const { Lt: t } = n,
              e = _n(t),
              o = (t) => (e) => [e.Tt, { [i]: t ? "0" : "1" }];
            L(g, o(e.x)), L(x, o(e.y));
          },
          Ft: () => {
            if (y && !p) {
              const { Rt: t, Lt: e } = n,
                o = _n(e),
                r = Nn(e, ht(h)),
                s = (e) => {
                  const { Tt: n } = e,
                    s = ee(n) === m && n,
                    i = (t, e, n) => {
                      const o = e * t;
                      return ko(n ? o : -o);
                    };
                  return [
                    s,
                    s && {
                      transform: gs({
                        x: i(r.x, t.x, o.x),
                        y: i(r.y, t.y, o.y),
                      }),
                    },
                  ];
                };
              L(g, s), L(x, s);
            }
          },
          jt: k,
          Xt: { Yt: g, Wt: Y, Jt: D(L, g) },
          Gt: { Yt: x, Wt: M, Jt: D(L, x) },
        },
        () => (pt(E, g[0].Tt), pt(E, x[0].Tt), D(yt, w)),
      ]
    );
  },
  sc = (t, e, n, o) => (r, s, i) => {
    const { ht: c, ot: a, nt: l, gt: d, Kt: u, Ot: m } = e,
      { Tt: f, Ut: h, Pt: p } = r,
      [y, v] = zt(333),
      [b, w] = zt(444),
      g = (t) => {
        vt(d.scrollBy) &&
          d.scrollBy({ behavior: "smooth", left: t.x, top: t.y });
      };
    let x = !0;
    return D(yt, [
      G(p, "pointermove pointerleave", o),
      G(f, "pointerenter", () => {
        s(Yn, !0);
      }),
      G(f, "pointerleave pointercancel", () => {
        s(Yn, !1);
      }),
      !l &&
        G(f, "mousedown", () => {
          const t = tn();
          (Rn(t, kt) || Rn(t, Ht) || t === document.body) && Se(D(sn, a), 25);
        }),
      G(
        f,
        "wheel",
        (t) => {
          const { deltaX: e, deltaY: n, deltaMode: o } = t;
          x && 0 === o && ee(f) === c && g({ x: e, y: n }),
            (x = !1),
            s(Wn, !0),
            y(() => {
              (x = !0), s(Wn);
            }),
            on(t);
        },
        { H: !1, I: !0 },
      ),
      G(f, "pointerdown", D(G, u, "click", Ho, { A: !0, I: !0, H: !1 }), {
        I: !0,
      }),
      (() => {
        const e = "pointerup pointercancel lostpointercapture",
          o = "client" + (i ? "X" : "Y"),
          r = i ? He : Re,
          s = i ? "left" : "top",
          c = i ? "w" : "h",
          a = i ? "x" : "y",
          l = [];
        return G(h, "pointerdown", (i) => {
          const f = Vt(i.target, `.${xn}`) === p,
            y = f ? p : h,
            v = t.scrollbars,
            x = v[f ? "dragScroll" : "clickScroll"],
            { button: E, isPrimary: T, pointerType: A } = i,
            { pointers: S } = v;
          if (0 === E && T && x && (S || []).includes(A)) {
            yt(l), w();
            const t = !f && (i.shiftKey || "instant" === x),
              v = D(qe, p),
              E = D(qe, h),
              T = (t, e) => (t || v())[s] - (e || E())[s],
              A = je(qe(d)[r]) / Ut(d)[c] || 1,
              S = ((t, e) => (o) => {
                const { Rt: r } = n,
                  s = Ut(h)[c] - Ut(p)[c],
                  i = ((e * o) / s) * r[a];
                Et(d, { [a]: t + i });
              })(ht(d)[a], 1 / A),
              L = i[o],
              k = v(),
              $ = E(),
              Y = k[r],
              M = T(k, $) + Y / 2,
              C = L - $[s],
              H = f ? 0 : C - M,
              O = (t) => {
                yt(W), y.releasePointerCapture(t.pointerId);
              },
              R = f || t,
              P = m(),
              W = [
                G(u, e, O),
                G(u, "selectstart", (t) => on(t), { H: !1 }),
                G(h, e, O),
                R && G(h, "pointermove", (t) => S(H + (t[o] - L))),
                R &&
                  (() => {
                    const t = ht(d);
                    P();
                    const e = ht(d),
                      n = { x: e.x - t.x, y: e.y - t.y };
                    (we(n.x) > 3 || we(n.y) > 3) && (m(), Et(d, t), g(n), b(P));
                  }),
              ];
            if ((y.setPointerCapture(i.pointerId), t)) S(H);
            else if (!f) {
              const t = ce(tc);
              if (t) {
                const e = t(S, H, Y, (t) => {
                  t ? P() : tt(W, P);
                });
                tt(W, e), tt(l, D(e, !0));
              }
            }
          }
        });
      })(),
      v,
      w,
    ]);
  },
  cc = (t, e, n, o, r, s) => {
    let i,
      c,
      a,
      l,
      d,
      u = Nt,
      m = 0;
    const f = (t) => "mouse" === t.pointerType,
      [h, p] = zt(),
      [y, v] = zt(100),
      [b, w] = zt(100),
      [g, x] = zt(() => m),
      [E, T] = oc(
        t,
        r,
        o,
        sc(e, r, o, (t) => f(t) && O()),
      ),
      { ht: A, Qt: S, wt: L } = r,
      { jt: k, Nt: $, qt: Y, Bt: M, Ft: C } = E,
      H = (t, e) => {
        if ((x(), t)) k(jn);
        else {
          const t = D(k, jn, !0);
          m > 0 && !e ? g(t) : t();
        }
      },
      O = () => {
        (a ? !i : !l) &&
          (H(!0),
          y(() => {
            H(!1);
          }));
      },
      R = (t) => {
        k(an, t, !0), k(an, t, !1);
      },
      P = (t) => {
        f(t) && ((i = a), a && H(!0));
      },
      W = [
        x,
        v,
        w,
        p,
        () => u(),
        G(A, "pointerover", P, { A: !0 }),
        G(A, "pointerenter", P),
        G(A, "pointerleave", (t) => {
          f(t) && ((i = !1), a && H(!1));
        }),
        G(A, "pointermove", (t) => {
          f(t) && c && O();
        }),
        G(S, "scroll", (t) => {
          h(() => {
            Y(), O();
          }),
            s(t),
            C();
        }),
      ];
    return [
      () => D(yt, tt(W, T())),
      ({ It: t, Dt: e, Zt: r, tn: s }) => {
        const { nn: i, sn: f, en: h, cn: p } = s || {},
          { Ct: y, dt: v } = r || {},
          { ct: w } = n,
          { k: g } = Ct(),
          { K: x, rn: E } = o,
          [T, A] = t("showNativeOverlaidScrollbars"),
          [O, P] = t("scrollbars.theme"),
          [W, I] = t("scrollbars.visibility"),
          [X, q] = t("scrollbars.autoHide"),
          [j, _] = t("scrollbars.autoHideSuspend"),
          [K] = t("scrollbars.autoHideDelay"),
          [U, z] = t("scrollbars.dragScroll"),
          [F, N] = t("scrollbars.clickScroll"),
          [V, B] = t("overflow"),
          Z = v && !e,
          J = E.x || E.y,
          Q = i || f || p || y || e,
          tt = h || I || B,
          et = T && g.x && g.y,
          nt = (t, e, n) => {
            const o =
              t.includes(Xt) && (W === Dt || ("auto" === W && e === Xt));
            return k(_s, o, n), o;
          };
        if (
          ((m = K),
          Z &&
            (j && J
              ? (R(!1),
                u(),
                b(() => {
                  u = G(S, "scroll", D(R, !0), { A: !0 });
                }))
              : R(!0)),
          A && k(Rs, et),
          P && (k(d), k(O, !0), (d = O)),
          _ && !j && R(!0),
          q &&
            ((c = "move" === X),
            (a = "leave" === X),
            (l = "never" === X),
            H(l, !0)),
          z && k(Bs, U),
          N && k(Fs, !!F),
          tt)
        ) {
          const t = nt(V.x, x.x, !0),
            e = nt(V.y, x.y, !1);
          k(Ns, !(t && e));
        }
        Q &&
          (Y(),
          $(),
          C(),
          p && M(),
          k(Xn, !E.x, !0),
          k(Xn, !E.y, !1),
          k(Ps, w && !L));
      },
      {},
      E,
    ];
  },
  rc = (t) => {
    const e = Ct(),
      { U: n, R: o } = e,
      { elements: r } = n(),
      { padding: s, viewport: i, content: c } = r,
      a = Ae(t),
      l = a ? {} : t,
      { elements: d } = l,
      { padding: u, viewport: m, content: f } = d || {},
      h = a ? t : l.target,
      p = Ao(h),
      y = h.ownerDocument,
      v = y.documentElement,
      b = () => y.defaultView || ft,
      w = D(Us, [h]),
      g = D(Bo, [h]),
      x = D(qt, ""),
      E = D(w, x, i),
      T = D(g, x, c),
      A = E(m),
      S = A === h,
      L = S && p,
      k = !S && T(f),
      $ = !S && A === k,
      Y = L ? v : A,
      M = L ? Y : h,
      C = !S && g(x, s, u),
      H = !$ && k,
      O = [H, Y, C, M].map((t) => Ae(t) && !ee(t) && t),
      R = (t) => t && ro(O, t),
      P =
        !R(Y) &&
        ((t) => {
          const e = Ut(t),
            n = Oe(t),
            o = Lt(t, ho),
            r = Lt(t, yo);
          return (n.w - e.w > 0 && !Wt(o)) || (n.h - e.h > 0 && !Wt(r));
        })(Y)
          ? Y
          : h,
      W = L ? v : Y,
      I = {
        vt: h,
        ht: M,
        ot: Y,
        ln: C,
        bt: H,
        gt: W,
        Qt: L ? y : Y,
        an: p ? v : P,
        Kt: y,
        wt: p,
        Mt: a,
        nt: S,
        un: b,
        yt: (t) => bn(Y, kt, t),
        St: (t, e) => Ce(Y, kt, t, e),
        Ot: () => Ce(W, kt, ks, !0),
      },
      { vt: X, ht: q, ln: j, ot: _, bt: K } = I,
      U = [
        () => {
          xt(q, [Ht, Ue]), xt(X, Ue), p && xt(v, [Ue, Ht]);
        },
      ];
    let z = Qe([K, _, j, q, X].find((t) => t && !R(t)));
    const F = L ? X : K || _,
      N = D(yt, U);
    return [
      I,
      () => {
        const t = b(),
          e = tn(),
          n = (t) => {
            pt(ee(t), Qe(t)), jt(t);
          },
          r = (t) => G(t, "focusin focusout focus blur", Ho, { I: !0, H: !1 }),
          s = "tabindex",
          i = yn(_, s),
          c = r(e);
        return (
          Ot(q, Ht, S ? "" : Ts),
          Ot(j, rn, ""),
          Ot(_, kt, ""),
          Ot(K, Un, ""),
          S || (Ot(_, s, i || "-1"), p && Ot(v, qn, "")),
          pt(F, z),
          pt(q, j),
          pt(j || q, !S && _),
          pt(_, K),
          tt(U, [
            c,
            () => {
              const t = tn(),
                e = R(_),
                o = e && t === _ ? X : t,
                c = r(o);
              xt(j, rn),
                xt(K, Un),
                xt(_, kt),
                p && xt(v, qn),
                i ? Ot(_, s, i) : xt(_, s),
                R(K) && n(K),
                e && n(_),
                R(j) && n(j),
                sn(o),
                c();
            },
          ]),
          o && !S && (gn(_, kt, Mo), tt(U, D(xt, _, kt))),
          sn(!S && p && e === X && t.top === t ? _ : e),
          c(),
          (z = 0),
          N
        );
      },
      N,
    ];
  },
  ic =
    ({ bt: t }) =>
    ({ Zt: e, _n: n, Dt: o }) => {
      const { xt: r } = e || {},
        { $t: s } = n;
      t && (r || o) && ne(t, { [Re]: s && "100%" });
    },
  ac = ({ ht: t, ln: e, ot: n, nt: o }, r) => {
    const [s, i] = mt({ i: ps, o: In() }, D(In, t, "padding", ""));
    return ({ It: t, Zt: c, _n: a, Dt: l }) => {
      let [d, u] = i(l);
      const { R: m } = Ct(),
        { ft: f, Ht: h, Ct: p } = c || {},
        { ct: y } = a,
        [v, b] = t("paddingAbsolute");
      (f || u || l || h) && ([d, u] = s(l));
      const w = !o && (b || p || u);
      if (w) {
        const t = !v || (!e && !m),
          o = d.r + d.l,
          s = d.t + d.b,
          i = {
            [mo]: t && !y ? -o : 0,
            [po]: t ? -s : 0,
            [fo]: t && y ? -o : 0,
            top: t ? -d.t : 0,
            right: t ? (y ? -d.r : "auto") : 0,
            left: t ? (y ? "auto" : -d.l) : 0,
            [He]: t && `calc(100% + ${o}px)`,
          },
          c = {
            [io]: t ? d.t : 0,
            [ao]: t ? d.r : 0,
            [uo]: t ? d.b : 0,
            [lo]: t ? d.l : 0,
          };
        ne(e || n, i),
          ne(n, c),
          Y(r, { ln: d, dn: !t, rt: e ? c : Y({}, i, c) });
      }
      return { fn: w };
    };
  },
  lc = (t, e) => {
    const n = Ct(),
      { ht: o, ln: r, ot: s, nt: i, Qt: c, gt: a, wt: l, St: d, un: u } = t,
      { R: m } = n,
      f = l && i,
      h = D(so, 0),
      p = {
        display: () => !1,
        direction: (t) => "ltr" !== t,
        flexDirection: (t) => t.endsWith("-reverse"),
        writingMode: (t) => "horizontal-tb" !== t,
      },
      y = wt(p),
      v = { i: go, o: { w: 0, h: 0 } },
      b = { i: ge, o: {} },
      w = (t) => {
        d(Io, !f && t);
      },
      [g, x] = mt(v, D(wn, s)),
      [E, T] = mt(v, D(Oe, s)),
      [A, S] = mt(v),
      [L] = mt(b),
      [k, $] = mt(v),
      [M] = mt(b),
      [C] = mt({ i: (t, e) => Pe(t, e, y), o: {} }, () =>
        Ss(s) ? Lt(s, y) : {},
      ),
      [H, O] = mt({ i: (t, e) => ge(t.D, e.D) && ge(t.M, e.M), o: Ro() }),
      R = ce(Yo),
      P = (t, e) => `${e ? As : Cs}${ms(t)}`;
    return ({ It: i, Zt: l, _n: v, Dt: b }, { fn: D }) => {
      const { ft: W, Ht: I, Ct: X, dt: q, zt: j } = l || {},
        _ = R && R.tt(t, e, v, n, i),
        { it: K, ut: U, _t: z } = _ || {},
        [F, N] = Js(i, n),
        [V, B] = i("overflow"),
        Z = Wt(V.x),
        J = Wt(V.y);
      let Q = x(b),
        tt = T(b),
        et = S(b),
        nt = $(b);
      N && m && d(Mo, !F);
      {
        bn(o, Ht, ve) && w(!0);
        const [t] = U ? U() : [],
          [e] = (Q = g(b)),
          [n] = (tt = E(b)),
          r = Lo(s),
          i = f && ws(u()),
          c = { w: h(n.w + e.w), h: h(n.h + e.h) },
          a = {
            w: h((i ? i.w : r.w + h(r.w - n.w)) + e.w),
            h: h((i ? i.h : r.h + h(r.h - n.h)) + e.h),
          };
        t && t(),
          (nt = k(a)),
          (et = A(
            ((t, e) => {
              const n = ft.devicePixelRatio % 1 != 0 ? 1 : 0,
                o = { w: h(t.w - e.w), h: h(t.h - e.h) };
              return { w: o.w > n ? o.w : 0, h: o.h > n ? o.h : 0 };
            })(c, a),
            b,
          ));
      }
      const [ot, rt] = nt,
        [st, it] = et,
        [ct, at] = tt,
        [lt, dt] = Q,
        [ut, mt] = L({ x: st.w > 0, y: st.h > 0 }),
        pt =
          (Z && J && (ut.x || ut.y)) ||
          (Z && ut.x && !ut.y) ||
          (J && ut.y && !ut.x),
        yt = D || X || j || dt || at || rt || it || B || N || !0,
        vt = Qs(ut, V),
        [bt, gt] = M(vt.K),
        [xt, Tt] = C(b),
        At = X || q || Tt || mt || b,
        [St, Lt] = At
          ? H(
              ((t) => {
                if (
                  !y.some((e) => {
                    const n = t[e];
                    return n && p[e](n);
                  })
                )
                  return { D: { x: 0, y: 0 }, M: { x: 1, y: 1 } };
                w(!0);
                const e = ht(a),
                  n = d(Ls, !0),
                  o = G(
                    c,
                    Xt,
                    (t) => {
                      const n = ht(a);
                      t.isTrusted && n.x === e.x && n.y === e.y && Do(t);
                    },
                    { I: !0, A: !0 },
                  );
                Et(a, { x: 0, y: 0 }), n();
                const r = ht(a),
                  s = Oe(a);
                Et(a, { x: s.w, y: s.h });
                const i = ht(a);
                Et(a, { x: i.x - r.x < 1 && -s.w, y: i.y - r.y < 1 && -s.h });
                const l = ht(a);
                return Et(a, e), un(() => o()), { D: r, M: l };
              })(xt),
              b,
            )
          : O();
      return (
        yt &&
          (gt &&
            ((t) => {
              const e = (t) => [Dt, _t, Xt].map((e) => P(e, t)),
                n = e(!0).concat(e()).join(" ");
              d(n),
                d(
                  wt(t)
                    .map((e) => P(t[e], "x" === e))
                    .join(" "),
                  !0,
                );
            })(vt.K),
          z && K && ne(s, z(vt, v, K(vt, ct, lt)))),
        w(!1),
        Ce(o, Ht, ve, pt),
        Ce(r, rn, ve, pt),
        Y(e, {
          K: bt,
          Vt: { x: ot.w, y: ot.h },
          Rt: { x: st.w, y: st.h },
          rn: ut,
          Lt: xs(St, st),
        }),
        { en: gt, nn: rt, sn: it, cn: Lt || it, vn: At }
      );
    };
  },
  uc = (t) => {
    const [e, n, o] = rc(t),
      r = {
        ln: { t: 0, r: 0, b: 0, l: 0 },
        dn: !1,
        rt: { [mo]: 0, [po]: 0, [fo]: 0, [io]: 0, [ao]: 0, [uo]: 0, [lo]: 0 },
        Vt: { x: 0, y: 0 },
        Rt: { x: 0, y: 0 },
        K: { x: _t, y: _t },
        rn: { x: !1, y: !1 },
        Lt: Ro(),
      },
      { vt: s, gt: i, nt: c, Ot: a } = e,
      { R: l, k: d } = Ct(),
      u = !l && (d.x || d.y),
      m = [ic(e), ac(e, r), lc(e, r)];
    return [
      n,
      (t) => {
        const e = {},
          n = u && ht(i),
          o = n && a();
        return (
          W(m, (n) => {
            Y(e, n(t, e) || {});
          }),
          Et(i, n),
          o && o(),
          !c && Et(s, 0),
          e
        );
      },
      r,
      e,
      o,
    ];
  },
  dc = (t, e, n, o, r) => {
    let s = !1;
    const i = Vn(e, {}),
      [c, a, l, d, u] = uc(t),
      [m, f, h] = nc(d, l, i, (t) => {
        w({}, t);
      }),
      [p, y, , v] = cc(t, e, h, l, d, r),
      b = (t) => wt(t).some((e) => !!t[e]),
      w = (t, r) => {
        if (n()) return !1;
        const { pn: i, Dt: c, At: l, hn: d } = t,
          u = i || {},
          m = !!c || !s,
          p = { It: Vn(e, u, m), pn: u, Dt: m };
        if (d) return y(p), !1;
        const v = r || f(Y({}, p, { At: l })),
          w = a(Y({}, p, { _n: h, Zt: v }));
        y(Y({}, p, { Zt: v, tn: w }));
        const g = b(v),
          x = b(w),
          E = g || x || !hn(u) || m;
        return (s = !0), E && o(t, { Zt: v, tn: w }), E;
      };
    return [
      () => {
        const { an: t, gt: e, Ot: n } = d,
          o = ht(t),
          r = [m(), c(), p()],
          s = n();
        return Et(e, o), s(), D(yt, r);
      },
      w,
      () => ({ gn: h, bn: l }),
      { wn: d, yn: v },
      u,
    ];
  },
  Rt = (t, e, n) => {
    const { N: o } = Ct(),
      r = Ae(t),
      s = r ? t : t.target,
      i = zo(s);
    if (e && !i) {
      let i = !1;
      const c = [],
        a = {},
        l = (t) => {
          const e = vo(t),
            n = ce(Zs);
          return n ? n(e, !0) : e;
        },
        d = Y({}, o(), l(e)),
        [u, m, f] = cn(),
        [h, p, y] = cn(n),
        v = (t, e) => {
          y(t, e), f(t, e);
        },
        [b, w, g, x, E] = dc(
          t,
          d,
          () => i,
          ({ pn: t, Dt: e }, { Zt: n, tn: o }) => {
            const { ft: r, Ct: s, xt: i, Ht: c, Et: a, dt: l } = n,
              { nn: d, sn: u, en: m, cn: f } = o;
            v("updated", [
              A,
              {
                updateHints: {
                  sizeChanged: !!r,
                  directionChanged: !!s,
                  heightIntrinsicChanged: !!i,
                  overflowEdgeChanged: !!d,
                  overflowAmountChanged: !!u,
                  overflowStyleChanged: !!m,
                  scrollCoordinatesChanged: !!f,
                  contentMutation: !!c,
                  hostMutation: !!a,
                  appear: !!l,
                },
                changedOptions: t || {},
                force: !!e,
              },
            ]);
          },
          (t) => v("scroll", [A, t]),
        ),
        T = (t) => {
          js(s), yt(c), (i = !0), v("destroyed", [A, t]), m(), p();
        },
        A = {
          options(t, e) {
            if (t) {
              const n = e ? o() : {},
                r = Po(d, Y(n, l(t)));
              hn(r) || (Y(d, r), w({ pn: r }));
            }
            return Y({}, d);
          },
          on: h,
          off: (t, e) => {
            t && e && p(t, e);
          },
          state() {
            const { gn: t, bn: e } = g(),
              { ct: n } = t,
              { Vt: o, Rt: r, K: s, rn: c, ln: a, dn: l, Lt: d } = e;
            return Y(
              {},
              {
                overflowEdge: o,
                overflowAmount: r,
                overflowStyle: s,
                hasOverflow: c,
                scrollCoordinates: { start: d.D, end: d.M },
                padding: a,
                paddingAbsolute: l,
                directionRTL: n,
                destroyed: i,
              },
            );
          },
          elements() {
            const { vt: t, ht: e, ln: n, ot: o, bt: r, gt: s, Qt: i } = x.wn,
              { Xt: c, Gt: a } = x.yn,
              l = (t) => {
                const { Pt: e, Ut: n, Tt: o } = t;
                return { scrollbar: o, track: n, handle: e };
              },
              d = (t) => {
                const { Yt: e, Wt: n } = t,
                  o = l(e[0]);
                return Y({}, o, {
                  clone: () => {
                    const t = l(n());
                    return w({ hn: !0 }), t;
                  },
                });
              };
            return Y(
              {},
              {
                target: t,
                host: e,
                padding: n || o,
                viewport: o,
                content: r || o,
                scrollOffsetElement: s,
                scrollEventElement: i,
                scrollbarHorizontal: d(c),
                scrollbarVertical: d(a),
              },
            );
          },
          update: (t) => w({ Dt: t, At: !0 }),
          destroy: D(T, !1),
          plugin: (t) => a[wt(t)[0]],
        };
      return (
        tt(c, [E]),
        Xs(s, A),
        Uo(Vo, Rt, [A, u, a]),
        Ys(x.wn.wt, !r && t.cancel)
          ? (T(!0), A)
          : (tt(c, b()), v("initialized", [A]), A.update(), A)
      );
    }
    return i;
  };
function Tn(t, e) {
  document.addEventListener("click", (n) => {
    let o = document.getElementById(t),
      r = n.target;
    for (let t of e) {
      let e = document.getElementById(t);
      if (e == r || e?.contains(r)) return;
    }
    o.classList.add("closed");
  });
}
function fc() {
  "dark" === localStorage.theme ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
    ? (document.documentElement.classList.add("dark"),
      (localStorage.theme = "dark"))
    : (document.documentElement.classList.remove("dark"),
      (localStorage.theme = "light"));
}
function mc() {
  is(as());
}
function pc() {
  const t = document.getElementById("banner-wrapper");
  document.documentElement.hasAttribute("isHome")
    ? (t.classList.remove("banner-else"), t.classList.add("banner-home"))
    : (t.classList.remove("banner-home"), t.classList.add("banner-else"));
}
function hc() {
  Rt(
    {
      target: document.querySelector("body"),
      cancel: { nativeScrollbarsOverlaid: !0 },
    },
    {
      scrollbars: {
        theme: "scrollbar-base scrollbar-auto py-1",
        autoHide: "move",
        autoHideDelay: 500,
        autoHideSuspend: !1,
      },
    },
  ),
    document.querySelectorAll("pre").forEach((t) => {
      Rt(t, {
        scrollbars: {
          theme: "scrollbar-base scrollbar-dark px-2",
          autoHide: "leave",
          autoHideDelay: 500,
          autoHideSuspend: !1,
        },
      });
    });
}
function jo() {
  pc(), fc(), mc(), hc();
}
(Rt.plugin = (t) => {
  const e = At(t),
    n = e ? t : [t],
    o = n.map((t) => Uo(t, Rt)[0]);
  return Ks(n), e ? o : o[0];
}),
  (Rt.valid = (t) => {
    const e = t && t.elements,
      n = vt(e) && e();
    return Te(n) && !!zo(n.target);
  }),
  (Rt.env = () => {
    const { T: t, k: e, R: n, V: o, B: r, F: s, U: i, P: c, N: a, q: l } = Ct();
    return Y(
      {},
      {
        scrollbarsSize: t,
        scrollbarsOverlaid: e,
        scrollbarsHiding: n,
        scrollTimeline: o,
        staticDefaultInitialization: r,
        staticDefaultOptions: s,
        getDefaultInitialization: i,
        setDefaultInitialization: c,
        getDefaultOptions: a,
        setDefaultOptions: l,
      },
    );
  }),
  (Rt.nonce = Vs),
  Tn("display-setting", ["display-setting", "display-settings-switch"]),
  Tn("nav-menu-panel", ["nav-menu-panel", "nav-menu-switch"]),
  Tn("search-panel", ["search-panel", "search-bar", "search-switch"]),
  jo(),
  document.addEventListener("astro:after-swap", jo);
const Zn = () => {
  window.swup.hooks.on("link:click", () => {
    document.documentElement.style.setProperty("--content-delay", "0ms");
  });
};
function yc() {
  "dark" === localStorage.theme
    ? (document.documentElement.classList.remove("dark"),
      (localStorage.theme = "light"))
    : (document.documentElement.classList.add("dark"),
      (localStorage.theme = "dark"));
}
function Wo() {
  document
    .getElementById("scheme-switch")
    .addEventListener("click", function () {
      yc();
    }),
    document
      .getElementById("display-settings-switch")
      .addEventListener("click", function () {
        document.getElementById("display-setting").classList.toggle("closed");
      }),
    document
      .getElementById("nav-menu-switch")
      .addEventListener("click", function () {
        document.getElementById("nav-menu-panel").classList.toggle("closed");
      });
}
window.swup.hooks ? Zn() : document.addEventListener("swup:enable", Zn),
  Wo(),
  document.addEventListener(
    "astro:after-swap",
    () => {
      Wo();
    },
    { once: !1 },
  );
class gc extends HTMLElement {
  constructor() {
    if (
      (super(),
      void 0 === this.dataset.isCollapsed || !1 === this.dataset.isCollapsed)
    )
      return;
    const t = this.dataset.id,
      e = this.querySelector(".expand-btn"),
      n = this.querySelector(`#${t}`);
    e.addEventListener("click", () => {
      n.classList.remove("collapsed"), e.classList.add("hidden");
    });
  }
}
customElements.define("widget-layout", gc);
const Yt = "data-astro-transition-persist";
function bc(t) {
  for (const e of document.scripts)
    for (const n of t.scripts)
      if (
        !n.hasAttribute("data-astro-rerun") &&
        ((!e.src && e.textContent === n.textContent) ||
          (e.src && e.type === n.type && e.src === n.src))
      ) {
        n.dataset.astroExec = "";
        break;
      }
}
function vc(t) {
  const e = document.documentElement,
    n = [...e.attributes].filter(
      ({ name: t }) => (e.removeAttribute(t), t.startsWith("data-astro-")),
    );
  [...t.documentElement.attributes, ...n].forEach(({ name: t, value: n }) =>
    e.setAttribute(t, n),
  );
}
function wc(t) {
  for (const e of Array.from(document.head.children)) {
    const n = Ec(e, t);
    n ? n.remove() : e.remove();
  }
  document.head.append(...t.head.children);
}
function Sc(t, e) {
  e.replaceWith(t);
  for (const n of e.querySelectorAll(`[${Yt}]`)) {
    const e = n.getAttribute(Yt),
      o = t.querySelector(`[${Yt}="${e}"]`);
    o &&
      (o.replaceWith(n),
      "astro-island" === o.localName &&
        Tc(n) &&
        (n.setAttribute("ssr", ""),
        n.setAttribute("props", o.getAttribute("props"))));
  }
}
const xc = () => {
    const t = document.activeElement;
    if (t?.closest(`[${Yt}]`)) {
      if (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement) {
        const e = t.selectionStart,
          n = t.selectionEnd;
        return () => Xe({ activeElement: t, start: e, end: n });
      }
      return () => Xe({ activeElement: t });
    }
    return () => Xe({ activeElement: null });
  },
  Xe = ({ activeElement: t, start: e, end: n }) => {
    t &&
      (t.focus(),
      (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement) &&
        ("number" == typeof e && (t.selectionStart = e),
        "number" == typeof n && (t.selectionEnd = n)));
  },
  Ec = (t, e) => {
    const n = t.getAttribute(Yt),
      o = n && e.head.querySelector(`[${Yt}="${n}"]`);
    if (o) return o;
    if (t.matches("link[rel=stylesheet]")) {
      const n = t.getAttribute("href");
      return e.head.querySelector(`link[rel=stylesheet][href="${n}"]`);
    }
    return null;
  },
  Tc = (t) => {
    const e = t.dataset.astroTransitionPersistProps;
    return null == e || "false" === e;
  },
  Ac = (t) => {
    bc(t), vc(t), wc(t);
    const e = xc();
    Sc(t.body, document.body), e();
  },
  Cc = "astro:before-preparation",
  Oc = "astro:after-preparation",
  kc = "astro:before-swap",
  Lc = "astro:after-swap",
  $c = (t) => document.dispatchEvent(new Event(t));
class Ko extends Event {
  from;
  to;
  direction;
  navigationType;
  sourceElement;
  info;
  newDocument;
  signal;
  constructor(t, e, n, o, r, s, i, c, a, l) {
    super(t, e),
      (this.from = n),
      (this.to = o),
      (this.direction = r),
      (this.navigationType = s),
      (this.sourceElement = i),
      (this.info = c),
      (this.newDocument = a),
      (this.signal = l),
      Object.defineProperties(this, {
        from: { enumerable: !0 },
        to: { enumerable: !0, writable: !0 },
        direction: { enumerable: !0, writable: !0 },
        navigationType: { enumerable: !0 },
        sourceElement: { enumerable: !0 },
        info: { enumerable: !0 },
        newDocument: { enumerable: !0, writable: !0 },
        signal: { enumerable: !0 },
      });
  }
}
class Dc extends Ko {
  formData;
  loader;
  constructor(t, e, n, o, r, s, i, c, a, l) {
    super(Cc, { cancelable: !0 }, t, e, n, o, r, s, i, c),
      (this.formData = a),
      (this.loader = l.bind(this, this)),
      Object.defineProperties(this, {
        formData: { enumerable: !0 },
        loader: { enumerable: !0, writable: !0 },
      });
  }
}
class Hc extends Ko {
  direction;
  viewTransition;
  swap;
  constructor(t, e) {
    super(
      kc,
      void 0,
      t.from,
      t.to,
      t.direction,
      t.navigationType,
      t.sourceElement,
      t.info,
      t.newDocument,
      t.signal,
    ),
      (this.direction = t.direction),
      (this.viewTransition = e),
      (this.swap = () => Ac(this.newDocument)),
      Object.defineProperties(this, {
        direction: { enumerable: !0 },
        viewTransition: { enumerable: !0 },
        swap: { enumerable: !0, writable: !0 },
      });
  }
}
async function Rc(t, e, n, o, r, s, i, c, a) {
  const l = new Dc(t, e, n, o, r, s, window.document, i, c, a);
  return (
    document.dispatchEvent(l) &&
      (await l.loader(),
      l.defaultPrevented ||
        ($c(Oc),
        "traverse" !== l.navigationType &&
          An({ scrollX: scrollX, scrollY: scrollY }))),
    l
  );
}
function Pc(t, e) {
  const n = new Hc(t, e);
  return document.dispatchEvent(n), n.swap(), n;
}
const Ic = history.pushState.bind(history),
  ke = history.replaceState.bind(history),
  An = (t) => {
    history.state &&
      ((history.scrollRestoration = "manual"),
      ke({ ...history.state, ...t }, ""));
  },
  Cn = !!document.startViewTransition,
  On = () =>
    !!document.querySelector('[name="astro-view-transitions-enabled"]'),
  Zo = (t, e) => t.pathname === e.pathname && t.search === e.search;
let bt, Mt, _e;
const Go = (t) => document.dispatchEvent(new Event(t)),
  Jo = () => Go("astro:page-load"),
  Mc = () => {
    let t = document.createElement("div");
    t.setAttribute("aria-live", "assertive"),
      t.setAttribute("aria-atomic", "true"),
      (t.className = "astro-route-announcer"),
      document.body.append(t),
      setTimeout(() => {
        let e =
          document.title ||
          document.querySelector("h1")?.textContent ||
          location.pathname;
        t.textContent = e;
      }, 60);
  },
  Gn = "data-astro-transition-persist",
  Jn = "data-astro-transition",
  ln = "data-astro-transition-fallback";
let Qn,
  oe = 0;
async function _c(t, e) {
  try {
    const n = await fetch(t, e),
      o = (n.headers.get("content-type") ?? "").split(";", 1)[0].trim();
    return "text/html" !== o && "application/xhtml+xml" !== o
      ? null
      : {
          html: await n.text(),
          redirected: n.redirected ? n.url : void 0,
          mediaType: o,
        };
  } catch {
    return null;
  }
}
function Qo() {
  const t = document.querySelector('[name="astro-view-transitions-fallback"]');
  return t ? t.getAttribute("content") : "animate";
}
function Nc() {
  let t = Promise.resolve();
  for (const e of Array.from(document.scripts)) {
    if ("" === e.dataset.astroExec) continue;
    const n = e.getAttribute("type");
    if (n && "module" !== n && "text/javascript" !== n) continue;
    const o = document.createElement("script");
    o.innerHTML = e.innerHTML;
    for (const n of e.attributes) {
      if ("src" === n.name) {
        const e = new Promise((t) => {
          o.onload = o.onerror = t;
        });
        t = t.then(() => e);
      }
      o.setAttribute(n.name, n.value);
    }
    (o.dataset.astroExec = ""), e.replaceWith(o);
  }
  return t;
}
history.state
  ? ((oe = history.state.index),
    scrollTo({ left: history.state.scrollX, top: history.state.scrollY }))
  : On() &&
    (ke({ index: oe, scrollX: scrollX, scrollY: scrollY }, ""),
    (history.scrollRestoration = "manual"));
const ts = (t, e, n, o, r) => {
  const s = Zo(e, t),
    i = document.title;
  document.title = o;
  let c = !1;
  if (t.href !== location.href && !r)
    if ("replace" === n.history) {
      const e = history.state;
      ke(
        { ...n.state, index: e.index, scrollX: e.scrollX, scrollY: e.scrollY },
        "",
        t.href,
      );
    } else Ic({ ...n.state, index: ++oe, scrollX: 0, scrollY: 0 }, "", t.href);
  if (
    ((document.title = i),
    (_e = t),
    s || (scrollTo({ left: 0, top: 0, behavior: "instant" }), (c = !0)),
    r)
  )
    scrollTo(r.scrollX, r.scrollY);
  else {
    if (t.hash) {
      history.scrollRestoration = "auto";
      const e = history.state;
      (location.href = t.href),
        history.state ||
          (ke(e, ""), s && window.dispatchEvent(new PopStateEvent("popstate")));
    } else c || scrollTo({ left: 0, top: 0, behavior: "instant" });
    history.scrollRestoration = "manual";
  }
};
function Fc(t) {
  const e = [];
  for (const n of t.querySelectorAll("head link[rel=stylesheet]"))
    if (
      !document.querySelector(
        `[${Gn}="${n.getAttribute(Gn)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`,
      )
    ) {
      const t = document.createElement("link");
      t.setAttribute("rel", "preload"),
        t.setAttribute("as", "style"),
        t.setAttribute("href", n.getAttribute("href")),
        e.push(
          new Promise((e) => {
            ["load", "error"].forEach((n) => t.addEventListener(n, e)),
              document.head.append(t);
          }),
        );
    }
  return e;
}
async function to(t, e, n, o, r) {
  async function s(t) {
    const e = document.getAnimations();
    document.documentElement.setAttribute(ln, t);
    const n = document.getAnimations().filter(
      (t) =>
        !e.includes(t) &&
        !(function (t) {
          const e = t.effect;
          return (
            !!(e && e instanceof KeyframeEffect && e.target) &&
            "infinite" ===
              window.getComputedStyle(e.target, e.pseudoElement)
                .animationIterationCount
          );
        })(t),
    );
    return Promise.allSettled(n.map((t) => t.finished));
  }
  if ("animate" === r && !n.transitionSkipped && !t.signal.aborted)
    try {
      await s("old");
    } catch {}
  const i = document.title,
    c = Pc(t, n.viewTransition);
  ts(c.to, c.from, e, i, o),
    Go(Lc),
    "animate" === r &&
      (n.transitionSkipped || c.signal.aborted
        ? n.viewTransitionFinished()
        : s("new").finally(() => n.viewTransitionFinished()));
}
function Bc() {
  return bt?.controller.abort(), (bt = { controller: new AbortController() });
}
async function es(t, e, n, o, r) {
  const s = Bc();
  if (!On() || location.origin !== n.origin)
    return s === bt && (bt = void 0), void (location.href = n.href);
  const i = r ? "traverse" : "replace" === o.history ? "replace" : "push";
  if (
    ("traverse" !== i && An({ scrollX: scrollX, scrollY: scrollY }),
    Zo(e, n) && (("back" !== t && n.hash) || ("back" === t && e.hash)))
  )
    return ts(n, e, o, document.title, r), void (s === bt && (bt = void 0));
  const c = await Rc(
    e,
    n,
    t,
    i,
    o.sourceElement,
    o.info,
    s.controller.signal,
    o.formData,
    async function (t) {
      const e = t.to.href,
        n = { signal: t.signal };
      if (t.formData) {
        n.method = "POST";
        const e =
          t.sourceElement instanceof HTMLFormElement
            ? t.sourceElement
            : t.sourceElement instanceof HTMLElement &&
                "form" in t.sourceElement
              ? t.sourceElement.form
              : t.sourceElement?.closest("form");
        n.body =
          "application/x-www-form-urlencoded" ===
          e?.attributes.getNamedItem("enctype")?.value
            ? new URLSearchParams(t.formData)
            : t.formData;
      }
      const o = await _c(e, n);
      if (null === o) return void t.preventDefault();
      if (o.redirected) {
        const e = new URL(o.redirected);
        if (e.origin !== t.to.origin) return void t.preventDefault();
        t.to = e;
      }
      if (
        ((Qn ??= new DOMParser()),
        (t.newDocument = Qn.parseFromString(o.html, o.mediaType)),
        t.newDocument.querySelectorAll("noscript").forEach((t) => t.remove()),
        !t.newDocument.querySelector(
          '[name="astro-view-transitions-enabled"]',
        ) && !t.formData)
      )
        return void t.preventDefault();
      const r = Fc(t.newDocument);
      r.length && !t.signal.aborted && (await Promise.all(r));
    },
  );
  if (c.defaultPrevented || c.signal.aborted)
    return (
      s === bt && (bt = void 0),
      void (c.signal.aborted || (location.href = n.href))
    );
  const a = await (async function () {
    if (Mt && Mt.viewTransition) {
      try {
        Mt.viewTransition.skipTransition();
      } catch {}
      try {
        await Mt.viewTransition.updateCallbackDone;
      } catch {}
    }
    return (Mt = { transitionSkipped: !1 });
  })();
  if (c.signal.aborted) s === bt && (bt = void 0);
  else {
    if ((document.documentElement.setAttribute(Jn, c.direction), Cn))
      a.viewTransition = document.startViewTransition(
        async () => await to(c, o, a, r),
      );
    else {
      const t = (async () => {
        await Promise.resolve(), await to(c, o, a, r, Qo());
      })();
      a.viewTransition = {
        updateCallbackDone: t,
        ready: t,
        finished: new Promise((t) => (a.viewTransitionFinished = t)),
        skipTransition: () => {
          (a.transitionSkipped = !0),
            document.documentElement.removeAttribute(ln);
        },
      };
    }
    a.viewTransition.updateCallbackDone.finally(async () => {
      await Nc(), Jo(), Mc();
    }),
      a.viewTransition.finished.finally(() => {
        (a.viewTransition = void 0),
          a === Mt && (Mt = void 0),
          s === bt && (bt = void 0),
          document.documentElement.removeAttribute(Jn),
          document.documentElement.removeAttribute(ln);
      });
    try {
      await a.viewTransition.updateCallbackDone;
    } catch (t) {
      const e = t;
      console.log("[astro]", e.name, e.message, e.stack);
    }
  }
}
async function eo(t, e) {
  await es("forward", _e, new URL(t, location.href), e ?? {});
}
function zc(t) {
  if (!On() && t.state) return void location.reload();
  if (null === t.state) return;
  const e = history.state,
    n = e.index,
    o = n > oe ? "forward" : "back";
  (oe = n), es(o, _e, new URL(location.href), {}, e);
}
const no = () => {
  history.state &&
    (scrollX !== history.state.scrollX || scrollY !== history.state.scrollY) &&
    An({ scrollX: scrollX, scrollY: scrollY });
};
if (Cn || "none" !== Qo())
  if (
    ((_e = new URL(location.href)),
    addEventListener("popstate", zc),
    addEventListener("load", Jo),
    "onscrollend" in window)
  )
    addEventListener("scrollend", no);
  else {
    let t, e, n, o;
    const r = () =>
      o !== history.state?.index
        ? (clearInterval(t), void (t = void 0))
        : e === scrollY && n === scrollX
          ? (clearInterval(t), (t = void 0), void no())
          : ((e = scrollY), void (n = scrollX));
    addEventListener(
      "scroll",
      () => {
        void 0 === t &&
          ((o = history.state.index),
          (e = scrollY),
          (n = scrollX),
          (t = window.setInterval(r, 50)));
      },
      { passive: !0 },
    );
  }
for (const t of document.scripts) t.dataset.astroExec = "";
function Vc() {
  const t = document.querySelector('[name="astro-view-transitions-fallback"]');
  return t ? t.getAttribute("content") : "animate";
}
function oo(t) {
  return void 0 !== t.dataset.astroReload;
}
(Cn || "none" !== Vc()) &&
  (document.addEventListener("click", (t) => {
    let e = t.target;
    if (
      (t.composed && (e = t.composedPath()[0]),
      e instanceof Element && (e = e.closest("a, area")),
      !(
        e instanceof HTMLAnchorElement ||
        e instanceof SVGAElement ||
        e instanceof HTMLAreaElement
      ))
    )
      return;
    const n = e instanceof HTMLElement ? e.target : e.target.baseVal,
      o = e instanceof HTMLElement ? e.href : e.href.baseVal,
      r = new URL(o, location.href).origin;
    oo(e) ||
      e.hasAttribute("download") ||
      !e.href ||
      (n && "_self" !== n) ||
      r !== location.origin ||
      0 !== t.button ||
      t.metaKey ||
      t.ctrlKey ||
      t.altKey ||
      t.shiftKey ||
      t.defaultPrevented ||
      (t.preventDefault(),
      eo(o, {
        history: "replace" === e.dataset.astroHistory ? "replace" : "auto",
        sourceElement: e,
      }));
  }),
  document.addEventListener("submit", (t) => {
    let e = t.target;
    if ("FORM" !== e.tagName || t.defaultPrevented || oo(e)) return;
    const n = e,
      o = t.submitter,
      r = new FormData(n, o),
      s = "string" == typeof n.action ? n.action : n.getAttribute("action"),
      i = "string" == typeof n.method ? n.method : n.getAttribute("method");
    let c = o?.getAttribute("formaction") ?? s ?? location.pathname;
    const a = o?.getAttribute("formmethod") ?? i ?? "get";
    if ("dialog" === a || location.origin !== new URL(c, location.href).origin)
      return;
    const l = { sourceElement: o ?? n };
    if ("get" === a) {
      const t = new URLSearchParams(r),
        e = new URL(c);
      (e.search = t.toString()), (c = e.toString());
    } else l.formData = r;
    t.preventDefault(), eo(c, l);
  }),
  ls({ prefetchAll: !0 }));
