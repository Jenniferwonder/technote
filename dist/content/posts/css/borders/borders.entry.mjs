async function getMod(){return import("./borders.mjs").then((e=>e.borders))}const collectedLinks="@@ASTRO-LINKS@@",collectedStyles="@@ASTRO-STYLES@@",collectedScripts="@@ASTRO-SCRIPTS@@",defaultMod={__astroPropagation:!0,getMod:getMod,collectedLinks:collectedLinks,collectedStyles:collectedStyles,collectedScripts:collectedScripts};export{defaultMod as default};