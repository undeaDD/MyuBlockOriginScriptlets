/// Youtube.js
console.log("[uBO] Scriptlet: Injecting Youtube.js");
window.addEventListener('load', (event) => {
  console.log("[uBO] Scriptlet: Page loaded event");
  let linkElem = document.querySelector("a[aria-label='Alle ansehen']");
  if (linkElem){
    linkElem.click();
    console.log("[uBO] Scriptlet: Success");
  } else {
    console.log("[uBO] Scriptlet: Error");
  }
});
