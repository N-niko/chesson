let sbs = [];

function saveB () {
  sbs.push ([]);
  let ls = sbs.length - 1;
  
  for (let i = 0; i < 8; i++) {
      sbs[ls][i] = [];
    for (let j = 0; j < 8; j++) {
      sbs[ls][i][j] = b.b[i][j];
    
    }
  }
  
}



function openB () {

  if (sbs.length == 0) return;
  
  let whi;
  
  if (sbs.length < 3) 
    whi = 0;
  else {
    sbs.splice (sbs.length - 1, 1);
    whi = sbs.length - 2;
  }
  
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (!sbs[whi][i][j]) {
        b.b[i][j] = 0;
        continue;
      }
      b.b[i][j] = sbs[whi][i][j]
      b.b[i][j].x = i;
      b.b[i][j].y = j;
      
    }
  }
  
 
  sbs.splice (whi + 1, 2);
  

}












