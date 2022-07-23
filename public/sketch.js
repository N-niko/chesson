let img = [];
var l = 60;
let b;
let gameO = false;  
let mp = false

function preload () {
  
  img.push (loadImage ("chess/Chess_bdt60.png"));
  img.push (loadImage ("chess/Chess_blt60.png"));
  img.push (loadImage ("chess/Chess_kdt60.png"));
  img.push (loadImage ("chess/Chess_klt60.png"));
  img.push (loadImage ("chess/Chess_ndt60.png"));
  img.push (loadImage ("chess/Chess_nlt60.png"));
  img.push (loadImage ("chess/Chess_pdt60.png"));
  img.push (loadImage ("chess/Chess_plt60.png"));
  img.push (loadImage ("chess/Chess_qdt60.png"));
  img.push (loadImage ("chess/Chess_qlt60.png"));
  img.push (loadImage ("chess/Chess_rdt60.png"));
  img.push (loadImage ("chess/Chess_rlt60.png")); 
  
  
}

function setup () {
  createCanvas(600, 600);

  for (let im of img) {
    im.resize(width / 10, height / 10);
  }
  
  b = new Board (); 
  b = new Board ();
  
  fillBoard ();
  
  saveB ();
  
  if (clr)
    emove ();

}

function draw () {
  background(255);
  
  b.showb (); // show chess board
  
  showpm (); // show all possible moves
  
  b.showp (); // show all pieces
  
  changeP (); // change Pawn
  
  moveA (); // move animation
  
  points (b.b, true);
  
  if (gameO && !Manim)
    noLoop ();
  
  fill ('red');
  textSize (35);
  text (floor((points (b.b).w - points (b.b).b) * 10) / 10, 10, height / 2);
}

keyPressed = function () {
  if (key == 'o' && !Manim)
    openB (); 
  if (key == 'm') {
    mp = !mp;
  }
}


