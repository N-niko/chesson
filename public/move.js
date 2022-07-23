let p = 1;
let mx, my;
let lmx, lmy;
let pm;
let mvc = 1;
let lastm;

mousePressed = function () {
  
  if (Manim) return;
  
  if (Cpawnw || Cpawnb) {
    chooseP ();
    return;
  }
  
  if (mouseX > width || mouseY > height) return;
  
  if (mx == mouseX - mouseX % l && my == mouseY - mouseY % l) {
    mx = my = pm = undefined; 
    return;
  }
  
  
  mx = mouseX - mouseX % l;
  my = mouseY - mouseY % l;
  
  let i = mx / l, j = my / l;
  
  if (mp) {
    if (lmx != undefined && lmy != undefined) {
      b.b = moveP (lmx / l, lmy / l, i, j, b.b, 0);
      saveB ();
      lmx = undefined; lmy = undefined;
      return;
    } else {
      lmx = mx; lmy = my;
    }
  }
  
  
  
  if (pm)
    for (let k = 0; k < pm.length; k++) {
      
      if (pm[k].x == i && pm[k].y == j) {
        
        if (pm[k].k == -1) {
          b.b = moveP (lmx / l, lmy / l, (!clr ? (pm[k].r ? 6 : 2) : (pm[k].r ? 5 : 1)), pm[k].u * 7, b.b, 0);
          b.b = moveP (pm[k].r * 7, pm[k].u * 7, (!clr ? (pm[k].r ? 5 : 3) : (pm[k].r ? 4 : 2)), pm[k].u * 7, b.b, 1);
          
          b.b[i][j].nm = 0;
          
        } else {
          b.b = moveP (lmx / l, lmy / l, i, j, b.b, 1);
          
          if (b.b[i][j].nm)
              b.b[i][j].nm = 0;
        }
        
        
        // If Pawn is at eighth rank
        if (b.b[i][j].P == 1)
          if (j == 0) {
            Cpawnw = true;
            Csxw = i;
          }
          else if (j == 7) {
            Cpawnb = true;
            Csxb = i;
          }
        
        sa = mx = my = lmx = lmy = pm = undefined; 
        
        //checkmate (b.b);
        //mvc = 1 - mvc;
        
        return;
      }
      
    }  
  
  
  if (!mp)
  if (b.b[i][j] && (b.b[i][j].w && mvc || !b.b[i][j].w && !mvc)) {
    pm = b.b[i][j].pmoves (b.b);

  } else 
    mx = my = pm = undefined;
  
  lmx = mx; lmy = my;
  
}


function showpm () {
  if (!pm || mp) return;
  
  for (let i = 0; i < pm.length; i++) {
    noStroke ();
    if (pm[i].k == 1)
      fill (110, 10, 10, 255);
    else
      fill (0, 140, 0, 140);
    rect (pm[i].x * l, pm[i].y * l, l, l);
    stroke ('black');
  }
  
  fill (70, 200, 70, 140);
  rect (mx, my, l, l);
  
}

let fx, fy, tx, ty;
let Manim = false;
let count;
let sa;
function moveP (vfx, vfy, i, j, bd = 0, a = 0) {
  
  fx = vfx; fy = vfy;
  tx = i; ty = j;
  
  lastm = { x: fx, y: fy, x2 : tx, y2 : ty };
  
  b.b[i][j] = b.b[vfx][vfy];
  b.b[vfx][vfy] = 0;
  if (a) {
    Manim = true;
    saveB ();
  }
  else {
    if (bd) {
      bd[tx][ty].x = tx;
      bd[tx][ty].y = ty;
      // if (ty == 0 && bd[tx][ty].P == 1)
      //   bd[tx][ty] = new Queen (tx, ty, 1);
      // else if (ty == 7 && bd[tx][ty].P == 1)
      //   bd[tx][ty] = new Queen (tx, ty, 0);
        
    }
    sa = 1;
  }
  
  count = 0;
  
  return bd;
  
}

let timetoA = 15;
function moveA () {
  
  if (Manim) {
    
    b.b[tx][ty].x += (tx - fx) / timetoA;
    b.b[tx][ty].y += (ty - fy) / timetoA;
    count++;
    
  }
  
  if (count == timetoA) {
    Manim = false;
    b.b[tx][ty].x = tx;
    b.b[tx][ty].y = ty;
    if (!sa) {
      
      let ft = millis () / 1000;
      emove ();
      let ct = millis () / 1000;
      console.log (ct - ft);
    }

     
  }
  
}







