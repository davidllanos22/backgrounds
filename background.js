export class Background{
  constructor(){
    this.mousePosition = {x: 0, y: 0};
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

    this.cvs.onmousemove = (event)=>{
      this.mousePosition = {
        x: event.clientX,
        y: event.clientY
      }
    };

    requestAnimationFrame(this._draw.bind(this));
  }

  init(){

  }

  resize(){

  }

  draw(){
    
  }

  _draw(){
    this.draw();
    requestAnimationFrame(this._draw.bind(this));
  }
  
  fillRect(x, y, w, h, color){
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, w, h);
  }

  fillCircle(x, y, r, color){
    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    this.ctx.arc(x, y, r, 0, 2 * Math.PI);
    this.ctx.fill();
  }
}  