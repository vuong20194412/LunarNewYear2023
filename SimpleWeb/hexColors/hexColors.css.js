style = `
.layout-center {
  display: grid;
  height: 100vh;
  place-items: center;
  width: 100vw;
}

.flex-col-start-x {
  display: flex;
  flex-direction: column;
  align-items: start;
}

.gap-4 {
  gap: 1rem;
}

.font-bold {
  font-weight: bold;
}

.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}

.uppercase {
  text-transform: uppercase;
}

.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.bg-transparent {
  background-color: transparent;
}

.outline-0 {
  outline-width: 0;
}

.bg-slate-200 {
  background-color: rgb(226 232 240);
}

.border-1 {
  border-width: 1px;
}

.capitalize {
  text-transform: capitalize;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.rounded-base {
  border-radius: 4px;
}

.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}

.border-0 {
  border-width: 0;
}

.my-0 {
  margin-top: 0;
  margin-bottom: 0;
}
`;

/* Append tag <style>
========================================================================== */
style = style.replace(/([ ]{2,})|([\n]+)/g, ' ');

node = document.createElement("style");
node.appendChild(document.createTextNode(style));
// Append the "style" node to the list:
document.getElementById('head').appendChild(node);