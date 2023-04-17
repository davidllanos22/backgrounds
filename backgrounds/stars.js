import { Background } from "../background.js";

class StarsBackground extends Background{
  resize(){
    this.fillRect(0, 0, this.cvs.width, this.cvs.height, "black");
    
    for(let i = 0; i < 100; i++){
      let x = Math.random() * this.cvs.width;
      let y = Math.random() * this.cvs.height;
  
      this.fillRect(x, y, 1, 1, "white");
    }
  }
}

new StarsBackground();