import {
  S as Y,
  i as Z,
  s as y,
  c as I,
  e as _,
  x as O,
  a as N,
  b as f,
  d as v,
  y as W,
  f as U,
  g,
  h as s,
  C as P,
  D as K,
  j as tt,
  k as l,
  l as F,
  m as $,
  u as et,
  n as ot,
  o as st,
  A as at,
  t as nt,
  q as rt,
  v as it,
  E as ut,
} from "./index.DajrE5E-.js";
import { s as lt, g as ct, a as G, b as dt } from "./setting-utils.X5eFwt-v.js";
var t = ((t) => (
  (t.home = "home"),
  (t.about = "about"),
  (t.archive = "archive"),
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
  (t.more = "more"),
  (t.author = "author"),
  (t.DateStartedAt = "DateStartedAt"),
  (t.license = "license"),
  t
))(t || {});
const A = {
    [t.home]: "Home",
    [t.about]: "About",
    [t.archive]: "Archive",
    [t.tags]: "Tags",
    [t.categories]: "Categories",
    [t.recentPosts]: "Recent Posts",
    [t.comments]: "Comments",
    [t.untitled]: "Untitled",
    [t.uncategorized]: "Uncategorized",
    [t.noTags]: "No Tags",
    [t.wordCount]: "word",
    [t.wordsCount]: "words",
    [t.minuteCount]: "minute",
    [t.minutesCount]: "minutes",
    [t.postCount]: "post",
    [t.postsCount]: "posts",
    [t.themeColor]: "Theme Color",
    [t.more]: "More",
    [t.author]: "Author",
    [t.DateStartedAt]: "DateStarted at",
    [t.license]: "License",
  },
  J = {
    [t.home]: "Home",
    [t.about]: "About",
    [t.archive]: "Archive",
    [t.tags]: "タグ",
    [t.categories]: "カテゴリ",
    [t.recentPosts]: "最近の投稿",
    [t.comments]: "コメント",
    [t.untitled]: "タイトルなし",
    [t.uncategorized]: "カテゴリなし",
    [t.noTags]: "タグなし",
    [t.wordCount]: "文字",
    [t.wordsCount]: "文字",
    [t.minuteCount]: "分",
    [t.minutesCount]: "分",
    [t.postCount]: "件の投稿",
    [t.postsCount]: "件の投稿",
    [t.themeColor]: "テーマカラー",
    [t.more]: "もっと",
    [t.author]: "作者",
    [t.DateStartedAt]: "公開日",
    [t.license]: "ライセンス",
  },
  mt = {
    [t.home]: "主页",
    [t.about]: "关于",
    [t.archive]: "归档",
    [t.tags]: "标签",
    [t.categories]: "分类",
    [t.recentPosts]: "最新文章",
    [t.comments]: "评论",
    [t.untitled]: "无标题",
    [t.uncategorized]: "未分类",
    [t.noTags]: "无标签",
    [t.wordCount]: "字",
    [t.wordsCount]: "字",
    [t.minuteCount]: "分钟",
    [t.minutesCount]: "分钟",
    [t.postCount]: "篇文章",
    [t.postsCount]: "篇文章",
    [t.themeColor]: "主题色",
    [t.more]: "更多",
    [t.author]: "作者",
    [t.DateStartedAt]: "发布于",
    [t.license]: "许可协议",
  },
  ht = {
    [t.home]: "首頁",
    [t.about]: "關於",
    [t.archive]: "彙整",
    [t.tags]: "標籤",
    [t.categories]: "分類",
    [t.recentPosts]: "最新文章",
    [t.comments]: "評論",
    [t.untitled]: "無標題",
    [t.uncategorized]: "未分類",
    [t.noTags]: "無標籤",
    [t.wordCount]: "字",
    [t.wordsCount]: "字",
    [t.minuteCount]: "分鐘",
    [t.minutesCount]: "分鐘",
    [t.postCount]: "篇文章",
    [t.postsCount]: "篇文章",
    [t.themeColor]: "主題色",
    [t.more]: "更多",
    [t.author]: "作者",
    [t.DateStartedAt]: "發佈於",
    [t.license]: "許可協議",
  },
  _t = A,
  ft = {
    en: A,
    en_us: A,
    en_gb: A,
    en_au: A,
    zh_cn: mt,
    zh_tw: ht,
    ja: J,
    ja_jp: J,
  };
function gt(t) {
  return ft[t.toLowerCase()] || _t;
}
function Q(t) {
  return gt(lt.lang)[t];
}
const pt = (t) => ({}),
  X = (t) => ({});
function vt(e) {
  let o,
    a,
    n,
    r,
    i,
    u,
    c,
    d,
    m,
    h,
    C,
    b,
    p,
    w,
    x,
    A,
    k,
    D = Q(t.themeColor) + "";
  const y = e[4]["restore-icon"],
    T = I(y, e, e[3], X);
  return {
    c() {
      (o = _("div")),
        (a = _("div")),
        (n = _("div")),
        (r = O(D)),
        (i = N()),
        (u = _("button")),
        (c = _("div")),
        T && T.c(),
        (d = N()),
        (m = _("div")),
        (h = _("div")),
        (C = O(e[0])),
        (b = N()),
        (p = _("div")),
        (w = _("input")),
        this.h();
    },
    l(t) {
      o = f(t, "DIV", { id: !0, class: !0 });
      var s = v(o);
      a = f(s, "DIV", { class: !0 });
      var l = v(a);
      n = f(l, "DIV", { class: !0 });
      var _ = v(n);
      (r = W(_, D)),
        (i = U(_)),
        (u = f(_, "BUTTON", { "aria-label": !0, class: !0 }));
      var x = v(u);
      c = f(x, "DIV", { class: !0 });
      var A = v(c);
      T && T.l(A),
        A.forEach(g),
        x.forEach(g),
        _.forEach(g),
        (d = U(l)),
        (m = f(l, "DIV", { class: !0 }));
      var $ = v(m);
      h = f($, "DIV", { id: !0, class: !0 });
      var k = v(h);
      (C = W(k, e[0])),
        k.forEach(g),
        $.forEach(g),
        l.forEach(g),
        (b = U(s)),
        (p = f(s, "DIV", { class: !0 }));
      var y = v(p);
      (w = f(y, "INPUT", {
        "aria-label": !0,
        type: !0,
        min: !0,
        max: !0,
        class: !0,
        id: !0,
        step: !0,
        style: !0,
      })),
        y.forEach(g),
        s.forEach(g),
        this.h();
    },
    h() {
      s(c, "class", "text-[var(--btn-content)] svelte-3akcb9"),
        s(u, "aria-label", "Reset to Default"),
        s(
          u,
          "class",
          "btn-regular w-7 h-7 rounded-md active:scale-90 svelte-3akcb9",
        ),
        P(u, "opacity-0", e[0] === e[1]),
        P(u, "pointer-events-none", e[0] === e[1]),
        s(
          n,
          "class",
          "flex gap-2 font-bold text-lg text-neutral-900 dark:text-neutral-100 transition relative ml-3 before:w-1 before:h-4 before:rounded-md before:bg-[var(--primary)] before:absolute before:-left-3 before:top-[0.33rem] svelte-3akcb9",
        ),
        s(h, "id", "hueValue"),
        s(
          h,
          "class",
          "transition bg-[var(--btn-regular-bg)] w-10 h-7 rounded-md flex justify-center font-bold text-sm items-center text-[var(--btn-content)] svelte-3akcb9",
        ),
        s(m, "class", "flex gap-1 svelte-3akcb9"),
        s(
          a,
          "class",
          "flex flex-row gap-2 mb-3 items-center justify-between svelte-3akcb9",
        ),
        s(w, "aria-label", Q(t.themeColor)),
        s(w, "type", "range"),
        s(w, "min", "0"),
        s(w, "max", "360"),
        s(w, "class", "slider svelte-3akcb9"),
        s(w, "id", "colorSlider"),
        s(w, "step", "5"),
        K(w, "width", "100%"),
        s(
          p,
          "class",
          "w-full h-6 px-1 bg-[oklch(0.80_0.10_0)] dark:bg-[oklch(0.70_0.10_0)] rounded select-none svelte-3akcb9",
        ),
        s(o, "id", "display-setting"),
        s(
          o,
          "class",
          "float-panel closed absolute transition-all w-80 fixed right-4 px-4 py-4 svelte-3akcb9",
        );
    },
    m(t, s) {
      tt(t, o, s),
        l(o, a),
        l(a, n),
        l(n, r),
        l(n, i),
        l(n, u),
        l(u, c),
        T && T.m(c, null),
        l(a, d),
        l(a, m),
        l(m, h),
        l(h, C),
        l(o, b),
        l(o, p),
        l(p, w),
        F(w, e[0]),
        (x = !0),
        A ||
          ((k = [
            $(u, "click", e[2]),
            $(w, "change", e[5]),
            $(w, "input", e[5]),
          ]),
          (A = !0));
    },
    p(t, [e]) {
      T &&
        T.p &&
        (!x || 8 & e) &&
        et(T, y, t, t[3], x ? st(y, t[3], e, pt) : ot(t[3]), X),
        (!x || 3 & e) && P(u, "opacity-0", t[0] === t[1]),
        (!x || 3 & e) && P(u, "pointer-events-none", t[0] === t[1]),
        (!x || 1 & e) && at(C, t[0]),
        1 & e && F(w, t[0]);
    },
    i(t) {
      x || (nt(T, t), (x = !0));
    },
    o(t) {
      rt(T, t), (x = !1);
    },
    d(t) {
      t && g(o), T && T.d(t), (A = !1), it(k);
    },
  };
}
function Ct(t, e, s) {
  let { $$slots: o = {}, $$scope: a } = e,
    n = ct();
  const r = G();
  return (
    (t.$$set = (t) => {
      "$$scope" in t && s(3, (a = t.$$scope));
    }),
    (t.$$.update = () => {
      1 & t.$$.dirty && (n || 0 === n) && dt(n);
    }),
    [
      n,
      r,
      function () {
        s(0, (n = G()));
      },
      a,
      o,
      function () {
        (n = ut(this.value)), s(0, n);
      },
    ]
  );
}
class kt extends Y {
  constructor(t) {
    super(), Z(this, t, Ct, vt, y, {});
  }
}
export { kt as default };
