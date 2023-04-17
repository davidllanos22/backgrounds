import { Background } from "../background.js";

class StarsBackground extends Background{
  init(){
    this.stars = [];
    let centerX = this.cvs.width / 2;
    let centerY = this.cvs.height / 2;

    for(let i = 0; i < 1000; i++){
      let x = Math.random() * this.cvs.width * 2 - centerX;
      let y = Math.random() * this.cvs.height * 2 - centerY;
      let r = Math.random() * 1 + 0.1;
      this.stars.push({x, y, r});
    }
  }

  resize(){
    this.init();
  }

  draw(){
    let centerX = this.cvs.width / 2;
    let centerY = this.cvs.height / 2;

    this.fillRect(0, 0, this.cvs.width, this.cvs.height, "black");
    this.ctx.save();
    this.ctx.translate(-this.mousePosition.x / 5, -this.mousePosition.y / 5)

    this.stars.forEach((star)=>{
      this.fillCircle(star.x, star.y, star.r, "white");
    });

    this.ctx.restore();
  }
}

new StarsBackground();