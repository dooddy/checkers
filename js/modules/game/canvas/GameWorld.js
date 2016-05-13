import GameObject from './GameObject';
import Field from './Field';

export default class GameWorld {
  constructor(el) {
    this.world = this;
    this.el = el;
    this.canvas = document.createElement('canvas');
    this.canvas.width = this.canvas.height = 400;
    this.ctx = this.canvas.getContext('2d');
    this.el.append(this.canvas);

    this.objects = [];
    this.listeners = [];

    this.addObject(
        new Field({
          world: this.world,
          ctx: this.ctx,
          fieldSize: 400
        })
    );

    this.el.on('click', (e) => {
      const x = e.offsetX;
      const y = e.offsetY;
      var activeObject;
      this.objects.forEach(object => {
        if (!object.draw) {
          return;
        }
        object.draw();

        if (x > object.x && x < object.x + object.width && y > object.y && y < object.y + object.height) {
          activeObject = object;
        }
      });
      if (activeObject && activeObject.onClick) {
        activeObject.onClick();
      }
    });
  }

  addObject(object) {
    if (object instanceof GameObject) {
      this.objects.push(object);
    }
  }

  addListener(type, handler) {
    this.listeners.push({type, handler});
  }

  broadcast(type, obj) {
    this.listeners.forEach(listener => {
      if (listener.type == type) {
        listener.handler(obj);
      }
    });
  }
}
