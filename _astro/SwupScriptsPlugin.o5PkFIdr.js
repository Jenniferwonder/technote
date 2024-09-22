import { e as u } from "./index.modern.CkIAsQri.js";
function o() {
  return (
    (o = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var o in r)
              Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
          }
          return t;
        }),
    o.apply(this, arguments)
  );
}
class p extends u {
  constructor(t = {}) {
    super(),
      (this.name = "SwupScriptsPlugin"),
      (this.requires = { swup: ">=4" }),
      (this.defaults = { head: !0, body: !0, optin: !1 }),
      (this.options = void 0),
      (this.options = o({}, this.defaults, t));
  }
  mount() {
    this.on("content:replace", this.runScripts);
  }
  runScripts() {
    const { head: t, body: e, optin: r } = this.options,
      o = this.getScope({ head: t, body: e });
    if (!o) return;
    const s = Array.from(
      o.querySelectorAll(
        r
          ? "script[data-swup-reload-script]"
          : "script:not([data-swup-ignore-script])",
      ),
    );
    s.forEach((t) => this.runScript(t)),
      this.swup.log(`Executed ${s.length} scripts.`);
  }
  runScript(t) {
    const e = document.createElement("script");
    for (const { name: r, value: o } of t.attributes) e.setAttribute(r, o);
    return (e.textContent = t.textContent), t.replaceWith(e), e;
  }
  getScope({ head: t, body: e }) {
    return t && e ? document : t ? document.head : e ? document.body : null;
  }
}
export { p as default };
