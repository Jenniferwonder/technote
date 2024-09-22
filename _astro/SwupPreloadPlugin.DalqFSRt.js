import { e as V } from "./index.modern.CkIAsQri.js";
import { l as c, n as P } from "./Swup.CXlr5Q4E.js";
function k() {
  return (
    (k = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var s = arguments[t];
            for (var r in s)
              Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
          }
          return e;
        }),
    k.apply(this, arguments)
  );
}
function L() {
  return window.matchMedia("(hover: hover)").matches;
}
function b(e) {
  return !!e && (e instanceof HTMLAnchorElement || e instanceof SVGAElement);
}
const E = window.requestIdleCallback || ((e) => setTimeout(e, 1)),
  O = ["preloadVisibleLinks"];
class A extends V {
  constructor(e = {}) {
    var t;
    super(),
      (t = this),
      (this.name = "SwupPreloadPlugin"),
      (this.requires = { swup: ">=4.5" }),
      (this.defaults = {
        throttle: 5,
        preloadInitialPage: !0,
        preloadHoveredLinks: !0,
        preloadVisibleLinks: {
          enabled: !1,
          threshold: 0.2,
          delay: 500,
          containers: ["body"],
          ignore: () => !1,
        },
      }),
      (this.options = void 0),
      (this.queue = void 0),
      (this.preloadObserver = void 0),
      (this.preloadPromises = new Map()),
      (this.mouseEnterDelegate = void 0),
      (this.touchStartDelegate = void 0),
      (this.focusDelegate = void 0),
      (this.onPageLoad = (e, t, s) => {
        const { url: r } = e.to;
        return r && this.preloadPromises.has(r)
          ? this.preloadPromises.get(r)
          : s(e, t);
      }),
      (this.onMouseEnter = async function (e) {
        if (e.target !== e.delegateTarget || !L()) return;
        const s = e.delegateTarget;
        if (!b(s)) return;
        const { url: r, hash: o } = c.fromElement(s),
          i = t.swup.createVisit({ to: r, hash: o, el: s, event: e });
        t.swup.hooks.callSync("link:hover", i, { el: s, event: e }),
          t.preload(s, { priority: !0 });
      }),
      (this.onTouchStart = (e) => {
        if (L()) return;
        const t = e.delegateTarget;
        b(t) && this.preload(t, { priority: !0 });
      }),
      (this.onFocus = (e) => {
        const t = e.delegateTarget;
        b(t) && this.preload(t, { priority: !0 });
      });
    const { preloadVisibleLinks: s } = e,
      r = (function (e, t) {
        if (null == e) return {};
        var s,
          r,
          o = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++)
          t.indexOf((s = i[r])) >= 0 || (o[s] = e[s]);
        return o;
      })(e, O);
    (this.options = k({}, this.defaults, r)),
      "object" == typeof s
        ? (this.options.preloadVisibleLinks = k(
            {},
            this.options.preloadVisibleLinks,
            { enabled: !0 },
            s,
          ))
        : (this.options.preloadVisibleLinks.enabled = !!s),
      (this.preload = this.preload.bind(this)),
      (this.queue = (function (e = 1) {
        const t = [],
          s = [];
        let r = 0,
          o = 0;
        function i() {
          o < e &&
            r > 0 &&
            ((s.shift() || t.shift() || (() => {}))(), r--, o++);
        }
        return {
          add: function (e, o = !1) {
            if (e.__queued) {
              if (!o) return;
              {
                const s = t.indexOf(e);
                if (s >= 0) {
                  const e = t.splice(s, 1);
                  r -= e.length;
                }
              }
            }
            (e.__queued = !0), (o ? s : t).push(e), r++, r <= 1 && i();
          },
          next: function () {
            o--, i();
          },
        };
      })(this.options.throttle));
  }
  mount() {
    const e = this.swup;
    e.options.cache
      ? (e.hooks.create("page:preload"),
        e.hooks.create("link:hover"),
        (e.preload = this.preload),
        (e.preloadLinks = this.preloadLinks),
        this.replace("page:load", this.onPageLoad),
        this.preloadLinks(),
        this.on("page:view", () => this.preloadLinks()),
        this.options.preloadVisibleLinks.enabled &&
          (this.preloadVisibleLinks(),
          this.on("page:view", () => this.preloadVisibleLinks())),
        this.options.preloadHoveredLinks && this.preloadLinksOnAttention(),
        this.options.preloadInitialPage && this.preload(P()))
      : console.warn(
          "SwupPreloadPlugin: swup cache needs to be enabled for preloading",
        );
  }
  unmount() {
    var e, t, s;
    (this.swup.preload = void 0),
      (this.swup.preloadLinks = void 0),
      this.preloadPromises.clear(),
      null == (e = this.mouseEnterDelegate) || e.destroy(),
      null == (t = this.touchStartDelegate) || t.destroy(),
      null == (s = this.focusDelegate) || s.destroy(),
      this.stopPreloadingVisibleLinks();
  }
  async preload(e, t = {}) {
    var s;
    let r, o;
    const i = null != (s = t.priority) && s;
    if (Array.isArray(e)) return Promise.all(e.map((e) => this.preload(e)));
    if (b(e)) (o = e), ({ href: r } = c.fromElement(e));
    else {
      if ("string" != typeof e) return;
      r = e;
    }
    if (!r) return;
    if (this.preloadPromises.has(r)) return this.preloadPromises.get(r);
    if (!this.shouldPreload(r, { el: o })) return;
    const n = new Promise((e) => {
      this.queue.add(() => {
        this.performPreload(r)
          .catch(() => {})
          .then((t) => e(t))
          .finally(() => {
            this.queue.next(), this.preloadPromises.delete(r);
          });
      }, i);
    });
    return this.preloadPromises.set(r, n), n;
  }
  preloadLinks() {
    E(() => {
      Array.from(
        document.querySelectorAll(
          "a[data-swup-preload], [data-swup-preload-all] a",
        ),
      ).forEach((e) => this.preload(e));
    });
  }
  preloadLinksOnAttention() {
    const { swup: e } = this,
      { linkSelector: t } = e.options,
      s = { passive: !0, capture: !0 };
    (this.mouseEnterDelegate = e.delegateEvent(
      t,
      "mouseenter",
      this.onMouseEnter,
      s,
    )),
      (this.touchStartDelegate = e.delegateEvent(
        t,
        "touchstart",
        this.onTouchStart,
        s,
      )),
      (this.focusDelegate = e.delegateEvent(t, "focus", this.onFocus, s));
  }
  preloadVisibleLinks() {
    if (this.preloadObserver) return void this.preloadObserver.update();
    const {
      threshold: e,
      delay: t,
      containers: s,
    } = this.options.preloadVisibleLinks;
    (this.preloadObserver = (function ({
      threshold: e,
      delay: t,
      containers: s,
      callback: r,
      filter: o,
    }) {
      const i = new Map(),
        n = new IntersectionObserver(
          (e) => {
            e.forEach((e) => {
              e.isIntersecting ? a(e.target) : l(e.target);
            });
          },
          { threshold: e },
        ),
        a = (e) => {
          var s;
          const { href: o } = c.fromElement(e),
            a = null != (s = i.get(o)) ? s : new Set();
          i.set(o, a),
            a.add(e),
            setTimeout(() => {
              const t = i.get(o);
              null != t && t.size && (r(e), n.unobserve(e), t.delete(e));
            }, t);
        },
        l = (e) => {
          var t;
          const { href: s } = c.fromElement(e);
          null == (t = i.get(s)) || t.delete(e);
        },
        h = () => {
          E(() => {
            const e = s.map((e) => `${e} a[*|href]`).join(", ");
            Array.from(document.querySelectorAll(e))
              .filter((e) => o(e))
              .forEach((e) => n.observe(e));
          });
        };
      return {
        start: () => h(),
        stop: () => n.disconnect(),
        update: () => (i.clear(), h()),
      };
    })({
      threshold: e,
      delay: t,
      containers: s,
      callback: (e) => this.preload(e),
      filter: (e) => {
        if (
          this.options.preloadVisibleLinks.ignore(e) ||
          !e.matches(this.swup.options.linkSelector)
        )
          return !1;
        const { href: t } = c.fromElement(e);
        return this.shouldPreload(t, { el: e });
      },
    })),
      this.preloadObserver.start();
  }
  stopPreloadingVisibleLinks() {
    this.preloadObserver && this.preloadObserver.stop();
  }
  shouldPreload(e, { el: t } = {}) {
    const { url: s, href: r } = c.fromUrl(e);
    return !(
      !(function () {
        var e;
        if (
          navigator.connection &&
          (navigator.connection.saveData ||
            (null != (e = navigator.connection.effectiveType) &&
              e.endsWith("2g")))
        )
          return !1;
        return !0;
      })() ||
      this.swup.cache.has(s) ||
      this.preloadPromises.has(s) ||
      this.swup.shouldIgnoreVisit(r, { el: t }) ||
      (t && this.swup.resolveUrl(s) === this.swup.resolveUrl(P()))
    );
  }
  async performPreload(e) {
    var t = this;
    const { url: s } = c.fromUrl(e),
      r = this.swup.createVisit({ to: s });
    return await this.swup.hooks.call(
      "page:preload",
      r,
      { url: s },
      async function (s, r) {
        return (r.page = await t.swup.fetchPage(e, { visit: s })), r.page;
      },
    );
  }
}
export { A as default };
