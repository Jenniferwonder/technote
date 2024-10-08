import { e as E } from "./index.modern.CkIAsQri.js";
function y() {
  return (
    (y = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var s = arguments[t];
            for (var n in s)
              Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
          }
          return e;
        }),
    y.apply(this, arguments)
  );
}
function A(e) {
  return "title" !== e.localName && !e.matches("[data-swup-theme]");
}
function b(e, t) {
  return e.outerHTML === t.outerHTML;
}
function O(e) {
  return e.matches("link[rel=stylesheet][href]");
}
class j extends E {
  constructor(e = {}) {
    var t;
    super(),
      (t = this),
      (this.name = "SwupHeadPlugin"),
      (this.requires = { swup: ">=4.6" }),
      (this.defaults = {
        persistTags: !1,
        persistAssets: !1,
        awaitAssets: !1,
        timeout: 3e3,
      }),
      (this.options = void 0),
      (this.updateHead = async function (e, { page: {} }) {
        const s = e.to.document,
          { removed: n, added: r } = (function (
            e,
            t,
            { shouldPersist: s = () => !1 } = {},
          ) {
            const n = Array.from(e.children),
              r = Array.from(t.children),
              o =
                ((i = n),
                r.reduce(
                  (e, t, s) => (
                    i.some((e) => b(t, e)) || e.push({ el: t, index: s }), e
                  ),
                  [],
                ));
            var i;
            const a =
              ((l = r),
              n.reduce(
                (e, t) => (l.some((e) => b(t, e)) || e.push({ el: t }), e),
                [],
              ));
            var l;
            return (
              a
                .reverse()
                .filter(({ el: e }) => A(e))
                .filter(({ el: e }) => !s(e))
                .forEach(({ el: t }) => e.removeChild(t)),
              o
                .filter(({ el: e }) => A(e))
                .forEach(({ el: t, index: s = 0 }) => {
                  e.insertBefore(t.cloneNode(!0), e.children[s + 1] || null);
                }),
              {
                removed: a.map(({ el: e }) => e),
                added: o.map(({ el: e }) => e),
              }
            );
          })(document.head, s.head, {
            shouldPersist: (e) => t.isPersistentTag(e),
          });
        t.swup.log(`Removed ${n.length} / added ${r.length} tags in head`);
        const o =
          (i = document.documentElement).lang !== (a = s.documentElement).lang
            ? ((i.lang = a.lang), i.lang)
            : null;
        var i, a;
        if (
          (o && t.swup.log(`Updated lang attribute: ${o}`),
          t.options.awaitAssets)
        ) {
          const e = (function (e, t = 0) {
            return e.filter(O).map((e) =>
              (function (e, t = 0) {
                const s = (t) => {
                  (({ href: e }) =>
                    Array.from(document.styleSheets)
                      .map(({ href: e }) => e)
                      .includes(e))(e)
                    ? t()
                    : setTimeout(() => s(t), 10);
                };
                return new Promise((e) => {
                  s(e), t > 0 && setTimeout(e, t);
                });
              })(e, t),
            );
          })(r, t.options.timeout);
          e.length &&
            (t.swup.log(`Waiting for ${e.length} assets to load`),
            await Promise.all(e));
        }
      }),
      (this.options = y({}, this.defaults, e)),
      this.options.persistAssets &&
        !this.options.persistTags &&
        (this.options.persistTags = "link[rel=stylesheet], script[src], style");
  }
  mount() {
    this.before("content:replace", this.updateHead);
  }
  isPersistentTag(e) {
    const { persistTags: t } = this.options;
    return "function" == typeof t
      ? t(e)
      : "string" == typeof t
        ? e.matches(t)
        : !!t;
  }
}
export { j as default };
