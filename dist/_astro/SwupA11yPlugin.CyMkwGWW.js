import { l as f, w as m } from "./Swup.CXlr5Q4E.js";
import { e as v } from "./index.modern.CkIAsQri.js";
function g(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var d = { exports: {} };
!(function (t) {
  !(function () {
    function e(t) {
      for (var e in ((t = t || {}),
      (this.settings = {
        level: "polite",
        parent: "body",
        idPrefix: "live-region-",
        delay: 0,
      }),
      t))
        t.hasOwnProperty(e) && (this.settings[e] = t[e]);
      this.settings.parent = document.querySelector(this.settings.parent);
    }
    (e.prototype.say = function (t, e) {
      var n =
        this.settings.parent.querySelector(
          '[id^="' + this.settings.idPrefix + '"]',
        ) || !1;
      n && this.settings.parent.removeChild(n),
        (e = e || this.settings.delay),
        (this.currentRegion = document.createElement("span")),
        (this.currentRegion.id =
          this.settings.idPrefix + Math.floor(1e4 * Math.random()));
      var i = "assertive" !== this.settings.level ? "status" : "alert";
      return (
        this.currentRegion.setAttribute("aria-live", this.settings.level),
        this.currentRegion.setAttribute("role", i),
        this.currentRegion.setAttribute(
          "style",
          "clip: rect(1px, 1px, 1px, 1px); height: 1px; overflow: hidden; position: absolute; white-space: nowrap; width: 1px",
        ),
        this.settings.parent.appendChild(this.currentRegion),
        window.setTimeout(
          function () {
            this.currentRegion.textContent = t;
          }.bind(this),
          e,
        ),
        this
      );
    }),
      (t.exports = e);
  })();
})(d);
var y = d.exports;
const b = g(y);
function l() {
  return (
    (l = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }),
    l.apply(this, arguments)
  );
}
!(function () {
  if (
    !(typeof window > "u" || typeof document > "u" || typeof HTMLElement > "u")
  ) {
    var t = !1;
    try {
      var e = document.createElement("div");
      e.addEventListener(
        "focus",
        function (t) {
          t.preventDefault(), t.stopPropagation();
        },
        !0,
      ),
        e.focus(
          Object.defineProperty({}, "preventScroll", {
            get: function () {
              if (
                navigator &&
                typeof navigator.userAgent < "u" &&
                navigator.userAgent &&
                navigator.userAgent.match(/Edge\/1[7-8]/)
              )
                return (t = !1);
              t = !0;
            },
          }),
        );
    } catch {}
    if (void 0 === HTMLElement.prototype.nativeFocus && !t) {
      HTMLElement.prototype.nativeFocus = HTMLElement.prototype.focus;
      var n = function (t) {
        for (var e = 0; e < t.length; e++)
          (t[e][0].scrollTop = t[e][1]), (t[e][0].scrollLeft = t[e][2]);
        t = [];
      };
      HTMLElement.prototype.focus = function (t) {
        if (t && t.preventScroll) {
          var e = (function (t) {
            for (
              var e = t.parentNode,
                n = [],
                i = document.scrollingElement || document.documentElement;
              e && e !== i;

            )
              (e.offsetHeight < e.scrollHeight ||
                e.offsetWidth < e.scrollWidth) &&
                n.push([e, e.scrollTop, e.scrollLeft]),
                (e = e.parentNode);
            return (e = i), n.push([e, e.scrollTop, e.scrollLeft]), n;
          })(this);
          if ("function" == typeof setTimeout) {
            var i = this;
            setTimeout(function () {
              i.nativeFocus(), n(e);
            }, 0);
          } else this.nativeFocus(), n(e);
        } else this.nativeFocus();
      };
    }
  }
})();
class T extends v {
  constructor(t = {}) {
    var e, n;
    super(),
      (this.name = "SwupA11yPlugin"),
      (this.requires = { swup: ">=4" }),
      (this.defaults = {
        contentSelector: "main",
        headingSelector: "h1, h2, [role=heading]",
        respectReducedMotion: !1,
        autofocus: !1,
        announcements: {
          visit: "Navigated to: {title}",
          url: "New page at {url}",
        },
      }),
      (this.options = void 0),
      (this.liveRegion = void 0),
      (this.announce = (t) => {
        this.liveRegion.say(t);
      }),
      (t.announcements = l(
        {},
        this.defaults.announcements,
        {
          visit:
            null != (e = t.announcementTemplate)
              ? e
              : this.defaults.announcements.visit,
          url:
            null != (n = t.urlTemplate) ? n : this.defaults.announcements.url,
        },
        t.announcements,
      )),
      (this.options = l({}, this.defaults, t)),
      (this.liveRegion = new b());
  }
  mount() {
    this.swup.hooks.create("content:announce"),
      this.swup.hooks.create("content:focus"),
      this.before("visit:start", this.prepareVisit),
      this.on("visit:start", this.markAsBusy),
      this.on("visit:end", this.unmarkAsBusy),
      this.on("content:replace", this.prepareAnnouncement),
      this.on("content:replace", this.handleNewPageContent),
      this.options.respectReducedMotion &&
        (this.before("visit:start", this.disableTransitionAnimations),
        this.before("visit:start", this.disableScrollAnimations),
        this.before("link:self", this.disableScrollAnimations),
        this.before("link:anchor", this.disableScrollAnimations)),
      (this.swup.announce = this.announce);
  }
  unmount() {
    this.swup.announce = void 0;
  }
  markAsBusy() {
    document.documentElement.setAttribute("aria-busy", "true");
  }
  unmarkAsBusy() {
    document.documentElement.removeAttribute("aria-busy");
  }
  prepareVisit(t) {
    t.a11y = { announce: void 0, focus: this.options.contentSelector };
  }
  prepareAnnouncement(t) {
    if (void 0 !== t.a11y.announce) return;
    const {
        contentSelector: e,
        headingSelector: n,
        announcements: i,
      } = this.options,
      { href: o, url: s, pathname: r } = f.fromUrl(window.location.href),
      a = i[document.documentElement.lang || "*"] || i["*"] || i;
    if ("object" != typeof a) return;
    const u = document.querySelector(`${e} ${n}`);
    let c = u?.getAttribute("aria-label") || u?.textContent;
    c =
      c ||
      document.title ||
      this.parseTemplate(a.url, { href: o, url: s, path: r });
    const l = this.parseTemplate(a.visit, {
      title: c,
      href: o,
      url: s,
      path: r,
    });
    t.a11y.announce = l;
  }
  parseTemplate(t, e) {
    return Object.keys(e).reduce(
      (t, n) => t.replace(`{${n}}`, e[n] || ""),
      t || "",
    );
  }
  handleNewPageContent() {
    var t = this;
    m().then(async function () {
      t.swup.hooks.call("content:announce", void 0, (e) => {
        t.announcePageName(e);
      }),
        t.swup.hooks.call("content:focus", void 0, (e) => {
          t.focusPageContent(e);
        });
    });
  }
  announcePageName(t) {
    t.a11y.announce && this.liveRegion.say(t.a11y.announce);
  }
  async focusPageContent(t) {
    if (!t.a11y.focus) return;
    if (this.options.autofocus) {
      const e = this.getAutofocusElement();
      if (e && e !== document.activeElement)
        return void this.swup.hooks.once("visit:end", (n) => {
          n.id === t.id && e.focus();
        });
    }
    const e = document.querySelector(t.a11y.focus);
    e instanceof HTMLElement &&
      (this.needsTabindex(e) && e.setAttribute("tabindex", "-1"),
      e.focus({ preventScroll: !0 }));
  }
  getAutofocusElement() {
    const t = document.querySelector("body [autofocus]");
    if (t && !t.closest('inert, [aria-disabled], [aria-hidden="true"]'))
      return t;
  }
  disableTransitionAnimations(t) {
    t.animation.animate = t.animation.animate && this.shouldAnimate();
  }
  disableScrollAnimations(t) {
    t.scroll.animate = t.scroll.animate && this.shouldAnimate();
  }
  shouldAnimate() {
    return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  needsTabindex(t) {
    return !t.matches(
      "a, button, input, textarea, select, details, [tabindex]",
    );
  }
}
export { T as default };
