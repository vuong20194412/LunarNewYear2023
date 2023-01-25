style = `
.layout-center{height:100vh;width:100vw;display:grid;place-items:center;}
`;

node = document.createElement("style");
node.appendChild(document.createTextNode(style));
// Append the "style" node to the list:
document.getElementById('head').appendChild(node);