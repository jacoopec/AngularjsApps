angular.module('stockApp').controller('MainController', function($location) {
  this.indexes = ['NASDAQ', 'DOWJONES', 'SP500'];

  this.selectIndex = function(symbol) {
    $location.path('/index/' + symbol);
  };
});
