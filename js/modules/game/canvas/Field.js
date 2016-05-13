import GameObject from './GameObject';
import Cell from './Cell';

export default class Field extends GameObject {
  constructor(config) {
    super(config);
    this.fieldMap = {
      horizontal: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
      vertical: [1, 2, 3, 4, 5, 6, 7, 8]
    };

    this.cells = [];

    const cellSize = this.fieldSize / 8;

    this.fieldMap.horizontal.forEach((horVal, x) => {
      this.fieldMap.vertical.forEach((verVal, y) => {
        this.cells.push(
            new Cell({
              world: this.world,
              ctx: this.ctx,
              x: x * cellSize,
              y: y * cellSize,
              width: cellSize,
              height: cellSize,
              name: horVal + verVal,
              indexX: x,
              indexY: y,
              horVal,
              verVal
            })
        );
      });
    });
  }
}
