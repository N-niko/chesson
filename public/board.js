class Board { 
  
    constructor () {
      this.c = [];
      this.b = [];
      
      for (let i = 0; i < 8; i++) {
        this.b[i] = [];
        for (let j = 0; j < 8; j++) {
          this.b[i][j] = 0;
        }
      }
      
      for (let i = 0; i < 64; i++) {
        if ((i + floor (i / 8)) % 2)
          this.c.push (0);
        else 
          this.c.push (1);
          
      }
      
      
    }
    
    showb () {
      
      for (let i = 0; i < 64; i++) {
        
        if (lastm && ((lastm.x == i % 8 && lastm.y == floor (i / 8)) || (lastm.x2 == i % 8 && lastm.y2 == floor (i / 8))))
          fill (200, 200, 100);
        else if (this.c[i])
          fill (210, 180, 133);
        else 
          fill (66, 41, 23);
        rect (i % 8 * l, floor (i / 8) * l, l, l);
        
      }
      
    }
    
    showp () {
      
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          if (this.b[i][j])
            this.b[i][j].show ();
          
        }
      }
      
    }
    
    
  }
  
  
  
  let clr = 0;
  function fillBoard () {
    
    clr = 0//floor (random (2));
    
    // Pawns
    for (let i = 0; i < 8; i++) { 
      b.b[i][1] = new Pawn (i, 1, 0, clr);
      b.b[i][6] = new Pawn (i, 6, 1, !clr);    
    }
  
    // Knighs
    b.b[1][0] = new Knight (1, 0, 0, clr);
    b.b[6][0] = new Knight (6, 0, 0, clr); 
    b.b[1][7] = new Knight (1, 7, 1, !clr);
    b.b[6][7] = new Knight (6, 7, 1, !clr);  
    
    // Bishops
    b.b[2][0] = new Bishop (2, 0, 0, clr);
    b.b[5][0] = new Bishop (5, 0, 0, clr); 
    b.b[2][7] = new Bishop (2, 7, 1, !clr);
    b.b[5][7] = new Bishop (5, 7, 1, !clr); 
    
    // Rooks
    b.b[0][0] = new Rook (0, 0, 0, clr);
    b.b[7][0] = new Rook (7, 0, 0, clr); 
    b.b[0][7] = new Rook (0, 7, 1, !clr);
    b.b[7][7] = new Rook (7, 7, 1, !clr); 
    
    //Queens
    b.b[3 + clr][0] = new Queen (3 + clr, 0, 0, clr);
    b.b[3 + clr][7] = new Queen (3 + clr, 7, 1, !clr); 
    
    // Kings
    b.b[4 - clr][0] = new King (4 - clr, 0, 0, clr);
    b.b[4 - clr][7] = new King (4 - clr, 7, 1, !clr);
  
    
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  