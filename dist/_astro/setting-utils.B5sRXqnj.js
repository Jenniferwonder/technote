function r() {
  const t = document.getElementById("config-carrier");
  return parseInt(t?.dataset.hue || "250");
}
function n() {
  const t = localStorage.getItem("hue");
  return t ? parseInt(t) : r();
}
function o(t) {
  localStorage.setItem("hue", String(t));
  const e = document.querySelector(":root");
  e && e.style.setProperty("--hue", t);
}
export { r as a, n as g, o as s };
