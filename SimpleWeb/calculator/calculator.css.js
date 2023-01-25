style = `
:root {
    --background-body: linear-gradient(#f4f4ed, white);
    --background-item: white;
}

#body{
  background: var(--background-body);
}

.layout-center {
  display: grid;
  height: 100vh;
  place-items: center;
  width: 100vw;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.gap-4 {
  gap: 1rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.shadow-md {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.bg-gray-200 {
  background-color: rgb(229 231 235);
}

.rounded {
  border-radius: 4px;
}

.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.py-8 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}

.text-right {
  text-align: right;
}

.grid-5-4 {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: repeat(5, minmax(0, 1fr));
}

.h-full {
  height: 100%;
}

.gap-1 {
  gap: 0.25rem;
}

.bg-white {
  background-color: white;
}

.text-white {
  color: white;
}

.bg-amber-500 {
  background-color: rgb(245 158 11);
}

.bg-red-500 {
  background-color: rgb(239 68 68);
}

.bg-blue-500 {
  background-color: rgb(59 130 246);
}

.col-span-full {
	grid-column: 1 / -1;
}

.border-0 {
  border-width: 0;
}

.outline-0 {
  outline-width: 0;
}
`;

/* Append tag <style>
========================================================================== */
style = style.replace(/([ ]{2,})|([\n]+)/g, ' ');

node = document.createElement("style");
node.appendChild(document.createTextNode(style));
// Append the "style" node to the list:
document.getElementById('head').appendChild(node);