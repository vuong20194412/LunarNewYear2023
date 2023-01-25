style = "";
/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
========================================================================== */
/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */
style += `
html {
  line-height: 1.15; /* 1 */
  text-size-adjust: 100%; /* custom */
  -webkit-text-size-adjust: 100%; /* 2 */
}`;

/* Sections
========================================================================== */
/**
 * Remove the margin in all browsers.
 */
style += `
body {
  margin: 0;
}`;

/**
 * Render the `main` element consistently in IE.
 */
style += `
main {
  display: block;
}`;

/**
 * Correct the font size and margin on `h1` elements within `section` and
 * `article` contexts in Chrome, Firefox, and Safari.
 */
style += `
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}`;

/* Grouping content
========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */
style += `
hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}`;

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */
style += `
pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}`;

/* Text-level semantics
========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */
style += `
a {
  background-color: transparent;
}`;

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */
style += `
abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}`;

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */
style += `
b,
strong {
  font-weight: bolder;
}`;

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */
style += `
code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}`;

/**
 * Add the correct font size in all browsers.
 */
style += `
small {
  font-size: 80%;
}`;

/**
 * Prevent `sub` and `sup` elements from affecting the line height in
 * all browsers.
 */
style += `
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}`;
style += `
sub {
  bottom: -0.25em;
}`;
style += `
sup {
  top: -0.5em;
}`;

/* Embedded content
========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */
style += `
img {
  border-style: none;
}`;

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */
style += `
button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}`;

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */
style += `
button,
input { /* 1 */
  overflow: visible;
}`;

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */
style += `
button,
select { /* 1 */
  text-transform: none;
}`;

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */
style += `
button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}`;

/**
 * Remove the inner border and padding in Firefox.
 */
style += `
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}`;

/**
 * Restore the focus styles unset by the previous rule.
 */
style += `
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}`;

/**
 * Correct the padding in Firefox.
 */
style += `
fieldset {
  padding: 0.35em 0.75em 0.625em;
}`;

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from `fieldset` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    `fieldset` elements in all browsers.
 */
style += `
legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}`;

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */
style += `
progress {
  vertical-align: baseline;
}`;

/**
 * Remove the default vertical scrollbar in IE 10+.
 */
style += `
textarea {
  overflow: auto;
}`;

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */
style += `
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}`;

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */
style += `
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}`;

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */
style += `
[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}`;

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */
style += `
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}`;

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to `inherit` in Safari.
 */
style += `
::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}`;

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */
style += `
details {
  display: block;
}`;

/*
 * Add the correct display in all browsers.
 */
style += `
summary {
  display: list-item;
}`;

/* Misc
========================================================================== */

/**
 * Add the correct display in IE 10+.
 */
style += `
template {
  display: none;
}`;

/**
 * Add the correct display in IE 10.
 */
style += `
[hidden] {
  display: none;
}`;


/* Custom
========================================================================== */
style += `
[type=button]:hover,
[type=button]:focus {
  filter: saturate(0.5);
}
`

/* Append tag <style>
========================================================================== */
style = style.replace(/\/\*[^]{1,5}\*\//g, '');
style = style.replace(/([ ]{2,})|([\n]+)/g, ' ');

node = document.createElement("style");
node.appendChild(document.createTextNode(style));
document.getElementById('head').appendChild(node);
