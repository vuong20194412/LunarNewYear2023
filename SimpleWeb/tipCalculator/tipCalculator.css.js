style = `
:root {
    --background-body: linear-gradient(to right,#f95ce2,#edca11);
}

.box-border {
    box-sizing: border-box;
}

.block {
    display: block;
}

.block-border {
    box-sizing: border-box;
    display: block;
}

#body {
    background: var(--background-body);
}

.layout-center {
    height: 100vh;
    width: 100vw;
    display: grid;
    place-items: center;
}

.flex-col {
    display: flex;
    flex-direction: column;
}

.flex-col-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.flex-center-y {
    display: flex;
    align-items: center;
}

.w-full {
    width:100%;
}

.h-full {
    height: 100%;
}

.h-0 {
    height: 0;
}

.m-0 {
    margin: 0;
}

.mt-0 {
    margin-top: 0;
}

.mb-0 {
    margin-bottom: 0;
}

.my-0 {
    margin-top: 0;
    margin-bottom: 0;
}

.p-0 {
    padding: 0;
}

.px-0 {
    padding-left: 0;
    padding-right: 0;
}

.py-0 {
    padding-top: 0;
    padding-bottom: 0;
}

.font-bold { 
    font-weight: bold;
}

.outline-0 {
    outline-width:0;
}

.border-0 {
    border-width: 0;
}

.bg-zinc-100 {
    background-color: rgb(244 244 245);
}

.border-2 {
    border-width: 2px;
    border-style: solid;
}

.border-zinc-300 {
	border-color: rgb(212 212 216);
}

.rounded {
    border-radius: 4px;
}

.shadow-xl {
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}

.w-112 {
    width: 28rem;
}

.my-4 {
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
}

.border-y-2 {
    border-top-width: 2px;
    border-top-style: solid;
    border-bottom-width: 2px;
    border-bottom-style: solid;
}

.border-y-zinc-300 {
    border-top-color: rgb(212 212 216);
    border-bottom-color: rgb(212 212 216);
}

.gap-4 {
    gap: 1rem;
}

.py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
}

.w-4\\/5 {
    width: 80%;
}

.h-8 {
    height: 2rem;
}

.rounded-l-md {
    border-top-left-radius: 0.375rem;
    border-bottom-left-radius: 0.375rem;
}

.rounded-r-md {
    border-top-right-radius: 0.375rem;
    border-bottom-right-radius: 0.375rem;
}

.rounded-md {
    border-radius: 0.375rem;
}

.w-10 {
    width: 2.5rem;
}

.px-2 {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
}

.py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}

.text-xs {
    font-size: 0.75rem;
    line-height: 1rem;
}

.text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
}

.text-base {
    font-size: 1rem; 
    line-height: 1.5rem;
}

`;

/* Append tag <style>
========================================================================== */
style = style.replace(/([ ]{2,})|([\n]+)/g, ' ');


node = document.createElement("style");
node.appendChild(document.createTextNode(style));
// Append the "style" node to the list:
document.getElementById('head').appendChild(node);