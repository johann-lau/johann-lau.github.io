var bgcolor = localStorage.getItem('b') || "#ffffff";
var focolor = localStorage.getItem('f') || "#000000";
var mysheet = document.getElementById("mystyle").sheet;
blist = ["#FFFFFF", "#37393E", "#76D3F9", "#7DA8F7", "#AA90F7", "#D798F8", "#DE799D", "#F19286", "#F3A884", "#F7C783", "#FAD885", "#FFF8A2", "#EDF29B", "#BADD95"];
flist = ["#000000", "#DCDDDE", "#1D4C63", "#0A3075", "#170F4F", "#3F1556", "#4F1729", "#791E0E", "#732F10", "#744C16", "#74581A", "#8C8529", "#717524", "#3F5623"];
bg = document.getElementById('bgc')
bg.addEventListener("change", BGc, false);
fg = document.getElementById('fgc')
fg.addEventListener("change", FGc, false);

function BGc(event) {
  bgcolor = event.target.value;
  setcolor();
}

function FGc(event) {
  focolor = event.target.value;
  setcolor();
}

function setcolor() {
  bg.value = bgcolor;
  fg.value = focolor;
  document.body.style.backgroundColor = bgcolor;
  document.getElementsByTagName('body')[0].style.color = focolor;
  for (var i=1; i<5; i++) {
    mysheet.deleteRule(mysheet.cssRules.length - 1);
  }
  mysheet.insertRule(`
#bgc {
width:7vw;
height: 7vw;
border-style: solid;
border-color: ` + focolor + `;
background-color: ` + bgcolor + `;
border-radius: 1vw;
border-width:0.5vw;
}
`, mysheet.cssRules.length);
  mysheet.insertRule(`
#fgc {
width:7vw;
height: 7vw;
border-style: solid;
border-color: ` + bgcolor + `;
background-color: ` + focolor + `;
border-radius: 1vw;
border-width:0.5vw;
}
`, mysheet.cssRules.length);
  mysheet.insertRule(`
button {
text-align: center;
display: inline-block;
margin: 0.25vw 0.5vw;
border-style: solid;
transition-duration: 0.4s;
cursor: pointer;
color: ` + focolor + `;
border-color: ` + focolor + `;
background-color: ` + bgcolor + `;
}
`, mysheet.cssRules.length);
  mysheet.insertRule(`
button:hover {
color: ` + bgcolor + `;
border-color: ` + focolor + `;
background-color: ` + focolor + `;
}
`, mysheet.cssRules.length);
  mysheet.insertRule(`
.card {
  height: 8vw;
  border-style: solid;
  border-radius: 0.6vw;
  border-color: `+ focolor +`;
}
`, mysheet.cssRules.length);
  localStorage.setItem('b', bgcolor);
  localStorage.setItem('f', focolor);
}
function theme(bgindex, foindex, inverted) {
  if (inverted) {
    bgcolor = flist[bgindex];
    focolor = blist[foindex];
  } else {
    bgcolor = blist[bgindex];
    focolor = flist[foindex];
  }
  setcolor();
}