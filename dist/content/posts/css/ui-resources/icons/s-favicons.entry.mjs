async function getMod(){return import("./s-favicons.mjs").then((e=>e.sFavicons))}const collectedLinks="@@ASTRO-LINKS@@",collectedStyles="@@ASTRO-STYLES@@",collectedScripts="@@ASTRO-SCRIPTS@@",defaultMod={__astroPropagation:!0,getMod:getMod,collectedLinks:collectedLinks,collectedStyles:collectedStyles,collectedScripts:collectedScripts};export{defaultMod as default};