angular.module('stockApp').component('stockTable', {
  bindings: { data: '<',index: '<' },
  template: `
    <table>
      <thead>
        <tr><th>Symbol</th><th>Price</th><th>Change</th></tr>
      </thead>
      <tbody>
        <tr ng-repeat="stock in $ctrl.data">
          <td>{{index}}</td>
          <td>{{stock.value}}</td>
          <td ng-class="{'positive': stock.change >= 0, 'negative': stock.change < 0}">
            {{stock.change}}%
          </td>
        </tr>
      </tbody>
    </table>
  `
});
