angular.module('stockApp').component('stockGraph', {
  bindings: { history: '<' },
  template: `<canvas id="stockChart" width="600" height="300"></canvas>`,
  controller: function ($element, $scope) {
    let chart = null;
    const ctrl = this;

    ctrl.$postLink = function () {
      const ctx = $element[0].querySelector('#stockChart').getContext('2d');
      chart = new Chart(ctx, createChartConfig(ctrl.history));
    };

    ctrl.$onChanges = function (changes) {
      if (chart && changes.history && !changes.history.isFirstChange()) {
        chart.data = createChartConfig(ctrl.history).data;
        chart.update();
      }
    };

function createChartConfig(data) {
  if (!Array.isArray(data)) {
    console.warn('Expected an array, got:', data);
    return {
      type: 'line',
      data: { labels: [], datasets: [] },
      options: {}
    };
  }

  return {
    type: 'line',
    data: {
      labels: data.map(point => point.time),
      datasets: [{
        label: 'Index Value',
        data: data.map(point => point.value),
        fill: false,
        borderColor: 'blue',
        tension: 0.1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true }
      },
      scales: {
        x: { title: { display: true, text: 'Time' }},
        y: { title: { display: true, text: 'Value' }}
      }
    }
  };
}

  }
});