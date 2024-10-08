function o() {
  return (
    (o = Object.assign
      ? Object.assign.bind()
      : function (r) {
          for (var n = 1; n < arguments.length; n++) {
            var e = arguments[n];
            for (var t in e)
              Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
          }
          return r;
        }),
    o.apply(this, arguments)
  );
}
const d = (r) =>
  String(r)
    .split(".")
    .map((r) => String(parseInt(r || "0", 10)))
    .concat(["0", "0"])
    .slice(0, 3)
    .join(".");
class y {
  constructor() {
    (this.isSwupPlugin = !0),
      (this.swup = void 0),
      (this.version = void 0),
      (this.requires = {}),
      (this.handlersToUnregister = []);
  }
  mount() {}
  unmount() {
    this.handlersToUnregister.forEach((r) => r()),
      (this.handlersToUnregister = []);
  }
  _beforeMount() {
    if (!this.name)
      throw new Error(
        "You must define a name of plugin when creating a class.",
      );
  }
  _afterUnmount() {}
  _checkRequirements() {
    return (
      "object" != typeof this.requires ||
        Object.entries(this.requires).forEach(([r, n]) => {
          if (
            !(function (r, n, e) {
              const t = (function (r, n) {
                var e;
                if ("swup" === r) return null != (e = n.version) ? e : "";
                {
                  var t;
                  const e = n.findPlugin(r);
                  return null != (t = e?.version) ? t : "";
                }
              })(r, e);
              return (
                !!t &&
                ((o = t),
                n.every((r) => {
                  const [, n, e] = r.match(/^([\D]+)?(.*)$/) || [];
                  var t, s;
                  return ((r, n) => {
                    const e = {
                      "": (r) => 0 === r,
                      ">": (r) => r > 0,
                      ">=": (r) => r >= 0,
                      "<": (r) => r < 0,
                      "<=": (r) => r <= 0,
                    };
                    return (e[n] || e[""])(r);
                  })(
                    ((s = e),
                    (t = d((t = o))),
                    (s = d(s)),
                    t.localeCompare(s, void 0, { numeric: !0 })),
                    n || ">=",
                  );
                }))
              );
              var o;
            })(r, (n = Array.isArray(n) ? n : [n]), this.swup)
          ) {
            const e = `${r} ${n.join(", ")}`;
            throw new Error(
              `Plugin version mismatch: ${this.name} requires ${e}`,
            );
          }
        }),
      !0
    );
  }
  on(r, n, e = {}) {
    var t;
    n =
      !(t = n).name.startsWith("bound ") || t.hasOwnProperty("prototype")
        ? n.bind(this)
        : n;
    const o = this.swup.hooks.on(r, n, e);
    return this.handlersToUnregister.push(o), o;
  }
  once(r, n, e = {}) {
    return this.on(r, n, o({}, e, { once: !0 }));
  }
  before(r, n, e = {}) {
    return this.on(r, n, o({}, e, { before: !0 }));
  }
  replace(r, n, e = {}) {
    return this.on(r, n, o({}, e, { replace: !0 }));
  }
  off(r, n) {
    return this.swup.hooks.off(r, n);
  }
}
export { y as e };
