
let Cpawnw = false, Cpawnb = false;
let Csxw, Csxb;
let imgi = [0, 4, 10, 8];
let rH = 130, rW = 340;

function changeP () {
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
    rect (-120 + i * 80, 0, 70, 70);
    image (img[imgi[i] + Cpawnw], -150 + i * 80, -rH / 4);

  }
  
  pop ();
  
}


function chooseP() {
  
  if (!Cpawnw && !Cpawnb) return;
  
  if (mouseY < (height - 60) / 2 || mouseY > (height + 60) / 2) return;
  
  let wo;
  
  for (let i = 0; i < 4; i++) {
    
    if (mouseX > 90 + i * 80 && mouseX < 150 + i * 80) {
      wo = i;
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














