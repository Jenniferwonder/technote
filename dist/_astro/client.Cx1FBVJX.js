const r = () => {},
  f =
    (t) =>
    (e, r, n, { client: o }) => {
      if (!t.hasAttribute("ssr")) return;
      const s = {};
      for (const [t, e] of Object.entries(n)) s[t] = c(t, e);
      try {
        const n = new e({
          target: t,
          props: { ...r, $$slots: s, $$scope: { ctx: [] } },
          hydrate: "only" !== o,
          $$inline: !0,
        });
        t.addEventListener("astro:unmount", () => n.$destroy(), { once: !0 });
      } finally {
      }
    };
function c(t, e) {
  let n;
  return [
    () => ({
      m(r) {
        (n = r),
          r.insertAdjacentHTML(
            "beforeend",
            `<astro-slot${"default" === t ? "" : ` name="${t}"`}>${e}</astro-slot>`,
          );
      },
      c: r,
      l: r,
      d() {
        if (!n) return;
        const e = n.querySelector(
          "astro-slot" + ("default" === t ? ":not([name])" : `[name="${t}"]`),
        );
        e && e.remove();
      },
    }),
    r,
    r,
  ];
}
export { f as default };
