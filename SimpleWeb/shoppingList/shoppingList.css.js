style = `
:root {
    --background-body: orange;
    --list-style-type: "- ";
}

#body{
    background: var(--background-body);
}

.layout-center {
    height: 100vh;
    width: 100vw;
    display: grid;
    place-items: center;
}

.flex-col-center-x {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.flex-center-y {
    display: flex;
    align-items: center;
}

.bg-white {
    background-color: white;
}

.gap-4 {
    gap: 1rem;
}

.min-h-screen {
    min-height: 100vh;
}

.font-bold {
    font-weight: bold;
}

.text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
}

.w-4\\/5 {
    width: 80%;
}

.mb-2 {
    margin-bottom: 0.5rem;
}

.bg-pink-200 {
    background-color: rgb(251 207 232);
}

.border-0 {
    border-width: 0;
}

.capitalize {
    text-transform: capitalize;
}

.px-2 {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
}

.py-1 {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
}

.rounded {
    border-radius: 4px;
}

.text-base {
    font-size: 1rem;
    line-height: 1.5rem;
}

.text-white {
    color: white;
}

.border-b-2 {
    border-bottom-width: 2px;
    border-bottom-style: solid;
}

.border-b-gray-900 {
    border-bottom-color: rgb(17 24 39);
}

.outline-0 {
    outline-width: 0;
}

.px-1 {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
}

.w-full {
    width: 100%;
}

.px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
}

.cursor-pointer {
    cursor: pointer;
}

.text-xl {
    font-size: 1.25rem;
    line-height: 1.75rem;
}

.line-through {
    text-decoration-line: line-through;
}
`;

/* Append tag <style>
========================================================================== */
style = style.replace(/([ ]{2,})|([\n]+)/g, ' ');

node = document.createElement("style");
node.appendChild(document.createTextNode(style));
// Append the "style" node to the list:
document.getElementById('head').appendChild(node);