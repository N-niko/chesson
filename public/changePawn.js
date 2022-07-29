
let Cpawnw = false, Cpawnb = false;
let Csxw, Csxb;
let imgi = [0, 4, 10, 8];
let rH = 130, rW = 340;

function changeP () {

  rW = width * 0.5;
  rH = height * 0.25;

  if (!Cpawnw && !Cpawnb || Manim) return;
  
  
  if (Cpawnb) {
    b.b[Csxb][7] = new Queen (Csxb, 7, 0, clr);
    Cpawnb = false;
    return;
  }
  
  
  push ();
  
  strokeWeight (3);
  fill (130, 100, 53);
  rectMode (CENTER);
  translate (width / 2, height / 2);
  rect (0, 0, rW, rH);

  fill (190, 160, 103);
  for (let i = 0; i < 4; i++) {

    strokeWeight (4);
    rect (-rW / 2 + (i + 0.5) * l, 0, l * 0.9, l * 0.9);
    image (img[imgi[i] + Cpawnw], -rW / 2 + (i) * l, -l / 2);

  }
  
  pop ();
  
}


function chooseP() {
  
  if (!Cpawnw && !Cpawnb) return;
  
  if (mouseY < height / 2 - l / 2 || mouseY > height / 2 + l / 2) return;
  
  let wo;
  
  for (let i = 0; i < 4; i++) {
    
    if (mouseX > width / 2 - rW / 2 + (i) * l && mouseX < width / 2 - rW / 2 + (i + 1) * l) {
      wo = i;
      console.log (wo);
      break;
    }
  }
  
  switch (wo) {
    case 0:
      b.b[Csxw][Cpawnb * 7] = new Bishop (Csxw, Cpawnb * 7, 1, !clr); 
      break;
    case 1:
      b.b[Csxw][Cpawnb * 7] = new Knight (Csxw, Cpawnb * 7, 1, !clr); 
      break;
    case 2:
      b.b[Csxw][Cpawnb * 7] = new Rook (Csxw, Cpawnb * 7, 1, !clr); 
      break;
    case 3:
      b.b[Csxw][Cpawnb * 7] = new Queen (Csxw, Cpawnb * 7, 1, !clr); 
      break;
    
  }
  
  if (wo != undefined) {
    Cpawnw = Cpawnb = false;
  }
  
  
}














