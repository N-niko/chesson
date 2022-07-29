let img = [];
var l = 60;
let b;
let gameO = false;  
let mp = false
let drm = []

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
  size = min (window.innerWidth, window.innerHeight) * 0.9;
  size = floor (size / 8) * 8;
  createCanvas (size, size);
  l = size / 8;

  for (let im of img) {
    im.resize(width / 8, height / 8);
  }
  
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
  
  for (dr of drm) {
    push ();
    //console.log (dr[4])
    if (dr[4] < 0) 
        stroke ('red')
    else
        stroke ('green')
    
    if (dr[4] == -10000) {
        pop ();
        continue
    }
    strokeWeight (min (abs (dr[4]), 4) * 2)
    //line (dr[0], dr[1], dr[2], dr[3]);

    pop ();
  }

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



