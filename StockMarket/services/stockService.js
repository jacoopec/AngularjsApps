angular.module('stockApp').factory('StockService', function($http) {
  const BASE_URL = 'http://localhost:3000';

  return {
    getStockTable: function(symbol) {
      return $http.get(`${BASE_URL}/stocks/${symbol.toUpperCase()}`)
                  .then(response => response.data)
                  .catch(() => []);
    },

    getStockHistory: function(symbol) {
      return $http.get(`${BASE_URL}/data/${symbol.toUpperCase()}`)
                  .then(response => response.data)
                  .catch(() => []);
    }
  };
});
