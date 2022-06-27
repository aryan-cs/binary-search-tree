// canvas
var canvas;
const SCALE = 1.6;
const VARIABLE_SCALING = false;

function limit (value, min, max) { return Math.min(Math.max(value, min), max); }

window.addEventListener("resize", function (ignored) {

  if (VARIABLE_SCALING) { resizeCanvas(Math.floor(limit(window.innerWidth / SCALE, 1000, 1200)), Math.floor(limit(window.innerWidth / SCALE, 580, 610))); }

}, true)

// colors
const BACKGROUND_COLOR = getComputedStyle(document.querySelector(":root")).getPropertyValue("--background-color");
const ACCENT_1 = getComputedStyle(document.querySelector(":root")).getPropertyValue("--accent-1");
const ACCENT_2 = getComputedStyle(document.querySelector(":root")).getPropertyValue("--accent-2");

// project
const HORIZONTAL_OFFSET = 60;
const VERTICAL_OFFSET = 75;
const NODE_SIZE = 30;
var queries = 0;

function searchFor () {

  var value = parseInt(document.getElementById("inputField").value);

  if (value > -1) {

    var found = tree.search(value);

    if (found !== null) { document.getElementById("result").innerHTML = "found " + value + " at depth " + queries; }

    else { document.getElementById("result").innerHTML = value + " could not be found in the tree"; }

  }

  else { document.getElementById("result").innerHTML = "please enter a positive integer"; }

}

function populateTree (nodeCount, lower, upper) {

  for (var count = 0; count < nodeCount; count++) {

    tree.addNode(floor(random(lower, upper)));

  }

}

function populateTreeEvenly (nodeCount, lower, upper, middle) {

  tree.addNode(middle);

  for (var count = 0; count < nodeCount / 2; count++) {

    tree.addNode(floor(random(lower, middle)));

  }

  for (var count = 0; count < nodeCount / 2; count++) {

    tree.addNode(floor(random(middle, upper)));

  }

}
