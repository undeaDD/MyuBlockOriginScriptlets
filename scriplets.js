/// Youtube.js
console.log("[uBO] Scriptlet: Injecting Youtube.js");
window.addEventListener('load', (event) => {
  console.log("[uBO] Scriptlet: Page loaded event");
  setTimeout(() => {
    let linkElem = ["Alle ansehen", "Alle abspielen"].find(label => document.querySelector('a[aria-label="' + label + '"]'));
    if (linkElem) {
      linkElem.click();
      console.log("[uBO] Scriptlet: Success");
    } else {
      console.log("[uBO] Scriptlet: Error");
    }
  }, "1000");
});
