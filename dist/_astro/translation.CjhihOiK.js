import { s as W } from "./config.DKliKzfC.js";
function E() {}
function V(t, e) {
  for (const n in e) t[n] = e[n];
  return t;
}
function H(t) {
  return t();
}
function z() {
  return Object.create(null);
}
function x(t) {
  t.forEach(H);
}
function B(t) {
  return "function" == typeof t;
}
function yt(t, e) {
  return t != t
    ? e == e
    : t !== e || (t && "object" == typeof t) || "function" == typeof t;
}
function J(t) {
  return 0 === Object.keys(t).length;
}
function Tt(t, e, n, o) {
  if (t) {
    const i = O(t, e, n, o);
    return t[0](i);
  }
}
function O(t, e, n, o) {
  return t[1] && o ? V(n.ctx.slice(), t[1](o(e))) : n.ctx;
}
function vt(t, e, n, o) {
  if (t[2] && o) {
    const i = t[2](o(n));
    if (void 0 === e.dirty) return i;
    if ("object" == typeof i) {
      const t = [],
        n = Math.max(e.dirty.length, i.length);
      for (let o = 0; o < n; o += 1) t[o] = e.dirty[o] | i[o];
      return t;
    }
    return e.dirty | i;
  }
  return e.dirty;
}
function At(t, e, n, o, i, r) {
  if (i) {
    const s = O(e, n, o, r);
    t.p(s, i);
  }
}
function $t(t) {
  if (t.ctx.length > 32) {
    const e = [],
      n = t.ctx.length / 32;
    for (let t = 0; t < n; t++) e[t] = -1;
    return e;
  }
  return -1;
}
let w,
  v = !1;
function Q() {
  v = !0;
}
function X() {
  v = !1;
}
function Y(t, e, n, o) {
  for (; t < e; ) {
    const i = t + ((e - t) >> 1);
    n(i) <= o ? (t = i + 1) : (e = i);
  }
  return t;
}
function Z(t) {
  if (t.hydrate_init) return;
  t.hydrate_init = !0;
  let e = t.childNodes;
  if ("HEAD" === t.nodeName) {
    const t = [];
    for (let n = 0; n < e.length; n++) {
      const o = e[n];
      void 0 !== o.claim_order && t.push(o);
    }
    e = t;
  }
  const n = new Int32Array(e.length + 1),
    o = new Int32Array(e.length);
  n[0] = -1;
  let i = 0;
  for (let t = 0; t < e.length; t++) {
    const r = e[t].claim_order,
      s =
        (i > 0 && e[n[i]].claim_order <= r
          ? i + 1
          : Y(1, i, (t) => e[n[t]].claim_order, r)) - 1;
    o[t] = n[s] + 1;
    const a = s + 1;
    (n[a] = t), (i = Math.max(a, i));
  }
  const r = [],
    s = [];
  let a = e.length - 1;
  for (let t = n[i] + 1; 0 != t; t = o[t - 1]) {
    for (r.push(e[t - 1]); a >= t; a--) s.push(e[a]);
    a--;
  }
  for (; a >= 0; a--) s.push(e[a]);
  r.reverse(), s.sort((t, e) => t.claim_order - e.claim_order);
  for (let e = 0, n = 0; e < s.length; e++) {
    for (; n < r.length && s[e].claim_order >= r[n].claim_order; ) n++;
    const o = n < r.length ? r[n] : null;
    t.insertBefore(s[e], o);
  }
}
function I(t, e) {
  if (v) {
    for (
      Z(t),
        (void 0 === t.actual_end_child ||
          (null !== t.actual_end_child &&
            t.actual_end_child.parentNode !== t)) &&
          (t.actual_end_child = t.firstChild);
      null !== t.actual_end_child && void 0 === t.actual_end_child.claim_order;

    )
      t.actual_end_child = t.actual_end_child.nextSibling;
    e !== t.actual_end_child
      ? (void 0 !== e.claim_order || e.parentNode !== t) &&
        t.insertBefore(e, t.actual_end_child)
      : (t.actual_end_child = e.nextSibling);
  } else (e.parentNode !== t || null !== e.nextSibling) && t.appendChild(e);
}
function K(t, e, n) {
  t.insertBefore(e, n || null);
}
function tt(t, e, n) {
  v && !n
    ? I(t, e)
    : (e.parentNode !== t || e.nextSibling != n) &&
      t.insertBefore(e, n || null);
}
function T(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Et(t, e) {
  for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
}
function R(t) {
  return document.createElement(t);
}
function et(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function U(t) {
  return document.createTextNode(t);
}
function Mt() {
  return U(" ");
}
function Nt(t, e, n, o) {
  return t.addEventListener(e, n, o), () => t.removeEventListener(e, n, o);
}
function St(t, e, n) {
  null == n
    ? t.removeAttribute(e)
    : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Pt(t) {
  return "" === t ? null : +t;
}
function nt(t) {
  return Array.from(t.childNodes);
}
function q(t) {
  void 0 === t.claim_info &&
    (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function F(t, e, n, o, i = !1) {
  q(t);
  const r = (() => {
    for (let o = t.claim_info.last_index; o < t.length; o++) {
      const r = t[o];
      if (e(r)) {
        const e = n(r);
        return (
          void 0 === e ? t.splice(o, 1) : (t[o] = e),
          i || (t.claim_info.last_index = o),
          r
        );
      }
    }
    for (let o = t.claim_info.last_index - 1; o >= 0; o--) {
      const r = t[o];
      if (e(r)) {
        const e = n(r);
        return (
          void 0 === e ? t.splice(o, 1) : (t[o] = e),
          i
            ? void 0 === e && t.claim_info.last_index--
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
function it(t, e, n, o) {
  return F(
    t,
    (t) => t.nodeName === e,
    (t) => {
      const e = [];
      for (let o = 0; o < t.attributes.length; o++) {
        const i = t.attributes[o];
        n[i.name] || e.push(i.name);
      }
      e.forEach((e) => t.removeAttribute(e));
    },
    () => o(e),
  );
}
function zt(t, e, n) {
  return it(t, e, n, R);
}
function ot(t, e) {
  return F(
    t,
    (t) => 3 === t.nodeType,
    (t) => {
      const n = "" + e;
      if (t.data.startsWith(n)) {
        if (t.data.length !== n.length) return t.splitText(n.length);
      } else t.data = n;
    },
    () => U(e),
    !0,
  );
}
function Lt(t) {
  return ot(t, " ");
}
function L(t, e, n) {
  for (let o = n; o < t.length; o += 1) {
    const n = t[o];
    if (8 === n.nodeType && n.textContent.trim() === e) return o;
  }
  return -1;
}
function kt(t, e) {
  const n = L(t, "HTML_TAG_START", 0),
    o = L(t, "HTML_TAG_END", n + 1);
  if (-1 === n || -1 === o) return new A(e);
  q(t);
  const i = t.splice(n, o - n + 1);
  T(i[0]), T(i[i.length - 1]);
  const r = i.slice(1, i.length - 1);
  if (0 === r.length) return new A(e);
  for (const e of r)
    (e.claim_order = t.claim_info.total_claimed),
      (t.claim_info.total_claimed += 1);
  return new A(e, r);
}
function jt(t, e) {
  (e = "" + e), t.data !== e && (t.data = e);
}
function Dt(t, e) {
  t.value = e ?? "";
}
function Ht(t, e, n, o) {
  t.style.setProperty(e, n, "");
}
function Bt(t, e, n) {
  t.classList.toggle(e, !!n);
}
class rt {
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
  m(t, e, n = null) {
    this.e ||
      (this.is_svg
        ? (this.e = et(e.nodeName))
        : (this.e = R(11 === e.nodeType ? "TEMPLATE" : e.nodeName)),
      (this.t = "TEMPLATE" !== e.tagName ? e : e.content),
      this.c(t)),
      this.i(n);
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
    for (let e = 0; e < this.n.length; e += 1) K(this.t, this.n[e], t);
  }
  p(t) {
    this.d(), this.h(t), this.i(this.a);
  }
  d() {
    this.n.forEach(T);
  }
}
class A extends rt {
  l = void 0;
  constructor(t = !1, e) {
    super(t), (this.e = this.n = null), (this.l = e);
  }
  c(t) {
    this.l ? (this.n = this.l) : super.c(t);
  }
  i(t) {
    for (let e = 0; e < this.n.length; e += 1) tt(this.t, this.n[e], t);
  }
}
function C(t) {
  w = t;
}
function st() {
  if (!w) throw new Error("Function called outside component initialization");
  return w;
}
function Ot(t) {
  st().$$.on_mount.push(t);
}
const m = [],
  k = [];
let g = [];
const j = [],
  ut = Promise.resolve();
let M = !1;
function ct() {
  M || ((M = !0), ut.then(G));
}
function N(t) {
  g.push(t);
}
const $ = new Set();
let _ = 0;
function G() {
  if (0 !== _) return;
  const t = w;
  do {
    try {
      for (; _ < m.length; ) {
        const t = m[_];
        _++, C(t), lt(t.$$);
      }
    } catch (t) {
      throw ((m.length = 0), (_ = 0), t);
    }
    for (C(null), m.length = 0, _ = 0; k.length; ) k.pop()();
    for (let t = 0; t < g.length; t += 1) {
      const e = g[t];
      $.has(e) || ($.add(e), e());
    }
    g.length = 0;
  } while (m.length);
  for (; j.length; ) j.pop()();
  (M = !1), $.clear(), C(t);
}
function lt(t) {
  if (null !== t.fragment) {
    t.update(), x(t.before_update);
    const e = t.dirty;
    (t.dirty = [-1]),
      t.fragment && t.fragment.p(t.ctx, e),
      t.after_update.forEach(N);
  }
}
function at(t) {
  const e = [],
    n = [];
  g.forEach((o) => (-1 === t.indexOf(o) ? e.push(o) : n.push(o))),
    n.forEach((t) => t()),
    (g = e);
}
const y = new Set();
let h;
function Rt() {
  h = { r: 0, c: [], p: h };
}
function Ut() {
  h.r || x(h.c), (h = h.p);
}
function ft(t, e) {
  t && t.i && (y.delete(t), t.i(e));
}
function qt(t, e, n, o) {
  if (t && t.o) {
    if (y.has(t)) return;
    y.add(t),
      h.c.push(() => {
        y.delete(t), o && (n && t.d(1), o());
      }),
      t.o(e);
  } else o && o();
}
function dt(t, e, n) {
  const { fragment: o, after_update: i } = t.$$;
  o && o.m(e, n),
    N(() => {
      const e = t.$$.on_mount.map(H).filter(B);
      t.$$.on_destroy ? t.$$.on_destroy.push(...e) : x(e), (t.$$.on_mount = []);
    }),
    i.forEach(N);
}
function ht(t, e) {
  const n = t.$$;
  null !== n.fragment &&
    (at(n.after_update),
    x(n.on_destroy),
    n.fragment && n.fragment.d(e),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function _t(t, e) {
  -1 === t.$$.dirty[0] && (m.push(t), ct(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function Ft(t, e, n, o, i, r, s = null, a = [-1]) {
  const c = w;
  C(t);
  const u = (t.$$ = {
    fragment: null,
    ctx: [],
    props: r,
    update: E,
    not_equal: i,
    bound: z(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (c ? c.$$.context : [])),
    callbacks: z(),
    dirty: a,
    skip_bound: !1,
    root: e.target || c.$$.root,
  });
  s && s(u.root);
  let l = !1;
  if (
    ((u.ctx = n
      ? n(t, e.props || {}, (e, n, ...o) => {
          const r = o.length ? o[0] : n;
          return (
            u.ctx &&
              i(u.ctx[e], (u.ctx[e] = r)) &&
              (!u.skip_bound && u.bound[e] && u.bound[e](r), l && _t(t, e)),
            n
          );
        })
      : []),
    u.update(),
    (l = !0),
    x(u.before_update),
    (u.fragment = !!o && o(u.ctx)),
    e.target)
  ) {
    if (e.hydrate) {
      Q();
      const t = nt(e.target);
      u.fragment && u.fragment.l(t), t.forEach(T);
    } else u.fragment && u.fragment.c();
    e.intro && ft(t.$$.fragment), dt(t, e.target, e.anchor), X(), G();
  }
  C(c);
}
class Gt {
  $$ = void 0;
  $$set = void 0;
  $destroy() {
    ht(this, 1), (this.$destroy = E);
  }
  $on(t, e) {
    if (!B(e)) return E;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return (
      n.push(e),
      () => {
        const t = n.indexOf(e);
        -1 !== t && n.splice(t, 1);
      }
    );
  }
  $set(t) {
    this.$$set &&
      !J(t) &&
      ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
  }
}
const mt = "4";
typeof window < "u" &&
  (window.__svelte || (window.__svelte = { v: new Set() })).v.add(mt);
var i = ((t) => (
  (t.home = "home"),
  (t.about = "about"),
  (t.archive = "archive"),
  (t.search = "search"),
  (t.tags = "tags"),
  (t.categories = "categories"),
  (t.recentPosts = "recentPosts"),
  (t.comments = "comments"),
  (t.untitled = "untitled"),
  (t.uncategorized = "uncategorized"),
  (t.noTags = "noTags"),
  (t.wordCount = "wordCount"),
  (t.wordsCount = "wordsCount"),
  (t.minuteCount = "minuteCount"),
  (t.minutesCount = "minutesCount"),
  (t.postCount = "postCount"),
  (t.postsCount = "postsCount"),
  (t.themeColor = "themeColor"),
  (t.lightMode = "lightMode"),
  (t.darkMode = "darkMode"),
  (t.systemMode = "systemMode"),
  (t.more = "more"),
  (t.author = "author"),
  (t.DateStartedAt = "DateStartedAt"),
  (t.license = "license"),
  t
))(i || {});
const p = {
    [i.home]: "Home",
    [i.about]: "About",
    [i.archive]: "Archive",
    [i.search]: "Search",
    [i.tags]: "Tags",
    [i.categories]: "Categories",
    [i.recentPosts]: "Recent Posts",
    [i.comments]: "Comments",
    [i.untitled]: "Untitled",
    [i.uncategorized]: "Uncategorized",
    [i.noTags]: "No Tags",
    [i.wordCount]: "word",
    [i.wordsCount]: "words",
    [i.minuteCount]: "minute",
    [i.minutesCount]: "minutes",
    [i.postCount]: "post",
    [i.postsCount]: "posts",
    [i.themeColor]: "Theme Color",
    [i.lightMode]: "Light",
    [i.darkMode]: "Dark",
    [i.systemMode]: "System",
    [i.more]: "More",
    [i.author]: "Author",
    [i.DateStartedAt]: "Published at",
    [i.license]: "License",
  },
  D = {
    [i.home]: "Home",
    [i.about]: "About",
    [i.archive]: "Archive",
    [i.tags]: "タグ",
    [i.categories]: "カテゴリ",
    [i.recentPosts]: "最近の投稿",
    [i.comments]: "コメント",
    [i.untitled]: "タイトルなし",
    [i.uncategorized]: "カテゴリなし",
    [i.noTags]: "タグなし",
    [i.wordCount]: "文字",
    [i.wordsCount]: "文字",
    [i.minuteCount]: "分",
    [i.minutesCount]: "分",
    [i.postCount]: "件の投稿",
    [i.postsCount]: "件の投稿",
    [i.themeColor]: "テーマカラー",
    [i.more]: "もっと",
    [i.author]: "作者",
    [i.DateStartedAt]: "公開日",
    [i.license]: "ライセンス",
  },
  gt = {
    [i.home]: "主页",
    [i.about]: "关于",
    [i.archive]: "归档",
    [i.search]: "搜索",
    [i.tags]: "标签",
    [i.categories]: "分类",
    [i.recentPosts]: "最新文章",
    [i.comments]: "评论",
    [i.untitled]: "无标题",
    [i.uncategorized]: "未分类",
    [i.noTags]: "无标签",
    [i.wordCount]: "字",
    [i.wordsCount]: "字",
    [i.minuteCount]: "分钟",
    [i.minutesCount]: "分钟",
    [i.postCount]: "篇文章",
    [i.postsCount]: "篇文章",
    [i.themeColor]: "主题色",
    [i.lightMode]: "亮色",
    [i.darkMode]: "暗色",
    [i.systemMode]: "跟随系统",
    [i.more]: "更多",
    [i.author]: "作者",
    [i.DateStartedAt]: "发布于",
    [i.license]: "许可协议",
  },
  pt = {
    [i.home]: "首頁",
    [i.about]: "關於",
    [i.archive]: "彙整",
    [i.tags]: "標籤",
    [i.categories]: "分類",
    [i.recentPosts]: "最新文章",
    [i.comments]: "評論",
    [i.untitled]: "無標題",
    [i.uncategorized]: "未分類",
    [i.noTags]: "無標籤",
    [i.wordCount]: "字",
    [i.wordsCount]: "字",
    [i.minuteCount]: "分鐘",
    [i.minutesCount]: "分鐘",
    [i.postCount]: "篇文章",
    [i.postsCount]: "篇文章",
    [i.themeColor]: "主題色",
    [i.more]: "更多",
    [i.author]: "作者",
    [i.DateStartedAt]: "發佈於",
    [i.license]: "許可協議",
  },
  Ct = p,
  wt = {
    en: p,
    en_us: p,
    en_gb: p,
    en_au: p,
    zh_cn: gt,
    zh_tw: pt,
    ja: D,
    ja_jp: D,
  };
function xt(t) {
  return wt[t.toLowerCase()] || Ct;
}
function Wt(t) {
  return xt(W.lang)[t];
}
export {
  Pt as A,
  Ut as B,
  Et as C,
  Ot as D,
  kt as E,
  Rt as F,
  A as H,
  i as I,
  Gt as S,
  Wt as a,
  Mt as b,
  Tt as c,
  zt as d,
  R as e,
  nt as f,
  ot as g,
  Lt as h,
  Ft as i,
  T as j,
  St as k,
  Bt as l,
  Ht as m,
  tt as n,
  I as o,
  Dt as p,
  Nt as q,
  $t as r,
  yt as s,
  U as t,
  At as u,
  vt as v,
  jt as w,
  ft as x,
  qt as y,
  x as z,
};
