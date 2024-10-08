import { e as n } from "./index.modern.CkIAsQri.js";
function o() {
  return (
    (o = Object.assign
      ? Object.assign.bind()
      : function (s) {
          for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var a in i)
              Object.prototype.hasOwnProperty.call(i, a) && (s[a] = i[a]);
          }
          return s;
        }),
    o.apply(this, arguments)
  );
}
class u extends n {
  constructor(s = {}) {
    super(),
      (this.name = "SwupBodyClassPlugin"),
      (this.requires = { swup: ">=4.6" }),
      (this.defaults = { prefix: "" }),
      (this.options = void 0),
      (this.updateBodyClass = (s) => {
        this.updateClassNames(document.body, s.to.document.body);
      }),
      (this.options = o({}, this.defaults, s));
  }
  mount() {
    this.on("content:replace", this.updateBodyClass);
  }
  updateClassNames(s, t) {
    const i = [...s.classList].filter((s) => this.isValidClassName(s)),
      a = [...t.classList].filter((s) => this.isValidClassName(s));
    s.classList.remove(...i), s.classList.add(...a);
  }
  isValidClassName(s) {
    return s && s.startsWith(this.options.prefix);
  }
}
export { u as default };
