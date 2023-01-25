style = `
:root {
  --irisBlue: #06bdc1;
  --royalPurple: #68469f;
  --background-body: var(--irisBlue);
  --background-body: -webkit-radial-gradient(center, var(--irisBlue), var(--royalPurple));
  --background-body: -moz-radial-gradient(center, var(--irisBlue), var(--royalPurple));
  --background-body: radial-gradient(ellipse at center, var(--irisBlue), var(--royalPurple));
}

#body {
  background: var(--background-body);
}

.layout-center {
  display: grid;
  height: 100vh;
  place-items: center;
  width: 100vw;
}

.flex-col-center-x {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.gap-4 {
  gap: 1rem;
}

.bg-orange-100 {
  background-color: rgb(255 237 213);
}

.border-8 {
  border-width: 8px;
  border-style: solid;
}

.border-teal-600 {
  border-color: rgb(13 148 136);
}

.flex-col-center-y {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.gap-2 {
  gap: 0.5rem;
}

.px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
}

.rounded {
  border-radius: 4px;
}

.font-light {
  font-weight: 300;
}

.text-center {
  text-align: center;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.font-bold {
  font-weight: bold;
}

.bg-teal-600 {
  background-color: rgb(13 148 136);
}

.box-border {
  box-sizing: border-box;
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

.text-white {
  color: white;
}

.border-1 {
  border-width: 1px;
  border-style: solid;
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