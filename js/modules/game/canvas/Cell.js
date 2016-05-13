import GameObject from './GameObject';

export default class Cell extends GameObject {
  constructor(config) {
    super(config);
    this.world.addObject(this);
    this.draw();
  }

  draw() {
    this.ctx.clearRect(this.x, this.y, this.width, this.height);
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, this.width, this.height);
    this.ctx.fillStyle = (this.indexX % 2 == 1 && this.indexY % 2 == 0) || (this.indexX % 2 == 0 && this.indexY % 2 == 1) ? '#A1887F' : '#E0E0E0';
    this.ctx.fill();
  }

  onClick(x, y) {
    super.onClick(x, y);
    this.draw();
    this.ctx.strokeStyle = '#0277BD';
    this.ctx.lineWidth = 2;
    this.ctx.stroke();
    this.world.broadcast('cellClick', this);
  }
}
