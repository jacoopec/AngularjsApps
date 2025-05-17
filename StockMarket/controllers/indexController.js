angular.module('stockApp').controller('IndexController', function($routeParams, StockService) {
  const ctrl = this;

  ctrl.symbol = $routeParams.symbol;
  ctrl.stocks = [];
  ctrl.history = [];

  // Fetch stock table data
  StockService.getStockTable(ctrl.symbol).then(function(data) {
    ctrl.stocks = data;
  });

  // Fetch history data
  StockService.getStockHistory(ctrl.symbol).then(function(data) {
    ctrl.history = data;
  });
});
