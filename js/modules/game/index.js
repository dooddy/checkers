import directive from './game-directive';

const game = angular.module('checkers.game', [])
    .directive('game', directive);

export default game;
