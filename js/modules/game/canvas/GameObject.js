export default class GameObject {
  constructor(config) {
    this.active = false;
    Object.keys(config).map(key => {
      this[key] = config[key];
    });
  }

  onClick(x, y) {
    this.toggle();
  }

  toggle() {
    this.active = !this.active;
  }
}
