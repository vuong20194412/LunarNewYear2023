style = `
:root {
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

.gap-8 {
    gap: 2rem;
}

.border-1 {
    border-width: 1px;
    border-style: solid;
}

.border-black {
    border-color: black;
}

.flex-center-y {
    display: flex;
    align-items: center;
}

.hover\\:bg-gray-100:hover {
  background-color: rgb(243 244 246);
}

.relative {
    position: relative;
}

.rounded {
    border-radius: 4px;
}

.absolute {
    position: absolute;
}

.bg-transparent {
    background-color: transparent;
}

.border-0 {
    border-width: 0;
}

.size-10 {
    height: 2.5rem;
    width: 2.5rem;
}

.left-0 {
    left: 0;
}

.right-0 {
    right: 0;
}

.rounded-l {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}

.rounded-r {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}

.select-none {
    -webkit-user-select: none;
    user-select: none;
}

.size-full {
    height: 100%;
    width: 100%;
}

.bg-gray-100 {
    background-color: rgb(243 244 246);
}

.size-4 {
    height: 1rem;
    width: 1rem;
}

.inline-block {
    display: inline-block;
}

.mx-1 {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
}

.rounded-round {
    border-radius: 100%;
}

.duration-500 {
    transition-duration: 500ms;
}

.transition-bg-color {
    transition-property: background-color;
}

.bg-gray-500 {
    background-color: rgb(107 114 128);
}
`;

/* Append tag <style>
========================================================================== */
style = style.replace(/([ ]{2,})|([\n]+)/g, ' ');

node = document.createElement("style");
node.appendChild(document.createTextNode(style));
// Append the "style" node to the list:
document.getElementById('head').appendChild(node);