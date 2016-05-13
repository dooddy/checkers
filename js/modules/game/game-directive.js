import GameWorld from './canvas/GameWorld';

const directive = ['rootRef', function(rootRef) {
  return {
    restrict: 'E',
    controller: ['$scope', ($scope) => {
      const arr = [10, 15];
    }],
    link: (scope, element, attrs) => {
      const gameWorld = new GameWorld(element);

      gameWorld.addListener('cellClick', (cell) => {
        console.log('I GOT CELL');
        console.log(cell);
      });
    }
  };
}];

export default directive;
