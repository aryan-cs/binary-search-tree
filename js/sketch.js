var tree;

function preload() { defaultFont = loadFont("assets/fonts/default.ttf"); }

function setup () {

  createCanvas(1200, 610);

  canvas = document.getElementById("defaultCanvas0").getContext("2d");

  createTree();

}

function draw () { }

function createTree () {

  clear();

  tree = new Tree();
  populateTreeEvenly(12, 0, 50, 25);

  tree.traverse();

}