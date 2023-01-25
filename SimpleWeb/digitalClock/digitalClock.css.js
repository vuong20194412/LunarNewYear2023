style = `
:root {
  --background-body: conic-gradient(from 90deg at 25% -10%, #ff4500, #d3f340, #7bee85, #afeeee, #7bee85);
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

.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.text-white {
  color: white;
}

.rounded {
  border-radius: 4px;
}

.font-bold {
  font-weight: bold;
}

.text-center {
  text-align: center;
}

.text-6xl {
  font-size: 3.75rem; 
  line-height: 1;
}

.text-8xl {
  font-size: 6rem; 
  line-height: 1;
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