
function score (bd, depth, MM, mx, mdepth) {
    cs = points (bd);
    let sco = cs.b - cs.w;
    
    // return sco;
    
    if (depth == mdepth)
      return sco;
    
    if (cs.w + cs.b < 2000) {
      return sco;
    }
    
    
    
    if (MM) {
      
      let sc, msc = -5000; 
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          if (bd[i][j]) 
            if (!bd[i][j].w) {
              let pms = bd[i][j].pmoves (bd);
              
              let kl = 1;
  
              for (let k = 0; k < pms.length; k++) {
                
                if (pms[k].k == kl) {
                
                  let fsb = false;
                  let sp = bd[pms[k].x][pms[k].y];
                  bd = moveP (i, j, pms[k].x, pms[k].y, bd);
                  sc = score (bd, depth + 1, 0, msc, mdepth);     
                  bd = moveP (pms[k].x, pms[k].y, i, j, bd);
                  bd[pms[k].x][pms[k].y] = sp;
  
                  if (sc >= mx)
                    return 10000;
                  msc = max (msc, sc);
                  
                }
                
                if (k == pms.length - 1 && kl) {
                  k = -1;
                  kl = 0;
                }  
  
              }
  
            }
          
        }
      }
      
      return msc;
      
    } else {
      //return sco;
      
      let sc, msc = 5000;
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          if (bd[i][j]) 
            if (bd[i][j].w) {
              let pms = bd[i][j].pmoves (bd);
              
              let kl = 1;
              
              for (let k = 0; k < pms.length; k++) {
                
                if (pms[k].k == kl) {
                  
                  let fsb = false;
                  let sp = bd[pms[k].x][pms[k].y];
                  bd = moveP (i, j, pms[k].x, pms[k].y, bd);
                  sc = score (bd, depth + 1, 1, msc, mdepth); 
                  bd = moveP (pms[k].x, pms[k].y, i, j, bd);
                  bd[pms[k].x][pms[k].y] = sp;
  
                  if (sc <= mx)
                    return -10000;
                  msc = min (msc, sc);
  
                }
                
                if (k == pms.length - 1 && kl) {
                  k = -1;
                  kl = 0;
                }  
  
              }
  
            }
          
        }
      }
      
      return msc;
      
    }
    
   
    
    
  }
  
  
  
  
  
  