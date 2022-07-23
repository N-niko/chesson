class Pawn {

    constructor(x, y, w, cl) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.cl = cl;
      this.P = 1;
    }
  
    show() {
      if (!this.cl)
        image(img[6], this.x * l, this.y * l);
      else
        image(img[7], this.x * l, this.y * l);
    }
  
    pmoves(bd) {
      let y = this.y;
      let x = this.x;
      
      if (this.y != floor (this.y) || this.x != floor (this.x))
        return [];
      
      let pm = [];
      if (this.w) {
  
        if (y > 0 && !bd[x][y - 1])
          pm.push({ x: x, y: y - 1, k: 0 });
        if (y == 6 && !bd[x][4] && !bd[x][5])
          pm.push({ x: x, y: 4, k: 0 });
        if (y > 0 && x > 0 && bd[x - 1][y - 1] && !bd[x - 1][y - 1].w)
          pm.push({ x: x - 1, y: y - 1, k: 1 });
        if (y > 0 && x < 7 && bd[x + 1][y - 1] && !bd[x + 1][y - 1].w)
          pm.push({ x: x + 1, y: y - 1, k: 1 });
  
      } else {
  
        if (y < 7 && !bd[x][y + 1])
          pm.push({ x: x, y: y + 1, k: 0 });
        if (y == 1 && !bd[x][3] && !bd[x][2])
          pm.push({ x: x, y: 3, k: 0 });
        if (y < 7 && x > 0 && bd[x - 1][y + 1] && bd[x - 1][y + 1].w)
          pm.push({ x: x - 1, y: y + 1, k: 1 });
        if (y < 7 && x < 7 && bd[x + 1][y + 1] && bd[x + 1][y + 1].w)
          pm.push({ x: x + 1, y: y + 1, k: 1 });
  
      }
      return pm;
  
    }
  
  }
  
  
  class Knight {
  
    constructor(x, y, w, cl) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.cl = cl;
      this.P = 3;
    }
  
    show() {
      if (!this.cl)
        image(img[4], this.x * l, this.y * l);
      else
        image(img[5], this.x * l, this.y * l);
    }
  
    pmoves(bd) {
      let y = this.y;
      let x = this.x;
      
      if (this.y != floor (this.y) || this.x != floor (this.x))
        return [];
      
      let pm = [];
      let pmb = [];
  
      if (y > 1 && x < 7)
        pmb.push({ x: x + 1, y: y - 2 });
      if (y > 1 && x > 0)
        pmb.push({ x: x - 1, y: y - 2 });
      if (y > 0 && x > 1)
        pmb.push({ x: x - 2, y: y - 1 });
      if (y < 7 && x > 1)
        pmb.push({ x: x - 2, y: y + 1 });
      if (y < 6 && x < 7)
        pmb.push({ x: x + 1, y: y + 2 });
      if (y < 6 && x > 0)
        pmb.push({ x: x - 1, y: y + 2 });
      if (y > 0 && x < 6)
        pmb.push({ x: x + 2, y: y - 1 });
      if (y < 7 && x < 6)
        pmb.push({ x: x + 2, y: y + 1 });
      
      
      if (this.w) {
        
        for (let i = 0; i < pmb.length; i++) {
          
          if (!bd[pmb[i].x][pmb[i].y])
            pm.push ({ x: pmb[i].x, y: pmb[i].y, k: 0 });
          else if (!bd[pmb[i].x][pmb[i].y].w) 
            pm.push ({ x: pmb[i].x, y: pmb[i].y, k: 1 });
          else if (bd[pmb[i].x][pmb[i].y].w) 
            continue;
        }
        
      } else {
        
        for (let i = 0; i < pmb.length; i++) {
          
          if (!bd[pmb[i].x][pmb[i].y])
            pm.push ({ x: pmb[i].x, y: pmb[i].y, k: 0 });
          else if (bd[pmb[i].x][pmb[i].y].w) 
            pm.push ({ x: pmb[i].x, y: pmb[i].y, k: 1 });
          else if (!bd[pmb[i].x][pmb[i].y].w) 
            continue;
        }
      
      }
    
      return pm;
  
    }
  
  }
  
  
  class Bishop {
  
    constructor(x, y, w, cl) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.cl = cl;
      this.P = 3;
    }
  
    show() {
      if (!this.cl)
        image(img[0], this.x * l, this.y * l);
      else
        image(img[1], this.x * l, this.y * l);
    }
  
    pmoves(bd) {
      let y = this.y;
      let x = this.x;
      
      if (this.y != floor (this.y) || this.x != floor (this.x))
        return [];
      
      let vx, vy;
      let pm = [];
      
      vx = x; vy = y;
      while (vx < 7 && vy < 7) {
        
        vx++; vy++;
        if (bd[vx][vy]) {
          if (bd[vx][vy].w + this.w == 1) 
            pm.push ({ x: vx, y: vy, k: 1 });
          
          break;
        } else
          pm.push ({ x: vx, y: vy, k: 0 });
      }
      
      vx = x; vy = y;
      while (vx > 0 && vy < 7) {
        
        vx--; vy++;
        if (bd[vx][vy]) {
          if (bd[vx][vy].w + this.w == 1) 
            pm.push ({ x: vx, y: vy, k: 1 });
          
          break;
        } else
          pm.push ({ x: vx, y: vy, k: 0 });
      }
      
      vx = x; vy = y;
      while (vx < 7 && vy > 0) {
        
        vx++; vy--;
        if (bd[vx][vy]) {
          if (bd[vx][vy].w + this.w == 1) 
            pm.push ({ x: vx, y: vy, k: 1 });
          
          break;
        } else
          pm.push ({ x: vx, y: vy, k: 0 });
      }
      
      vx = x; vy = y;
      while (vx > 0 && vy > 0) {
        
        vx--; vy--;
        if (bd[vx][vy]) {
          if (bd[vx][vy].w + this.w == 1) 
            pm.push ({ x: vx, y: vy, k: 1 });
          
          break;
        } else
          pm.push ({ x: vx, y: vy, k: 0 });
      }
      
      
      return pm;
  
    }
  
  }
  
  
  
  class Rook {
  
    constructor(x, y, w, cl) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.cl = cl;
      this.nm = 1;
      this.P = 5;
    }
  
    show() {
      if (!this.cl)
        image(img[10], this.x * l, this.y * l);
      else
        image(img[11], this.x * l, this.y * l);
    }
  
    pmoves(bd) {
      let y = this.y;
      let x = this.x;
      
      if (this.y != floor (this.y) || this.x != floor (this.x))
        return [];
      
      let vx, vy;
      let pm = [];
      
      vx = x; vy = y;
      while (vx < 7) {
        
        vx++;
        if (bd[vx][vy]) {
          if (bd[vx][vy].w + this.w == 1) 
            pm.push ({ x: vx, y: vy, k: 1 });
          
          break;
        } else
          pm.push ({ x: vx, y: vy, k: 0 });
      }
      
      vx = x;
      while (vx > 0) {
        
        vx--;
        if (bd[vx][vy]) {
          if (bd[vx][vy].w + this.w == 1) 
            pm.push ({ x: vx, y: vy, k: 1 });
          
          break;
        } else
          pm.push ({ x: vx, y: vy, k: 0 });
      }
      
      vx = x;
      while (vy < 7) {
        
        vy++;
        if (bd[vx][vy]) {
          if (bd[vx][vy].w + this.w == 1) 
            pm.push ({ x: vx, y: vy, k: 1 });
          
          break;
        } else
          pm.push ({ x: vx, y: vy, k: 0 });
      }
      
      vy = y;
      while (vy > 0) {
        
        vy--;
        if (bd[vx][vy]) {
          if (bd[vx][vy].w + this.w == 1) 
            pm.push ({ x: vx, y: vy, k: 1 });
          
          break;
        } else
          pm.push ({ x: vx, y: vy, k: 0 });
      }
      
      
      return pm;
  
    }
  
  }
  
  
  
  class Queen {
  
    constructor(x, y, w, cl) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.cl = cl;
      this.P = 9;
    }
  
    show() {
      if (!this.cl)
        image(img[8], this.x * l, this.y * l);
      else
        image(img[9], this.x * l, this.y * l);
    }
  
    pmoves(bd) {
      let y = this.y;
      let x = this.x;
      
      if (this.y != floor (this.y) || this.x != floor (this.x))
        return [];
      
      let vx, vy;
      let pm = [];
      
      vx = x; vy = y;
      while (vx < 7) {
        
        vx++;
        if (bd[vx][vy]) {
          if (bd[vx][vy].w + this.w == 1) 
            pm.push ({ x: vx, y: vy, k: 1 });
          
          break;
        } else
          pm.push ({ x: vx, y: vy, k: 0 });
      }
      
      vx = x;
      while (vx > 0) {
        
        vx--;
        if (bd[vx][vy]) {
          if (bd[vx][vy].w + this.w == 1) 
            pm.push ({ x: vx, y: vy, k: 1 });
          
          break;
        } else
          pm.push ({ x: vx, y: vy, k: 0 });
      }
      
      vx = x;
      while (vy < 7) {
        
        vy++;
        if (bd[vx][vy]) {
          if (bd[vx][vy].w + this.w == 1) 
            pm.push ({ x: vx, y: vy, k: 1 });
          
          break;
        } else
          pm.push ({ x: vx, y: vy, k: 0 });
      }
      
      vy = y;
      while (vy > 0) {
        
        vy--;
        if (bd[vx][vy]) {
          if (bd[vx][vy].w + this.w == 1) 
            pm.push ({ x: vx, y: vy, k: 1 });
          
          break;
        } else
          pm.push ({ x: vx, y: vy, k: 0 });
      }
      
      vx = x; vy = y;
      while (vx < 7 && vy < 7) {
        
        vx++; vy++;
        if (bd[vx][vy]) {
          if (bd[vx][vy].w + this.w == 1) 
            pm.push ({ x: vx, y: vy, k: 1 });
          
          break;
        } else
          pm.push ({ x: vx, y: vy, k: 0 });
      }
      
      vx = x; vy = y;
      while (vx > 0 && vy < 7) {
        
        vx--; vy++;
        if (bd[vx][vy]) {
          if (bd[vx][vy].w + this.w == 1) 
            pm.push ({ x: vx, y: vy, k: 1 });
          
          break;
        } else
          pm.push ({ x: vx, y: vy, k: 0 });
      }
      
      vx = x; vy = y;
      while (vx < 7 && vy > 0) {
        
        vx++; vy--;
        if (bd[vx][vy]) {
          if (bd[vx][vy].w + this.w == 1) 
            pm.push ({ x: vx, y: vy, k: 1 });
          
          break;
        } else
          pm.push ({ x: vx, y: vy, k: 0 });
      }
      
      vx = x; vy = y;
      while (vx > 0 && vy > 0) {
        
        vx--; vy--;
        if (bd[vx][vy]) {
          if (bd[vx][vy].w + this.w == 1) 
            pm.push ({ x: vx, y: vy, k: 1 });
          
          break;
        } else
          pm.push ({ x: vx, y: vy, k: 0 });
      }
      
      return pm;
  
    }
  
  }
  
  
  class King {
  
    constructor(x, y, w, cl) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.cl = cl;
      this.nm = 1;
      this.P = 1000;
    }
  
    show() {
      if (!this.cl)
        image(img[2], this.x * l, this.y * l);
      else
        image(img[3], this.x * l, this.y * l);
      
    }
  
    pmoves(bd) {
      let y = this.y;
      let x = this.x;
      if (this.y != floor (this.y) || this.x != floor (this.x))
        return [];
      
      let pm = [];
      let pmb = [];
  
      if (y > 0)
        pmb.push({ x: x, y: y - 1 });
      if (y > 0 && x < 7)
        pmb.push({ x: x + 1, y: y - 1 });
      if (y > 0 && x > 0)
        pmb.push({ x: x - 1, y: y - 1 });
      if (x > 0)
        pmb.push({ x: x - 1, y: y });
      if (y < 7 && x > 0)
        pmb.push({ x: x - 1, y: y + 1 });
      if (y < 7)
        pmb.push({ x: x, y: y + 1 });
      if (y < 7 && x < 7)
        pmb.push({ x: x + 1, y: y + 1 });
      if (x < 7)
        pmb.push({ x: x + 1, y: y });
      
      
      if (this.w) {
        
        for (let i = 0; i < pmb.length; i++) {
          
          if (!bd[pmb[i].x][pmb[i].y])
            pm.push ({ x: pmb[i].x, y: pmb[i].y, k: 0 });
          else if (!bd[pmb[i].x][pmb[i].y].w) 
            pm.push ({ x: pmb[i].x, y: pmb[i].y, k: 1 });
          else if (bd[pmb[i].x][pmb[i].y].w) 
            continue;
        }
        
      } else {
        
        for (let i = 0; i < pmb.length; i++) {
          
          if (!bd[pmb[i].x][pmb[i].y])
            pm.push ({ x: pmb[i].x, y: pmb[i].y, k: 0 });
          else if (bd[pmb[i].x][pmb[i].y].w) 
            pm.push ({ x: pmb[i].x, y: pmb[i].y, k: 1 });
          else if (!bd[pmb[i].x][pmb[i].y].w) 
            continue;
        }
      
      }
      
      if (this.nm)
        if (this.cl == this.w) {
          // CASTLE WHILE PLAYING AS WHITE
        if (bd[0][this.w * 7] && bd[0][this.w * 7].nm && !bd[1][this.w * 7] && !bd[2][this.w * 7] && !bd[3][this.w * 7]) {
            pm.push ({ x: 2, y: this.w * 7, k: -1, r: 0, u: this.w });
          }
          if (bd[7][this.w * 7] && bd[7][this.w * 7].nm && !bd[6][this.w * 7] && !bd[5][this.w * 7]) {
            pm.push ({ x: 6, y: this.w * 7, k: -1, r: 1, u: this.w });
          }
        } else {
          // CASTLE WHILE PLAYING AS BLACK
          if (bd[0][this.w * 7] && bd[0][this.w * 7].nm && !bd[1][this.w * 7] && !bd[2][this.w * 7]) {
            pm.push ({ x: 1, y: this.w * 7, k: -1, r: 0, u: this.w });
          }
          if (bd[7][this.w * 7] && bd[7][this.w * 7].nm && !bd[6][this.w * 7] && !bd[5][this.w * 7] && !bd[4][this.w * 7]) {
            pm.push ({ x: 5, y: this.w * 7, k: -1, r: 1, u: this.w });
          }
        }
      
    
      return pm;
  
    }
  
  }
  
  
  function points (bd, bb = false) {
    
    let wp = 0, bp = 0;
    
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        
        if (bd[i][j])
          if (bd[i][j].w) {
            
            wp += bd[i][j].P + (bd[i][j].pmoves (b.b)).length / 1000 + 0.07 - bd[i][j].y / 100 + (bd[i][j].P == 1 && bd[i][j].y  == 0 ? 8 : 0);
            
          }
          else {
            bp += bd[i][j].P + (bd[i][j].pmoves (b.b)).length / 1000 + bd[i][j].y / 100 + (bd[i][j].P == 1 && bd[i][j].y  == 7 ? 8 : 0);
          }
      
      }
    }
    
    if (!bb)
      return { w: wp, b: bp };
      
      
    push ();
    if (wp < 1000 || bp < 1000) {
      strokeWeight (6);
      fill (150, 130, 73);
      rectMode (CENTER);
      rect (width / 2, height / 2 - 15, width - 30, 140);
      
    }
    
    if (wp < 1000) {
      textAlign (CENTER);
      textSize (55);
      fill ('black');
      strokeWeight (2);
      text ("Black pieces won", width / 2, height / 2);
      gameO = true;
    } 
    if (bp < 1000) {
      textAlign (CENTER);
      textSize (55);
      fill ('white');
      strokeWeight (2);
      text ("White pieces won", width / 2, height / 2);
      gameO = true;
    }
    pop ();
    
    return { w: wp, b: bp };
    
  }
  
  
  function cPs () {
    
    //for (let i = 0;
    
    
    
    
  }
  
  
  
  
  
  
  
  
  
  
  
  