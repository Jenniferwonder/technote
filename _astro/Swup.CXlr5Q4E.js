const A = new WeakMap();
function L(t, e, i, s) {
  if (!t && !A.has(e)) return !1;
  const n = A.get(e) ?? new WeakMap();
  A.set(e, n);
  const o = n.get(i) ?? new Set();
  n.set(i, o);
  const r = o.has(s);
  return t ? o.add(s) : o.delete(s), r && t;
}
function j(t, e) {
  let i = t.target;
  if (
    (i instanceof Text && (i = i.parentElement),
    i instanceof Element && t.currentTarget instanceof Element)
  ) {
    const s = i.closest(e);
    if (s && t.currentTarget.contains(s)) return s;
  }
}
function W(t, e, i, s = {}) {
  const { signal: n, base: o = document } = s;
  if (n?.aborted) return;
  const { once: r, ...a } = s,
    l = o instanceof Document ? o.documentElement : o,
    c = !!("object" == typeof s ? s.capture : s),
    h = (s) => {
      const n = j(s, t);
      if (n) {
        const t = Object.assign(s, { delegateTarget: n });
        i.call(l, t), r && (l.removeEventListener(e, h, a), L(!1, l, i, u));
      }
    },
    u = JSON.stringify({ selector: t, type: e, capture: c });
  L(!0, l, i, u) || l.addEventListener(e, h, a),
    n?.addEventListener("abort", () => {
      L(!1, l, i, u);
    });
}
function p() {
  return (
    (p = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var i = arguments[e];
            for (var s in i)
              Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
          }
          return t;
        }),
    p.apply(this, arguments)
  );
}
const R = (t, e) =>
    String(t)
      .toLowerCase()
      .replace(/[\s/_.]+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/--+/g, "-")
      .replace(/^-+|-+$/g, "") ||
    e ||
    "",
  v = ({ hash: t } = {}) =>
    window.location.pathname +
    window.location.search +
    (t ? window.location.hash : ""),
  B = (t, e = {}) => {
    const i = p(
      {
        url: (t = t || v({ hash: !0 })),
        random: Math.random(),
        source: "swup",
      },
      e,
    );
    window.history.pushState(i, "", t);
  },
  S = (t = null, e = {}) => {
    t = t || v({ hash: !0 });
    const i = p(
      {},
      window.history.state || {},
      { url: t, random: Math.random(), source: "swup" },
      e,
    );
    window.history.replaceState(i, "", t);
  },
  _ = (t, e, i, s) => {
    const n = new AbortController();
    return (
      W(t, e, i, (s = p({}, s, { signal: n.signal }))),
      { destroy: () => n.abort() }
    );
  };
let y = class t extends URL {
  constructor(e, i = document.baseURI) {
    super(e.toString(), i), Object.setPrototypeOf(this, t.prototype);
  }
  get url() {
    return this.pathname + this.search;
  }
  static fromElement(e) {
    const i = e.getAttribute("href") || e.getAttribute("xlink:href") || "";
    return new t(i);
  }
  static fromUrl(e) {
    return new t(e);
  }
};
class P extends Error {
  constructor(t, e) {
    super(t),
      (this.url = void 0),
      (this.status = void 0),
      (this.aborted = void 0),
      (this.timedOut = void 0),
      (this.name = "FetchError"),
      (this.url = e.url),
      (this.status = e.status),
      (this.aborted = e.aborted || !1),
      (this.timedOut = e.timedOut || !1);
  }
}
async function F(t, e = {}) {
  var i;
  t = y.fromUrl(t).url;
  const { visit: s = this.visit } = e,
    n = p({}, this.options.requestHeaders, e.headers),
    o = null != (i = e.timeout) ? i : this.options.timeout,
    r = new AbortController(),
    { signal: a } = r;
  e = p({}, e, { headers: n, signal: a });
  let l,
    c = !1,
    h = null;
  o &&
    o > 0 &&
    (h = setTimeout(() => {
      (c = !0), r.abort("timeout");
    }, o));
  try {
    (l = await this.hooks.call(
      "fetch:request",
      s,
      { url: t, options: e },
      (t, { url: e, options: i }) => fetch(e, i),
    )),
      h && clearTimeout(h);
  } catch (e) {
    throw c
      ? (this.hooks.call("fetch:timeout", s, { url: t }),
        new P(`Request timed out: ${t}`, { url: t, timedOut: c }))
      : "AbortError" === e?.name || a.aborted
        ? new P(`Request aborted: ${t}`, { url: t, aborted: !0 })
        : e;
  }
  const { status: u, url: d } = l,
    m = await l.text();
  if (500 === u)
    throw (
      (this.hooks.call("fetch:error", s, { status: u, response: l, url: d }),
      new P(`Server error: ${d}`, { status: u, url: d }))
    );
  if (!m) throw new P(`Empty response: ${d}`, { status: u, url: d });
  const { url: g } = y.fromUrl(d),
    w = { url: g, html: m };
  return (
    !s.cache.write ||
      (e.method && "GET" !== e.method) ||
      t !== g ||
      this.cache.set(w.url, w),
    w
  );
}
class z {
  constructor(t) {
    (this.swup = void 0), (this.pages = new Map()), (this.swup = t);
  }
  get size() {
    return this.pages.size;
  }
  get all() {
    const t = new Map();
    return (
      this.pages.forEach((e, i) => {
        t.set(i, p({}, e));
      }),
      t
    );
  }
  has(t) {
    return this.pages.has(this.resolve(t));
  }
  get(t) {
    const e = this.pages.get(this.resolve(t));
    return e && p({}, e);
  }
  set(t, e) {
    (e = p({}, e, { url: (t = this.resolve(t)) })),
      this.pages.set(t, e),
      this.swup.hooks.callSync("cache:set", void 0, { page: e });
  }
  update(t, e) {
    t = this.resolve(t);
    const i = p({}, this.get(t), e, { url: t });
    this.pages.set(t, i);
  }
  delete(t) {
    this.pages.delete(this.resolve(t));
  }
  clear() {
    this.pages.clear(), this.swup.hooks.callSync("cache:clear", void 0, void 0);
  }
  prune(t) {
    this.pages.forEach((e, i) => {
      t(i, e) && this.delete(i);
    });
  }
  resolve(t) {
    const { url: e } = y.fromUrl(t);
    return this.swup.resolveUrl(e);
  }
}
const H = (t, e = document) => e.querySelector(t),
  T = (t, e = document) => Array.from(e.querySelectorAll(t)),
  N = () =>
    new Promise((t) => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          t();
        });
      });
    });
function M(t) {
  return (
    !!t &&
    ("object" == typeof t || "function" == typeof t) &&
    "function" == typeof t.then
  );
}
function K(t, e = []) {
  return new Promise((i, s) => {
    const n = t(...e);
    M(n) ? n.then(i, s) : i(n);
  });
}
const q = (t) => (window.CSS && window.CSS.escape ? CSS.escape(t) : t),
  V = (t) => 1e3 * Number(t.slice(0, -1).replace(",", "."));
class G {
  constructor(t) {
    (this.swup = void 0),
      (this.swupClasses = [
        "to-",
        "is-changing",
        "is-rendering",
        "is-popstate",
        "is-animating",
        "is-leaving",
      ]),
      (this.swup = t);
  }
  get selectors() {
    const { scope: t } = this.swup.visit.animation;
    return "containers" === t
      ? this.swup.visit.containers
      : "html" === t
        ? ["html"]
        : Array.isArray(t)
          ? t
          : [];
  }
  get selector() {
    return this.selectors.join(",");
  }
  get targets() {
    return this.selector.trim() ? T(this.selector) : [];
  }
  add(...t) {
    this.targets.forEach((e) => e.classList.add(...t));
  }
  remove(...t) {
    this.targets.forEach((e) => e.classList.remove(...t));
  }
  clear() {
    this.targets.forEach((t) => {
      const e = t.className.split(" ").filter((t) => this.isSwupClass(t));
      t.classList.remove(...e);
    });
  }
  isSwupClass(t) {
    return this.swupClasses.some((e) => t.startsWith(e));
  }
}
class D {
  constructor(t, e) {
    (this.id = void 0),
      (this.state = void 0),
      (this.from = void 0),
      (this.to = void 0),
      (this.containers = void 0),
      (this.animation = void 0),
      (this.trigger = void 0),
      (this.cache = void 0),
      (this.history = void 0),
      (this.scroll = void 0);
    const { to: i, from: s = t.currentPageUrl, hash: n, el: o, event: r } = e;
    (this.id = Math.random()),
      (this.state = 1),
      (this.from = { url: s }),
      (this.to = { url: i, hash: n }),
      (this.containers = t.options.containers),
      (this.animation = {
        animate: !0,
        wait: !1,
        name: void 0,
        native: t.options.native,
        scope: t.options.animationScope,
        selector: t.options.animationSelector,
      }),
      (this.trigger = { el: o, event: r }),
      (this.cache = { read: t.options.cache, write: t.options.cache }),
      (this.history = { action: "push", popstate: !1, direction: void 0 }),
      (this.scroll = { reset: !0, target: void 0 });
  }
  advance(t) {
    this.state < t && (this.state = t);
  }
  abort() {
    this.state = 8;
  }
  get done() {
    return this.state >= 7;
  }
}
function J(t) {
  return new D(this, t);
}
class X {
  constructor(t) {
    (this.swup = void 0),
      (this.registry = new Map()),
      (this.hooks = [
        "animation:out:start",
        "animation:out:await",
        "animation:out:end",
        "animation:in:start",
        "animation:in:await",
        "animation:in:end",
        "animation:skip",
        "cache:clear",
        "cache:set",
        "content:replace",
        "content:scroll",
        "enable",
        "disable",
        "fetch:request",
        "fetch:error",
        "fetch:timeout",
        "history:popstate",
        "link:click",
        "link:self",
        "link:anchor",
        "link:newtab",
        "page:load",
        "page:view",
        "scroll:top",
        "scroll:anchor",
        "visit:start",
        "visit:transition",
        "visit:abort",
        "visit:end",
      ]),
      (this.swup = t),
      this.init();
  }
  init() {
    this.hooks.forEach((t) => this.create(t));
  }
  create(t) {
    this.registry.has(t) || this.registry.set(t, new Map());
  }
  exists(t) {
    return this.registry.has(t);
  }
  get(t) {
    const e = this.registry.get(t);
    if (e) return e;
    console.error(`Unknown hook '${t}'`);
  }
  clear() {
    this.registry.forEach((t) => t.clear());
  }
  on(t, e, i = {}) {
    const s = this.get(t);
    if (!s) return console.warn(`Hook '${t}' not found.`), () => {};
    const n = p({}, i, { id: s.size + 1, hook: t, handler: e });
    return s.set(e, n), () => this.off(t, e);
  }
  before(t, e, i = {}) {
    return this.on(t, e, p({}, i, { before: !0 }));
  }
  replace(t, e, i = {}) {
    return this.on(t, e, p({}, i, { replace: !0 }));
  }
  once(t, e, i = {}) {
    return this.on(t, e, p({}, i, { once: !0 }));
  }
  off(t, e) {
    const i = this.get(t);
    i && e
      ? i.delete(e) || console.warn(`Handler for hook '${t}' not found.`)
      : i && i.clear();
  }
  async call(t, e, i, s) {
    const [n, o, r] = this.parseCallArgs(t, e, i, s),
      { before: a, handler: l, after: c } = this.getHandlers(t, r);
    await this.run(a, n, o);
    const [h] = await this.run(l, n, o, !0);
    return await this.run(c, n, o), this.dispatchDomEvent(t, n, o), h;
  }
  callSync(t, e, i, s) {
    const [n, o, r] = this.parseCallArgs(t, e, i, s),
      { before: a, handler: l, after: c } = this.getHandlers(t, r);
    this.runSync(a, n, o);
    const [h] = this.runSync(l, n, o, !0);
    return this.runSync(c, n, o), this.dispatchDomEvent(t, n, o), h;
  }
  parseCallArgs(t, e, i, s) {
    return e instanceof D || ("object" != typeof e && "function" != typeof i)
      ? [e, i, s]
      : [void 0, e, i];
  }
  async run(t, e = this.swup.visit, i, s = !1) {
    const n = [];
    for (const { hook: o, handler: r, defaultHandler: a, once: l } of t)
      if (null == e || !e.done) {
        l && this.off(o, r);
        try {
          const t = await K(r, [e, i, a]);
          n.push(t);
        } catch (t) {
          if (s) throw t;
          console.error(`Error in hook '${o}':`, t);
        }
      }
    return n;
  }
  runSync(t, e = this.swup.visit, i, s = !1) {
    const n = [];
    for (const { hook: o, handler: r, defaultHandler: a, once: l } of t)
      if (null == e || !e.done) {
        l && this.off(o, r);
        try {
          const t = r(e, i, a);
          n.push(t),
            M(t) &&
              console.warn(
                `Swup will not await Promises in handler for synchronous hook '${o}'.`,
              );
        } catch (t) {
          if (s) throw t;
          console.error(`Error in hook '${o}':`, t);
        }
      }
    return n;
  }
  getHandlers(t, e) {
    const i = this.get(t);
    if (!i)
      return { found: !1, before: [], handler: [], after: [], replaced: !1 };
    const s = Array.from(i.values()),
      n = this.sortRegistrations,
      o = s.filter(({ before: t, replace: e }) => t && !e).sort(n),
      r = s
        .filter(({ replace: t }) => t)
        .filter((t) => !0)
        .sort(n),
      a = s.filter(({ before: t, replace: e }) => !t && !e).sort(n),
      l = r.length > 0;
    let c = [];
    if (e && ((c = [{ id: 0, hook: t, handler: e }]), l)) {
      const i = r.length - 1,
        s = (t) => {
          const i = r[t - 1];
          return i ? (e, n) => i.handler(e, n, s(t - 1)) : e;
        };
      c = [{ id: 0, hook: t, handler: r[i].handler, defaultHandler: s(i) }];
    }
    return { found: !0, before: o, handler: c, after: a, replaced: l };
  }
  sortRegistrations(t, e) {
    var i, s;
    return (
      (null != (i = t.priority) ? i : 0) - (null != (s = e.priority) ? s : 0) ||
      t.id - e.id ||
      0
    );
  }
  dispatchDomEvent(t, e, i) {
    if (null != e && e.done) return;
    const s = { hook: t, args: i, visit: e || this.swup.visit };
    document.dispatchEvent(
      new CustomEvent("swup:any", { detail: s, bubbles: !0 }),
    ),
      document.dispatchEvent(
        new CustomEvent(`swup:${t}`, { detail: s, bubbles: !0 }),
      );
  }
}
const Q = (t) => {
    if ((t && "#" === t.charAt(0) && (t = t.substring(1)), !t)) return null;
    const e = decodeURIComponent(t);
    let i =
      document.getElementById(t) ||
      document.getElementById(e) ||
      H(`a[name='${q(t)}']`) ||
      H(`a[name='${q(e)}']`);
    return i || "top" !== t || (i = document.body), i;
  },
  b = "transition",
  U = "animation";
async function Y({ elements: t, selector: e }) {
  if (!1 === e && !t) return;
  let i = [];
  if (t) i = Array.from(t);
  else if (e && ((i = T(e, document.body)), !i.length))
    return void console.warn(
      `[swup] No elements found matching animationSelector \`${e}\``,
    );
  const s = i.map((t) =>
    (function (t) {
      const {
        type: e,
        timeout: i,
        propCount: s,
      } = (function (t) {
        const e = window.getComputedStyle(t),
          i = C(e, `${b}Delay`),
          s = C(e, `${b}Duration`),
          n = I(i, s),
          o = C(e, `${U}Delay`),
          r = C(e, `${U}Duration`),
          a = I(o, r);
        let l = null,
          c = 0,
          h = 0;
        return (
          (c = Math.max(n, a)),
          (l = c > 0 ? (n > a ? b : U) : null),
          (h = l ? (l === b ? s.length : r.length) : 0),
          { type: l, timeout: c, propCount: h }
        );
      })(t);
      return (
        !(!e || !i) &&
        new Promise((n) => {
          const o = `${e}end`,
            r = performance.now();
          let a = 0;
          const l = () => {
              t.removeEventListener(o, c), n();
            },
            c = (e) => {
              if (e.target === t) {
                if (![`${b}end`, `${U}end`].includes(e.type))
                  throw new Error("Not a transition or animation event.");
                (performance.now() - r) / 1e3 < e.elapsedTime ||
                  (++a >= s && l());
              }
            };
          setTimeout(() => {
            a < s && l();
          }, i + 1),
            t.addEventListener(o, c);
        })
      );
    })(t),
  );
  s.filter(Boolean).length > 0
    ? await Promise.all(s)
    : e &&
      console.warn(
        `[swup] No CSS animation duration defined on elements matching \`${e}\``,
      );
}
function C(t, e) {
  return (t[e] || "").split(", ");
}
function I(t, e) {
  for (; t.length < e.length; ) t = t.concat(t);
  return Math.max(...e.map((e, i) => V(e) + V(t[i])));
}
function Z(t, e = {}, i = {}) {
  if ("string" != typeof t)
    throw new Error("swup.navigate() requires a URL parameter");
  if (this.shouldIgnoreVisit(t, { el: i.el, event: i.event }))
    return void window.location.assign(t);
  const { url: s, hash: n } = y.fromUrl(t),
    o = this.createVisit(p({}, i, { to: s, hash: n }));
  this.performNavigation(o, e);
}
async function tt(t, e = {}) {
  if (this.navigating) {
    if (this.visit.state >= 6)
      return (
        (t.state = 2),
        void (this.onVisitEnd = () => this.performNavigation(t, e))
      );
    await this.hooks.call("visit:abort", this.visit, void 0),
      delete this.visit.to.document,
      (this.visit.state = 8);
  }
  (this.navigating = !0), (this.visit = t);
  const { el: i } = t.trigger;
  (e.referrer = e.referrer || this.currentPageUrl),
    !1 === e.animate && (t.animation.animate = !1),
    t.animation.animate || this.classes.clear();
  const s = e.history || i?.getAttribute("data-swup-history") || void 0;
  s && ["push", "replace"].includes(s) && (t.history.action = s);
  const n = e.animation || i?.getAttribute("data-swup-animation") || void 0;
  var o, r;
  n && (t.animation.name = n),
    "object" == typeof e.cache
      ? ((t.cache.read = null != (o = e.cache.read) ? o : t.cache.read),
        (t.cache.write = null != (r = e.cache.write) ? r : t.cache.write))
      : void 0 !== e.cache && (t.cache = { read: !!e.cache, write: !!e.cache }),
    delete e.cache;
  try {
    await this.hooks.call("visit:start", t, void 0), (t.state = 3);
    const i = this.hooks.call("page:load", t, { options: e }, async (t, e) => {
      let i;
      return (
        t.cache.read && (i = this.cache.get(t.to.url)),
        (e.page = i || (await this.fetchPage(t.to.url, e.options))),
        (e.cache = !!i),
        e.page
      );
    });
    if (
      (i.then(({ html: e }) => {
        t.advance(5),
          (t.to.html = e),
          (t.to.document = new DOMParser().parseFromString(e, "text/html"));
      }),
      !t.history.popstate)
    ) {
      const e = t.to.url + t.to.hash;
      "replace" === t.history.action || t.to.url === this.currentPageUrl
        ? S(e)
        : (this.currentHistoryIndex++,
          B(e, { index: this.currentHistoryIndex }));
    }
    if (
      ((this.currentPageUrl = v()),
      t.history.popstate && this.classes.add("is-popstate"),
      t.animation.name && this.classes.add(`to-${R(t.animation.name)}`),
      t.animation.wait && (await i),
      t.done ||
        (await this.hooks.call("visit:transition", t, void 0, async () => {
          if (!t.animation.animate)
            return (
              await this.hooks.call("animation:skip", void 0),
              void (await this.renderPage(t, await i))
            );
          t.advance(4),
            await this.animatePageOut(t),
            t.animation.native && document.startViewTransition
              ? await document.startViewTransition(
                  async () => await this.renderPage(t, await i),
                ).finished
              : await this.renderPage(t, await i),
            await this.animatePageIn(t);
        }),
        t.done))
    )
      return;
    await this.hooks.call("visit:end", t, void 0, () => this.classes.clear()),
      (t.state = 7),
      (this.navigating = !1),
      this.onVisitEnd && (this.onVisitEnd(), (this.onVisitEnd = void 0));
  } catch (e) {
    if (!e || (null != e && e.aborted)) return void (t.state = 8);
    (t.state = 9),
      console.error(e),
      (this.options.skipPopStateHandling = () => (
        window.location.assign(t.to.url + t.to.hash), !0
      )),
      window.history.back();
  } finally {
    delete t.to.document;
  }
}
const et = async function (t) {
    await this.hooks.call("animation:out:start", t, void 0, () => {
      this.classes.add("is-changing", "is-animating", "is-leaving");
    }),
      await this.hooks.call(
        "animation:out:await",
        t,
        { skip: !1 },
        (t, { skip: e }) => {
          if (!e)
            return this.awaitAnimations({ selector: t.animation.selector });
        },
      ),
      await this.hooks.call("animation:out:end", t, void 0);
  },
  it = function (t) {
    var e;
    const i = t.to.document;
    if (!i) return !1;
    const s =
      (null == (e = i.querySelector("title")) ? void 0 : e.innerText) || "";
    document.title = s;
    const n = T('[data-swup-persist]:not([data-swup-persist=""])'),
      o = t.containers
        .map((t) => {
          const e = document.querySelector(t),
            s = i.querySelector(t);
          return e && s
            ? (e.replaceWith(s.cloneNode(!0)), !0)
            : (e ||
                console.warn(
                  `[swup] Container missing in current document: ${t}`,
                ),
              s ||
                console.warn(
                  `[swup] Container missing in incoming document: ${t}`,
                ),
              !1);
        })
        .filter(Boolean);
    return (
      n.forEach((t) => {
        const e = t.getAttribute("data-swup-persist"),
          i = H(`[data-swup-persist="${e}"]`);
        i && i !== t && i.replaceWith(t);
      }),
      o.length === t.containers.length
    );
  },
  st = function (t) {
    const e = { behavior: "auto" },
      { target: i, reset: s } = t.scroll,
      n = i ?? t.to.hash;
    let o = !1;
    return (
      n &&
        (o = this.hooks.callSync(
          "scroll:anchor",
          t,
          { hash: n, options: e },
          (t, { hash: e, options: i }) => {
            const s = this.getAnchorElement(e);
            return s && s.scrollIntoView(i), !!s;
          },
        )),
      s &&
        !o &&
        (o = this.hooks.callSync(
          "scroll:top",
          t,
          { options: e },
          (t, { options: e }) => (
            window.scrollTo(p({ top: 0, left: 0 }, e)), !0
          ),
        )),
      o
    );
  },
  nt = async function (t) {
    if (t.done) return;
    const e = this.hooks.call(
      "animation:in:await",
      t,
      { skip: !1 },
      (t, { skip: e }) => {
        if (!e) return this.awaitAnimations({ selector: t.animation.selector });
      },
    );
    await N(),
      await this.hooks.call("animation:in:start", t, void 0, () => {
        this.classes.remove("is-animating");
      }),
      await e,
      await this.hooks.call("animation:in:end", t, void 0);
  },
  ot = async function (t, e) {
    if (t.done) return;
    t.advance(6);
    const { url: i } = e;
    this.isSameResolvedUrl(v(), i) ||
      (S(i), (this.currentPageUrl = v()), (t.to.url = this.currentPageUrl)),
      await this.hooks.call("content:replace", t, { page: e }, (t, {}) => {
        if (
          (this.classes.remove("is-leaving"),
          t.animation.animate && this.classes.add("is-rendering"),
          !this.replaceContent(t))
        )
          throw new Error("[swup] Container mismatch, aborting");
        t.animation.animate &&
          (this.classes.add("is-changing", "is-animating", "is-rendering"),
          t.animation.name && this.classes.add(`to-${R(t.animation.name)}`));
      }),
      await this.hooks.call("content:scroll", t, void 0, () =>
        this.scrollToContent(t),
      ),
      await this.hooks.call("page:view", t, {
        url: this.currentPageUrl,
        title: document.title,
      });
  },
  rt = function (t) {
    var e;
    if (((e = t), e?.isSwupPlugin)) {
      if (((t.swup = this), !t._checkRequirements || t._checkRequirements()))
        return (
          t._beforeMount && t._beforeMount(),
          t.mount(),
          this.plugins.push(t),
          this.plugins
        );
    } else console.error("Not a swup plugin instance", t);
  };
function at(t) {
  const e = this.findPlugin(t);
  if (e)
    return (
      e.unmount(),
      e._afterUnmount && e._afterUnmount(),
      (this.plugins = this.plugins.filter((t) => t !== e)),
      this.plugins
    );
  console.error("No such plugin", e);
}
function lt(t) {
  return this.plugins.find(
    (e) => e === t || e.name === t || e.name === `Swup${String(t)}`,
  );
}
function ct(t) {
  if ("function" != typeof this.options.resolveUrl)
    return (
      console.warn("[swup] options.resolveUrl expects a callback function."), t
    );
  const e = this.options.resolveUrl(t);
  return e && "string" == typeof e
    ? e.startsWith("//") || e.startsWith("http")
      ? (console.warn(
          "[swup] options.resolveUrl needs to return a relative url",
        ),
        t)
      : e
    : (console.warn("[swup] options.resolveUrl needs to return a url"), t);
}
function ht(t, e) {
  return this.resolveUrl(t) === this.resolveUrl(e);
}
const ut = {
  animateHistoryBrowsing: !1,
  animationSelector: '[class*="transition-"]',
  animationScope: "html",
  cache: !0,
  containers: ["#swup"],
  ignoreVisit: (t, { el: e } = {}) =>
    !(null == e || !e.closest("[data-no-swup]")),
  linkSelector: "a[href]",
  linkToSelf: "scroll",
  native: !1,
  plugins: [],
  resolveUrl: (t) => t,
  requestHeaders: {
    "X-Requested-With": "swup",
    Accept: "text/html, application/xhtml+xml",
  },
  skipPopStateHandling: (t) => {
    var e;
    return "swup" !== (null == (e = t.state) ? void 0 : e.source);
  },
  timeout: 0,
};
class dt {
  constructor(t = {}) {
    var e, i;
    (this.version = "4.6.0"),
      (this.options = void 0),
      (this.defaults = ut),
      (this.plugins = []),
      (this.visit = void 0),
      (this.cache = void 0),
      (this.hooks = void 0),
      (this.classes = void 0),
      (this.currentPageUrl = v()),
      (this.currentHistoryIndex = void 0),
      (this.clickDelegate = void 0),
      (this.navigating = !1),
      (this.onVisitEnd = void 0),
      (this.use = rt),
      (this.unuse = at),
      (this.findPlugin = lt),
      (this.log = () => {}),
      (this.navigate = Z),
      (this.performNavigation = tt),
      (this.createVisit = J),
      (this.delegateEvent = _),
      (this.fetchPage = F),
      (this.awaitAnimations = Y),
      (this.renderPage = ot),
      (this.replaceContent = it),
      (this.animatePageIn = nt),
      (this.animatePageOut = et),
      (this.scrollToContent = st),
      (this.getAnchorElement = Q),
      (this.getCurrentUrl = v),
      (this.resolveUrl = ct),
      (this.isSameResolvedUrl = ht),
      (this.options = p({}, this.defaults, t)),
      (this.handleLinkClick = this.handleLinkClick.bind(this)),
      (this.handlePopState = this.handlePopState.bind(this)),
      (this.cache = new z(this)),
      (this.classes = new G(this)),
      (this.hooks = new X(this)),
      (this.visit = this.createVisit({ to: "" })),
      (this.currentHistoryIndex =
        null != (e = null == (i = window.history.state) ? void 0 : i.index)
          ? e
          : 1),
      this.checkRequirements() && this.enable();
  }
  checkRequirements() {
    return (
      typeof Promise < "u" || (console.warn("Promise is not supported"), !1)
    );
  }
  async enable() {
    var t;
    const { linkSelector: e } = this.options;
    (this.clickDelegate = this.delegateEvent(e, "click", this.handleLinkClick)),
      window.addEventListener("popstate", this.handlePopState),
      this.options.animateHistoryBrowsing &&
        (window.history.scrollRestoration = "manual"),
      (this.options.native =
        this.options.native && !!document.startViewTransition),
      this.options.plugins.forEach((t) => this.use(t)),
      "swup" !== (null == (t = window.history.state) ? void 0 : t.source) &&
        S(null, { index: this.currentHistoryIndex }),
      await N(),
      await this.hooks.call("enable", void 0, void 0, () => {
        const t = document.documentElement;
        t.classList.add("swup-enabled"),
          t.classList.toggle("swup-native", this.options.native);
      });
  }
  async destroy() {
    this.clickDelegate.destroy(),
      window.removeEventListener("popstate", this.handlePopState),
      this.cache.clear(),
      this.options.plugins.forEach((t) => this.unuse(t)),
      await this.hooks.call("disable", void 0, void 0, () => {
        const t = document.documentElement;
        t.classList.remove("swup-enabled"), t.classList.remove("swup-native");
      }),
      this.hooks.clear();
  }
  shouldIgnoreVisit(t, { el: e, event: i } = {}) {
    const { origin: s, url: n, hash: o } = y.fromUrl(t);
    return (
      s !== window.location.origin ||
      !(!e || !this.triggerWillOpenNewWindow(e)) ||
      !!this.options.ignoreVisit(n + o, { el: e, event: i })
    );
  }
  handleLinkClick(t) {
    const e = t.delegateTarget,
      { href: i, url: s, hash: n } = y.fromElement(e);
    if (this.shouldIgnoreVisit(i, { el: e, event: t })) return;
    if (this.navigating && s === this.visit.to.url)
      return void t.preventDefault();
    const o = this.createVisit({ to: s, hash: n, el: e, event: t });
    t.metaKey || t.ctrlKey || t.shiftKey || t.altKey
      ? this.hooks.callSync("link:newtab", o, { href: i })
      : 0 === t.button &&
        this.hooks.callSync("link:click", o, { el: e, event: t }, () => {
          var e;
          const i = null != (e = o.from.url) ? e : "";
          t.preventDefault(),
            s && s !== i
              ? this.isSameResolvedUrl(s, i) || this.performNavigation(o)
              : n
                ? this.hooks.callSync("link:anchor", o, { hash: n }, () => {
                    S(s + n), this.scrollToContent(o);
                  })
                : this.hooks.callSync("link:self", o, void 0, () => {
                    "navigate" === this.options.linkToSelf
                      ? this.performNavigation(o)
                      : (S(s), this.scrollToContent(o));
                  });
        });
  }
  handlePopState(t) {
    var e, i, s, n;
    const o =
      null != (e = null == (i = t.state) ? void 0 : i.url)
        ? e
        : window.location.href;
    if (
      this.options.skipPopStateHandling(t) ||
      this.isSameResolvedUrl(v(), this.currentPageUrl)
    )
      return;
    const { url: r, hash: a } = y.fromUrl(o),
      l = this.createVisit({ to: r, hash: a, event: t });
    l.history.popstate = !0;
    const c = null != (s = null == (n = t.state) ? void 0 : n.index) ? s : 0;
    c &&
      c !== this.currentHistoryIndex &&
      ((l.history.direction =
        c - this.currentHistoryIndex > 0 ? "forwards" : "backwards"),
      (this.currentHistoryIndex = c)),
      (l.animation.animate = !1),
      (l.scroll.reset = !1),
      (l.scroll.target = !1),
      this.options.animateHistoryBrowsing &&
        ((l.animation.animate = !0), (l.scroll.reset = !0)),
      this.hooks.callSync("history:popstate", l, { event: t }, () => {
        this.performNavigation(l);
      });
  }
  triggerWillOpenNewWindow(t) {
    return !!t.matches('[download], [target="_blank"]');
  }
}
const pt = Object.freeze(
  Object.defineProperty({ __proto__: null, default: dt }, Symbol.toStringTag, {
    value: "Module",
  }),
);
export { pt as S, y as l, T as m, v as n, N as w };
