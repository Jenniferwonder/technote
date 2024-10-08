(() => {
  var bs = Object.defineProperty;
  var S = (n, e) => {
    for (var t in e) bs(n, t, { get: e[t], enumerable: !0 });
  };
  function z() {}
  function ft(n) {
    return n();
  }
  function _n() {
    return Object.create(null);
  }
  function G(n) {
    n.forEach(ft);
  }
  function $e(n) {
    return typeof n == "function";
  }
  function K(n, e) {
    return n != n
      ? e == e
      : n !== e || (n && typeof n == "object") || typeof n == "function";
  }
  var Qe;
  function ie(n, e) {
    return (
      Qe || (Qe = document.createElement("a")), (Qe.href = e), n === Qe.href
    );
  }
  function fn(n) {
    return Object.keys(n).length === 0;
  }
  var dn =
      typeof window < "u"
        ? window
        : typeof globalThis < "u"
          ? globalThis
          : global,
    de = class {
      constructor(e) {
        (this.options = e),
          (this._listeners = "WeakMap" in dn ? new WeakMap() : void 0);
      }
      observe(e, t) {
        return (
          this._listeners.set(e, t),
          this._getObserver().observe(e, this.options),
          () => {
            this._listeners.delete(e), this._observer.unobserve(e);
          }
        );
      }
      _getObserver() {
        var e;
        return (e = this._observer) !== null && e !== void 0
          ? e
          : (this._observer = new ResizeObserver((t) => {
              var s;
              for (let r of t)
                de.entries.set(r.target, r),
                  (s = this._listeners.get(r.target)) === null ||
                    s === void 0 ||
                    s(r);
            }));
      }
    };
  de.entries = "WeakMap" in dn ? new WeakMap() : void 0;
  var hn = !1;
  function Ts() {
    hn = !0;
  }
  function Cs() {
    hn = !1;
  }
  function b(n, e) {
    n.appendChild(e);
  }
  function y(n, e, t) {
    n.insertBefore(e, t || null);
  }
  function k(n) {
    n.parentNode && n.parentNode.removeChild(n);
  }
  function Q(n, e) {
    for (let t = 0; t < n.length; t += 1) n[t] && n[t].d(e);
  }
  function C(n) {
    return document.createElement(n);
  }
  function ks(n) {
    return document.createElementNS("http://www.w3.org/2000/svg", n);
  }
  function w(n) {
    return document.createTextNode(n);
  }
  function A() {
    return w(" ");
  }
  function x() {
    return w("");
  }
  function J(n, e, t, s) {
    return n.addEventListener(e, t, s), () => n.removeEventListener(e, t, s);
  }
  function E(n, e, t) {
    t == null
      ? n.removeAttribute(e)
      : n.getAttribute(e) !== t && n.setAttribute(e, t);
  }
  function ys(n) {
    return Array.from(n.childNodes);
  }
  function N(n, e) {
    (e = "" + e), n.data !== e && (n.data = e);
  }
  function dt(n, e) {
    n.value = e ?? "";
  }
  function B(n, e, t) {
    n.classList[t ? "add" : "remove"](e);
  }
  var et = class {
    constructor(e = !1) {
      (this.is_svg = !1), (this.is_svg = e), (this.e = this.n = null);
    }
    c(e) {
      this.h(e);
    }
    m(e, t, s = null) {
      this.e ||
        (this.is_svg
          ? (this.e = ks(t.nodeName))
          : (this.e = C(t.nodeType === 11 ? "TEMPLATE" : t.nodeName)),
        (this.t = t.tagName !== "TEMPLATE" ? t : t.content),
        this.c(e)),
        this.i(s);
    }
    h(e) {
      (this.e.innerHTML = e),
        (this.n = Array.from(
          this.e.nodeName === "TEMPLATE"
            ? this.e.content.childNodes
            : this.e.childNodes,
        ));
    }
    i(e) {
      for (let t = 0; t < this.n.length; t += 1) y(this.t, this.n[t], e);
    }
    p(e) {
      this.d(), this.h(e), this.i(this.a);
    }
    d() {
      this.n.forEach(k);
    }
  };
  var he;
  function fe(n) {
    he = n;
  }
  function mn() {
    if (!he)
      throw new Error("Function called outside component initialization");
    return he;
  }
  function ht(n) {
    mn().$$.on_mount.push(n);
  }
  function mt(n) {
    mn().$$.on_destroy.push(n);
  }
  var se = [];
  var le = [],
    re = [],
    ut = [],
    Ss = Promise.resolve(),
    ct = !1;
  function Ms() {
    ct || ((ct = !0), Ss.then(gn));
  }
  function _t(n) {
    re.push(n);
  }
  function pn(n) {
    ut.push(n);
  }
  var ot = new Set(),
    ne = 0;
  function gn() {
    if (ne !== 0) return;
    let n = he;
    do {
      try {
        for (; ne < se.length; ) {
          let e = se[ne];
          ne++, fe(e), As(e.$$);
        }
      } catch (e) {
        throw ((se.length = 0), (ne = 0), e);
      }
      for (fe(null), se.length = 0, ne = 0; le.length; ) le.pop()();
      for (let e = 0; e < re.length; e += 1) {
        let t = re[e];
        ot.has(t) || (ot.add(t), t());
      }
      re.length = 0;
    } while (se.length);
    for (; ut.length; ) ut.pop()();
    (ct = !1), ot.clear(), fe(n);
  }
  function As(n) {
    if (n.fragment !== null) {
      n.update(), G(n.before_update);
      let e = n.dirty;
      (n.dirty = [-1]),
        n.fragment && n.fragment.p(n.ctx, e),
        n.after_update.forEach(_t);
    }
  }
  function vs(n) {
    let e = [],
      t = [];
    re.forEach((s) => (n.indexOf(s) === -1 ? e.push(s) : t.push(s))),
      t.forEach((s) => s()),
      (re = e);
  }
  var xe = new Set(),
    ee;
  function ae() {
    ee = { r: 0, c: [], p: ee };
  }
  function oe() {
    ee.r || G(ee.c), (ee = ee.p);
  }
  function D(n, e) {
    n && n.i && (xe.delete(n), n.i(e));
  }
  function P(n, e, t, s) {
    if (n && n.o) {
      if (xe.has(n)) return;
      xe.add(n),
        ee.c.push(() => {
          xe.delete(n), s && (t && n.d(1), s());
        }),
        n.o(e);
    } else s && s();
  }
  function En(n, e) {
    P(n, 1, 1, () => {
      e.delete(n.key);
    });
  }
  function Rn(n, e, t, s, r, l, i, a, o, h, c, m) {
    let p = n.length,
      d = l.length,
      _ = p,
      u = {};
    for (; _--; ) u[n[_].key] = _;
    let f = [],
      T = new Map(),
      R = new Map(),
      M = [];
    for (_ = d; _--; ) {
      let v = m(r, l, _),
        H = t(v),
        O = i.get(H);
      O ? s && M.push(() => O.p(v, e)) : ((O = h(H, v)), O.c()),
        T.set(H, (f[_] = O)),
        H in u && R.set(H, Math.abs(_ - u[H]));
    }
    let U = new Set(),
      X = new Set();
    function V(v) {
      D(v, 1), v.m(a, c), i.set(v.key, v), (c = v.first), d--;
    }
    for (; p && d; ) {
      let v = f[d - 1],
        H = n[p - 1],
        O = v.key,
        W = H.key;
      v === H
        ? ((c = v.first), p--, d--)
        : T.has(W)
          ? !i.has(O) || U.has(O)
            ? V(v)
            : X.has(W)
              ? p--
              : R.get(O) > R.get(W)
                ? (X.add(O), V(v))
                : (U.add(W), p--)
          : (o(H, i), p--);
    }
    for (; p--; ) {
      let v = n[p];
      T.has(v.key) || o(v, i);
    }
    for (; d; ) V(f[d - 1]);
    return G(M), f;
  }
  var ws = [
      "allowfullscreen",
      "allowpaymentrequest",
      "async",
      "autofocus",
      "autoplay",
      "checked",
      "controls",
      "default",
      "defer",
      "disabled",
      "formnovalidate",
      "hidden",
      "inert",
      "ismap",
      "loop",
      "multiple",
      "muted",
      "nomodule",
      "novalidate",
      "open",
      "playsinline",
      "readonly",
      "required",
      "reversed",
      "selected",
    ],
    ma = new Set([...ws]);
  function bn(n, e, t) {
    let s = n.$$.props[e];
    s !== void 0 && ((n.$$.bound[s] = t), t(n.$$.ctx[s]));
  }
  function tt(n) {
    n && n.c();
  }
  function me(n, e, t, s) {
    let { fragment: r, after_update: l } = n.$$;
    r && r.m(e, t),
      s ||
        _t(() => {
          let i = n.$$.on_mount.map(ft).filter($e);
          n.$$.on_destroy ? n.$$.on_destroy.push(...i) : G(i),
            (n.$$.on_mount = []);
        }),
      l.forEach(_t);
  }
  function ue(n, e) {
    let t = n.$$;
    t.fragment !== null &&
      (vs(t.after_update),
      G(t.on_destroy),
      t.fragment && t.fragment.d(e),
      (t.on_destroy = t.fragment = null),
      (t.ctx = []));
  }
  function Hs(n, e) {
    n.$$.dirty[0] === -1 && (se.push(n), Ms(), n.$$.dirty.fill(0)),
      (n.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
  }
  function Y(n, e, t, s, r, l, i, a = [-1]) {
    let o = he;
    fe(n);
    let h = (n.$$ = {
      fragment: null,
      ctx: [],
      props: l,
      update: z,
      not_equal: r,
      bound: _n(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(e.context || (o ? o.$$.context : [])),
      callbacks: _n(),
      dirty: a,
      skip_bound: !1,
      root: e.target || o.$$.root,
    });
    i && i(h.root);
    let c = !1;
    if (
      ((h.ctx = t
        ? t(n, e.props || {}, (m, p, ...d) => {
            let _ = d.length ? d[0] : p;
            return (
              h.ctx &&
                r(h.ctx[m], (h.ctx[m] = _)) &&
                (!h.skip_bound && h.bound[m] && h.bound[m](_), c && Hs(n, m)),
              p
            );
          })
        : []),
      h.update(),
      (c = !0),
      G(h.before_update),
      (h.fragment = s ? s(h.ctx) : !1),
      e.target)
    ) {
      if (e.hydrate) {
        Ts();
        let m = ys(e.target);
        h.fragment && h.fragment.l(m), m.forEach(k);
      } else h.fragment && h.fragment.c();
      e.intro && D(n.$$.fragment),
        me(n, e.target, e.anchor, e.customElement),
        Cs(),
        gn();
    }
    fe(o);
  }
  var Fs;
  typeof HTMLElement == "function" &&
    (Fs = class extends HTMLElement {
      constructor() {
        super(), this.attachShadow({ mode: "open" });
      }
      connectedCallback() {
        let { on_mount: n } = this.$$;
        this.$$.on_disconnect = n.map(ft).filter($e);
        for (let e in this.$$.slotted) this.appendChild(this.$$.slotted[e]);
      }
      attributeChangedCallback(n, e, t) {
        this[n] = t;
      }
      disconnectedCallback() {
        G(this.$$.on_disconnect);
      }
      $destroy() {
        ue(this, 1), (this.$destroy = z);
      }
      $on(n, e) {
        if (!$e(e)) return z;
        let t = this.$$.callbacks[n] || (this.$$.callbacks[n] = []);
        return (
          t.push(e),
          () => {
            let s = t.indexOf(e);
            s !== -1 && t.splice(s, 1);
          }
        );
      }
      $set(n) {
        this.$$set &&
          !fn(n) &&
          ((this.$$.skip_bound = !0), this.$$set(n), (this.$$.skip_bound = !1));
      }
    });
  var q = class {
    $destroy() {
      ue(this, 1), (this.$destroy = z);
    }
    $on(e, t) {
      if (!$e(t)) return z;
      let s = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
      return (
        s.push(t),
        () => {
          let r = s.indexOf(t);
          r !== -1 && s.splice(r, 1);
        }
      );
    }
    $set(e) {
      this.$$set &&
        !fn(e) &&
        ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
    }
  };
  function I(n) {
    let e = typeof n == "string" ? n.charCodeAt(0) : n;
    return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
  }
  function $(n) {
    let e = typeof n == "string" ? n.charCodeAt(0) : n;
    return e >= 48 && e <= 57;
  }
  function Z(n) {
    return I(n) || $(n);
  }
  var Tn = [
    "art-lojban",
    "cel-gaulish",
    "no-bok",
    "no-nyn",
    "zh-guoyu",
    "zh-hakka",
    "zh-min",
    "zh-min-nan",
    "zh-xiang",
  ];
  var pt = {
    "en-gb-oed": "en-GB-oxendict",
    "i-ami": "ami",
    "i-bnn": "bnn",
    "i-default": null,
    "i-enochian": null,
    "i-hak": "hak",
    "i-klingon": "tlh",
    "i-lux": "lb",
    "i-mingo": null,
    "i-navajo": "nv",
    "i-pwn": "pwn",
    "i-tao": "tao",
    "i-tay": "tay",
    "i-tsu": "tsu",
    "sgn-be-fr": "sfb",
    "sgn-be-nl": "vgt",
    "sgn-ch-de": "sgg",
    "art-lojban": "jbo",
    "cel-gaulish": null,
    "no-bok": "nb",
    "no-nyn": "nn",
    "zh-guoyu": "cmn",
    "zh-hakka": "hak",
    "zh-min": null,
    "zh-min-nan": "nan",
    "zh-xiang": "hsn",
  };
  var Ns = {}.hasOwnProperty;
  function nt(n, e = {}) {
    let t = Cn(),
      s = String(n),
      r = s.toLowerCase(),
      l = 0;
    if (n == null) throw new Error("Expected string, got `" + n + "`");
    if (Ns.call(pt, r)) {
      let a = pt[r];
      return (e.normalize === void 0 || e.normalize === null || e.normalize) &&
        typeof a == "string"
        ? nt(a)
        : ((t[Tn.includes(r) ? "regular" : "irregular"] = s), t);
    }
    for (; I(r.charCodeAt(l)) && l < 9; ) l++;
    if (l > 1 && l < 9) {
      if (((t.language = s.slice(0, l)), l < 4)) {
        let a = 0;
        for (
          ;
          r.charCodeAt(l) === 45 &&
          I(r.charCodeAt(l + 1)) &&
          I(r.charCodeAt(l + 2)) &&
          I(r.charCodeAt(l + 3)) &&
          !I(r.charCodeAt(l + 4));

        ) {
          if (a > 2)
            return i(
              l,
              3,
              "Too many extended language subtags, expected at most 3 subtags",
            );
          t.extendedLanguageSubtags.push(s.slice(l + 1, l + 4)), (l += 4), a++;
        }
      }
      for (
        r.charCodeAt(l) === 45 &&
          I(r.charCodeAt(l + 1)) &&
          I(r.charCodeAt(l + 2)) &&
          I(r.charCodeAt(l + 3)) &&
          I(r.charCodeAt(l + 4)) &&
          !I(r.charCodeAt(l + 5)) &&
          ((t.script = s.slice(l + 1, l + 5)), (l += 5)),
          r.charCodeAt(l) === 45 &&
            (I(r.charCodeAt(l + 1)) &&
            I(r.charCodeAt(l + 2)) &&
            !I(r.charCodeAt(l + 3))
              ? ((t.region = s.slice(l + 1, l + 3)), (l += 3))
              : $(r.charCodeAt(l + 1)) &&
                $(r.charCodeAt(l + 2)) &&
                $(r.charCodeAt(l + 3)) &&
                !$(r.charCodeAt(l + 4)) &&
                ((t.region = s.slice(l + 1, l + 4)), (l += 4)));
        r.charCodeAt(l) === 45;

      ) {
        let a = l + 1,
          o = a;
        for (; Z(r.charCodeAt(o)); ) {
          if (o - a > 7)
            return i(o, 1, "Too long variant, expected at most 8 characters");
          o++;
        }
        if (o - a > 4 || (o - a > 3 && $(r.charCodeAt(a))))
          t.variants.push(s.slice(a, o)), (l = o);
        else break;
      }
      for (
        ;
        r.charCodeAt(l) === 45 &&
        !(
          r.charCodeAt(l + 1) === 120 ||
          !Z(r.charCodeAt(l + 1)) ||
          r.charCodeAt(l + 2) !== 45 ||
          !Z(r.charCodeAt(l + 3))
        );

      ) {
        let a = l + 2,
          o = 0;
        for (
          ;
          r.charCodeAt(a) === 45 &&
          Z(r.charCodeAt(a + 1)) &&
          Z(r.charCodeAt(a + 2));

        ) {
          let h = a + 1;
          for (a = h + 2, o++; Z(r.charCodeAt(a)); ) {
            if (a - h > 7)
              return i(
                a,
                2,
                "Too long extension, expected at most 8 characters",
              );
            a++;
          }
        }
        if (!o)
          return i(
            a,
            4,
            "Empty extension, extensions must have at least 2 characters of content",
          );
        t.extensions.push({
          singleton: s.charAt(l + 1),
          extensions: s.slice(l + 3, a).split("-"),
        }),
          (l = a);
      }
    } else l = 0;
    if (
      (l === 0 && r.charCodeAt(l) === 120) ||
      (r.charCodeAt(l) === 45 && r.charCodeAt(l + 1) === 120)
    ) {
      l = l ? l + 2 : 1;
      let a = l;
      for (; r.charCodeAt(a) === 45 && Z(r.charCodeAt(a + 1)); ) {
        let o = l + 1;
        for (a = o; Z(r.charCodeAt(a)); ) {
          if (a - o > 7)
            return i(
              a,
              5,
              "Too long private-use area, expected at most 8 characters",
            );
          a++;
        }
        t.privateuse.push(s.slice(l + 1, a)), (l = a);
      }
    }
    if (l !== s.length) return i(l, 6, "Found superfluous content after tag");
    return t;
    function i(a, o, h) {
      return e.warning && e.warning(h, o, a), e.forgiving ? t : Cn();
    }
  }
  function Cn() {
    return {
      language: null,
      extendedLanguageSubtags: [],
      script: null,
      region: null,
      variants: [],
      extensions: [],
      privateuse: [],
      irregular: null,
      regular: null,
    };
  }
  function kn(n, e, t) {
    let s = n.slice();
    return (s[8] = e[t][0]), (s[9] = e[t][1]), s;
  }
  function Os(n) {
    let e,
      t,
      s,
      r,
      l,
      i = n[0] && yn(n);
    return {
      c() {
        i && i.c(),
          (e = A()),
          (t = C("div")),
          (s = C("p")),
          (s.textContent = `${n[3](30)}`),
          (r = A()),
          (l = C("p")),
          (l.textContent = `${n[3](40)}`),
          E(
            s,
            "class",
            "pagefind-ui__result-title pagefind-ui__loading svelte-j9e30",
          ),
          E(
            l,
            "class",
            "pagefind-ui__result-excerpt pagefind-ui__loading svelte-j9e30",
          ),
          E(t, "class", "pagefind-ui__result-inner svelte-j9e30");
      },
      m(a, o) {
        i && i.m(a, o), y(a, e, o), y(a, t, o), b(t, s), b(t, r), b(t, l);
      },
      p(a, o) {
        a[0]
          ? i || ((i = yn(a)), i.c(), i.m(e.parentNode, e))
          : i && (i.d(1), (i = null));
      },
      d(a) {
        i && i.d(a), a && k(e), a && k(t);
      },
    };
  }
  function js(n) {
    let e,
      t,
      s,
      r,
      l = n[1].meta?.title + "",
      i,
      a,
      o,
      h,
      c = n[1].excerpt + "",
      m,
      p = n[0] && Sn(n),
      d = n[2].length && An(n);
    return {
      c() {
        p && p.c(),
          (e = A()),
          (t = C("div")),
          (s = C("p")),
          (r = C("a")),
          (i = w(l)),
          (o = A()),
          (h = C("p")),
          (m = A()),
          d && d.c(),
          E(r, "class", "pagefind-ui__result-link svelte-j9e30"),
          E(r, "href", (a = n[1].meta?.url || n[1].url)),
          E(s, "class", "pagefind-ui__result-title svelte-j9e30"),
          E(h, "class", "pagefind-ui__result-excerpt svelte-j9e30"),
          E(t, "class", "pagefind-ui__result-inner svelte-j9e30");
      },
      m(_, u) {
        p && p.m(_, u),
          y(_, e, u),
          y(_, t, u),
          b(t, s),
          b(s, r),
          b(r, i),
          b(t, o),
          b(t, h),
          (h.innerHTML = c),
          b(t, m),
          d && d.m(t, null);
      },
      p(_, u) {
        _[0]
          ? p
            ? p.p(_, u)
            : ((p = Sn(_)), p.c(), p.m(e.parentNode, e))
          : p && (p.d(1), (p = null)),
          u & 2 && l !== (l = _[1].meta?.title + "") && N(i, l),
          u & 2 && a !== (a = _[1].meta?.url || _[1].url) && E(r, "href", a),
          u & 2 && c !== (c = _[1].excerpt + "") && (h.innerHTML = c),
          _[2].length
            ? d
              ? d.p(_, u)
              : ((d = An(_)), d.c(), d.m(t, null))
            : d && (d.d(1), (d = null));
      },
      d(_) {
        p && p.d(_), _ && k(e), _ && k(t), d && d.d();
      },
    };
  }
  function yn(n) {
    let e;
    return {
      c() {
        (e = C("div")),
          E(
            e,
            "class",
            "pagefind-ui__result-thumb pagefind-ui__loading svelte-j9e30",
          );
      },
      m(t, s) {
        y(t, e, s);
      },
      d(t) {
        t && k(e);
      },
    };
  }
  function Sn(n) {
    let e,
      t = n[1].meta.image && Mn(n);
    return {
      c() {
        (e = C("div")),
          t && t.c(),
          E(e, "class", "pagefind-ui__result-thumb svelte-j9e30");
      },
      m(s, r) {
        y(s, e, r), t && t.m(e, null);
      },
      p(s, r) {
        s[1].meta.image
          ? t
            ? t.p(s, r)
            : ((t = Mn(s)), t.c(), t.m(e, null))
          : t && (t.d(1), (t = null));
      },
      d(s) {
        s && k(e), t && t.d();
      },
    };
  }
  function Mn(n) {
    let e, t, s;
    return {
      c() {
        (e = C("img")),
          E(e, "class", "pagefind-ui__result-image svelte-j9e30"),
          ie(e.src, (t = n[1].meta?.image)) || E(e, "src", t),
          E(e, "alt", (s = n[1].meta?.image_alt || n[1].meta?.title));
      },
      m(r, l) {
        y(r, e, l);
      },
      p(r, l) {
        l & 2 && !ie(e.src, (t = r[1].meta?.image)) && E(e, "src", t),
          l & 2 &&
            s !== (s = r[1].meta?.image_alt || r[1].meta?.title) &&
            E(e, "alt", s);
      },
      d(r) {
        r && k(e);
      },
    };
  }
  function An(n) {
    let e,
      t = n[2],
      s = [];
    for (let r = 0; r < t.length; r += 1) s[r] = vn(kn(n, t, r));
    return {
      c() {
        e = C("ul");
        for (let r = 0; r < s.length; r += 1) s[r].c();
        E(e, "class", "pagefind-ui__result-tags svelte-j9e30");
      },
      m(r, l) {
        y(r, e, l);
        for (let i = 0; i < s.length; i += 1) s[i] && s[i].m(e, null);
      },
      p(r, l) {
        if (l & 4) {
          t = r[2];
          let i;
          for (i = 0; i < t.length; i += 1) {
            let a = kn(r, t, i);
            s[i] ? s[i].p(a, l) : ((s[i] = vn(a)), s[i].c(), s[i].m(e, null));
          }
          for (; i < s.length; i += 1) s[i].d(1);
          s.length = t.length;
        }
      },
      d(r) {
        r && k(e), Q(s, r);
      },
    };
  }
  function vn(n) {
    let e,
      t = n[8].replace(/^(\w)/, wn) + "",
      s,
      r,
      l = n[9] + "",
      i,
      a;
    return {
      c() {
        (e = C("li")),
          (s = w(t)),
          (r = w(": ")),
          (i = w(l)),
          (a = A()),
          E(e, "class", "pagefind-ui__result-tag svelte-j9e30");
      },
      m(o, h) {
        y(o, e, h), b(e, s), b(e, r), b(e, i), b(e, a);
      },
      p(o, h) {
        h & 4 && t !== (t = o[8].replace(/^(\w)/, wn) + "") && N(s, t),
          h & 4 && l !== (l = o[9] + "") && N(i, l);
      },
      d(o) {
        o && k(e);
      },
    };
  }
  function zs(n) {
    let e;
    function t(l, i) {
      return l[1] ? js : Os;
    }
    let s = t(n, -1),
      r = s(n);
    return {
      c() {
        (e = C("li")), r.c(), E(e, "class", "pagefind-ui__result svelte-j9e30");
      },
      m(l, i) {
        y(l, e, i), r.m(e, null);
      },
      p(l, [i]) {
        s === (s = t(l, i)) && r
          ? r.p(l, i)
          : (r.d(1), (r = s(l)), r && (r.c(), r.m(e, null)));
      },
      i: z,
      o: z,
      d(l) {
        l && k(e), r.d();
      },
    };
  }
  var wn = (n) => n.toLocaleUpperCase();
  function Ds(n, e, t) {
    let { show_images: s = !0 } = e,
      { process_result: r = null } = e,
      { result: l = { data: async () => {} } } = e,
      i = ["title", "image", "image_alt", "url"],
      a,
      o = [],
      h = async (m) => {
        t(1, (a = await m.data())),
          t(1, (a = r?.(a) ?? a)),
          t(2, (o = Object.entries(a.meta).filter(([p]) => !i.includes(p))));
      },
      c = (m = 30) => ". ".repeat(Math.floor(10 + Math.random() * m));
    return (
      (n.$$set = (m) => {
        "show_images" in m && t(0, (s = m.show_images)),
          "process_result" in m && t(4, (r = m.process_result)),
          "result" in m && t(5, (l = m.result));
      }),
      (n.$$.update = () => {
        if (n.$$.dirty & 32) e: h(l);
      }),
      [s, a, o, c, r, l]
    );
  }
  var gt = class extends q {
      constructor(e) {
        super(),
          Y(this, e, Ds, zs, K, {
            show_images: 0,
            process_result: 4,
            result: 5,
          });
      }
    },
    Hn = gt;
  function Fn(n, e, t) {
    let s = n.slice();
    return (s[11] = e[t][0]), (s[12] = e[t][1]), s;
  }
  function Nn(n, e, t) {
    let s = n.slice();
    return (s[15] = e[t]), s;
  }
  function Us(n) {
    let e,
      t,
      s,
      r,
      l,
      i = n[0] && On(n);
    return {
      c() {
        i && i.c(),
          (e = A()),
          (t = C("div")),
          (s = C("p")),
          (s.textContent = `${n[5](30)}`),
          (r = A()),
          (l = C("p")),
          (l.textContent = `${n[5](40)}`),
          E(
            s,
            "class",
            "pagefind-ui__result-title pagefind-ui__loading svelte-4xnkmf",
          ),
          E(
            l,
            "class",
            "pagefind-ui__result-excerpt pagefind-ui__loading svelte-4xnkmf",
          ),
          E(t, "class", "pagefind-ui__result-inner svelte-4xnkmf");
      },
      m(a, o) {
        i && i.m(a, o), y(a, e, o), y(a, t, o), b(t, s), b(t, r), b(t, l);
      },
      p(a, o) {
        a[0]
          ? i || ((i = On(a)), i.c(), i.m(e.parentNode, e))
          : i && (i.d(1), (i = null));
      },
      d(a) {
        i && i.d(a), a && k(e), a && k(t);
      },
    };
  }
  function Is(n) {
    let e,
      t,
      s,
      r,
      l = n[1].meta?.title + "",
      i,
      a,
      o,
      h,
      c,
      m = n[0] && jn(n),
      p = n[4] && Dn(n),
      d = n[3],
      _ = [];
    for (let f = 0; f < d.length; f += 1) _[f] = Un(Nn(n, d, f));
    let u = n[2].length && In(n);
    return {
      c() {
        m && m.c(),
          (e = A()),
          (t = C("div")),
          (s = C("p")),
          (r = C("a")),
          (i = w(l)),
          (o = A()),
          p && p.c(),
          (h = A());
        for (let f = 0; f < _.length; f += 1) _[f].c();
        (c = A()),
          u && u.c(),
          E(r, "class", "pagefind-ui__result-link svelte-4xnkmf"),
          E(r, "href", (a = n[1].meta?.url || n[1].url)),
          E(s, "class", "pagefind-ui__result-title svelte-4xnkmf"),
          E(t, "class", "pagefind-ui__result-inner svelte-4xnkmf");
      },
      m(f, T) {
        m && m.m(f, T),
          y(f, e, T),
          y(f, t, T),
          b(t, s),
          b(s, r),
          b(r, i),
          b(t, o),
          p && p.m(t, null),
          b(t, h);
        for (let R = 0; R < _.length; R += 1) _[R] && _[R].m(t, null);
        b(t, c), u && u.m(t, null);
      },
      p(f, T) {
        if (
          (f[0]
            ? m
              ? m.p(f, T)
              : ((m = jn(f)), m.c(), m.m(e.parentNode, e))
            : m && (m.d(1), (m = null)),
          T & 2 && l !== (l = f[1].meta?.title + "") && N(i, l),
          T & 2 && a !== (a = f[1].meta?.url || f[1].url) && E(r, "href", a),
          f[4]
            ? p
              ? p.p(f, T)
              : ((p = Dn(f)), p.c(), p.m(t, h))
            : p && (p.d(1), (p = null)),
          T & 8)
        ) {
          d = f[3];
          let R;
          for (R = 0; R < d.length; R += 1) {
            let M = Nn(f, d, R);
            _[R] ? _[R].p(M, T) : ((_[R] = Un(M)), _[R].c(), _[R].m(t, c));
          }
          for (; R < _.length; R += 1) _[R].d(1);
          _.length = d.length;
        }
        f[2].length
          ? u
            ? u.p(f, T)
            : ((u = In(f)), u.c(), u.m(t, null))
          : u && (u.d(1), (u = null));
      },
      d(f) {
        m && m.d(f), f && k(e), f && k(t), p && p.d(), Q(_, f), u && u.d();
      },
    };
  }
  function On(n) {
    let e;
    return {
      c() {
        (e = C("div")),
          E(
            e,
            "class",
            "pagefind-ui__result-thumb pagefind-ui__loading svelte-4xnkmf",
          );
      },
      m(t, s) {
        y(t, e, s);
      },
      d(t) {
        t && k(e);
      },
    };
  }
  function jn(n) {
    let e,
      t = n[1].meta.image && zn(n);
    return {
      c() {
        (e = C("div")),
          t && t.c(),
          E(e, "class", "pagefind-ui__result-thumb svelte-4xnkmf");
      },
      m(s, r) {
        y(s, e, r), t && t.m(e, null);
      },
      p(s, r) {
        s[1].meta.image
          ? t
            ? t.p(s, r)
            : ((t = zn(s)), t.c(), t.m(e, null))
          : t && (t.d(1), (t = null));
      },
      d(s) {
        s && k(e), t && t.d();
      },
    };
  }
  function zn(n) {
    let e, t, s;
    return {
      c() {
        (e = C("img")),
          E(e, "class", "pagefind-ui__result-image svelte-4xnkmf"),
          ie(e.src, (t = n[1].meta?.image)) || E(e, "src", t),
          E(e, "alt", (s = n[1].meta?.image_alt || n[1].meta?.title));
      },
      m(r, l) {
        y(r, e, l);
      },
      p(r, l) {
        l & 2 && !ie(e.src, (t = r[1].meta?.image)) && E(e, "src", t),
          l & 2 &&
            s !== (s = r[1].meta?.image_alt || r[1].meta?.title) &&
            E(e, "alt", s);
      },
      d(r) {
        r && k(e);
      },
    };
  }
  function Dn(n) {
    let e,
      t = n[1].excerpt + "";
    return {
      c() {
        (e = C("p")),
          E(e, "class", "pagefind-ui__result-excerpt svelte-4xnkmf");
      },
      m(s, r) {
        y(s, e, r), (e.innerHTML = t);
      },
      p(s, r) {
        r & 2 && t !== (t = s[1].excerpt + "") && (e.innerHTML = t);
      },
      d(s) {
        s && k(e);
      },
    };
  }
  function Un(n) {
    let e,
      t,
      s,
      r = n[15].title + "",
      l,
      i,
      a,
      o,
      h = n[15].excerpt + "";
    return {
      c() {
        (e = C("div")),
          (t = C("p")),
          (s = C("a")),
          (l = w(r)),
          (a = A()),
          (o = C("p")),
          E(s, "class", "pagefind-ui__result-link svelte-4xnkmf"),
          E(s, "href", (i = n[15].url)),
          E(t, "class", "pagefind-ui__result-title svelte-4xnkmf"),
          E(o, "class", "pagefind-ui__result-excerpt svelte-4xnkmf"),
          E(e, "class", "pagefind-ui__result-nested svelte-4xnkmf");
      },
      m(c, m) {
        y(c, e, m),
          b(e, t),
          b(t, s),
          b(s, l),
          b(e, a),
          b(e, o),
          (o.innerHTML = h);
      },
      p(c, m) {
        m & 8 && r !== (r = c[15].title + "") && N(l, r),
          m & 8 && i !== (i = c[15].url) && E(s, "href", i),
          m & 8 && h !== (h = c[15].excerpt + "") && (o.innerHTML = h);
      },
      d(c) {
        c && k(e);
      },
    };
  }
  function In(n) {
    let e,
      t = n[2],
      s = [];
    for (let r = 0; r < t.length; r += 1) s[r] = Pn(Fn(n, t, r));
    return {
      c() {
        e = C("ul");
        for (let r = 0; r < s.length; r += 1) s[r].c();
        E(e, "class", "pagefind-ui__result-tags svelte-4xnkmf");
      },
      m(r, l) {
        y(r, e, l);
        for (let i = 0; i < s.length; i += 1) s[i] && s[i].m(e, null);
      },
      p(r, l) {
        if (l & 4) {
          t = r[2];
          let i;
          for (i = 0; i < t.length; i += 1) {
            let a = Fn(r, t, i);
            s[i] ? s[i].p(a, l) : ((s[i] = Pn(a)), s[i].c(), s[i].m(e, null));
          }
          for (; i < s.length; i += 1) s[i].d(1);
          s.length = t.length;
        }
      },
      d(r) {
        r && k(e), Q(s, r);
      },
    };
  }
  function Pn(n) {
    let e,
      t = n[11].replace(/^(\w)/, Ln) + "",
      s,
      r,
      l = n[12] + "",
      i,
      a;
    return {
      c() {
        (e = C("li")),
          (s = w(t)),
          (r = w(": ")),
          (i = w(l)),
          (a = A()),
          E(e, "class", "pagefind-ui__result-tag svelte-4xnkmf");
      },
      m(o, h) {
        y(o, e, h), b(e, s), b(e, r), b(e, i), b(e, a);
      },
      p(o, h) {
        h & 4 && t !== (t = o[11].replace(/^(\w)/, Ln) + "") && N(s, t),
          h & 4 && l !== (l = o[12] + "") && N(i, l);
      },
      d(o) {
        o && k(e);
      },
    };
  }
  function Ps(n) {
    let e;
    function t(l, i) {
      return l[1] ? Is : Us;
    }
    let s = t(n, -1),
      r = s(n);
    return {
      c() {
        (e = C("li")),
          r.c(),
          E(e, "class", "pagefind-ui__result svelte-4xnkmf");
      },
      m(l, i) {
        y(l, e, i), r.m(e, null);
      },
      p(l, [i]) {
        s === (s = t(l, i)) && r
          ? r.p(l, i)
          : (r.d(1), (r = s(l)), r && (r.c(), r.m(e, null)));
      },
      i: z,
      o: z,
      d(l) {
        l && k(e), r.d();
      },
    };
  }
  var Ln = (n) => n.toLocaleUpperCase();
  function Ls(n, e, t) {
    let { show_images: s = !0 } = e,
      { process_result: r = null } = e,
      { result: l = { data: async () => {} } } = e,
      i = ["title", "image", "image_alt", "url"],
      a,
      o = [],
      h = [],
      c = !1,
      m = (_, u) => {
        if (_.length <= u) return _;
        let f = [..._]
          .sort((T, R) => R.locations.length - T.locations.length)
          .slice(0, 3)
          .map((T) => T.url);
        return _.filter((T) => f.includes(T.url));
      },
      p = async (_) => {
        t(1, (a = await _.data())),
          t(1, (a = r?.(a) ?? a)),
          t(2, (o = Object.entries(a.meta).filter(([u]) => !i.includes(u)))),
          Array.isArray(a.sub_results) &&
            (t(4, (c = a.sub_results?.[0]?.url === (a.meta?.url || a.url))),
            c
              ? t(3, (h = m(a.sub_results.slice(1), 3)))
              : t(3, (h = m([...a.sub_results], 3))));
      },
      d = (_ = 30) => ". ".repeat(Math.floor(10 + Math.random() * _));
    return (
      (n.$$set = (_) => {
        "show_images" in _ && t(0, (s = _.show_images)),
          "process_result" in _ && t(6, (r = _.process_result)),
          "result" in _ && t(7, (l = _.result));
      }),
      (n.$$.update = () => {
        if (n.$$.dirty & 128) e: p(l);
      }),
      [s, a, o, h, c, d, r, l]
    );
  }
  var Et = class extends q {
      constructor(e) {
        super(),
          Y(this, e, Ls, Ps, K, {
            show_images: 0,
            process_result: 6,
            result: 7,
          });
      }
    },
    qn = Et;
  function Bn(n, e, t) {
    let s = n.slice();
    return (s[10] = e[t][0]), (s[11] = e[t][1]), (s[12] = e), (s[13] = t), s;
  }
  function Vn(n, e, t) {
    let s = n.slice();
    return (s[14] = e[t][0]), (s[15] = e[t][1]), (s[16] = e), (s[17] = t), s;
  }
  function Wn(n) {
    let e,
      t,
      s = n[4]("filters_label", n[5], n[6]) + "",
      r,
      l,
      i = Object.entries(n[1]),
      a = [];
    for (let o = 0; o < i.length; o += 1) a[o] = Jn(Bn(n, i, o));
    return {
      c() {
        (e = C("fieldset")), (t = C("legend")), (r = w(s)), (l = A());
        for (let o = 0; o < a.length; o += 1) a[o].c();
        E(t, "class", "pagefind-ui__filter-panel-label svelte-1v2r7ls"),
          E(e, "class", "pagefind-ui__filter-panel svelte-1v2r7ls");
      },
      m(o, h) {
        y(o, e, h), b(e, t), b(t, r), b(e, l);
        for (let c = 0; c < a.length; c += 1) a[c] && a[c].m(e, null);
      },
      p(o, h) {
        if (
          (h & 112 &&
            s !== (s = o[4]("filters_label", o[5], o[6]) + "") &&
            N(r, s),
          h & 143)
        ) {
          i = Object.entries(o[1]);
          let c;
          for (c = 0; c < i.length; c += 1) {
            let m = Bn(o, i, c);
            a[c] ? a[c].p(m, h) : ((a[c] = Jn(m)), a[c].c(), a[c].m(e, null));
          }
          for (; c < a.length; c += 1) a[c].d(1);
          a.length = i.length;
        }
      },
      d(o) {
        o && k(e), Q(a, o);
      },
    };
  }
  function Gn(n) {
    let e,
      t,
      s,
      r,
      l,
      i,
      a,
      o,
      h = n[14] + "",
      c,
      m = n[15] + "",
      p,
      d,
      _,
      u,
      f,
      T;
    function R() {
      n[9].call(t, n[10], n[14]);
    }
    return {
      c() {
        (e = C("div")),
          (t = C("input")),
          (i = A()),
          (a = C("label")),
          (o = new et(!1)),
          (c = w(" (")),
          (p = w(m)),
          (d = w(")")),
          (u = A()),
          E(t, "class", "pagefind-ui__filter-checkbox svelte-1v2r7ls"),
          E(t, "type", "checkbox"),
          E(t, "id", (s = n[10] + "-" + n[14])),
          E(t, "name", (r = n[10])),
          (t.__value = l = n[14]),
          (t.value = t.__value),
          (o.a = c),
          E(a, "class", "pagefind-ui__filter-label svelte-1v2r7ls"),
          E(a, "for", (_ = n[10] + "-" + n[14])),
          E(e, "class", "pagefind-ui__filter-value svelte-1v2r7ls"),
          B(e, "pagefind-ui__filter-value--checked", n[0][`${n[10]}:${n[14]}`]);
      },
      m(M, U) {
        y(M, e, U),
          b(e, t),
          (t.checked = n[0][`${n[10]}:${n[14]}`]),
          b(e, i),
          b(e, a),
          o.m(h, a),
          b(a, c),
          b(a, p),
          b(a, d),
          b(e, u),
          f || ((T = J(t, "change", R)), (f = !0));
      },
      p(M, U) {
        (n = M),
          U & 2 && s !== (s = n[10] + "-" + n[14]) && E(t, "id", s),
          U & 2 && r !== (r = n[10]) && E(t, "name", r),
          U & 2 &&
            l !== (l = n[14]) &&
            ((t.__value = l), (t.value = t.__value)),
          U & 3 && (t.checked = n[0][`${n[10]}:${n[14]}`]),
          U & 2 && h !== (h = n[14] + "") && o.p(h),
          U & 2 && m !== (m = n[15] + "") && N(p, m),
          U & 2 && _ !== (_ = n[10] + "-" + n[14]) && E(a, "for", _),
          U & 3 &&
            B(
              e,
              "pagefind-ui__filter-value--checked",
              n[0][`${n[10]}:${n[14]}`],
            );
      },
      d(M) {
        M && k(e), (f = !1), T();
      },
    };
  }
  function Kn(n) {
    let e,
      t = (n[2] || n[15] || n[0][`${n[10]}:${n[14]}`]) && Gn(n);
    return {
      c() {
        t && t.c(), (e = x());
      },
      m(s, r) {
        t && t.m(s, r), y(s, e, r);
      },
      p(s, r) {
        s[2] || s[15] || s[0][`${s[10]}:${s[14]}`]
          ? t
            ? t.p(s, r)
            : ((t = Gn(s)), t.c(), t.m(e.parentNode, e))
          : t && (t.d(1), (t = null));
      },
      d(s) {
        t && t.d(s), s && k(e);
      },
    };
  }
  function Jn(n) {
    let e,
      t,
      s = n[10].replace(/^(\w)/, Yn) + "",
      r,
      l,
      i,
      a = n[10] + "",
      o,
      h,
      c,
      m = Object.entries(n[11] || {}),
      p = [];
    for (let d = 0; d < m.length; d += 1) p[d] = Kn(Vn(n, m, d));
    return {
      c() {
        (e = C("details")),
          (t = C("summary")),
          (r = A()),
          (l = C("fieldset")),
          (i = C("legend")),
          (o = A());
        for (let d = 0; d < p.length; d += 1) p[d].c();
        (h = A()),
          E(t, "class", "pagefind-ui__filter-name svelte-1v2r7ls"),
          E(i, "class", "pagefind-ui__filter-group-label svelte-1v2r7ls"),
          E(l, "class", "pagefind-ui__filter-group svelte-1v2r7ls"),
          E(e, "class", "pagefind-ui__filter-block svelte-1v2r7ls"),
          (e.open = c = n[7] || n[3].map(Zn).includes(n[10].toLowerCase()));
      },
      m(d, _) {
        y(d, e, _),
          b(e, t),
          (t.innerHTML = s),
          b(e, r),
          b(e, l),
          b(l, i),
          (i.innerHTML = a),
          b(l, o);
        for (let u = 0; u < p.length; u += 1) p[u] && p[u].m(l, null);
        b(e, h);
      },
      p(d, _) {
        if (
          (_ & 2 &&
            s !== (s = d[10].replace(/^(\w)/, Yn) + "") &&
            (t.innerHTML = s),
          _ & 2 && a !== (a = d[10] + "") && (i.innerHTML = a),
          _ & 7)
        ) {
          m = Object.entries(d[11] || {});
          let u;
          for (u = 0; u < m.length; u += 1) {
            let f = Vn(d, m, u);
            p[u] ? p[u].p(f, _) : ((p[u] = Kn(f)), p[u].c(), p[u].m(l, null));
          }
          for (; u < p.length; u += 1) p[u].d(1);
          p.length = m.length;
        }
        _ & 138 &&
          c !== (c = d[7] || d[3].map(Zn).includes(d[10].toLowerCase())) &&
          (e.open = c);
      },
      d(d) {
        d && k(e), Q(p, d);
      },
    };
  }
  function qs(n) {
    let e = n[1] && Object.entries(n[1]).length,
      t,
      s = e && Wn(n);
    return {
      c() {
        s && s.c(), (t = x());
      },
      m(r, l) {
        s && s.m(r, l), y(r, t, l);
      },
      p(r, [l]) {
        l & 2 && (e = r[1] && Object.entries(r[1]).length),
          e
            ? s
              ? s.p(r, l)
              : ((s = Wn(r)), s.c(), s.m(t.parentNode, t))
            : s && (s.d(1), (s = null));
      },
      i: z,
      o: z,
      d(r) {
        s && s.d(r), r && k(t);
      },
    };
  }
  var Yn = (n) => n.toLocaleUpperCase(),
    Zn = (n) => n.toLowerCase();
  function Bs(n, e, t) {
    let { available_filters: s = null } = e,
      { show_empty_filters: r = !0 } = e,
      { open_filters: l = [] } = e,
      { translate: i = () => "" } = e,
      { automatic_translations: a = {} } = e,
      { translations: o = {} } = e,
      { selected_filters: h = {} } = e,
      c = !1,
      m = !1;
    function p(d, _) {
      (h[`${d}:${_}`] = this.checked), t(0, h);
    }
    return (
      (n.$$set = (d) => {
        "available_filters" in d && t(1, (s = d.available_filters)),
          "show_empty_filters" in d && t(2, (r = d.show_empty_filters)),
          "open_filters" in d && t(3, (l = d.open_filters)),
          "translate" in d && t(4, (i = d.translate)),
          "automatic_translations" in d && t(5, (a = d.automatic_translations)),
          "translations" in d && t(6, (o = d.translations)),
          "selected_filters" in d && t(0, (h = d.selected_filters));
      }),
      (n.$$.update = () => {
        if (n.$$.dirty & 258) {
          e: if (s && !c) {
            t(8, (c = !0));
            let d = Object.entries(s || {});
            d.length === 1 &&
              Object.entries(d[0][1])?.length <= 6 &&
              t(7, (m = !0));
          }
        }
      }),
      [h, s, r, l, i, a, o, m, c, p]
    );
  }
  var Rt = class extends q {
      constructor(e) {
        super(),
          Y(this, e, Bs, qs, K, {
            available_filters: 1,
            show_empty_filters: 2,
            open_filters: 3,
            translate: 4,
            automatic_translations: 5,
            translations: 6,
            selected_filters: 0,
          });
      }
    },
    Xn = Rt;
  var bt = {};
  S(bt, {
    comments: () => Ws,
    default: () => Js,
    direction: () => Gs,
    strings: () => Ks,
    thanks_to: () => Vs,
  });
  var Vs = "Jan Claasen <jan@cloudcannon.com>",
    Ws = "",
    Gs = "ltr",
    Ks = {
      placeholder: "Soek",
      clear_search: "Opruim",
      load_more: "Laai nog resultate",
      search_label: "Soek hierdie webwerf",
      filters_label: "Filters",
      zero_results: "Geen resultate vir [SEARCH_TERM]",
      many_results: "[COUNT] resultate vir [SEARCH_TERM]",
      one_result: "[COUNT] resultate vir [SEARCH_TERM]",
      alt_search:
        "Geen resultate vir [SEARCH_TERM]. Toon resultate vir [DIFFERENT_TERM] in plaas daarvan",
      search_suggestion:
        "Geen resultate vir [SEARCH_TERM]. Probeer eerder een van die volgende terme:",
      searching: "Soek vir [SEARCH_TERM]",
    },
    Js = { thanks_to: Vs, comments: Ws, direction: Gs, strings: Ks };
  var Tt = {};
  S(Tt, {
    comments: () => Zs,
    default: () => xs,
    direction: () => Xs,
    strings: () => Qs,
    thanks_to: () => Ys,
  });
  var Ys = "Maruf Alom <mail@marufalom.com>",
    Zs = "",
    Xs = "ltr",
    Qs = {
      placeholder:
        "\u0985\u09A8\u09C1\u09B8\u09A8\u09CD\u09A7\u09BE\u09A8 \u0995\u09B0\u09C1\u09A8",
      clear_search: "\u09AE\u09C1\u099B\u09C7 \u09AB\u09C7\u09B2\u09C1\u09A8",
      load_more:
        "\u0986\u09B0\u09CB \u09AB\u09B2\u09BE\u09AB\u09B2 \u09A6\u09C7\u0996\u09C1\u09A8",
      search_label:
        "\u098F\u0987 \u0993\u09DF\u09C7\u09AC\u09B8\u09BE\u0987\u099F\u09C7 \u0985\u09A8\u09C1\u09B8\u09A8\u09CD\u09A7\u09BE\u09A8 \u0995\u09B0\u09C1\u09A8",
      filters_label: "\u09AB\u09BF\u09B2\u09CD\u099F\u09BE\u09B0",
      zero_results:
        "[SEARCH_TERM] \u098F\u09B0 \u099C\u09A8\u09CD\u09AF \u0995\u09BF\u099B\u09C1 \u0996\u09C1\u0981\u099C\u09C7 \u09AA\u09BE\u0993\u09DF\u09BE \u09AF\u09BE\u09DF\u09A8\u09BF",
      many_results:
        "[COUNT]-\u099F\u09BF \u09AB\u09B2\u09BE\u09AB\u09B2 \u09AA\u09BE\u0993\u09DF\u09BE \u0997\u09BF\u09DF\u09C7\u099B\u09C7 [SEARCH_TERM] \u098F\u09B0 \u099C\u09A8\u09CD\u09AF",
      one_result:
        "[COUNT]-\u099F\u09BF \u09AB\u09B2\u09BE\u09AB\u09B2 \u09AA\u09BE\u0993\u09DF\u09BE \u0997\u09BF\u09DF\u09C7\u099B\u09C7 [SEARCH_TERM] \u098F\u09B0 \u099C\u09A8\u09CD\u09AF",
      alt_search:
        "\u0995\u09CB\u09A8 \u0995\u09BF\u099B\u09C1 \u0996\u09C1\u0981\u099C\u09C7 \u09AA\u09BE\u0993\u09DF\u09BE \u09AF\u09BE\u09DF\u09A8\u09BF [SEARCH_TERM] \u098F\u09B0 \u099C\u09A8\u09CD\u09AF. \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09C7 [DIFFERENT_TERM] \u098F\u09B0 \u099C\u09A8\u09CD\u09AF \u09A6\u09C7\u0996\u09BE\u09A8\u09CB \u09B9\u099A\u09CD\u099B\u09C7",
      search_suggestion:
        "\u0995\u09CB\u09A8 \u0995\u09BF\u099B\u09C1 \u0996\u09C1\u0981\u099C\u09C7 \u09AA\u09BE\u0993\u09DF\u09BE \u09AF\u09BE\u09DF\u09A8\u09BF [SEARCH_TERM] \u098F\u09B0 \u09AC\u09BF\u09B7\u09DF\u09C7. \u09A8\u09BF\u09A8\u09CD\u09AE\u09C7\u09B0 \u09AC\u09BF\u09B7\u09DF\u09AC\u09B8\u09CD\u09A4\u09C1 \u0996\u09C1\u0981\u099C\u09C7 \u09A6\u09C7\u0996\u09C1\u09A8:",
      searching:
        "\u0985\u09A8\u09C1\u09B8\u09A8\u09CD\u09A7\u09BE\u09A8 \u099A\u09B2\u099B\u09C7 [SEARCH_TERM]...",
    },
    xs = { thanks_to: Ys, comments: Zs, direction: Xs, strings: Qs };
  var Ct = {};
  S(Ct, {
    comments: () => er,
    default: () => sr,
    direction: () => tr,
    strings: () => nr,
    thanks_to: () => $s,
  });
  var $s = "Pablo Villaverde <https://github.com/pvillaverde>",
    er = "",
    tr = "ltr",
    nr = {
      placeholder: "Cerca",
      clear_search: "Netejar",
      load_more: "Veure m\xE9es resultats",
      search_label: "Cerca en aquest lloc",
      filters_label: "Filtres",
      zero_results: "No es van trobar resultats per [SEARCH_TERM]",
      many_results: "[COUNT] resultats trobats per [SEARCH_TERM]",
      one_result: "[COUNT] resultat trobat per [SEARCH_TERM]",
      alt_search:
        "No es van trobar resultats per [SEARCH_TERM]. Mostrant al seu lloc resultats per [DIFFERENT_TERM]",
      search_suggestion:
        "No es van trobar resultats per [SEARCH_TERM]. Proveu una de les cerques seg\xFCents:",
      searching: "Cercant [SEARCH_TERM]...",
    },
    sr = { thanks_to: $s, comments: er, direction: tr, strings: nr };
  var kt = {};
  S(kt, {
    comments: () => lr,
    default: () => or,
    direction: () => ir,
    strings: () => ar,
    thanks_to: () => rr,
  });
  var rr = "Dalibor Hon <https://github.com/dallyh>",
    lr = "",
    ir = "ltr",
    ar = {
      placeholder: "Hledat",
      clear_search: "Smazat",
      load_more: "Na\u010D\xEDst dal\u0161\xED v\xFDsledky",
      search_label: "Prohledat tuto str\xE1nku",
      filters_label: "Filtry",
      zero_results: "\u017D\xE1dn\xE9 v\xFDsledky pro [SEARCH_TERM]",
      many_results: "[COUNT] v\xFDsledk\u016F pro [SEARCH_TERM]",
      one_result: "[COUNT] v\xFDsledek pro [SEARCH_TERM]",
      alt_search:
        "\u017D\xE1dn\xE9 v\xFDsledky pro [SEARCH_TERM]. Zobrazuj\xED se v\xFDsledky pro [DIFFERENT_TERM]",
      search_suggestion:
        "\u017D\xE1dn\xE9 v\xFDsledky pro [SEARCH_TERM]. Souvisej\xEDc\xED v\xFDsledky hled\xE1n\xED:",
      searching: "Hled\xE1m [SEARCH_TERM]...",
    },
    or = { thanks_to: rr, comments: lr, direction: ir, strings: ar };
  var yt = {};
  S(yt, {
    comments: () => cr,
    default: () => dr,
    direction: () => _r,
    strings: () => fr,
    thanks_to: () => ur,
  });
  var ur = "Jonas Smedegaard <dr@jones.dk>",
    cr = "",
    _r = "ltr",
    fr = {
      placeholder: "S\xF8g",
      clear_search: "Nulstil",
      load_more: "Indl\xE6s flere resultater",
      search_label: "S\xF8g p\xE5 dette website",
      filters_label: "Filtre",
      zero_results: "Ingen resultater for [SEARCH_TERM]",
      many_results: "[COUNT] resultater for [SEARCH_TERM]",
      one_result: "[COUNT] resultat for [SEARCH_TERM]",
      alt_search:
        "Ingen resultater for [SEARCH_TERM]. Viser resultater for [DIFFERENT_TERM] i stedet",
      search_suggestion:
        "Ingen resultater for [SEARCH_TERM]. Pr\xF8v et af disse s\xF8geord i stedet:",
      searching: "S\xF8ger efter [SEARCH_TERM]...",
    },
    dr = { thanks_to: ur, comments: cr, direction: _r, strings: fr };
  var St = {};
  S(St, {
    comments: () => mr,
    default: () => Er,
    direction: () => pr,
    strings: () => gr,
    thanks_to: () => hr,
  });
  var hr = "Jan Claasen <jan@cloudcannon.com>",
    mr = "",
    pr = "ltr",
    gr = {
      placeholder: "Suche",
      clear_search: "L\xF6schen",
      load_more: "Mehr Ergebnisse laden",
      search_label: "Suche diese Seite",
      filters_label: "Filter",
      zero_results: "Keine Ergebnisse f\xFCr [SEARCH_TERM]",
      many_results: "[COUNT] Ergebnisse f\xFCr [SEARCH_TERM]",
      one_result: "[COUNT] Ergebnis f\xFCr [SEARCH_TERM]",
      alt_search:
        "Keine Ergebnisse f\xFCr [SEARCH_TERM]. Stattdessen werden Ergebnisse f\xFCr [DIFFERENT_TERM] angezeigt",
      search_suggestion:
        "Keine Ergebnisse f\xFCr [SEARCH_TERM]. Versuchen Sie eine der folgenden Suchen:",
      searching: "Suche f\xFCr [SEARCH_TERM]",
    },
    Er = { thanks_to: hr, comments: mr, direction: pr, strings: gr };
  var Mt = {};
  S(Mt, {
    comments: () => br,
    default: () => kr,
    direction: () => Tr,
    strings: () => Cr,
    thanks_to: () => Rr,
  });
  var Rr = "Liam Bigelow <liam@cloudcannon.com>",
    br = "",
    Tr = "ltr",
    Cr = {
      placeholder: "Search",
      clear_search: "Clear",
      load_more: "Load more results",
      search_label: "Search this site",
      filters_label: "Filters",
      zero_results: "No results for [SEARCH_TERM]",
      many_results: "[COUNT] results for [SEARCH_TERM]",
      one_result: "[COUNT] result for [SEARCH_TERM]",
      alt_search:
        "No results for [SEARCH_TERM]. Showing results for [DIFFERENT_TERM] instead",
      search_suggestion:
        "No results for [SEARCH_TERM]. Try one of the following searches:",
      searching: "Searching for [SEARCH_TERM]...",
    },
    kr = { thanks_to: Rr, comments: br, direction: Tr, strings: Cr };
  var At = {};
  S(At, {
    comments: () => Sr,
    default: () => vr,
    direction: () => Mr,
    strings: () => Ar,
    thanks_to: () => yr,
  });
  var yr = "Pablo Villaverde <https://github.com/pvillaverde>",
    Sr = "",
    Mr = "ltr",
    Ar = {
      placeholder: "Buscar",
      clear_search: "Limpiar",
      load_more: "Ver m\xE1s resultados",
      search_label: "Buscar en este sitio",
      filters_label: "Filtros",
      zero_results: "No se encontraron resultados para [SEARCH_TERM]",
      many_results: "[COUNT] resultados encontrados para [SEARCH_TERM]",
      one_result: "[COUNT] resultado encontrado para [SEARCH_TERM]",
      alt_search:
        "No se encontraron resultados para [SEARCH_TERM]. Mostrando en su lugar resultados para [DIFFERENT_TERM]",
      search_suggestion:
        "No se encontraron resultados para [SEARCH_TERM]. Prueba una de las siguientes b\xFAsquedas:",
      searching: "Buscando [SEARCH_TERM]...",
    },
    vr = { thanks_to: yr, comments: Sr, direction: Mr, strings: Ar };
  var vt = {};
  S(vt, {
    comments: () => Hr,
    default: () => Or,
    direction: () => Fr,
    strings: () => Nr,
    thanks_to: () => wr,
  });
  var wr = "Valtteri Laitinen <dev@valtlai.fi>",
    Hr = "",
    Fr = "ltr",
    Nr = {
      placeholder: "Haku",
      clear_search: "Tyhjenn\xE4",
      load_more: "Lataa lis\xE4\xE4 tuloksia",
      search_label: "Hae t\xE4lt\xE4 sivustolta",
      filters_label: "Suodattimet",
      zero_results: "Ei tuloksia haulle [SEARCH_TERM]",
      many_results: "[COUNT] tulosta haulle [SEARCH_TERM]",
      one_result: "[COUNT] tulos haulle [SEARCH_TERM]",
      alt_search:
        "Ei tuloksia haulle [SEARCH_TERM]. N\xE4ytet\xE4\xE4n tulokset sen sijaan haulle [DIFFERENT_TERM]",
      search_suggestion:
        "Ei tuloksia haulle [SEARCH_TERM]. Kokeile jotain seuraavista:",
      searching: "Haetaan [SEARCH_TERM]...",
    },
    Or = { thanks_to: wr, comments: Hr, direction: Fr, strings: Nr };
  var wt = {};
  S(wt, {
    comments: () => zr,
    default: () => Ir,
    direction: () => Dr,
    strings: () => Ur,
    thanks_to: () => jr,
  });
  var jr = "Nicolas Friedli <nicolas@theologique.ch>",
    zr = "",
    Dr = "ltr",
    Ur = {
      placeholder: "Rechercher",
      clear_search: "Nettoyer",
      load_more: "Charger plus de r\xE9sultats",
      search_label: "Recherche sur ce site",
      filters_label: "Filtres",
      zero_results: "Pas de r\xE9sultat pour [SEARCH_TERM]",
      many_results: "[COUNT] r\xE9sultats pour [SEARCH_TERM]",
      one_result: "[COUNT] r\xE9sultat pour [SEARCH_TERM]",
      alt_search:
        "Pas de r\xE9sultat pour [SEARCH_TERM]. Montre les r\xE9sultats pour [DIFFERENT_TERM] \xE0 la place",
      search_suggestion:
        "Pas de r\xE9sultat pour [SEARCH_TERM]. Essayer une des recherches suivantes:",
      searching: "Recherche [SEARCH_TERM]...",
    },
    Ir = { thanks_to: jr, comments: zr, direction: Dr, strings: Ur };
  var Ht = {};
  S(Ht, {
    comments: () => Lr,
    default: () => Vr,
    direction: () => qr,
    strings: () => Br,
    thanks_to: () => Pr,
  });
  var Pr = "Pablo Villaverde <https://github.com/pvillaverde>",
    Lr = "",
    qr = "ltr",
    Br = {
      placeholder: "Buscar",
      clear_search: "Limpar",
      load_more: "Ver m\xE1is resultados",
      search_label: "Buscar neste sitio",
      filters_label: "Filtros",
      zero_results: "Non se atoparon resultados para [SEARCH_TERM]",
      many_results: "[COUNT] resultados atopados para [SEARCH_TERM]",
      one_result: "[COUNT] resultado atopado para [SEARCH_TERM]",
      alt_search:
        "Non se atoparon resultados para [SEARCH_TERM]. Amosando no seu lugar resultados para [DIFFERENT_TERM]",
      search_suggestion:
        "Non se atoparon resultados para [SEARCH_TERM]. Probe unha das seguintes pesquisas:",
      searching: "Buscando [SEARCH_TERM]...",
    },
    Vr = { thanks_to: Pr, comments: Lr, direction: qr, strings: Br };
  var Ft = {};
  S(Ft, {
    comments: () => Gr,
    default: () => Yr,
    direction: () => Kr,
    strings: () => Jr,
    thanks_to: () => Wr,
  });
  var Wr = "Amit Yadav <amit@thetechbasket.com>",
    Gr = "",
    Kr = "ltr",
    Jr = {
      placeholder: "\u0916\u094B\u091C\u0947\u0902",
      clear_search: "\u0938\u093E\u092B \u0915\u0930\u0947\u0902",
      load_more:
        "\u0914\u0930 \u0905\u0927\u093F\u0915 \u092A\u0930\u093F\u0923\u093E\u092E \u0932\u094B\u0921 \u0915\u0930\u0947\u0902",
      search_label:
        "\u0907\u0938 \u0938\u093E\u0907\u091F \u092E\u0947\u0902 \u0916\u094B\u091C\u0947\u0902",
      filters_label: "\u092B\u093C\u093F\u0932\u094D\u091F\u0930",
      zero_results:
        "\u0915\u094B\u0908 \u092A\u0930\u093F\u0923\u093E\u092E [SEARCH_TERM] \u0915\u0947 \u0932\u093F\u090F \u0928\u0939\u0940\u0902 \u092E\u093F\u0932\u093E",
      many_results:
        "[COUNT] \u092A\u0930\u093F\u0923\u093E\u092E [SEARCH_TERM] \u0915\u0947 \u0932\u093F\u090F \u092E\u093F\u0932\u0947",
      one_result:
        "[COUNT] \u092A\u0930\u093F\u0923\u093E\u092E [SEARCH_TERM] \u0915\u0947 \u0932\u093F\u090F \u092E\u093F\u0932\u093E",
      alt_search:
        "[SEARCH_TERM] \u0915\u0947 \u0932\u093F\u090F \u0915\u094B\u0908 \u092A\u0930\u093F\u0923\u093E\u092E \u0928\u0939\u0940\u0902 \u092E\u093F\u0932\u093E\u0964 \u0907\u0938\u0915\u0947 \u092C\u091C\u093E\u092F [DIFFERENT_TERM] \u0915\u0947 \u0932\u093F\u090F \u092A\u0930\u093F\u0923\u093E\u092E \u0926\u093F\u0916\u093E \u0930\u0939\u093E \u0939\u0948",
      search_suggestion:
        "[SEARCH_TERM] \u0915\u0947 \u0932\u093F\u090F \u0915\u094B\u0908 \u092A\u0930\u093F\u0923\u093E\u092E \u0928\u0939\u0940\u0902 \u092E\u093F\u0932\u093E\u0964 \u0928\u093F\u092E\u094D\u0928\u0932\u093F\u0916\u093F\u0924 \u0916\u094B\u091C\u094B\u0902 \u092E\u0947\u0902 \u0938\u0947 \u0915\u094B\u0908 \u090F\u0915 \u0906\u091C\u093C\u092E\u093E\u090F\u0902:",
      searching:
        "[SEARCH_TERM] \u0915\u0940 \u0916\u094B\u091C \u0915\u0940 \u091C\u093E \u0930\u0939\u0940 \u0939\u0948...",
    },
    Yr = { thanks_to: Wr, comments: Gr, direction: Kr, strings: Jr };
  var Nt = {};
  S(Nt, {
    comments: () => Xr,
    default: () => $r,
    direction: () => Qr,
    strings: () => xr,
    thanks_to: () => Zr,
  });
  var Zr = "Diomed <https://github.com/diomed>",
    Xr = "",
    Qr = "ltr",
    xr = {
      placeholder: "Tra\u017Ei",
      clear_search: "O\u010Disti",
      load_more: "U\u010Ditaj vi\u0161e rezultata",
      search_label: "Pretra\u017Ei ovu stranicu",
      filters_label: "Filteri",
      zero_results: "Nema rezultata za [SEARCH_TERM]",
      many_results: "[COUNT] rezultata za [SEARCH_TERM]",
      one_result: "[COUNT] rezultat za [SEARCH_TERM]",
      alt_search:
        "Nema rezultata za [SEARCH_TERM]. Prikazujem rezultate za [DIFFERENT_TERM]",
      search_suggestion:
        "Nema rezultata za [SEARCH_TERM]. Poku\u0161aj s jednom od ovih pretraga:",
      searching: "Pretra\u017Eujem [SEARCH_TERM]...",
    },
    $r = { thanks_to: Zr, comments: Xr, direction: Qr, strings: xr };
  var Ot = {};
  S(Ot, {
    comments: () => tl,
    default: () => rl,
    direction: () => nl,
    strings: () => sl,
    thanks_to: () => el,
  });
  var el = "Adam Laki <info@adamlaki.com>",
    tl = "",
    nl = "ltr",
    sl = {
      placeholder: "Keres\xE9s",
      clear_search: "T\xF6rl\xE9s",
      load_more: "Tov\xE1bbi tal\xE1latok bet\xF6lt\xE9se",
      search_label: "Keres\xE9s az oldalon",
      filters_label: "Sz\u0171r\xE9s",
      zero_results: "Nincs tal\xE1lat a(z) [SEARCH_TERM] kifejez\xE9sre",
      many_results: "[COUNT] db tal\xE1lat a(z) [SEARCH_TERM] kifejez\xE9sre",
      one_result: "[COUNT] db tal\xE1lat a(z) [SEARCH_TERM] kifejez\xE9sre",
      alt_search:
        "Nincs tal\xE1lat a(z) [SEARCH_TERM] kifejez\xE9sre. Tal\xE1latok mutat\xE1sa ink\xE1bb a(z) [DIFFERENT_TERM] kifejez\xE9sre",
      search_suggestion:
        "Nincs tal\xE1lat a(z) [SEARCH_TERM] kifejez\xE9sre. Pr\xF3b\xE1ld meg a k\xF6vetkez\u0151 keres\xE9sek egyik\xE9t:",
      searching: "Keres\xE9s a(z) [SEARCH_TERM] kifejez\xE9sre...",
    },
    rl = { thanks_to: el, comments: tl, direction: nl, strings: sl };
  var jt = {};
  S(jt, {
    comments: () => il,
    default: () => ul,
    direction: () => al,
    strings: () => ol,
    thanks_to: () => ll,
  });
  var ll = "Nixentric",
    il = "",
    al = "ltr",
    ol = {
      placeholder: "Cari",
      clear_search: "Bersihkan",
      load_more: "Muat lebih banyak hasil",
      search_label: "Telusuri situs ini",
      filters_label: "Filter",
      zero_results: "[SEARCH_TERM] tidak ditemukan",
      many_results: "Ditemukan [COUNT] hasil untuk [SEARCH_TERM]",
      one_result: "Ditemukan [COUNT] hasil untuk [SEARCH_TERM]",
      alt_search:
        "[SEARCH_TERM] tidak ditemukan. Menampilkan hasil [DIFFERENT_TERM] sebagai gantinya",
      search_suggestion:
        "[SEARCH_TERM] tidak ditemukan. Coba salah satu pencarian berikut ini:",
      searching: "Mencari [SEARCH_TERM]...",
    },
    ul = { thanks_to: ll, comments: il, direction: al, strings: ol };
  var zt = {};
  S(zt, {
    comments: () => _l,
    default: () => hl,
    direction: () => fl,
    strings: () => dl,
    thanks_to: () => cl,
  });
  var cl = "Cosette Bruhns Alonso, Andrew Janco <apjanco@upenn.edu>",
    _l = "",
    fl = "ltr",
    dl = {
      placeholder: "Cerca",
      clear_search: "Cancella la cronologia",
      load_more: "Mostra pi\xF9 risultati",
      search_label: "Cerca nel sito",
      filters_label: "Filtri di ricerca",
      zero_results: "Nessun risultato per [SEARCH_TERM]",
      many_results: "[COUNT] risultati per [SEARCH_TERM]",
      one_result: "[COUNT] risultato per [SEARCH_TERM]",
      alt_search:
        "Nessun risultato per [SEARCH_TERM]. Mostrando risultati per [DIFFERENT_TERM] come alternativa.",
      search_suggestion:
        "Nessun risultato per [SEARCH_TERM]. Prova una delle seguenti ricerche:",
      searching: "Cercando [SEARCH_TERM]...",
    },
    hl = { thanks_to: cl, comments: _l, direction: fl, strings: dl };
  var Dt = {};
  S(Dt, {
    comments: () => pl,
    default: () => Rl,
    direction: () => gl,
    strings: () => El,
    thanks_to: () => ml,
  });
  var ml = "Tate",
    pl = "",
    gl = "ltr",
    El = {
      placeholder: "\u691C\u7D22",
      clear_search: "\u30AF\u30EA\u30A2",
      load_more: "\u6B21\u3092\u8AAD\u307F\u8FBC\u3080",
      search_label: "\u3053\u306E\u30B5\u30A4\u30C8\u3092\u691C\u7D22",
      filters_label: "\u30D5\u30A3\u30EB\u30BF",
      zero_results:
        "[SEARCH_TERM]\u306E\u691C\u7D22\u306B\u4E00\u81F4\u3059\u308B\u60C5\u5831\u306F\u3042\u308A\u307E\u305B\u3093\u3067\u3057\u305F",
      many_results:
        "[SEARCH_TERM]\u306E[COUNT]\u4EF6\u306E\u691C\u7D22\u7D50\u679C",
      one_result:
        "[SEARCH_TERM]\u306E[COUNT]\u4EF6\u306E\u691C\u7D22\u7D50\u679C",
      alt_search:
        "[SEARCH_TERM]\u306E\u691C\u7D22\u306B\u4E00\u81F4\u3059\u308B\u60C5\u5831\u306F\u3042\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002[DIFFERENT_TERM]\u306E\u691C\u7D22\u7D50\u679C\u3092\u8868\u793A\u3057\u3066\u3044\u307E\u3059",
      search_suggestion:
        "[SEARCH_TERM]\u306E\u691C\u7D22\u306B\u4E00\u81F4\u3059\u308B\u60C5\u5831\u306F\u3042\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u6B21\u306E\u3044\u305A\u308C\u304B\u306E\u691C\u7D22\u3092\u8A66\u3057\u3066\u304F\u3060\u3055\u3044",
      searching:
        "[SEARCH_TERM]\u3092\u691C\u7D22\u3057\u3066\u3044\u307E\u3059",
    },
    Rl = { thanks_to: ml, comments: pl, direction: gl, strings: El };
  var Ut = {};
  S(Ut, {
    comments: () => Tl,
    default: () => yl,
    direction: () => Cl,
    strings: () => kl,
    thanks_to: () => bl,
  });
  var bl = "Seokho Son <https://github.com/seokho-son>",
    Tl = "",
    Cl = "ltr",
    kl = {
      placeholder: "\uAC80\uC0C9\uC5B4",
      clear_search: "\uBE44\uC6B0\uAE30",
      load_more: "\uAC80\uC0C9 \uACB0\uACFC \uB354 \uBCF4\uAE30",
      search_label: "\uC0AC\uC774\uD2B8 \uAC80\uC0C9",
      filters_label: "\uD544\uD130",
      zero_results:
        "[SEARCH_TERM]\uC5D0 \uB300\uD55C \uACB0\uACFC \uC5C6\uC74C",
      many_results:
        "[SEARCH_TERM]\uC5D0 \uB300\uD55C \uACB0\uACFC [COUNT]\uAC74",
      one_result: "[SEARCH_TERM]\uC5D0 \uB300\uD55C \uACB0\uACFC [COUNT]\uAC74",
      alt_search:
        "[SEARCH_TERM]\uC5D0 \uB300\uD55C \uACB0\uACFC \uC5C6\uC74C. [DIFFERENT_TERM]\uC5D0 \uB300\uD55C \uACB0\uACFC",
      search_suggestion:
        "[SEARCH_TERM]\uC5D0 \uB300\uD55C \uACB0\uACFC \uC5C6\uC74C. \uCD94\uCC9C \uAC80\uC0C9\uC5B4: ",
      searching: "[SEARCH_TERM] \uAC80\uC0C9 \uC911...",
    },
    yl = { thanks_to: bl, comments: Tl, direction: Cl, strings: kl };
  var It = {};
  S(It, {
    comments: () => Ml,
    default: () => wl,
    direction: () => Al,
    strings: () => vl,
    thanks_to: () => Sl,
  });
  var Sl = "",
    Ml = "",
    Al = "ltr",
    vl = {
      placeholder: "Rapu",
      clear_search: "Whakakore",
      load_more: "Whakauta \u0113tahi otinga k\u0113",
      search_label: "Rapu",
      filters_label: "T\u0101tari",
      zero_results: "Otinga kore ki [SEARCH_TERM]",
      many_results: "[COUNT] otinga ki [SEARCH_TERM]",
      one_result: "[COUNT] otinga ki [SEARCH_TERM]",
      alt_search:
        "Otinga kore ki [SEARCH_TERM]. Otinga k\u0113 ki [DIFFERENT_TERM]",
      search_suggestion:
        "Otinga kore ki [SEARCH_TERM]. whakam\u0101tau ki ng\u0101 mea atu:",
      searching: "Rapu ki [SEARCH_TERM]...",
    },
    wl = { thanks_to: Sl, comments: Ml, direction: Al, strings: vl };
  var Pt = {};
  S(Pt, {
    comments: () => Fl,
    default: () => jl,
    direction: () => Nl,
    strings: () => Ol,
    thanks_to: () => Hl,
  });
  var Hl = "Paul van Brouwershaven",
    Fl = "",
    Nl = "ltr",
    Ol = {
      placeholder: "Zoeken",
      clear_search: "Reset",
      load_more: "Meer resultaten laden",
      search_label: "Doorzoek deze site",
      filters_label: "Filters",
      zero_results: "Geen resultaten voor [SEARCH_TERM]",
      many_results: "[COUNT] resultaten voor [SEARCH_TERM]",
      one_result: "[COUNT] resultaat voor [SEARCH_TERM]",
      alt_search:
        "Geen resultaten voor [SEARCH_TERM]. In plaats daarvan worden resultaten voor [DIFFERENT_TERM] weergegeven",
      search_suggestion:
        "Geen resultaten voor [SEARCH_TERM]. Probeer een van de volgende zoekopdrachten:",
      searching: "Zoeken naar [SEARCH_TERM]...",
    },
    jl = { thanks_to: Hl, comments: Fl, direction: Nl, strings: Ol };
  var Lt = {};
  S(Lt, {
    comments: () => Dl,
    default: () => Pl,
    direction: () => Ul,
    strings: () => Il,
    thanks_to: () => zl,
  });
  var zl = "Christopher Wingate",
    Dl = "",
    Ul = "ltr",
    Il = {
      placeholder: "S\xF8k",
      clear_search: "Fjern",
      load_more: "Last flere resultater",
      search_label: "S\xF8k p\xE5 denne siden",
      filters_label: "Filtre",
      zero_results: "Ingen resultater for [SEARCH_TERM]",
      many_results: "[COUNT] resultater for [SEARCH_TERM]",
      one_result: "[COUNT] resultat for [SEARCH_TERM]",
      alt_search:
        "Ingen resultater for [SEARCH_TERM]. Viser resultater for [DIFFERENT_TERM] i stedet",
      search_suggestion:
        "Ingen resultater for [SEARCH_TERM]. Pr\xF8v en av disse s\xF8keordene i stedet:",
      searching: "S\xF8ker etter [SEARCH_TERM]",
    },
    Pl = { thanks_to: zl, comments: Dl, direction: Ul, strings: Il };
  var qt = {};
  S(qt, {
    comments: () => ql,
    default: () => Wl,
    direction: () => Bl,
    strings: () => Vl,
    thanks_to: () => Ll,
  });
  var Ll = "",
    ql = "",
    Bl = "ltr",
    Vl = {
      placeholder: "Szukaj",
      clear_search: "Wyczy\u015B\u0107",
      load_more: "Za\u0142aduj wi\u0119cej",
      search_label: "Przeszukaj t\u0119 stron\u0119",
      filters_label: "Filtry",
      zero_results: "Brak wynik\xF3w dla [SEARCH_TERM]",
      many_results: "[COUNT] wynik\xF3w dla [SEARCH_TERM]",
      one_result: "[COUNT] wynik dla [SEARCH_TERM]",
      alt_search:
        "Brak wynik\xF3w dla [SEARCH_TERM]. Wy\u015Bwietlam wyniki dla [DIFFERENT_TERM]",
      search_suggestion:
        "Brak wynik\xF3w dla [SEARCH_TERM]. Pokrewne wyniki wyszukiwania:",
      searching: "Szukam [SEARCH_TERM]...",
    },
    Wl = { thanks_to: Ll, comments: ql, direction: Bl, strings: Vl };
  var Bt = {};
  S(Bt, {
    comments: () => Kl,
    default: () => Zl,
    direction: () => Jl,
    strings: () => Yl,
    thanks_to: () => Gl,
  });
  var Gl = "Jonatah",
    Kl = "",
    Jl = "ltr",
    Yl = {
      placeholder: "Pesquisar",
      clear_search: "Limpar",
      load_more: "Ver mais resultados",
      search_label: "Pesquisar",
      filters_label: "Filtros",
      zero_results: "Nenhum resultado encontrado para [SEARCH_TERM]",
      many_results: "[COUNT] resultados encontrados para [SEARCH_TERM]",
      one_result: "[COUNT] resultado encontrado para [SEARCH_TERM]",
      alt_search:
        "Nenhum resultado encontrado para [SEARCH_TERM]. Exibindo resultados para [DIFFERENT_TERM]",
      search_suggestion:
        "Nenhum resultado encontrado para [SEARCH_TERM]. Tente uma das seguintes pesquisas:",
      searching: "Pesquisando por [SEARCH_TERM]...",
    },
    Zl = { thanks_to: Gl, comments: Kl, direction: Jl, strings: Yl };
  var Vt = {};
  S(Vt, {
    comments: () => Ql,
    default: () => ei,
    direction: () => xl,
    strings: () => $l,
    thanks_to: () => Xl,
  });
  var Xl = "Bogdan Mateescu <bogdan@surfverse.com>",
    Ql = "",
    xl = "ltr",
    $l = {
      placeholder: "C\u0103utare",
      clear_search: "\u015Eterge\u0163i",
      load_more: "\xCEnc\u0103rca\u021Bi mai multe rezultate",
      search_label: "C\u0103uta\u021Bi \xEEn acest site",
      filters_label: "Filtre",
      zero_results: "Niciun rezultat pentru [SEARCH_TERM]",
      many_results: "[COUNT] rezultate pentru [SEARCH_TERM]",
      one_result: "[COUNT] rezultat pentru [SEARCH_TERM]",
      alt_search:
        "Niciun rezultat pentru [SEARCH_TERM]. Se afi\u0219eaz\u0103 \xEEn schimb rezultatele pentru [DIFFERENT_TERM]",
      search_suggestion:
        "Niciun rezultat pentru [SEARCH_TERM]. \xCEncerca\u021Bi una dintre urm\u0103toarele c\u0103ut\u0103ri:",
      searching: "Se caut\u0103 dup\u0103: [SEARCH_TERM]...",
    },
    ei = { thanks_to: Xl, comments: Ql, direction: xl, strings: $l };
  var Wt = {};
  S(Wt, {
    comments: () => ni,
    default: () => li,
    direction: () => si,
    strings: () => ri,
    thanks_to: () => ti,
  });
  var ti = "Aleksandr Gordeev",
    ni = "",
    si = "ltr",
    ri = {
      placeholder: "\u041F\u043E\u0438\u0441\u043A",
      clear_search:
        "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043F\u043E\u043B\u0435",
      load_more:
        "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0435\u0449\u0435",
      search_label:
        "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0441\u0430\u0439\u0442\u0443",
      filters_label: "\u0424\u0438\u043B\u044C\u0442\u0440\u044B",
      zero_results:
        "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443: [SEARCH_TERM]",
      many_results:
        "[COUNT] \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443: [SEARCH_TERM]",
      one_result:
        "[COUNT] \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443: [SEARCH_TERM]",
      alt_search:
        "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443: [SEARCH_TERM]. \u041F\u043E\u043A\u0430\u0437\u0430\u043D\u044B \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443: [DIFFERENT_TERM]",
      search_suggestion:
        "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443: [SEARCH_TERM]. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043E\u0434\u0438\u043D \u0438\u0437 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0445 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432",
      searching:
        "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443: [SEARCH_TERM]",
    },
    li = { thanks_to: ti, comments: ni, direction: si, strings: ri };
  var Gt = {};
  S(Gt, {
    comments: () => ai,
    default: () => ci,
    direction: () => oi,
    strings: () => ui,
    thanks_to: () => ii,
  });
  var ii = "Andrija Sagicc",
    ai = "",
    oi = "ltr",
    ui = {
      placeholder: "\u041F\u0440\u0435\u0442\u0440\u0430\u0433\u0430",
      clear_search: "\u0411\u0440\u0438\u0441\u0430\u045A\u0435",
      load_more:
        "\u041F\u0440\u0438\u043A\u0430\u0437 \u0432\u0438\u0448\u0435 \u0440\u0435\u0437\u0443\u043B\u0442\u0430\u0442\u0430",
      search_label:
        "\u041F\u0440\u0435\u0442\u0440\u0430\u0433\u0430 \u0441\u0430\u0458\u0442\u0430",
      filters_label: "\u0424\u0438\u043B\u0442\u0435\u0440\u0438",
      zero_results:
        "\u041D\u0435\u043C\u0430 \u0440\u0435\u0437\u0443\u043B\u0442\u0430\u0442\u0430 \u0437\u0430 [SEARCH_TERM]",
      many_results:
        "[COUNT] \u0440\u0435\u0437\u0443\u043B\u0442\u0430\u0442\u0430 \u0437\u0430 [SEARCH_TERM]",
      one_result:
        "[COUNT] \u0440\u0435\u0437\u0443\u043B\u0442\u0430\u0442\u0430 \u0437\u0430 [SEARCH_TERM]",
      alt_search:
        "\u041D\u0435\u043C\u0430 \u0440\u0435\u0437\u0443\u043B\u0442\u0430\u0442\u0430 \u0437\u0430 [SEARCH_TERM]. \u041F\u0440\u0438\u043A\u0430\u0437 \u0434\u043E\u0434\u0430\u0442\u043D\u0438\u043A \u0440\u0435\u0437\u0443\u043B\u0442\u0430\u0442\u0430 \u0437\u0430 [DIFFERENT_TERM]",
      search_suggestion:
        "\u041D\u0435\u043C\u0430 \u0440\u0435\u0437\u0443\u043B\u0442\u0430\u0442\u0430 \u0437\u0430 [SEARCH_TERM]. \u041F\u043E\u043A\u0443\u0448\u0430\u0458\u0442\u0435 \u0441\u0430 \u043D\u0435\u043A\u043E\u043C \u043E\u0434 \u0441\u043B\u0435\u0434\u0435\u045B\u0438\u0445 \u043F\u0440\u0435\u0442\u0440\u0430\u0433\u0430:",
      searching:
        "\u041F\u0440\u0435\u0442\u0440\u0430\u0433\u0430 \u0442\u0435\u0440\u043C\u0438\u043D\u0430 [SEARCH_TERM]...",
    },
    ci = { thanks_to: ii, comments: ai, direction: oi, strings: ui };
  var Kt = {};
  S(Kt, {
    comments: () => fi,
    default: () => mi,
    direction: () => di,
    strings: () => hi,
    thanks_to: () => _i,
  });
  var _i = "Montazar Al-Jaber <montazar@nanawee.tech>",
    fi = "",
    di = "ltr",
    hi = {
      placeholder: "S\xF6k",
      clear_search: "Rensa",
      load_more: "Visa fler tr\xE4ffar",
      search_label: "S\xF6k p\xE5 denna sida",
      filters_label: "Filter",
      zero_results: "[SEARCH_TERM] gav inga tr\xE4ffar",
      many_results: "[SEARCH_TERM] gav [COUNT] tr\xE4ffar",
      one_result: "[SEARCH_TERM] gav [COUNT] tr\xE4ff",
      alt_search:
        "[SEARCH_TERM] gav inga tr\xE4ffar. Visar resultat f\xF6r [DIFFERENT_TERM] ist\xE4llet",
      search_suggestion:
        "[SEARCH_TERM] gav inga tr\xE4ffar. F\xF6rs\xF6k igen med en av f\xF6ljande s\xF6kord:",
      searching: "S\xF6ker efter [SEARCH_TERM]...",
    },
    mi = { thanks_to: _i, comments: fi, direction: di, strings: hi };
  var Jt = {};
  S(Jt, {
    comments: () => gi,
    default: () => bi,
    direction: () => Ei,
    strings: () => Ri,
    thanks_to: () => pi,
  });
  var pi = "Anonymous",
    gi = "",
    Ei = "ltr",
    Ri = {
      placeholder: "Tafuta",
      clear_search: "Futa",
      load_more: "Pakia matokeo zaidi",
      search_label: "Tafuta tovuti hii",
      filters_label: "Vichujio",
      zero_results: "Hakuna matokeo ya [SEARCH_TERM]",
      many_results: "Matokeo [COUNT] ya [SEARCH_TERM]",
      one_result: "Tokeo [COUNT] la [SEARCH_TERM]",
      alt_search:
        "Hakuna mayokeo ya [SEARCH_TERM]. Badala yake, inaonyesha matokeo ya [DIFFERENT_TERM]",
      search_suggestion:
        "Hakuna matokeo ya [SEARCH_TERM]. Jaribu mojawapo ya utafutaji ufuatao:",
      searching: "Kutafuta [SEARCH_TERM]...",
    },
    bi = { thanks_to: pi, comments: gi, direction: Ei, strings: Ri };
  var Yt = {};
  S(Yt, {
    comments: () => Ci,
    default: () => Si,
    direction: () => ki,
    strings: () => yi,
    thanks_to: () => Ti,
  });
  var Ti = "",
    Ci = "",
    ki = "ltr",
    yi = {
      placeholder: "\u0BA4\u0BC7\u0B9F\u0BC1\u0B95",
      clear_search: "\u0B85\u0BB4\u0BBF\u0B95\u0BCD\u0B95\u0BC1\u0B95",
      load_more:
        "\u0BAE\u0BC7\u0BB2\u0BC1\u0BAE\u0BCD \u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0BC1\u0B95\u0BB3\u0BC8\u0B95\u0BCD \u0B95\u0BBE\u0B9F\u0BCD\u0B9F\u0BC1\u0B95",
      search_label:
        "\u0B87\u0BA8\u0BCD\u0BA4 \u0BA4\u0BB3\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD \u0BA4\u0BC7\u0B9F\u0BC1\u0B95",
      filters_label:
        "\u0BB5\u0B9F\u0BBF\u0B95\u0B9F\u0BCD\u0B9F\u0BB2\u0BCD\u0B95\u0BB3\u0BCD",
      zero_results:
        "[SEARCH_TERM] \u0B95\u0BCD\u0B95\u0BBE\u0BA9 \u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0BC1\u0B95\u0BB3\u0BCD \u0B87\u0BB2\u0BCD\u0BB2\u0BC8",
      many_results:
        "[SEARCH_TERM] \u0B95\u0BCD\u0B95\u0BBE\u0BA9 [COUNT] \u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0BC1\u0B95\u0BB3\u0BCD",
      one_result:
        "[SEARCH_TERM] \u0B95\u0BCD\u0B95\u0BBE\u0BA9 \u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0BC1",
      alt_search:
        "[SEARCH_TERM] \u0B87\u0BA4\u0BCD\u0BA4\u0BC7\u0B9F\u0BB2\u0BC1\u0B95\u0BCD\u0B95\u0BBE\u0BA9 \u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0BC1\u0B95\u0BB3\u0BCD \u0B87\u0BB2\u0BCD\u0BB2\u0BC8, \u0B87\u0BA8\u0BCD\u0BA4 \u0BA4\u0BC7\u0B9F\u0BB2\u0BCD\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BBE\u0BA9 \u0B92\u0BA4\u0BCD\u0BA4 \u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0BC1\u0B95\u0BB3\u0BCD [DIFFERENT_TERM]",
      search_suggestion:
        "[SEARCH_TERM] \u0B87\u0BA4\u0BCD \u0BA4\u0BC7\u0B9F\u0BB2\u0BC1\u0B95\u0BCD\u0B95\u0BBE\u0BA9 \u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0BC1\u0B95\u0BB3\u0BCD \u0B87\u0BB2\u0BCD\u0BB2\u0BC8.\u0B87\u0BA4\u0BB1\u0BCD\u0B95\u0BC1 \u0BAA\u0BA4\u0BBF\u0BB2\u0BC0\u0B9F\u0BBE\u0BA9 \u0BA4\u0BC7\u0B9F\u0BB2\u0BCD\u0B95\u0BB3\u0BC8 \u0BA4\u0BC7\u0B9F\u0BC1\u0B95:",
      searching:
        "[SEARCH_TERM] \u0BA4\u0BC7\u0B9F\u0BAA\u0BCD\u0BAA\u0B9F\u0BC1\u0B95\u0BBF\u0BA9\u0BCD\u0BB1\u0BA4\u0BC1",
    },
    Si = { thanks_to: Ti, comments: Ci, direction: ki, strings: yi };
  var Zt = {};
  S(Zt, {
    comments: () => Ai,
    default: () => Hi,
    direction: () => vi,
    strings: () => wi,
    thanks_to: () => Mi,
  });
  var Mi = "Taylan \xD6zg\xFCr Bildik",
    Ai = "",
    vi = "ltr",
    wi = {
      placeholder: "Ara\u015Ft\u0131r",
      clear_search: "Temizle",
      load_more: "Daha fazla sonu\xE7",
      search_label: "Site genelinde arama",
      filters_label: "Filtreler",
      zero_results: "[SEARCH_TERM] i\xE7in sonu\xE7 yok",
      many_results: "[SEARCH_TERM] i\xE7in [COUNT] sonu\xE7 bulundu",
      one_result: "[SEARCH_TERM] i\xE7in [COUNT] sonu\xE7 bulundu",
      alt_search:
        "[SEARCH_TERM] i\xE7in sonu\xE7 yok. Bunun yerine [DIFFERENT_TERM] i\xE7in sonu\xE7lar g\xF6steriliyor",
      search_suggestion:
        "[SEARCH_TERM] i\xE7in sonu\xE7 yok. Alternatif olarak a\u015Fa\u011F\u0131daki kelimelerden birini deneyebilirsiniz:",
      searching: "[SEARCH_TERM] ara\u015Ft\u0131r\u0131l\u0131yor...",
    },
    Hi = { thanks_to: Mi, comments: Ai, direction: vi, strings: wi };
  var Xt = {};
  S(Xt, {
    comments: () => Ni,
    default: () => zi,
    direction: () => Oi,
    strings: () => ji,
    thanks_to: () => Fi,
  });
  var Fi = "Vladyslav Lyshenko <vladdnepr1989@gmail.com>",
    Ni = "",
    Oi = "ltr",
    ji = {
      placeholder: "\u041F\u043E\u0448\u0443\u043A",
      clear_search:
        "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u043F\u043E\u043B\u0435",
      load_more:
        "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0449\u0435",
      search_label:
        "\u041F\u043E\u0448\u0443\u043A \u043F\u043E \u0441\u0430\u0439\u0442\u0443",
      filters_label: "\u0424\u0456\u043B\u044C\u0442\u0440\u0438",
      zero_results:
        "\u041D\u0456\u0447\u043E\u0433\u043E \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E \u0437\u0430 \u0437\u0430\u043F\u0438\u0442\u043E\u043C: [SEARCH_TERM]",
      many_results:
        "[COUNT] \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0456\u0432 \u043D\u0430 \u0437\u0430\u043F\u0438\u0442: [SEARCH_TERM]",
      one_result:
        "[COUNT] \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0437\u0430 \u0437\u0430\u043F\u0438\u0442\u043E\u043C: [SEARCH_TERM]",
      alt_search:
        "\u041D\u0456\u0447\u043E\u0433\u043E \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E \u043D\u0430 \u0437\u0430\u043F\u0438\u0442: [SEARCH_TERM]. \u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0438 \u043D\u0430 \u0437\u0430\u043F\u0438\u0442: [DIFFERENT_TERM]",
      search_suggestion:
        "\u041D\u0456\u0447\u043E\u0433\u043E \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E \u043D\u0430 \u0437\u0430\u043F\u0438\u0442: [SEARCH_TERM]. \u0421\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043E\u0434\u0438\u043D \u0456\u0437 \u0442\u0430\u043A\u0438\u0445 \u0432\u0430\u0440\u0456\u0430\u043D\u0442\u0456\u0432",
      searching:
        "\u041F\u043E\u0448\u0443\u043A \u0437\u0430 \u0437\u0430\u043F\u0438\u0442\u043E\u043C: [SEARCH_TERM]",
    },
    zi = { thanks_to: Fi, comments: Ni, direction: Oi, strings: ji };
  var Qt = {};
  S(Qt, {
    comments: () => Ui,
    default: () => Li,
    direction: () => Ii,
    strings: () => Pi,
    thanks_to: () => Di,
  });
  var Di = "Long Nhat Nguyen",
    Ui = "",
    Ii = "ltr",
    Pi = {
      placeholder: "T\xECm ki\u1EBFm",
      clear_search: "X\xF3a",
      load_more: "Nhi\u1EC1u k\u1EBFt qu\u1EA3 h\u01A1n",
      search_label: "T\xECm ki\u1EBFm trong trang n\xE0y",
      filters_label: "B\u1ED9 l\u1ECDc",
      zero_results:
        "Kh\xF4ng t\xECm th\u1EA5y k\u1EBFt qu\u1EA3 cho [SEARCH_TERM]",
      many_results: "[COUNT] k\u1EBFt qu\u1EA3 cho [SEARCH_TERM]",
      one_result: "[COUNT] k\u1EBFt qu\u1EA3 cho [SEARCH_TERM]",
      alt_search:
        "Kh\xF4ng t\xECm th\u1EA5y k\u1EBFt qu\u1EA3 cho [SEARCH_TERM]. Ki\u1EC3m th\u1ECB k\u1EBFt qu\u1EA3 thay th\u1EBF v\u1EDBi [DIFFERENT_TERM]",
      search_suggestion:
        "Kh\xF4ng t\xECm th\u1EA5y k\u1EBFt qu\u1EA3 cho [SEARCH_TERM]. Th\u1EED m\u1ED9t trong c\xE1c t\xECm ki\u1EBFm:",
      searching: "\u0110ang t\xECm ki\u1EBFm cho [SEARCH_TERM]...",
    },
    Li = { thanks_to: Di, comments: Ui, direction: Ii, strings: Pi };
  var xt = {};
  S(xt, {
    comments: () => Bi,
    default: () => Gi,
    direction: () => Vi,
    strings: () => Wi,
    thanks_to: () => qi,
  });
  var qi = "Amber Song",
    Bi = "",
    Vi = "ltr",
    Wi = {
      placeholder: "\u641C\u7D22",
      clear_search: "\u6E05\u9664",
      load_more: "\u52A0\u8F7D\u66F4\u591A\u7ED3\u679C",
      search_label: "\u7AD9\u5185\u641C\u7D22",
      filters_label: "\u7B5B\u9009",
      zero_results:
        "\u672A\u627E\u5230 [SEARCH_TERM] \u7684\u76F8\u5173\u7ED3\u679C",
      many_results:
        "\u627E\u5230 [COUNT] \u4E2A [SEARCH_TERM] \u7684\u76F8\u5173\u7ED3\u679C",
      one_result:
        "\u627E\u5230 [COUNT] \u4E2A [SEARCH_TERM] \u7684\u76F8\u5173\u7ED3\u679C",
      alt_search:
        "\u672A\u627E\u5230 [SEARCH_TERM] \u7684\u76F8\u5173\u7ED3\u679C\u3002\u6539\u4E3A\u663E\u793A [DIFFERENT_TERM] \u7684\u76F8\u5173\u7ED3\u679C",
      search_suggestion:
        "\u672A\u627E\u5230 [SEARCH_TERM] \u7684\u76F8\u5173\u7ED3\u679C\u3002\u8BF7\u5C1D\u8BD5\u4EE5\u4E0B\u641C\u7D22\u3002",
      searching: "\u6B63\u5728\u641C\u7D22 [SEARCH_TERM]...",
    },
    Gi = { thanks_to: qi, comments: Bi, direction: Vi, strings: Wi };
  var $t = {};
  S($t, {
    comments: () => Ji,
    default: () => Xi,
    direction: () => Yi,
    strings: () => Zi,
    thanks_to: () => Ki,
  });
  var Ki = "Amber Song",
    Ji = "",
    Yi = "ltr",
    Zi = {
      placeholder: "\u641C\u7D22",
      clear_search: "\u6E05\u9664",
      load_more: "\u52A0\u8F09\u66F4\u591A\u7D50\u679C",
      search_label: "\u7AD9\u5167\u641C\u7D22",
      filters_label: "\u7BE9\u9078",
      zero_results:
        "\u672A\u627E\u5230 [SEARCH_TERM] \u7684\u76F8\u95DC\u7D50\u679C",
      many_results:
        "\u627E\u5230 [COUNT] \u500B [SEARCH_TERM] \u7684\u76F8\u95DC\u7D50\u679C",
      one_result:
        "\u627E\u5230 [COUNT] \u500B [SEARCH_TERM] \u7684\u76F8\u95DC\u7D50\u679C",
      alt_search:
        "\u672A\u627E\u5230 [SEARCH_TERM] \u7684\u76F8\u95DC\u7D50\u679C\u3002\u6539\u70BA\u986F\u793A [DIFFERENT_TERM] \u7684\u76F8\u95DC\u7D50\u679C",
      search_suggestion:
        "\u672A\u627E\u5230 [SEARCH_TERM] \u7684\u76F8\u95DC\u7D50\u679C\u3002\u8ACB\u5617\u8A66\u4EE5\u4E0B\u641C\u7D22\u3002",
      searching: "\u6B63\u5728\u641C\u7D22 [SEARCH_TERM]...",
    },
    Xi = { thanks_to: Ki, comments: Ji, direction: Yi, strings: Zi };
  var en = {};
  S(en, {
    comments: () => xi,
    default: () => ta,
    direction: () => $i,
    strings: () => ea,
    thanks_to: () => Qi,
  });
  var Qi = "Amber Song",
    xi = "",
    $i = "ltr",
    ea = {
      placeholder: "\u641C\u7D22",
      clear_search: "\u6E05\u9664",
      load_more: "\u52A0\u8F7D\u66F4\u591A\u7ED3\u679C",
      search_label: "\u7AD9\u5185\u641C\u7D22",
      filters_label: "\u7B5B\u9009",
      zero_results:
        "\u672A\u627E\u5230 [SEARCH_TERM] \u7684\u76F8\u5173\u7ED3\u679C",
      many_results:
        "\u627E\u5230 [COUNT] \u4E2A [SEARCH_TERM] \u7684\u76F8\u5173\u7ED3\u679C",
      one_result:
        "\u627E\u5230 [COUNT] \u4E2A [SEARCH_TERM] \u7684\u76F8\u5173\u7ED3\u679C",
      alt_search:
        "\u672A\u627E\u5230 [SEARCH_TERM] \u7684\u76F8\u5173\u7ED3\u679C\u3002\u6539\u4E3A\u663E\u793A [DIFFERENT_TERM] \u7684\u76F8\u5173\u7ED3\u679C",
      search_suggestion:
        "\u672A\u627E\u5230 [SEARCH_TERM] \u7684\u76F8\u5173\u7ED3\u679C\u3002\u8BF7\u5C1D\u8BD5\u4EE5\u4E0B\u641C\u7D22\u3002",
      searching: "\u6B63\u5728\u641C\u7D22 [SEARCH_TERM]...",
    },
    ta = { thanks_to: Qi, comments: xi, direction: $i, strings: ea };
  var na = [
      bt,
      Tt,
      Ct,
      kt,
      yt,
      St,
      Mt,
      At,
      vt,
      wt,
      Ht,
      Ft,
      Nt,
      Ot,
      jt,
      zt,
      Dt,
      Ut,
      It,
      Pt,
      Lt,
      qt,
      Bt,
      Vt,
      Wt,
      Gt,
      Kt,
      Jt,
      Yt,
      Zt,
      Xt,
      Qt,
      xt,
      $t,
      en,
    ],
    Qn = na,
    xn = [
      "../../translations/af.json",
      "../../translations/bn.json",
      "../../translations/ca.json",
      "../../translations/cs.json",
      "../../translations/da.json",
      "../../translations/de.json",
      "../../translations/en.json",
      "../../translations/es.json",
      "../../translations/fi.json",
      "../../translations/fr.json",
      "../../translations/gl.json",
      "../../translations/hi.json",
      "../../translations/hr.json",
      "../../translations/hu.json",
      "../../translations/id.json",
      "../../translations/it.json",
      "../../translations/ja.json",
      "../../translations/ko.json",
      "../../translations/mi.json",
      "../../translations/nl.json",
      "../../translations/no.json",
      "../../translations/pl.json",
      "../../translations/pt.json",
      "../../translations/ro.json",
      "../../translations/ru.json",
      "../../translations/sr.json",
      "../../translations/sv.json",
      "../../translations/sw.json",
      "../../translations/ta.json",
      "../../translations/tr.json",
      "../../translations/uk.json",
      "../../translations/vi.json",
      "../../translations/zh-cn.json",
      "../../translations/zh-tw.json",
      "../../translations/zh.json",
    ];
  function $n(n, e, t) {
    let s = n.slice();
    return (s[51] = e[t]), s;
  }
  function es(n) {
    let e, t, s;
    function r(i) {
      n[37](i);
    }
    let l = {
      show_empty_filters: n[5],
      open_filters: n[6],
      available_filters: n[18],
      translate: n[20],
      automatic_translations: n[19],
      translations: n[7],
    };
    return (
      n[0] !== void 0 && (l.selected_filters = n[0]),
      (e = new Xn({ props: l })),
      le.push(() => bn(e, "selected_filters", r)),
      {
        c() {
          tt(e.$$.fragment);
        },
        m(i, a) {
          me(e, i, a), (s = !0);
        },
        p(i, a) {
          let o = {};
          a[0] & 32 && (o.show_empty_filters = i[5]),
            a[0] & 64 && (o.open_filters = i[6]),
            a[0] & 262144 && (o.available_filters = i[18]),
            a[0] & 524288 && (o.automatic_translations = i[19]),
            a[0] & 128 && (o.translations = i[7]),
            !t &&
              a[0] & 1 &&
              ((t = !0), (o.selected_filters = i[0]), pn(() => (t = !1))),
            e.$set(o);
        },
        i(i) {
          s || (D(e.$$.fragment, i), (s = !0));
        },
        o(i) {
          P(e.$$.fragment, i), (s = !1);
        },
        d(i) {
          ue(e, i);
        },
      }
    );
  }
  function ts(n) {
    let e,
      t,
      s,
      r,
      l = [la, ra],
      i = [];
    function a(o, h) {
      return o[14] ? 0 : 1;
    }
    return (
      (t = a(n, [-1, -1])),
      (s = i[t] = l[t](n)),
      {
        c() {
          (e = C("div")),
            s.c(),
            E(e, "class", "pagefind-ui__results-area svelte-e9gkc3");
        },
        m(o, h) {
          y(o, e, h), i[t].m(e, null), (r = !0);
        },
        p(o, h) {
          let c = t;
          (t = a(o, h)),
            t === c
              ? i[t].p(o, h)
              : (ae(),
                P(i[c], 1, 1, () => {
                  i[c] = null;
                }),
                oe(),
                (s = i[t]),
                s ? s.p(o, h) : ((s = i[t] = l[t](o)), s.c()),
                D(s, 1),
                s.m(e, null));
        },
        i(o) {
          r || (D(s), (r = !0));
        },
        o(o) {
          P(s), (r = !1);
        },
        d(o) {
          o && k(e), i[t].d();
        },
      }
    );
  }
  function ra(n) {
    let e,
      t,
      s,
      r = [],
      l = new Map(),
      i,
      a,
      o;
    function h(u, f) {
      return u[13].results.length === 0
        ? oa
        : u[13].results.length === 1
          ? aa
          : ia;
    }
    let c = h(n, [-1, -1]),
      m = c(n),
      p = n[13].results.slice(0, n[17]),
      d = (u) => u[51].id;
    for (let u = 0; u < p.length; u += 1) {
      let f = $n(n, p, u),
        T = d(f);
      l.set(T, (r[u] = ns(T, f)));
    }
    let _ = n[13].results.length > n[17] && ss(n);
    return {
      c() {
        (e = C("p")), m.c(), (t = A()), (s = C("ol"));
        for (let u = 0; u < r.length; u += 1) r[u].c();
        (i = A()),
          _ && _.c(),
          (a = x()),
          E(e, "class", "pagefind-ui__message svelte-e9gkc3"),
          E(s, "class", "pagefind-ui__results svelte-e9gkc3");
      },
      m(u, f) {
        y(u, e, f), m.m(e, null), y(u, t, f), y(u, s, f);
        for (let T = 0; T < r.length; T += 1) r[T] && r[T].m(s, null);
        y(u, i, f), _ && _.m(u, f), y(u, a, f), (o = !0);
      },
      p(u, f) {
        c === (c = h(u, f)) && m
          ? m.p(u, f)
          : (m.d(1), (m = c(u)), m && (m.c(), m.m(e, null))),
          f[0] & 139292 &&
            ((p = u[13].results.slice(0, u[17])),
            ae(),
            (r = Rn(r, f, d, 1, u, p, l, s, En, ns, null, $n)),
            oe()),
          u[13].results.length > u[17]
            ? _
              ? _.p(u, f)
              : ((_ = ss(u)), _.c(), _.m(a.parentNode, a))
            : _ && (_.d(1), (_ = null));
      },
      i(u) {
        if (!o) {
          for (let f = 0; f < p.length; f += 1) D(r[f]);
          o = !0;
        }
      },
      o(u) {
        for (let f = 0; f < r.length; f += 1) P(r[f]);
        o = !1;
      },
      d(u) {
        u && k(e), m.d(), u && k(t), u && k(s);
        for (let f = 0; f < r.length; f += 1) r[f].d();
        u && k(i), _ && _.d(u), u && k(a);
      },
    };
  }
  function la(n) {
    let e,
      t = n[16] && rs(n);
    return {
      c() {
        t && t.c(), (e = x());
      },
      m(s, r) {
        t && t.m(s, r), y(s, e, r);
      },
      p(s, r) {
        s[16]
          ? t
            ? t.p(s, r)
            : ((t = rs(s)), t.c(), t.m(e.parentNode, e))
          : t && (t.d(1), (t = null));
      },
      i: z,
      o: z,
      d(s) {
        t && t.d(s), s && k(e);
      },
    };
  }
  function ia(n) {
    let e =
        n[20]("many_results", n[19], n[7])
          .replace(/\[SEARCH_TERM\]/, n[16])
          .replace(
            /\[COUNT\]/,
            new Intl.NumberFormat(n[7].language).format(n[13].results.length),
          ) + "",
      t;
    return {
      c() {
        t = w(e);
      },
      m(s, r) {
        y(s, t, r);
      },
      p(s, r) {
        r[0] & 598144 &&
          e !==
            (e =
              s[20]("many_results", s[19], s[7])
                .replace(/\[SEARCH_TERM\]/, s[16])
                .replace(
                  /\[COUNT\]/,
                  new Intl.NumberFormat(s[7].language).format(
                    s[13].results.length,
                  ),
                ) + "") &&
          N(t, e);
      },
      d(s) {
        s && k(t);
      },
    };
  }
  function aa(n) {
    let e =
        n[20]("one_result", n[19], n[7])
          .replace(/\[SEARCH_TERM\]/, n[16])
          .replace(
            /\[COUNT\]/,
            new Intl.NumberFormat(n[7].language).format(1),
          ) + "",
      t;
    return {
      c() {
        t = w(e);
      },
      m(s, r) {
        y(s, t, r);
      },
      p(s, r) {
        r[0] & 589952 &&
          e !==
            (e =
              s[20]("one_result", s[19], s[7])
                .replace(/\[SEARCH_TERM\]/, s[16])
                .replace(
                  /\[COUNT\]/,
                  new Intl.NumberFormat(s[7].language).format(1),
                ) + "") &&
          N(t, e);
      },
      d(s) {
        s && k(t);
      },
    };
  }
  function oa(n) {
    let e =
        n[20]("zero_results", n[19], n[7]).replace(/\[SEARCH_TERM\]/, n[16]) +
        "",
      t;
    return {
      c() {
        t = w(e);
      },
      m(s, r) {
        y(s, t, r);
      },
      p(s, r) {
        r[0] & 589952 &&
          e !==
            (e =
              s[20]("zero_results", s[19], s[7]).replace(
                /\[SEARCH_TERM\]/,
                s[16],
              ) + "") &&
          N(t, e);
      },
      d(s) {
        s && k(t);
      },
    };
  }
  function ua(n) {
    let e, t;
    return (
      (e = new Hn({
        props: { show_images: n[2], process_result: n[4], result: n[51] },
      })),
      {
        c() {
          tt(e.$$.fragment);
        },
        m(s, r) {
          me(e, s, r), (t = !0);
        },
        p(s, r) {
          let l = {};
          r[0] & 4 && (l.show_images = s[2]),
            r[0] & 16 && (l.process_result = s[4]),
            r[0] & 139264 && (l.result = s[51]),
            e.$set(l);
        },
        i(s) {
          t || (D(e.$$.fragment, s), (t = !0));
        },
        o(s) {
          P(e.$$.fragment, s), (t = !1);
        },
        d(s) {
          ue(e, s);
        },
      }
    );
  }
  function ca(n) {
    let e, t;
    return (
      (e = new qn({
        props: { show_images: n[2], process_result: n[4], result: n[51] },
      })),
      {
        c() {
          tt(e.$$.fragment);
        },
        m(s, r) {
          me(e, s, r), (t = !0);
        },
        p(s, r) {
          let l = {};
          r[0] & 4 && (l.show_images = s[2]),
            r[0] & 16 && (l.process_result = s[4]),
            r[0] & 139264 && (l.result = s[51]),
            e.$set(l);
        },
        i(s) {
          t || (D(e.$$.fragment, s), (t = !0));
        },
        o(s) {
          P(e.$$.fragment, s), (t = !1);
        },
        d(s) {
          ue(e, s);
        },
      }
    );
  }
  function ns(n, e) {
    let t,
      s,
      r,
      l,
      i,
      a = [ca, ua],
      o = [];
    function h(c, m) {
      return c[3] ? 0 : 1;
    }
    return (
      (s = h(e, [-1, -1])),
      (r = o[s] = a[s](e)),
      {
        key: n,
        first: null,
        c() {
          (t = x()), r.c(), (l = x()), (this.first = t);
        },
        m(c, m) {
          y(c, t, m), o[s].m(c, m), y(c, l, m), (i = !0);
        },
        p(c, m) {
          e = c;
          let p = s;
          (s = h(e, m)),
            s === p
              ? o[s].p(e, m)
              : (ae(),
                P(o[p], 1, 1, () => {
                  o[p] = null;
                }),
                oe(),
                (r = o[s]),
                r ? r.p(e, m) : ((r = o[s] = a[s](e)), r.c()),
                D(r, 1),
                r.m(l.parentNode, l));
        },
        i(c) {
          i || (D(r), (i = !0));
        },
        o(c) {
          P(r), (i = !1);
        },
        d(c) {
          c && k(t), o[s].d(c), c && k(l);
        },
      }
    );
  }
  function ss(n) {
    let e,
      t = n[20]("load_more", n[19], n[7]) + "",
      s,
      r,
      l;
    return {
      c() {
        (e = C("button")),
          (s = w(t)),
          E(e, "type", "button"),
          E(e, "class", "pagefind-ui__button svelte-e9gkc3");
      },
      m(i, a) {
        y(i, e, a), b(e, s), r || ((l = J(e, "click", n[22])), (r = !0));
      },
      p(i, a) {
        a[0] & 524416 &&
          t !== (t = i[20]("load_more", i[19], i[7]) + "") &&
          N(s, t);
      },
      d(i) {
        i && k(e), (r = !1), l();
      },
    };
  }
  function rs(n) {
    let e,
      t =
        n[20]("searching", n[19], n[7]).replace(/\[SEARCH_TERM\]/, n[16]) + "",
      s;
    return {
      c() {
        (e = C("p")),
          (s = w(t)),
          E(e, "class", "pagefind-ui__message svelte-e9gkc3");
      },
      m(r, l) {
        y(r, e, l), b(e, s);
      },
      p(r, l) {
        l[0] & 589952 &&
          t !==
            (t =
              r[20]("searching", r[19], r[7]).replace(
                /\[SEARCH_TERM\]/,
                r[16],
              ) + "") &&
          N(s, t);
      },
      d(r) {
        r && k(e);
      },
    };
  }
  function _a(n) {
    let e,
      t,
      s,
      r,
      l,
      i,
      a = n[20]("clear_search", n[19], n[7]) + "",
      o,
      h,
      c,
      m,
      p,
      d,
      _,
      u,
      f = n[12] && es(n),
      T = n[15] && ts(n);
    return {
      c() {
        (e = C("div")),
          (t = C("form")),
          (s = C("input")),
          (l = A()),
          (i = C("button")),
          (o = w(a)),
          (h = A()),
          (c = C("div")),
          f && f.c(),
          (m = A()),
          T && T.c(),
          E(s, "class", "pagefind-ui__search-input svelte-e9gkc3"),
          E(s, "type", "text"),
          E(s, "placeholder", (r = n[20]("placeholder", n[19], n[7]))),
          E(s, "autocapitalize", "none"),
          E(s, "enterkeyhint", "search"),
          (s.autofocus = n[8]),
          E(i, "class", "pagefind-ui__search-clear svelte-e9gkc3"),
          B(i, "pagefind-ui__suppressed", !n[9]),
          E(c, "class", "pagefind-ui__drawer svelte-e9gkc3"),
          B(c, "pagefind-ui__hidden", !n[15]),
          E(t, "class", "pagefind-ui__form svelte-e9gkc3"),
          E(t, "role", "search"),
          E(t, "aria-label", (p = n[20]("search_label", n[19], n[7]))),
          E(t, "action", "javascript:void(0);"),
          E(e, "class", "pagefind-ui svelte-e9gkc3"),
          B(e, "pagefind-ui--reset", n[1]);
      },
      m(R, M) {
        y(R, e, M),
          b(e, t),
          b(t, s),
          dt(s, n[9]),
          n[34](s),
          b(t, l),
          b(t, i),
          b(i, o),
          n[35](i),
          b(t, h),
          b(t, c),
          f && f.m(c, null),
          b(c, m),
          T && T.m(c, null),
          (d = !0),
          n[8] && s.focus(),
          _ ||
            ((u = [
              J(s, "focus", n[21]),
              J(s, "keydown", n[32]),
              J(s, "input", n[33]),
              J(i, "click", n[36]),
              J(t, "submit", fa),
            ]),
            (_ = !0));
      },
      p(R, M) {
        (!d ||
          (M[0] & 524416 && r !== (r = R[20]("placeholder", R[19], R[7])))) &&
          E(s, "placeholder", r),
          (!d || M[0] & 256) && (s.autofocus = R[8]),
          M[0] & 512 && s.value !== R[9] && dt(s, R[9]),
          (!d || M[0] & 524416) &&
            a !== (a = R[20]("clear_search", R[19], R[7]) + "") &&
            N(o, a),
          (!d || M[0] & 512) && B(i, "pagefind-ui__suppressed", !R[9]),
          R[12]
            ? f
              ? (f.p(R, M), M[0] & 4096 && D(f, 1))
              : ((f = es(R)), f.c(), D(f, 1), f.m(c, m))
            : f &&
              (ae(),
              P(f, 1, 1, () => {
                f = null;
              }),
              oe()),
          R[15]
            ? T
              ? (T.p(R, M), M[0] & 32768 && D(T, 1))
              : ((T = ts(R)), T.c(), D(T, 1), T.m(c, null))
            : T &&
              (ae(),
              P(T, 1, 1, () => {
                T = null;
              }),
              oe()),
          (!d || M[0] & 32768) && B(c, "pagefind-ui__hidden", !R[15]),
          (!d ||
            (M[0] & 524416 &&
              p !== (p = R[20]("search_label", R[19], R[7])))) &&
            E(t, "aria-label", p),
          (!d || M[0] & 2) && B(e, "pagefind-ui--reset", R[1]);
      },
      i(R) {
        d || (D(f), D(T), (d = !0));
      },
      o(R) {
        P(f), P(T), (d = !1);
      },
      d(R) {
        R && k(e),
          n[34](null),
          n[35](null),
          f && f.d(),
          T && T.d(),
          (_ = !1),
          G(u);
      },
    };
  }
  var fa = (n) => n.preventDefault();
  function da(n, e, t) {
    let s = {},
      r = xn.map((g) => g.match(/([^\/]+)\.json$/)[1]);
    for (let g = 0; g < r.length; g++)
      s[r[g]] = { language: r[g], ...Qn[g].strings };
    let { base_path: l = "/pagefind/" } = e,
      { page_size: i = 5 } = e,
      { reset_styles: a = !0 } = e,
      { show_images: o = !0 } = e,
      { show_sub_results: h = !1 } = e,
      { excerpt_length: c } = e,
      { process_result: m = null } = e,
      { process_term: p = null } = e,
      { show_empty_filters: d = !0 } = e,
      { open_filters: _ = [] } = e,
      { debounce_timeout_ms: u = 300 } = e,
      { pagefind_options: f = {} } = e,
      { merge_index: T = [] } = e,
      { trigger_search_term: R = "" } = e,
      { translations: M = {} } = e,
      { autofocus: U = !1 } = e,
      { sort: X = null } = e,
      { selected_filters: V = {} } = e,
      v = "",
      H,
      O,
      W,
      is = 40,
      rt = !1,
      sn = [],
      lt = !1,
      it = !1,
      rn = 0,
      ln = "",
      at = i,
      an = null,
      ce = null,
      on = s.en,
      as = (g, F, j) => j[g] ?? F[g] ?? "";
    ht(() => {
      let g = document?.querySelector?.("html")?.getAttribute?.("lang") || "en",
        F = nt(g.toLocaleLowerCase());
      t(
        19,
        (on =
          s[`${F.language}-${F.script}-${F.region}`] ||
          s[`${F.language}-${F.region}`] ||
          s[`${F.language}`] ||
          s.en),
      );
    }),
      mt(() => {
        H?.destroy?.(), (H = null);
      });
    let un = async () => {
        if (!rt && (t(12, (rt = !0)), !H)) {
          let g;
          try {
            g = await import(`${l}pagefind.js`);
          } catch (j) {
            console.error(j),
              console.error(
                [
                  `Pagefind couldn't be loaded from ${this.options.bundlePath}pagefind.js`,
                  "You can configure this by passing a bundlePath option to PagefindUI",
                ].join(`
`),
              ),
              document?.currentScript &&
              document.currentScript.tagName.toUpperCase() === "SCRIPT"
                ? console.error(
                    `[DEBUG: Loaded from ${document.currentScript.src ?? "bad script location"}]`,
                  )
                : console.error("no known script location");
          }
          c || t(24, (c = h ? 12 : 30));
          let F = { ...(f || {}), excerptLength: c };
          await g.options(F);
          for (let j of T) {
            if (!j.bundlePath)
              throw new Error("mergeIndex requires a bundlePath parameter");
            let L = j.bundlePath;
            delete j.bundlePath, await g.mergeIndex(L, j);
          }
          (H = g), os();
        }
      },
      os = async () => {
        H &&
          ((an = await H.filters()),
          (!ce || !Object.keys(ce).length) && t(18, (ce = an)));
      },
      us = (g) => {
        let F = {};
        return (
          Object.entries(g)
            .filter(([, j]) => j)
            .forEach(([j]) => {
              let [L, te] = j.split(/:(.*)$/);
              (F[L] = F[L] || []), F[L].push(te);
            }),
          F
        );
      },
      _e,
      cs = async (g, F) => {
        if (!g) {
          t(15, (it = !1)), _e && clearTimeout(_e);
          return;
        }
        let j = us(F),
          L = () => _s(g, j);
        u > 0 && g
          ? (_e && clearTimeout(_e),
            (_e = setTimeout(L, u)),
            await cn(),
            H.preload(g, { filters: j }))
          : L(),
          fs();
      },
      cn = async () => {
        for (; !H; ) un(), await new Promise((g) => setTimeout(g, 50));
      },
      _s = async (g, F) => {
        t(16, (ln = g || "")),
          typeof p == "function" && (g = p(g)),
          t(14, (lt = !0)),
          t(15, (it = !0)),
          await cn();
        let j = ++rn,
          L = { filters: F };
        X && typeof X == "object" && (L.sort = X);
        let te = await H.search(g, L);
        rn === j &&
          (te.filters &&
            Object.keys(te.filters)?.length &&
            t(18, (ce = te.filters)),
          t(13, (sn = te)),
          t(14, (lt = !1)),
          t(17, (at = i)));
      },
      fs = () => {
        let g = W.offsetWidth;
        g != is && t(10, (O.style.paddingRight = `${g + 2}px`), O);
      },
      ds = (g) => {
        g?.preventDefault(), t(17, (at += i));
      },
      hs = (g) => {
        g.key === "Escape" && (t(9, (v = "")), O.blur()),
          g.key === "Enter" && g.preventDefault();
      };
    function ms() {
      (v = this.value), t(9, v), t(23, R);
    }
    function ps(g) {
      le[g ? "unshift" : "push"](() => {
        (O = g), t(10, O);
      });
    }
    function gs(g) {
      le[g ? "unshift" : "push"](() => {
        (W = g), t(11, W);
      });
    }
    let Es = () => {
      t(9, (v = "")), O.blur();
    };
    function Rs(g) {
      (V = g), t(0, V);
    }
    return (
      (n.$$set = (g) => {
        "base_path" in g && t(25, (l = g.base_path)),
          "page_size" in g && t(26, (i = g.page_size)),
          "reset_styles" in g && t(1, (a = g.reset_styles)),
          "show_images" in g && t(2, (o = g.show_images)),
          "show_sub_results" in g && t(3, (h = g.show_sub_results)),
          "excerpt_length" in g && t(24, (c = g.excerpt_length)),
          "process_result" in g && t(4, (m = g.process_result)),
          "process_term" in g && t(27, (p = g.process_term)),
          "show_empty_filters" in g && t(5, (d = g.show_empty_filters)),
          "open_filters" in g && t(6, (_ = g.open_filters)),
          "debounce_timeout_ms" in g && t(28, (u = g.debounce_timeout_ms)),
          "pagefind_options" in g && t(29, (f = g.pagefind_options)),
          "merge_index" in g && t(30, (T = g.merge_index)),
          "trigger_search_term" in g && t(23, (R = g.trigger_search_term)),
          "translations" in g && t(7, (M = g.translations)),
          "autofocus" in g && t(8, (U = g.autofocus)),
          "sort" in g && t(31, (X = g.sort)),
          "selected_filters" in g && t(0, (V = g.selected_filters));
      }),
      (n.$$.update = () => {
        if (n.$$.dirty[0] & 8388608) e: R && (t(9, (v = R)), t(23, (R = "")));
        if (n.$$.dirty[0] & 513) e: cs(v, V);
      }),
      [
        V,
        a,
        o,
        h,
        m,
        d,
        _,
        M,
        U,
        v,
        O,
        W,
        rt,
        sn,
        lt,
        it,
        ln,
        at,
        ce,
        on,
        as,
        un,
        ds,
        R,
        c,
        l,
        i,
        p,
        u,
        f,
        T,
        X,
        hs,
        ms,
        ps,
        gs,
        Es,
        Rs,
      ]
    );
  }
  var tn = class extends q {
      constructor(e) {
        super(),
          Y(
            this,
            e,
            da,
            _a,
            K,
            {
              base_path: 25,
              page_size: 26,
              reset_styles: 1,
              show_images: 2,
              show_sub_results: 3,
              excerpt_length: 24,
              process_result: 4,
              process_term: 27,
              show_empty_filters: 5,
              open_filters: 6,
              debounce_timeout_ms: 28,
              pagefind_options: 29,
              merge_index: 30,
              trigger_search_term: 23,
              translations: 7,
              autofocus: 8,
              sort: 31,
              selected_filters: 0,
            },
            null,
            [-1, -1],
          );
      }
    },
    ls = tn;
  var nn;
  try {
    document?.currentScript &&
      document.currentScript.tagName.toUpperCase() === "SCRIPT" &&
      (nn = new URL(document.currentScript.src).pathname.match(
        /^(.*\/)(?:pagefind-)?ui.js.*$/,
      )[1]);
  } catch {
    nn = "/pagefind/";
  }
  var st = class {
    constructor(e) {
      this._pfs = null;
      let t = e.element ?? "[data-pagefind-ui]",
        s = e.bundlePath ?? nn,
        r = e.pageSize ?? 5,
        l = e.resetStyles ?? !0,
        i = e.showImages ?? !0,
        a = e.showSubResults ?? !1,
        o = e.excerptLength ?? 0,
        h = e.processResult ?? null,
        c = e.processTerm ?? null,
        m = e.showEmptyFilters ?? !0,
        p = e.openFilters ?? [],
        d = e.debounceTimeoutMs ?? 300,
        _ = e.mergeIndex ?? [],
        u = e.translations ?? [],
        f = e.autofocus ?? !1,
        T = e.sort ?? null;
      delete e.element,
        delete e.bundlePath,
        delete e.pageSize,
        delete e.resetStyles,
        delete e.showImages,
        delete e.showSubResults,
        delete e.excerptLength,
        delete e.processResult,
        delete e.processTerm,
        delete e.showEmptyFilters,
        delete e.openFilters,
        delete e.debounceTimeoutMs,
        delete e.mergeIndex,
        delete e.translations,
        delete e.autofocus,
        delete e.sort;
      let R = t instanceof HTMLElement ? t : document.querySelector(t);
      R
        ? (this._pfs = new ls({
            target: R,
            props: {
              base_path: s,
              page_size: r,
              reset_styles: l,
              show_images: i,
              show_sub_results: a,
              excerpt_length: o,
              process_result: h,
              process_term: c,
              show_empty_filters: m,
              open_filters: p,
              debounce_timeout_ms: d,
              merge_index: _,
              translations: u,
              autofocus: f,
              sort: T,
              pagefind_options: e,
            },
          }))
        : console.error(`Pagefind UI couldn't find the selector ${t}`);
    }
    triggerSearch(e) {
      this._pfs.$$set({ trigger_search_term: e });
    }
    triggerFilters(e) {
      let t = {};
      for (let [s, r] of Object.entries(e))
        if (Array.isArray(r)) for (let l of r) t[`${s}:${l}`] = !0;
        else t[`${s}:${r}`] = !0;
      this._pfs.$$set({ selected_filters: t });
    }
    destroy() {
      this._pfs.$destroy();
    }
  };
  window.PagefindUI = st;
})();
