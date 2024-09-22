var n = ((e) => (
  (e[(e.Home = 0)] = "Home"),
  (e[(e.Archive = 1)] = "Archive"),
  (e[(e.About = 2)] = "About"),
  e
))(n || {});
const r = {
  title: "瞻思笔记",
  subtitle: "Technote",
  lang: "zh_CN",
  themeHue: 250,
  banner: { enable: !1, src: "assets/images/demo-banner.png" },
};
function o() {
  const e = document.getElementById("config-carrier");
  return parseInt(e?.dataset.hue || "250");
}
function a() {
  const e = localStorage.getItem("hue");
  return e ? parseInt(e) : o();
}
function u(e) {
  localStorage.setItem("hue", String(e));
  const t = document.querySelector(":root");
  t && t.style.setProperty("--hue", e);
}
n.Home, n.Archive, n.About;
export { o as a, u as b, a as g, r as s };
