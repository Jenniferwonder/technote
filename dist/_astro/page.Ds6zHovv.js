const __vite__mapDeps = (
  e,
  t = __vite__mapDeps,
  n = t.f ||
    (t.f = [
      "_astro/SwupA11yPlugin.CyMkwGWW.js",
      "_astro/Swup.CXlr5Q4E.js",
      "_astro/index.modern.CkIAsQri.js",
      "_astro/SwupPreloadPlugin.DalqFSRt.js",
      "_astro/SwupScrollPlugin.36yyPdF9.js",
      "_astro/SwupHeadPlugin.FjGODCox.js",
      "_astro/SwupScriptsPlugin.o5PkFIdr.js",
    ]),
) => e.map((e) => n[e]);
import { i as E } from "./index.Bxr0XgtK.js";
const P = "modulepreload",
  S = function (e) {
    return "/technote/" + e;
  },
  p = {},
  u = function (e, t, n) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
      document.getElementsByTagName("link");
      const e = document.querySelector("meta[property=csp-nonce]"),
        n = e?.nonce || e?.getAttribute("nonce");
      r = Promise.allSettled(
        t.map((e) => {
          if ((e = S(e)) in p) return;
          p[e] = !0;
          const t = e.endsWith(".css"),
            r = t ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${e}"]${r}`)) return;
          const o = document.createElement("link");
          return (
            (o.rel = t ? "stylesheet" : P),
            t || (o.as = "script"),
            (o.crossOrigin = ""),
            (o.href = e),
            n && o.setAttribute("nonce", n),
            document.head.appendChild(o),
            t
              ? new Promise((t, n) => {
                  o.addEventListener("load", t),
                    o.addEventListener("error", () =>
                      n(new Error(`Unable to preload CSS for ${e}`)),
                    );
                })
              : void 0
          );
        }),
      );
    }
    function o(e) {
      const t = new Event("vite:preloadError", { cancelable: !0 });
      if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented))
        throw e;
    }
    return r.then((t) => {
      for (const e of t || []) "rejected" === e.status && o(e.reason);
      return e().catch(o);
    });
  };
function l(e) {
  return JSON.parse(e, g);
}
function g(e, t) {
  if (Array.isArray(t) && 2 === t.length && "string" == typeof t[1]) {
    const e = t[0];
    if (((t = t[1]), ":regex:" === e)) {
      const e = t.match(/\/(.*?)\/([a-z]*)?$/i) || [];
      return new RegExp(e[1], e[2] || "");
    }
    if (":function:" === e)
      return new Function(`return (${t}).apply(this, arguments);`);
  }
  return t;
}
function m(e, { timeoutFallback: t = 1e3 } = {}) {
  "requestIdleCallback" in window
    ? window.requestIdleCallback(() => e())
    : setTimeout(() => e(), t);
}
function y(e) {
  "complete" === document.readyState
    ? setTimeout(() => e(), 0)
    : window.addEventListener("load", () => e());
}
function L(e, { delayAfterLoad: t = 0 } = {}) {
  y(() => {
    t > 0 ? setTimeout(() => m(e), t) : m(e);
  });
}
async function A() {
  const [e, t, n, r, o, i] = await Promise.all([
      u(() => import("./Swup.CXlr5Q4E.js").then((e) => e.S), []).then(
        (e) => e.default,
      ),
      u(
        () => import("./SwupA11yPlugin.CyMkwGWW.js"),
        __vite__mapDeps([0, 1, 2]),
      ).then((e) => e.default),
      u(
        () => import("./SwupPreloadPlugin.DalqFSRt.js"),
        __vite__mapDeps([3, 2, 1]),
      ).then((e) => e.default),
      u(
        () => import("./SwupScrollPlugin.36yyPdF9.js"),
        __vite__mapDeps([4, 2, 1]),
      ).then((e) => e.default),
      u(
        () => import("./SwupHeadPlugin.FjGODCox.js"),
        __vite__mapDeps([5, 2]),
      ).then((e) => e.default),
      u(
        () => import("./SwupScriptsPlugin.o5PkFIdr.js"),
        __vite__mapDeps([6, 2]),
      ).then((e) => e.default),
    ]),
    s = new e({
      animationSelector: '[class*="transition-swup-"]',
      containers: ["main"],
      cache: !0,
      plugins: [
        new t(l("{}")),
        new n(l('{"preloadHoveredLinks":true,"preloadVisibleLinks":false}')),
        new r(l("{}")),
        new o(l('{"awaitAssets":true}')),
        new i(l("{}")),
      ],
    });
  window.swup = s;
}
L(A), E();
