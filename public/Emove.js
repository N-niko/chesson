// dificulty [ 1, 2, 3, 4 ]  5 or more is so slow
let mmdepth = 3;

function emove () {

  if (gameO || Cpawnw) return;
  
  let sc, msc = -5000;
  let pl;
  
  let apm = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (b.b[i][j] && !b.b[i][j].w) {
        let sapm = b.b[i][j].pmoves (b.b);
        
        for (let u = 0; u < sapm.length; u++)
          apm.push ({ x: i, y: j, mx: sapm[u].x, my: sapm[u].y , k: sapm[u].k, r: sapm[u].r, u: sapm[u].u, p: 0 });
        
        
      }
    }
  }
  
  for (let cdt = 1; cdt <= mmdepth; cdt++) {
    
    for (let j = 0; j < apm.length; j++) {
      
      let sp = b.b[apm[j].mx][apm[j].my];
      b.b = moveP (apm[j].x, apm[j].y, apm[j].mx, apm[j].my, b.b);
      sc = score (b.b, 0, 0, msc, cdt);
      b.b = moveP (apm[j].mx, apm[j].my, apm[j].x, apm[j].y, b.b);
      b.b[apm[j].mx][apm[j].my] = sp;
      if (cdt != mmdepth - 1)
        if (sc > msc) {
          msc = sc;
          pl = { x: apm[j].x, y: apm[j].y, tx: apm[j].mx, ty: apm[j].my, k: apm[j].k, r: apm[j].r, u: apm[j].u };
        }
      else {
        apm[j].p = sc;
      }
      
    }
    
    // SORT
    let napm = [];
    for (let i = 0; i < apm.length; i++) {
      let mn = 100000, hi = 0;
      for (let j = 0; j < apm.length; j++) {
        if (apm[j].p < mn) {
          mn = apm[j].p;
          hi = j;
        }
      }
      napm.push (apm[hi]);
      apm[hi].p = 100000;
      
    }
    apm = napm;
  }
  
  
  
  /*
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (b.b[i][j]) 
        if (!b.b[i][j].w) {
          let pms = b.b[i][j].pmoves (b.b);
          
          let kl = 1;
          
          for (let k = 0; k < pms.length; k++) {
            
            if (pms[k].k == kl) {
              
              let sp = b.b[pms[k].x][pms[k].y];
              b.b = moveP (i, j, pms[k].x, pms[k].y, b.b);
              sc = score (b.b, 0, 0, msc);
              b.b = moveP (pms[k].x, pms[k].y, i, j, b.b);
              b.b[pms[k].x][pms[k].y] = sp;
              if (sc > msc) {
                msc = sc;
                pl = { x: i, y: j, tx: pms[k].x, ty: pms[k].y, k: pms[k].k, r: pms[k].r, u: pms[k].u };
              }

            }
            
            if (k == pms.length - 1 && kl) {
                k = -1;
                kl = 0;
              }  
            
          }
          
        }
      
    }
  }
  */
  
  
  if (pl.ty == 7 && b.b[pl.x][pl.y].P == 1) {
    Cpawnb = true;
    Csxb = pl.tx;
  }
  
  if (pl.k == -1) {
    b.b = moveP (pl.x, pl.y, (!clr ? (pl.r ? 6 : 2) : (pl.r ? 5 : 1)), pl.u * 7, b.b, 0);
    b.b = moveP (pl.r * 7, pl.u * 7, (!clr ? (pl.r ? 5 : 3) : (pl.r ? 4 : 2)), pl.u * 7, b.b, 1);
          
    b.b[pl.x][pl.y].nm = 0;
  } else {
    b.b = moveP (pl.x, pl.y, pl.tx, pl.ty, b.b, 1);
    
    if (b.b[pl.tx][pl.ty].nm)
      b.b[pl.tx][pl.ty].nm = 0;
  }
  
  
  //checkmate (b.b);
  
}

