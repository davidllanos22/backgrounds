export class Background{
  constructor(){
    this.cvs = document.createElement("canvas");
    this.ctx = this.cvs.getContext("2d");
    this.cvs.style.width = "100%";
    this.cvs.style.height = "100%";

    document.body.appendChild(this.cvs);

    const resizeObserver = new ResizeObserver((entries) => {
      this.cvs.width = this.cvs.clientWidth;
      this.cvs.height = this.cvs.clientHeight;

      this.resize();
    });

    this.init();

    resizeObserver.observe(this.cvs);
  }

  init(){

  }

  resize(){

  }

  draw(){

  }

  update(){
    
  }
  
  fillRect(x, y, w, h, color){
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, w, h);
  }
}  